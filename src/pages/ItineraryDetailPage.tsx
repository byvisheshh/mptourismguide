import React, { useEffect, useState } from 'react';
import { TravelItinerary } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { updatePageSeo, PRIMARY_CANONICAL_DOMAIN } from '../utils/seo';
import {
  Calendar,
  Clock,
  Compass,
  MapPin,
  CheckCircle,
  Car,
  DollarSign,
  Sun,
  ShieldCheck,
  Share2,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ExternalLink,
  Luggage,
  Sparkles,
} from 'lucide-react';
import { travelItineraries } from '../data/itineraries';

interface ItineraryDetailPageProps {
  itinerary: TravelItinerary;
  onNavigate: (path: string) => void;
}

// Map destination names to route paths for internal linking & topical SEO clusters
const DESTINATION_LINK_MAP: Record<string, string> = {
  Bhopal: '/destinations/bhopal',
  'Sanchi & Bhimbetka': '/destinations/sanchi-stupa',
  Sanchi: '/destinations/sanchi-stupa',
  Bhimbetka: '/destinations/bhimbetka',
  Khajuraho: '/destinations/khajuraho-temples',
  Bandhavgarh: '/wildlife/bandhavgarh-national-park',
  'Bandhavgarh National Park': '/wildlife/bandhavgarh-national-park',
  Kanha: '/wildlife/kanha-national-park',
  'Kanha Tiger Reserve': '/wildlife/kanha-national-park',
  Pench: '/wildlife/pench-national-park',
  'Pench Tiger Reserve': '/wildlife/pench-national-park',
  Satpura: '/wildlife/satpura-national-park',
  Indore: '/destinations/indore',
  Ujjain: '/destinations/mahakaleshwar-ujjain',
  'Ujjain (Mahakaleshwar)': '/destinations/mahakaleshwar-ujjain',
  Omkareshwar: '/destinations/omkareshwar-jyotirlinga',
  'Omkareshwar (Mandhata Island)': '/destinations/omkareshwar-jyotirlinga',
  Gwalior: '/destinations/gwalior-fort',
  Orchha: '/destinations/orchha',
  Mandu: '/destinations/mandu',
  Pachmarhi: '/destinations/pachmarhi',
};

export const ItineraryDetailPage: React.FC<ItineraryDetailPageProps> = ({
  itinerary,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const canonicalUrl = `${PRIMARY_CANONICAL_DOMAIN}/travel-guides/${itinerary.slug}`;
    const absoluteImage = `${PRIMARY_CANONICAL_DOMAIN}${itinerary.image}`;

    // Comprehensive Schema.org @graph integrating BreadcrumbList, Article, TouristTrip, and FAQPage
    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${PRIMARY_CANONICAL_DOMAIN}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Travel Guides',
              item: `${PRIMARY_CANONICAL_DOMAIN}/travel-guides`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: itinerary.title,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          isPartOf: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          headline: itinerary.title,
          description: itinerary.overview || itinerary.summary,
          image: absoluteImage,
          datePublished: '2026-01-15T08:00:00+05:30',
          dateModified: '2026-10-20T10:00:00+05:30',
          author: {
            '@type': 'Organization',
            name: 'MP Tourism Editorial Desk',
            url: `${PRIMARY_CANONICAL_DOMAIN}/`,
          },
          publisher: {
            '@type': 'Organization',
            name: 'MP Tourism Guide',
            url: `${PRIMARY_CANONICAL_DOMAIN}/`,
            logo: {
              '@type': 'ImageObject',
              url: `${PRIMARY_CANONICAL_DOMAIN}/favicon.svg`,
            },
          },
          mainEntityOfPage: canonicalUrl,
        },
        {
          '@type': 'TouristTrip',
          '@id': `${canonicalUrl}#trip`,
          name: itinerary.title,
          description: itinerary.overview || itinerary.summary,
          touristType: itinerary.category,
          itinerary: {
            '@type': 'ItemList',
            numberOfItems: itinerary.days.length,
            itemListElement: itinerary.days.map((d, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: `Day ${d.dayNumber}: ${d.title}`,
              description: d.description,
            })),
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: itinerary.faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        },
      ],
    };

    updatePageSeo(
      itinerary.seo,
      `/travel-guides/${itinerary.slug}`,
      schemaData,
      itinerary.image
    );
    window.scrollTo(0, 0);
  }, [itinerary]);

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(
        `${PRIMARY_CANONICAL_DOMAIN}/travel-guides/${itinerary.slug}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const otherItineraries = travelItineraries.filter((i) => i.id !== itinerary.id);

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs
        items={[
          { label: 'Travel Itineraries', path: '/travel-guides' },
          { label: itinerary.title },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-amber-800 uppercase font-semibold mb-3">
            <span className="bg-amber-100/80 px-2.5 py-0.5 rounded text-amber-900 border border-amber-200">
              {itinerary.durationDays} Days / {itinerary.durationDays - 1} Nights
            </span>
            <span aria-hidden="true">·</span>
            <span>Category: {itinerary.category.replace('-', ' ')}</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-500">Updated: October 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] [text-wrap:balance]">
            {itinerary.title}
          </h1>

          <p className="text-lg sm:text-xl text-stone-700 mt-4 leading-relaxed font-serif italic">
            {itinerary.subtitle}
          </p>

          <div className="flex items-center gap-4 mt-4 pt-3 border-t border-stone-200/80 text-xs text-stone-600">
            <span>By MP Tourism Editorial Desk</span>
            <span>·</span>
            <span>~{itinerary.durationDays * 2 + 2} min comprehensive read</span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 ml-auto text-amber-800 hover:text-amber-900 font-semibold transition-colors"
              aria-label="Share this itinerary link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share Itinerary'}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-900 relative aspect-[16/9] max-h-[550px]">
          <img
            src={itinerary.image}
            alt={itinerary.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs flex items-center justify-between sm:justify-start gap-4">
            <span className="font-medium text-amber-200">{itinerary.imageAlt}</span>
            <span className="text-[10px] text-stone-400 border-l border-white/20 pl-3">
              Photo: {itinerary.imageCredit}
            </span>
          </div>
        </div>

        {/* Route Ribbon with Internal Links */}
        <div className="mt-6 p-4 bg-white rounded-2xl border border-stone-200/90 shadow-sm flex flex-wrap items-center gap-2 text-xs text-stone-800">
          <span className="font-mono uppercase text-amber-800 font-bold mr-2">
            Route Stops:
          </span>
          {itinerary.route.map((city, idx) => {
            const linkPath = DESTINATION_LINK_MAP[city];
            return (
              <React.Fragment key={idx}>
                {linkPath ? (
                  <button
                    onClick={() => onNavigate(linkPath)}
                    className="bg-amber-50 hover:bg-amber-100 text-amber-950 px-3 py-1 rounded-lg border border-amber-200 font-semibold transition-colors flex items-center gap-1"
                  >
                    <span>{city}</span>
                    <ExternalLink className="w-2.5 h-2.5 text-amber-700" />
                  </button>
                ) : (
                  <span className="bg-stone-100 px-3 py-1 rounded-lg border border-stone-200 font-medium text-stone-700">
                    {city}
                  </span>
                )}
                {idx < itinerary.route.length - 1 && (
                  <span className="text-amber-600 font-bold">→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-12">
            {/* Overview & Key Highlights */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Circuit Overview & Tour Highlights
              </h2>
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
                {itinerary.overview || itinerary.summary}
              </p>

              <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2.5 mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold block mb-1">
                  Key Experiences & Must-See Landmarks:
                </span>
                {itinerary.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                    <CheckCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Detailed Breakdown */}
            <section className="space-y-6 pt-4 border-t border-stone-200">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                    Detailed Route Breakdown
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight mt-1">
                    Day-by-Day Travel Schedule
                  </h2>
                </div>
                <span className="text-xs text-stone-500 font-mono">
                  {itinerary.days.length} Days of Timed Itinerary
                </span>
              </div>

              <div className="space-y-8">
                {itinerary.days.map((day) => {
                  const destLink = DESTINATION_LINK_MAP[day.destination];
                  return (
                    <div
                      key={day.dayNumber}
                      className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4 hover:border-amber-300 transition-colors"
                    >
                      <div className="flex items-center justify-between border-b border-stone-100 pb-3 flex-wrap gap-2">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-mono font-bold text-sm flex items-center justify-center shrink-0 shadow-sm">
                            {day.dayNumber}
                          </span>
                          <div>
                            <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">
                              Location: {day.destination}
                            </span>
                            <h3 className="font-serif font-bold text-xl text-stone-900">
                              {day.title}
                            </h3>
                          </div>
                        </div>

                        {destLink && (
                          <button
                            onClick={() => onNavigate(destLink)}
                            className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1 bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200"
                          >
                            <span>Explore {day.destination.split('&')[0].trim()}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {day.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/90">
                          <span className="font-semibold text-amber-900 block mb-1">
                            Morning:
                          </span>
                          <p className="text-stone-700 leading-relaxed">{day.morning}</p>
                        </div>

                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/90">
                          <span className="font-semibold text-amber-900 block mb-1">
                            Afternoon:
                          </span>
                          <p className="text-stone-700 leading-relaxed">{day.afternoon}</p>
                        </div>

                        <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/90">
                          <span className="font-semibold text-amber-900 block mb-1">
                            Evening:
                          </span>
                          <p className="text-stone-700 leading-relaxed">{day.evening}</p>
                        </div>
                      </div>

                      <div className="pt-2 text-[11px] text-stone-600 flex items-center gap-2 border-t border-stone-100">
                        <Car className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>
                          <strong>Transit Advice:</strong> {day.transitTips}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Packing & Preparation Advice */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                <Luggage className="w-4 h-4 text-amber-700" />
                <span>Traveler Checklist</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Recommended Packing & Trip Preparation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-stone-200">
                  <h4 className="font-bold text-sm text-stone-900 mb-2">Clothing & Footwear</h4>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li>Modest temple clothing (Dhoti/Kurta for Garbhagriha, Sarees/Salwar)</li>
                    <li>Neutral forest colors (khaki, olive, beige) for wildlife safaris</li>
                    <li>Comfortable walking shoes with slip-resistant soles</li>
                    <li>Warm layers for early morning winter safaris (Nov–Feb)</li>
                  </ul>
                </div>
                <div className="p-4 bg-white rounded-xl border border-stone-200">
                  <h4 className="font-bold text-sm text-stone-900 mb-2">Documents & Essentials</h4>
                  <ul className="text-xs text-stone-700 space-y-1.5 list-disc list-inside">
                    <li>Original Government Photo ID (matching safari booking name)</li>
                    <li>Printed copy of safari permits and Bhasma Aarti confirmation</li>
                    <li>Telephoto camera lens (200mm+) with beanbag and dust cover</li>
                    <li>Reusable water bottle and wide-brim sun hat</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-semibold">
                  Planning Factsheet
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  Trip Logistics & Budget
                </h3>
              </div>

              <div className="space-y-4 text-xs text-stone-700 divide-y divide-stone-100">
                <div className="pt-2">
                  <span className="text-stone-500 font-medium block">Ideal Season:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {itinerary.bestSeason}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Transport Strategy:</span>
                  <p className="text-stone-700 mt-1 leading-relaxed">
                    {itinerary.transportAdvice}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Budget Guidelines:</span>
                  <p className="text-stone-700 mt-1 leading-relaxed">
                    {itinerary.budgetGuidelines}
                  </p>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Circuit Pace:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    Balanced (Culture, Heritage & Wildlife)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl transition-colors shadow-sm text-center"
              >
                Official MPSTDC Tourist Helpline
              </button>

              <button
                onClick={() => onNavigate('/travel-guides')}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl transition-colors text-center"
              >
                Back to All Itineraries
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* Structured FAQ Section */}
      <FaqSection
        faqs={itinerary.faqs}
        title={`Frequently Asked Questions: ${itinerary.title}`}
        subtitle="Practical guidance on transportation, permits, budget, and best travel seasons"
      />

      {/* Related Travel Circuits */}
      {otherItineraries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-stone-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold">
                Explore Alternative Routes
              </span>
              <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
                More Curated Madhya Pradesh Itineraries
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/travel-guides')}
              className="text-xs font-semibold text-amber-800 hover:text-amber-900 flex items-center gap-1"
            >
              <span>View all</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherItineraries.slice(0, 3).map((other) => (
              <div
                key={other.id}
                onClick={() => onNavigate(`/travel-guides/${other.slug}`)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={other.image}
                    alt={other.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-amber-800 uppercase font-semibold">
                      {other.durationDays} Days Circuit
                    </span>
                    <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-amber-800 transition-colors mt-1">
                      {other.title}
                    </h3>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-amber-800">
                    <span>View day-by-day plan</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
