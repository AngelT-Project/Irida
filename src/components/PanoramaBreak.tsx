import { Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { photos } from '@/lib/siteData';

export default function PanoramaBreak() {
  return (
    <section
      aria-label="Scenic Panorama Break"
      className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden sm:min-h-[440px] lg:min-h-[500px]"
    >
      {/* Full-bleed scenic Ionian coastline imagery */}
      <img
        src={photos.beach[1]}
        alt="Panoramic view of the azure Ionian Sea along the cliffs of Parga"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
      />

      {/* Atmospheric gradient overlay for contrast and depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/55 to-ink-900/80 backdrop-brightness-95" />

      {/* Subtle organic gold grain / vignette glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(210,176,106,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-20 text-center text-white">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
              Valtos Coastline • Ionian Horizon
            </span>
          </div>

          <blockquote className="mt-8">
            <p className="font-serif text-3xl font-light italic leading-snug text-white sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-gold-400 font-normal">“</span>Where the rhythm of the day is measured only by the light on the water.<span className="text-gold-400 font-normal">”</span>
            </p>
          </blockquote>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-400/60" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/80">Irida Boutique Atmosphere</span>
            <span className="h-px w-12 bg-gold-400/60" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
