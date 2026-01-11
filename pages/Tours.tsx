import React from 'react';
import { Link } from 'react-router-dom';
import { TOUR_PACKAGES, TOUR_CATEGORIES } from '../constants';
import PackageCard from '../components/PackageCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Tours: React.FC = () => {
  const getCategoryTours = (categoryKey: keyof typeof TOUR_CATEGORIES) => {
    const category = TOUR_CATEGORIES[categoryKey];
    return category.tours.map(tourId => 
      TOUR_PACKAGES.find(tour => tour.id === tourId)
    ).filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
      <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-mountain-blue via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-oswald font-bold mb-6">
            All Ladakh Tours
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
            Discover the complete range of our motorcycle expeditions across the Himalayas
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/10 px-4 py-2 rounded-full">6-11 Days</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">All Skill Levels</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Royal Enfield Bikes</span>
            <span className="bg-white/10 px-4 py-2 rounded-full">Local Guides</span>
          </div>
        </div>
      </section>

      {/* Local Expeditions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-slate-900 mb-4">
              {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.title}
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              {TOUR_CATEGORIES.LOCAL_EXPEDITIONS.subtitle}
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Perfect for first-time visitors to Ladakh. These tours start and end in Leh, 
              covering the most iconic destinations with comfortable pacing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCategoryTours('LOCAL_EXPEDITIONS').map((tour) => (
              <PackageCard key={tour!.id} tour={tour!} />
            ))}
          </div>
        </div>
      </section>

      {/* Grand Circuits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-slate-900 mb-4">
              {TOUR_CATEGORIES.GRAND_CIRCUITS.title}
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              {TOUR_CATEGORIES.GRAND_CIRCUITS.subtitle}
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Epic journeys connecting multiple regions. These comprehensive tours cover 
              the entire trans-Himalayan route from Kashmir to Himachal Pradesh.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCategoryTours('GRAND_CIRCUITS').map((tour) => (
              <PackageCard key={tour!.id} tour={tour!} />
            ))}
          </div>
        </div>
      </section>

      {/* Festival Specials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-oswald font-bold text-slate-900 mb-4">
              {TOUR_CATEGORIES.FESTIVAL_SPECIALS.title}
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              {TOUR_CATEGORIES.FESTIVAL_SPECIALS.subtitle}
            </p>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Experience Ladakh's rich Buddhist culture during traditional festivals. 
              These special tours are timed with major monastery celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCategoryTours('FESTIVAL_SPECIALS').map((tour) => (
              <PackageCard key={tour!.id} tour={tour!} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tibetan-red to-mountain-blue text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-oswald font-bold mb-6">
            Ready for Your Himalayan Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of riders who have experienced the magic of Ladakh with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="bg-golden-yellow text-mountain-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors"
            >
              Book Your Tour
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-mountain-blue transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tours;