import React from 'react';
import { X, Trash2, ArrowRight, BookmarkCheck, MapPin } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlist: { id: string; title: string; path: string; category: string; image: string }[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
  onNavigate: (path: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlist,
  onRemoveItem,
  onClearAll,
  onNavigate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-stone-900 border-l border-stone-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <BookmarkCheck className="w-5 h-5 text-amber-400" />
              <h2 className="font-serif text-lg font-bold text-white">Your Saved Places</h2>
              <span className="text-xs font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded-full border border-amber-800/50">
                {wishlist.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Close saved places"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlist.length === 0 ? (
              <div className="text-center py-16 px-4">
                <BookmarkCheck className="w-12 h-12 text-stone-700 mx-auto mb-3" />
                <p className="text-stone-300 font-medium text-sm">No saved places yet</p>
                <p className="text-stone-500 text-xs mt-1 leading-relaxed">
                  Click the bookmark icon on any destination or food guide to create your custom Madhya Pradesh travel bucket list!
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-stone-800/70 border border-stone-700/60 flex items-center gap-3 group hover:border-amber-400/50 transition-colors"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] tracking-wider uppercase font-mono text-amber-400 font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-semibold text-white truncate group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <button
                      onClick={() => {
                        onNavigate(item.path);
                        onClose();
                      }}
                      className="inline-flex items-center gap-1 text-xs text-amber-400 hover:underline mt-1 font-medium"
                    >
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-2 text-stone-400 hover:text-red-400 transition-colors rounded-lg"
                    aria-label={`Remove ${item.title}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-6 border-t border-stone-800 bg-stone-950/80 flex items-center justify-between">
              <button
                onClick={onClearAll}
                className="text-xs text-stone-400 hover:text-red-400 transition-colors"
              >
                Clear all items
              </button>
              <button
                onClick={() => {
                  onNavigate('/travel-guides');
                  onClose();
                }}
                className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs rounded-lg transition-colors shadow-sm"
              >
                Explore Itineraries
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
