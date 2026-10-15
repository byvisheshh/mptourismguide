import React from 'react';
import { MapPin, Phone, Mail, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      {/* Top Banner Strip */}
      <div className="border-b border-stone-800/80 bg-stone-900/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-serif font-bold text-xl shrink-0">
              MP
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white tracking-tight">
                Madhya Pradesh — The Heart of Incredible India
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Comprehensive state tourism information directory and cultural guide
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/destinations/omkareshwar-jyotirlinga')}
              className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
            >
              Omkareshwar Guide
            </button>
            <button
              onClick={() => onNavigate('/wildlife/bandhavgarh-national-park')}
              className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
            >
              Tiger Safaris
            </button>
            <button
              onClick={() => onNavigate('/food-and-cuisine/indore-poha-jalebi')}
              className="px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors"
            >
              Malwa Food Trail
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Column 1: Destinations */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/destinations/omkareshwar-jyotirlinga')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Omkareshwar Jyotirlinga
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/mahakaleshwar-ujjain')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Mahakaleshwar Ujjain
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/khajuraho-temples')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Khajuraho Temples
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/sanchi-stupa')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Sanchi Stupa
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/orchha')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Orchha Medieval Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/gwalior-fort')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Gwalior Fort & Palaces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations/pachmarhi')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Pachmarhi Hill Station
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/destinations')}
                  className="text-amber-400 font-semibold hover:underline mt-1 inline-block"
                >
                  All 12+ Destinations →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Wildlife */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              Wildlife & Tigers
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/wildlife/bandhavgarh-national-park')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Bandhavgarh Tiger Reserve
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/wildlife/kanha-national-park')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Kanha National Park
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/wildlife/satpura-national-park')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Satpura Walking Safaris
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/wildlife/pench-national-park')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Pench Mowgli Land
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/wildlife')}
                  className="text-amber-400 font-semibold hover:underline mt-1 inline-block"
                >
                  Safari Planning Portal →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Food & Cuisine */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              Malwa Cuisine
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/food-and-cuisine/indore-poha-jalebi')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Indore Poha & Jalebi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/food-and-cuisine/dal-bafla')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Traditional Dal Bafla
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/food-and-cuisine/sarafa-bazaar-indore')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Sarafa Midnight Food Market
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/food-and-cuisine/bhopali-biryani-and-kebabs')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Bhopali Biryani & Kebabs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/food-and-cuisine')}
                  className="text-amber-400 font-semibold hover:underline mt-1 inline-block"
                >
                  Culinary Trail Guide →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Curated Itineraries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              Travel Circuits
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/travel-guides/7-day-madhya-pradesh-itinerary')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  7-Day Grand MP Circuit
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-guides/3-day-ujjain-omkareshwar-jyotirlinga')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  3-Day Jyotirlinga Pilgrimage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-guides/wildlife-tiger-safari-circuit')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  6-Day Tiger Safari Expedition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-guides/heritage-circuit-khajuraho-orchha-gwalior')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  5-Day Northern Heritage Triangle
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/travel-guides')}
                  className="text-amber-400 font-semibold hover:underline mt-1 inline-block"
                >
                  All Trip Plans →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Official Information & Helplines */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-4">
              Visitor Information
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  About This Tourism Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Tourist Helplines & Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/culture-and-festivals')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Festivals & Handicrafts
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800">
                <span className="text-[11px] text-stone-500 block">Toll-Free MP Tourism Helpline:</span>
                <span className="font-mono text-stone-300 font-medium text-xs">1800-233-7777</span>
              </li>
              <li>
                <span className="text-[11px] text-stone-500 block">Emergency Police Helpline:</span>
                <span className="font-mono text-stone-300 font-medium text-xs">112</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Attribution Strip */}
      <div className="border-t border-stone-900 bg-black/60 py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} MP Tourism Comprehensive Guide. Authentic educational and visitor portal dedicated to Madhya Pradesh, India.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <button onClick={() => onNavigate('/about')} className="hover:text-amber-400">
              About
            </button>
            <span>·</span>
            <button onClick={() => onNavigate('/contact')} className="hover:text-amber-400">
              Helpline
            </button>
            <span>·</span>
            <a href="/sitemap.xml" className="hover:text-amber-400" target="_blank" rel="noopener noreferrer">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
