
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { TOUR_PACKAGES, CANCELLATION_POLICIES } from '../constants';
import RouteMap from '../components/RouteMap';
import HotelDetailsTable from '../components/HotelDetailsTable';

const PackageDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = TOUR_PACKAGES.find(p => p.id === id);

  // State for selected duration/variant
  const [selectedDuration, setSelectedDuration] = useState<string>(tour?.duration || "");
  const [activeTab, setActiveTab] = useState<'itinerary' | 'policy' | 'inclusions'>('itinerary');
  const [showStickyBtn, setShowStickyBtn] = useState(false);

  // Sync state if tour changes
  useEffect(() => {
    if (tour) {
      setSelectedDuration(tour.duration);
    }
  }, [tour]);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 400px (past hero)
      if (window.scrollY > 400) {
        setShowStickyBtn(true);
      } else {
        setShowStickyBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-oswald mb-4">Tour Not Found</h2>
          <Link to="/" className="text-mountain-blue underline">Return Home</Link>
        </div>
      </div>
    );
  }

  // Get current data based on selected duration
  const currentVariant = tour.variants?.find(v => v.duration === selectedDuration);
  const displayDuration = currentVariant?.duration || tour.duration;
  const displayPrice = currentVariant?.startingPrice || tour.startingPrice;
  const displayTiers = currentVariant?.priceTiers || tour.priceTiers;
  const displayItinerary = currentVariant?.itinerary || tour.itinerary;
  const displayPdf = currentVariant?.pdfUrl || tour.pdfUrl;

  return (
    <div className="bg-white relative" style={{ paddingTop: 'var(--headerH, 100px)' }}>
      {/* Hero Header */}
      <div className="relative min-h-[50vh] flex items-center justify-center text-white py-12 md:py-20">
        <div className="absolute inset-0 z-0">
          <img src={tour.image} className="w-full h-full object-cover transition-opacity duration-700" alt={tour.title} />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl">
          <p className="text-golden-yellow font-oswald font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">EXPLORE THE UNKNOWN</p>
          <h1 className="text-4xl md:text-7xl font-oswald font-bold mb-8 uppercase tracking-tight drop-shadow-2xl">
            {tour.title}
          </h1>

          {/* Duration Selector Dropdown */}
          <div className="inline-flex flex-col items-center bg-black/40 backdrop-blur-md px-6 py-6 rounded-[2.5rem] border-2 border-white/10 shadow-2xl animate-slideUp">
            <label className="text-[10px] font-black uppercase text-white/70 tracking-widest mb-3">Select Expedition Duration</label>
            <div className="flex items-center space-x-4">
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="bg-golden-yellow text-mountain-blue font-oswald font-bold px-6 py-2 rounded-full border-none outline-none focus:ring-2 focus:ring-white transition"
              >
                <option value={tour.duration}>{tour.duration} (Standard)</option>
                {tour.variants?.map((v, idx) => (
                  <option key={idx} value={v.duration}>{v.duration}</option>
                ))}
              </select>
              <div className="text-white font-oswald text-xl">
                Starts from <span className="text-golden-yellow">{displayPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Main Content */}
          <div className="lg:w-2/3">

            {/* Interactive Route Map (New Feature) */}
            {tour.routePoints && tour.routePoints.length > 0 && (
              <div className="mb-12">
                <RouteMap points={tour.routePoints} title={tour.title} />
              </div>
            )}

            {/* Tabs */}
            <div className="flex border-b border-slate-200 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
              <button
                onClick={() => setActiveTab('itinerary')}
                className={`px-8 py-4 font-oswald font-bold tracking-wider transition relative ${activeTab === 'itinerary' ? 'text-mountain-blue' : 'text-slate-400'}`}
              >
                ITINERARY
                {activeTab === 'itinerary' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-mountain-blue animate-shimmer" />}
              </button>
              <button
                onClick={() => setActiveTab('inclusions')}
                className={`px-8 py-4 font-oswald font-bold tracking-wider transition relative ${activeTab === 'inclusions' ? 'text-mountain-blue' : 'text-slate-400'}`}
              >
                INCLUSIONS
                {activeTab === 'inclusions' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-mountain-blue animate-shimmer" />}
              </button>
              <button
                onClick={() => setActiveTab('policy')}
                className={`px-8 py-4 font-oswald font-bold tracking-wider transition relative ${activeTab === 'policy' ? 'text-mountain-blue' : 'text-slate-400'}`}
              >
                POLICIES
                {activeTab === 'policy' && <div className="absolute bottom-0 left-0 right-0 h-1 bg-mountain-blue animate-shimmer" />}
              </button>
            </div>

            {/* Tab Panels */}
            {activeTab === 'itinerary' && (
              <div className="space-y-12 relative before:content-[''] before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-100 animate-fadeIn">
                {displayItinerary.map((day) => (
                  <div key={day.day} className="relative pl-12 group/day animate-slideIn">
                    <div className="absolute left-0 top-0 w-10 h-10 bg-golden-yellow rounded-full flex items-center justify-center font-oswald font-bold text-mountain-blue z-10 transition-transform group-hover/day:scale-110">
                      {day.day}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">
                        DAY {day.day}: {day.title}
                      </h4>
                      {day.elevation && (
                        <span className="text-[10px] font-black bg-slate-100 px-3 py-1 rounded-full text-slate-500 uppercase tracking-widest border border-slate-200">
                          {day.elevation} Peak
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 leading-relaxed font-light mb-4">
                      {day.description}
                    </p>
                    {day.marshalTip && (
                      <div className="bg-cyan-50/50 border-l-4 border-cyan-400 p-4 rounded-r-xl">
                        <p className="text-[10px] font-black text-cyan-700 uppercase tracking-widest mb-1">Marshal's Pro Tip</p>
                        <p className="text-sm text-slate-600 italic">"{day.marshalTip}"</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'inclusions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-oswald font-bold text-green-600 mb-6 uppercase flex items-center">
                    <span className="mr-2">✓</span> What's Included
                  </h4>
                  <ul className="space-y-4">
                    {tour.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <span className="text-green-500 mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-oswald font-bold text-tibetan-red mb-6 uppercase flex items-center">
                    <span className="mr-2">✗</span> What's Not Included
                  </h4>
                  <ul className="space-y-4">
                    {tour.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <span className="text-tibetan-red mr-2">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'policy' && (
              <div>
                <h4 className="text-xl font-oswald font-bold text-mountain-blue mb-6 uppercase">Cancellation Policy</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 font-oswald">
                      <tr>
                        <th className="p-4 border">Time Period</th>
                        <th className="p-4 border">Deduction Tier</th>
                      </tr>
                    </thead>
                    <tbody className="font-light">
                      {CANCELLATION_POLICIES.map((p, i) => (
                        <tr key={i}>
                          <td className="p-4 border">{p.period}</td>
                          <td className="p-4 border font-bold text-tibetan-red">{p.deduction}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-slate-500 italic">* All cancellations must be sent to us via email.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div id="booking-sidebar" className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h4 className="font-oswald text-xl font-bold text-mountain-blue mb-6 uppercase border-b pb-4">Package Pricing</h4>

                <div className="space-y-6 mb-10">
                  {displayTiers.map((tier, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:border-golden-yellow">
                      <p className="text-[10px] font-black uppercase text-tibetan-red tracking-widest mb-3">{tier.bike}</p>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-[9px] uppercase font-bold text-slate-400">Dual Rider</p>
                          <p className="text-xl font-oswald font-bold text-mountain-blue">{tier.dual}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[9px] uppercase font-bold text-slate-400">Solo Rider</p>
                          <p className="text-xl font-oswald font-bold text-mountain-blue">{tier.solo}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8 px-2">
                  <div className="flex items-center text-xs text-slate-600">
                    <span className="mr-3 text-golden-yellow">🏍️</span>
                    <span>Maintenance & Fuel Included</span>
                  </div>
                  <div className="flex items-center text-xs text-slate-600">
                    <span className="mr-3 text-golden-yellow">🏨</span>
                    <span>MAP Stays (B&D) Included</span>
                  </div>
                  <div className="flex items-center text-xs text-slate-600">
                    <span className="mr-3 text-golden-yellow">🛂</span>
                    <span>ILP Permits Handled</span>
                  </div>
                </div>

                {/* Download Itinerary Button */}
                <button
                  onClick={() => {
                    // If PDF URL is available, open it in new tab
                    if (displayPdf) {
                      window.open(displayPdf, '_blank');
                      return;
                    }

                    // Otherwise use the print method
                    const printContent = `
                      <html>
                        <head>
                          <title>${tour.title} - Detailed Itinerary</title>
                          <style>
                            body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
                            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #D4AF37; padding-bottom: 20px; }
                            .title { font-size: 28px; font-weight: bold; color: #1e40af; margin-bottom: 10px; }
                            .subtitle { font-size: 16px; color: #666; }
                            .section { margin: 25px 0; }
                            .section-title { font-size: 20px; font-weight: bold; color: #dc2626; margin-bottom: 15px; border-left: 4px solid #D4AF37; padding-left: 15px; }
                            .day { margin: 15px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; }
                            .day-title { font-weight: bold; color: #1e40af; margin-bottom: 8px; }
                            .highlights { background: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0; }
                            .price-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
                            .price-table th, .price-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
                            .price-table th { background: #1e40af; color: white; }
                            .inclusions { list-style: none; padding: 0; }
                            .inclusions li { padding: 8px 0; border-bottom: 1px solid #eee; }
                            .inclusions li:before { content: "✓ "; color: #D4AF37; font-weight: bold; }
                          </style>
                        </head>
                        <body>
                          <div class="header">
                            <div class="title">${tour.title}</div>
                            <div class="subtitle">${displayDuration} • Starting from ${displayPrice}</div>
                          </div>
                          
                          <div class="section">
                            <div class="section-title">Tour Overview</div>
                            <p>Experience the ultimate adventure through the breathtaking landscapes of Ladakh with our expertly crafted ${displayDuration} journey.</p>
                          </div>

                          <div class="section">
                            <div class="section-title">Detailed Itinerary</div>
                            ${displayItinerary.map((day, idx) => `
                              <div class="day">
                                <div class="day-title">Day ${day.day}: ${day.title}</div>
                                <p>${day.description}</p>
                                ${day.elevation ? `<p><strong>Elevation:</strong> ${day.elevation}</p>` : ''}
                                ${day.marshalTip ? `<p><strong>Marshal's Tip:</strong> ${day.marshalTip}</p>` : ''}
                              </div>
                            `).join('')}
                          </div>

                          <div class="section">
                            <div class="section-title">Tour Highlights</div>
                            <div class="highlights">
                              <ul class="inclusions">
                                ${tour.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                              </ul>
                            </div>
                          </div>

                          <div class="section">
                            <div class="section-title">Package Pricing</div>
                            <table class="price-table">
                              <thead>
                                <tr>
                                  <th>Bike Category</th>
                                  <th>Dual Rider</th>
                                  <th>Solo Rider</th>
                                </tr>
                              </thead>
                              <tbody>
                                ${displayTiers.map(tier => `
                                  <tr>
                                    <td>${tier.bike}</td>
                                    <td>${tier.dual}</td>
                                    <td>${tier.solo}</td>
                                  </tr>
                                `).join('')}
                              </tbody>
                            </table>
                          </div>

                          <div class="section">
                            <div class="section-title">What's Included</div>
                            <ul class="inclusions">
                              ${tour.inclusions.map(inclusion => `<li>${inclusion}</li>`).join('')}
                            </ul>
                          </div>

                          <div class="section">
                            <div class="section-title">What's Not Included</div>
                            <ul class="inclusions">
                              ${tour.exclusions.map(exclusion => `<li>${exclusion}</li>`).join('')}
                            </ul>
                          </div>

                          <div class="section">
                            <div class="section-title">Contact Information</div>
                            <p><strong>Himalayan Marmot</strong><br>
                            Premier Ladakh Bike Tours<br>
                            Phone: +91 6006114260<br>
                            WhatsApp: +91 6006114260</p>
                          </div>
                        </body>
                      </html>
                    `;

                    const printWindow = window.open('', '_blank');
                    if (printWindow) {
                      printWindow.document.write(printContent);
                      printWindow.document.close();
                      printWindow.focus();
                      setTimeout(() => {
                        printWindow.print();
                        printWindow.close();
                      }, 500);
                    }
                  }}
                  className="w-full bg-white border-2 border-golden-yellow text-mountain-blue py-4 rounded-2xl font-bold font-oswald text-lg hover:bg-golden-yellow hover:text-white transition shadow-lg active:scale-95 mb-4 flex items-center justify-center space-x-3"
                >
                  <span>📄</span>
                  <span>DOWNLOAD ITINERARY</span>
                </button>

                <button
                  onClick={() => navigate('/booking')}
                  className="w-full bg-golden-yellow text-mountain-blue py-5 rounded-2xl font-black font-oswald text-xl hover:bg-mountain-blue hover:text-white transition shadow-xl active:scale-95"
                >
                  RESERVE YOUR SLOT
                </button>
                <p className="text-center mt-4 text-[10px] text-slate-400 uppercase tracking-widest font-black">Limited slots per batch</p>
              </div>

              <div className="bg-tibetan-red p-8 rounded-[2rem] text-white">
                <h5 className="font-oswald text-xl font-bold mb-4 uppercase">CUSTOM GROUP?</h5>
                <p className="font-light mb-6 opacity-90 text-sm">Planning a corporate retreat or a private club ride? We tailor tours for groups of 10+ riders.</p>
                <a
                  href="https://wa.me/916006114260"
                  target="_blank"
                  className="inline-block bg-white text-tibetan-red px-8 py-3 rounded-full font-bold font-oswald uppercase tracking-widest text-xs hover:bg-golden-yellow hover:text-mountain-blue transition-all"
                >
                  WHATSAPP US
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sticky Bottom Booking Button (Mobile & Desktop) */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 transition-all duration-500 transform ${showStickyBtn ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:block">
            <p className="text-mountain-blue font-oswald font-black text-lg uppercase tracking-tight">{tour.title}</p>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{displayDuration} Journey from {displayPrice}</p>
          </div>
          <button
            onClick={() => navigate('/booking')}
            className="w-full md:w-auto bg-tibetan-red text-white px-12 py-4 rounded-2xl font-black font-oswald text-lg tracking-[0.1em] hover:bg-mountain-blue transition-all shadow-2xl flex items-center justify-center space-x-3 group"
          >
            <span>BOOK THIS TOUR</span>
            <span className="text-2xl transition-transform group-hover:translate-x-1 group-hover:rotate-12">🏍️</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
