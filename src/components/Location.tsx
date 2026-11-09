import { MapPin, Navigation } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { hotelContact } from '@/lib/siteData';

const nearby = [
  'Beaches and turquoise coves within a short drive',
  'The old town and waterfront of Parga',
  'Boat excursions along the Ionian coastline',
];

export default function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
        <Reveal className="lg:col-span-2">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Location</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">Find Us in Parga, Greece</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Irida Hotel sits in the heart of Parga, a picturesque seaside town on the Epirus coast, close to its
            beaches, sights, and waterfront dining.
          </p>
          <ul className="mt-8 space-y-3">
            {nearby.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-800">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={hotelContact.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-900 px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-lg"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-sand-200 shadow-lg">
            <iframe
              title="Irida Hotel location on map"
              src={hotelContact.mapEmbed}
              className="h-[26rem] w-full border-0 lg:h-[30rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
