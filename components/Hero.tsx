import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-black overflow-hidden z-0" style={{ marginTop: 'var(--headerH, 213px)' }}>

      {/* Video Container - maintains 16:9 aspect ratio */}
      <div className="relative w-full aspect-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text Overlay - Centered inside the video frame */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl">

            {/* Top Tagline */}
            <p className="text-golden-yellow font-bold tracking-[0.3em] uppercase mb-4 text-[10px] sm:text-xs md:text-sm">
              LADAKH'S PREMIER BIKE EXPERTS
            </p>

            {/* Tibetan Script */}
            <p
              className="text-golden-yellow/90 font-medium tracking-wider mb-2 text-xl sm:text-3xl md:text-4xl"
              style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}
            >
              རི་བོ་གངས་ཅན།
            </p>

            {/* Main Heading */}
            <h1
              className="font-oswald font-black leading-[1.1] text-white text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-4"
              style={{ textShadow: '3px 3px 15px rgba(0,0,0,0.5)' }}
            >
              BORN IN THE<br />
              <span className="text-[#00AEEF]">MOUNTAINS</span>
            </h1>

            {/* Quote from Norboo */}
            <p
              className="font-light italic text-white/90 max-w-2xl mx-auto mb-6 text-sm sm:text-base md:text-lg"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
              "This isn't business for me — it's sharing my home with friends from around the world."<br />
              <span className="text-golden-yellow font-medium not-italic">— Norboo</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-golden-yellow hover:bg-yellow-400 text-slate-900 font-bold px-8 py-3 rounded-lg uppercase text-xs md:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                VIEW EXPEDITIONS
              </button>
              <Link
                to="/contact"
                className="bg-slate-800/80 hover:bg-slate-700 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-3 rounded-lg uppercase text-xs md:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
