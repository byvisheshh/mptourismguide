import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Compass, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onPilgrimageClick?: () => void;
  onSafariClick?: () => void;
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

    const handleCanPlay = () => {
      setVideoLoaded(true);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Autoplay restricted by browser policy:', err);
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
    <div className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden isolation-isolate bg-stone-900">
      {/* 1. Background Video Layer - visible, fills the container */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
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

      {/* Poster Fallback (if video cannot load) */}
      {(!videoLoaded || videoError) && (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 transition-opacity duration-500"
          style={{ backgroundImage: `url('/images/travel-poster.jpg')` }}
          aria-hidden="true"
        />
      )}

      {/* 2. Measured Subtle Dark Scrim (rgba(0,0,0,0.32)) to ensure video is clearly visible while text has WCAG AA contrast */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.32)' }}
      />

      {/* Subtle bottom gradient to blend smoothly into the page */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-stone-900/80 to-transparent pointer-events-none z-[2]" />

      {/* 3. Hero Content Container (Centered, balanced typography & actions) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-12 flex flex-col items-center">
        {/* Editorial Subtitle / Slogan Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>The Heart of Incredible India</span>
          <span className="text-white/40">·</span>
          <span className="text-stone-200">#SabKuchJoDilChahe</span>
        </div>

        {/* Primary H1 Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.18] mb-6 drop-shadow-md max-w-3xl [text-wrap:balance]">
          Madhya Pradesh Is Fondly Called The{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400">
            'Heart Of India'
          </span>
        </h1>

        {/* Concise Narrative Description */}
        <p className="text-sm sm:text-base md:text-lg text-stone-100 font-normal max-w-2xl mx-auto leading-relaxed mb-8 drop-shadow">
          Where sacred Jyotirlingas grace the holy Narmada, millennia-old UNESCO temples rise from sandstone hills, and wild tigers roam through vast protected Sal forests.
        </p>

        {/* Balanced Call to Action Hero Button Trio */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 w-full max-w-xl">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-amber-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98]"
            aria-label="Explore All Destinations in Madhya Pradesh"
          >
            <Compass className="w-5 h-5 text-stone-950" />
            <span>Explore Destinations</span>
          </button>

          {onPilgrimageClick && (
            <button
              onClick={onPilgrimageClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-semibold text-sm sm:text-base transition-all hover:border-amber-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98]"
              aria-label="Spiritual Jyotirlingas of Madhya Pradesh"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Sacred Jyotirlingas</span>
            </button>
          )}

          {onSafariClick && (
            <button
              onClick={onSafariClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-semibold text-sm sm:text-base transition-all hover:border-amber-300/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 active:scale-[0.98]"
              aria-label="Wildlife Safaris & Tiger Reserves"
            >
              <Compass className="w-4 h-4 text-amber-300" />
              <span>Wildlife Safaris</span>
            </button>
          )}
        </div>

        {/* 4. Strategic 4-Column Balanced Statistics Section */}
        <div className="w-full max-w-3xl mx-auto pt-6 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">
                2 of 12
              </div>
              <div className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-semibold mt-1">
                Shiva Jyotirlingas
              </div>
              <div className="text-[10px] sm:text-[11px] text-stone-300 mt-0.5">
                Ujjain & Omkareshwar
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">
                3 UNESCO
              </div>
              <div className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-semibold mt-1">
                World Heritage
              </div>
              <div className="text-[10px] sm:text-[11px] text-stone-300 mt-0.5">
                Khajuraho, Sanchi, Bhimbetka
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">
                785+ Tigers
              </div>
              <div className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-semibold mt-1">
                Tiger State of India
              </div>
              <div className="text-[10px] sm:text-[11px] text-stone-300 mt-0.5">
                6 Premier Tiger Reserves
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/25 backdrop-blur-sm border border-white/10">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 tabular-nums">
                7x Cleanest
              </div>
              <div className="text-[11px] sm:text-xs text-stone-200 uppercase tracking-wider font-semibold mt-1">
                Cleanest City in India
              </div>
              <div className="text-[10px] sm:text-[11px] text-stone-300 mt-0.5">
                Indore & Malwa Heritage
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Play/Pause & Mute Control Widget */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="p-2.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          title={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
