import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { photos } from '@/lib/siteData';

const highlights = [
  'Boutique hospitality with personal, attentive care from our dedicated team',
  'Sunlit Mediterranean architecture framed by coastal views and natural textures',
  'A calm, unhurried atmosphere tailored for couples and discerning travelers',
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={photos.welcome[0]}
              alt="Irida Hotel grounds at dusk with palm trees and the sea"
              loading="lazy"
              className="col-span-2 h-72 w-full rounded-3xl object-cover shadow-lg transition-transform duration-700 hover:scale-[1.02] sm:h-96"
            />
            <img
              src={photos.welcome[2]}
              alt="Elegant suite interior at Irida Hotel"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-md transition-transform duration-700 hover:scale-[1.03]"
            />
            <img
              src={photos.welcome[3]}
              alt="Warm, stylish suite room with soft natural lighting"
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover shadow-md transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Welcome Story</p>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight sm:text-5xl">Welcome to Irida Hotel</h2>
          <p className="mt-4 text-base italic text-gold-600">
            Slow down, breathe the coastal air, and feel embraced by authentic Greek hospitality.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-700">
            Perched along the scenic coast of Parga, Irida Hotel is a serene boutique retreat where heartfelt
            service meets understated Mediterranean luxury. Every architectural touch is crafted for peace:
            soothing natural light, handpicked materials, and a gentle cadence that allows guests to fully unwind.
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-ink-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" aria-hidden="true" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
