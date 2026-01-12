import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VIDEO_PLAYLIST = [
  "/hero-video-1.mp4",
  "/hero-video-2.mp4",
  "/hero-video-3.mp4",
];

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop";

const Hero: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % VIDEO_PLAYLIST.length);
  };

  return (
    <section
      className="relative bg-black overflow-hidden force-full-bleed"
      style={{
        marginTop: 'var(--headerH, 80px)',
        minHeight: 'calc(100vh - 80px)',
      }}
    >

      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop={false}
          playsInline
          poster={FALLBACK_IMAGE}
          className="force-hero-video-cover"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onEnded={handleVideoEnded}
        >
          <source
            src={VIDEO_PLAYLIST[currentVideoIndex]}
            type={VIDEO_PLAYLIST[currentVideoIndex].endsWith('.mov') ? 'video/quicktime' : 'video/mp4'}
          />
          <img src={FALLBACK_IMAGE} alt="Himalayan Landscape" className="w-full h-full object-cover" />
        </video>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>
      </div>

      {/* Content Container - Keeps text centered even though background is full width */}
      <div
        className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 py-20"
        style={{ minHeight: 'calc(100vh - 80px)' }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Top Tagline */}
          <p className="text-golden-yellow font-bold tracking-[0.4em] uppercase mb-4 text-xs sm:text-sm md:text-base animate-fadeIn drop-shadow-md">
            LADAKH'S PREMIER BIKE EXPERTS
          </p>

          {/* Tibetan Script */}
          <p
            className="text-white/90 font-medium tracking-[0.15em] mb-2 text-2xl sm:text-3xl md:text-5xl"
            style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}
          >
            རི་བོ་གངས་ཅན།
          </p>

          {/* Main Heading */}
          <h1
            className="font-oswald font-black leading-tight text-white mb-6 uppercase"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              textShadow: '3px 3px 15px rgba(0,0,0,0.6)'
            }}
          >
            BORN IN THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 block mt-2 sm:mt-0 sm:inline">MOUNTAINS</span>
          </h1>

          {/* Explore Ladakh Wonders */}
          <div className="my-8">
            <p className="text-golden-yellow font-oswald font-bold text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase drop-shadow-lg">
              EXPLORE LADAKH WONDERS
            </p>
          </div>

          {/* Quote */}
          <p
            className="font-light italic text-white max-w-2xl mx-auto mb-10 text-sm sm:text-base md:text-lg leading-relaxed px-4"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,1)' }}
          >
            "This isn't business for me — it's sharing my home with friends from around the world."
            <br className="hidden sm:block" />
            <span className="text-golden-yellow font-medium not-italic mt-2 block sm:inline"> — Norboo</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center px-6 sm:px-0">
            <button
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-golden-yellow hover:bg-yellow-400 text-slate-900 font-bold px-8 py-4 rounded-full uppercase text-sm tracking-widest shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-transparent"
            >
              VIEW EXPEDITIONS
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-slate-900/40 hover:bg-slate-800/60 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-full uppercase text-sm tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 hover:border-golden-yellow"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block opacity-80 z-20">
        <svg className="w-6 h-6 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;