import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { destinations } from '../data/destinations';
import { wildlifeParks } from '../data/wildlife';
import { foodItems } from '../data/foods';
import { travelItineraries } from '../data/itineraries';
import { galleryPhotos, GalleryPhoto } from '../data/gallery';
import { FaqSection } from '../components/FaqSection';
import {
  Compass,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Calendar,
  Clock,
  Sparkles,
  MapPin,
  Camera,
  HeartHandshake,
  Layers,
  Eye,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenDarshanModal: (dest?: string) => void;
  onToggleWishlist: (item: {
    id: string;
    title: string;
    path: string;
    category: string;
    image: string;
  }) => void;
  isWishlisted: (id: string) => boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDarshanModal,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [activeGalleryTab, setActiveGalleryTab] = useState<'all' | 'worship' | 'nature' | 'taste' | 'heritage'>('all');

  const filteredGallery = activeGalleryTab === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === activeGalleryTab);

  const homeFaqs = [
    {
      question: 'Why is Madhya Pradesh called the Heart of India?',
      answer:
        'Geographically situated in the dead center of the Indian subcontinent, Madhya Pradesh ("Central Province") is fondly known as the Heart of India. Beyond geography, it represents the cultural heart where North and South Indian traditions coalesce — home to 3 UNESCO World Heritage Sites, two of the 12 sacred Shiva Jyotirlingas, the highest tiger population in India, and millennia of unbroken art and culinary history.',
    },
    {
      question: 'Which are the two sacred Jyotirlingas located in Madhya Pradesh?',
      answer:
        'Madhya Pradesh is blessed with two sacred Shiva Jyotirlingas: Mahakaleshwar in the ancient city of Ujjain (the only south-facing Jyotirlinga, famous for the dawn Bhasma Aarti) and Omkareshwar situated on the sacred island of Mandhata in the holy Narmada River in Khandwa district.',
    },
    {
      question: 'What is the best time of year to visit Madhya Pradesh?',
      answer:
        'The ideal time to visit is from October to March when temperatures are mild, sunny, and pleasant (ranging from 10°C to 28°C), making heritage site explorations and wildlife safaris comfortable. Wildlife viewing in national parks peaks between March and May around waterholes, while monsoon months (July to September) bring romantic mist and cascading waterfalls to Mandu and Pachmarhi.',
    },
    {
      question: 'Which national parks are best for tiger sightings in Madhya Pradesh?',
      answer:
        'Bandhavgarh National Park has the highest tiger density in India, making it the top choice for tiger photography. Kanha Tiger Reserve is famous for its vast Sal meadows and rare Hardground Barasingha. Pench National Park offers easy accessibility from Nagpur and open teakwood visibility, while Satpura Tiger Reserve provides unique walking safaris and Denwa river canoeing.',
    },
    {
      question: 'What are the must-try regional dishes in Madhya Pradesh?',
      answer:
        'Do not miss authentic steam-cooked Indore Poha with Ratlami sev and hot saffron Jalebi, traditional Dal Bafla drenched in pure desi ghee with spicy tuvar dal, midnight street food at Sarafa Bazaar (Garadu, Bhutte ka Kees), and royal slow-cooked Bhopali mutton biryani with Shami kebabs.',
    },
  ];

  return (
    <div className="bg-stone-50">
      {/* 1. Verified Hero with Background Travel Video */}
      <Hero
        onExploreClick={() => onNavigate('/destinations')}
        onPilgrimageClick={() => onNavigate('/destinations/omkareshwar-jyotirlinga')}
        onSafariClick={() => onNavigate('/wildlife/bandhavgarh-national-park')}
      />

      {/* 2. Welcome & Editorial Introduction */}
      <section className="py-20 bg-stone-100/70 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-3 font-mono">
              <Compass className="w-3.5 h-3.5 text-amber-700" />
              <span>Welcome to Central India</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-tight [text-wrap:balance]">
              An Unbroken Tapestry of Spirit, Stone & Wilderness
            </h2>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed mt-4">
              Madhya Pradesh is not simply a travel destination — it is an intimate encounter with the eternal spirit of India. From the holy banks of the pristine Narmada River to the world-renowned sculpted temples of Khajuraho and the roaring wilderness of tiger sanctuaries, prepare for a journey that moves both soul and senses.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Destinations Grid (Khajuraho, Omkareshwar, Bandhavgarh, Gwalior Fort, Sanchi Stupa, Orchha, Mahakal, Sarafa) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold mb-2">
              Explore The Heart of India
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Featured Destinations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/destinations')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900 group whitespace-nowrap"
          >
            <span>View all 12+ destination guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 6).map((dest) => {
            const wish = isWishlisted(dest.id);
            return (
              <article
                key={dest.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={dest.image}
                    alt={dest.imageAlt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {dest.isUnesco && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-mono tracking-wider font-semibold uppercase border border-amber-400/30">
                      UNESCO World Heritage
                    </span>
                  )}
                  <button
                    onClick={() =>
                      onToggleWishlist({
                        id: dest.id,
                        title: dest.name,
                        path: `/destinations/${dest.slug}`,
                        category: dest.category.toUpperCase(),
                        image: dest.image,
                      })
                    }
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md text-white transition-colors"
                    aria-label={wish ? `Remove ${dest.name} from saved` : `Save ${dest.name}`}
                  >
                    {wish ? (
                      <BookmarkCheck className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Bookmark className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed metadata separator */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="capitalize">{dest.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.region} Region</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.suggestedDuration}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {dest.name}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {dest.summary}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs text-stone-500">
                      Best: {dest.bestTimeToVisit.idealSeason.split('(')[0]}
                    </span>
                    <button
                      onClick={() => onNavigate(`/destinations/${dest.slug}`)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 group-hover:text-amber-900 hover:underline"
                    >
                      <span>Read guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. Special Spiritual Tourism Spotlight (Omkareshwar & Mahakaleshwar) */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-14">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Sacred Shaivite Sanctuaries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                The Sacred Jyotirlinga Circuit
              </h2>
              <p className="text-stone-300 text-base sm:text-lg mt-4 leading-relaxed">
                Madhya Pradesh is the only state in northern-central India home to two of the twelve revered Jyotirlingas: south-facing Mahakaleshwar in Ujjain and the holy island of Omkareshwar on the Narmada River.
              </p>
            </div>

            <button
              onClick={() => onOpenDarshanModal('omkareshwar')}
              className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-colors shadow-md whitespace-nowrap shrink-0"
            >
              Open Darshan & Ritual Guide
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Omkareshwar Feature Box */}
            <div className="bg-stone-800/80 rounded-2xl overflow-hidden border border-stone-700/80 flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto relative bg-stone-950">
                <img
                  src="/images/omkareshwar-jyotirlinga.jpg"
                  alt="Omkareshwar Jyotirlinga Temple on Mandhata Island in the Narmada River"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Khandwa District · Narmada Island
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    Omkareshwar Jyotirlinga
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    Perched upon Mandhata Island naturally sculpted in the sacred form of "ॐ". Pilgrims pay homage at both the island shrine and Mamleshwar temple on the south bank.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-700 flex items-center justify-between">
                  <span className="text-xs text-stone-400">77 km south of Indore</span>
                  <button
                    onClick={() => onNavigate('/destinations/omkareshwar-jyotirlinga')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline"
                  >
                    <span>Read complete guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mahakaleshwar Feature Box */}
            <div className="bg-stone-800/80 rounded-2xl overflow-hidden border border-stone-700/80 flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-[4/3] sm:aspect-auto relative bg-stone-950">
                <img
                  src="/images/mahakaleshwar-ujjain.jpg"
                  alt="Mahakaleshwar Jyotirlinga temple tower in Ujjain"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 sm:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    Ujjain · Shipra River
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1">
                    Mahakaleshwar Jyotirlinga
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm mt-3 leading-relaxed">
                    The supreme Dakshinmukhi shrine renowned for its dawn Bhasma Aarti and the monumental 900-meter Shri Mahakal Lok Corridor adorned with sandstone pillars.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-700 flex items-center justify-between">
                  <span className="text-xs text-stone-400">55 km north of Indore</span>
                  <button
                    onClick={() => onNavigate('/destinations/mahakaleshwar-ujjain')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 hover:underline"
                  >
                    <span>Read complete guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Wildlife & Tiger Sanctuaries (Tiger State of India) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold mb-2">
              Tiger State of India (785+ Tigers)
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
              Wildlife & National Parks
            </h2>
          </div>
          <button
            onClick={() => onNavigate('/wildlife')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-800 hover:text-emerald-900 group whitespace-nowrap"
          >
            <span>Explore all national parks</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wildlifeParks.map((park) => (
            <article
              key={park.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                <img
                  src={park.image}
                  alt={park.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-wider uppercase text-emerald-700 font-semibold">
                    {park.location.split(',')[0]}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors mt-0.5">
                    {park.name}
                  </h3>
                  <p className="text-stone-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                    {park.summary}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500 font-medium">Core Safari Zones</span>
                  <button
                    onClick={() => onNavigate(`/wildlife/${park.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:underline"
                  >
                    <span>Safari guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. Authentic Malwa Cuisine & Indore Street Food Trail */}
      <section className="py-20 bg-stone-100/80 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-2">
                Gastronomy & Culinary Heritage
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                The Flavors of Madhya Pradesh
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/food-and-cuisine')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-800 hover:text-amber-900 group whitespace-nowrap"
            >
              <span>Explore full food trail</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodItems.map((food) => (
              <article
                key={food.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={food.image}
                    alt={food.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-amber-800 font-semibold">
                      {food.region}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors mt-0.5">
                      {food.name}
                    </h3>
                    <p className="text-stone-600 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {food.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-500 font-medium">{food.approximatePrice.split('(')[0]}</span>
                    <button
                      onClick={() => onNavigate(`/food-and-cuisine/${food.slug}`)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:underline"
                    >
                      <span>Read recipe & spots</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Categorized Photo Gallery (Worship, Nature, Taste, Heritage) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-2">
            Visual Chronicle
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Madhya Pradesh in Photographs
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Authentic, verified imagery documenting the sacred shrines, natural sanctuaries, and living culture of Central India.
          </p>

          {/* Gallery Category Filter Tabs */}
          <div className="inline-flex items-center p-1 bg-stone-200/70 rounded-xl mt-6 gap-1">
            {(['all', 'worship', 'nature', 'taste', 'heritage'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveGalleryTab(tab)}
                className={`px-3 sm:px-4 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                  activeGalleryTab === tab
                    ? 'bg-white text-stone-950 shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {tab === 'all' ? 'All Gallery' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((photo) => (
            <div
              key={photo.id}
              className="group relative rounded-2xl overflow-hidden bg-stone-900 border border-stone-200 shadow-sm aspect-[4/3]"
            >
              <img
                src={photo.image}
                alt={photo.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold">
                  {photo.location}
                </span>
                <h4 className="font-serif text-base font-bold text-white mt-0.5">
                  {photo.title}
                </h4>
                <p className="text-xs text-stone-300 line-clamp-2 mt-1 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Curated Travel Circuits & Itineraries */}
      <section className="py-20 bg-stone-900 text-white border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold mb-2">
                Hassle-Free Travel Planning
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Curated Travel Circuits
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/travel-guides')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 group whitespace-nowrap"
            >
              <span>View all itineraries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelItineraries.map((itinerary) => (
              <div
                key={itinerary.id}
                className="bg-stone-800/90 rounded-2xl p-6 border border-stone-700 flex flex-col justify-between hover:border-amber-400/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400 font-semibold mb-2">
                    <span>{itinerary.durationDays} DAYS</span>
                    <span className="uppercase">{itinerary.category}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white leading-snug">
                    {itinerary.title}
                  </h3>
                  <p className="text-xs text-stone-300 mt-3 line-clamp-3 leading-relaxed">
                    {itinerary.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {itinerary.route.map((city, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-stone-400 bg-stone-900/60 px-2 py-0.5 rounded border border-stone-700/60"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-700/80 flex items-center justify-between">
                  <span className="text-[11px] text-stone-400">Best: {itinerary.bestSeason.split('(')[0]}</span>
                  <button
                    onClick={() => onNavigate(`/travel-guides/${itinerary.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline"
                  >
                    <span>View plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Traveler FAQs Section */}
      <FaqSection
        faqs={homeFaqs}
        title="Frequently Asked Questions About Visiting Madhya Pradesh"
        subtitle="Practical guidance on seasonal timing, Jyotirlingas, tiger safaris, and transport hubs"
      />
    </div>
  );
};
