
import React from 'react';
import { ADDRESS_MAIN, ADDRESS_OFFICE, CONTACT_NUMBERS, EMAIL, FOUNDER_NAME, MAPS_URL } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-mountain-blue py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase mb-4">GET IN TOUCH</h1>
          <p className="text-golden-yellow font-oswald text-xl font-bold uppercase tracking-widest">We're Waiting For You In Leh</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 text-center flex flex-col items-center">
            <div className="text-4xl mb-6 text-tibetan-red">📍</div>
            <h3 className="font-oswald text-2xl font-bold text-mountain-blue mb-4 uppercase">OUR ADDRESS</h3>
            <p className="text-slate-600 font-light mb-4">
              <strong>Main Store:</strong><br />
              {ADDRESS_MAIN}
            </p>
            <p className="text-slate-600 font-light">
              <strong>Office:</strong><br />
              {ADDRESS_OFFICE}
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 text-center flex flex-col items-center">
            <div className="text-4xl mb-6 text-tibetan-red">📞</div>
            <h3 className="font-oswald text-2xl font-bold text-mountain-blue mb-4 uppercase">CALL US</h3>
            {CONTACT_NUMBERS.map((num, i) => (
              <p key={i} className="text-slate-800 text-xl font-bold font-oswald mb-2">{num}</p>
            ))}
            <p className="text-slate-500 font-light mt-4">Founder: {FOUNDER_NAME}</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 text-center flex flex-col items-center">
            <div className="text-4xl mb-6 text-tibetan-red">✉️</div>
            <h3 className="font-oswald text-2xl font-bold text-mountain-blue mb-4 uppercase">EMAIL</h3>
            <p className="text-slate-800 text-lg font-bold font-oswald">{EMAIL}</p>
            <p className="text-slate-500 font-light mt-4 italic">Expect a reply within 24 hours.</p>
          </div>

        </div>

        {/* Map Placeholder/CTA */}
        <div className="mt-16 bg-slate-100 rounded-3xl overflow-hidden h-[500px] relative">
          <img 
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-30" 
            alt="Leh Map" 
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-lg text-center border-4 border-golden-yellow">
              <h4 className="text-3xl font-oswald font-bold text-mountain-blue mb-4">VISIT US IN PERSON</h4>
              <p className="text-slate-600 font-light mb-8">
                We are located in the heart of Leh Main Market, near the Samsung showroom. Stop by for a cup of Ladakhi Butter Tea and let's talk about your next adventure!
              </p>
              <a 
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="bg-mountain-blue text-white px-10 py-4 rounded-lg font-bold font-oswald hover:bg-tibetan-red transition inline-block"
              >
                OPEN IN GOOGLE MAPS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
