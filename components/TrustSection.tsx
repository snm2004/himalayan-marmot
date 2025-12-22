
import React from 'react';
import { USP_LIST } from '../constants';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">
            Why Himalayan Marmot?
          </h2>
          <h3 className="text-4xl md:text-6xl font-oswald font-bold text-mountain-blue uppercase tracking-tighter">
            THE NATIVE <span className="text-slate-400">ADVANTAGE</span>
          </h3>
          <div className="h-1.5 w-24 bg-golden-yellow mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP_LIST.map((usp, idx) => (
            <div 
              key={idx} 
              className="relative bg-slate-50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-transparent hover:border-golden-yellow group overflow-hidden"
            >
              {/* Decorative Circle */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-golden-yellow/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-8 bg-white w-20 h-20 flex items-center justify-center rounded-2xl shadow-sm group-hover:bg-mountain-blue group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                  {usp.icon}
                </div>
                <h4 className="text-2xl font-oswald font-bold text-mountain-blue mb-4 uppercase tracking-tight group-hover:text-tibetan-red transition-colors">
                  {usp.title}
                </h4>
                <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                  {usp.desc}
                </p>
                <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 group-hover:text-golden-yellow transition-colors">
                  <span className="w-8 h-[1px] bg-slate-200 group-hover:bg-golden-yellow mr-4 transition-colors"></span>
                  Verified Expert
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner USPs */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-mountain-blue p-12 rounded-[3rem] text-white">
           <div className="space-y-2">
              <p className="text-golden-yellow font-black text-3xl font-oswald uppercase tracking-tighter">12+ Years</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Local Operations</p>
           </div>
           <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <p className="text-golden-yellow font-black text-3xl font-oswald uppercase tracking-tighter">100% Native</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Ladakhi Support Staff</p>
           </div>
           <div className="space-y-2">
              <p className="text-golden-yellow font-black text-3xl font-oswald uppercase tracking-tighter">Zero Hidden</p>
              <p className="text-xs font-bold uppercase tracking-widest opacity-60">Costs Policy</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
