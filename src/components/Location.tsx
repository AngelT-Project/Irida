import { MapPin, Navigation } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { hotelContact } from '@/lib/siteData';

const nearby = [
  'Emerald beaches and quiet swimming coves within 5–10 minutes',
  'Historic Parga Castle and colorful Venetian waterfront promenade',
  'Scenic boat day trips to Paxos, Antipaxos, and sea caves',
];

export default function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-5 lg:items-center">
        <Reveal className="lg:col-span-2">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Location &amp; Setting</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl text-ink-900">
            Find Us in Parga, Greece
          </h2>
          <p className="mt-4 text-base italic text-gold-600">
            Easily locate our coastal retreat, discover nearby sights, and plan your scenic journey.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Irida Hotel is quietly perched above Parga on Greece's northwestern Epirus coast. Enjoy tranquil sea
            breezes and sweeping Ionian horizons, all while staying minutes away from charming town squares, coastal
            cafés, and crystal-clear waters.
          </p>
          <ul className="mt-8 space-y-3">
            {nearby.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-800">
                <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold-500" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={hotelContact.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            <Navigation className="h-4 w-4 text-gold-400" aria-hidden="true" />
            Get Directions in Maps App
          </a>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-3">
          <div className="overflow-hidden rounded-3xl border border-sand-200 bg-sand-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
            <div className="p-4 border-b border-sand-200 flex items-center justify-between bg-white/70 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink-700">Interactive Location Map</span>
              <span className="text-xs text-gold-600 font-medium">Parga, Epirus, Greece</span>
            </div>
            <iframe
              title="Interactive map of Irida Hotel in Parga, Greece"
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
