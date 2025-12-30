
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import TrustSection from '../components/TrustSection';
import ValuesSection from '../components/ValuesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GoogleReviews from '../components/GoogleReviews';
import FleetSection from '../components/FleetSection';
import VideoGallery from '../components/VideoGallery';
import JourneyFrames from '../components/JourneyFrames';
import FAQ from '../components/FAQ';
import StatCounter from '../components/StatCounter';
import { TOUR_PACKAGES, FOUNDER_NAME } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      <Hero />

      {/* Why Choose Us Section (Why Himalayan Marmot) */}
      <TrustSection />

      {/* Complete Tour Packages Display */}
      <section id="packages" className="py-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-yellow-50/50">
        <div className="text-center mb-32">
          <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">
            Complete Tour Collection
          </h2>
          <h3 className="text-4xl md:text-6xl font-oswald font-bold text-mountain-blue uppercase tracking-tight mb-6">
            All Expeditions
          </h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Explore our complete range of Himalayan motorcycle expeditions, from local adventures to grand road trips across the world's highest motorable roads.
          </p>
        </div>

        {/* Local Expeditions */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <div className="bg-cyan-500 w-1 h-12 mr-4"></div>
            <div>
              <h4 className="text-2xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">Local Expeditions</h4>
              <p className="text-slate-500 text-sm">Perfect for first-time riders and shorter adventures</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {TOUR_PACKAGES.filter(tour =>
              tour.id === 'pangong-tso-special' || tour.id === 'turtuk-trail'
            ).map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* Grand Road Trips */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <div className="bg-golden-yellow w-1 h-12 mr-4"></div>
            <div>
              <h4 className="text-2xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">Grand Road Trips</h4>
              <p className="text-slate-500 text-sm">Epic journeys across multiple high-altitude passes</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TOUR_PACKAGES.filter(tour =>
              tour.id === 'grand-loop'
            ).map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* Umling La Challenge */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <div className="bg-tibetan-red w-1 h-12 mr-4"></div>
            <div>
              <h4 className="text-2xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">Umling La Challenge</h4>
              <p className="text-slate-500 text-sm">Conquer the world's highest motorable road</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TOUR_PACKAGES.filter(tour =>
              tour.id === 'umling-la-challenge'
            ).map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* Festival Specials */}
        <div className="mb-32">
          <div className="flex items-center mb-12">
            <div className="bg-purple-500 w-1 h-12 mr-4"></div>
            <div>
              <h4 className="text-2xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">Festival Specials</h4>
              <p className="text-slate-500 text-sm">Experience Ladakh's vibrant cultural festivals</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TOUR_PACKAGES.filter(tour =>
              tour.id === 'hemis-festival-special'
            ).map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* Complete Overview Grid */}
        <div className="bg-slate-50 rounded-3xl p-16 mt-24">
          <h4 className="text-3xl font-oswald font-bold text-mountain-blue text-center mb-12 uppercase tracking-wide">
            Complete Tour Overview
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {TOUR_PACKAGES.map((tour) => (
              <div key={tour.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mountain-blue to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl mb-4 mx-auto">
                    🏍️
                  </div>
                  <h5 className="font-oswald font-bold text-mountain-blue mb-2 text-sm uppercase">{tour.title}</h5>
                  <p className="text-xs text-slate-500 mb-3">{tour.duration}</p>
                  <p className="text-golden-yellow font-bold text-lg">{tour.startingPrice}</p>
                  <Link
                    to={`/package/${tour.id}`}
                    className="inline-block mt-4 bg-mountain-blue text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-tibetan-red transition-all"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <VideoGallery />

      {/* Journey in Frames Section */}
      <JourneyFrames />

      {/* Values Section */}
      <ValuesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Safety Section Teaser */}
      <section className="bg-tibetan-red py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="text-5xl bg-white/10 w-20 h-20 flex items-center justify-center rounded-full border border-white/20">🚑</div>
            <div>
              <h4 className="text-2xl font-oswald font-bold uppercase tracking-wide">Safety is our non-negotiable priority</h4>
              <p className="opacity-80 font-light">Oxygen, Backup vehicles & Expert mechanics on every tour.</p>
            </div>
          </div>
          <Link to="/safety" className="bg-white text-tibetan-red px-10 py-4 rounded-full font-bold font-oswald tracking-widest hover:bg-golden-yellow hover:text-mountain-blue transition-all shadow-xl hover:-translate-y-1">
            LEARN OUR PROTOCOLS
          </Link>
        </div>
      </section>

      {/* About Section - Local Roots */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-golden-yellow/10 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl relative z-10 w-full h-[600px] object-cover"
              alt="The Founder"
            />
            <div className="absolute bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl z-20 max-w-xs border border-slate-100">
              <p className="text-mountain-blue font-oswald text-2xl font-bold mb-2">{FOUNDER_NAME}</p>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Founder & Lead Marshal</p>
              <div className="h-0.5 w-12 bg-golden-yellow mt-4"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h4 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-widest mb-6">Born In The Mountains</h4>
            <h3 className="text-4xl md:text-6xl font-oswald font-bold text-mountain-blue mb-8 leading-none">THE MARMOT <br /> LEGACY</h3>
            <div className="space-y-8 text-lg font-light text-slate-600 leading-relaxed">
              <p>
                Himalayan Marmot wasn't born in a boardroom; it was born on the high passes of Chang La, in the prayer halls of ancient monasteries, and around the hearths of Ladakhi families who've called these mountains home for centuries.
              </p>

              <div className="bg-gradient-to-r from-golden-yellow/10 to-mountain-blue/10 p-8 rounded-2xl border-l-4 border-golden-yellow">
                <p className="italic text-mountain-blue font-medium mb-4">
                  "When you ride with us, you're not just crossing passes - you're following ancient trade routes where our ancestors carried salt and silk. Every monastery we visit, every village we stop in, has stories passed down through generations."
                </p>
                <p className="text-sm font-bold text-tibetan-red">— Tsewang Norboo, Born in Leh, 1985</p>
              </div>

              <p>
                As third-generation Leh natives, we carry the responsibility of sharing our homeland respectfully. We know which families brew the best butter tea in Turtuk, where to find the mechanic who learned his craft from his grandfather, and the sacred stories behind every prayer flag fluttering in the wind.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-2xl mb-3">🏛️</div>
                  <h5 className="font-oswald font-bold text-mountain-blue mb-2">Cultural Immersion</h5>
                  <p className="text-sm text-slate-600">Experience authentic Ladakhi Buddhist culture, not just tourist attractions</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="text-2xl mb-3">🏠</div>
                  <h5 className="font-oswald font-bold text-mountain-blue mb-2">Local Connections</h5>
                  <p className="text-sm text-slate-600">Stay with families we've known for generations, not commercial hotels</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex space-x-12">
              <div>
                <div className="text-4xl font-oswald font-bold text-mountain-blue">
                  <StatCounter end={12} suffix="+" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Years Exp</p>
              </div>
              <div>
                <div className="text-4xl font-oswald font-bold text-mountain-blue">
                  <StatCounter end={25} suffix="k+" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">KM Driven</p>
              </div>
              <div>
                <div className="text-4xl font-oswald font-bold text-mountain-blue">
                  <StatCounter end={4} shouldPad={true} />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">Major Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FleetSection />

      <FAQ />

      {/* Community / Social Proof CTA */}
      <section className="bg-mountain-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000" className="w-full h-full object-cover" alt="Community CTA" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h4 className="text-golden-yellow font-oswald text-2xl font-bold mb-6">READY TO WRITE YOUR STORY?</h4>
          <h3 className="text-5xl md:text-7xl font-oswald font-bold mb-10 leading-none">JOIN OUR <span className="text-tibetan-red">RIDERS</span> LIST</h3>
          <p className="text-xl font-light opacity-80 mb-12">Limited slots per batch to ensure maximum safety and personal experience. Book your BS6 Himalayan today.</p>
          <button
            onClick={() => navigate('/booking')}
            className="bg-white text-mountain-blue px-12 py-5 rounded-full font-bold text-xl hover:bg-golden-yellow transition shadow-2xl font-oswald tracking-widest"
          >
            RESERVE YOUR SLOT
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
