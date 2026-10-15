import React, { useEffect } from 'react';
import { Destination } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { updatePageSeo } from '../utils/seo';
import {
  MapPin,
  Calendar,
  Clock,
  Car,
  Train,
  Plane,
  AlertCircle,
  CheckCircle,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  Compass,
} from 'lucide-react';

interface DestinationDetailPageProps {
  destination: Destination;
  onNavigate: (path: string) => void;
  onToggleWishlist: (item: {
    id: string;
    title: string;
    path: string;
    category: string;
    image: string;
  }) => void;
  isWishlisted: (id: string) => boolean;
  onOpenDarshanModal: (dest?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destination,
  onNavigate,
  onToggleWishlist,
  isWishlisted,
  onOpenDarshanModal,
}) => {
  const wish = isWishlisted(destination.id);

  // Synchronize SEO & Schema.org JSON-LD
  useEffect(() => {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'TouristAttraction',
      name: destination.name,
      description: destination.summary,
      image: destination.image,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
      isAccessibleForFree: destination.entryAndTiming.fees.toLowerCase().includes('free'),
    };

    updatePageSeo(destination.seo, `/destinations/${destination.slug}`, schemaData);
    window.scrollTo(0, 0);
  }, [destination]);

  const isOmkareshwar = destination.slug === 'omkareshwar-jyotirlinga';

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs
        items={[
          { label: 'Destinations', path: '/destinations' },
          { label: destination.name },
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Visual Section */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase font-semibold mb-3">
            <span>{destination.category}</span>
            <span aria-hidden="true">·</span>
            <span>{destination.region} Region</span>
            {destination.isUnesco && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-amber-900 font-bold">UNESCO World Heritage</span>
              </>
            )}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] [text-wrap:balance]">
            {destination.name}
          </h1>
          <p className="text-lg sm:text-xl text-stone-700 mt-4 leading-relaxed font-serif italic">
            {destination.subtitle}
          </p>
        </div>

        {/* Featured Subject-Specific Photograph */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-900 relative aspect-[16/9] max-h-[550px]">
          <img
            src={destination.image}
            alt={destination.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs flex items-center justify-between sm:justify-start gap-4">
            <span className="font-medium text-amber-200">{destination.imageAlt}</span>
            <span className="text-[10px] text-stone-400 border-l border-white/20 pl-3">
              Photo: {destination.imageCredit}
            </span>
          </div>

          <button
            onClick={() =>
              onToggleWishlist({
                id: destination.id,
                title: destination.name,
                path: `/destinations/${destination.slug}`,
                category: destination.category.toUpperCase(),
                image: destination.image,
              })
            }
            className="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
            aria-label={wish ? `Remove ${destination.name}` : `Save ${destination.name}`}
          >
            {wish ? (
              <BookmarkCheck className="w-5 h-5 text-amber-400" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Reading Column */}
          <main className="lg:col-span-8 space-y-12">
            {/* Special Section Headings for Omkareshwar or Generic Clean Structure */}
            {isOmkareshwar ? (
              <>
                {/* 1. What Is Omkareshwar Jyotirlinga? */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    What Is Omkareshwar Jyotirlinga?
                  </h2>
                  <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
                    Omkareshwar Jyotirlinga is one of the twelve most sacred self-manifested (Swayambhu) pillars of light dedicated to Lord Shiva in Hindu tradition. Situated in the Khandwa district of Madhya Pradesh, the shrine rests upon Mandhata (or Shivpuri) Island formed at the sacred bend of the holy Narmada River. When observed from the air, the island’s physical contours naturally replicate the ancient Devanagari script for the sacred sound <strong>ॐ (Om)</strong>.
                  </p>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    Unlike standard single-shrine pilgrimage destinations, Omkareshwar is extraordinary because the Jyotirlinga is revered in two complementary forms: the <strong>Omkareshwar Temple</strong> located on Mandhata Island, and the <strong>Mamleshwar (historically Amareshwar) Temple</strong> situated on the mainland south bank. Devotees and scholars hold that a pilgrimage to this sanctum is only consecrated when worship is offered at both temples.
                  </p>
                </section>

                {/* 2. Why Is Omkareshwar Important to Hindu Pilgrims? */}
                <section className="space-y-4 pt-4 border-t border-stone-200">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    Why Is Omkareshwar Important to Hindu Pilgrims?
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    According to the Shiva Purana and the Skanda Purana, the sage Narada once visited Mount Vindhya. When Vindhya boasted of its superiority, Narada reminded the mountain that Mount Meru was greater because the gods dwelt upon it. Desiring divine grace, Vindhya performed severe tapasya (penance) here to propitiate Lord Shiva. Pleased with his devotion, Shiva appeared and manifested as the Omkareshwar Jyotirlinga.
                  </p>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    At the behest of the devas and King Mandhata (the great ancestor of Lord Rama who gave the island its name), Lord Shiva manifested in two forms: Omkareshwar (the Lord of Om) on the northern island, and Mamleshwar (the Immortal Lord) on the southern mainland. In spiritual tradition, the Narmada is regarded as so holier-than-thou that the mere sight of its waters (Narmada Darshan) purifies the soul, whereas other rivers require physical immersion.
                  </p>
                </section>

                {/* 3. Where Is Omkareshwar Jyotirlinga Located? */}
                <section className="space-y-4 pt-4 border-t border-stone-200">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    Where Is Omkareshwar Jyotirlinga Located?
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    Omkareshwar is located in the Nimar region of southwestern Madhya Pradesh in Khandwa district. It sits approximately 77 kilometers south of the commercial airport hub of Indore, 140 kilometers south-east of Ujjain, and 70 kilometers northwest of Khandwa city. The Narmada River divides around Mandhata Island into two channels (the southern main Narmada and the northern Kaveri stream), creating a serene 4-kilometer circumference rocky island.
                  </p>
                </section>

                {/* 4. What Can You See at Omkareshwar Temple? */}
                <section className="space-y-4 pt-4 border-t border-stone-200">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    What Can You See at Omkareshwar Temple?
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    The temple complex is a multi-tiered architectural wonder built into the rocky cliffs of Mandhata Island. Key structural and visual highlights include:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div className="p-4 bg-white rounded-xl border border-stone-200">
                      <h3 className="font-serif font-bold text-stone-900 text-sm">Garbhagriha (Sanctum)</h3>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        The small natural subterranean sanctum where the Swayambhu Jyotirlinga rests in a natural pool of water continuously bathed by Narmada currents.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-stone-200">
                      <h3 className="font-serif font-bold text-stone-900 text-sm">Sabha Mandapa & Carved Pillars</h3>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        A majestic assembly hall supported by intricate 10th-century stone pillars carved with friezes of celestial guardians and apsaras.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-stone-200">
                      <h3 className="font-serif font-bold text-stone-900 text-sm">Adi Shankaracharya Guha (Cave)</h3>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        The subterranean cave located beneath the main temple where the young Adi Shankara met his preceptor Govinda Bhagavatpada.
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-stone-200">
                      <h3 className="font-serif font-bold text-stone-900 text-sm">Gauri Somnath Temple</h3>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        A three-tiered ancient temple on the island plateau housing a colossal 6-foot polished black stone lingam with a giant stone Nandi bull.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5. What Is the Significance of Mamleshwar Temple? */}
                <section className="space-y-4 pt-4 border-t border-stone-200">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    What Is the Significance of Mamleshwar Temple?
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    Standing directly across the river on the southern mainland bank, <strong>Mamleshwar (or Amareshwar) Temple</strong> is an ASI-protected 10th-century Paramara-era monument. It features exquisite exterior stone carvings depicting dancers, musicians, and floral bands. Ancient traditions state that the Jyotirlinga manifested here simultaneously with the island shrine; visiting Mamleshwar is an integral part of completing the sacred circuit.
                  </p>
                </section>
              </>
            ) : (
              <>
                {/* Generic Rich Destination Content */}
                <section className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    Overview & Cultural Importance
                  </h2>
                  <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
                    {destination.summary}
                  </p>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {destination.whyVisit}
                  </p>
                </section>

                <section className="space-y-4 pt-4 border-t border-stone-200">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    History & Architectural Significance
                  </h2>
                  <div className="space-y-3">
                    {destination.historyAndSignificance.map((para, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-stone-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </section>

                <section className="space-y-4 pt-4 border-t border-stone-200">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                    What Can You See and Explore?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    {destination.keyAttractions.map((attr, idx) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm">
                        <h3 className="font-serif font-bold text-stone-900 text-sm">{attr.title}</h3>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">{attr.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* How Do You Reach It? */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {isOmkareshwar
                  ? 'How Do You Reach Omkareshwar?'
                  : `How to Reach ${destination.name}`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs font-mono uppercase">
                    <Plane className="w-4 h-4 text-amber-700" />
                    <span>By Air</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{destination.howToReach.air}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs font-mono uppercase">
                    <Train className="w-4 h-4 text-amber-700" />
                    <span>By Rail</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{destination.howToReach.rail}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs font-mono uppercase">
                    <Car className="w-4 h-4 text-amber-700" />
                    <span>By Road</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{destination.howToReach.road}</p>
                </div>
              </div>
            </section>

            {/* Best Time to Visit & Seasonal Considerations */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {isOmkareshwar
                  ? 'What Is the Best Time to Visit Omkareshwar?'
                  : `Best Time to Visit & Weather`}
              </h2>
              <div className="p-5 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
                <span className="font-semibold text-amber-950 text-sm block">
                  Recommended Season: {destination.bestTimeToVisit.idealSeason}
                </span>
                <p className="text-xs sm:text-sm text-stone-700 mt-2 leading-relaxed">
                  {destination.bestTimeToVisit.details}
                </p>
              </div>
            </section>

            {/* Suggested Itineraries */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {isOmkareshwar
                  ? 'How Much Time Should You Spend at Omkareshwar?'
                  : `Suggested Itinerary & Visit Duration`}
              </h2>
              <div className="space-y-3">
                {destination.itinerary.halfDay && (
                  <div className="p-4 bg-white rounded-xl border border-stone-200">
                    <h3 className="font-serif font-bold text-stone-900 text-sm">
                      Half-Day Tour Option (3–4 Hours)
                    </h3>
                    <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                      {destination.itinerary.halfDay}
                    </p>
                  </div>
                )}
                <div className="p-4 bg-white rounded-xl border border-stone-200">
                  <h3 className="font-serif font-bold text-stone-900 text-sm">
                    Full-Day Immersive Pilgrimage / Heritage Walk
                  </h3>
                  <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                    {destination.itinerary.fullDay}
                  </p>
                </div>
              </div>
            </section>

            {/* What Should You Know Before Visiting? (Practical & Etiquette) */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {isOmkareshwar
                  ? 'What Should You Know Before Visiting?'
                  : `Practical Advice & Visitor Etiquette`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-stone-200">
                  <h3 className="font-serif font-bold text-stone-900 text-sm mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-700" />
                    <span>Travel Tips</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {destination.practicalTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-700 font-bold">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200">
                  <h3 className="font-serif font-bold text-stone-900 text-sm mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-700" />
                    <span>Visitor Etiquette</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-700">
                    {destination.visitorEtiquette.map((etiquette, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span>{etiquette}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Nearby Attractions */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {isOmkareshwar
                  ? 'What Other Places Can You Visit Near Omkareshwar?'
                  : `Nearby Places of Interest`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.nearbyAttractions.map((near, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-xl border border-stone-200 hover:border-amber-400 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-amber-700 font-semibold block">
                        {near.distance} away
                      </span>
                      <h3 className="font-serif font-bold text-stone-900 text-sm mt-1">{near.name}</h3>
                    </div>
                    {near.slug && (
                      <button
                        onClick={() => onNavigate(`/destinations/${near.slug}`)}
                        className="text-xs text-amber-800 font-semibold hover:underline mt-3 text-left inline-flex items-center gap-1"
                      >
                        <span>View destination</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sticky Sidebar Info Card */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-semibold">
                  Quick Visitor Factsheet
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  Visiting Information
                </h3>
              </div>

              <div className="space-y-4 text-xs text-stone-700 divide-y divide-stone-100">
                <div className="pt-2">
                  <span className="text-stone-500 font-medium block">Timings & Hours:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {destination.entryAndTiming.hours}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Entry Fees:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {destination.entryAndTiming.fees}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Photography:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {destination.entryAndTiming.photography}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Nearest Transport Hub:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {destination.howToReach.nearestHub}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Ideal Trip Duration:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {destination.suggestedDuration}
                  </span>
                </div>
              </div>

              {destination.category === 'spiritual' && (
                <button
                  onClick={() => onOpenDarshanModal(destination.slug)}
                  className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl transition-colors shadow-sm text-center"
                >
                  Plan Darshan & Ritual Schedule
                </button>
              )}

              <button
                onClick={() => onNavigate('/travel-guides')}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl transition-colors text-center"
              >
                Browse Connected Itineraries
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Destination FAQs */}
      <FaqSection
        faqs={destination.faqs}
        title={`Frequently Asked Questions About ${destination.name}`}
      />
    </article>
  );
};
