import React, { useState, useEffect } from 'react';
import { Search, Bookmark, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  onOpenWishlist: () => void;
  wishlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  onOpenWishlist,
  wishlistCount,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPath === '/' || currentPath === '';

  const navLinks = [
    { label: 'Destinations', path: '/destinations', hasDropdown: true },
    { label: 'Spiritual', path: '/destinations/omkareshwar-jyotirlinga' },
    { label: 'Wildlife', path: '/wildlife' },
    { label: 'Cuisine', path: '/food-and-cuisine' },
    { label: 'Culture', path: '/culture-and-festivals' },
    { label: 'Itineraries', path: '/travel-guides' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || !isHome
          ? 'bg-stone-900/95 backdrop-blur-md text-stone-100 shadow-md border-b border-stone-800'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single Brand Wordmark */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg p-1"
            aria-label="MP Tourism Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-serif text-white font-bold text-xl shadow-inner border border-amber-300/40">
              MP
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors whitespace-nowrap">
                MP TOURISM
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-300/90 font-medium whitespace-nowrap">
                Heart of Incredible India
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => onNavigate('/')}
              className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 ${
                currentPath === '/' ? 'text-amber-400 font-semibold' : 'text-stone-200'
              }`}
            >
              Home
            </button>

            <div
              className="relative"
              onMouseEnter={() => setDestDropdownOpen(true)}
              onMouseLeave={() => setDestDropdownOpen(false)}
            >
              <button
                onClick={() => onNavigate('/destinations')}
                className={`flex items-center gap-1 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 ${
                  currentPath.startsWith('/destinations') ? 'text-amber-400 font-semibold' : 'text-stone-200'
                }`}
              >
                Destinations
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${destDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {destDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-stone-900 border border-stone-800 rounded-xl shadow-2xl py-2 mt-0 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <a
                    href="/destinations"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations');
                    }}
                    className="block px-4 py-2 text-xs font-semibold text-amber-400 hover:bg-stone-800/80 border-b border-stone-800"
                  >
                    View All 12+ Destinations →
                  </a>
                  <a
                    href="/destinations/omkareshwar-jyotirlinga"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/omkareshwar-jyotirlinga');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Omkareshwar Jyotirlinga
                  </a>
                  <a
                    href="/destinations/mahakaleshwar-ujjain"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/mahakaleshwar-ujjain');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Mahakaleshwar, Ujjain
                  </a>
                  <a
                    href="/destinations/khajuraho-temples"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/khajuraho-temples');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Khajuraho Temples (UNESCO)
                  </a>
                  <a
                    href="/destinations/sanchi-stupa"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/sanchi-stupa');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Sanchi Stupa (UNESCO)
                  </a>
                  <a
                    href="/destinations/orchha"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/orchha');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Orchha Palaces & Chhatris
                  </a>
                  <a
                    href="/destinations/gwalior-fort"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/gwalior-fort');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Gwalior Fort & Palaces
                  </a>
                  <a
                    href="/destinations/pachmarhi"
                    onClick={(e) => {
                      e.preventDefault();
                      setDestDropdownOpen(false);
                      onNavigate('/destinations/pachmarhi');
                    }}
                    className="block px-4 py-2 text-sm text-stone-200 hover:text-amber-300 hover:bg-stone-800/60"
                  >
                    Pachmarhi Hill Station
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigate('/wildlife')}
              className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 ${
                currentPath.startsWith('/wildlife') ? 'text-amber-400 font-semibold' : 'text-stone-200'
              }`}
            >
              Wildlife & Tigers
            </button>

            <button
              onClick={() => onNavigate('/food-and-cuisine')}
              className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 ${
                currentPath.startsWith('/food-and-cuisine') ? 'text-amber-400 font-semibold' : 'text-stone-200'
              }`}
            >
              Food & Cuisine
            </button>

            <button
              onClick={() => onNavigate('/culture-and-festivals')}
              className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 ${
                currentPath.startsWith('/culture-and-festivals') ? 'text-amber-400 font-semibold' : 'text-stone-200'
              }`}
            >
              Culture & Festivals
            </button>

            <button
              onClick={() => onNavigate('/travel-guides')}
              className={`hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 ${
                currentPath.startsWith('/travel-guides') ? 'text-amber-400 font-semibold' : 'text-stone-200'
              }`}
            >
              Itineraries
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action + Utility Icons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-stone-200 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Search destinations, food, and guides"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Saved Wishlist */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2 text-stone-200 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label={`View saved items (${wishlistCount})`}
            >
              <Bookmark className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-amber-500 text-stone-900 text-[10px] font-bold flex items-center justify-center font-mono tabular-nums">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onNavigate('/travel-guides')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Plan Your Trip
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 border-b border-stone-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/destinations');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-amber-400 hover:bg-stone-800"
            >
              All Destinations
            </button>
            <div className="pl-4 flex flex-col gap-1 border-l border-stone-800 my-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/destinations/omkareshwar-jyotirlinga');
                }}
                className="text-left py-1 text-xs text-stone-300 hover:text-amber-300"
              >
                Omkareshwar Jyotirlinga
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/destinations/mahakaleshwar-ujjain');
                }}
                className="text-left py-1 text-xs text-stone-300 hover:text-amber-300"
              >
                Mahakaleshwar Jyotirlinga, Ujjain
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/destinations/khajuraho-temples');
                }}
                className="text-left py-1 text-xs text-stone-300 hover:text-amber-300"
              >
                Khajuraho Temples
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/destinations/sanchi-stupa');
                }}
                className="text-left py-1 text-xs text-stone-300 hover:text-amber-300"
              >
                Sanchi Stupa
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/destinations/orchha');
                }}
                className="text-left py-1 text-xs text-stone-300 hover:text-amber-300"
              >
                Orchha Fort & Palaces
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/destinations/gwalior-fort');
                }}
                className="text-left py-1 text-xs text-stone-300 hover:text-amber-300"
              >
                Gwalior Fort
              </button>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/wildlife');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              Wildlife & Tigers
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/food-and-cuisine');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              Food & Cuisine
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/culture-and-festivals');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              Culture & Festivals
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/travel-guides');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              Travel Itineraries
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/about');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              About MP Tourism
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('/contact');
              }}
              className="text-left py-2.5 px-3 rounded-lg text-sm font-medium text-stone-200 hover:bg-stone-800"
            >
              Contact & Helplines
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
