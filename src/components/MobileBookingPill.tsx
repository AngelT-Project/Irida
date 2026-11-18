import { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';

export default function MobileBookingPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 flex justify-center px-4 lg:hidden pointer-events-none">
      <a
        href="#booking"
        className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full border border-gold-400/40 bg-ink-900/90 px-6 py-3.5 text-sm font-semibold text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-ink-900 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 animate-fade-up [animation-duration:350ms]"
        aria-label="Reserve your stay at Irida Hotel"
      >
        <CalendarDays className="h-4 w-4 text-gold-400" aria-hidden="true" />
        <span className="tracking-wide">Reserve Your Stay</span>
        <ArrowRight className="h-4 w-4 text-gold-400" aria-hidden="true" />
      </a>
    </div>
  );
}
