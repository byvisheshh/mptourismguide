import React, { useEffect } from 'react';
import { FoodItem } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { updatePageSeo, PRIMARY_CANONICAL_DOMAIN } from '../utils/seo';
import {
  Utensils,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle,
  HelpCircle,
  AlertCircle,
  DollarSign,
  Bookmark,
  BookmarkCheck,
} from 'lucide-react';

interface FoodDetailPageProps {
  food: FoodItem;
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

export const FoodDetailPage: React.FC<FoodDetailPageProps> = ({
  food,
  onNavigate,
  onToggleWishlist,
  isWishlisted,
}) => {
  const wish = isWishlisted(food.id);

  useEffect(() => {
    const canonicalUrl = `${PRIMARY_CANONICAL_DOMAIN}/food-and-cuisine/${food.slug}`;
    const absoluteImage = `${PRIMARY_CANONICAL_DOMAIN}${food.image}`;

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
              name: 'Food & Cuisine',
              item: `${PRIMARY_CANONICAL_DOMAIN}/food-and-cuisine`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: food.name,
              item: canonicalUrl,
            },
          ],
        },
        {
          '@type': 'Recipe',
          '@id': `${canonicalUrl}#recipe`,
          name: food.name,
          description: food.summary,
          image: absoluteImage,
          url: canonicalUrl,
          recipeCuisine: 'Indian - Madhya Pradesh',
          recipeCategory: food.category,
          suitableForDiet: food.dietaryInfo.isVegetarian
            ? 'https://schema.org/VegetarianDiet'
            : undefined,
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          mainEntity: (food.faqs || []).map((f) => ({
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

    updatePageSeo(food.seo, `/food-and-cuisine/${food.slug}`, schemaData, food.image);
    window.scrollTo(0, 0);
  }, [food]);

  return (
    <article className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs
        items={[
          { label: 'Food & Cuisine', path: '/food-and-cuisine' },
          { label: food.name },
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase font-semibold mb-3">
            <span>{food.region} Cuisine</span>
            <span aria-hidden="true">·</span>
            <span className="capitalize">{food.category}</span>
            <span aria-hidden="true">·</span>
            <span>{food.dietaryInfo.isVegetarian ? '100% Vegetarian' : 'Non-Vegetarian'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.15] [text-wrap:balance]">
            {food.name}
          </h1>
          {food.hindiName && (
            <p className="text-lg text-amber-900 font-serif mt-2 font-medium">
              {food.hindiName}
            </p>
          )}
        </div>

        {/* Hero Image */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-900 relative aspect-[16/9] max-h-[550px]">
          <img
            src={food.image}
            alt={food.imageAlt}
            className="w-full h-full object-cover"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/75 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs flex items-center justify-between sm:justify-start gap-4">
            <span className="font-medium text-amber-200">{food.imageAlt}</span>
            <span className="text-[10px] text-stone-400 border-l border-white/20 pl-3">
              Photo: {food.imageCredit}
            </span>
          </div>

          <button
            onClick={() =>
              onToggleWishlist({
                id: food.id,
                title: food.name,
                path: `/food-and-cuisine/${food.slug}`,
                category: 'CUISINE',
                image: food.image,
              })
            }
            className="absolute top-4 right-4 p-3 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md text-white transition-colors"
            aria-label={wish ? `Remove ${food.name}` : `Save ${food.name}`}
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
          {/* Main Reading Column with Question-based Headings */}
          <main className="lg:col-span-8 space-y-12">
            {/* 1. What Is The Dish? */}
            <section className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {food.slug === 'indore-poha-jalebi'
                  ? 'What Is Poha and Jalebi in Indore?'
                  : food.slug === 'dal-bafla'
                  ? 'What Is Traditional Dal Bafla?'
                  : food.slug === 'sarafa-bazaar-indore'
                  ? 'What Is Sarafa Bazaar in Indore?'
                  : `What Is ${food.name}?`}
              </h2>
              <p className="text-base sm:text-lg text-stone-800 leading-relaxed">
                {food.whatIsIt}
              </p>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {food.summary}
              </p>
            </section>

            {/* 2. Appearance, Texture & Distinctive Characteristics */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {food.slug === 'indore-poha-jalebi'
                  ? 'What Makes Indore-Style Poha Distinctive?'
                  : food.slug === 'dal-bafla'
                  ? 'Texture, Flavour & Characteristics'
                  : 'Appearance, Texture & Flavours'}
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {food.appearanceAndTaste}
              </p>
            </section>

            {/* 3. Main Ingredients */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Key Ingredients
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                {food.keyIngredients.map((ing, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-800 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Preparation Method */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {food.slug === 'dal-bafla'
                  ? 'How Is Dal Bafla Prepared?'
                  : food.slug === 'bhopali-biryani-and-kebabs'
                  ? 'What Is Special About Bhopali Biryani & Dum Preparation?'
                  : 'Traditional Cooking Method'}
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {food.traditionalPreparation}
              </p>
            </section>

            {/* 5. Cultural Background & Serving Tradition */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                Cultural Heritage & How It Is Served
              </h2>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {food.culturalBackground}
              </p>
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs sm:text-sm text-stone-800 leading-relaxed mt-3">
                <strong>Serving Tradition:</strong> {food.howServed}
              </div>
            </section>

            {/* 6. Where to Try (Verified Spots) */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {food.slug === 'sarafa-bazaar-indore'
                  ? 'Where Can Visitors Explore Indore’s Street Food?'
                  : `Where to Try Authentic ${food.name}`}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {food.whereToTry.map((spot, idx) => (
                  <div key={idx} className="p-4 bg-white rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-amber-800 font-semibold block">
                        {spot.location}
                      </span>
                      <h3 className="font-serif font-bold text-stone-900 text-sm mt-1">{spot.place}</h3>
                      {spot.tip && (
                        <p className="text-xs text-stone-600 mt-2 leading-relaxed italic">
                          Tip: {spot.tip}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Tips for Visitors */}
            <section className="space-y-4 pt-4 border-t border-stone-200">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                {food.slug === 'sarafa-bazaar-indore'
                  ? 'What Should First-Time Visitors Know About Sarafa Bazaar?'
                  : 'Tips for First-Time Tasters'}
              </h2>
              <div className="space-y-2">
                {food.tipsForVisitors.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-semibold">
                  Culinary Factsheet
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  Food Overview
                </h3>
              </div>

              <div className="space-y-4 text-xs text-stone-700 divide-y divide-stone-100">
                <div className="pt-2">
                  <span className="text-stone-500 font-medium block">Region of Origin:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {food.region}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Price Range:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {food.approximatePrice}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Dietary Status:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {food.dietaryInfo.isVegetarian ? '100% Vegetarian' : 'Non-Vegetarian'}
                  </span>
                </div>

                <div className="pt-3">
                  <span className="text-stone-500 font-medium block">Allergens / Ingredients Note:</span>
                  <span className="font-semibold text-stone-900 mt-0.5 block">
                    {food.dietaryInfo.allergens}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('/destinations/indore')}
                className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl transition-colors shadow-sm text-center"
              >
                Explore Indore Culinary City Guide
              </button>

              <button
                onClick={() => onNavigate('/food-and-cuisine')}
                className="w-full py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl transition-colors text-center"
              >
                Back to All Cuisine Guides
              </button>
            </div>
          </aside>
        </div>
      </div>

      <FaqSection
        faqs={food.faqs}
        title={`Frequently Asked Questions About ${food.name}`}
      />
    </article>
  );
};
