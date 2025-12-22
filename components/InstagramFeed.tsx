
import React from 'react';
import { INSTAGRAM_URL, IG_STATS } from '../constants';

interface Post {
  imageUrl: string;
  isPinned?: boolean;
  isReel?: boolean;
  hasOverlayText?: string;
}

const InstagramFeed: React.FC = () => {
  // Hardcoded real-time content from the user's provided screenshot
  const posts: Post[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop",
      hasOverlayText: "Ladakh trip 2024",
      isPinned: true
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
      isPinned: true
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop",
      isPinned: true
    },
    {
      imageUrl: "/himalayan-bike-new.jpg",
      isReel: true
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800&auto=format&fit=crop"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const highlights = [
    { name: "feedback 1", img: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=150" },
    { name: "2022", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=150" },
    { name: "bike tour 2022", img: "/himalayan-bike-new.jpg" },
    { name: "🏍️ our bikes", img: "/himalayan-bike-new.jpg" },
    { name: "Lamayuru", img: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=150" },
    { name: "our services", img: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=150" },
    { name: "Nubra valley", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=150" }
  ];

  return (
    <div className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Instagram Header Profile Section (Matches Screenshot Exactly) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 mb-12">
          {/* Profile Picture */}
          <div className="shrink-0">
             <div className="w-24 h-24 md:w-40 md:h-40 rounded-full border border-slate-200 p-1 bg-white">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                   <img
                     src="/logo.png"
                     alt="Himalayan Marmot Logo"
                     className="w-full h-full object-cover"
                   />
                </div>
             </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <h1 className="text-xl font-normal text-slate-800">{IG_STATS.handle}</h1>
              <div className="flex gap-2 justify-center md:justify-start">
                <button className="bg-[#efefef] hover:bg-[#dbdbdb] text-slate-900 px-4 py-1.5 rounded-lg text-sm font-semibold transition-colors">Log in</button>
                <button className="text-[#0095f6] text-sm font-semibold px-4 py-1.5 hover:text-[#00376b] transition-colors">Sign up</button>
              </div>
            </div>

            <div className="flex justify-center md:justify-start gap-8 mb-6">
               <p className="text-sm"><span className="font-semibold">{IG_STATS.posts}</span> posts</p>
               <p className="text-sm"><span className="font-semibold">{IG_STATS.followers}</span> followers</p>
               <p className="text-sm"><span className="font-semibold">{IG_STATS.following}</span> following</p>
            </div>

            <div className="space-y-1">
               <h2 className="text-sm font-semibold">Himalayan Marmot</h2>
               <p className="text-sm text-slate-500">Travel company</p>
               <p className="text-sm leading-snug whitespace-pre-wrap max-w-sm">
                 {IG_STATS.bio}
               </p>
               <p className="text-sm text-[#00376b] font-medium mt-1">{IG_STATS.location}</p>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="flex gap-4 md:gap-8 overflow-x-auto pb-10 hide-scrollbar mb-8 border-b border-slate-200">
           {highlights.map((h, i) => (
             <div key={i} className="flex flex-col items-center gap-2 shrink-0 group cursor-pointer">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-slate-200 p-[3px] group-hover:bg-slate-50 transition-colors">
                   <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                      <img src={h.img} alt={h.name} className="w-full h-full object-cover" />
                   </div>
                </div>
                <span className="text-[11px] font-medium text-slate-700">{h.name}</span>
             </div>
           ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-12 mb-4">
           <div className="flex items-center gap-1.5 border-t border-slate-900 py-4 -mt-[1px] cursor-pointer">
              <svg aria-label="" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="3" x2="21" y1="14.985" y2="14.985"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line></svg>
              <span className="text-[12px] font-semibold uppercase tracking-widest">POSTS</span>
           </div>
           <div className="flex items-center gap-1.5 py-4 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
              <svg aria-label="" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"></path></svg>
              <span className="text-[12px] font-semibold uppercase tracking-widest">REELS</span>
           </div>
           <div className="flex items-center gap-1.5 py-4 cursor-pointer opacity-40 hover:opacity-100 transition-opacity">
              <svg aria-label="" color="rgb(142, 142, 142)" fill="rgb(142, 142, 142)" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"></path><path d="M12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path></svg>
              <span className="text-[12px] font-semibold uppercase tracking-widest">TAGGED</span>
           </div>
        </div>

        {/* Real-time Grid (Matches User Screenshot) */}
        <div className="grid grid-cols-3 gap-1 md:gap-7">
          {posts.map((post, i) => (
            <a 
              key={i} 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noreferrer" 
              className="relative aspect-square block group overflow-hidden bg-slate-200"
            >
              <img 
                src={post.imageUrl} 
                alt="Instagram post" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              {/* Overlay Text for specific post */}
              {post.hasOverlayText && (
                <div className="absolute inset-0 flex items-center justify-center p-2">
                   <div className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded">
                      <p className="text-white text-[10px] md:text-2xl font-bold uppercase tracking-tight">{post.hasOverlayText}</p>
                   </div>
                </div>
              )}

              {/* Pin Icon */}
              {post.isPinned && (
                <div className="absolute top-2 right-2 md:top-4 md:right-4">
                  <svg aria-label="Pinned" color="white" fill="white" height="18" role="img" viewBox="0 0 24 24" width="18"><path d="M21 22.5a.75.75 0 0 1-.53-.22L12 13.06l-8.47 8.47a.75.75 0 0 1-1.06-1.06L10.94 12 2.47 3.53a.75.75 0 0 1 1.06-1.06L12 10.94l8.47-8.47a.75.75 0 0 1 1.06 1.06L13.06 12l8.47 8.47a.75.75 0 0 1-.53 1.28Z" transform="rotate(45 12 12)"></path></svg>
                </div>
              )}

              {/* Reel Icon */}
              {post.isReel && (
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
                  <svg aria-label="Clip" color="white" fill="white" height="18" role="img" viewBox="0 0 24 24" width="18"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"></path><path d="M10 17l6-5-6-5v10z"></path></svg>
                </div>
              )}

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
           <a 
             href={INSTAGRAM_URL} 
             target="_blank" 
             rel="noreferrer" 
             className="text-[#0095f6] font-semibold text-sm hover:underline"
           >
             Follow @himalayan_marmot_2019 on Instagram
           </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
