import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { galleryFilters, galleryItems } from '@/lib/siteData';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter)),
    [filter],
  );

  const current = openIndex !== null ? items[openIndex] : null;
  const total = items.length;

  const step = (direction: 1 | -1) =>
    setOpenIndex((index) => (index === null ? index : (index + direction + total) % total));

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
      if (event.key === 'ArrowRight') setOpenIndex((index) => (index === null ? index : (index + 1) % total));
      if (event.key === 'ArrowLeft') setOpenIndex((index) => (index === null ? index : (index - 1 + total) % total));
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, total]);

  return (
    <section id="gallery" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Gallery</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Gallery</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Suites, sea views, sunsets, and moments from the Irida Hotel grounds.
          </p>
        </Reveal>

        <div role="tablist" aria-label="Filter gallery" className="mt-10 flex flex-wrap justify-center gap-3">
          {galleryFilters.map((label) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={filter === label}
              onClick={() => {
                setFilter(label);
                setOpenIndex(null);
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === label
                  ? 'bg-ink-900 text-white shadow-md'
                  : 'bg-white text-ink-800 hover:bg-sand-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative mb-5 block w-full overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink-900/80 to-transparent p-4 text-left text-sm text-white transition-transform duration-500 group-hover:translate-y-0">
                {item.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-900/90 p-4"
          onClick={() => setOpenIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close photo"
            className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure onClick={(event) => event.stopPropagation()} className="max-w-5xl">
            <img src={current.src} alt={current.alt} className="max-h-[80vh] w-auto rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-white/80">{current.alt}</figcaption>
          </figure>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
