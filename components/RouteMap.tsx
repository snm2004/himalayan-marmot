
import React, { useState } from 'react';
import { RoutePoint } from '../types';

interface Props {
  points: RoutePoint[];
  title: string;
}

const RouteMap: React.FC<Props> = ({ points, title }) => {
  const [activePoint, setActivePoint] = useState<RoutePoint | null>(null);

  if (!points || points.length === 0) return null;

  return (
    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-white/10 relative overflow-hidden group shadow-2xl">
      {/* Background Grid Decor */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
           <div className="flex items-center space-x-3 mb-4">
              <span className="w-10 h-[1px] bg-golden-yellow"></span>
              <h4 className="text-golden-yellow font-oswald text-xs font-black uppercase tracking-[0.3em]">Vertical Expedition Data</h4>
           </div>
           
           <h3 className="text-4xl md:text-6xl font-oswald font-black text-white uppercase tracking-tighter leading-none mb-8">
             {title.split(' ')[0]} <br /> <span className="text-tibetan-red">ELEVATION.</span>
           </h3>
           
           <div className="space-y-6">
              <p className="text-slate-400 font-light text-sm leading-relaxed max-w-md">
                Ladakh isn't just distance; it's altitude. Our interactive grid tracks your ascent from Leh (3,500m) to the highest navigable points on Earth.
              </p>
              
              {activePoint ? (
                <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-6 rounded-3xl animate-fade-in-down backdrop-blur-xl shadow-2xl">
                   <div className="flex justify-between items-start mb-4">
                      <div>
                         <p className="text-golden-yellow font-black text-[9px] uppercase tracking-widest mb-1 opacity-70">Waypoint Locked</p>
                         <p className="text-3xl font-oswald font-bold text-white uppercase tracking-tight">{activePoint.name}</p>
                      </div>
                      <div className="bg-tibetan-red/20 text-tibetan-red px-3 py-1 rounded-full border border-tibetan-red/30 text-[9px] font-black uppercase tracking-widest">
                         Live Data
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                         <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Altimeter</p>
                         <p className="text-xl font-oswald font-bold text-white">{activePoint.elevation}</p>
                      </div>
                      <div className="bg-black/20 p-4 rounded-2xl border border-white/5">
                         <p className="text-[8px] text-slate-500 font-black uppercase mb-1">Oxygen Sat.</p>
                         <p className="text-xl font-oswald font-bold text-cyan-400">92% <span className="text-[10px] text-slate-500">AVG</span></p>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl border-dashed flex flex-col items-center justify-center text-center">
                   <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 text-white/20 animate-pulse">
                      📍
                   </div>
                   <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] max-w-[200px]">
                      Hover over map markers to reveal tactical route data
                   </p>
                </div>
              )}
           </div>
        </div>

        {/* The SVG Map Container */}
        <div className="w-full lg:w-1/2 aspect-square bg-slate-950/80 rounded-[3rem] border border-white/10 relative flex items-center justify-center p-12 overflow-hidden shadow-inner">
           {/* Radar Pulse Background */}
           <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-full border border-white/10 rounded-full animate-ping"></div>
           </div>

           <svg viewBox="0 0 400 300" className="w-full h-full drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              {/* The Route Line */}
              <path 
                d={`M ${points.map(p => `${(p.x/100)*400},${(p.y/100)*300}`).join(' L ')}`}
                fill="none"
                stroke="rgba(241, 196, 15, 0.1)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path 
                d={`M ${points.map(p => `${(p.x/100)*400},${(p.y/100)*300}`).join(' L ')}`}
                fill="none"
                stroke="#A93226"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="1,6"
                className="animate-[dash_10s_linear_infinite]"
              />

              {/* Waypoints */}
              {points.map((p, idx) => (
                <g 
                  key={idx} 
                  className="cursor-pointer group/point"
                  onMouseEnter={() => setActivePoint(p)}
                  onClick={() => setActivePoint(p)}
                >
                  <circle 
                    cx={(p.x/100)*400} 
                    cy={(p.y/100)*300} 
                    r="8" 
                    fill={activePoint?.name === p.name ? "#F1C40F" : "#1B4F72"}
                    stroke="white"
                    strokeWidth="3"
                    className="transition-all duration-300 group-hover/point:scale-150"
                  />
                  <text 
                    x={(p.x/100)*400} 
                    y={(p.y/100)*300 - 20} 
                    fill="white" 
                    fontSize="10" 
                    fontWeight="900" 
                    textAnchor="middle" 
                    className={`uppercase tracking-widest transition-opacity duration-300 pointer-events-none font-oswald ${activePoint?.name === p.name ? 'opacity-100' : 'opacity-0 group-hover/point:opacity-50'}`}
                  >
                    {p.name}
                  </text>
                </g>
              ))}
           </svg>
           
           <div className="absolute bottom-8 right-10 text-[7px] font-black text-slate-700 uppercase tracking-[0.5em] flex items-center">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-2"></span>
              GPS OVERLAY V4.1
           </div>
        </div>
      </div>
      
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
};

export default RouteMap;
