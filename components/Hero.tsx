import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    /* Remove padding and let video fill full width while maintaining aspect ratio */
    <section className="relative w-full bg-black overflow-hidden">
      
      {/* Video Container - full width, natural height based on aspect ratio */}
      <div className="relative w-full aspect-video bg-black" style={{
        marginTop: 'calc(var(--headerH) - 60px)',
        marginBottom: '-60px'
      }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          /* object-contain ensures no cropping - every pixel visible */
          className="w-full h-full object-contain bg-black"
          onError={(e) => console.error('Video error:', e)}
          onLoadedMetadata={(e) => console.log('Video loaded:', e.target.videoWidth, 'x', e.target.videoHeight)}
        >
          <source src="/hero-video.mov" type="video/mp4" />
          <source src="/hero-video.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        
        {/* Transparent dark overlay to keep text readable */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>

        {/* Text Overlay (Positioned over the video) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-5xl">
            <p className="text-golden-yellow font-bold tracking-[0.3em] uppercase mb-2 text-[8px] sm:text-xs md:text-sm">
              LADAKH'S PREMIER BIKE EXPERTS
            </p>
            <h1 className="font-oswald font-black leading-[1.1] text-white text-3xl sm:text-6xl md:text-8xl">
              BORN IN THE<br />
              <span className="text-[#00AEEF]">MOUNTAINS</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 md:mt-10">
              <button
                onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-golden-yellow text-slate-900 font-bold px-6 py-3 md:px-10 md:py-4 rounded-lg uppercase text-[10px] md:text-sm shadow-xl"
              >
                VIEW EXPEDITIONS
              </button>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-3 md:px-10 md:py-4 rounded-lg uppercase text-[10px] md:text-sm text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Since the video isn't 'h-screen' anymore,
          the rest of your website content will start right below the video.
      */}
    </section>
  );
};

export default Hero;
