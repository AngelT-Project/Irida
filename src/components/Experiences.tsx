import Reveal from '@/components/Reveal';
import { experiences, photos } from '@/lib/siteData';

const localStories = [
  {
    eyebrow: 'Coastal Exploration',
    title: 'Crystal Coves & Turquoise Waters',
    text: 'Discover secluded swimming spots and pristine pebble coves along the Ionian shoreline, just moments from the hotel grounds.',
    image: photos.beach[1],
  },
  {
    eyebrow: 'Local Culture',
    title: 'Parga Old Town & Harbor Traditions',
    text: 'Stroll cobblestone alleys framed by Venetian architecture, enjoy evening aperitifs by the harbor, and savor authentic Epirotic flavors.',
    image: photos.dining[0],
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Life at Irida Hotel</p>
          <h2 className="mt-4 font-serif text-4xl font-medium sm:text-5xl">Experiences &amp; Surroundings</h2>
          <p className="mt-4 text-base italic text-gold-600">
            Envision slow mornings by the infinity pool, fresh sea-view dining, and unforgettable days along the Ionian shore.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Every moment at Irida Hotel is crafted to celebrate coastal living. Enjoy peaceful poolside afternoons, direct coastal access, and bespoke excursions arranged by our concierge.
          </p>
        </Reveal>

        {/* Core Hotel Experiences */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="group relative h-96 overflow-hidden rounded-3xl shadow-md transition-all duration-500 hover:shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-serif text-3xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/90">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Local Adventures & Surroundings */}
        <div className="mt-20 space-y-8">
          <Reveal className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">Beyond the Hotel</p>
            <h3 className="mt-2 font-serif text-3xl font-medium sm:text-4xl text-ink-900">Discovering Parga</h3>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {localStories.map((story, index) => (
              <Reveal key={story.title} delay={index * 120}>
                <div className="overflow-hidden rounded-3xl bg-sand-100 shadow-md transition-all duration-500 hover:shadow-lg">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold-600">{story.eyebrow}</p>
                    <h4 className="mt-2 font-serif text-2xl font-medium text-ink-900">{story.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700">{story.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
