
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TOUR_PACKAGES, CONTACT_NUMBERS } from '../constants';

const PHONE_RULES: Record<string, { len: number; placeholder: string; label: string; format: (val: string) => string }> = {
  "+91": {
    len: 10, placeholder: "00000 00000", label: "India",
    format: (val) => val.replace(/(\d{5})(\d{1,5})/, '$1 $2').trim()
  },
  "+1": {
    len: 10, placeholder: "(555) 000-0000", label: "USA",
    format: (val) => {
      if (val.length <= 3) return val;
      if (val.length <= 6) return `(${val.slice(0, 3)}) ${val.slice(3)}`;
      return `(${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6)}`;
    }
  },
  "+44": {
    len: 10, placeholder: "7700 900000", label: "UK",
    format: (val) => {
      // UK mobile usually 07xxx xxxxxx. International +44 7xxx xxxxxx
      if (val.length <= 4) return val;
      return `${val.slice(0, 4)} ${val.slice(4)}`;
    }
  },
  "+61": {
    len: 9, placeholder: "400 000 000", label: "Australia",
    format: (val) => {
      if (val.length <= 3) return val;
      if (val.length <= 6) return `${val.slice(0, 3)} ${val.slice(3)}`;
      return `${val.slice(0, 3)} ${val.slice(3, 6)} ${val.slice(6)}`;
    }
  },
  "+49": {
    len: 11, placeholder: "151 00000000", label: "Germany",
    format: (val) => {
      if (val.length <= 3) return val;
      return `${val.slice(0, 3)} ${val.slice(3)}`;
    }
  },
  "+33": {
    len: 9, placeholder: "6 00 00 00 00", label: "France",
    format: (val) => {
      // 1 2 2 2 2
      let parts = [];
      if (val.length > 0) parts.push(val.slice(0, 1));
      if (val.length > 1) parts.push(val.slice(1, 3));
      if (val.length > 3) parts.push(val.slice(3, 5));
      if (val.length > 5) parts.push(val.slice(5, 7));
      if (val.length > 7) parts.push(val.slice(7));
      return parts.join(' ').trim();
    }
  },
  "+65": {
    len: 8, placeholder: "8000 0000", label: "Singapore",
    format: (val) => {
      if (val.length <= 4) return val;
      return `${val.slice(0, 4)} ${val.slice(4)}`;
    }
  },
  "+971": {
    len: 9, placeholder: "50 000 0000", label: "UAE",
    format: (val) => {
      if (val.length <= 2) return val;
      if (val.length <= 5) return `${val.slice(0, 2)} ${val.slice(2)}`;
      return `${val.slice(0, 2)} ${val.slice(2, 5)} ${val.slice(5)}`;
    }
  },
  "+60": {
    len: 9, placeholder: "12 345 6789", label: "Malaysia",
    format: (val) => {
      if (val.length <= 2) return val;
      if (val.length <= 5) return `${val.slice(0, 2)} ${val.slice(2)}`;
      return `${val.slice(0, 2)} ${val.slice(2, 5)} ${val.slice(5)}`;
    }
  },
  "+81": {
    len: 10, placeholder: "90 1234 5678", label: "Japan",
    format: (val) => {
      if (val.length <= 2) return val;
      if (val.length <= 6) return `${val.slice(0, 2)} ${val.slice(2)}`;
      return `${val.slice(0, 2)} ${val.slice(2, 6)} ${val.slice(6)}`;
    }
  }
};

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    whatsapp: '',
    email: '',
    packageId: '',
    selectedDuration: '',
    month: 'June',
    riders: '1',
    bikes: '1'
  });

  const selectedPkg = TOUR_PACKAGES.find(p => p.id === formData.packageId);

  // Suggested Months based on trip (Himalayan season)
  const getAvailableMonths = (pkgId: string) => {
    if (pkgId.includes('zanskar')) return ['July', 'August', 'September'];
    if (pkgId.includes('manali') || pkgId.includes('srinagar')) return ['June', 'July', 'August', 'September'];
    return ['May', 'June', 'July', 'August', 'September', 'October'];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get selected package and duration
    const pkgTitle = selectedPkg ? selectedPkg.title : formData.packageId;
    const finalDuration = formData.selectedDuration || selectedPkg?.duration || '';

    // Construct WhatsApp message with separate country code and clean phone
    const cleanPhone = formData.whatsapp.replace(/\D/g, ''); // strip spaces/parens for URL
    const fullPhoneForUrl = `${formData.countryCode.replace('+', '')}${cleanPhone}`;
    const fullPhoneFormatted = `${formData.countryCode} ${formData.whatsapp}`;
    const message = `Julley! I'd like to reserve a slot:
*Name:* ${formData.name}
*WhatsApp:* ${fullPhoneFormatted}
*Email:* ${formData.email}
*Tour:* ${pkgTitle}
*Duration:* ${finalDuration}
*Preferred Month:* ${formData.month}
*Riders:* ${formData.riders}
*Bikes:* ${formData.bikes}

Please confirm availability!`;

    const encodedMessage = encodeURIComponent(message);
    // Use the cleaned phone number for the wa.me link if we were sending TO the user, 
    // but here we are sending TO the business number. The message body contains the user's phone.
    const whatsappUrl = `https://wa.me/916006114260?text=${encodedMessage}`;

    // PDF Download Logic
    if (selectedPkg?.pdfUrl) {
      const link = document.createElement('a');
      link.href = selectedPkg.pdfUrl;
      link.download = `${selectedPkg.title.replace(/\s+/g, '_')}_Itinerary_2026.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // Simulate small delay then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
      setSuccess(true);
      window.scrollTo(0, 0);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'countryCode') {
      setFormData(prev => ({
        ...prev,
        countryCode: value,
        whatsapp: '' // Reset phone on country change
      }));
      return;
    }

    if (name === 'whatsapp') {
      // Allow only numbers
      const rawValues = value.replace(/\D/g, '');
      const rule = PHONE_RULES[formData.countryCode];
      const maxLen = rule?.len || 15;

      if (rawValues.length <= maxLen) {
        const formatted = rule?.format ? rule.format(rawValues) : rawValues;
        setFormData(prev => ({ ...prev, [name]: formatted }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formData.packageId) {
      const avail = getAvailableMonths(formData.packageId);
      if (!avail.includes(formData.month)) {
        setFormData(prev => ({ ...prev, month: avail[0] }));
      }
    }
  }, [formData.packageId]);

  if (success) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center border-4 border-golden-yellow">
          <div className="text-7xl mb-6">✅</div>
          <h1 className="text-4xl font-oswald font-black text-mountain-blue uppercase mb-4">Redirected!</h1>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Julley! You have been redirected to WhatsApp to chat with our lead marshal. If the window didn't open, please use the button below.
          </p>
          <div className="space-y-4">
            <button
              onClick={() => {
                const fullPhone = `${formData.countryCode} ${formData.whatsapp}`;
                const message = `Julley! I'd like to reserve a slot:
*Name:* ${formData.name}
*WhatsApp:* ${fullPhone}
*Email:* ${formData.email}
*Tour:* ${formData.packageId}
*Preferred Month:* ${formData.month}
*Riders:* ${formData.riders}
*Bikes:* ${formData.bikes}`;
                window.open(`https://wa.me/916006114260?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="w-full bg-[#25D366] text-white py-4 rounded-2xl font-black font-oswald text-xl tracking-widest hover:opacity-90 transition-all shadow-xl"
            >
              OPEN WHATSAPP AGAIN
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
    <div className="bg-slate-50 min-h-screen pb-24 md:pb-20" style={{ paddingTop: 'var(--headerH, 100px)' }}>
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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">WhatsApp Number</label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-[100px] bg-slate-50 border border-slate-200 rounded-xl px-2 py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-sm font-bold"
                    >
                      {Object.entries(PHONE_RULES).map(([code, rule]) => (
                        <option key={code} value={code}>{code} ({rule.label})</option>
                      ))}
                    </select>
                    <input
                      required
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      type="tel"
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                      placeholder={PHONE_RULES[formData.countryCode]?.placeholder || "00000 00000"}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Email Address</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    placeholder="yourname@email.com"
                  />
                </div>
              </div>

              {/* Expedition Info - Mobile Optimized */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] text-slate-400 border-b pb-2">Tour Details</h3>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Select Expedition & Duration</label>
                  <select
                    required
                    name="selectedPackage"
                    onChange={(e) => {
                      const [pkgId, duration] = e.target.value.split('|');
                      setFormData(prev => ({
                        ...prev,
                        packageId: pkgId,
                        selectedDuration: duration
                      }));
                    }}
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 focus:border-mountain-blue outline-none transition-all appearance-none cursor-pointer text-base touch-manipulation font-bold"
                  >
                    <option value="">Choose your plan...</option>
                    {TOUR_PACKAGES.map(pkg => (
                      <React.Fragment key={pkg.id}>
                        <option value={`${pkg.id}|${pkg.duration}`}>
                          {pkg.title} ({pkg.duration})
                        </option>
                        {pkg.variants?.map((variant, vIdx) => (
                          <option key={`${pkg.id}-v-${vIdx}`} value={`${pkg.id}|${variant.duration}`}>
                            {pkg.title} ({variant.duration})
                          </option>
                        ))}
                      </React.Fragment>
                    ))}
                  </select>
                  <p className="text-[10px] text-slate-400 mt-2 italic">* Select your trip and preferred number of days.</p>
                </div>
                <div>
                  <label className="block text-[11px] font-black uppercase text-slate-500 mb-2">Preferred Month</label>
                  <select
                    required
                    name="month"
                    value={formData.month}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all appearance-none cursor-pointer text-base touch-manipulation"
                  >
                    {getAvailableMonths(formData.packageId).map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-[10px] md:text-[11px] font-black uppercase text-slate-500 mb-2">No. of Riders</label>
                    <input
                      required
                      name="riders"
                      value={formData.riders}
                      onChange={handleInputChange}
                      type="number"
                      min="1"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-[11px] font-black uppercase text-slate-500 mb-2">No. of Bikes</label>
                    <input
                      required
                      name="bikes"
                      value={formData.bikes}
                      onChange={handleInputChange}
                      type="number"
                      min="0"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 md:px-5 py-4 md:py-4 focus:ring-2 focus:ring-mountain-blue/20 outline-none transition-all text-base touch-manipulation"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-golden-yellow/5 border border-golden-yellow/20 p-4 md:p-6 rounded-2xl">
              <p className="text-sm text-slate-600 font-light flex items-start md:items-center">
                <span className="text-lg md:text-xl mr-3 mt-0.5 md:mt-0">💡</span>
                <span className="leading-relaxed">
                  Submit this form to open WhatsApp with your pre-filled details. Our marshal will then confirm the fleet availability.
                </span>
              </p>
            </div>

            {/* Mobile-Optimized Submit Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full bg-[#25D366] text-white py-5 md:py-6 rounded-2xl font-black font-oswald text-lg md:text-2xl tracking-[0.15em] md:tracking-[0.2em] shadow-2xl hover:bg-green-600 transition-all transform active:scale-95 flex items-center justify-center disabled:opacity-50 touch-manipulation"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>OPENING WHATSAPP...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <span>💬</span>
                  <span>BOOK ON WHATSAPP</span>
                </div>
              )}
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
