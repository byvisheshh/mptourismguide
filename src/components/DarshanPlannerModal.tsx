import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle, Info, ExternalLink } from 'lucide-react';

interface DarshanPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultDestination?: string;
}

export const DarshanPlannerModal: React.FC<DarshanPlannerModalProps> = ({
  isOpen,
  onClose,
  defaultDestination = 'omkareshwar',
}) => {
  const [selectedType, setSelectedType] = useState<'jyotirlinga' | 'safari'>(
    defaultDestination.includes('bandhavgarh') || defaultDestination.includes('kanha')
      ? 'safari'
      : 'jyotirlinga'
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-stone-900 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
              Official Visitor Assistant
            </span>
            <h2 className="font-serif text-xl font-bold text-white mt-0.5">
              Darshan & Safari Planning Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close planner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-stone-200 bg-stone-100 p-1.5 gap-2">
          <button
            onClick={() => setSelectedType('jyotirlinga')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'jyotirlinga'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Jyotirlinga Darshan (Omkareshwar & Ujjain)
          </button>
          <button
            onClick={() => setSelectedType('safari')}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
              selectedType === 'safari'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tiger Safari Permits (Kanha & Bandhavgarh)
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-800 text-sm">
          {selectedType === 'jyotirlinga' ? (
            <>
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-amber-950 text-sm">
                    Dual Shrine Pilgrimage Rule
                  </h3>
                  <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                    A traditional Shaivite pilgrimage requires offering worship at both{' '}
                    <strong>Omkareshwar Temple</strong> (on Mandhata Island) and{' '}
                    <strong>Mamleshwar Temple</strong> (on the south bank). Visiting only one is
                    traditionally considered incomplete.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif font-bold text-base text-stone-900">
                  Omkareshwar Daily Schedule
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-semibold text-stone-900 block">05:00 AM – 05:30 AM</span>
                    <span className="text-stone-600">Mangala Aarti (Pre-dawn worship)</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-semibold text-stone-900 block">06:00 AM – 12:20 PM</span>
                    <span className="text-stone-600">General Morning Darshan & Abhishek</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-semibold text-stone-900 block">12:20 PM – 01:15 PM</span>
                    <span className="text-stone-600">Madhyahna Bhog (Sanctum closed temporarily)</span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-semibold text-stone-900 block">08:30 PM – 09:30 PM</span>
                    <span className="text-stone-600">Shayan Aarti & Temple Closing</span>
                  </div>
                </div>

                <h4 className="font-serif font-bold text-base text-stone-900 pt-2">
                  Mahakaleshwar Bhasma Aarti Protocol
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Advance Online Booking:</strong> Bhasma Aarti takes place between
                      04:00 AM and 06:00 AM. Advance registration is mandatory through the official
                      temple trust website (shrimahakaleshwar.com).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Mandatory Traditional Dress Code:</strong> Men must wear an unstitched
                      cotton or silk Dhoti with an angavastram (no stitched trousers or belts).
                      Women must wear a traditional Saree.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Identity Verification:</strong> Carry the exact original government
                      photo ID used during online registration.
                    </span>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif font-bold text-emerald-950 text-sm">
                    Tiger Safari Permit Guidelines
                  </h3>
                  <p className="text-xs text-emerald-900/90 mt-1 leading-relaxed">
                    All core and buffer safari permits in Madhya Pradesh are centrally managed by the
                    state forest department on MP Online. Bookings open 120 days in advance and core
                    permits (such as Tala in Bandhavgarh or Kanha Zone) sell out quickly.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif font-bold text-base text-stone-900">
                  Core vs Buffer Safari Rules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-semibold text-stone-900 block">Core Safari Zones</span>
                    <span className="text-stone-600">
                      Open Oct 1 to Jun 30. Strictly closed every Wednesday afternoon and during
                      monsoons (Jul-Sep). Max 6 tourists per Gypsy.
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="font-semibold text-stone-900 block">Buffer Safari Zones</span>
                    <span className="text-stone-600">
                      Open 365 days a year including monsoons. Night safaris permitted in select
                      zones with spotlighting.
                    </span>
                  </div>
                </div>

                <h4 className="font-serif font-bold text-base text-stone-900 pt-2">
                  Packing & Safari Checklist
                </h4>
                <ul className="space-y-2 text-xs text-stone-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Dress Code:</strong> Khaki, olive green, muted brown, or sand-colored
                      clothing. Avoid white, red, yellow, or bright neon hues.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Photography Gear:</strong> 300mm to 600mm telephoto zoom lens is ideal
                      for wildlife. Drones are strictly banned and confiscated by forest guards.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Morning Warmth:</strong> Winter dawn safaris (Nov-Feb) in open jeeps
                      can drop to 4°C. Pack windproof jackets, beanies, and gloves.
                    </span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-100 border-t border-stone-200 flex items-center justify-between">
          <span className="text-xs text-stone-500">
            Madhya Pradesh Tourism Practical Advisory
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs rounded-lg transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
