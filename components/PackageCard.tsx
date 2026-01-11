
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TourPackage } from '../types';

interface Props {
  tour: TourPackage;
}

const PackageCard: React.FC<Props> = ({ tour }) => {
  const [imgError, setImgError] = useState(false);
  const fallbackImg = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="bg-yellow-50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 flex flex-col group border border-yellow-100 touch-manipulation">
      {/* Image Container - Mobile Optimized */}
      <div className="relative h-64 md:h-72 overflow-hidden bg-slate-100">
        <img
          src={imgError ? fallbackImg : tour.image}
          alt={tour.title}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-1000 ease-out"
          loading="lazy"
        />

        {/* Cinema Overlay Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-50 md:opacity-40 md:group-hover:opacity-60 transition-opacity duration-700"></div>

        {/* Floating Badge - Mobile Optimized */}
        <div className="absolute top-4 left-4 md:top-5 md:left-5 bg-tibetan-red text-white px-3 py-1.5 md:px-5 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.25em] shadow-2xl z-10 border border-white/20">
          {tour.variants && tour.variants.length > 0 ? `Choice of ${tour.duration} / ${tour.variants[tour.variants.length - 1].duration}` : tour.duration}
        </div>

        {/* Price Overlay - Mobile Enhanced */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-5 md:left-5 md:right-5 p-4 md:p-5 bg-white/15 md:bg-white/10 backdrop-blur-2xl border border-white/30 rounded-[1.2rem] md:rounded-[1.5rem] shadow-[0_8px_32px_rgba(0,0,0,0.3)] flex justify-between items-center transition-all duration-500 group-hover:translate-y-[-8px] group-hover:bg-white/20 z-10">
          <div>
            <p className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-90 mb-1">Starting From</p>
            <p className="text-golden-yellow text-xl md:text-2xl font-black font-oswald leading-none tracking-tight drop-shadow-md">
              {tour.startingPrice}
            </p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-mountain-blue shadow-xl transition-all duration-500 group-hover:bg-golden-yellow group-hover:scale-110 group-hover:rotate-12">
            <span className="text-lg md:text-xl">🏍️</span>
          </div>
        </div>
      </div>

      {/* Content - Mobile Optimized */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <h3 className="text-xl md:text-2xl font-oswald font-black text-mountain-blue mb-3 md:mb-4 group-hover:text-[#00bcd4] transition-colors uppercase leading-tight tracking-tight">
          {tour.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
          {tour.highlights.slice(0, 3).map((h, i) => (
            <span key={i} className="bg-slate-50 text-slate-500 px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg text-[8px] md:text-[9px] font-black uppercase tracking-widest border border-slate-100 group-hover:border-cyan-100 group-hover:bg-cyan-50/30 transition-colors">
              {h}
            </span>
          ))}
          {tour.highlights.length > 3 && (
            <span className="text-[9px] md:text-[10px] font-black text-slate-300 px-1">+ {tour.highlights.length - 3} MORE</span>
          )}
        </div>

        <div className="mt-auto space-y-4 md:space-y-6">
          <div className="flex items-center text-[10px] md:text-[11px] text-slate-400 font-bold uppercase tracking-[0.15em] md:tracking-[0.2em]">
            <span className="w-6 h-6 md:w-7 md:h-7 bg-slate-100 rounded-full flex items-center justify-center mr-2 md:mr-3 text-[9px] md:text-[10px] transition-transform group-hover:rotate-180 duration-1000">⚙️</span>
            RE Himalayan BS6 Fleet
          </div>

          {/* Mobile-Enhanced CTA Button */}
          <Link
            to={`/package/${tour.id}`}
            className="group/btn relative block w-full text-center bg-slate-900 text-white py-4 md:py-5 rounded-[1.2rem] font-black font-oswald text-[13px] md:text-[14px] tracking-[0.2em] md:tracking-[0.25em] overflow-hidden transition-all hover:bg-mountain-blue active:scale-95 shadow-xl uppercase touch-manipulation"
          >
            <span className="relative z-10">EXPLORE ITINERARY</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
          </Link>

          {/* Mobile-Only Quick Actions */}
          <div className="flex gap-2 md:hidden">
            <a
              href="tel:+916006114260"
              className="flex-1 bg-mountain-blue/10 text-mountain-blue py-3 rounded-xl font-bold text-xs text-center border border-mountain-blue/20 active:scale-95 transition-all touch-manipulation"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/916006114260?text=Hi! I'm interested in ${tour.title}. Can you share more details?`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366]/10 text-[#25D366] py-3 rounded-xl font-bold text-xs text-center border border-[#25D366]/20 active:scale-95 transition-all touch-manipulation"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
