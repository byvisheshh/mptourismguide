import { TravelItinerary } from '../types';

export const travelItineraries: TravelItinerary[] = [
  {
    id: 'grand-7-day',
    slug: '7-day-madhya-pradesh-itinerary',
    title: '7-Day Grand Madhya Pradesh Circuit',
    subtitle: 'From Ancient UNESCO Monuments & Sacred Rivers to Tiger Sanctuaries',
    durationDays: 7,
    route: ['Bhopal', 'Sanchi', 'Bhimbetka', 'Jabalpur (Bhedaghat)', 'Bandhavgarh National Park', 'Khajuraho'],
    category: 'grand-circuit',
    image: '/images/travel-poster.jpg',
    imageAlt: 'Scenic view of historical temples and lush landscapes of Madhya Pradesh',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 4.0',
    overview: 'This flagship 7-day itinerary covers the essential heart of Madhya Pradesh. Designed for first-time visitors seeking a balanced mix of UNESCO World Heritage history (Sanchi, Bhimbetka, Khajuraho), natural wonders (Bhedaghat Marble Rocks), and thrilling tiger safaris at Bandhavgarh.',
    highlights: [
      'Prehistoric 30,000-year-old rock paintings at Bhimbetka',
      'The 3rd Century BCE Great Stupa at Sanchi',
      'Boating through the 100-foot gleaming Marble Rocks on the Narmada River in Bhedaghat',
      'Thrilling open-jeep tiger safaris in Bandhavgarh National Park',
      'World-famous intricately carved 10th-century temples of Khajuraho'
    ],
    bestSeason: 'October to March (Pleasant weather throughout)',
    days: [
      {
        dayNumber: 1,
        title: 'Arrival in Bhopal & City of Lakes',
        destination: 'Bhopal',
        description: 'Arrive at Bhopal’s Raja Bhoj Airport or Rani Kamlapati Station. Check in to your hotel and spend the day exploring royal Bhopal.',
        morning: 'Visit the grand Taj-ul-Masajid, one of Asia’s largest mosques, followed by a walk through the historic Chowk bazaars.',
        afternoon: 'Tour the award-winning Madhya Pradesh Tribal Museum showcasing vernacular dwellings and art installations.',
        evening: 'Enjoy a peaceful sunset boat cruise on Upper Lake (Bhojtal) and dine on Nawabi kebabs at VIP Road.',
        transitTips: 'Taxis and app-based cabs (Ola/Uber) are readily available across Bhopal.'
      },
      {
        dayNumber: 2,
        title: 'Twin UNESCO Heritage: Sanchi & Bhimbetka',
        destination: 'Sanchi & Bhimbetka',
        description: 'A day dedicated to ancient stone architecture and prehistoric rock shelters.',
        morning: 'Drive 46 km north to Sanchi. Explore the Great Stupa, carved Torana gateways, and the ASI archaeological museum.',
        afternoon: 'Drive south through Bhopal to Bhimbetka (45 km south). Walk the 1.5-km trail through Zoo Rock and the massive Auditorium Cave.',
        evening: 'Stop at the colossal 11th-century Bhojpur Shiva Temple on your return to Bhopal.',
        transitTips: 'Hire a private cab for the full day to cover both northern and southern excursions seamlessly.'
      },
      {
        dayNumber: 3,
        title: 'Bhopal to Jabalpur: Bhedaghat & Dhuandhar Falls',
        destination: 'Jabalpur',
        description: 'Board the morning Vande Bharat or Jan Shatabdi express train to Jabalpur (approx. 4 hours).',
        morning: 'Check in to a riverside hotel in Jabalpur. Drive to Bhedaghat on the Narmada River.',
        afternoon: 'Take a guided wooden rowboat ride through the dramatic white marble gorge towering 100 feet above the turquoise water.',
        evening: 'Witness the thunderous mist of Dhuandhar Falls and attend the evening Narmada Aarti at Gwarighat.',
        transitTips: 'Express trains between Bhopal and Jabalpur are punctual and scenic.'
      },
      {
        dayNumber: 4,
        title: 'Jabalpur to Bandhavgarh Tiger Reserve',
        destination: 'Bandhavgarh',
        description: 'A picturesque 3.5-hour drive (165 km) through rural villages and Sal woodlands to Bandhavgarh.',
        morning: 'Arrive in Bandhavgarh, check into a wildlife jungle lodge, and meet your resident naturalist.',
        afternoon: 'Embark on your first open-top 4x4 Gypsy safari in the Magdhi or Khitauli core zone.',
        evening: 'Relax around the lodge campfire, listening to jungle night sounds and a tribal folk dance performance.',
        transitTips: 'Ensure your passport or government photo ID matches the name on your safari permit.'
      },
      {
        dayNumber: 5,
        title: 'Tiger Safaris in Bandhavgarh',
        destination: 'Bandhavgarh',
        description: 'Full day of dedicated wildlife tracking in the premier Tala and Magdhi zones.',
        morning: 'Early dawn 06:00 AM safari into Tala zone. Visit the ancient Shesh Shaiya statue and track tiger pugmarks.',
        afternoon: 'Rest during noon hours at your lodge; birdwatching around the resort grounds.',
        evening: 'Afternoon safari into Magdhi zone to track leopards, sloth bears, and wild elephants.',
        transitTips: 'Dress in layered warm clothes for chilly open-air morning safaris.'
      },
      {
        dayNumber: 6,
        title: 'Bandhavgarh to Khajuraho Temples',
        destination: 'Khajuraho',
        description: 'Scenic 5-hour drive (approx. 240 km) northwest through Panna Tiger Reserve to the temple town of Khajuraho.',
        morning: 'Depart after breakfast; scenic drive with a lunch stop near Panna.',
        afternoon: 'Arrive in Khajuraho. Check in and explore the tranquil Western Group of Temples at golden hour.',
        evening: 'Attend the evocative evening Son-et-Lumiere (Sound & Light show) in the Western Group temple lawns.',
        transitTips: 'Good highway conditions along NH39.'
      },
      {
        dayNumber: 7,
        title: 'Khajuraho Architectural Tour & Departure',
        destination: 'Khajuraho',
        description: 'Final morning dedicated to world-renowned Chandela stone carving masterpieces.',
        morning: 'Detailed guided tour of Kandariya Mahadeva, Lakshmana Temple, and the Eastern Jain temple cluster.',
        afternoon: 'Shop for local Bundelkhand brass handicrafts, stone replicas, and handlooms.',
        evening: 'Transfer to Khajuraho Airport or Khajuraho Railway Station for your onward journey.',
        transitTips: 'Direct flights connect Khajuraho to Delhi; direct Vande Bharat train connects to Delhi.'
      }
    ],
    transportAdvice: 'A combination of the Vande Bharat express train (Bhopal to Jabalpur) and a chauffeured private air-conditioned vehicle for the forest and heritage legs provides the most comfortable, hassle-free experience.',
    budgetGuidelines: 'Mid-range travelers should budget approximately ₹6,000–₹9,000 per person per day including private transport, 3/4-star heritage stays, safari permits, and meals.',
    faqs: [
      {
        question: 'Is 7 days sufficient to see Madhya Pradesh?',
        answer: 'Yes! 7 days provides an ideal introduction to the state’s premier highlights by combining Bhopal’s twin UNESCO monuments (Sanchi and Bhimbetka), Jabalpur’s Bhedaghat Marble Rocks, Bandhavgarh tiger safaris, and Khajuraho’s world-renowned temples.'
      },
      {
        question: 'What is the best starting and ending city for a 7-day MP itinerary?',
        answer: 'Starting in Bhopal (well-connected by air and Vande Bharat trains from Delhi and Mumbai) and concluding in Khajuraho (with direct flights to Delhi) minimizes backtrack travel and saves over 12 hours of highway transit.'
      },
      {
        question: 'How do you travel between Bhopal, Jabalpur, Bandhavgarh, and Khajuraho?',
        answer: 'We recommend taking the high-speed Vande Bharat or Jan Shatabdi Express train between Bhopal and Jabalpur (approx. 4 hours), followed by a chauffeured private air-conditioned vehicle for the forest leg to Bandhavgarh (3.5 hours) and onward to Khajuraho (5 hours).'
      },
      {
        question: 'What is the estimated budget for a 7-day Madhya Pradesh trip?',
        answer: 'A comfortable mid-range budget is ₹6,000 to ₹9,000 per person per day including private transport, 3-to-4-star heritage stays, two jungle safaris, entrance tickets, and authentic regional meals.'
      },
      {
        question: 'When is the best season to do this 7-day tour circuit?',
        answer: 'October to March offers cool, pleasant weather (12°C–28°C) across all heritage cities and open-jeep forest safaris. Wildlife viewing peaks from March to May when animals congregate around waterholes.'
      },
      {
        question: 'How far in advance should I book Bandhavgarh tiger safari permits?',
        answer: 'Book your core zone safari permits (especially Tala and Magdhi zones) 60 to 90 days in advance via mponline.gov.in, as daily vehicle quotas are strictly limited by the MP Forest Department.'
      }
    ],
    seo: {
      primaryKeyword: '7 day Madhya Pradesh itinerary',
      secondaryKeywords: ['Madhya Pradesh travel itinerary', 'Madhya Pradesh 1 week trip plan'],
      title: '7-Day Madhya Pradesh Itinerary: Complete 1-Week Travel Route',
      metaDescription: 'Discover the ultimate 7-day Madhya Pradesh travel itinerary. Complete route combining Bhopal, Sanchi Stupa, Bhimbetka, Bandhavgarh tiger safaris, and Khajuraho temples.'
    }
  },
  {
    id: 'jyotirlinga-3-day',
    slug: '3-day-ujjain-omkareshwar-jyotirlinga',
    title: '3-Day Ujjain & Omkareshwar Jyotirlinga Pilgrimage',
    subtitle: 'Sacred Circuit of Two Holy Jyotirlingas, Bhasma Aarti & The Narmada Ghats',
    durationDays: 3,
    route: ['Indore', 'Ujjain (Mahakaleshwar)', 'Omkareshwar (Mandhata Island)', 'Indore'],
    category: 'spiritual',
    image: '/images/omkareshwar-jyotirlinga.jpg',
    imageAlt: 'Sacred Omkareshwar Jyotirlinga temple standing beside the sacred Narmada river',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 3.0',
    summary: 'A spiritually enriching 3-day pilgrimage covering two of India’s most venerated Shiva Jyotirlingas: south-facing Mahakaleshwar in Ujjain and the island shrine of Omkareshwar on the Narmada River, beginning and ending in the culinary hub of Indore.',
    highlights: [
      'Attending the sacred dawn Bhasma Aarti at Mahakaleshwar Temple',
      'Walking through the monumental 900-meter Shri Mahakal Lok Corridor',
      'Holy ablutions at Ram Ghat along the Shipra River in Ujjain',
      'Boat crossing to Mandhata Island in Omkareshwar shaped like the "Om" symbol',
      'Darshan at both Omkareshwar and Mamleshwar temples',
      'Evening Narmada Maha Aarti with floating lamps'
    ],
    bestSeason: 'October to March (Also spiritually vibrant during Shravan and Maha Shivratri)',
    days: [
      {
        dayNumber: 1,
        title: 'Arrival in Indore & Journey to Ujjain',
        destination: 'Indore & Ujjain',
        description: 'Arrive at Indore Airport, savor morning Poha-Jalebi, and drive 55 km (under 1 hour) to holy Ujjain.',
        morning: 'Arrive in Ujjain, check in to your hotel near the temple. Visit Harsiddhi Temple (one of the 51 Shaktipeeths) and ancient Kal Bhairav Temple.',
        afternoon: 'Take an afternoon rest and prepare for the evening temple visit. Visit Ved Shala (historic 18th-century observatory).',
        evening: 'Enter the Mahakaleshwar Temple for Sandhya Aarti and spend the evening exploring the illuminated Shri Mahakal Lok Corridor.',
        transitTips: 'Superb 4-lane expressway between Indore and Ujjain.'
      },
      {
        dayNumber: 2,
        title: 'Mahakal Bhasma Aarti & Travel to Omkareshwar',
        destination: 'Ujjain to Omkareshwar',
        description: 'The holiest morning of the pilgrimage, followed by a scenic drive south to the Narmada.',
        morning: 'Attend the mystical Bhasma Aarti (04:00 AM to 06:00 AM). Take holy water from the sanctum. Breakfast in Ujjain.',
        afternoon: 'Check out and drive 140 km south via Indore to Omkareshwar (approx. 3.5 hours). Check into a riverside lodge.',
        evening: 'Walk across the suspension bridge (Jhula Pul) to Mandhata Island. Attend the evening Shayan Aarti and Narmada Aarti at the river ghats.',
        transitTips: 'Advance online booking for Bhasma Aarti is strongly recommended.'
      },
      {
        dayNumber: 3,
        title: 'Omkareshwar Island Darshan, Mamleshwar & Return to Indore',
        destination: 'Omkareshwar & Indore',
        description: 'Complete the sacred pilgrimage and return to Indore for evening street food before departure.',
        morning: 'Take a holy morning boat ride on the Narmada. Attend Mangala Darshan at Omkareshwar Temple on the island.',
        afternoon: 'Cross back to the south bank to pay respects at the ancient 10th-century Mamleshwar Temple. Enjoy a lunch of traditional Dal Bafla.',
        evening: 'Drive 77 km back to Indore. Spend the evening sampling street food at Sarafa Bazaar or Chappan Dukan before your night flight.',
        transitTips: 'Allow 2.5 hours travel time from Omkareshwar to Indore airport.'
      }
    ],
    transportAdvice: 'Book a round-trip private cab from Indore for the full 3 days for maximum comfort.',
    budgetGuidelines: 'Approx. ₹3,500–₹5,500 per person per day including private transport, temple guesthouse/hotel, and meals.',
    faqs: [
      {
        question: 'Can you cover both Mahakaleshwar and Omkareshwar in 3 days?',
        answer: 'Yes! Because Ujjain is located just 55 km north of Indore and Omkareshwar is 77 km south of Indore, 3 days is the golden timeframe to comfortably experience both sacred Jyotirlingas, attend Bhasma Aarti, and explore Indore’s food streets without rushing.'
      },
      {
        question: 'How do I book Mahakaleshwar Bhasma Aarti in Ujjain?',
        answer: 'Bhasma Aarti permits can be booked online through the official Mahakaleshwar Temple portal (shrimahakaleshwar.com) up to 30 to 60 days in advance. A limited number of on-arrival offline counter tickets are issued daily at 07:00 AM at the temple administrative office.'
      },
      {
        question: 'What is the dress code for Mahakaleshwar and Omkareshwar sanctum darshan?',
        answer: 'For entering the sanctum sanctorum (Garbhagriha) during Jalabhishek or Bhasma Aarti, traditional attire is mandatory: Men must wear a pure cotton/silk Dhoti and Kurta/Angavastram (unstitched lower garment); women must wear a Saree. Standard dress code applies for outer barricade darshan.'
      },
      {
        question: 'How far is Omkareshwar from Ujjain and Indore?',
        answer: 'Omkareshwar is approximately 77 km from Indore (around 2 to 2.5 hours by road) and 135 km from Ujjain (around 3.5 to 4 hours via Indore). Hiring a taxi from Indore provides the fastest and most flexible transit.'
      },
      {
        question: 'Is VIP or fast-track darshan available at Mahakaleshwar and Omkareshwar?',
        answer: 'Yes, both temples offer paid Shighra Darshan (fast-track queue) tickets (typically ₹250 to ₹750 per person) bookable at the temple ticket counters or via the official online portals, significantly reducing waiting time during weekends and festive periods.'
      },
      {
        question: 'Which other temples should I not miss during this pilgrimage?',
        answer: 'In Ujjain, visit Kal Bhairav (famous for liquor prasad), Harsiddhi Temple (one of the 51 Shaktipeeths), and the 900-meter Shri Mahakal Lok Corridor. In Omkareshwar, do not miss the 10th-century Mamleshwar Temple on the south bank and the evening Narmada Maha Aarti.'
      }
    ],
    seo: {
      primaryKeyword: 'Ujjain Omkareshwar itinerary 3 days',
      secondaryKeywords: ['Ujjain Omkareshwar Jyotirlinga tour', 'Mahakaleshwar Omkareshwar trip plan'],
      title: '3-Day Ujjain & Omkareshwar Itinerary: MP Jyotirlinga Tour Guide',
      metaDescription: 'Complete 3-day itinerary covering Mahakaleshwar in Ujjain and Omkareshwar on the Narmada River. Includes Bhasma Aarti booking, VIP darshan tips, and travel routes.'
    }
  },
  {
    id: 'tiger-safari-circuit',
    slug: 'wildlife-tiger-safari-circuit',
    title: '6-Day Central India Wildlife & Tiger Safari Circuit',
    subtitle: 'Track Royal Bengal Tigers in Kanha & Bandhavgarh National Parks',
    durationDays: 6,
    route: ['Jabalpur', 'Kanha Tiger Reserve', 'Bandhavgarh National Park', 'Jabalpur'],
    category: 'wildlife',
    image: '/images/bandhavgarh-national-park.jpg',
    imageAlt: 'Wild tiger in its natural forest habitat in Madhya Pradesh',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 4.0',
    summary: 'The ultimate wildlife expedition connecting India’s two greatest tiger sanctuaries: the vast Sal meadows of Kanha and the high-density hills of Bandhavgarh, with 6 to 8 safari drives for maximum predator viewing.',
    highlights: [
      'Up to 8 jeep safaris across core zones of Kanha and Bandhavgarh',
      'Spotting rare Hardground Barasingha deer in Kanha maidans',
      'High-probability tiger tracking in Tala and Mukki zones',
      'Expert naturalists guiding every safari drive'
    ],
    bestSeason: 'October to June (March-May is peak tiger sighting season)',
    days: [
      {
        dayNumber: 1,
        title: 'Arrival in Jabalpur & Drive to Kanha',
        destination: 'Kanha',
        description: 'Arrive at Jabalpur Airport and drive 160 km (3.5 hours) to Kanha Tiger Reserve.',
        morning: 'Arrival and scenic transfer to Kanha National Park.',
        afternoon: 'Check in to a wildlife eco-lodge near Khatia or Mukki gate.',
        evening: 'Orientation with naturalists and evening nature walk around lodge buffer.',
        transitTips: 'Private 4x4 or SUV transfer from Jabalpur.'
      },
      {
        dayNumber: 2,
        title: 'Full Day Safaris in Kanha Tiger Reserve',
        destination: 'Kanha',
        description: 'Morning and afternoon safaris in Kanha core zones.',
        morning: 'Dawn safari in Kanha Zone to spot Barasingha and tigers.',
        afternoon: 'Rest during hot hours; visit Kanha wildlife interpretation center.',
        evening: 'Afternoon safari in Mukki zone tracking wild dogs (dholes) and leopards.',
        transitTips: 'Wear earthy neutral clothing.'
      },
      {
        dayNumber: 3,
        title: 'Morning Safari & Transfer to Bandhavgarh',
        destination: 'Kanha to Bandhavgarh',
        description: 'Final morning safari at Kanha, followed by a 5-hour drive to Bandhavgarh.',
        morning: 'Morning safari in Kisli zone.',
        afternoon: 'Scenic transfer from Kanha to Bandhavgarh through rural MP countryside.',
        evening: 'Arrive in Bandhavgarh, check into wilderness lodge.',
        transitTips: 'Stay hydrated during the road transfer.'
      },
      {
        dayNumber: 4,
        title: 'Predator Tracking in Bandhavgarh (Tala Zone)',
        destination: 'Bandhavgarh',
        description: 'Explore the high-density tiger territory of Tala zone.',
        morning: 'Dawn safari in Tala zone visiting Shesh Shaiya statue.',
        afternoon: 'Lodge lunch and wildlife documentary screening.',
        evening: 'Afternoon drive in Magdhi zone around active waterholes.',
        transitTips: 'Book Tala zone permits months in advance.'
      },
      {
        dayNumber: 5,
        title: 'Deep Safaris & Buffer Night Drive',
        destination: 'Bandhavgarh',
        description: 'Explore Khitauli zone and experience a nocturnal buffer safari.',
        morning: 'Morning safari in Khitauli zone for sloth bears and wild elephants.',
        afternoon: 'Village walk in Tala village to see local Baiga tribal crafts.',
        evening: 'Exciting nocturnal night safari in Dhamokhar buffer zone.',
        transitTips: 'Buffer night drives require flashlights provided by park authorities.'
      },
      {
        dayNumber: 6,
        title: 'Farewell Safari & Return to Jabalpur',
        destination: 'Jabalpur',
        description: 'Final morning safari before departing to Jabalpur.',
        morning: 'Morning safari drive in Bandhavgarh.',
        afternoon: '3.5-hour drive back to Jabalpur Airport.',
        evening: 'Evening flight to Delhi, Mumbai, or onward destination.',
        transitTips: 'Ensure flight departs after 6:00 PM.'
      }
    ],
    transportAdvice: 'Private SUV vehicle with dedicated driver across all 6 days.',
    budgetGuidelines: '₹9,000–₹16,000 per person per day including private 4x4 safaris, naturalist fees, luxury wildlife lodge, and all meals.',
    faqs: [
      {
        question: 'How many safaris should you take to guarantee seeing a tiger?',
        answer: 'While wild sightings are never 100% guaranteed, taking 6 or more safaris split between Kanha and Bandhavgarh yields an over 92% cumulative tiger sighting success rate, while also offering regular encounters with leopards, sloth bears, and Barasingha.'
      },
      {
        question: 'Which park has higher tiger sightings: Kanha or Bandhavgarh?',
        answer: 'Bandhavgarh has the highest documented tiger density in India (frequent sightings in Tala and Magdhi zones). Kanha offers larger landscapes, vast open Sal meadows, rare Hardground Barasingha deer, and breathtaking wildlife photography backdrops. Combining both gives the ultimate Central India safari.'
      },
      {
        question: 'How far in advance do I need to book MP wildlife safari permits?',
        answer: 'Safari permits open 120 days in advance on the MP Forest Department portal (mponline.gov.in). Core zone permits sell out within minutes for peak season (November–April). We strongly recommend booking 90 to 120 days in advance.'
      },
      {
        question: 'What is the driving time and road distance between Kanha and Bandhavgarh?',
        answer: 'The distance is approximately 215 km and takes 4.5 to 5.5 hours via Mandla and Shahpura on well-paved state highways through scenic rural Madhya Pradesh landscapes.'
      },
      {
        question: 'Are national parks in Madhya Pradesh open during the monsoon season?',
        answer: 'Core zones of all MP tiger reserves are closed during the monsoon breeding season from July 1 to September 30. However, buffer zones (such as Dhamokhar at Bandhavgarh and Khatia buffer at Kanha) remain open year-round for safari drives and night excursions.'
      },
      {
        question: 'What clothing and camera gear are recommended for a tiger safari?',
        answer: 'Wear neutral, earthy tones (khaki, olive, brown, beige); avoid bright whites and neon colors. Morning winter drives can dip to 4°C, so layer up with windcheaters and fleece. For photography, a telephoto zoom lens (100–400mm or 200–600mm) paired with dust covers and beanbags is essential.'
      }
    ],
    seo: {
      primaryKeyword: 'Madhya Pradesh tiger safari itinerary',
      secondaryKeywords: ['Kanha Bandhavgarh wildlife package', 'best tiger safari circuit India'],
      title: 'Madhya Pradesh Tiger Safari Itinerary: 6-Day Kanha & Bandhavgarh Tour',
      metaDescription: 'Complete 6-day wildlife tiger safari itinerary for Madhya Pradesh connecting Kanha and Bandhavgarh National Parks. Sighting strategies, permit guide, and costs.'
    }
  },
  {
    id: 'heritage-triangle',
    slug: 'heritage-circuit-khajuraho-orchha-gwalior',
    title: '5-Day Northern MP Heritage Triangle',
    subtitle: 'Gwalior Fort, Medieval Orchha & The Sculpted Spires of Khajuraho',
    durationDays: 5,
    route: ['Gwalior', 'Datia', 'Orchha', 'Khajuraho'],
    category: 'heritage',
    image: '/images/khajuraho-temples.jpg',
    imageAlt: 'Magnificent carved sandstone temple at Khajuraho',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 4.0',
    summary: 'A mesmerizing journey through northern Madhya Pradesh showcasing the pinnacle of Indian fortress, palace, and temple architecture across Gwalior, Orchha, and Khajuraho.',
    highlights: [
      'Gwalior Fort and Man Mandir Palace turquoise glazed tiles',
      'The 7-story Bir Singh Palace at Datia',
      'Medieval Bundela palaces and sunset Chhatris along the Betwa River in Orchha',
      'Attending the Ram Raja Temple guard-of-honor in Orchha',
      'Detailed exploration of the UNESCO Khajuraho temple clusters'
    ],
    bestSeason: 'October to March',
    days: [
      {
        dayNumber: 1,
        title: 'Arrival in Gwalior & The Fort of Kings',
        destination: 'Gwalior',
        description: 'Arrive in Gwalior by morning Shatabdi/Vande Bharat or flight.',
        morning: 'Explore the 3-km Gwalior Fort plateau: Man Mandir Palace and Teli Ka Mandir.',
        afternoon: 'Visit Sas Bahu temples and descend past rock-cut Jain colossi.',
        evening: 'Watch the Sound and Light show at Gwalior Fort.',
        transitTips: 'Take local autos or hire a taxi for the day.'
      },
      {
        dayNumber: 2,
        title: 'Jai Vilas Palace & Journey to Orchha via Datia',
        destination: 'Gwalior to Orchha',
        description: 'European palace splendor, followed by the medieval stronghold of Orchha.',
        morning: 'Visit Jai Vilas Palace and Scindia Museum.',
        afternoon: 'Drive south, stopping at Datia to inspect the 7-story Bir Singh Palace.',
        evening: 'Arrive in Orchha, check into a riverside heritage property, and attend the evening Aarti at Ram Raja Temple.',
        transitTips: 'Total drive is 120 km (approx. 2.5 hours).'
      },
      {
        dayNumber: 3,
        title: 'Medieval Splendors of Orchha',
        destination: 'Orchha',
        description: 'Full day in the peaceful Bundela capital.',
        morning: 'Tour Jahangir Mahal and the vibrant 16th-century murals of Raja Mahal.',
        afternoon: 'Climb Chaturbhuj Temple for panoramic views; stroll through the royal Chhatris along the Betwa River.',
        evening: 'Sunset river rafting on the Betwa River.',
        transitTips: 'Orchha is completely walkable.'
      },
      {
        dayNumber: 4,
        title: 'Orchha to Khajuraho Temples',
        destination: 'Khajuraho',
        description: 'Scenic drive through Bundelkhand to the temple town of Khajuraho.',
        morning: 'Drive 170 km (approx. 3.5 hours) from Orchha to Khajuraho.',
        afternoon: 'Check in and visit the Eastern Group of Jain temples.',
        evening: 'Attend the Khajuraho Sound & Light show.',
        transitTips: 'Smooth highway along NH39.'
      },
      {
        dayNumber: 5,
        title: 'Khajuraho Western Group & Departure',
        destination: 'Khajuraho',
        description: 'Discover the world’s most famous stone carvings.',
        morning: 'Detailed morning tour of Kandariya Mahadeva, Lakshmana, and Chitragupta temples.',
        afternoon: 'Visit Raneh Falls (India’s mini Grand Canyon) 20 km away.',
        evening: 'Transfer to Khajuraho Airport or Railway Station.',
        transitTips: 'Direct flights to Delhi.'
      }
    ],
    transportAdvice: 'Private cab for the entire 5 days provides seamless door-to-door transit.',
    budgetGuidelines: '₹5,000–₹8,000 per person per day for mid-range heritage stays and private touring.',
    faqs: [
      {
        question: 'What is the best way to travel between Gwalior, Orchha, and Khajuraho?',
        answer: 'Hiring a private chauffeured vehicle from Gwalior is the smoothest way, as it allows you to stop at Datia Palace en route and travel door-to-door between Orchha and Khajuraho along NH39 in about 3.5 hours.'
      },
      {
        question: 'How many days are needed to thoroughly explore Khajuraho temples?',
        answer: 'Two days is ideal: 1 full day for the celebrated Western Group of Temples and the evening Sound & Light show, and another half day for the quieter Eastern Jain temples, Southern Group (Duladeo), and the cascading basalt formations of nearby Raneh Falls.'
      },
      {
        question: 'Is Orchha worth visiting between Gwalior and Khajuraho?',
        answer: 'Absolutely! Orchha is often described by travelers as their favorite stop in Central India. It is remarkably peaceful, walkable, and features monumental 16th-century Bundela palaces (Jahangir Mahal, Raja Mahal), sacred Ram Raja Temple, and sunset cenotaphs (Chhatris) reflecting in the pristine Betwa River.'
      },
      {
        question: 'What are the ticket fees and timings for the Western Group of Temples in Khajuraho?',
        answer: 'The Western Group is open sunrise to sunset. Entry tickets cost ₹40 for Indian citizens and ₹600 for foreign visitors (free for children under 15). Tickets can be booked seamlessly via the ASI online portal (asi.payumoney.com) or at the monument gate.'
      },
      {
        question: 'What is the best connection to return after completing the heritage tour?',
        answer: 'Khajuraho has its own airport with direct domestic flights to Delhi, as well as Khajuraho Railway Station with daily express and Vande Bharat trains connecting to Delhi (Hazrat Nizamuddin), Agra, and Varanasi.'
      }
    ],
    seo: {
      primaryKeyword: 'Madhya Pradesh heritage tour 5 days',
      secondaryKeywords: ['Gwalior Orchha Khajuraho itinerary', 'MP Golden Triangle tour'],
      title: '5-Day Madhya Pradesh Heritage Tour: Gwalior, Orchha & Khajuraho',
      metaDescription: 'Plan an unforgettable 5-day heritage trip through northern Madhya Pradesh. Complete guide to Gwalior Fort, Datia Palace, Orchha, and Khajuraho temples.'
    }
  }
];
