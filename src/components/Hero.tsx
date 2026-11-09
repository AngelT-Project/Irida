import { ArrowRight } from 'lucide-react';
import { photos } from '@/lib/siteData';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        poster={photos.hero}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/60 via-ink-900/40 to-ink-900/70" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.3em] text-gold-300">
          Parga, Greece
        </p>
        <h1 className="animate-fade-up mt-6 font-serif text-5xl font-medium leading-tight text-white [animation-delay:150ms] sm:text-6xl lg:text-7xl">
          Irida Hotel: Luxury and Serenity in Parga
        </h1>
        <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 [animation-delay:300ms] sm:text-xl">
          Experience Greek hospitality, refined comfort, and breathtaking views.
        </p>
        <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:450ms] sm:flex-row">
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gold-600"
          >
            Book Your Stay
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#rooms"
            className="rounded-full border border-white/70 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-ink-900"
          >
            View Rooms and Suites
          </a>
        </div>
      </div>
    </section>
  );
}
