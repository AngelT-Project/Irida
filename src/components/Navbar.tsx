import { useEffect, useState } from 'react';
import { Menu, Phone, Waves, X } from 'lucide-react';
import { hotelContact, navLinks } from '@/lib/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
        <a href="#home" className={`flex items-center gap-2 font-serif text-2xl font-semibold ${textClass}`}>
          <Waves className="h-6 w-6 text-gold-500" aria-hidden="true" />
          Irida Hotel
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${textClass}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={hotelContact.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-500 ${textClass}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {hotelContact.phone}
          </a>
          <a
            href="#booking"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gold-600 hover:shadow-md"
          >
            Book Your Stay
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`rounded-full p-2 lg:hidden ${textClass}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sand-200 bg-sand-50 px-6 pb-8 pt-4 shadow-nav lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-800 hover:bg-sand-100 hover:text-gold-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Book Your Stay
          </a>
        </div>
      )}
    </header>
  );
}
