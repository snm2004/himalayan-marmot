import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HERO_MEDIA = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2000&auto=format&fit=crop',
    alt: 'Biking through the high passes'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop',
    alt: 'Turquoise waters of Pangong Lake'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000&auto=format&fit=crop',
    alt: 'The rugged landscape of Nubra Valley'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=2000&auto=format&fit=crop',
    alt: 'Crossing Khardung La at 17,582ft'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_MEDIA.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{
        background: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.45), rgba(0,0,0,0.9)),
          url('${HERO_MEDIA[currentSlide].url}') center/cover no-repeat
        `,
        padding: 'clamp(60px, 8vh, 120px) 20px'
      }}
    >
      {/* Background Image Preloader for smooth transitions */}
      <div className="absolute inset-0 z-0">
        {HERO_MEDIA.map((media, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: `
                linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.45), rgba(0,0,0,0.9)),
                url('${media.url}') center/cover no-repeat
              `
            }}
          />
        ))}
      </div>
      
      {/* Main Content - Zoom-Safe Flexbox Layout */}
      <div className="relative z-20 max-w-7xl mx-auto w-full text-white text-center">
        <div className="max-w-5xl mx-auto">
          {/* Ladakhi Greeting */}
          <div className="flex items-center justify-center gap-3" style={{ marginBottom: 'clamp(16px, 2vh, 24px)' }}>
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-golden-yellow to-transparent"></div>
            <p
              className="text-golden-yellow font-medium tracking-[0.4em] drop-shadow-lg"
              style={{ fontSize: 'clamp(14px, 1.8vw, 18px)' }}
            >
              ཇུ་ལེ། JULLEY
            </p>
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-golden-yellow to-transparent"></div>
          </div>
          
          <h1
            className="font-oswald font-black leading-[0.85] drop-shadow-[0_8px_32px_rgba(0,0,0,0.6)] tracking-tight text-white"
            style={{ fontSize: 'clamp(32px, 7vw, 96px)', marginBottom: 'clamp(20px, 3vh, 32px)' }}
          >
            རི་བོ་གངས་ཅན། <br />
            <span className="text-golden-yellow text-shadow-lg">HIMALAYAN MARMOT</span>
          </h1>

          {/* Authentic Tagline */}
          <div className="max-w-4xl mx-auto" style={{ marginBottom: 'clamp(24px, 4vh, 40px)' }}>
            <p
              className="font-light text-white/90 leading-relaxed tracking-wide drop-shadow-md border-l-4 border-golden-yellow pl-6"
              style={{ fontSize: 'clamp(16px, 2.2vw, 22px)' }}
            >
              བོད་ལ་ཕེབས་པར་བཀྲ་ཤིས་བདེ་ལེགས། <br />
              <span className="text-golden-yellow font-medium">Your Local Ladakhi Family Since 2019</span>
            </p>
          </div>

          <div className="max-w-4xl mx-auto" style={{ marginBottom: 'clamp(32px, 6vh, 64px)' }}>
            {/* Personal Story Box */}
            <div className="bg-black/30 backdrop-blur-sm border border-golden-yellow/30 rounded-2xl p-6 md:p-8 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-golden-yellow/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-golden-yellow text-xl">👨‍🦱</span>
                </div>
                <div>
                  <h3 className="text-golden-yellow font-bold text-lg mb-1">Tsewang Norboo</h3>
                  <p className="text-white/70 text-sm">Born & Raised in Leh • Your Local Guide</p>
                </div>
              </div>
              <p
                className="font-light text-white/90 leading-relaxed italic"
                style={{ fontSize: 'clamp(14px, 1.8vw, 18px)' }}
              >
                "མི་རིགས་ཀྱི་གྲོགས་པོ། I was born in these mountains. My grandfather was a trader on the ancient Silk Route, my father guided the first tourists in the 1980s.
                <br className="hidden md:block"/>
                <span className="text-golden-yellow font-medium">This isn't business for me - it's sharing my home with friends from around the world.</span>"
              </p>
            </div>
            
            {/* Authentic Local Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🏔️</div>
                <p className="text-golden-yellow font-bold text-sm">རི་བོ་གངས་ཅན།</p>
                <p className="text-white/80 text-xs">Born in Himalayas</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🏛️</div>
                <p className="text-golden-yellow font-bold text-sm">ཆོས་ལུགས།</p>
                <p className="text-white/80 text-xs">Buddhist Heritage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl mb-2">🏠</div>
                <p className="text-golden-yellow font-bold text-sm">ཁྱིམ་ཚང་།</p>
                <p className="text-white/80 text-xs">Family Homestays</p>
              </div>
            </div>
          </div>

          {/* Authentic Action Buttons */}
          <div className="flex flex-col gap-4 relative z-30" style={{ marginBottom: 'clamp(48px, 8vh, 80px)' }}>
            <button
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative w-full bg-gradient-to-r from-golden-yellow to-yellow-500 text-mountain-blue rounded-2xl font-bold hover:from-white hover:to-gray-100 transition-all shadow-2xl overflow-hidden active:scale-95 touch-manipulation border-2 border-golden-yellow/50"
              style={{ padding: 'clamp(16px, 2vh, 20px) clamp(32px, 4vw, 48px)', fontSize: 'clamp(16px, 2vw, 18px)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span>🏔️</span>
                <span>Explore Our Journeys</span>
                <span className="text-xs opacity-70">2025</span>
              </span>
            </button>
            
            {/* Mobile: Personal Touch Buttons */}
            <div className="flex gap-3 md:hidden">
              <a
                href="tel:+916006114260"
                className="flex-1 bg-gradient-to-r from-mountain-blue/80 to-slate-700/80 backdrop-blur-md border border-golden-yellow/30 text-white rounded-2xl font-bold hover:from-mountain-blue hover:to-slate-700 transition-all active:scale-95 flex items-center justify-center gap-2 touch-manipulation"
                style={{ padding: 'clamp(16px, 2vh, 20px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}
              >
                <span>📞</span>
                <span>Call Tsewang</span>
              </a>
              <Link
                to="/contact"
                className="flex-1 bg-gradient-to-r from-mountain-blue/80 to-slate-700/80 backdrop-blur-md border border-golden-yellow/30 text-white rounded-2xl font-bold hover:from-mountain-blue hover:to-slate-700 transition-all active:scale-95 flex items-center justify-center gap-2 touch-manipulation"
                style={{ padding: 'clamp(16px, 2vh, 20px)', fontSize: 'clamp(14px, 1.8vw, 16px)' }}
              >
                <span>💬</span>
                <span>Chat</span>
              </Link>
            </div>

            {/* Desktop: Personal Contact */}
            <Link
              to="/contact"
              className="hidden md:block w-full sm:w-auto bg-gradient-to-r from-mountain-blue/80 to-slate-700/80 backdrop-blur-md border border-golden-yellow/30 text-white rounded-2xl font-bold hover:from-mountain-blue hover:to-slate-700 transition-all active:scale-95 mx-auto"
              style={{ padding: 'clamp(16px, 2vh, 20px) clamp(32px, 4vw, 48px)', fontSize: 'clamp(16px, 2vw, 18px)' }}
            >
              <span className="flex items-center justify-center gap-3">
                <span>💬</span>
                <span>Let's Plan Your Journey</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Minimal Dash Indicators - Centered and Number-Free */}
      <div className="absolute bottom-10 left-0 right-0 z-40 px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between">
          
          {/* Empty spacer for desktop symmetry if location tag is present */}
          <div className="hidden lg:block w-48"></div>

          {/* Dash Indicators centered */}
          <div className="flex items-center space-x-4">
            {HERO_MEDIA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="group relative py-4"
                aria-label={`Go to slide ${i + 1}`}
              >
                <div className={`h-[3px] rounded-full transition-all duration-700 ease-out ${
                  i === currentSlide 
                    ? 'w-16 bg-[#00bcd4] shadow-[0_0_15px_rgba(0,188,212,0.8)]' 
                    : 'w-8 bg-white/20 group-hover:bg-white/50'
                }`} />
              </button>
            ))}
          </div>

          {/* Authentic Location Tag */}
          <div className="hidden lg:flex items-center text-[10px] font-medium text-white/60 w-48 justify-end">
            <div className="flex items-center gap-2">
              <span className="text-golden-yellow">🏔️</span>
              <span className="tracking-wide">ལེ་ལ་དཀར་པོ། Leh, Ladakh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 opacity-30 animate-pulse hidden md:block">
         <div className="w-[1px] h-8 bg-white mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
