import { WildlifePark } from '../types';

export const wildlifeParks: WildlifePark[] = [
  {
    id: 'bandhavgarh',
    slug: 'bandhavgarh-national-park',
    name: 'Bandhavgarh National Park',
    subtitle: 'The Land of the Royal Bengal Tiger & Ancient Vindhyan Fortress',
    location: 'Umaria District, Eastern Madhya Pradesh',
    habitat: 'Dense tropical moist deciduous Sal forests, mixed bamboo thickets, open grasslands, and sheer sandstone cliffs.',
    keyFauna: [
      'Royal Bengal Tiger (highest documented density in India)',
      'Indian Leopard',
      'Sloth Bear',
      'Chital (Spotted Deer)',
      'Sambar Deer',
      'Barking Deer (Muntjac)',
      'Indian Wolf',
      'Over 250 bird species including Malabar Pied Hornbill'
    ],
    image: '/images/bandhavgarh-national-park.jpg',
    imageAlt: 'Wild Royal Bengal Tigress stalking majestically through the Sal forests of Bandhavgarh',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 4.0 (Rohit Varma)',
    summary: 'Bandhavgarh National Park boasts the highest documented density of wild Bengal Tigers in India. Nestled around the ancient 2,000-year-old Bandhavgarh Fort, this 1,536-sq-km reserve in Umaria district offers thrilling wildlife safaris through picturesque Sal canopies and marshy meadows.',
    whySpecial: 'Bandhavgarh was once the private hunting preserve of the Maharajas of Rewa (the ancestral home of the world’s first captured White Tiger, Mohan). Today, its compact core zones (Tala, Magdhi, and Khitauli) offer exceptional predator tracking opportunities alongside 10th-century monolithic rock-cut sculptures like the reclining Shesh Shaiya Vishnu.',
    safariZones: [
      {
        zoneName: 'Tala Zone (Core)',
        type: 'Core',
        description: 'The most legendary zone, featuring rocky hills, ancient fort ruins, the Shesh Shaiya reclining Vishnu statue, and high tiger sighting records.'
      },
      {
        zoneName: 'Magdhi Zone (Gate 2)',
        type: 'Core',
        description: 'Lush mixed forest and open grasslands with numerous natural waterholes attracting herds of chital, sambar, and hunting tigers.'
      },
      {
        zoneName: 'Khitauli Zone (Gate 3)',
        type: 'Core',
        description: 'Dominated by dry deciduous woodland, famous for sloth bear sightings, wild elephants, leopards, and diverse birdlife.'
      },
      {
        zoneName: 'Dhamokhar & Johila (Buffer)',
        type: 'Buffer',
        description: 'Picturesque buffer zones offering night safaris and excellent opportunities to observe tigers and leopards moving across corridor boundaries.'
      }
    ],
    safariTimingsAndBooking: {
      morningShift: '06:00 AM to 10:30 AM (Varies slightly by season)',
      eveningShift: '02:30 PM to 06:00 PM',
      closedOn: 'Park core zones are closed every Wednesday afternoon and during the annual monsoon breeding season (July 1 to September 30). Buffer zones remain open year-round.',
      bookingProcess: 'Permits must be booked well in advance through the official Madhya Pradesh Forest Department portal (mponline.gov.in) or via registered wildlife safari lodges.'
    },
    bestTime: 'October to June. March to May is the prime season for tiger sightings as animals gather around shrinking waterholes; November to February offers crisp, beautiful weather for birdwatching.',
    howToReach: {
      air: 'Jabalpur Airport (approx. 165 km southwest) is the nearest operational airport with flights to Delhi, Mumbai, and Hyderabad. Khajuraho Airport is 250 km northwest.',
      rail: 'Umaria Railway Station (32 km) and Katni Junction (100 km) are major rail terminals with direct connectivity from Delhi, Mumbai, Kolkata, and Jabalpur.',
      road: 'Good highways connect Bandhavgarh to Jabalpur (3.5 hours), Katni (2 hours), and Kanha National Park (5 hours).',
      nearestHub: 'Jabalpur (165 km) or Katni (100 km)'
    },
    conservationEthics: [
      'Maintain strict silence inside the jungle; loud talking frightens animals and disrupts alarm calls.',
      'Never step out of the safari vehicle under any circumstances except at designated checkposts.',
      'Plastic bags and single-use water bottles are prohibited inside the park; carry reusable thermoses.',
      'Do not use camera flash or drones.'
    ],
    faqs: [
      {
        question: 'What makes Bandhavgarh the best place to see wild tigers?',
        answer: 'Bandhavgarh has the highest density of Royal Bengal Tigers per square kilometer in India, combined with relatively open terrain in Tala and Magdhi zones that makes tracking prey and predators easier.'
      },
      {
        question: 'When is Bandhavgarh National Park open?',
        answer: 'Core safari zones are open from October 1 to June 30 each year. They are closed every Wednesday afternoon and completely closed during the monsoon months (July to September).'
      },
      {
        question: 'How do you book safari permits for Bandhavgarh?',
        answer: 'Safaris can be booked up to 120 days in advance on the official MP Online forest portal (forest.mponline.gov.in) by providing government ID details for all passengers.'
      }
    ],
    seo: {
      primaryKeyword: 'Bandhavgarh National Park',
      secondaryKeywords: ['Bandhavgarh tiger safari', 'Bandhavgarh travel guide'],
      title: 'Bandhavgarh National Park: Tiger Safari, Zones & Travel Guide',
      metaDescription: 'Experience India’s premier tiger reserve at Bandhavgarh National Park. Guide to Tala, Magdhi safari zones, booking permits, Shesh Shaiya, and travel tips.'
    }
  },
  {
    id: 'kanha',
    slug: 'kanha-national-park',
    name: 'Kanha Tiger Reserve',
    subtitle: 'The Real Jungle Book: Endless Sal Forests & The Rare Barasingha',
    location: 'Mandla and Balaghat Districts, Southeastern Madhya Pradesh',
    habitat: 'Extensive horseshoe valley covered with dense moist Sal forests, vast open undulating grassy meadows (maidans), and bamboo thickets.',
    keyFauna: [
      'Royal Bengal Tiger',
      'Hardground Barasingha (Swamp Deer - exclusive to Kanha)',
      'Indian Leopard',
      'Indian Wild Dog (Dhole)',
      'Gaur (Indian Bison)',
      'Sloth Bear',
      'Chital',
      'Over 300 resident and migratory bird species'
    ],
    image: '/images/kanha-national-park.jpg',
    imageAlt: 'Majestic Royal Bengal Tiger roaming across the golden Sal forest meadows of Kanha National Park',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 3.0 (Dey.sandip)',
    summary: 'Spanning nearly 2,000 square kilometers across the Maikal hills, Kanha Tiger Reserve is universally regarded as one of Asia’s best-managed wildlife sanctuaries. Its breathtaking emerald meadows and soaring Sal woods provided the authentic backdrop for Rudyard Kipling’s classic, *The Jungle Book*.',
    whySpecial: 'Kanha achieved one of the greatest wildlife conservation miracles in history by bringing back the endangered Hardground Barasingha (Rucervus duvaucelii branderi) from the brink of extinction (from only 66 individuals in 1970 to over 1,000 today). It is also the first tiger reserve in India to officially introduce a mascot: "Bhoorsingh the Barasingha".',
    safariZones: [
      {
        zoneName: 'Kanha Zone',
        type: 'Core',
        description: 'The central iconic zone featuring expansive open meadows, frequent predator-prey chases, and the Kanha Museum.'
      },
      {
        zoneName: 'Mukki Zone',
        type: 'Core',
        description: 'Rich Sal and bamboo forests traversed by crystal streams, renowned for regular tiger, leopard, and gaur sightings.'
      },
      {
        zoneName: 'Kisli Zone',
        type: 'Core',
        description: 'Rolling hills and dense woodlands located near the Khatia entrance gate.'
      },
      {
        zoneName: 'Sarhi Zone',
        type: 'Core',
        description: 'Picturesque northern wilderness with dramatic rocky outcrops, dry deciduous trees, and sloth bear habitat.'
      }
    ],
    safariTimingsAndBooking: {
      morningShift: '06:00 AM to 11:00 AM',
      eveningShift: '03:00 PM to 06:00 PM',
      closedOn: 'Closed every Wednesday afternoon and from July 1 to September 30 during the monsoon.',
      bookingProcess: 'Permits should be reserved online in advance via the official MP Online forest booking portal.'
    },
    bestTime: 'October to June. November to February offers frosty morning mists over golden meadows; April to June offers peak tiger sightings near waterholes.',
    howToReach: {
      air: 'Jabalpur Airport (approx. 160 km north) and Nagpur Airport (approx. 260 km south) are the two primary flight gateways.',
      rail: 'Gondia Junction (145 km) and Jabalpur Junction (160 km) are well-connected by rail to Mumbai, Delhi, and Kolkata.',
      road: 'Well-paved state highways connect Kanha to Jabalpur (3.5 to 4 hours) and Bandhavgarh (5 hours).',
      nearestHub: 'Jabalpur (160 km)'
    },
    conservationEthics: [
      'Maintain total stillness when observing wildlife to avoid inducing stress.',
      'Do not litter or dispose of any organic or inorganic food in the reserve.',
      'Respect the forest guide and driver instructions regarding speed limits and distances.'
    ],
    faqs: [
      {
        question: 'What is the Hardground Barasingha and why is it special to Kanha?',
        answer: 'The Hardground Barasingha (Swamp Deer) is the state animal of Madhya Pradesh and found in the wild exclusively at Kanha. Once reduced to just 66 animals, dedicated conservation rescued this majestic 12-tined deer.'
      },
      {
        question: 'Did Rudyard Kipling visit Kanha?',
        answer: 'Rudyard Kipling drew inspiration for *The Jungle Book* from the vivid accounts and field writings of British naturalists and foresters stationed in the Seoni and Kanha region of central India.'
      }
    ],
    seo: {
      primaryKeyword: 'Kanha National Park',
      secondaryKeywords: ['Kanha tiger reserve', 'Kanha safari guide'],
      title: 'Kanha National Park: Jungle Book Tiger Safari & Barasingha Guide',
      metaDescription: 'Discover Kanha National Park in Madhya Pradesh. Complete guide to Mukki and Kanha safari zones, Barasingha conservation, permits, and wildlife tips.'
    }
  },
  {
    id: 'satpura',
    slug: 'satpura-national-park',
    name: 'Satpura Tiger Reserve',
    subtitle: 'Pristine Wilderness of Walking Safaris & Denwa River Canoeing',
    location: 'Narmadapuram (Hoshangabad) District, Central Madhya Pradesh',
    habitat: 'Rugged terrain of sandstone peaks, narrow gorges, ravines, and the deep waters of the Tawa and Denwa reservoirs.',
    keyFauna: [
      'Royal Bengal Tiger',
      'Indian Leopard (exceptional sightings)',
      'Sloth Bear',
      'Wild Dog (Dhole)',
      'Indian Giant Flying Squirrel',
      'Crocodiles (Mugger)',
      'Blackbuck'
    ],
    image: '/images/satpura-tiger-reserve.jpg',
    imageAlt: 'Panoramic vista of pristine sandstone hills and Denwa river in Satpura Tiger Reserve',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 3.0',
    summary: 'Satpura Tiger Reserve is one of India’s most untouched, tranquil national parks. Unlike conventional reserves where visitors are strictly confined to 4x4 vehicles, Satpura uniquely allows guided walking safaris inside the core forest, silent canoeing across the Denwa River, and night safari drives.',
    whySpecial: 'Satpura offers true wilderness without mass tourism. Crossing the Denwa River by motorboat at dawn to enter the Madhai gate sets a magical, quiet tone for spotting leopards basking on sandstone rocks or sloth bears digging for termites.',
    safariZones: [
      {
        zoneName: 'Madhai Core Zone',
        type: 'Core',
        description: 'Accessed by boat across the Denwa reservoir, offering open vehicle drives and walking trails through dense teak and bamboo.'
      },
      {
        zoneName: 'Churna Zone',
        type: 'Core',
        description: 'Deep inside the core forest, famous for old-growth trees, natural springs, and high tiger and leopard territories.'
      },
      {
        zoneName: 'Denwa River Canoe Safari',
        type: 'Buffer',
        description: 'Silent paddling along the riverbanks to observe marsh crocodiles, wading waterbirds, and animals coming to drink.'
      }
    ],
    safariTimingsAndBooking: {
      morningShift: '06:00 AM to 10:30 AM',
      eveningShift: '02:30 PM to 06:00 PM',
      closedOn: 'Wednesday afternoons. Closed in core during monsoon (July-September).',
      bookingProcess: 'Online booking via the official MP Forest portal.'
    },
    bestTime: 'October to June. Winter mornings are magical with river mists; summer is premier for predator encounters.',
    howToReach: {
      air: 'Bhopal Airport is approx. 140 km north.',
      rail: 'Sohagpur (18 km), Pipariya (45 km), and Itarsi Junction (70 km) are nearby rail stations.',
      road: 'Around 3.5 hours drive from Bhopal via Hoshangabad.',
      nearestHub: 'Bhopal (140 km)'
    },
    conservationEthics: [
      'Always follow the armed naturalist and tracker closely during walking safaris.',
      'Do not wear bright colors; earthy greens, browns, and khakis blend into the forest.'
    ],
    faqs: [
      {
        question: 'Can you really do walking safaris in Satpura?',
        answer: 'Yes! Satpura is the only tiger reserve in central India where visitors accompanied by a trained forest naturalist and forest guard are officially permitted to track wildlife on foot inside designated core trails.'
      }
    ],
    seo: {
      primaryKeyword: 'Satpura National Park',
      secondaryKeywords: ['Satpura tiger reserve', 'Satpura safari guide'],
      title: 'Satpura Tiger Reserve: Walking Safari, Denwa River & Guide',
      metaDescription: 'Explore the tranquil wilderness of Satpura Tiger Reserve. Guide to Madhai safaris, Denwa river canoeing, walking tours, leopards, and booking tips.'
    }
  },
  {
    id: 'pench',
    slug: 'pench-national-park',
    name: 'Pench Tiger Reserve',
    subtitle: 'The Real Home of Mowgli across the Southern Teakwood Ridge',
    location: 'Seoni and Chhindwara Districts, Southern Madhya Pradesh',
    habitat: 'Teak forests, open canopy dry deciduous woods, and the meandering Pench River.',
    keyFauna: [
      'Royal Bengal Tiger',
      'Indian Leopard',
      'Dhole (Asiatic Wild Dog)',
      'Chital',
      'Sambar',
      'Nilgai',
      'Over 285 bird species'
    ],
    image: '/images/pench-tiger-reserve.jpg',
    imageAlt: 'The legendary Collarwali tigress (T-15), the celebrated Queen of Pench Tiger Reserve',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 4.0 (Pravin Parmar)',
    summary: 'Nestled along the southern slopes of the Satpura hills, Pench Tiger Reserve is immortalized as the physical setting of Rudyard Kipling’s *Jungle Book*. The Pench River flows through the center of the park, nourishing vast teak forests that shelter abundant populations of tigers, leopards, and wild dogs.',
    whySpecial: 'Pench is famous for its open, sunlit teak canopy which provides superb visibility for wildlife photography. It is one of the premier locations in India to observe packs of endangered Indian Wild Dogs (Dholes) hunting in coordinated packs.',
    safariZones: [
      {
        zoneName: 'Turia Gate (Core)',
        type: 'Core',
        description: 'The most popular entry gate with prime access to waterholes, meadows, and high tiger sighting records.'
      },
      {
        zoneName: 'Karmajhiri Gate (Core)',
        type: 'Core',
        description: 'Tranquil forested zone surrounded by massive ghost gum (Kullu) trees and scenic watering holes.'
      },
      {
        zoneName: 'Jamtara & Telia (Buffer)',
        type: 'Buffer',
        description: 'Vibrant buffer zones featuring nocturnal night drives and excellent birdwatching.'
      }
    ],
    safariTimingsAndBooking: {
      morningShift: '06:00 AM to 11:00 AM',
      eveningShift: '02:30 PM to 06:00 PM',
      closedOn: 'Wednesday afternoons; closed core July-September.',
      bookingProcess: 'MP Online Forest Portal.'
    },
    bestTime: 'October to June. March-May for highest tiger sightings around drying river pools.',
    howToReach: {
      air: 'Dr. Babasaheb Ambedkar International Airport in Nagpur is just 90 km south (approx. 2 hours drive via NH44).',
      rail: 'Nagpur Junction (90 km) and Seoni (30 km).',
      road: 'Superb 4-lane highway connectivity from Nagpur along NH44.',
      nearestHub: 'Nagpur (90 km)'
    },
    conservationEthics: [
      'Stick to prescribed vehicle speed limits and maintain distance from wildlife.'
    ],
    faqs: [
      {
        question: 'How close is Pench to Nagpur?',
        answer: 'Pench is the most accessible national park from an international airport, located just 90 km north of Nagpur (a smooth 2-hour drive along the 4-lane NH44).'
      }
    ],
    seo: {
      primaryKeyword: 'Pench National Park',
      secondaryKeywords: ['Pench tiger reserve', 'Pench safari booking'],
      title: 'Pench National Park: Mowgli Land Tiger Safari & Travel Guide',
      metaDescription: 'Discover Pench Tiger Reserve in Madhya Pradesh. Complete guide to Turia gate safaris, teakwood forests, leopards, Nagpur connectivity, and permit booking.'
    }
  }
];
