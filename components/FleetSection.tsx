
import React from 'react';
import { FLEET } from '../constants';

const FleetSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-golden-yellow font-oswald text-xl font-bold uppercase tracking-[0.3em] mb-4">The Command Center</h2>
            <h3 className="text-5xl md:text-6xl font-oswald font-bold leading-none">OUR ELITE <span className="text-tibetan-red">FLEET</span></h3>
          </div>
          <p className="max-w-md text-slate-400 font-light text-lg">
            We exclusively use the legendary Royal Enfield Himalayan BS6, modified for high-altitude endurance and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FLEET.map((bike, idx) => (
            <div key={idx} className="group relative bg-slate-800/50 rounded-3xl p-8 border border-white/5 hover:border-golden-yellow/30 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                  <img src={bike.image} alt={bike.name} className="w-full h-64 object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl font-oswald font-bold text-white mb-6 uppercase tracking-wider">{bike.name}</h4>
                  <div className="space-y-4">
                     <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500 text-xs font-bold uppercase">Engine</span>
                        <span className="font-bold">{bike.engine}</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500 text-xs font-bold uppercase">Max Power</span>
                        <span className="font-bold">{bike.power}</span>
                     </div>
                     <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-slate-500 text-xs font-bold uppercase">Key Feature</span>
                        <span className="font-bold text-golden-yellow">{bike.feature}</span>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
