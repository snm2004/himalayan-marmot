
import React, { useState, useEffect } from 'react';

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState({
    leh: { temp: 14, condition: 'Sunny' },
    khardungla: { temp: -2, condition: 'Snowy' },
    status: 'ALL ROADS OPEN',
    lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSyncing(true);
      setTimeout(() => {
        setWeather(prev => {
          const newLehTemp = 12 + Math.random() * 4;
          const newKLaTemp = -5 + Math.random() * 5;
          const statuses = ['ALL ROADS OPEN', 'KHARDUNG LA: CLEAR', 'VISIBILITY: HIGH', 'RIDERS ON TRACK'];
          
          return {
            leh: { ...prev.leh, temp: newLehTemp },
            khardungla: { ...prev.khardungla, temp: newKLaTemp },
            status: statuses[Math.floor(Math.random() * statuses.length)],
            lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
        });
        setIsSyncing(false);
      }, 1000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 transition-all hover:bg-white/20 group shadow-inner">
      <div className="flex items-center border-r border-white/10 pr-3 mr-3">
        <span className="relative flex h-2 w-2 mr-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 ${isSyncing ? 'bg-amber-400' : ''}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isSyncing ? 'bg-amber-400' : 'bg-red-500'}`}></span>
        </span>
        <span className="text-[7px] font-black tracking-widest text-white/40 uppercase whitespace-nowrap">
          Mountain Sync
        </span>
      </div>
      
      <div className="flex items-center space-x-5">
        <div className="flex items-center">
          <span className="text-golden-yellow mr-1.5 text-[10px]">☀️</span>
          <span className="font-black text-[8px] text-white/40 mr-1 uppercase">LEH</span>
          <span className="font-bold text-[11px] text-white">{weather.leh.temp.toFixed(0)}°</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-cyan-400 mr-1.5 text-[10px]">❄️</span>
          <span className="font-black text-[8px] text-white/40 mr-1 uppercase">K-LA</span>
          <span className="font-bold text-[11px] text-white">{weather.khardungla.temp.toFixed(1)}°</span>
        </div>

        <div className="hidden xl:block border-l border-white/10 pl-5 ml-1">
           <span className="text-[8px] font-black text-golden-yellow tracking-widest uppercase animate-pulse">
             {weather.status}
           </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
