import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CONTACT_NUMBERS, TOUR_PACKAGES, TOUR_CATEGORIES } from '../constants';
import Logo from './Logo';
import WeatherWidget from './WeatherWidget';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        // Always show navbar near the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down & past 200px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling up with some threshold - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const found = TOUR_PACKAGES.find(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    if (found) {
      navigate(`/package/${found.id}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-2xl backdrop-blur-sm transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
      {/* 1. Top Identity Bar - Dark Slate Blue */}
      <div className="bg-gradient-to-r from-[#2D4A6A] via-[#3D5A80] to-[#2D4A6A] text-white text-[10px] md:text-xs py-3 px-6 font-bold flex justify-between items-center border-b border-white/10 shadow-lg">
        <div className="flex items-center space-x-8">
          <span className="hidden sm:inline-flex items-center tracking-widest uppercase text-[10px] md:text-[11px] font-bold text-white opacity-95">
            <span className="mr-2 text-golden-yellow">🏔️</span> U T Ladakh's Premier Bike Tour Expert
          </span>
          <div className="hidden lg:block">
            <WeatherWidget />
          </div>
        </div>
        <div className="flex items-center space-x-6 tracking-[0.2em] text-[9px] md:text-[10px] font-black text-white">
          <Link to="/contact" className="hover:text-golden-yellow transition-colors duration-300 opacity-90 hover:opacity-100">ABOUT</Link>
          <Link to="/payments" className="hover:text-golden-yellow transition-colors duration-300 opacity-90 hover:opacity-100">PAYMENTS</Link>
          <Link to="/safety" className="hover:text-golden-yellow transition-colors duration-300 opacity-90 hover:opacity-100">SAFETY</Link>
        </div>
      </div>

      {/* 2. Enhanced Main Brand Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 bg-linear-to-b from-white to-gray-50/30">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Logo className="scale-90 md:scale-100 origin-left transform transition-all duration-300 hover:scale-105" />

          {/* Enhanced Functional Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-10">
            <div className="relative w-full group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where do you want to ride?"
                className="w-full bg-linear-to-r from-[#f8fafc] to-[#f1f5f9] border-2 border-slate-300 rounded-full py-3 px-12 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 text-sm font-semibold text-slate-700 transition-all duration-300 placeholder:text-slate-600 placeholder:font-medium shadow-sm hover:shadow-md focus:shadow-lg transform focus:scale-[1.02]"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 group-focus-within:text-mountain-blue group-focus-within:scale-110">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>
          </form>

          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/tours" className="text-slate-800 hover:text-mountain-blue transition-all duration-300 uppercase tracking-[0.15em] font-black text-[13px] relative group">
              ALL TOURS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mountain-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/festivals" className="text-slate-800 hover:text-mountain-blue transition-all duration-300 uppercase tracking-[0.15em] font-black text-[13px] relative group">
              BLOGS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-mountain-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <a
              href={`tel:${CONTACT_NUMBERS[0]}`}
              className="flex items-center border-2 border-blue-200 px-6 py-2.5 rounded-full text-mountain-blue hover:bg-mountain-blue hover:border-mountain-blue hover:text-white transition-all duration-300 group bg-linear-to-r from-white to-gray-50 shadow-md hover:shadow-xl transform hover:scale-105 active:scale-95"
            >
              <span className="mr-3 text-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:animate-pulse">📞</span>
              <span className="font-extrabold tracking-tighter text-base">{CONTACT_NUMBERS[0]}</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-mountain-blue focus:outline-none rounded-xl bg-linear-to-br from-slate-50 to-slate-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 border border-slate-200/50"
            >
              <svg className={`h-6 w-6 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Enhanced Blue Bar (Sub-Nav) - Matching Logo Blue */}
      <div className="hidden lg:block bg-gradient-to-r from-[#0088CC] via-[#00AEEF] to-[#0088CC] text-white py-3 relative shadow-xl border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-12 text-[13px] font-black uppercase tracking-[0.2em]">

          <div className="group relative cursor-pointer flex items-center hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300">
            {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.title.toUpperCase()} <span className="ml-2 text-[7px] group-hover:rotate-180 transition-all duration-300 opacity-70">▼</span>
            <div className="absolute top-full pt-4 -left-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 overflow-hidden translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                <div className="px-6 py-2 border-b border-slate-100">
                  <p className="text-xs text-slate-500 normal-case tracking-normal">{TOUR_CATEGORIES.LOCAL_EXPEDITIONS.subtitle}</p>
                </div>
                {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.tours.map((tourId) => {
                  const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                  if (!tour) return null;
                  return (
                    <Link key={tourId} to={`/package/${tourId}`} className="flex items-center px-6 py-3 text-slate-600 hover:bg-linear-to-r hover:from-blue-50 hover:to-blue-100 hover:text-mountain-blue transition-all duration-300 rounded-lg mx-2 group">
                      <span className="mr-3 transition-transform duration-300 group-hover:scale-110">🏍️</span>
                      <span className="font-medium">{tour.title}</span>
                      <span className="text-xs text-slate-400 ml-2">({tour.duration})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="group relative cursor-pointer flex items-center hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300">
            {TOUR_CATEGORIES.GRAND_CIRCUITS.title.toUpperCase()} <span className="ml-2 text-[7px] group-hover:rotate-180 transition-all duration-300 opacity-70">▼</span>
            <div className="absolute top-full pt-4 -left-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 overflow-hidden translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                <div className="px-6 py-2 border-b border-slate-100">
                  <p className="text-xs text-slate-500 normal-case tracking-normal">{TOUR_CATEGORIES.GRAND_CIRCUITS.subtitle}</p>
                </div>
                {TOUR_CATEGORIES.GRAND_CIRCUITS.tours.map((tourId) => {
                  const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                  if (!tour) return null;
                  return (
                    <Link key={tourId} to={`/package/${tourId}`} className="flex items-center px-6 py-3 text-slate-600 hover:bg-linear-to-r hover:from-blue-50 hover:to-blue-100 hover:text-mountain-blue transition-all duration-300 rounded-lg mx-2 group">
                      <span className="mr-3 transition-transform duration-300 group-hover:scale-110">🏔️</span>
                      <span className="font-medium">{tour.title}</span>
                      <span className="text-xs text-slate-400 ml-2">({tour.duration})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/booking" className="hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 flex items-center transform hover:scale-105">
            <span className="mr-2 text-sm">🤝</span>
            <span className="text-[#FFD700] font-black drop-shadow-sm">GROUP TOURS</span>
          </Link>

          <div className="group relative cursor-pointer flex items-center hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300">
            <span className="text-[#FF6B9D] font-black">FESTIVAL SPECIALS</span>
            <span className="ml-2 bg-[#FF4757] text-white text-[8px] px-2 py-0.5 rounded-full font-bold animate-pulse">NEW</span>
            <span className="ml-1 text-[7px] group-hover:rotate-180 transition-all duration-300 opacity-70">▼</span>
            <div className="absolute top-full pt-4 -left-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 overflow-hidden translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
                <div className="px-6 py-2 border-b border-slate-100">
                  <p className="text-xs text-slate-500 normal-case tracking-normal">{TOUR_CATEGORIES.FESTIVAL_SPECIALS.subtitle}</p>
                </div>
                {TOUR_CATEGORIES.FESTIVAL_SPECIALS.tours.map((tourId) => {
                  const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                  if (!tour) return null;
                  return (
                    <Link key={tourId} to={`/package/${tourId}`} className="flex items-center px-6 py-3 text-slate-600 hover:bg-linear-to-r hover:from-blue-50 hover:to-blue-100 hover:text-mountain-blue transition-all duration-300 rounded-lg mx-2 group">
                      <span className="mr-3 transition-transform duration-300 group-hover:scale-110">🎭</span>
                      <span className="font-medium">{tour.title}</span>
                      <span className="text-xs text-slate-400 ml-2">({tour.duration})</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <Link to="/contact" className="hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300 flex items-center transform hover:scale-105 font-black">
            CONTACT US
          </Link>
        </div>
      </div>

      {/* Enhanced Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-linear-to-b from-white to-gray-50/50 border-t border-slate-200 pb-12 px-6 space-y-2 shadow-2xl animate-slide-up overflow-y-auto max-h-[80vh] backdrop-blur-sm">
          <div className="pt-8 pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Where do you want to ride?"
                className="w-full bg-linear-to-r from-slate-50 to-slate-100 border border-slate-200 rounded-2xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 text-sm font-bold shadow-sm transition-all duration-300"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-300">🔍</div>
            </div>
          </div>
          <Link to="/" onClick={() => setIsOpen(false)} className="py-5 text-sm font-black border-b border-slate-100 text-slate-800 uppercase tracking-widest flex justify-between items-center hover:bg-blue-50 hover:text-mountain-blue transition-all duration-300 rounded-lg px-2 group">
            HOME <span className="text-slate-300 group-hover:text-mountain-blue transition-all duration-300 transform group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/tours" onClick={() => setIsOpen(false)} className="py-5 text-sm font-black border-b border-slate-100 text-slate-800 uppercase tracking-widest flex justify-between items-center hover:bg-blue-50 hover:text-mountain-blue transition-all duration-300 rounded-lg px-2 group">
            ALL TOURS <span className="text-slate-300 group-hover:text-mountain-blue transition-all duration-300 transform group-hover:translate-x-1">→</span>
          </Link>
          <div className="py-5 border-b border-slate-50">
            <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">Local Expeditions</p>
            <div className="grid grid-cols-1 gap-4">
              {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.tours.map((tourId) => {
                const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                if (!tour) return null;
                return (
                  <Link key={tourId} to={`/package/${tourId}`} onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-700">
                    {tour.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="py-5 border-b border-slate-50">
            <p className="text-[10px] font-black text-slate-400 mb-4 uppercase tracking-widest">Grand Circuits</p>
            <div className="grid grid-cols-1 gap-4">
              {TOUR_CATEGORIES.GRAND_CIRCUITS.tours.map((tourId) => {
                const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                if (!tour) return null;
                return (
                  <Link key={tourId} to={`/package/${tourId}`} onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-700">
                    {tour.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <Link to="/festivals" onClick={() => setIsOpen(false)} className="py-5 text-sm font-black border-b border-slate-100 text-mountain-blue uppercase tracking-widest flex justify-between items-center hover:bg-blue-50 transition-all duration-300 rounded-lg px-2 group">
            FESTIVAL SPECIALS <span className="text-golden-yellow animate-pulse">★ NEW</span>
          </Link>
          <div className="pt-8">
            <a href={`tel:${CONTACT_NUMBERS[0]}`} className="w-full bg-linear-to-r from-mountain-blue to-mountain-blue-light text-white py-5 rounded-2xl font-black text-center uppercase tracking-widest text-sm flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              <span className="mr-3 text-lg animate-pulse">📞</span> Call Local Experts
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
