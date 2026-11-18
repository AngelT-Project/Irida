import { useEffect, useState } from 'react';
import { Menu, Phone, Waves, X } from 'lucide-react';
import { hotelContact, navLinks } from '@/lib/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'rooms', 'experiences', 'gallery', 'location', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 160;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  const solid = scrolled || open;
  const textClass = solid ? 'text-ink-900' : 'text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-sand-50/95 shadow-nav backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className={`flex items-center gap-2 font-serif text-2xl font-semibold transition-colors ${textClass}`}>
          <Waves className="h-6 w-6 text-gold-500" aria-hidden="true" />
          Irida Hotel
        </a>

        {/* Desktop Navigation with Active Section Indicator */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-1 text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? 'font-semibold text-gold-600'
                      : `font-medium hover:text-gold-500 ${textClass}`
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gold-500 animate-fade-up" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Call-to-action & Direct Phone */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={hotelContact.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500 ${textClass}`}
          >
            <Phone className="h-4 w-4 text-gold-500" aria-hidden="true" />
            {hotelContact.phone}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
          >
            Book Your Stay
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className={`rounded-full p-2 lg:hidden transition-colors ${textClass}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="border-t border-sand-200 bg-sand-50 px-6 pb-8 pt-4 shadow-nav lg:hidden animate-fade-up [animation-duration:300ms]">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-sand-200 text-gold-700 font-semibold'
                        : 'text-ink-800 hover:bg-sand-100 hover:text-gold-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 pt-4 border-t border-sand-200 flex flex-col gap-3">
            <a
              href={hotelContact.phoneHref}
              className="flex items-center justify-center gap-2 text-sm font-medium text-ink-800 hover:text-gold-600 py-2"
            >
              <Phone className="h-4 w-4 text-gold-500" />
              {hotelContact.phone}
            </a>
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-md transition-all hover:bg-gold-600"
            >
              Book Your Stay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
