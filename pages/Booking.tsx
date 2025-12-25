
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOUR_PACKAGES, CONTACT_NUMBERS } from '../constants';

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // After success, scroll to top
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border-4 border-golden-yellow">
          <div className="text-7xl mb-6">🏍️</div>
          <h1 className="text-4xl font-oswald font-black text-mountain-blue uppercase mb-4">Slot Reserved!</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Julley! Your booking request has been received. Our lead marshal, Tsewang Norboo, or a team member will contact you on WhatsApp/Call within 2 hours to confirm your dates and fleet availability.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/payments')}
              className="w-full bg-mountain-blue text-white py-4 rounded-2xl font-black font-oswald text-xl tracking-widest hover:bg-tibetan-red transition-all shadow-xl"
            >
              PROCEED TO PAYMENTS
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-slate-100 text-slate-500 py-4 rounded-2xl font-black font-oswald text-lg tracking-widest hover:bg-slate-200 transition-all"
            >
              RETURN TO HOME
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 md:py-20 pb-24 md:pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-oswald font-bold text-mountain-blue uppercase mb-3 md:mb-4 tracking-tighter">
            RESERVE YOUR <span className="text-tibetan-red">SLOT</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg uppercase font-oswald tracking-[0.15em] md:tracking-[0.2em]">Expedition Registration</p>
        </div>

        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-mountain-blue p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h2 className="text-xl md:text-2xl font-oswald font-bold uppercase">Booking Request Form</h2>
                <p className="text-golden-yellow text-xs font-bold uppercase tracking-widest mt-1">Direct from Leh Main Market</p>
              </div>
              <div className="md:text-right">
                <p className="text-[10px] opacity-60 uppercase font-black">Urgent Support?</p>
                <a href={`tel:${CONTACT_NUMBERS[0]}`} className="text-base md:text-lg font-oswald font-bold hover:text-golden-yellow transition-colors">
                  {CONTACT_NUMBERS[0]}
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-12 space-y-6 md:space-y-8">
            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {/* Personal Info - Mobile Optimized */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-slate-400 border-b pb-2">Rider Information</h3>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Full Name</label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    placeholder="Enter your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">WhatsApp Number</label>
                  <input
                    required
                    type="tel"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    placeholder="+91 00000 00000"
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    placeholder="yourname@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Expedition Info - Mobile Optimized */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-slate-400 border-b pb-2">Tour Details</h3>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Select Expedition</label>
                  <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all appearance-none cursor-pointer text-base touch-manipulation">
                    <option value="">Choose your ride...</option>
                    {TOUR_PACKAGES.map(pkg => (
                      <option key={pkg.id} value={pkg.id}>{pkg.title} ({pkg.duration})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Preferred Month</label>
                  <select required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all appearance-none cursor-pointer text-base touch-manipulation">
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] md:text-[11px] font-black uppercase text-slate-500 mb-2">No. of Riders</label>
                    <input
                      required
                      type="number"
                      min="1"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                      defaultValue="1"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-[11px] font-black uppercase text-slate-500 mb-2">No. of Bikes</label>
                    <input
                      required
                      type="number"
                      min="0"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                      defaultValue="1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-golden-yellow/5 border border-golden-yellow/20 p-4 md:p-6 rounded-2xl">
              <p className="text-sm text-slate-600 font-light flex items-start md:items-center">
                <span className="text-lg md:text-xl mr-3 mt-0.5 md:mt-0">💡</span>
                <span className="leading-relaxed">
                  Submit this form to block your slot. No immediate payment is required until our marshal confirms the fleet status and batch availability for your dates.
                </span>
              </p>
            </div>

            {/* Mobile-Optimized Submit Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-mountain-blue text-white py-5 md:py-6 rounded-2xl font-black font-oswald text-lg md:text-2xl tracking-[0.15em] md:tracking-[0.2em] shadow-2xl hover:bg-tibetan-red transition-all transform active:scale-95 flex items-center justify-center disabled:opacity-50 touch-manipulation"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>REGISTERING...</span>
                </div>
              ) : 'REQUEST RESERVATION'}
            </button>

            {/* Mobile-Only Quick Contact Options */}
            <div className="md:hidden bg-slate-100 rounded-2xl p-4 space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">Need Help?</p>
              <div className="flex gap-3">
                <a
                  href={`tel:${CONTACT_NUMBERS[0]}`}
                  className="flex-1 bg-mountain-blue text-white py-3 rounded-xl font-bold text-sm text-center active:scale-95 transition-all touch-manipulation"
                >
                  📞 Call Now
                </a>
                <a
                  href={`https://wa.me/916006114260?text=Hi! I need help with booking a Ladakh tour.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm text-center active:scale-95 transition-all touch-manipulation"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
