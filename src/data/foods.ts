import { FoodItem } from '../types';

export const foodItems: FoodItem[] = [
  {
    id: 'poha-jalebi',
    slug: 'indore-poha-jalebi',
    name: 'Indore Poha & Jalebi',
    hindiName: 'इन्दौरी पोहा और जलेबी',
    region: 'Malwa (Indore & Ujjain)',
    category: 'breakfast',
    image: '/images/indore-poha-jalebi.jpg',
    imageAlt: 'Authentic plate of steam-cooked Indori poha topped with spicy Ratlami sev and fresh coriander',
    imageCredit: 'Wikimedia Commons / Public Domain',
    summary: 'Indore-style Poha paired with hot, crispy saffron Jalebi is the undisputed king of breakfasts across Madhya Pradesh. Unlike standard pressed poha found elsewhere in India, Indori poha is uniquely steamed over a simmering water bath, resulting in light, feather-soft flakes infused with turmeric, fennel seeds, and proprietary Jeeravan spice.',
    whatIsIt: 'A celebrated morning ritual combining savory, aromatic steamed flattened rice (poha) with sweet, syrup-laden, coiled golden fritters (jalebi). The poha is generously crowned with crunchy spicy Ratlami sev (chickpea noodles spiced with black pepper and clove), finely diced raw red onions, pomegranate seeds (anar dana), fresh green coriander, and a spritz of fresh lime juice.',
    appearanceAndTaste: 'Vibrant golden-yellow flattened rice grains that remain distinct and fluffy rather than mushy. The taste is a harmonious explosion of soft savory sweetness from fennel, tang from fresh lime, subtle warmth from Jeeravan spice powder, punctuated by the sharp crunch of spicy sev and sweet contrast of warm jalebi.',
    keyIngredients: [
      'Thick Flattened Rice (Poha / Chivda)',
      'Fennel Seeds (Saunf - signature Malwa flavor)',
      'Mustard Seeds & Cumin Seeds',
      'Turmeric Powder & Green Chillies',
      'Ratlami Sev (Spiced chickpea crisp noodles)',
      'Jeeravan Masala (Blend of 20+ roasted digestive spices)',
      'Fresh Pomegranate Seeds & Chopped Coriander',
      'Fermented All-Purpose Flour & Saffron Sugar Syrup for Jalebi'
    ],
    traditionalPreparation: 'The flattened rice is gently washed and soaked for just 2 minutes, then drained thoroughly. In a large kadai, mustard seeds, cumin, green chillies, and generous amounts of fennel seeds are tempered in groundnut oil with turmeric and sugar. The soaked poha is gently folded in and placed in a double-boiler or perforated metal vessel over bubbling water. Steaming ensures the poha retains moisture and remains warm for hours without becoming greasy. Fresh hot jalebis are piped directly into hot ghee, fried crisp, and soaked in cardamom-saffron syrup.',
    culturalBackground: 'Introduced to the Malwa region during the Holkar Maratha rule in the 18th century, Poha evolved into a distinct regional art form in Indore. Today, eating poha-jalebi at sunrise is a cultural passion shared by students, executives, and visiting tourists alike.',
    howServed: 'Served on traditional paper plates or leaf platters (dona) piping hot. Customers specify their sev preference (spicy Ratlami laung sev, mild ujjaini sev, or sweet boondi).',
    whereToTry: [
      {
        place: 'Prashant Poha',
        location: 'Rajwada & Jail Road, Indore',
        tip: 'Famous for their secret Jeeravan spice blend and feather-light steaming.'
      },
      {
        place: 'Headgear (Apna Sweets)',
        location: 'New Palasia, Indore',
        tip: 'Try their giant crispy desi ghee jalebis paired with fresh poha.'
      },
      {
        place: 'Chappan Dukan',
        location: '56 Shops, New Palasia, Indore',
        tip: 'Multiple iconic morning stalls serving poha from 6:00 AM onwards.'
      }
    ],
    approximatePrice: '₹30 – ₹60 per plate (Poha + Jalebi combo)',
    dietaryInfo: {
      isVegetarian: true,
      allergens: 'Gluten in Jalebi; Poha itself is gluten-free.'
    },
    tipsForVisitors: [
      'Always ask the vendor to sprinkle extra Jeeravan masala on top for the authentic Malwa punch.',
      'Sip a cup of hot adrak-cardamom chai or cold Shikanji alongside your breakfast.',
      'Best enjoyed early between 06:30 AM and 09:30 AM when the batch is freshly steamed.'
    ],
    relatedDishes: ['Usal Poha', 'Jaleba (giant jalebi)', 'Sabudana Khichdi', 'Kachori with Chutney'],
    faqs: [
      {
        question: 'What makes Indore-style poha different from Maharashtra or Gujarat poha?',
        answer: 'Indori poha is steam-cooked in a double-boiler rather than sauteed in an oily pan, keeping it exceptionally light and non-greasy. It is heavily flavored with fennel seeds (saunf) and uniquely dusted with Jeeravan masala and Ratlami sev.'
      },
      {
        question: 'What is Jeeravan masala?',
        answer: 'Jeeravan is an iconic Malwa digestive spice blend made of over 20 roasted spices including roasted cumin, caraway, dry ginger, black salt, amchur, nutmeg, mace, cinnamon, and asafoetida.'
      }
    ],
    seo: {
      primaryKeyword: 'Indore poha jalebi',
      secondaryKeywords: ['famous breakfast in Indore', 'Madhya Pradesh food'],
      title: 'Indore Poha Jalebi: The Iconic Malwa Breakfast Guide',
      metaDescription: 'Discover why Indore Poha Jalebi is India’s favorite breakfast. Learn about steam-cooked poha, Jeeravan masala, Ratlami sev, where to eat, and authentic recipes.'
    }
  },
  {
    id: 'dal-bafla',
    slug: 'dal-bafla',
    name: 'Dal Bafla',
    hindiName: 'दाल बाफला',
    region: 'Malwa, Nimar & Bundelkhand',
    category: 'main-course',
    image: '/images/dal-bafla.jpg',
    imageAlt: 'Authentic Malwa Dal Bafla thali with golden baked baflas immersed in desi ghee, spicy dal, and chutneys',
    imageCredit: 'Wikimedia Commons / CC-BY-SA 3.0 (Nirav Dave)',
    summary: 'Dal Bafla is the crowning jewel of Madhya Pradesh heritage gastronomy. While superficially resembling Rajasthani Dal Baati, the preparation of the dough ball (Bafla) is distinct: the wheat dumplings are first boiled in bubbling water with turmeric and spices, and subsequently baked over cow-dung charcoal embers until golden and cracked, before being submerged in rich desi ghee.',
    whatIsIt: 'A royal feast consisting of round, golden, cracked wheat balls soaked in pure clarified butter (desi ghee), served with a spicy, aromatic tuvar/chana dal, roasted spiced eggplant mash (baigan ka bharta), sweet wheat halwa (laddoo), and pungent garlic chutney (lahsun ki chutney).',
    appearanceAndTaste: 'Crusty, golden-brown on the exterior with a fragrant roasted aroma, giving way to an impossibly tender, melt-in-the-mouth, ghee-infused interior. The rich, buttery bread harmonizes perfectly with the zesty, piping hot, cumin-tempered yellow lentils and fiery red garlic chutney.',
    keyIngredients: [
      'Coarse Whole Wheat Flour (Gehun ka Aata)',
      'Semolina (Sooji) & Besan (Gram Flour)',
      'Desi Ghee (Clarified Butter)',
      'Carom Seeds (Ajwain) & Fennel Seeds',
      'Baking Soda & Turmeric Powder',
      'Tuvar (Pigeon Pea) & Chana Dal for the lentil broth',
      'Whole Red Chillies, Garlic, Cloves & Cumin for tempering'
    ],
    traditionalPreparation: 'A stiff dough is prepared from coarse wheat flour, semolina, ajwain, turmeric, and melted ghee. Hand-rolled balls are placed in boiling water until they float to the surface (signifying the interior is pre-cooked). They are retrieved, dried, and baked in a traditional clay oven or over glowing charcoal embers till the crust develops characteristic cracks and a smoky char. The hot bafla is crushed with both hands and immediately drowned in a bowl of hot pure desi ghee until thoroughly saturated.',
    culturalBackground: 'Originally crafted as a sturdy, nourishing meal for Rajput warriors and Malwa agriculturalists, Dal Bafla was elevated to aristocratic banquet status during festivals, family weddings, and religious gatherings in Ujjain, Indore, and Ratlam.',
    howServed: 'Served on a large stainless-steel thali or banana leaf. Diners crush the ghee-soaked bafla into coarse crumbs, pour ladles of boiling dal over it, and mix in spicy garlic chutney, sweet choorma laddoo, and kadi.',
    whereToTry: [
      {
        place: 'Rajhans Thali',
        location: 'Sarafa Bazaar, Indore',
        tip: 'The historic temple of Dal Bafla in Indore; limitless desi ghee service.'
      },
      {
        place: 'Hotel Guru Kripa',
        location: 'Sarwate Bus Stand, Indore',
        tip: 'Affordable and authentic local favorite since 1956.'
      },
      {
        place: 'Mahakal Mandir Bhojanalaya',
        location: 'Ujjain',
        tip: 'Traditional sattvic preparation served with holy reverence.'
      }
    ],
    approximatePrice: '₹150 – ₹350 for an unlimited thali',
    dietaryInfo: {
      isVegetarian: true,
      allergens: 'Contains Wheat (Gluten) and Dairy (Ghee).'
    },
    tipsForVisitors: [
      'Do not be shy with the ghee! The authentic magic of Dal Bafla depends upon complete ghee saturation.',
      'Pair with sliced raw onions, green chillies, and a pinch of rock salt.'
    ],
    relatedDishes: ['Dal Baati Churma', 'Litti Chokha', 'Puran Poli', 'Besan Chakki'],
    faqs: [
      {
        question: 'How is Dal Bafla different from Dal Baati?',
        answer: 'While Rajasthani Baati is baked directly from raw dough, Madhya Pradesh Bafla is boiled in bubbling water first before being baked. This crucial boiling step gives the bafla its uniquely soft, spongy, melt-in-the-mouth texture.'
      },
      {
        question: 'Is Dal Bafla heavy to digest?',
        answer: 'While rich in pure ghee, the addition of carom seeds (ajwain), asafoetida (hing), and digestive garlic chutney in traditional recipes aids digestion.'
      }
    ],
    seo: {
      primaryKeyword: 'dal bafla Madhya Pradesh',
      secondaryKeywords: ['traditional Madhya Pradesh food', 'Malwa cuisine'],
      title: 'Dal Bafla Guide: Authentic Malwa Recipe, History & Top Spots',
      metaDescription: 'Discover Dal Bafla, the crown jewel of Madhya Pradesh cuisine. Learn how wheat baflas are boiled, baked, and drenched in desi ghee with spicy dal.'
    }
  },
  {
    id: 'sarafa-street-food',
    slug: 'sarafa-bazaar-indore',
    name: 'Sarafa Bazaar Midnight Street Food',
    hindiName: 'सराफा बाज़ार नाइट फ़ूड मार्केट',
    region: 'Indore',
    category: 'street-food',
    image: '/images/sarafa-bazaar.jpg',
    imageAlt: 'Vibrant night street food stalls and bustling crowds at Sarafa Bazaar in Indore',
    imageCredit: 'Project Archive / Editorial Fair Use',
    summary: 'Sarafa Bazaar is India’s only midnight street food market situated inside an active gold and silver jewelry district. When the jewelry showrooms shutter their heavy brass locks around 8:30 PM, over 100 gastronomic food stalls roll out mobile carts, serving food lovers until 2:00 in the morning.',
    whatIsIt: 'A legendary culinary night market offering regional specialties you cannot find anywhere else in India: crispy spiced Garadu (fried purple yam), velvety Bhutte ka Kees (milk-tempered sweet corn), Joshi Dahi Bada (where spiced yogurt vadas are tossed into the air without spilling a drop), Malpua, and dramatic Fire Paan.',
    appearanceAndTaste: 'A sensory spectacle of glowing lights, sizzling hot tavas, steam rising from milk cauldrons, and aromas of roasted cumin, fried yam, and cardamom sweets.',
    keyIngredients: [
      'Purple Yam (Garadu) & Chaat Spices',
      'Tender Sweet Corn (Bhutte) & Whole Milk',
      'Lentil Dumplings & Sweetened Curd (Dahi Bada)',
      'Khoya (Mawa) & Sugar Syrup for Jaleba & Malpua',
      'Betel Leaves, Gulkand, Cloves & Camphor for Fire Paan'
    ],
    traditionalPreparation: 'Stall holders prepare their signature specialties on mammoth cast-iron griddles and cauldrons directly before the visitors’ eyes, maintaining recipes handed down across three generations.',
    culturalBackground: 'Legend holds that the market was encouraged centuries ago by jewelry shop owners who welcomed late-night street food vendors outside their shops because their active presence deterred nighttime burglaries.',
    howServed: 'Served on compostable leaf dona cups or paper plates eaten standing up amidst the lively pedestrian crowds.',
    whereToTry: [
      {
        place: 'Joshi Dahi Bada House',
        location: 'Sarafa Bazaar',
        tip: 'Watch the owner juggle the dahi bada bowl with one hand before dusting it with five colored spices.'
      },
      {
        place: 'Sanwariya Seth Bhutte Ka Kees',
        location: 'Sarafa Bazaar',
        tip: 'The gold-standard for slow-cooked sweet corn in milk and coconut.'
      },
      {
        place: 'Nagori Ki Shikanji',
        location: 'Sarafa Bazaar',
        tip: 'Unlike lemon shikanji, Indori Shikanji is a thick, chilled shake made from reduced milk, rabdi, and yogurt.'
      }
    ],
    approximatePrice: '₹50 – ₹150 per dish',
    dietaryInfo: {
      isVegetarian: true,
      allergens: 'Dairy prevalent across multiple stalls.'
    },
    tipsForVisitors: [
      'Arrive between 09:30 PM and 11:30 PM when the energy is peak and all stalls are fully operational.',
      'Wear comfortable footwear as the entire market street is pedestrian-only.'
    ],
    relatedDishes: ['Garadu Chaat', 'Bhutte Ka Kees', 'Jaleba', 'Kulfi Falooda', 'Coconut Crush'],
    faqs: [
      {
        question: 'What time does Sarafa Bazaar open and close?',
        answer: 'Food carts begin setting up at 8:30 PM after jewelry stores close, reaching peak activity around 10:00 PM and continuing until 1:30 AM or 2:00 AM.'
      },
      {
        question: 'Is all food at Sarafa Bazaar vegetarian?',
        answer: 'Yes! Sarafa Bazaar is 100% vegetarian, in keeping with the traditions of the jeweler community and local cuisine.'
      }
    ],
    seo: {
      primaryKeyword: 'Sarafa Bazaar Indore',
      secondaryKeywords: ['Indore street food', 'Sarafa night market'],
      title: 'Sarafa Bazaar Indore: Midnight Street Food Market Guide',
      metaDescription: 'Experience Sarafa Bazaar, Indore’s midnight street food carnival. Complete guide to Garadu, Bhutte ka Kees, Joshi Dahi Bada, timings, and must-try delicacies.'
    }
  },
  {
    id: 'bhopali-cuisine',
    slug: 'bhopali-biryani-and-kebabs',
    name: 'Bhopali Biryani & Royal Nawabi Cuisine',
    hindiName: 'भोपाली बिरयानी और कबाब',
    region: 'Bhopal',
    category: 'main-course',
    image: '/images/bhopali-biryani.jpg',
    imageAlt: 'Fragrant Bhopali mutton dum biryani garnished with fried onions, mint, and fresh saffron strands',
    imageCredit: 'Project Archive / Editorial Fair Use',
    summary: 'The royal cuisine of Bhopal is deeply influenced by its centuries of Afghan and Mughal courtly heritage, refined under the cultured reign of the Begums of Bhopal. Bhopali cuisine is characterized by its subtle, aromatic use of whole spices, slow dum cooking, and game meat traditions like spicy Filfora.',
    whatIsIt: 'A feast of delicately spiced slow-cooked Mutton Biryani (where meat is marinated in yogurt, raw papaya, and whole garam masala before being sealed in a clay handi with long-grain aged Basmati rice), accompanied by melt-in-the-mouth Shami Kebabs, crispy Baqarkhani flatbreads, and pink Sulemani salt tea.',
    appearanceAndTaste: 'Long, glistening grains of saffron-stained basmati rice intermingled with tender, succulent bone-in meat pieces. The flavor is understated, deeply aromatic, and fragrant with mace, cardamom, and rose water rather than burning fiery chillies.',
    keyIngredients: [
      'Aged Long-Grain Basmati Rice',
      'Tender Goat Mutton or Spring Chicken',
      'Desi Ghee & Mustard Oil',
      'Green Cardamom, Mace (Javitri), Star Anise & Nutmeg',
      'Fresh Mint Leaves & Crisp Golden Brown Onions (Birista)',
      'Kewra Water & Kashmiri Saffron Milk'
    ],
    traditionalPreparation: 'The meat is marinated overnight with ginger-garlic paste, curd, and hand-ground spices. Parboiled fragrant basmati rice is layered over the meat inside a heavy copper degh, sealed with wheat flour dough, and placed over slow coal embers (dum) for two hours.',
    culturalBackground: 'Developed in royal royal kitchens under the patronages of Nawab Sikandar Begum and Nawab Shah Jahan Begum, who preferred sophisticated bouquet aromas over crude heat.',
    howServed: 'Served on silver platters accompanied by creamy Mirchi ka Salan, cucumber raita, and sliced lemon wedges.',
    whereToTry: [
      {
        place: 'Hakeem Hotel',
        location: 'New Market & MP Nagar, Bhopal',
        tip: 'The undisputed landmark for Bhopali biryani, mutton korma, and chicken changezi.'
      },
      {
        place: 'Chatori Gali',
        location: 'Old City, Ibrahimpura, Bhopal',
        tip: 'Historic narrow alleyway serving shami kebabs, seekh kebabs, and paaya soup after dusk.'
      }
    ],
    approximatePrice: '₹200 – ₹450 per serving',
    dietaryInfo: {
      isVegetarian: false,
      allergens: 'Dairy (Ghee, curd).'
    },
    tipsForVisitors: [
      'Finish your meal with a cup of hot, steaming Sulemani chai (salt tea topped with crushed almonds) from local street stalls in Old Bhopal.'
    ],
    relatedDishes: ['Filfora (minced meat with whole spices)', 'Bhopali Gosht Korma', 'Rizala', 'Shami Kebab'],
    faqs: [
      {
        question: 'What is special about Bhopali Biryani compared to Hyderabadi or Lucknowi?',
        answer: 'Bhopali biryani strikes a delicate balance between the rich, spicy intensity of Hyderabadi biryani and the subtle mildness of Lucknowi dum pukht, using distinctive whole ground spices like mace and dried mint.'
      }
    ],
    seo: {
      primaryKeyword: 'famous food in Bhopal',
      secondaryKeywords: ['Bhopali biryani', 'Bhopal food guide'],
      title: 'Bhopali Cuisine: Royal Biryani, Kebabs & Food Trail Guide',
      metaDescription: 'Discover the royal Nawabi gastronomy of Bhopal. Complete guide to authentic Bhopali mutton biryani, shami kebabs, Chatori Gali, and where to eat.'
    }
  }
];
