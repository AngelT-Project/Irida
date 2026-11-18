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
  panorama: photo('11898125'),
};

export type SuiteCategory = {
  id: string;
  roman: string;
  title: string;
  summary: string;
  image: string;
};

export const suiteCategories: SuiteCategory[] = [
  {
    id: 'deluxe',
    roman: 'I.',
    title: 'Deluxe Suites',
    summary:
      'Spacious, light-filled suites with Mediterranean textures, soft linens, and calm views over the water.',
    image: photos.rooms[0],
  },
  {
    id: 'senior',
    roman: 'II.',
    title: 'Senior Suites',
    summary:
      'Generous living areas and private balconies, designed for travelers who want room to unwind.',
    image: photos.rooms[2],
  },
  {
    id: 'superior',
    roman: 'III.',
    title: 'Superior Suites',
    summary:
      'Refined interiors with garden and pool outlooks, ideal for a relaxed stay close to the hotel grounds.',
    image: photos.rooms[3],
  },
  {
    id: 'honeymoon',
    roman: 'IV.',
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

export const climateData = {
  location: 'Parga, Greece',
  temperature: '25°C',
  condition: 'Sunny & Serene',
  sunsetTime: '20:18',
  waterTemp: '24°C',
  breeze: '8 km/h Ionian Breeze',
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  location: string;
  stayType: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'The quietest, most thoughtful week we have ever spent in Greece. Waking up to that view over the Ionian Sea is unforgettable.',
    author: 'Elena & Marcus S.',
    location: 'Munich, Germany',
    stayType: 'Honeymoon Suite',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Understated elegance at its finest. The suites are spacious, light-filled, and the team anticipates every need without ever feeling intrusive.',
    author: 'Julian B.',
    location: 'London, United Kingdom',
    stayType: 'Deluxe Suite',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'The pool at golden hour is pure magic. Irida Hotel captures the true soul of coastal Parga.',
    author: 'Sophie & Alexandre',
    location: 'Geneva, Switzerland',
    stayType: 'Senior Suite',
    rating: 5,
  },
  {
    id: '4',
    quote:
      'From the fresh morning figs and thyme honey to the stillness on our balcony at dusk, every single detail felt tailor-made for complete peace.',
    author: 'Katerina & Nikos V.',
    location: 'Athens, Greece',
    stayType: 'Superior Suite',
    rating: 5,
  },
];

export type ConciergeFaq = {
  id: string;
  question: string;
  answer: string;
};

export const conciergeFaqs: ConciergeFaq[] = [
  {
    id: 'reach',
    question: 'What is the most convenient way to reach Irida Hotel?',
    answer:
      'Aktion / Preveza National Airport (PVK) is located approximately 55 minutes by car. We can arrange a private chauffeured transfer directly to our front desk upon request. Alternatively, Ioannina Airport (IOA) is accessible in about 75 minutes.',
  },
  {
    id: 'breakfast',
    question: 'What is included in the morning breakfast service?',
    answer:
      'An artisanal Greek breakfast featuring seasonal Epirotic fruits, local honey, farm-fresh eggs, freshly baked pastries, and Greek coffee, served with panoramic sea views from 08:00 to 11:00.',
  },
  {
    id: 'parking',
    question: 'Is parking available on site?',
    answer:
      'Yes, complimentary private parking is reserved exclusively for hotel guests within our secured grounds. No reservation is required.',
  },
  {
    id: 'tranquility',
    question: "What is the hotel's policy on tranquility and age?",
    answer:
      'To preserve our serene, slow-paced atmosphere, Irida Hotel is specifically curated for adults and couples seeking peaceful relaxation.',
  },
  {
    id: 'excursions',
    question: 'Can special occasions and private boat trips be arranged?',
    answer:
      'Yes. Our concierge specializes in private wooden boat excursions to Paxos, Antipaxos, and secluded sea caves, as well as sunset dining arrangements and celebration flowers.',
  },
  {
    id: 'checkin',
    question: 'What are the check-in and check-out times?',
    answer:
      'Check-in begins at 15:00, allowing us to meticulously prepare your suite. Check-out is until 11:00. Luggage storage and pool access are warmly available for early arrivals or late departures.',
  },
];

export const hotelContact = {
  name: 'Irida Hotel',
  phone: '+30 268 403 2564',
  phoneHref: 'tel:+302684032564',
  email: 'info@iridahotel.gr',
  mapEmbed: 'https://www.google.com/maps?q=39.284356,20.404706&z=17&output=embed',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=39.284356,20.404706',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Accolades', href: '#accolades' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Concierge FAQ', href: '#faq' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];
