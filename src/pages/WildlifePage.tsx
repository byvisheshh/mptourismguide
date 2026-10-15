import React from 'react';
import { wildlifeParks } from '../data/wildlife';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Compass, ArrowRight, ShieldAlert, Award, Calendar, CheckCircle } from 'lucide-react';

interface WildlifePageProps {
  onNavigate: (path: string) => void;
  onOpenDarshanModal: (park?: string) => void;
}

export const WildlifePage: React.FC<WildlifePageProps> = ({
  onNavigate,
  onOpenDarshanModal,
}) => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'Wildlife & Tiger Reserves' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-emerald-800 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>Tiger State of India</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Wildlife & Tiger Reserves of Madhya Pradesh
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed">
            With over 785 Royal Bengal Tigers roaming its protected wilderness, Madhya Pradesh holds the proud title of the Tiger State of India. Explore the towering Sal canopies of Kanha (inspiration for Rudyard Kipling’s <em>The Jungle Book</em>), the unmatched predator density of Bandhavgarh, the open teakwood forests of Pench, and the serene walking safaris of Satpura.
          </p>
        </div>

        {/* Fact Banner */}
        <div className="mt-8 p-6 bg-emerald-950 text-white rounded-2xl border border-emerald-900 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
              Official Census Highlights
            </span>
            <h3 className="font-serif text-xl font-bold text-white">
              785+ Wild Bengal Tigers Across 6 Premier Reserves
            </h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed max-w-xl">
              Madhya Pradesh leads national conservation with dedicated core zones, anti-poaching wireless patrols, and the world’s only wild sanctuary for the endangered Hardground Barasingha.
            </p>
          </div>

          <button
            onClick={() => onOpenDarshanModal('bandhavgarh')}
            className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs whitespace-nowrap transition-colors shadow-sm"
          >
            Safari Booking Guidelines
          </button>
        </div>

        {/* Parks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {wildlifeParks.map((park) => (
            <article
              key={park.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                <img
                  src={park.image}
                  alt={park.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-emerald-300 font-medium">
                  {park.location.split(',')[0]}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                    {park.name}
                  </h2>
                  <p className="text-xs font-medium text-stone-500 mt-0.5 italic">
                    {park.subtitle}
                  </p>
                  <p className="text-stone-700 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {park.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-mono text-stone-500 uppercase font-semibold block mb-2">
                      Key Wildlife Species:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {park.keyFauna.slice(0, 4).map((animal, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200"
                        >
                          {animal.split('(')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    Best: {park.bestTime.split('.')[0]}
                  </span>
                  <button
                    onClick={() => onNavigate(`/wildlife/${park.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-900 hover:underline"
                  >
                    <span>Read safari guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
