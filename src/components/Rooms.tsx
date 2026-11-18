import { useState } from 'react';
import { ArrowRight, BedDouble, Eye, Images, Maximize2 } from 'lucide-react';
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
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Accommodations</p>
          <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Our Rooms and Suites</h2>
          <p className="mt-4 text-base italic text-gold-600">
            Browse our four curated collections, explore full suite details with photos, and choose your private sanctuary.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Seventeen suites thoughtfully designed across four distinct categories. Click any suite to view photography, amenities, and reserve your stay.
          </p>
        </Reveal>

        {suiteCategories.map((category) => {
          const categorySuites = suitesInCategory(category.id);
          return (
            <div key={category.id} className="mt-20 first:mt-16">
              <Reveal className="flex flex-col gap-4 border-b border-sand-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-2xl font-bold tracking-widest text-gold-600 sm:text-3xl">
                      {category.roman}
                    </span>
                    <h3 className="font-serif text-3xl font-medium text-ink-900">{category.title}</h3>
                  </div>
                  <p className="mt-2 max-w-2xl leading-relaxed text-ink-700">{category.summary}</p>
                  {/* Suite names listed under the group so visitors can browse them easily */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-700">Suites in this collection:</span>
                    {categorySuites.map((s) => (
                      <span
                        key={s.name}
                        className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-800 shadow-sm"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="self-start text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 sm:self-end">
                  {categorySuites.length} suites
                </span>
              </Reveal>

              <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {categorySuites.map((suite, index) => (
                  <Reveal key={suite.name} delay={index * 80}>
                    <button
                      type="button"
                      onClick={() => setActive({ suite, category })}
                      aria-label={`View photos and details for ${suite.name} Suite`}
                      className="group flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white text-left shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={suite.images[0]}
                          alt={`${suite.name} Suite interior`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-ink-900 shadow-sm backdrop-blur-sm">
                          <Images className="h-3.5 w-3.5 text-gold-600" aria-hidden="true" />
                          {suite.images.length} photos
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-7">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif text-2xl font-medium text-ink-900">{suite.name}</h4>
                          <span className="text-xs uppercase tracking-wider text-gold-600">{category.title.replace(' Suites', '')}</span>
                        </div>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{suite.description}</p>

                        {/* Quick-Specs Chips */}
                        <div className="mt-4 flex flex-wrap items-center gap-1.5">
                          <span className="inline-flex items-center gap-1 rounded-full bg-sand-100 px-2.5 py-1 text-[11px] font-medium text-ink-800">
                            <Maximize2 className="h-3 w-3 text-gold-600" aria-hidden="true" />
                            {suite.size}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-sand-100 px-2.5 py-1 text-[11px] font-medium text-ink-800">
                            <BedDouble className="h-3 w-3 text-gold-600" aria-hidden="true" />
                            {suite.bed}
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-full bg-sand-100 px-2.5 py-1 text-[11px] font-medium text-ink-800">
                            <Eye className="h-3 w-3 text-gold-600" aria-hidden="true" />
                            {suite.view}
                          </span>
                        </div>

                        <div className="mt-6 flex items-center justify-between border-t border-sand-200 pt-4">
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-colors group-hover:text-gold-500">
                            View Suite Details
                            <ArrowRight
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
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
