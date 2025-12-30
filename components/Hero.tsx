import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    /* We use 'relative' and 'z-0' for the section to keep it as the base layer
       Add top margin to account for the fixed navbar height. */
    <section className="relative w-full bg-black overflow-hidden z-0" style={{ marginTop: 'var(--headerH, 213px)' }}>
      
      {/* 'aspect-video' forces the 16:9 shape of your media player.
         This is the ONLY way to guarantee the bricks and flags never get cut.
      */}
      <div className="relative w-full aspect-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          /* 'object-cover' fills the container completely, eliminating black edges */
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>

        {/* Text Overlay - Centered inside the video frame */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <p className="text-golden-yellow font-bold tracking-[0.3em] uppercase mb-2 text-[8px] sm:text-xs md:text-sm">
              LADAKH'S PREMIER BIKE EXPERTS
            </p>
            
            <h1 className="font-oswald font-black leading-[1.1] text-white text-3xl sm:text-6xl md:text-8xl mb-6">
              BORN IN THE<br />
              <span className="text-[#00AEEF]">MOUNTAINS</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-golden-yellow hover:bg-yellow-400 text-slate-900 font-bold px-8 py-3 rounded-lg uppercase text-xs md:text-sm shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                VIEW EXPEDITIONS
              </button>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-3 rounded-lg uppercase text-xs md:text-sm hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
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
