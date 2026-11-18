import { ArrowRight, Sparkles } from 'lucide-react';
import ClimateBadge from '@/components/ClimateBadge';
import { photos } from '@/lib/siteData';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* High-quality stock photography backdrop */}
      <img
        src={photos.hero}
        alt="Irida Hotel overlooking the turquoise Ionian Sea in Parga, Greece"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out"
      />

      {/* Soft darkening overlay for effortless readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/75 via-ink-900/45 to-ink-900/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center text-white">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
            Parga, Greece • Coastal Sanctuary
          </p>
        </div>

        <h1 className="animate-fade-up mt-7 font-serif text-5xl font-medium leading-[1.15] text-white [animation-delay:150ms] sm:text-6xl lg:text-7xl">
          Irida Hotel: Luxury and Serenity in Parga
        </h1>

        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 [animation-delay:300ms] sm:text-xl font-light">
          Experience Greek hospitality, refined comfort, and breathtaking views over the Ionian Sea.
        </p>

        {/* Live Parga Climate & Sunset Indicator */}
        <div className="animate-fade-up mt-8 flex justify-center [animation-delay:400ms]">
          <ClimateBadge />
        </div>

        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:500ms] sm:flex-row">
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-300"
          >
            Book Your Stay
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#rooms"
            className="rounded-full border border-white/60 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View Rooms &amp; Suites
          </a>
        </div>
      </div>
    </section>
  );
}
