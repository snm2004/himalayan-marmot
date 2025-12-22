
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
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-lg transition-transform duration-500 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* 1. Top Identity Bar */}
      <div className="bg-mountain-blue text-white text-[10px] md:text-xs py-2.5 px-6 font-bold flex justify-between items-center border-b border-white/5">
        <div className="flex items-center space-x-8">
           <span className="hidden sm:inline-flex items-center tracking-widest uppercase text-[9px] md:text-[10px]">
             <span className="mr-2 text-golden-yellow">🏔️</span> U T Ladakh's Premier Bike Tour Expert
           </span>
           <div className="hidden lg:block">
              <WeatherWidget />
           </div>
        </div>
        <div className="flex items-center space-x-6 tracking-[0.2em] text-[8px] md:text-[9px] font-black">
           <Link to="/contact" className="hover:text-golden-yellow transition-colors">ABOUT</Link>
           <Link to="/payments" className="hover:text-golden-yellow transition-colors">PAYMENTS</Link>
           <Link to="/safety" className="hover:text-golden-yellow transition-colors">SAFETY</Link>
        </div>
      </div>

      {/* 2. Main Brand Bar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Logo className="scale-90 md:scale-100 origin-left" />

          {/* Functional Search Bar */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-10">
            <div className="relative w-full group">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Where do you want to ride?" 
                className="w-full bg-[#f1f5f9] border border-slate-200 rounded-full py-3 px-12 focus:outline-none focus:ring-4 focus:ring-cyan-500/10 text-sm transition-all placeholder:text-slate-400 font-semibold"
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>
          </form>
          
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/tours" className="text-slate-800 hover:text-cyan-500 transition uppercase tracking-[0.15em] font-black text-[13px]">ALL TOURS</Link>
            <Link to="/festivals" className="text-slate-800 hover:text-cyan-500 transition uppercase tracking-[0.15em] font-black text-[13px]">BLOGS</Link>
            
            <a 
              href={`tel:${CONTACT_NUMBERS[0]}`}
              className="flex items-center border-2 border-cyan-100 px-6 py-2.5 rounded-full text-mountain-blue hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300 group bg-white shadow-sm"
            >
              <span className="mr-3 text-lg transition-transform group-hover:scale-125 group-hover:rotate-12">📞</span>
              <span className="font-extrabold tracking-tighter text-base">{CONTACT_NUMBERS[0]}</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-mountain-blue focus:outline-none rounded-xl bg-slate-50"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* 3. Enhanced Cyan Bar (Sub-Nav) - FIXED IDs */}
      <div className="hidden lg:block bg-[#00bcd4] text-white py-3 relative shadow-xl">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-12 text-[11px] font-black uppercase tracking-[0.25em]">
           
           <div className="group relative cursor-pointer flex items-center hover:text-slate-900 transition-colors">
             {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.title.toUpperCase()} <span className="ml-2 text-[7px] group-hover:rotate-180 transition-transform opacity-70">▼</span>
             <div className="absolute top-full pt-4 -left-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 overflow-hidden translate-y-2 group-hover:translate-y-0 transition-transform">
                   <div className="px-6 py-2 border-b border-slate-100">
                     <p className="text-xs text-slate-500 normal-case tracking-normal">{TOUR_CATEGORIES.LOCAL_EXPEDITIONS.subtitle}</p>
                   </div>
                   {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.tours.map((tourId) => {
                     const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                     if (!tour) return null;
                     return (
                       <Link key={tourId} to={`/package/${tourId}`} className="flex items-center px-6 py-3 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                         <span className="mr-3">🏍️</span> {tour.title} ({tour.duration})
                       </Link>
                     );
                   })}
                </div>
             </div>
           </div>

           <div className="group relative cursor-pointer flex items-center hover:text-slate-900 transition-colors">
             {TOUR_CATEGORIES.GRAND_CIRCUITS.title.toUpperCase()} <span className="ml-2 text-[7px] group-hover:rotate-180 transition-transform opacity-70">▼</span>
             <div className="absolute top-full pt-4 -left-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 overflow-hidden translate-y-2 group-hover:translate-y-0 transition-transform">
                   <div className="px-6 py-2 border-b border-slate-100">
                     <p className="text-xs text-slate-500 normal-case tracking-normal">{TOUR_CATEGORIES.GRAND_CIRCUITS.subtitle}</p>
                   </div>
                   {TOUR_CATEGORIES.GRAND_CIRCUITS.tours.map((tourId) => {
                     const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                     if (!tour) return null;
                     return (
                       <Link key={tourId} to={`/package/${tourId}`} className="flex items-center px-6 py-3 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                         <span className="mr-3">🏔️</span> {tour.title} ({tour.duration})
                       </Link>
                     );
                   })}
                </div>
             </div>
           </div>

           <div className="group relative cursor-pointer flex items-center hover:text-slate-900 transition-colors">
             {TOUR_CATEGORIES.FESTIVAL_SPECIALS.title.toUpperCase()} <span className="ml-2 text-[7px] group-hover:rotate-180 transition-transform opacity-70">▼</span>
             <div className="absolute top-full pt-4 -left-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 py-4 overflow-hidden translate-y-2 group-hover:translate-y-0 transition-transform">
                   <div className="px-6 py-2 border-b border-slate-100">
                     <p className="text-xs text-slate-500 normal-case tracking-normal">{TOUR_CATEGORIES.FESTIVAL_SPECIALS.subtitle}</p>
                   </div>
                   {TOUR_CATEGORIES.FESTIVAL_SPECIALS.tours.map((tourId) => {
                     const tour = TOUR_PACKAGES.find(t => t.id === tourId);
                     if (!tour) return null;
                     return (
                       <Link key={tourId} to={`/package/${tourId}`} className="flex items-center px-6 py-3 text-slate-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                         <span className="mr-3">🎭</span> {tour.title} ({tour.duration})
                       </Link>
                     );
                   })}
                </div>
             </div>
           </div>

           <Link to="/booking" className="hover:text-slate-900 transition-colors flex items-center text-golden-yellow">
             <span className="mr-2 text-sm">🤝</span> GROUP TOURS
           </Link>

           <Link to="/contact" className="hover:text-slate-900 transition-colors flex items-center">
             CONTACT US
           </Link>
        </div>
      </div>

      {/* Mobile Drawer - FIXED IDs */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 pb-12 px-6 space-y-2 shadow-2xl animate-fade-in-down overflow-y-auto max-h-[80vh]">
          <div className="pt-8 pb-4">
             <div className="relative">
                <input 
                  type="text" 
                  placeholder="Where do you want to ride?" 
                  className="w-full bg-slate-100 border border-slate-200 rounded-2xl py-4 px-12 focus:outline-none text-sm font-bold"
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2">🔍</div>
             </div>
          </div>
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-5 text-sm font-black border-b border-slate-50 text-slate-800 uppercase tracking-widest flex justify-between items-center">
            HOME <span className="text-slate-300">→</span>
          </Link>
          <Link to="/tours" onClick={() => setIsOpen(false)} className="block py-5 text-sm font-black border-b border-slate-50 text-slate-800 uppercase tracking-widest flex justify-between items-center">
            ALL TOURS <span className="text-slate-300">→</span>
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
          <Link to="/festivals" onClick={() => setIsOpen(false)} className="block py-5 text-sm font-black border-b border-slate-50 text-[#00bcd4] uppercase tracking-widest flex justify-between items-center">
            FESTIVAL SPECIALS <span className="text-golden-yellow">★ NEW</span>
          </Link>
          <div className="pt-8">
             <a href={`tel:${CONTACT_NUMBERS[0]}`} className="w-full bg-cyan-500 text-white py-4 rounded-2xl font-black text-center uppercase tracking-widest text-sm flex items-center justify-center shadow-xl">
               <span className="mr-3">📞</span> Call Local Experts
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
