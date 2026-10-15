export interface SeoMeta {
  primaryKeyword: string;
  secondaryKeywords: [string, string];
  title: string;
  metaDescription: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface HowToReach {
  air: string;
  rail: string;
  road: string;
  nearestHub: string;
}

export interface ItinerarySuggestion {
  halfDay?: string;
  fullDay?: string;
  multiDay?: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: 'spiritual' | 'heritage' | 'wildlife' | 'nature' | 'urban';
  region: 'Malwa' | 'Nimar' | 'Bundelkhand' | 'Mahakoshal' | 'Gird' | 'Baghelkhand' | 'Bhopal';
  isUnesco?: boolean;
  image: string;
  imageAlt: string;
  imageCredit: string;
  summary: string;
  whyVisit: string;
  historyAndSignificance: string[];
  keyAttractions: {
    title: string;
    description: string;
  }[];
  whatToSeeAndDo: string[];
  suggestedDuration: string;
  howToReach: HowToReach;
  bestTimeToVisit: {
    idealSeason: string;
    details: string;
  };
  entryAndTiming: {
    hours: string;
    fees: string;
    photography?: string;
    bookingNotes?: string;
  };
  itinerary: ItinerarySuggestion;
  practicalTips: string[];
  visitorEtiquette: string[];
  faqs: FaqItem[];
  nearbyAttractions: {
    name: string;
    distance: string;
    slug?: string;
  }[];
  seo: SeoMeta;
}

export interface WildlifePark {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  location: string;
  habitat: string;
  keyFauna: string[];
  image: string;
  imageAlt: string;
  imageCredit: string;
  summary: string;
  whySpecial: string;
  safariZones: {
    zoneName: string;
    type: 'Core' | 'Buffer';
    description: string;
  }[];
  safariTimingsAndBooking: {
    morningShift: string;
    eveningShift: string;
    closedOn: string;
    bookingProcess: string;
  };
  bestTime: string;
  howToReach: HowToReach;
  conservationEthics: string[];
  faqs: FaqItem[];
  seo: SeoMeta;
}

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  hindiName?: string;
  region: string;
  category: 'breakfast' | 'main-course' | 'street-food' | 'dessert' | 'beverage';
  image: string;
  imageAlt: string;
  imageCredit: string;
  summary: string;
  whatIsIt: string;
  appearanceAndTaste: string;
  keyIngredients: string[];
  traditionalPreparation: string;
  culturalBackground: string;
  howServed: string;
  whereToTry: {
    place: string;
    location: string;
    tip?: string;
  }[];
  approximatePrice: string;
  dietaryInfo: {
    isVegetarian: boolean;
    allergens: string;
  };
  tipsForVisitors: string[];
  relatedDishes: string[];
  faqs: FaqItem[];
  seo: SeoMeta;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  destination: string;
  description: string;
  morning: string;
  afternoon: string;
  evening: string;
  transitTips: string;
}

export interface TravelItinerary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  durationDays: number;
  route: string[];
  category: 'grand-circuit' | 'spiritual' | 'wildlife' | 'heritage' | 'food';
  image: string;
  imageAlt: string;
  imageCredit: string;
  overview?: string;
  summary?: string;
  highlights: string[];
  bestSeason: string;
  days: ItineraryDay[];
  transportAdvice: string;
  budgetGuidelines: string;
  faqs: FaqItem[];
  seo: SeoMeta;
}

export interface FestivalItem {
  id: string;
  name: string;
  location: string;
  timing: string;
  category: 'dance' | 'music' | 'tribal' | 'religious';
  image: string;
  description: string;
  highlights: string[];
  visitorEtiquette: string;
}
