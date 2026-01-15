
import React, { useState } from 'react';
import { TESTIMONIALS, RIDER_VIDEOS } from '../constants';

const RiderVideoCard: React.FC<{ videoId: string; title: string; delay: number }> = ({ videoId, title, delay }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : url;
  };

  const embedId = getYouTubeId(videoId);

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[9/16] md:aspect-[3/4] relative bg-black">
        {!isPlaying ? (
          <div className="absolute inset-0 cursor-pointer" onClick={handlePlay}>
            {/* YouTube Thumbnail */}
            <img
              src={`https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${embedId}/hqdefault.jpg`;
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 bg-golden-yellow rounded-full animate-ping opacity-20"></div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white shadow-xl">
                  <span className="ml-1 text-2xl">▶</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="text-[10px] font-bold text-golden-yellow uppercase tracking-widest mb-2">Rider Story</div>
              <h4 className="text-xl font-oswald font-bold text-white leading-tight">{title}</h4>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${embedId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`${i < rating ? "text-golden-yellow" : "text-slate-200"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">Voices of the Road</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-bold text-mountain-blue uppercase">WHAT RIDERS SAY</h3>
            <div className="h-1 w-20 bg-golden-yellow mt-6 hidden md:block"></div>
          </div>
        </div>

        {/* Video Stories Section */}
        <div className="mb-20">
          <div className="flex items-center mb-10">
            <div className="w-10 h-10 bg-tibetan-red rounded-full flex items-center justify-center text-white mr-4 animate-pulse">
              ▶
            </div>
            <h4 className="text-2xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">Video Stories</h4>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {RIDER_VIDEOS.map((video) => (
              <RiderVideoCard
                key={video.id}
                videoId={video.src}
                title={video.title}
                delay={video.delay}
              />
            ))}
            {/* Call to Action Card for Videos */}
            <a
              href="https://www.youtube.com/@himalayanmarmot"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden bg-mountain-blue border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-mountain-blue transition-colors">
                <span className="text-2xl text-white group-hover:text-mountain-blue">➜</span>
              </div>
              <p className="text-white font-oswald font-bold uppercase tracking-widest text-sm">Watch More</p>
            </a>
          </div>
        </div>

        {/* Text Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 flex flex-col group hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="flex mb-4 text-lg">
                {renderStars(review.rating)}
              </div>
              <p className="text-slate-600 font-light italic leading-relaxed mb-8 flex-grow">
                "{review.quote}"
              </p>
              <div className="flex items-center pt-6 border-t border-slate-50">
                <div className="w-10 h-10 bg-mountain-blue/5 rounded-full flex items-center justify-center text-mountain-blue font-bold mr-4">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-mountain-blue text-sm uppercase">{review.name}</h4>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{review.location}</p>
                  <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-1">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em] flex items-center justify-center">
            <span className="w-8 h-[1px] bg-slate-200 mr-4"></span>
            Verified Google Reviews
            <span className="w-8 h-[1px] bg-slate-200 ml-4"></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
