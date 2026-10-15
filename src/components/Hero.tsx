import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Compass, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPilgrimageClick: () => void;
  onSafariClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onPilgrimageClick,
  onSafariClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle canplay
    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        // Autoplay policy prevented playback
        console.warn('Autoplay restricted by browser policy; showing poster fallback:', err);
        setIsPlaying(false);
      });
    };

    const handleError = () => {
      console.warn('Hero video failed to load, falling back to verified poster image.');
      setVideoError(true);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden isolation-isolate bg-stone-950">
      {/* 1. Background Video Layer */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/travel-poster.jpg"
        aria-hidden="true"
      >
        <source src="/images/travel-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback Poster (if video fails or pending load) */}
      {(!videoLoaded || videoError) && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center -z-20 transition-opacity duration-700"
          style={{ backgroundImage: `url('/images/travel-poster.jpg')` }}
          aria-hidden="true"
        />
      )}

      {/* 2. Measured Contrast Scrim (ensures WCAG AA contrast for text) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/60 pointer-events-none" />

      {/* 3. Hero Interactive & Content Layer */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Editorial Subtitle / Hashtag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>The Heart of Incredible India</span>
          <span className="text-white/40">·</span>
          <span className="text-stone-300">#SabKuchJoDilChahe</span>
        </div>

        {/* Primary H1 Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-6 drop-shadow-sm max-w-4xl mx-auto [text-wrap:balance]">
          Madhya Pradesh Is Fondly Called The{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500">
            'Heart Of India'
          </span>
        </h1>

        {/* Narrative Deck */}
        <p className="text-base sm:text-lg md:text-xl text-stone-200 font-normal max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow">
          Where sacred Jyotirlingas crown the holy Narmada, millennia-old UNESCO temples rise from sandstone hills, and wild tigers reign over endless Sal forests.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onExploreClick}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-sm transition-all shadow-lg hover:shadow-amber-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98]"
          >
            <Compass className="w-4 h-4 text-stone-950" />
            <span>Explore All Destinations</span>
          </button>

          <button
            onClick={onPilgrimageClick}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
          >
            <MapPin className="w-4 h-4 text-amber-300" />
            <span>Spiritual Jyotirlingas</span>
          </button>

          <button
            onClick={onSafariClick}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900/80 hover:bg-stone-800 backdrop-blur-md border border-stone-700 text-stone-200 font-semibold text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 active:scale-[0.98]"
          >
            <span>Wildlife & Tiger Safaris</span>
          </button>
        </div>

        {/* 4. Strategic 4-Column Metric Strip (Unboxed, clean typography) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/15 max-w-3xl mx-auto text-left sm:text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">2 of 12</div>
            <div className="text-xs text-stone-300 uppercase tracking-wider font-medium mt-0.5">
              Shiva Jyotirlingas
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">Ujjain & Omkareshwar</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">3 UNESCO</div>
            <div className="text-xs text-stone-300 uppercase tracking-wider font-medium mt-0.5">
              World Heritage Sites
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">Khajuraho, Sanchi, Bhimbetka</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">785+</div>
            <div className="text-xs text-stone-300 uppercase tracking-wider font-medium mt-0.5">
              Tiger State of India
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">6 Premier Tiger Reserves</div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">#1 Cleanest</div>
            <div className="text-xs text-stone-300 uppercase tracking-wider font-medium mt-0.5">
              Indore City & Food
            </div>
            <div className="text-[11px] text-stone-400 mt-0.5">Sarafa & Chappan Dukan</div>
          </div>
        </div>
      </div>

      {/* Video Control Widget (Bottom Right) */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
