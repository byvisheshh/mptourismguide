import { FestivalItem } from '../types';

export const festivals: FestivalItem[] = [
  {
    id: 'khajuraho-dance',
    name: 'Khajuraho Dance Festival',
    location: 'Western Group of Temples, Khajuraho',
    timing: 'Every February (Week-long)',
    category: 'dance',
    image: '/images/khajuraho-temples.jpg',
    description: 'India’s most prestigious classical dance festival, held outdoors against the floodlit 1,000-year-old sandstone backdrop of the Chitragupta and Vishwanatha temples. Renowned exponents of Kathak, Bharatanatyam, Odissi, Kuchipudi, Manipuri, and Kathakali perform under the starlit winter sky.',
    highlights: [
      'Performances by Sangeet Natak Akademi awardees and international classical troupes',
      'Atmospheric open-air auditorium with floodlit stone carvings',
      'Art-Mart craft fair and indigenous artists’ pavilion adjacent to the venue',
      'Free public admission to the dance recitals'
    ],
    visitorEtiquette: 'Arrive 45 minutes before start time (around 06:30 PM) to secure seating. Switch off mobile ringers and refrain from flash photography.'
  },
  {
    id: 'tansen-samaroh',
    name: 'Tansen Samaroh (Music Festival)',
    location: 'Tomb of Tansen, Gwalior',
    timing: 'Every December (5 Days)',
    category: 'music',
    image: '/images/gwalior-fort.jpg',
    description: 'One of the oldest and most revered classical Indian music assemblies in the world. Organized near the historic mausoleum of musical genius Tansen in Gwalior, vocalists and instrumentalists gather to offer musical tributes in the ancient Dhrupad and Khayal styles.',
    highlights: [
      'Continuous morning and evening musical sittings (sabhas)',
      'World-renowned sitar, sarod, flute, and vocal maestros performing ragas',
      'Conferring of the prestigious National Tansen Samman',
      'Free open-air seating for all music lovers'
    ],
    visitorEtiquette: 'Maintain serene silence during performances and respect classical music decorum.'
  },
  {
    id: 'bhagoria-haat',
    name: 'Bhagoria Festival & Tribal Haats',
    location: 'Jhabua, Alirajpur & West Nimar (Malwa-Nimar border)',
    timing: 'March (Week preceding Holi)',
    category: 'tribal',
    image: '/images/indore-rajwada.jpg',
    description: 'A vibrant, colorful spring harvest celebration of the indigenous Bhil and Bhilala tribal communities. Villages burst with joy as young men and women dress in traditional embroidered attire and silver jewelry, dancing to the rhythmic throb of colossal Dhol drums.',
    highlights: [
      'Traditional tribal dance circles with authentic wooden flutes and dhols',
      'Giant colorful wooden Ferris wheels and fairground stalls',
      'Tasting local delicacies like roasted corn and jaggery sweets',
      'Exquisite traditional silver jewelry and handloom beadwork'
    ],
    visitorEtiquette: 'Be sensitive and respectful when photographing tribal participants; always seek permission before close-up portraits.'
  },
  {
    id: 'maha-shivratri-ujjain',
    name: 'Maha Shivratri & Mahakal Sawari',
    location: 'Mahakaleshwar Temple, Ujjain',
    timing: 'February / March (Phalguna Krishna Chaturdashi)',
    category: 'religious',
    image: '/images/mahakaleshwar-ujjain.jpg',
    description: 'The supreme festival at the Mahakaleshwar Jyotirlinga. The holy city of Ujjain is illuminated with over 2 million earthen lamps (setting Guinness World Records along the Shipra River). Lord Shiva is adorned with a royal Sehra (golden floral crown) during continuous 44-hour open darshan.',
    highlights: [
      'Spectacular 44-hour unbroken temple sanctum darshan',
      'Deepotsav on Ram Ghat along the Shipra River with millions of lamps',
      'The grand Mahakal Sawari royal procession with brass bands and palanquins',
      'Electrifying spiritual devotional chanting across the city'
    ],
    visitorEtiquette: 'Expect massive pilgrim crowds; plan priority passes or VIP protocol queues well in advance.'
  }
];

export interface HandloomCraft {
  name: string;
  region: string;
  fabric: string;
  description: string;
  specialFeature: string;
}

export const handloomCrafts: HandloomCraft[] = [
  {
    name: 'Chanderi Weaving',
    region: 'Chanderi (Ashoknagar District)',
    fabric: 'Pure Silk & Fine Cotton with Zari',
    description: 'Dating back to the Vedic era and patronized by the Scindias, Chanderi fabric is renowned for its feather-light sheer texture, glossy transparency, and intricate gold and silver zari borders depicting swans, peacocks, and floral creepers.',
    specialFeature: 'Woven with degummed raw silk and fine count cotton that yields a shimmering translucence.'
  },
  {
    name: 'Maheshwari Sarees & Fabrics',
    region: 'Maheshwar (Khargone District)',
    fabric: 'Silk-Cotton blend with reversible borders',
    description: 'Pioneered by the visionary queen Maharani Ahilyabai Holkar in the late 18th century. She invited master weavers from Surat and Malwa to design distinctive lightweight sarees with geometric border motifs inspired by the carvings of Maheshwar Fort.',
    specialFeature: 'Signature reversible border (Bugdi) that looks identical on both sides, allowing the saree to be worn reversibly.'
  },
  {
    name: 'Bagh Print Textiles',
    region: 'Bagh (Dhar District)',
    fabric: 'Hand-block printed cotton and silk',
    description: 'An ancient 1,000-year-old block-printing craft practiced along the banks of the Bagh River using carved teakwood blocks and 100% natural mineral and vegetable dyes (madder root, indigo, and pomegranate rind).',
    specialFeature: 'Repeated washing in the copper-rich waters of the Bagh River creates deep, permanent red and black colors.'
  },
  {
    name: 'Gond Tribal Art',
    region: 'Dindori & Mandla (Central MP)',
    fabric: 'Handmade canvas, paper & murals',
    description: 'World-acclaimed tribal art form created with dots and fine rhythmic lines by the Gond community. Paintings express spiritual reverence for trees, animals, and mythological spirits, now featured in international contemporary art galleries.',
    specialFeature: 'Each Gond master artist develops their own unique signature pattern (lines, dots, waves, or dashes).'
  }
];
