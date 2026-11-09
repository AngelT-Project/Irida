import { photoUrl, type SuiteCategory } from '@/lib/siteData';

export type Suite = {
  name: string;
  categoryId: SuiteCategory['id'];
  description: string;
  images: string[];
  size?: string;
  guests?: string;
};

const placeholderPool = [
  '12652920', '26859049', '28054852', '27626174', '3688261', '7368344', '210604',
  '13813465', '34645131', '2725675', '24807130', '7722153', '6466496', '31817153',
  '29702285', '40624372', '8135526', '5461604', '19754222', '10890710', '34516518',
  '30767897', '6876828', '14025909', '26886816', '16113326',
].map(photoUrl);

const PLACEHOLDER_IMAGES_PER_SUITE = 4;

const placeholderImages = (suiteIndex: number) =>
  Array.from(
    { length: PLACEHOLDER_IMAGES_PER_SUITE },
    (_, offset) => placeholderPool[(suiteIndex * 3 + offset) % placeholderPool.length],
  );

const suiteEntries: Pick<Suite, 'name' | 'categoryId' | 'description'>[] = [
  { name: 'Jasmin', categoryId: 'deluxe', description: 'A bright Deluxe suite with soft linens and calm views over the water.' },
  { name: 'Lotus', categoryId: 'deluxe', description: 'A serene Deluxe suite with warm textures and a relaxed seating area.' },
  { name: 'SunBeam', categoryId: 'deluxe', description: 'A sunlit Deluxe suite designed for slow mornings by the window.' },
  { name: 'Sand', categoryId: 'deluxe', description: 'A natural-toned Deluxe suite with Mediterranean details and generous space.' },
  { name: 'Coral', categoryId: 'senior', description: 'A Senior suite with a generous living area and a private balcony.' },
  { name: 'Pearl', categoryId: 'senior', description: 'An elegant Senior suite with a comfortable lounge and soft natural light.' },
  { name: 'Waves', categoryId: 'senior', description: 'A Senior suite where the sea is never far, with room to unwind.' },
  { name: 'Shell', categoryId: 'senior', description: 'A calm Senior suite with a separate sitting area and private outlook.' },
  { name: 'Anemone', categoryId: 'senior', description: 'A spacious Senior suite with refined interiors and a restful atmosphere.' },
  { name: 'Flower', categoryId: 'superior', description: 'A Superior suite with garden views and refined, thoughtful interiors.' },
  { name: 'Grapes', categoryId: 'superior', description: 'A Superior suite with warm tones and a view across the hotel grounds.' },
  { name: 'Water Lily', categoryId: 'superior', description: 'A Superior suite overlooking the pool, ideal for a relaxed stay.' },
  { name: 'Poppy', categoryId: 'superior', description: 'A Superior suite with bright interiors and a comfortable reading corner.' },
  { name: 'Pebbles', categoryId: 'superior', description: 'A Superior suite close to the grounds, with calm and understated style.' },
  { name: 'Branches', categoryId: 'honeymoon', description: 'An intimate honeymoon suite with romantic lighting and sunset views.' },
  { name: 'Stars', categoryId: 'honeymoon', description: 'A romantic honeymoon suite with special touches for couples celebrating.' },
  { name: 'Olive', categoryId: 'honeymoon', description: 'A honeymoon suite with a private atmosphere and an inviting outdoor view.' },
];

export const suites: Suite[] = suiteEntries.map((entry, index) => ({
  ...entry,
  images: placeholderImages(index),
}));

export const suitesInCategory = (categoryId: string) =>
  suites.filter((suite) => suite.categoryId === categoryId);
