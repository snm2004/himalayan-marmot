
import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, ADDRESS_OFFICE, CONTACT_NUMBERS, EMAIL, FOUNDER_NAME, FLEET, MAPS_URL, INSTAGRAM_URL, YOUTUBE_URL, TOUR_PACKAGES } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b131a] text-white overflow-hidden">
      {/* Simplified Instagram Link Section */}
      <div className="bg-[#0b131a] py-8 text-center border-b border-white/5">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center space-x-3 group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-pink-600 flex items-center justify-center text-white text-lg transition-transform group-hover:scale-110">
            📸
          </span>
          <span className="text-white/80 hover:text-cyan-400 font-bold text-sm tracking-wide transition-colors">
            Follow @himalayan_marmot_2019 on Instagram
          </span>
        </a>
      </div>

      {/* Cards Section */}
      <div className="bg-white py-20 px-4 md:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Card */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] text-slate-800 group border-b-8 border-mountain-blue transition-all hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-center space-x-5 mb-8">
              <div className="bg-mountain-blue/5 p-4 rounded-2xl group-hover:bg-mountain-blue group-hover:text-white transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mountain-blue group-hover:text-white"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h4 className="text-2xl font-oswald font-bold uppercase tracking-tight leading-none mb-1">About Us</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-cyan-600">Local Legacy Since 2012</p>
              </div>
            </div>
            <p className="text-slate-500 font-light leading-relaxed mb-10 text-sm md:text-base">
              We are a home-grown adventure company based in Leh. Founded by {FOUNDER_NAME}, we prioritize authentic experiences over commercial tourism. Our guides are local riders who know the Himalayas as their own backyard.
            </p>
            <Link to="/contact" className="inline-flex items-center text-mountain-blue font-black uppercase tracking-[0.2em] text-[11px] group-hover:translate-x-3 transition-transform">
              MEET OUR TEAM <span className="ml-3 text-lg">→</span>
            </Link>
          </div>

          {/* Fleet Card */}
          <div className="bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl text-white border-b-8 border-golden-yellow overflow-hidden relative group transition-all hover:shadow-golden-yellow/10">
            <div className="absolute top-0 right-0 w-48 h-48 bg-golden-yellow/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="flex items-center space-x-5 mb-8 relative z-10">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:bg-golden-yellow group-hover:text-mountain-blue transition-all">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-golden-yellow group-hover:text-mountain-blue"><circle cx="7" cy="17" r="2"></circle><circle cx="17" cy="17" r="2"></circle><path d="M12 17h5"></path><path d="M5 17H2l2-5h9l4 5h1"></path><path d="M12 12V7l-5 5"></path></svg>
              </div>
              <div>
                <h4 className="text-2xl font-oswald font-bold uppercase tracking-tight leading-none mb-1 text-white">Our Fleet</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-golden-yellow">Modified RE Himalayan BS6</p>
              </div>
            </div>
            <div className="flex items-center gap-6 mb-10 relative z-10">
              <div className="w-24 h-24 rounded-[1.5rem] overflow-hidden border border-white/10 flex-shrink-0 group-hover:scale-110 transition-transform">
                <img src={FLEET[0].image} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition duration-700" alt="Fleet" />
              </div>
              <p className="text-slate-400 font-light leading-relaxed flex-1 text-sm">
                Every rider deserves the best. We maintain an in-house garage where each bike is serviced after every tour. Our fleet is optimized for high altitude performance.
              </p>
            </div>
            <Link to="/safety" className="inline-block bg-white/10 border border-white/20 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-golden-yellow hover:text-mountain-blue transition-all relative z-10">
              FLEET & SAFETY SPECS
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Sitemap */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand Col */}
          <div className="space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-20 h-20 bg-white p-1 rounded-xl group-hover:rotate-6 transition-all shadow-lg flex items-center justify-center overflow-hidden">
                {/* New Logo Image for Footer */}
                <img
                  src="/logo.png"
                  alt="Himalayan Marmot - Ladakh Tour & Travel"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-oswald font-bold uppercase tracking-tight text-white group-hover:text-[#00AEEF] transition-colors">
                {COMPANY_NAME}
              </span>
            </Link>

            {/* Social Icons */}
            <div className="flex space-x-4 pt-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-600 transition-all group">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] transition-all">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h5 className="font-oswald text-lg font-bold mb-10 uppercase tracking-[0.3em] text-golden-yellow">Navigation</h5>
            <ul className="space-y-5 font-black text-slate-500 text-[11px] uppercase tracking-[0.15em]">
              <li><Link to="/contact" className="hover:text-cyan-500 transition-colors">About Us</Link></li>
              <li><Link to="/safety" className="hover:text-cyan-500 transition-colors">Safety Guide</Link></li>
              <li><Link to="/terms#booking-policy" className="hover:text-cyan-500 transition-colors">Booking Policy</Link></li>
              <li><Link to="/terms#terms" className="hover:text-cyan-500 transition-colors">Terms of Service</Link></li>
              <li><Link to="/terms#privacy" className="hover:text-cyan-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Trips Category */}
          <div className="text-center md:text-left">
            <h5 className="font-oswald text-lg font-bold mb-10 uppercase tracking-[0.3em] text-golden-yellow">Expeditions</h5>
            <ul className="space-y-5 font-black text-slate-500 text-[11px] uppercase tracking-[0.15em]">
              {TOUR_PACKAGES.slice(0, 6).map((pkg) => (
                <li key={pkg.id}>
                  <Link to={`/package/${pkg.id}`} className="hover:text-cyan-500 transition-colors">
                    {pkg.title}
                  </Link>
                </li>
              ))}
              <li><Link to="/tours" className="hover:text-cyan-500 transition-colors text-golden-yellow">View All Tours →</Link></li>
            </ul>
          </div>

          {/* Office Col */}
          <div className="text-center md:text-left">
            <h5 className="font-oswald text-lg font-bold mb-10 uppercase tracking-[0.3em] text-golden-yellow">Head Office</h5>
            <ul className="space-y-8 font-light text-slate-400 text-xs">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <span className="text-cyan-500 text-2xl">📍</span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="leading-relaxed text-center md:text-left hover:text-golden-yellow transition-colors"
                >
                  {ADDRESS_OFFICE}
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <span className="text-cyan-500 text-2xl">📞</span>
                <div className="space-y-2 font-black text-white text-sm tracking-tighter">
                  {CONTACT_NUMBERS.map(n => <p key={n}>{n}</p>)}
                </div>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <span className="text-cyan-500 text-2xl">✉️</span>
                <span className="font-black text-white lowercase">{EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-black/60 py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 gap-6 text-center">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            <span className="text-cyan-700">LADAKH PRIDE</span>
            <span className="text-slate-800">EXPEDITION SPECIALISTS</span>
            <span className="text-slate-800">MARMOT BUILT</span>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-2 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/10">
        <a href={`tel:${CONTACT_NUMBERS[0]}`} className="bg-white text-mountain-blue py-5 font-oswald font-black text-center uppercase tracking-widest text-[11px] flex items-center justify-center space-x-2">
          <span>📞</span> <span>CALL US</span>
        </a>
        <Link to="/payments" className="bg-golden-yellow text-mountain-blue py-5 font-oswald font-black text-center uppercase tracking-widest text-[11px] flex items-center justify-center space-x-2">
          <span>🏍️</span> <span>BOOK NOW</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
