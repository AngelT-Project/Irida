import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { photos } from '@/lib/siteData';

const highlights = [
  'Elegant boutique hotel with personal, attentive service',
  'Stylish Mediterranean design shaped by the Ionian coast',
  'A tranquil atmosphere for couples and luxury travelers',
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={photos.welcome[0]}
              alt="Irida Hotel resort at dusk with palm trees and the sea"
              loading="lazy"
              className="col-span-2 h-72 w-full rounded-2xl object-cover shadow-lg sm:h-96"
            />
            <img
              src={photos.welcome[2]}
              alt="Elegant suite interior at Irida Hotel"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-md"
            />
            <img
              src={photos.welcome[3]}
              alt="Warm, stylish hotel room with soft lighting"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">About the Hotel</p>
          <h2 className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">Welcome to Irida Hotel</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Set on the Ionian coast of Parga, Irida Hotel is an elegant boutique retreat where personal service
            meets a stylish Mediterranean sensibility. Every detail is designed to slow you down: warm light,
            natural materials, and a quiet rhythm that suits couples and discerning travelers alike.
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
