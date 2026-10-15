import React, { useState, useMemo } from 'react';
import { Search, X, MapPin, Utensils, Compass, ArrowRight } from 'lucide-react';
import { destinations } from '../data/destinations';
import { wildlifeParks } from '../data/wildlife';
import { foodItems } from '../data/foods';
import { travelItineraries } from '../data/itineraries';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (path: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  const allItems = useMemo(() => {
    const list: {
      title: string;
      category: string;
      path: string;
      snippet: string;
      type: 'destination' | 'wildlife' | 'food' | 'itinerary';
    }[] = [];

    destinations.forEach((d) => {
      list.push({
        title: d.name,
        category: d.category.toUpperCase(),
        path: `/destinations/${d.slug}`,
        snippet: d.summary,
        type: 'destination',
      });
    });

    wildlifeParks.forEach((w) => {
      list.push({
        title: w.name,
        category: 'WILDLIFE',
        path: `/wildlife/${w.slug}`,
        snippet: w.summary,
        type: 'wildlife',
      });
    });

    foodItems.forEach((f) => {
      list.push({
        title: f.name,
        category: 'CUISINE',
        path: `/food-and-cuisine/${f.slug}`,
        snippet: f.summary,
        type: 'food',
      });
    });

    travelItineraries.forEach((i) => {
      list.push({
        title: i.title,
        category: `${i.durationDays} DAYS ITINERARY`,
        path: `/travel-guides/${i.slug}`,
        snippet: i.overview || i.summary || '',
        type: 'itinerary',
      });
    });

    return list;
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return allItems.slice(0, 8);
    const q = query.toLowerCase().trim();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.snippet.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-800">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            type="text"
            placeholder="Search Omkareshwar, Khajuraho, Poha, Tigers, Safari..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white placeholder-stone-400 text-base focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-white text-xs px-2 py-1 rounded bg-stone-800"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto divide-y divide-stone-800/60 p-2">
          {filtered.length === 0 ? (
            <div className="text-center py-12 px-4 text-stone-400">
              <p className="text-sm">No results found matching "{query}"</p>
              <p className="text-xs text-stone-500 mt-1">
                Try searching for Omkareshwar, Mahakal, Bandhavgarh, Poha, or Itinerary.
              </p>
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onSelectResult(item.path);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl hover:bg-stone-800/80 transition-colors flex items-start justify-between gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-2 rounded-lg bg-stone-800 text-amber-400 shrink-0">
                    {item.type === 'destination' && <MapPin className="w-4 h-4" />}
                    {item.type === 'wildlife' && <Compass className="w-4 h-4" />}
                    {item.type === 'food' && <Utensils className="w-4 h-4" />}
                    {item.type === 'itinerary' && <Compass className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-stone-100 group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[10px] tracking-wider uppercase font-mono text-amber-400/90 font-medium bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 line-clamp-1 mt-1 leading-relaxed">
                      {item.snippet}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </button>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-stone-950 border-t border-stone-800 text-[11px] text-stone-400 flex items-center justify-between">
          <span>Search destinations, temples, regional cuisine, and safaris</span>
          <span className="font-mono text-stone-500">ESC to close</span>
        </div>
      </div>
    </div>
  );
};
