
import React from 'react';
import SEO from '../components/SEO';

const Safety: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-20">
      <SEO
        title="Safety Protocols"
        description="Your safety is our priority. Oxygen cylinders, backup vehicles, and expert marshals on every Ladakh bike tour."
        url="/safety"
      />
      <div className="bg-mountain-blue py-20 text-white">
        desc: "Every convoy carries medical-grade oxygen cylinders and a comprehensive first-aid kit. Our Marshals are trained in handling High Altitude Sickness (AMS).",
        icon: "🫁"
    },
        {
          title: "Professional Mechanics",
        desc: "A veteran mechanic travels with every group. Whether it's a flat tire or a clutch issue at 17,000 ft, we've got the tools and expertise to fix it on the spot.",
        icon: "🔧"
    },
        {
          title: "Backup & Emergency Vehicle",
        desc: "A dedicated 4x4 backup vehicle follows the group to carry luggage and provide a seat for any rider who feels unwell or needs a break.",
        icon: "🚚"
    },
        {
          title: "The Fleet Protocol",
        desc: "Our Himalayan BS6 bikes undergo a 40-point inspection before every tour. We don't just rent bikes; we provide pre-tuned expedition machines.",
        icon: "🏍️"
    }
        ];

        return (
        <div className="bg-white min-h-screen pb-20">
          <div className="bg-mountain-blue py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mb-6">SAFETY PROTOCOL</h1>
              <p className="text-golden-yellow font-oswald text-xl font-bold uppercase tracking-widest">Your Life, Our Responsibility</p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 mt-16">
            <div className="prose prose-lg max-w-none text-slate-600 font-light mb-16">
              <h2 className="text-3xl font-oswald font-bold text-mountain-blue uppercase mb-6">Riding in the Death Zone</h2>
              <p>
                Ladakh is beautiful, but it is also unforgiving. At Himalayan Marmot, we don't take "adventure" lightly.
                We follow a strict set of safety instructions and protocols developed over a decade of riding these high-altitude deserts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {safetyMeasures.map((m, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{m.icon}</div>
                  <h3 className="text-2xl font-oswald font-bold text-mountain-blue mb-4 uppercase">{m.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-tibetan-red rounded-[3rem] p-10 md:p-16 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-8 uppercase">ACCLIMATIZATION IS NON-NEGOTIABLE</h2>
              <p className="text-xl opacity-90 font-light max-w-3xl mx-auto mb-10">
                We enforce a mandatory 24-48 hour rest period in Leh before heading to higher passes.
                No rider is allowed to skip this. We monitor oxygen levels of every participant twice daily.
              </p>
              <div className="inline-block border-2 border-white/30 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm">
                Safe Riding • Pure Adventure
              </div>
            </div>
          </div>
        </div>
        );
};

        export default Safety;
