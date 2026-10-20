import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { updatePageSeo } from '../utils/seo';
import { Compass, ShieldCheck, Heart, MapPin, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    updatePageSeo(
      {
        primaryKeyword: 'Madhya Pradesh tourism',
        secondaryKeywords: ['MP tourism guide', 'visit Madhya Pradesh'],
        title: 'About MP Tourism Guide: Mission & Travel Information',
        metaDescription:
          'Learn about the Madhya Pradesh Tourism comprehensive travel portal. Committed to verified historical facts, authentic photography, and cultural travel planning.',
      },
      '/about',
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About MP Tourism Guide: Mission & Travel Information',
        description:
          'Learn about the Madhya Pradesh Tourism comprehensive travel portal. Committed to verified historical facts, authentic photography, and cultural travel planning.',
      }
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-20">
      <Breadcrumbs items={[{ label: 'About' }]} onNavigate={onNavigate} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Portal Mission & Ethics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            About the Madhya Pradesh Tourism Guide
          </h1>
          <p className="text-base sm:text-lg text-stone-700 mt-4 leading-relaxed font-serif italic">
            "The Heart of Incredible India — Dedicated to authentic cultural exploration, sacred pilgrimages, and responsible wilderness travel."
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-stone-800 text-sm sm:text-base leading-relaxed bg-white p-8 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Our Purpose
            </h2>
            <p>
              This portal serves as an authoritative, content-rich, independent informational directory for travelers, pilgrims, wildlife enthusiasts, and cultural explorers seeking to experience Madhya Pradesh, India.
            </p>
            <p className="text-stone-700">
              Madhya Pradesh is rich in historical and spiritual landmarks: the ancient Mauryan stupas of Sanchi, the timeless rock shelters of Bhimbetka, the medieval Bundela architecture of Orchha and Gwalior, the high tiger concentrations of Bandhavgarh and Kanha, and the dual Shiva Jyotirlingas of Mahakaleshwar and Omkareshwar. Our mission is to provide accurate, verified information, respectful cultural context, and practical travel logistics for every major destination.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-stone-200">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Our Core Editorial Principles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Subject-Specific Accuracy</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We never use generic or unrelated city skylines to represent sacred or historic landmarks. Every destination guide is paired with verified photographs of the exact temple, monument, dish, or national park described.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>Verified Factual Sourcing</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We base history, entry permits, darshan traditions, and transport routes on official resources, Archaeological Survey of India (ASI) records, and state forest departments.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm">
                  <Heart className="w-4 h-4 text-red-700" />
                  <span>Cultural & Religious Respect</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We outline traditional dress codes, sanctum photography guidelines, and sacred parikrama etiquette to ensure visitors travel with reverence.
                </p>
              </div>

              <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 font-serif font-bold text-stone-900 text-sm">
                  <Compass className="w-4 h-4 text-blue-700" />
                  <span>Responsible Eco-Tourism</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We advocate zero-plastic ethics, strict compliance with national park rules, support for indigenous tribal crafts, and the preservation of natural river systems.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-6 border-t border-stone-200">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Official Disclaimer
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              This website is an educational and tourism information resource. While every effort is made to maintain up-to-date schedules, temple darshan timings and safari permit booking rules may change based on temple trust directives or state forest department seasonal regulations. Visitors are advised to re-verify time-sensitive permits with official authorities prior to departure.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
