
import React from 'react';
import { Link } from 'react-router-dom';
import { UPCOMING_FESTIVALS, TOUR_PACKAGES } from '../constants';

const Festivals: React.FC = () => {
  const hemisPackage = TOUR_PACKAGES.find(p => p.id === 'hemis-festival-special');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-mountain-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <img src="https://images.unsplash.com/photo-1590050752117-23a9d7fc20c8?q=80&w=2000" className="w-full h-full object-cover" alt="Festival bg" />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mb-4 tracking-tighter">Ladakh Festivals <span className="text-golden-yellow">2025</span></h1>
          <p className="text-white/80 font-oswald text-xl font-bold uppercase tracking-[0.4em]">Witness the Spirit of the Himalayas</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {UPCOMING_FESTIVALS.map((fest, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 group">
              <div className="w-full md:w-1/2 h-80 rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img src={fest.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" alt={fest.name} />
                <div className="absolute top-4 left-4 bg-tibetan-red text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {fest.date}
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <p className="text-golden-yellow font-black text-xs uppercase tracking-widest mb-2">{fest.location}</p>
                <h3 className="text-3xl font-oswald font-black text-mountain-blue mb-4 uppercase">{fest.name}</h3>
                <p className="text-slate-500 font-light leading-relaxed mb-6">
                  {fest.description}
                </p>
                <button className="self-start bg-slate-100 text-mountain-blue px-8 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-mountain-blue hover:text-white transition-all">
                  Request Festival Itinerary
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Hemis Festival Banner */}
        <div className="mt-24 bg-mountain-blue rounded-[3rem] p-12 md:p-24 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(27,79,114,0.5)] border-4 border-golden-yellow/20">
           {/* Background Decorative Elements */}
           <div className="absolute -top-20 -right-20 w-96 h-96 bg-golden-yellow/10 rounded-full blur-[100px]"></div>
           <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tibetan-red/10 rounded-full blur-[100px]"></div>
           
           <div className="relative z-10 flex flex-col items-center">
             <div className="inline-block bg-golden-yellow text-mountain-blue px-6 py-2 rounded-full font-black uppercase tracking-[0.3em] text-xs mb-8 shadow-xl animate-bounce">
               SPECIAL EDITION TOUR
             </div>
             
             <h2 className="text-5xl md:text-8xl font-oswald font-black uppercase mb-6 leading-[0.9] tracking-tighter">
               HEMIS MASKED <br /> <span className="text-golden-yellow">DANCE 2025</span>
             </h2>
             
             <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto mb-12 italic leading-relaxed">
               Experience the spiritual heart of Ladakh. Limited slots available for our curated 7-day bike expedition during the Hemis Festival.
             </p>
             
             <div className="flex flex-col items-center gap-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-slate-400 font-black uppercase tracking-widest text-sm">Packages From</span>
                  <span className="text-4xl md:text-5xl font-oswald font-black text-golden-yellow drop-shadow-lg">
                    {hemisPackage?.startingPrice || '₹24,500'}
                  </span>
                </div>

                <Link 
                  to="/package/hemis-festival-special"
                  className="group relative bg-golden-yellow text-mountain-blue px-12 md:px-20 py-6 rounded-2xl font-black font-oswald text-2xl tracking-[0.1em] hover:bg-white transition-all shadow-[0_20px_60px_rgba(241,196,15,0.4)] uppercase flex items-center space-x-4 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    SECURE YOUR SLOT NOW
                    <svg className="ml-4 w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>
                
                <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mt-4">
                  * Includes RE Himalayan BS6, Fuel & Permits
                </p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;
