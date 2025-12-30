import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Video Container - flexible for mobile, maintains aspect ratio on desktop */}
      <div className="relative w-full h-[55vh] md:h-auto md:max-h-[600px]" style={{ aspectRatio: 'auto 16/9' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>

        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center text-white px-6 max-w-5xl">

            {/* Top Tagline */}
            <p
              className="text-golden-yellow font-bold tracking-[0.3em] uppercase mb-4"
              style={{
                fontSize: 'clamp(10px, 1.5vw, 16px)',
                textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
              }}
            >
              LADAKH'S PREMIER BIKE EXPERTS
            </p>

            {/* Main Heading with Tibetan Script */}
            <div className="mb-4 md:mb-6">
              {/* Tibetan Script - elegant golden accent */}
              <p
                className="text-golden-yellow/90 font-medium tracking-wider mb-1"
                style={{
                  fontSize: 'clamp(18px, 4vw, 48px)',
                  textShadow: '2px 2px 12px rgba(0,0,0,0.9)',
                  letterSpacing: '0.15em'
                }}
              >
                རི་བོ་གངས་ཅན།
              </p>

              {/* English Main Heading */}
              <h1
                className="font-oswald font-black leading-[0.95] tracking-tight"
                style={{
                  fontSize: 'clamp(32px, 8vw, 100px)',
                  textShadow: '4px 4px 20px rgba(0,0,0,0.6)'
                }}
              >
                BORN IN THE<br />
                <span className="text-[#00AEEF]">MOUNTAINS</span>
              </h1>
            </div>

            {/* Subtitle - Personal Quote */}
            <p
              className="font-light italic text-white/90 max-w-2xl mx-auto mb-6 md:mb-8"
              style={{
                fontSize: 'clamp(11px, 2vw, 18px)',
                textShadow: '2px 2px 10px rgba(0,0,0,0.8)'
              }}
            >
              "This isn't business for me — it's sharing my home with friends from around the world."<br />
              <span className="text-golden-yellow font-medium not-italic">— Norboo</span>
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-golden-yellow hover:bg-yellow-400 text-slate-900 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm"
              >
                VIEW EXPEDITIONS
              </button>

              <Link
                to="/contact"
                className="bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm border border-white/20 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 px-6 md:px-8 py-2.5 md:py-3 text-xs md:text-sm"
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
