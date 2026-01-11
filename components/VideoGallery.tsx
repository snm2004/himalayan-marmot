
import React, { useState } from 'react';
import { YOUTUBE_VIDEOS, YOUTUBE_URL } from '../constants';

const VideoCard: React.FC<{ video: typeof YOUTUBE_VIDEOS[0] }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 border-4 border-golden-yellow/20 hover:border-golden-yellow/60 shadow-2xl transition-all duration-700 hover:shadow-golden-yellow/20 hover:shadow-2xl">
      <div className="aspect-video relative overflow-hidden bg-black">
        {!isPlaying ? (
          <div className="relative w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
            {/* High-res Thumbnail */}
            <img 
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
              alt={video.title}
              onError={(e) => {
                // Fallback to hqdefault if maxres isn't available
                (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
              }}
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            
            {/* Play Button UI */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-tibetan-red rounded-full animate-ping opacity-30 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-20 h-20 bg-tibetan-red text-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-active:scale-95 border-4 border-white/10">
                   <span className="text-3xl ml-1">▶</span>
                </div>
              </div>
            </div>

            {/* Title Overlay for Cinema Feel */}
            <div className="absolute bottom-6 left-8 right-8 pointer-events-none">
               <h4 className="text-xl md:text-2xl font-oswald font-black text-white uppercase tracking-tighter leading-none mb-2 drop-shadow-lg">
                 {video.title}
               </h4>
               <div className="flex items-center text-[9px] font-black uppercase tracking-[0.3em] text-golden-yellow opacity-80">
                  <span className="w-6 h-[1px] bg-golden-yellow mr-3"></span>
                  EXPEDITION FOOTAGE
               </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&controls=1&mute=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
      {/* Bottom Info Bar */}
      <div className="p-6 bg-slate-950/80 backdrop-blur-md flex justify-between items-center border-t border-white/5">
         <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="text-tibetan-red mr-2">●</span>
            MARMOT FILMS • 4K ULTRA HD
         </div>
         {isPlaying && (
           <button 
             onClick={() => setIsPlaying(false)}
             className="text-[9px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-colors"
           >
             CLOSE PLAYER
           </button>
         )}
      </div>
    </div>
  );
};

const VideoGallery: React.FC = () => {
  return (
    <section className="py-32 bg-[#05080a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-golden-yellow font-oswald text-xl font-bold uppercase tracking-[0.5em] mb-6">
              Expedition Cinema
            </h2>
            <h3 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase tracking-tighter leading-[0.9]">
              SEE THE <br /> <span className="text-tibetan-red">ADVENTURE.</span>
            </h3>
            <div className="h-2 w-24 bg-tibetan-red mt-10 rounded-full hidden md:block shadow-[0_0_20px_rgba(169,50,38,0.5)]"></div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <a 
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center bg-white/5 border border-white/10 px-10 py-5 rounded-[2rem] hover:bg-white hover:text-mountain-blue transition-all duration-500 shadow-2xl"
            >
              <div className="bg-tibetan-red text-white w-10 h-10 rounded-full flex items-center justify-center mr-5 transition-transform group-hover:scale-110 group-hover:rotate-12">
                 <span className="text-xs">▶</span>
              </div>
              <span className="font-oswald font-black uppercase tracking-[0.2em] text-sm">Follow Himalayan Marmot</span>
            </a>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Official Media Partner</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {YOUTUBE_VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        <div className="mt-24 text-center">
           <div className="inline-block border border-white/10 px-10 py-5 rounded-[2.5rem] bg-white/5 backdrop-blur-sm">
             <p className="text-slate-400 text-sm font-light italic max-w-2xl mx-auto leading-relaxed">
               "Real footage from our actual expeditions. Experience the silence, the grit, and the raw soul of Ladakh before you ride with us. No filters, just high-altitude reality."
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
