
import React, { useState, useEffect, useCallback } from 'react';

interface WeatherData {
  leh: { temp: number; condition: string };
  khardungla: { temp: number; condition: string };
  status: string;
  lastUpdated: string;
  isLive: boolean;
}

// Leh coordinates: 34.1526° N, 77.5771° E
// Khardung La coordinates: 34.2817° N, 77.6025° E (approximate)

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>({
    leh: { temp: 13, condition: 'Clear' },
    khardungla: { temp: -3, condition: 'Snow' },
    status: 'LOADING...',
    lastUpdated: '--:--',
    isLive: false
  });
  const [isSyncing, setIsSyncing] = useState(true);
  const [error, setError] = useState(false);

  const fetchWeather = useCallback(async () => {
    setIsSyncing(true);
    try {
      // Open-Meteo API - 100% free, no API key required
      // Fetching weather for Leh and Khardung La area
      const lehUrl = 'https://api.open-meteo.com/v1/forecast?latitude=34.1526&longitude=77.5771&current=temperature_2m,weather_code&timezone=Asia/Kolkata';
      const klaUrl = 'https://api.open-meteo.com/v1/forecast?latitude=34.2817&longitude=77.6025&current=temperature_2m,weather_code&timezone=Asia/Kolkata';

      const [lehRes, klaRes] = await Promise.all([
        fetch(lehUrl),
        fetch(klaUrl)
      ]);

      const lehData = await lehRes.json();
      const klaData = await klaRes.json();

      // Weather code interpretation
      const getCondition = (code: number): string => {
        if (code === 0) return 'Clear';
        if (code <= 3) return 'Cloudy';
        if (code <= 49) return 'Foggy';
        if (code <= 69) return 'Rain';
        if (code <= 79) return 'Snow';
        if (code <= 99) return 'Storm';
        return 'Clear';
      };

      // Determine road status based on conditions
      const getStatus = (lehTemp: number, klaTemp: number, klaCode: number): string => {
        if (klaCode >= 70 && klaCode <= 79) return 'KHARDUNG LA: SNOW';
        if (klaTemp < -15) return 'K-LA: EXTREME COLD';
        if (lehTemp > 20) return 'PERFECT RIDING DAY';
        if (lehTemp > 10) return 'ALL ROADS OPEN';
        return 'RIDERS ON TRACK';
      };

      const lehTemp = lehData.current.temperature_2m;
      const klaTemp = klaData.current.temperature_2m;
      const klaCode = klaData.current.weather_code;

      setWeather({
        leh: {
          temp: lehTemp,
          condition: getCondition(lehData.current.weather_code)
        },
        khardungla: {
          temp: klaTemp,
          condition: getCondition(klaCode)
        },
        status: getStatus(lehTemp, klaTemp, klaCode),
        lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isLive: true
      });
      setError(false);
    } catch (err) {
      console.error('Weather fetch error:', err);
      setError(true);
      // Fallback to simulated data on error
      setWeather(prev => ({
        ...prev,
        status: 'OFFLINE MODE',
        isLive: false
      }));
    } finally {
      setIsSyncing(false);
    }
  }, []);

  useEffect(() => {
    // Initial fetch
    fetchWeather();

    // Refresh every 5 minutes (300000ms) - respects API usage
    const interval = setInterval(fetchWeather, 300000);

    return () => clearInterval(interval);
  }, [fetchWeather]);

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 sm:px-4 py-1 sm:py-1.5 transition-all hover:bg-white/20 group shadow-inner">
      {/* Live Indicator - Compact on mobile */}
      <div className="flex items-center border-r border-white/10 pr-1.5 sm:pr-3 mr-1.5 sm:mr-3 flex-shrink-0">
        <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 mr-1 sm:mr-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${error ? 'bg-red-400' : isSyncing ? 'bg-amber-400' : 'bg-green-400'
            }`}></span>
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 ${error ? 'bg-red-500' : isSyncing ? 'bg-amber-400' : 'bg-green-500'
            }`}></span>
        </span>
        <span className="hidden sm:inline text-[7px] font-black tracking-widest text-white/40 uppercase whitespace-nowrap">
          {weather.isLive ? 'LIVE' : 'SYNC'}
        </span>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-5 flex-shrink-0">
        {/* LEH - FORCE VISIBILITY */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] sm:text-[10px]">
            {weather.leh.condition === 'Clear' ? '☀️' : weather.leh.condition === 'Cloudy' ? '⛅' : '🌤️'}
          </span>
          <span
            className="font-bold text-white whitespace-nowrap"
            style={{ fontSize: '12px', display: 'inline', visibility: 'visible', opacity: 1 }}
          >
            {weather.leh.temp.toFixed(0)}°
          </span>
        </div>

        {/* KHARDUNG LA - FORCE VISIBILITY */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] sm:text-[10px]">
            {weather.khardungla.temp < 0 ? '❄️' : '🏔️'}
          </span>
          <span
            className="font-bold text-white whitespace-nowrap"
            style={{ fontSize: '12px', display: 'inline', visibility: 'visible', opacity: 1 }}
          >
            {weather.khardungla.temp.toFixed(0)}°
          </span>
        </div>

        {/* Status - Desktop only */}
        <div className="hidden xl:flex items-center border-l border-white/10 pl-3 sm:pl-5 ml-1">
          <span className="font-black text-[8px] text-white/40 mr-1 uppercase hidden xl:inline">LEH</span>
          <span className={`text-[8px] font-black tracking-widest uppercase whitespace-nowrap ${weather.isLive ? 'text-green-400' : 'text-golden-yellow animate-pulse'
            }`}>
            {weather.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
