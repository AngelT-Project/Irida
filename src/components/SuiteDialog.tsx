import { useCallback, useEffect, useState, type TouchEvent } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { SuiteCategory } from '@/lib/siteData';
import type { Suite } from '@/lib/suites';

type SuiteDialogProps = {
  suite: Suite;
  category: SuiteCategory;
  onClose: () => void;
  onBook: (suiteName: string) => void;
};

const SWIPE_THRESHOLD_PX = 50;

export default function SuiteDialog({ suite, category, onClose, onBook }: SuiteDialogProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const total = suite.images.length;

  const showPrevious = useCallback(() => setActiveIndex((i) => (i - 1 + total) % total), [total]);
  const showNext = useCallback(() => setActiveIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, showPrevious, showNext]);

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX;
    setTouchStartX(null);
    if (delta <= -SWIPE_THRESHOLD_PX) showNext();
    if (delta >= SWIPE_THRESHOLD_PX) showPrevious();
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="suite-dialog-title"
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-sand-50 shadow-2xl animate-fade-up [animation-duration:500ms]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-ink-900 shadow transition-colors hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className="relative bg-ink-900"
          onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={suite.images[activeIndex]}
            src={suite.images[activeIndex]}
            alt={`${suite.name} suite photo ${activeIndex + 1} of ${total}`}
            className="h-72 w-full object-cover animate-fade-up [animation-duration:500ms] sm:h-96"
          />
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink-900 shadow transition-colors hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-ink-900 shadow transition-colors hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="absolute bottom-3 right-3 rounded-full bg-ink-900/70 px-3 py-1 text-xs font-semibold text-white">
            {activeIndex + 1} / {total}
          </span>
        </div>

        <div className="flex gap-3 overflow-x-auto px-6 pt-4">
          {suite.images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === activeIndex}
              className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                index === activeIndex ? 'border-gold-500' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <div className="p-6 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">{category.title}</p>
          <h3 id="suite-dialog-title" className="mt-3 font-serif text-3xl font-medium text-ink-900 sm:text-4xl">
            {suite.name} Suite
          </h3>
          <p className="mt-4 text-base leading-relaxed text-ink-700">{suite.description}</p>

          {(suite.size || suite.guests) && (
            <dl className="mt-8 grid gap-4 rounded-2xl border border-sand-200 bg-white p-5 text-sm sm:grid-cols-2">
              {suite.size && (
                <div>
                  <dt className="text-ink-700">Size</dt>
                  <dd className="mt-1 font-semibold text-ink-900">{suite.size}</dd>
                </div>
              )}
              {suite.guests && (
                <div>
                  <dt className="text-ink-700">Guests</dt>
                  <dd className="mt-1 font-semibold text-ink-900">{suite.guests}</dd>
                </div>
              )}
            </dl>
          )}

          <button
            type="button"
            onClick={() => onBook(suite.name)}
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-gold-600 sm:w-auto"
          >
            Book This Suite
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
