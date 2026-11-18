import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { testimonials } from '@/lib/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="accolades" className="relative overflow-hidden bg-sand-50 py-24 lg:py-32">
      {/* Subtle background decorative watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.03]">
        <Quote className="h-96 w-96 text-ink-900" aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Guest Accolades</p>
          <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Reflections from Our Guests</h2>
          <p className="mt-4 text-base italic text-gold-600">
            Unfiltered memories from travelers who found tranquility in our corner of Parga.
          </p>
        </Reveal>

        <Reveal delay={150} className="relative mt-16">
          <div className="relative mx-auto max-w-3xl rounded-3xl border border-sand-200/80 bg-white p-8 shadow-xl sm:p-14">
            {/* Stars / Laurel indicator */}
            <div className="flex items-center justify-center gap-1.5" aria-label="5 out of 5 stars rating">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" aria-hidden="true" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <blockquote className="mt-8 text-center">
              <p
                key={current.id}
                className="font-serif text-2xl font-normal italic leading-relaxed text-ink-900 sm:text-3xl"
              >
                “{current.quote}”
              </p>
            </blockquote>

            {/* Guest Details */}
            <div className="mt-8 flex flex-col items-center justify-center text-center">
              <cite className="not-italic font-semibold text-ink-900 text-base tracking-wide">
                {current.author}
              </cite>
              <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-xs text-ink-700">
                <span>{current.location}</span>
                <span className="text-sand-400">•</span>
                <span className="rounded-full bg-sand-100 px-2.5 py-0.5 font-medium text-gold-700">
                  {current.stayType}
                </span>
                <span className="text-sand-400">•</span>
                <span className="text-emerald-700 font-medium">Verified Stay</span>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="mt-10 flex items-center justify-between border-t border-sand-200 pt-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-ink-800 transition-colors hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((t, idx) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Jump to quote ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-sand-300 hover:bg-sand-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-300 text-ink-800 transition-colors hover:border-gold-500 hover:bg-gold-50 hover:text-gold-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
