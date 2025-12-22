
import React from 'react';

const VALUES = [
  {
    title: "Eco-Conscious Riding",
    desc: "We follow a strict 'Leave No Trace' policy. Our fleet consists of BS6 compliant bikes to minimize emissions in the fragile Himalayan ecosystem.",
    icon: "🌱"
  },
  {
    title: "Native Prosperity",
    desc: "100% of our guides, mechanics, and support staff are Leh locals. We ensure your adventure directly supports Ladakhi families and the regional economy.",
    icon: "🤝"
  },
  {
    title: "Cultural Guardianship",
    desc: "We promote deep respect for our Buddhist heritage. Our itineraries include stops at ancient monasteries where we prioritize silence and sanctity.",
    icon: "🕍"
  },
  {
    title: "Water Preservation",
    desc: "Ladakh is a high-altitude desert. We provide filtered water stations at our base to discourage the use of single-use plastic bottles.",
    icon: "💧"
  }
];

const ValuesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-bold text-mountain-blue uppercase leading-tight">
              COMMITTED TO THE <br /> <span className="text-slate-400">HIMALAYAN SOIL</span>
            </h3>
          </div>
          <div className="hidden lg:block w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="fill-mountain-blue">
               <path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {VALUES.map((value, idx) => (
            <div key={idx} className="relative group">
              <div className="text-5xl mb-8 transform group-hover:-translate-y-2 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-xl font-oswald font-bold text-mountain-blue mb-4 uppercase tracking-wide">
                {value.title}
              </h4>
              <p className="text-slate-500 font-light leading-relaxed border-l-2 border-slate-100 pl-6 group-hover:border-golden-yellow transition-colors duration-300">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-mountain-blue rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10">
            <p className="text-golden-yellow font-oswald font-bold uppercase tracking-widest mb-2">The Marmot Pledge</p>
            <h5 className="text-2xl md:text-3xl font-oswald font-bold uppercase">We don't just ride in Ladakh, we live here.</h5>
          </div>
          <div className="relative z-10 shrink-0">
             <div className="inline-block border-2 border-golden-yellow/30 px-8 py-4 rounded-2xl font-black font-oswald uppercase tracking-widest text-sm text-golden-yellow bg-golden-yellow/5">
                Responsible Tourism Partner
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
