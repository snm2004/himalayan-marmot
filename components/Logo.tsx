
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center group ${className}`}>
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 drop-shadow-md">
        {/* New Logo Image */}
        <img
          src="/logo.png"
          alt="Himalayan Marmot - Ladakh Tour & Travel"
          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      {/* Name Text next to logo for accessibility/branding */}
      <div className="hidden sm:flex flex-col ml-4">
        <span className="text-2xl md:text-3xl font-oswald font-extrabold leading-none tracking-tighter text-slate-900 uppercase transition-colors group-hover:text-[#00AEEF]">
          HIMALAYAN MARMOT
        </span>
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-1 opacity-80 group-hover:opacity-100">Expedition Experts</span>
      </div>
    </Link>
  );
};

export default Logo;
