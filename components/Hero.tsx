import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    /* h-[100dvh] creates the full-screen black background. 
       The video will sit inside this as a perfect rectangle. */
    <section className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden">
      
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          /* object-contain: THE FIX. It stops the 'zoom' that causes cropping.
             w-full h-full: Ensures it uses the available space.
          */
          className="w-full h-full object-contain"
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
        
        {/* Overlay - keep it light so the video is clear */}
        <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
      </div>

      {/* Content Layer - Positioned over the video */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 pt-[var(--headerH)]">
        <div className="max-w-5xl">
          <p className="text-golden-yellow font-bold tracking-[0.3em] uppercase mb-4 text-[10px] sm:text-xs">
            LADAKH'S PREMIER BIKE EXPERTS
          </p>

          <div className="mb-6">
            <p className="text-golden-yellow/90 font-medium tracking-wider mb-2 text-xl sm:text-3xl">
              རི་བོ་གངས་ཅན།
            </p>
            <h1 className="font-oswald font-black leading-[1.1] text-white text-4xl sm:text-7xl md:text-8xl">
              BORN IN THE<br />
              <span className="text-[#00AEEF]">MOUNTAINS</span>
            </h1>
          </div>

          <p className="font-light italic text-white/90 max-w-2xl mx-auto mb-8 text-sm sm:text-lg">
            "This isn't business for me — it's sharing my home with friends from around the world."<br />
            <span className="text-golden-yellow font-medium not-italic">— Norboo</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button 
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-golden-yellow text-slate-900 font-bold px-10 py-4 rounded-lg uppercase text-sm shadow-xl hover:scale-105 transition-transform"
            >
              VIEW EXPEDITIONS
            </button>
            <Link 
              to="/contact" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-4 rounded-lg uppercase text-sm shadow-xl text-center hover:scale-105 transition-transform"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
