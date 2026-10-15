import React from 'react';
import { festivals, handloomCrafts } from '../data/culture';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Sparkles, Calendar, MapPin, Feather, CheckCircle } from 'lucide-react';

interface CulturePageProps {
  onNavigate: (path: string) => void;
}

export const CulturePage: React.FC<CulturePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'Culture & Festivals' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Living Traditions of Central India</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Culture, Festivals & Handlooms of Madhya Pradesh
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed">
            From the world-renowned Khajuraho Classical Dance Festival and the 500-year-old Tansen classical music assembly in Gwalior to the vibrant tribal spring haats of Bhagoria and royal handwoven Chanderi and Maheshwari silks, experience the soul of India’s deepest cultural sanctuary.
          </p>
        </div>

        {/* Famous Festivals */}
        <div className="mt-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
            Iconic Cultural & Religious Festivals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {festivals.map((fest) => (
              <div
                key={fest.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden bg-stone-100">
                    <img
                      src={fest.image}
                      alt={fest.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
                      <span className="text-amber-800 font-semibold uppercase">{fest.timing}</span>
                      <span>{fest.location}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">{fest.name}</h3>
                    <p className="text-stone-700 text-xs sm:text-sm mt-3 leading-relaxed">
                      {fest.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-stone-100">
                      <span className="text-[11px] font-mono uppercase text-stone-500 font-semibold block mb-2">
                        Festival Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-stone-700">
                        {fest.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-amber-600 font-bold">•</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4 bg-stone-50 border-t border-stone-100 text-xs text-stone-600 italic">
                  <strong>Etiquette:</strong> {fest.visitorEtiquette}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Handloom & Tribal Crafts */}
        <div className="mt-20 space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-2">
              Heritage Weaving & Indigenous Arts
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Master Crafts of Madhya Pradesh
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Generations of master weavers and tribal artists preserve techniques that have earned global Geographic Indication (GI) status.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {handloomCrafts.map((craft, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-800 font-semibold mb-2">
                    <Feather className="w-3.5 h-3.5 text-amber-600" />
                    <span>{craft.region}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900">{craft.name}</h3>
                  <span className="text-xs text-stone-500 font-medium block mt-1">
                    Medium: {craft.fabric}
                  </span>
                  <p className="text-stone-700 text-xs leading-relaxed mt-3">{craft.description}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100">
                  <span className="text-[10px] font-mono uppercase text-amber-900 font-semibold block mb-1">
                    Signature Technique:
                  </span>
                  <p className="text-xs text-stone-600 leading-relaxed italic">
                    {craft.specialFeature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
