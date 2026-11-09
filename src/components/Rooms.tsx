import { useState } from 'react';
import { ArrowRight, Images } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SuiteDialog from '@/components/SuiteDialog';
import { suiteCategories, type SuiteCategory } from '@/lib/siteData';
import { suitesInCategory, type Suite } from '@/lib/suites';

type RoomsProps = {
  onBookSuite: (suiteName: string) => void;
};

type ActiveSuite = {
  suite: Suite;
  category: SuiteCategory;
};

export default function Rooms({ onBookSuite }: RoomsProps) {
  const [active, setActive] = useState<ActiveSuite | null>(null);

  const handleBook = (suiteName: string) => {
    setActive(null);
    onBookSuite(suiteName);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" className="bg-sand-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Accommodation</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Our Rooms and Suites</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Seventeen suites in four distinct categories. Explore each one before you choose your stay.
          </p>
        </Reveal>

        {suiteCategories.map((category) => {
          const categorySuites = suitesInCategory(category.id);
          return (
            <div key={category.id} className="mt-20 first:mt-16">
              <Reveal className="flex flex-col gap-3 border-b border-sand-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-3xl font-medium">{category.title}</h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-700">{category.summary}</p>
                </div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
                  {categorySuites.length} suites
                </span>
              </Reveal>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {categorySuites.map((suite, index) => (
                  <Reveal key={suite.name} delay={index * 100}>
                    <button
                      type="button"
                      onClick={() => setActive({ suite, category })}
                      aria-label={`View ${suite.name} Suite`}
                      className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={suite.images[0]}
                          alt={`${suite.name} Suite`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-900">
                          <Images className="h-3.5 w-3.5" aria-hidden="true" />
                          {suite.images.length} photos
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <h4 className="font-serif text-2xl text-ink-900">{suite.name}</h4>
                        <p className="mt-3 flex-1 leading-relaxed text-ink-700">{suite.description}</p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
                          View Suite
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {active && (
        <SuiteDialog
          key={active.suite.name}
          suite={active.suite}
          category={active.category}
          onClose={() => setActive(null)}
          onBook={handleBook}
        />
      )}
    </section>
  );
}
