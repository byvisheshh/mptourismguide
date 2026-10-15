export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'worship' | 'nature' | 'taste' | 'heritage';
  image: string;
  imageAlt: string;
  location: string;
  caption: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // Worship
  {
    id: 'gw-1',
    title: 'Omkareshwar Mandhata Island on Narmada',
    category: 'worship',
    image: '/images/omkareshwar-jyotirlinga.jpg',
    imageAlt: 'Omkareshwar Jyotirlinga Temple rising beside the sacred Narmada River',
    location: 'Khandwa District',
    caption: 'The sacred island shrine contoured naturally in the shape of the sacred symbol ॐ.'
  },
  {
    id: 'gw-2',
    title: 'Mahakaleshwar Jyotirlinga Tower',
    category: 'worship',
    image: '/images/mahakaleshwar-ujjain.jpg',
    imageAlt: 'The soaring shikhara of Mahakaleshwar Temple in Ujjain',
    location: 'Ujjain',
    caption: 'The timeless Dakshinmukhi Jyotirlinga where the sacred dawn Bhasma Aarti is performed.'
  },
  {
    id: 'gw-3',
    title: 'Ram Ghat on the Holy Mandakini',
    category: 'worship',
    image: '/images/chitrakoot-mandakini.jpg',
    imageAlt: 'Pilgrim ghats on the Mandakini River in Chitrakoot',
    location: 'Chitrakoot',
    caption: 'Serene riverfront steps where Lord Rama and Sita walked during exile.'
  },

  // Nature
  {
    id: 'gn-1',
    title: 'Wild Bengal Tiger in Bandhavgarh',
    category: 'nature',
    image: '/images/bandhavgarh-national-park.jpg',
    imageAlt: 'Royal Bengal Tiger in Tala zone, Bandhavgarh National Park',
    location: 'Bandhavgarh National Park',
    caption: 'India’s premier tiger haven with the highest documented predator density.'
  },
  {
    id: 'gn-2',
    title: 'Kanha Sal Meadows',
    category: 'nature',
    image: '/images/kanha-national-park.jpg',
    imageAlt: 'Tiger roaming through the Sal forest and grassy maidans of Kanha',
    location: 'Kanha Tiger Reserve',
    caption: 'The real-life wilderness that inspired Rudyard Kipling’s classic Jungle Book.'
  },
  {
    id: 'gn-3',
    title: 'Satpura Forest & Denwa River',
    category: 'nature',
    image: '/images/satpura-tiger-reserve.jpg',
    imageAlt: 'Pristine sandstone bluffs and river waters of Satpura Tiger Reserve',
    location: 'Satpura Tiger Reserve',
    caption: 'Untouched central Indian wilderness offering walking safaris and silent canoeing.'
  },
  {
    id: 'gn-4',
    title: 'Mist-Clad Pachmarhi Valley',
    category: 'nature',
    image: '/images/pachmarhi-valley.jpg',
    imageAlt: 'Verdant green valleys of Pachmarhi in the Satpura range',
    location: 'Pachmarhi',
    caption: 'The Queen of Satpura, home to cascading waterfalls and cool mountain breezes.'
  },
  {
    id: 'gn-5',
    title: 'Upper Lake (Bhojtal) Waters',
    category: 'nature',
    image: '/images/bhopal-upper-lake.jpg',
    imageAlt: 'Upper Lake waters in Bhopal at sunset',
    location: 'Bhopal',
    caption: 'Historic 11th-century lake created by King Bhoja, spanning over 31 square kilometers.'
  },
  {
    id: 'gn-6',
    title: 'Collarwali Tigress in Pench',
    category: 'nature',
    image: '/images/pench-tiger-reserve.jpg',
    imageAlt: 'The famous Collarwali Tigress in Pench Tiger Reserve',
    location: 'Pench Tiger Reserve',
    caption: 'The legendary "Queen of Pench" who raised 29 cubs in the wild.',
  },

  // Taste
  {
    id: 'gt-1',
    title: 'Authentic Indore Poha & Jalebi',
    category: 'taste',
    image: '/images/indore-poha-jalebi.jpg',
    imageAlt: 'Fresh steamed Indori poha with Ratlami sev and crispy jalebi',
    location: 'Chappan Dukan, Indore',
    caption: 'India’s most celebrated breakfast: feather-light steamed poha with Jeeravan masala and sev.'
  },
  {
    id: 'gt-2',
    title: 'Traditional Desi Ghee Dal Bafla',
    category: 'taste',
    image: '/images/dal-bafla.jpg',
    imageAlt: 'Golden baked bafla dumplings drenched in desi ghee with spicy dal',
    location: 'Malwa Region',
    caption: 'Wheat dough balls boiled, charcoal-baked, and submerged in pure clarified butter.'
  },
  {
    id: 'gt-3',
    title: 'Sarafa Midnight Food Bazaar',
    category: 'taste',
    image: '/images/sarafa-bazaar.jpg',
    imageAlt: 'Late-night street food vendors and crowds at Sarafa Bazaar',
    location: 'Sarafa Bazaar, Indore',
    caption: 'Jewelry market by day, street gastronomy carnival by midnight.'
  },
  {
    id: 'gt-4',
    title: 'Royal Nawabi Bhopali Biryani',
    category: 'taste',
    image: '/images/bhopali-biryani.jpg',
    imageAlt: 'Dum-cooked aromatic Bhopali mutton biryani with saffron and mint',
    location: 'Old Bhopal',
    caption: 'Subtly spiced slow-cooked royal dum biryani perfected in the Begums’ kitchens.'
  },

  // Heritage
  {
    id: 'gh-1',
    title: 'Kandariya Mahadeva Temple, Khajuraho',
    category: 'heritage',
    image: '/images/khajuraho-temples.jpg',
    imageAlt: 'Kandariya Mahadeva temple soaring sandstone spires at Khajuraho',
    location: 'Khajuraho (UNESCO)',
    caption: 'Pinnacle of medieval Chandela architecture with over 800 carved stone sculptures.'
  },
  {
    id: 'gh-2',
    title: 'The Great Stupa at Sanchi',
    category: 'heritage',
    image: '/images/sanchi-stupa.jpg',
    imageAlt: 'The Great Stupa and intricately carved East Torana gateway at Sanchi',
    location: 'Sanchi (UNESCO)',
    caption: 'Oldest stone structure in India commissioned by Mauryan Emperor Ashoka in 3rd Century BCE.'
  },
  {
    id: 'gh-3',
    title: 'Gwalior Fort & Man Mandir Palace',
    category: 'heritage',
    image: '/images/gwalior-fort.jpg',
    imageAlt: 'Turquoise glazed tiles on the walls of Man Mandir Palace, Gwalior Fort',
    location: 'Gwalior',
    caption: 'The "Pearl among fortresses in India", rising 100 meters above the historic city.'
  },
  {
    id: 'gh-4',
    title: 'Orchha Palaces & Betwa Cenotaphs',
    category: 'heritage',
    image: '/images/orchha-monuments.jpg',
    imageAlt: 'Chaturbhuj Temple and royal Chhatris in medieval Orchha',
    location: 'Orchha',
    caption: 'Medieval Bundelkhand stronghold where Lord Rama is officially revered as a reigning king.'
  },
  {
    id: 'gh-5',
    title: 'Prehistoric Caves of Bhimbetka',
    category: 'heritage',
    image: '/images/bhimbetka-caves.jpg',
    imageAlt: 'Rock shelter with 30,000-year-old rock paintings at Bhimbetka',
    location: 'Bhimbetka (UNESCO)',
    caption: 'Continuous 30,000-year chronicle of early human artistic expression in mineral ochre.'
  },
  {
    id: 'gh-6',
    title: 'Jahaz Mahal Ship Palace in Mandu',
    category: 'heritage',
    image: '/images/mandu-jahaz-mahal.jpg',
    imageAlt: 'Jahaz Mahal floating between two lakes in Mandu',
    location: 'Mandu',
    caption: '15th-century Afghan palace engineered to look like a ship floating on water.'
  }
];
