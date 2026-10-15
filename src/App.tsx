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
import { updatePageSeo } from './utils/seo';

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
          title: 'MP Tourism — The Heart of Incredible India | Travel Guide',
          metaDescription:
            'Explore Madhya Pradesh, the Heart of India. Discover Jyotirlingas, Khajuraho temples, Bandhavgarh tigers, UNESCO heritage sites, and authentic Malwa cuisine.',
        },
        '/'
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
        '/destinations'
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
        '/wildlife'
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
        '/food-and-cuisine'
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
        '/culture-and-festivals'
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
        '/travel-guides'
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
