export const photoUrl = (id: string) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

const photo = photoUrl;

export const photos = {
  hero: photo('39675582'),
  welcome: [photo('15506116'), photo('37362685'), photo('8082217'), photo('6394550')],
  pool: [photo('2506988'), photo('10522678'), photo('5615795'), photo('261181')],
  beach: [photo('11898125'), photo('20142575'), photo('38714137'), photo('37654235')],
  dining: [photo('35850443'), photo('39737001'), photo('38149971')],
  couples: [photo('1024962'), photo('34260962'), photo('4997174')],
  rooms: [
    photo('8082217'),
    photo('3688261'),
    photo('39338473'),
    photo('40624417'),
    photo('7031731'),
    photo('6394550'),
  ],
};

export type SuiteCategory = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

export const suiteCategories: SuiteCategory[] = [
  {
    id: 'deluxe',
    title: 'Deluxe Suites',
    summary:
      'Spacious, light-filled suites with Mediterranean textures, soft linens, and calm views over the water.',
    image: photos.rooms[0],
  },
  {
    id: 'senior',
    title: 'Senior Suites',
    summary:
      'Generous living areas and private balconies, designed for travelers who want room to unwind.',
    image: photos.rooms[2],
  },
  {
    id: 'superior',
    title: 'Superior Suites',
    summary:
      'Refined interiors with garden and pool outlooks, ideal for a relaxed stay close to the hotel grounds.',
    image: photos.rooms[3],
  },
  {
    id: 'honeymoon',
    title: 'Honeymoon Suites',
    summary:
      'Intimate, romantic suites with sunset views and special touches for couples celebrating together.',
    image: photos.couples[0],
  },
];

export const experiences = [
  {
    title: 'Infinity Pool',
    description: 'Swim in a long infinity pool that seems to melt into the Ionian horizon.',
    image: photos.pool[0],
  },
  {
    title: 'Beach Access',
    description: 'Step from the hotel onto the coastline and spend the day by clear turquoise water.',
    image: photos.beach[0],
  },
  {
    title: 'Dining',
    description: 'Fresh Greek flavors and seasonal Mediterranean dishes served with a view of the sea.',
    image: photos.dining[0],
  },
  {
    title: 'Optional Activities',
    description: 'Boat trips, guided walks, and local excursions arranged by our team on request.',
    image: photos.beach[2],
  },
];

export const galleryItems: { src: string; alt: string; category: string }[] = [
  { src: photos.hero, alt: 'Irida Hotel exterior at sunset', category: 'Views' },
  { src: photos.welcome[1], alt: 'Resort architecture above the sea', category: 'Views' },
  { src: photos.pool[1], alt: 'Infinity pool with ocean view', category: 'Pool' },
  { src: photos.pool[2], alt: 'Poolside loungers by the ocean', category: 'Pool' },
  { src: photos.rooms[0], alt: 'Suite interior with chandelier', category: 'Suites' },
  { src: photos.rooms[3], alt: 'Suite with warm lamp light', category: 'Suites' },
  { src: photos.dining[1], alt: 'Seaside terrace dining', category: 'Dining' },
  { src: photos.dining[2], alt: 'Restaurant terrace with flowers', category: 'Dining' },
  { src: photos.beach[1], alt: 'Turquoise bay on the Greek coast', category: 'Coast' },
  { src: photos.beach[3], alt: 'Quiet Greek beach with green cliffs', category: 'Coast' },
  { src: photos.couples[1], alt: 'Couple enjoying a sunset on the beach', category: 'Guests' },
  { src: photos.welcome[0], alt: 'Resort building with palms at dusk', category: 'Views' },
];

export const galleryFilters = ['All', 'Views', 'Pool', 'Suites', 'Dining', 'Coast', 'Guests'];

export const hotelContact = {
  name: 'Irida Hotel',
  phone: '+30 268 403 2564',
  phoneHref: 'tel:+302684032564',
  email: 'info@iridaboutiquehotel.gr',
  mapEmbed: 'https://www.google.com/maps?q=39.284356,20.404706&z=17&output=embed',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=39.284356,20.404706',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];
