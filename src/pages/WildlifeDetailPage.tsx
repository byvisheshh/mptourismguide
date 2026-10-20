import React, { useEffect } from 'react';
import { WildlifePark } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { updatePageSeo, PRIMARY_CANONICAL_DOMAIN } from '../utils/seo';
import {
  Compass,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  Plane,
  Train,
  Car,
  Bookmark,
  BookmarkCheck,
} from 'lucide-react';

interface WildlifeDetailPageProps {
  park: WildlifePark;
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

export const WildlifeDetailPage: React.FC<WildlifeDetailPageProps> = ({
  park,
  onNavigate,
  onOpenDarshanModal,
  onToggleWishlist,
  isWishlisted,
}) => {
  const wish = isWishlisted(park.id);

  useEffect(() => {
    const canonicalUrl = `${PRIMARY_CANONICAL_DOMAIN}/wildlife/${park.slug}`;
    const absoluteImage = `${PRIMARY_CANONICAL_DOMAIN}${park.image}`;

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
              name: 'Wildlife & National Parks',
              item: `${PRIMARY_CANONICAL_DOMAIN}/wildlife`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: park.name,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'TouristAttraction',
          '@id': `${canonicalUrl}#attraction`,
          name: park.name,
          description: park.summary,
          image: absoluteImage,
          url: canonicalUrl,
          touristType: 'Wildlife Sanctuary / National Park',
          address: {
            '@type': 'PostalAddress',
            addressRegion: 'Madhya Pradesh',
            addressCountry: 'IN',
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: park.faqs.map((f) => ({
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

    updatePageSeo(park.seo, `/wildlife/${park.slug}`, schemaData, park.image);
    window.scrollTo(0, 0);
  }, [park]);

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs
        items={[
          { label: 'Wildlife', path: '/wildlife' },
          { label: park.name },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 uppercase font-semibold mb-3">
            <span>Wildlife & Tiger Sanctuary</span>
            <span aria-hidden="true">·</span>
            <span>{park.location}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] [text-wrap:balance]">
            {park.name}
          </h1>
          <p className="text-lg sm:text-xl text-stone-700 mt-4 leading-relaxed font-serif italic">
            {park.subtitle}
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-900 relative aspect-[16/9] max-h-[550px]">
          <img
            src={park.image}
            alt={park.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs flex items-center justify-between sm:justify-start gap-4">
            <span className="font-medium text-emerald-300">{park.imageAlt}</span>
            <span className="text-[10px] text-stone-400 border-l border-white/20 pl-3">
              Photo: {park.imageCredit}
            </span>
          </div>

          <button
            onClick={() =>
              onToggleWishlist({
                id: park.id,
                title: park.name,
                path: `/wildlife/${park.slug}`,
                category: 'WILDLIFE',
                image: park.image,
              })
            }
            className="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
            aria-label={wish ? `Remove ${park.name}` : `Save ${park.name}`}
          >
            {wish ? (
              <BookmarkCheck className="w-5 h-5 text-amber-400" />
            ) : (
              <Bookmark className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8 space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                About {park.name}
              </h2>
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
                {park.summary}
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {park.whySpecial}
              </p>
            </section>

            {/* Habitat and Fauna */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Habitat & Notable Wildlife Species
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {park.habitat}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                {park.keyFauna.map((animal, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-medium text-stone-800 text-center shadow-xs"
                  >
                    {animal}
                  </div>
                ))}
              </div>
            </section>

            {/* Safari Zones */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Safari Zones & Tourism Circuits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {park.safariZones.map((zone, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif font-bold text-stone-900 text-base">{zone.zoneName}</h3>
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-semibold ${
                        zone.type === 'Core'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}>
                        {zone.type} Zone
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">{zone.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Reach */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                How to Reach {park.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs font-mono uppercase">
                    <Plane className="w-4 h-4 text-emerald-700" />
                    <span>By Air</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{park.howToReach.air}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs font-mono uppercase">
                    <Train className="w-4 h-4 text-emerald-700" />
                    <span>By Rail</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{park.howToReach.rail}</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs font-mono uppercase">
                    <Car className="w-4 h-4 text-emerald-700" />
                    <span>By Road</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-relaxed">{park.howToReach.road}</p>
                </div>
              </div>
            </section>

            {/* Responsible Wildlife Tourism Guidelines */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Responsible Safari Ethics & Forest Rules
              </h2>
              <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-3">
                {park.conservationEthics.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-emerald-950 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-semibold">
                  Safari Permit Factsheet
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  Timings & Booking Rules
                </h3>
              </div>

              <div className="space-y-4 text-xs text-stone-700 divide-y divide-stone-100">
                <div className="pt-2">
                  <span className="text-stone-500 font-medium block">Morning Shift:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {park.safariTimingsAndBooking.morningShift}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Evening Shift:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {park.safariTimingsAndBooking.eveningShift}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Closed On:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {park.safariTimingsAndBooking.closedOn}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Best Viewing Months:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {park.bestTime}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenDarshanModal(park.slug)}
                className="w-full py-3 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-sm text-center"
              >
                View Safari Booking Checklist
              </button>

              <button
                onClick={() => onNavigate('/travel-guides/wildlife-tiger-safari-circuit')}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl transition-colors text-center"
              >
                View 6-Day Tiger Safari Circuit
              </button>
            </div>
          </aside>
        </div>
      </div>

      <FaqSection
        faqs={park.faqs}
        title={`Frequently Asked Questions About ${park.name}`}
      />
    </article>
  );
};
