import Reveal from '@/components/Reveal';
import { experiences } from '@/lib/siteData';

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Life at Irida Hotel</p>
          <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Experiences</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Slow mornings by the pool, a step onto the beach, and dinners that celebrate the Ionian table.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <article className="group relative h-96 overflow-hidden rounded-3xl shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-serif text-3xl font-medium text-white">{item.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-white/90">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
