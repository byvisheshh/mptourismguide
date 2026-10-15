import React, { useEffect } from 'react';
import { TravelItinerary } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { updatePageSeo } from '../utils/seo';
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
} from 'lucide-react';

interface ItineraryDetailPageProps {
  itinerary: TravelItinerary;
  onNavigate: (path: string) => void;
}

export const ItineraryDetailPage: React.FC<ItineraryDetailPageProps> = ({
  itinerary,
  onNavigate,
}) => {
  useEffect(() => {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: itinerary.title,
      description: itinerary.overview,
      itinerary: {
        '@type': 'ItemList',
        itemListElement: itinerary.days.map((d, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: d.title,
          description: d.description,
        })),
      },
    };

    updatePageSeo(itinerary.seo, `/travel-guides/${itinerary.slug}`, schemaData);
    window.scrollTo(0, 0);
  }, [itinerary]);

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
          <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase font-semibold mb-3">
            <span>{itinerary.durationDays} Days / {itinerary.durationDays - 1} Nights</span>
            <span aria-hidden="true">·</span>
            <span>Category: {itinerary.category}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] [text-wrap:balance]">
            {itinerary.title}
          </h1>
          <p className="text-lg sm:text-xl text-stone-700 mt-4 leading-relaxed font-serif italic">
            {itinerary.subtitle}
          </p>
        </div>

        {/* Route Ribbon */}
        <div className="mt-6 p-4 bg-white rounded-2xl border border-stone-200/90 shadow-sm flex flex-wrap items-center gap-2 text-xs text-stone-800">
          <span className="font-mono uppercase text-amber-800 font-bold mr-2">Route Circuit:</span>
          {itinerary.route.map((city, idx) => (
            <React.Fragment key={idx}>
              <span className="bg-stone-100 px-3 py-1 rounded-lg border border-stone-200 font-medium">
                {city}
              </span>
              {idx < itinerary.route.length - 1 && (
                <span className="text-amber-600 font-bold">→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </header>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Days Timeline */}
          <main className="lg:col-span-8 space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Circuit Overview & Tour Highlights
              </h2>
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
                {itinerary.overview}
              </p>

              <div className="p-5 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-2.5 mt-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold block mb-1">
                  Key Experiences:
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
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Day-by-Day Schedule & Itinerary
              </h2>

              <div className="space-y-8">
                {itinerary.days.map((day) => (
                  <div
                    key={day.dayNumber}
                    className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-amber-400 text-stone-950 font-mono font-bold text-sm flex items-center justify-center shrink-0">
                          {day.dayNumber}
                        </span>
                        <div>
                          <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider">
                            Location: {day.destination}
                          </span>
                          <h3 className="font-serif font-bold text-xl text-stone-900">
                            {day.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {day.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-2">
                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="font-semibold text-amber-900 block mb-1">Morning:</span>
                        <p className="text-stone-700 leading-relaxed">{day.morning}</p>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="font-semibold text-amber-900 block mb-1">Afternoon:</span>
                        <p className="text-stone-700 leading-relaxed">{day.afternoon}</p>
                      </div>

                      <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                        <span className="font-semibold text-amber-900 block mb-1">Evening:</span>
                        <p className="text-stone-700 leading-relaxed">{day.evening}</p>
                      </div>
                    </div>

                    <div className="pt-2 text-[11px] text-stone-500 flex items-center gap-2 border-t border-stone-100">
                      <Car className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>
                        <strong>Transit Tip:</strong> {day.transitTips}
                      </span>
                    </div>
                  </div>
                ))}
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
                  Trip Logistics
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
                  <span className="text-stone-500 font-medium block">Budget Estimate:</span>
                  <p className="text-stone-700 mt-1 leading-relaxed">
                    {itinerary.budgetGuidelines}
                  </p>
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

      <FaqSection
        faqs={itinerary.faqs}
        title={`Frequently Asked Questions: ${itinerary.title}`}
      />
    </article>
  );
};
