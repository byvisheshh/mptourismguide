import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { DarshanPlannerModal } from './components/DarshanPlannerModal';

// Pages
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { WildlifePage } from './pages/WildlifePage';
import { WildlifeDetailPage } from './pages/WildlifeDetailPage';
import { FoodPage } from './pages/FoodPage';
import { FoodDetailPage } from './pages/FoodDetailPage';
import { CulturePage } from './pages/CulturePage';
import { ItinerariesPage } from './pages/ItinerariesPage';
import { ItineraryDetailPage } from './pages/ItineraryDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Data
import { destinations } from './data/destinations';
import { wildlifeParks } from './data/wildlife';
import { foodItems } from './data/foods';
import { travelItineraries } from './data/itineraries';
import { updatePageSeo, PRIMARY_CANONICAL_DOMAIN } from './utils/seo';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [darshanModalDest, setDarshanModalDest] = useState<string | null>(null);

  // Wishlist in LocalStorage
  const [wishlist, setWishlist] = useState<
    { id: string; title: string; path: string; category: string; image: string }[]
  >(() => {
    try {
      const stored = localStorage.getItem('mp_tourism_wishlist');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Enforce single primary public domain: https://mptourismguide.vercel.app
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      // If visited via secondary or generated Vercel deployment domains (e.g. mptourismguide-vishesh-c614.vercel.app),
      // seamlessly redirect to the primary canonical domain https://mptourismguide.vercel.app
      if (
        hostname.endsWith('.vercel.app') &&
        hostname !== 'mptourismguide.vercel.app'
      ) {
        const canonicalTarget = `https://mptourismguide.vercel.app${window.location.pathname}${window.location.search}${window.location.hash}`;
        window.location.replace(canonicalTarget);
      }
    }
  }, []);

  // Listen to popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Save wishlist
  useEffect(() => {
    try {
      localStorage.setItem('mp_tourism_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [wishlist]);

  // Navigate function that pushes history
  const navigate = (path: string) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (item: {
    id: string;
    title: string;
    path: string;
    category: string;
    image: string;
  }) => {
    setWishlist((prev) => {
      const exists = prev.some((x) => x.id === item.id);
      if (exists) {
        return prev.filter((x) => x.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const isWishlisted = (id: string) => wishlist.some((x) => x.id === id);

  const handleRemoveWishlistItem = (id: string) => {
    setWishlist((prev) => prev.filter((x) => x.id !== id));
  };

  const handleClearWishlist = () => {
    setWishlist([]);
  };

  // Route matching logic
  const renderCurrentView = () => {
    // 1. Home
    if (currentPath === '/' || currentPath === '') {
      updatePageSeo(
        {
          primaryKeyword: 'Madhya Pradesh tourism',
          secondaryKeywords: ['places to visit in Madhya Pradesh', 'Madhya Pradesh travel guide'],
          title: 'MP Tourism — The Heart of Incredible India | Official Travel Guide',
          metaDescription:
            'Explore Madhya Pradesh, the Heart of India. Discover Jyotirlingas, Khajuraho temples, Bandhavgarh tigers, UNESCO heritage sites, and authentic Malwa cuisine.',
        },
        '/',
        {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${PRIMARY_CANONICAL_DOMAIN}/#website`,
              name: 'MP Tourism Guide',
              alternateName: 'Madhya Pradesh Tourism — The Heart of Incredible India',
              url: `${PRIMARY_CANONICAL_DOMAIN}/`,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${PRIMARY_CANONICAL_DOMAIN}/destinations?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@type': 'Organization',
              '@id': `${PRIMARY_CANONICAL_DOMAIN}/#organization`,
              name: 'MP Tourism Guide',
              url: `${PRIMARY_CANONICAL_DOMAIN}/`,
              logo: `${PRIMARY_CANONICAL_DOMAIN}/favicon.svg`,
              description:
                'Official independent guide to Madhya Pradesh tourism, covering UNESCO World Heritage monuments, sacred Jyotirlingas, national park tiger safaris, and authentic Malwa cuisine.',
            },
            {
              '@type': 'TouristDestination',
              '@id': `${PRIMARY_CANONICAL_DOMAIN}/#destination`,
              name: 'Madhya Pradesh',
              description:
                'The Heart of Incredible India, featuring UNESCO monuments, 2 sacred Shiva Jyotirlingas, 785+ wild Bengal tigers, and millennia of living history.',
              touristType: ['Spiritual Tourism', 'Heritage Tourism', 'Wildlife Safaris', 'Culinary Tours'],
            },
            {
              '@type': 'FAQPage',
              '@id': `${PRIMARY_CANONICAL_DOMAIN}/#faq`,
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Why is Madhya Pradesh called the Heart of India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Geographically situated in the center of the Indian subcontinent, Madhya Pradesh is fondly known as the Heart of India. It represents the cultural heart where traditions coalesce — home to 3 UNESCO World Heritage Sites, two sacred Shiva Jyotirlingas, 785+ Bengal tigers, and millennia of unbroken art and history.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which are the two sacred Jyotirlingas located in Madhya Pradesh?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Madhya Pradesh is blessed with two sacred Shiva Jyotirlingas: Mahakaleshwar in the ancient city of Ujjain (the only south-facing Jyotirlinga, famous for the dawn Bhasma Aarti) and Omkareshwar situated on the sacred island of Mandhata in the holy Narmada River.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is the best time of year to visit Madhya Pradesh?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The ideal time to visit is from October to March when temperatures are mild and pleasant (10°C to 28°C), making heritage site explorations and wildlife safaris comfortable.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which national parks are best for tiger sightings in Madhya Pradesh?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bandhavgarh National Park has the highest tiger density in India, making it the top choice for tiger photography. Kanha Tiger Reserve is famous for its vast Sal meadows and rare Hardground Barasingha. Pench National Park offers easy accessibility and open teakwood visibility.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are the must-try regional dishes in Madhya Pradesh?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Do not miss authentic steam-cooked Indore Poha with Ratlami sev and hot saffron Jalebi, traditional Dal Bafla drenched in pure desi ghee, midnight street food at Sarafa Bazaar, and royal slow-cooked Bhopali mutton biryani.',
                  },
                },
              ],
            },
          ],
        }
      );

      return (
        <HomePage
          onNavigate={navigate}
          onOpenDarshanModal={(dest) => setDarshanModalDest(dest || 'omkareshwar')}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
        />
      );
    }

    // 2. Destinations index
    if (currentPath === '/destinations') {
      updatePageSeo(
        {
          primaryKeyword: 'places to visit in Madhya Pradesh',
          secondaryKeywords: ['Madhya Pradesh tourist attractions', 'MP travel destinations'],
          title: 'Places to Visit in Madhya Pradesh | All 12+ Destinations',
          metaDescription:
            'Explore all top tourist destinations in Madhya Pradesh: Khajuraho, Sanchi, Omkareshwar, Ujjain, Gwalior Fort, Orchha, Pachmarhi, and Mandu.',
        },
        '/destinations',
        {
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
                  name: 'Destinations',
                  item: `${PRIMARY_CANONICAL_DOMAIN}/destinations`,
                },
              ],
            },
            {
              '@type': 'CollectionPage',
              name: 'Places to Visit in Madhya Pradesh | All 12+ Destinations',
              description:
                'Explore all top tourist destinations in Madhya Pradesh: Khajuraho, Sanchi, Omkareshwar, Ujjain, Gwalior Fort, Orchha, Pachmarhi, and Mandu.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: destinations.map((d, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  name: d.name,
                  url: `${PRIMARY_CANONICAL_DOMAIN}/destinations/${d.slug}`,
                  image: `${PRIMARY_CANONICAL_DOMAIN}${d.image}`,
                })),
              },
            },
          ],
        }
      );

      return (
        <DestinationsPage
          onNavigate={navigate}
          onToggleWishlist={handleToggleWishlist}
          isWishlisted={isWishlisted}
        />
      );
    }

    // 3. Destination Detail: /destinations/:slug
    if (currentPath.startsWith('/destinations/')) {
      const slug = currentPath.replace('/destinations/', '').replace(/\/$/, '');
      const found = destinations.find((d) => d.slug === slug);
      if (found) {
        return (
          <DestinationDetailPage
            destination={found}
            onNavigate={navigate}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
            onOpenDarshanModal={(dest) => setDarshanModalDest(dest || found.slug)}
          />
        );
      }
    }

    // 4. Wildlife index
    if (currentPath === '/wildlife') {
      updatePageSeo(
        {
          primaryKeyword: 'Madhya Pradesh tiger safari',
          secondaryKeywords: ['wildlife in Madhya Pradesh', 'national parks in MP'],
          title: 'Wildlife & Tiger Reserves of Madhya Pradesh | Safari Guide',
          metaDescription:
            'Explore India’s Tiger State with 785+ Bengal tigers. Complete guide to Bandhavgarh, Kanha, Pench, and Satpura national park safaris and permits.',
        },
        '/wildlife',
        {
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
                  name: 'Wildlife',
                  item: `${PRIMARY_CANONICAL_DOMAIN}/wildlife`,
                },
              ],
            },
            {
              '@type': 'CollectionPage',
              name: 'Wildlife & Tiger Reserves of Madhya Pradesh | Safari Guide',
              description:
                'Explore India’s Tiger State with 785+ Bengal tigers. Complete guide to Bandhavgarh, Kanha, Pench, and Satpura national park safaris and permits.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: wildlifeParks.map((p, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  name: p.name,
                  url: `${PRIMARY_CANONICAL_DOMAIN}/wildlife/${p.slug}`,
                  image: `${PRIMARY_CANONICAL_DOMAIN}${p.image}`,
                })),
              },
            },
          ],
        }
      );

      return (
        <WildlifePage
          onNavigate={navigate}
          onOpenDarshanModal={(park) => setDarshanModalDest(park || 'bandhavgarh')}
        />
      );
    }

    // 5. Wildlife Detail: /wildlife/:slug
    if (currentPath.startsWith('/wildlife/')) {
      const slug = currentPath.replace('/wildlife/', '').replace(/\/$/, '');
      const found = wildlifeParks.find((w) => w.slug === slug);
      if (found) {
        return (
          <WildlifeDetailPage
            park={found}
            onNavigate={navigate}
            onOpenDarshanModal={(park) => setDarshanModalDest(park || found.slug)}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
          />
        );
      }
    }

    // 6. Food & Cuisine index
    if (currentPath === '/food-and-cuisine') {
      updatePageSeo(
        {
          primaryKeyword: 'famous food in Madhya Pradesh',
          secondaryKeywords: ['Madhya Pradesh cuisine', 'Malwa food'],
          title: 'Traditional Food of Madhya Pradesh | Malwa Cuisine Guide',
          metaDescription:
            'Discover the authentic flavours of Madhya Pradesh: Indore poha jalebi, traditional dal bafla, Sarafa night market delicacies, and royal Bhopali biryani.',
        },
        '/food-and-cuisine',
        {
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
              ],
            },
            {
              '@type': 'CollectionPage',
              name: 'Traditional Food of Madhya Pradesh | Malwa Cuisine Guide',
              description:
                'Discover the authentic flavours of Madhya Pradesh: Indore poha jalebi, traditional dal bafla, Sarafa night market delicacies, and royal Bhopali biryani.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: foodItems.map((f, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  name: f.name,
                  url: `${PRIMARY_CANONICAL_DOMAIN}/food-and-cuisine/${f.slug}`,
                  image: `${PRIMARY_CANONICAL_DOMAIN}${f.image}`,
                })),
              },
            },
          ],
        }
      );

      return <FoodPage onNavigate={navigate} />;
    }

    // 7. Food Detail: /food-and-cuisine/:slug
    if (currentPath.startsWith('/food-and-cuisine/')) {
      const slug = currentPath.replace('/food-and-cuisine/', '').replace(/\/$/, '');
      const found = foodItems.find((f) => f.slug === slug);
      if (found) {
        return (
          <FoodDetailPage
            food={found}
            onNavigate={navigate}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={isWishlisted}
          />
        );
      }
    }

    // 8. Culture & Festivals
    if (currentPath === '/culture-and-festivals') {
      updatePageSeo(
        {
          primaryKeyword: 'culture of Madhya Pradesh',
          secondaryKeywords: ['festivals in Madhya Pradesh', 'Chanderi Maheshwari handlooms'],
          title: 'Culture & Festivals of Madhya Pradesh | Khajuraho Dance & Handlooms',
          metaDescription:
            'Experience the rich cultural heritage of MP: Khajuraho Dance Festival, Tansen Samaroh, Bhagoria tribal festival, and Chanderi/Maheshwari handloom weaving.',
        },
        '/culture-and-festivals',
        {
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
                  name: 'Culture & Festivals',
                  item: `${PRIMARY_CANONICAL_DOMAIN}/culture-and-festivals`,
                },
              ],
            },
            {
              '@type': 'CollectionPage',
              name: 'Culture & Festivals of Madhya Pradesh | Khajuraho Dance & Handlooms',
              description:
                'Experience the rich cultural heritage of MP: Khajuraho Dance Festival, Tansen Samaroh, Bhagoria tribal festival, and Chanderi/Maheshwari handloom weaving.',
            },
          ],
        }
      );

      return <CulturePage onNavigate={navigate} />;
    }

    // 9. Travel Guides index
    if (currentPath === '/travel-guides') {
      updatePageSeo(
        {
          primaryKeyword: 'Madhya Pradesh travel itinerary',
          secondaryKeywords: ['Madhya Pradesh trip plan', 'MP tour packages'],
          title: 'Madhya Pradesh Travel Itineraries | Curated Trip Plans',
          metaDescription:
            'Curated itineraries for Madhya Pradesh: 7-day grand circuit, 3-day Jyotirlinga pilgrimage, 6-day tiger safari, and 5-day northern heritage triangle.',
        },
        '/travel-guides',
        {
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
                  name: 'Travel Guides',
                  item: `${PRIMARY_CANONICAL_DOMAIN}/travel-guides`,
                },
              ],
            },
            {
              '@type': 'CollectionPage',
              name: 'Madhya Pradesh Travel Itineraries | Curated Trip Plans',
              description:
                'Curated itineraries for Madhya Pradesh: 7-day grand circuit, 3-day Jyotirlinga pilgrimage, 6-day tiger safari, and 5-day northern heritage triangle.',
              mainEntity: {
                '@type': 'ItemList',
                itemListElement: travelItineraries.map((t, idx) => ({
                  '@type': 'ListItem',
                  position: idx + 1,
                  name: t.title,
                  url: `${PRIMARY_CANONICAL_DOMAIN}/travel-guides/${t.slug}`,
                  image: `${PRIMARY_CANONICAL_DOMAIN}${t.image}`,
                })),
              },
            },
          ],
        }
      );

      return <ItinerariesPage onNavigate={navigate} />;
    }

    // 10. Itinerary Detail: /travel-guides/:slug
    if (currentPath.startsWith('/travel-guides/')) {
      const slug = currentPath.replace('/travel-guides/', '').replace(/\/$/, '');
      const found = travelItineraries.find((i) => i.slug === slug);
      if (found) {
        return <ItineraryDetailPage itinerary={found} onNavigate={navigate} />;
      }
    }

    // 11. About
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 12. Contact
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }

    // 13. 404 Fallback
    return (
      <div className="min-h-[70vh] flex items-center justify-center pt-28 pb-20 px-4 bg-stone-50">
        <div className="text-center max-w-md">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
            Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mt-2">
            Explore Madhya Pradesh
          </h1>
          <p className="text-sm text-stone-600 mt-3 leading-relaxed">
            The page you requested ({currentPath}) does not exist, but there are dozens of sacred shrines, forts, and national parks waiting to be discovered.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-xl transition-colors"
            >
              Return to Homepage
            </button>
            <button
              onClick={() => navigate('/destinations')}
              className="px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium text-xs rounded-xl transition-colors"
            >
              Browse All Destinations
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-200 selection:text-stone-900">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={wishlist.length}
      />

      {/* Main View */}
      <div className="flex-1">{renderCurrentView()}</div>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Modals & Drawers */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectResult={(path) => navigate(path)}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onRemoveItem={handleRemoveWishlistItem}
        onClearAll={handleClearWishlist}
        onNavigate={navigate}
      />

      <DarshanPlannerModal
        isOpen={!!darshanModalDest}
        onClose={() => setDarshanModalDest(null)}
        defaultDestination={darshanModalDest || 'omkareshwar'}
      />
    </div>
  );
}
