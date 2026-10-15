import React, { useState } from 'react';
import { destinations } from '../data/destinations';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Compass, ArrowRight, Bookmark, BookmarkCheck, Filter } from 'lucide-react';

interface DestinationsPageProps {
  onNavigate: (path: string) => void;
  onToggleWishlist: (item: {
    id: string;
    title: string;
    path: string;
    category: string;
    image: string;
  }) => void;
  isWishlisted: (id: string) => boolean;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onNavigate,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filtered = destinations.filter((dest) => {
    const matchesCat = filterCategory === 'all' || dest.category === filterCategory;
    const matchesReg = selectedRegion === 'all' || dest.region === selectedRegion;
    return matchesCat && matchesReg;
  });

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'Destinations' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Complete Travel Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Places to Visit in Madhya Pradesh
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed">
            From the world-renowned sculpted UNESCO temples of Khajuraho and Emperor Ashoka’s Great Stupa at Sanchi to sacred Shiva Jyotirlingas along the Narmada and lush Satpura hill stations — explore in-depth visitor guides for every major destination across the Heart of India.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-10 p-4 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-stone-500 uppercase font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Category:</span>
            </span>
            {(['all', 'spiritual', 'heritage', 'nature', 'urban'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg capitalize transition-colors ${
                  filterCategory === cat
                    ? 'bg-amber-400 text-stone-950 font-semibold shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200/70'
                }`}
              >
                {cat === 'all' ? 'All Categories' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-500 font-mono">Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-stone-100 border border-stone-200 rounded-lg px-2.5 py-1.5 text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="all">All Regions</option>
              <option value="Malwa">Malwa</option>
              <option value="Nimar">Nimar</option>
              <option value="Bundelkhand">Bundelkhand</option>
              <option value="Gird">Gird (Gwalior)</option>
              <option value="Mahakoshal">Mahakoshal</option>
              <option value="Bhopal">Bhopal</option>
              <option value="Baghelkhand">Baghelkhand</option>
            </select>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {filtered.map((dest) => {
            const wish = isWishlisted(dest.id);
            return (
              <article
                key={dest.id}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={dest.image}
                    alt={dest.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {dest.isUnesco && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-stone-900/80 backdrop-blur-md text-amber-300 text-[10px] font-mono tracking-wider font-semibold uppercase border border-amber-400/30">
                      UNESCO Heritage
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

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="capitalize">{dest.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.region}</span>
                      <span aria-hidden="true">·</span>
                      <span>{dest.suggestedDuration}</span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {dest.name}
                    </h2>
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
      </div>
    </div>
  );
};
