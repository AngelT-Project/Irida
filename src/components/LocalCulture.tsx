import Reveal from '@/components/Reveal';
import { photos } from '@/lib/siteData';

const stories = [
  {
    eyebrow: 'Beaches',
    title: 'Crystal Coves Within Reach',
    text: 'Discover turquoise bays and sandy shores along the Ionian coast, from quiet swimming spots to the famous shoreline near Parga.',
    image: photos.beach[1],
  },
  {
    eyebrow: 'Culture',
    title: 'Old Town Charm and Greek Traditions',
    text: 'Wander the colorful lanes of Parga, sip coffee on a waterfront terrace, and taste local dishes shaped by generations of island life.',
    image: photos.dining[0],
  },
];

export default function LocalCulture() {
  return (
    <section id="culture" className="space-y-6 pb-24 lg:pb-32">
      <Reveal className="mx-auto max-w-2xl px-6 pb-6 text-center lg:px-10">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">Local Adventures and Culture</p>
        <h2 className="mt-4 text-4xl font-medium sm:text-5xl">Beyond the Hotel Gates</h2>
      </Reveal>

      {stories.map((story, index) => (
        <div
          key={story.title}
          className={`relative mx-auto flex max-w-7xl flex-col overflow-hidden md:h-[32rem] md:flex-row ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <Reveal className="h-80 md:h-auto md:w-3/5">
            <img src={story.image} alt={story.title} loading="lazy" className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={150} className="flex flex-1 flex-col justify-center bg-sand-100 px-8 py-12 lg:px-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-600">{story.eyebrow}</p>
            <h3 className="mt-4 text-3xl font-medium sm:text-4xl">{story.title}</h3>
            <p className="mt-5 text-lg leading-relaxed text-ink-700">{story.text}</p>
          </Reveal>
        </div>
      ))}
    </section>
  );
}
