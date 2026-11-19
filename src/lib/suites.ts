import type { SuiteCategory } from '@/lib/siteData';

export type Suite = {
  name: string;
  categoryId: SuiteCategory['id'];
  description: string;
  images: string[];
  size: string;
  bed: string;
  view: string;
  guests: string;
};

const normalize = (value: string): string =>
  value.toLowerCase().replace(/[^a-z0-9]/g, '');

const numberFromPath = (path: string): number => {
  const match = path.match(/(\d+)\.[a-z0-9]+$/i);
  return match ? parseInt(match[1], 10) : 0;
};

const suiteKeyFromFilename = (path: string): string => {
  const filename = path.split('/').pop() ?? path;
  const base = filename.replace(/\.[a-z0-9]+$/i, '').replace(/[-_\s]?\d+$/, '');
  return normalize(base);
};

const suiteImageModules = import.meta.glob(
  '../assets/suites/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const discoveredBySuiteKey = Object.entries(suiteImageModules)
  .sort(([a], [b]) => numberFromPath(a) - numberFromPath(b))
  .reduce<Record<string, string[]>>((acc, [path, url]) => {
    const key = suiteKeyFromFilename(path);
    if (!key) return acc;
    (acc[key] ??= []).push(url);
    return acc;
  }, {});

const suiteEntries: Omit<Suite, 'images'>[] = [
  // I. Deluxe Suites
  {
    name: 'Jasmin',
    categoryId: 'deluxe',
    description: 'A bright Deluxe suite with soft linens, sun-bleached wood accents, and calm views over the water.',
    size: '36 m²',
    bed: 'King Bed',
    view: 'Sea View Balcony',
    guests: '2 Guests',
  },
  {
    name: 'Lotus',
    categoryId: 'deluxe',
    description: 'A serene Deluxe suite with warm Mediterranean textures, ambient bedside lighting, and a relaxed seating area.',
    size: '38 m²',
    bed: 'King Bed',
    view: 'Ionian Sea View',
    guests: '2 Guests',
  },
  {
    name: 'SunBeam',
    categoryId: 'deluxe',
    description: 'A sunlit Deluxe suite positioned to catch the morning radiance, designed for slow mornings by the window.',
    size: '35 m²',
    bed: 'King Bed',
    view: 'Sunset Facing',
    guests: '2 Guests',
  },
  {
    name: 'Sand',
    categoryId: 'deluxe',
    description: 'A natural-toned Deluxe suite with artisanal ceramic details, plush armchairs, and generous living space.',
    size: '38 m²',
    bed: 'King Bed',
    view: 'Panoramic Coastline',
    guests: '2 Guests',
  },

  // II. Senior Suites
  {
    name: 'Coral',
    categoryId: 'senior',
    description: 'A generous Senior suite featuring an expansive living lounge, curated Greek artwork, and a private stone balcony.',
    size: '46 m²',
    bed: 'King Bed & Daybed',
    view: 'Private Sea View Terrace',
    guests: '2–3 Guests',
  },
  {
    name: 'Pearl',
    categoryId: 'senior',
    description: 'An elegant Senior suite bathed in soft natural light with a dedicated dressing area and deep sea panorama.',
    size: '48 m²',
    bed: 'King Bed & Daybed',
    view: 'Panoramic Bay View',
    guests: '2–3 Guests',
  },
  {
    name: 'Waves',
    categoryId: 'senior',
    description: 'A coastal Senior suite where the rhythm of the waves is never far, offering abundant room to unwind in silence.',
    size: '45 m²',
    bed: 'King Bed',
    view: 'Unobstructed Horizon',
    guests: '2 Guests',
  },
  {
    name: 'Shell',
    categoryId: 'senior',
    description: 'A calm Senior suite featuring a separate sitting salon, limestone bathroom, and sheltered private outlook.',
    size: '44 m²',
    bed: 'King Bed & Lounge',
    view: 'Coastline & Pool Outlook',
    guests: '2–3 Guests',
  },
  {
    name: 'Anemone',
    categoryId: 'senior',
    description: 'Our most spacious Senior suite, offering refined interiors, a freestanding reading sofa, and a restful atmosphere.',
    size: '50 m²',
    bed: 'Super King Bed',
    view: 'Private Veranda & Sea',
    guests: '2–3 Guests',
  },

  // III. Superior Suites
  {
    name: 'Flower',
    categoryId: 'superior',
    description: 'A Superior suite with scented garden breezes, refined interior styling, and glimpses of the sparkling sea.',
    size: '32 m²',
    bed: 'Queen Bed',
    view: 'Lush Garden & Sea Glance',
    guests: '2 Guests',
  },
  {
    name: 'Grapes',
    categoryId: 'superior',
    description: 'A Superior suite with warm terracotta tones, custom oak cabinetry, and an open view across the hotel grounds.',
    size: '34 m²',
    bed: 'Queen Bed',
    view: 'Estate & Hillside Outlook',
    guests: '2 Guests',
  },
  {
    name: 'Water Lily',
    categoryId: 'superior',
    description: 'A tranquil Superior suite overlooking the turquoise infinity pool, ideal for leisurely afternoons and quick dips.',
    size: '35 m²',
    bed: 'King Bed',
    view: 'Infinity Pool & Sea View',
    guests: '2 Guests',
  },
  {
    name: 'Poppy',
    categoryId: 'superior',
    description: 'A cheerful Superior suite with bright morning light, woven fiber lamps, and a comfortable reading corner.',
    size: '32 m²',
    bed: 'Queen Bed',
    view: 'Morning Sun & Garden Terrace',
    guests: '2 Guests',
  },
  {
    name: 'Pebbles',
    categoryId: 'superior',
    description: 'A grounded Superior suite close to the olive trees, offering quiet and understated Mediterranean elegance.',
    size: '33 m²',
    bed: 'Queen Bed',
    view: 'Serene Olive Grove & Bay',
    guests: '2 Guests',
  },

  // IV. Honeymoon Suites
  {
    name: 'Branches',
    categoryId: 'honeymoon',
    description: 'An intimate honeymoon suite with candlelit alcoves, champagne bar, and breathtaking golden hour sunset views.',
    size: '42 m²',
    bed: 'Grand King Bed',
    view: 'Golden Hour Sunset Balcony',
    guests: '2 Guests',
  },
  {
    name: 'Stars',
    categoryId: 'honeymoon',
    description: 'A romantic honeymoon sanctuary featuring an open-concept layout and an unhindered starlit Ionian night panorama.',
    size: '45 m²',
    bed: 'Grand King Bed',
    view: 'Starlit Ionian Panorama',
    guests: '2 Guests',
  },
  {
    name: 'Olive',
    categoryId: 'honeymoon',
    description: 'A secluded honeymoon suite enveloped by private greenery, featuring an intimate terrace designed for two.',
    size: '40 m²',
    bed: 'Grand King Bed',
    view: 'Private Secluded Sea Veranda',
    guests: '2 Guests',
  },
];

export const suites: Suite[] = suiteEntries.map((entry) => ({
  ...entry,
  images: discoveredBySuiteKey[normalize(entry.name)] ?? [],
}));

export const suitesInCategory = (categoryId: string) =>
  suites.filter((suite) => suite.categoryId === categoryId);
