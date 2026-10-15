import React from 'react';
import { foodItems } from '../data/foods';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Utensils, ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface FoodPageProps {
  onNavigate: (path: string) => void;
}

export const FoodPage: React.FC<FoodPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'Food & Cuisine' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Gastronomic Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Traditional Food & Cuisine of Madhya Pradesh
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed">
            Madhya Pradesh’s culinary landscape is a feast of contrasts: from the world-famous steam-cooked Indori Poha dusted with tangy Jeeravan masala and the regal ghee-drenched Dal Bafla of Malwa, to the nocturnal street food carnival of Sarafa Bazaar and the royal slow-cooked dum biryanis of the Begums of Bhopal.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {foodItems.map((food) => (
            <article
              key={food.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden bg-stone-100 relative">
                <img
                  src={food.image}
                  alt={food.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono text-amber-300 font-medium">
                  {food.region}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                    <span className="capitalize font-medium">{food.category}</span>
                    <span>{food.approximatePrice}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                    {food.name}
                  </h2>
                  {food.hindiName && (
                    <span className="text-xs text-stone-500 font-medium block mt-0.5">
                      {food.hindiName}
                    </span>
                  )}
                  <p className="text-stone-700 text-xs sm:text-sm mt-3 leading-relaxed line-clamp-3">
                    {food.summary}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-mono text-stone-500 uppercase font-semibold block mb-1">
                      Signature Elements:
                    </span>
                    <p className="text-xs text-stone-600 line-clamp-1">
                      {food.keyIngredients.slice(0, 4).join(', ')}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    {food.whereToTry[0]?.place} ({food.whereToTry[0]?.location.split(',')[0]})
                  </span>
                  <button
                    onClick={() => onNavigate(`/food-and-cuisine/${food.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-900 hover:underline"
                  >
                    <span>Read recipe & food guide</span>
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
