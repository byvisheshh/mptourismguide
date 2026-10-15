import React from 'react';
import { travelItineraries } from '../data/itineraries';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Compass, Calendar, ArrowRight, Clock, MapPin } from 'lucide-react';

interface ItinerariesPageProps {
  onNavigate: (path: string) => void;
}

export const ItinerariesPage: React.FC<ItinerariesPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'Travel Itineraries' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Curated Route Plans</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Curated Madhya Pradesh Travel Itineraries
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed">
            Thoughtfully planned travel circuits designed to maximize your time in Central India. Whether you have 3 days for a sacred Jyotirlinga pilgrimage, 5 days along the northern heritage triangle, 6 days tracking wild tigers in national parks, or a full week across the state.
          </p>
        </div>

        {/* Itinerary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {travelItineraries.map((itinerary) => (
            <article
              key={itinerary.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-stone-100 relative">
                  <img
                    src={itinerary.image}
                    alt={itinerary.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-300 font-bold">
                    {itinerary.durationDays} DAYS / {itinerary.durationDays - 1} NIGHTS
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase font-semibold mb-2">
                    <span>{itinerary.category.replace('-', ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span>Best: {itinerary.bestSeason.split('(')[0]}</span>
                  </div>

                  <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {itinerary.title}
                  </h2>
                  <p className="text-xs text-stone-500 font-medium italic mt-0.5">
                    {itinerary.subtitle}
                  </p>

                  <p className="text-stone-700 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {itinerary.overview}
                  </p>

                  {/* Route ribbon */}
                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-mono text-stone-500 uppercase font-semibold block mb-2">
                      Route Stops:
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-700">
                      {itinerary.route.map((city, idx) => (
                        <React.Fragment key={idx}>
                          <span className="bg-stone-100 px-2 py-0.5 rounded border border-stone-200 font-medium">
                            {city}
                          </span>
                          {idx < itinerary.route.length - 1 && (
                            <span className="text-stone-400 font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-stone-100 mt-4">
                <span className="text-xs text-stone-500 font-medium">
                  {itinerary.days.length} Daily Schedules
                </span>
                <button
                  onClick={() => onNavigate(`/travel-guides/${itinerary.slug}`)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-lg transition-colors shadow-sm"
                >
                  <span>View detailed day-by-day plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
