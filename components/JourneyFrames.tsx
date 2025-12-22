import React, { useState, useEffect, useRef } from 'react';
import { optimizeImageUrl, createIntersectionObserver } from '../utils/performance';

const JourneyFrames: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = createIntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const imageElements = entry.target.querySelectorAll('img[data-src]');
          imageElements.forEach((img) => {
            const imageElement = img as HTMLImageElement;
            const src = imageElement.getAttribute('data-src');
            if (src) {
              imageElement.src = src;
              imageElement.removeAttribute('data-src');
              const imageId = parseInt(imageElement.getAttribute('data-id') || '0');
              setLoadedImages(prev => new Set(prev).add(imageId));
            }
          });
        }
      });
    });

    if (observer && sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer?.disconnect();
  }, []);

  const journeyImages = [
    {
      id: 1,
      src: "/journey frames (1).png",
      title: "Pangong Lake Serenity",
      location: "Pangong Tso, Ladakh"
    },
    {
      id: 2,
      src: "/journey in frames (2).png",
      title: "Himalayan Peaks",
      location: "Khardung La Pass"
    },
    {
      id: 3,
      src: "/journey in frames (3).png",
      title: "Royal Enfield Adventure",
      location: "Leh-Manali Highway"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Monastery Views",
      location: "Hemis Monastery"
    },
    {
      id: 5,
      src: "/journey in frames (4).png",
      
      
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "High Altitude Roads",
      location: "Umling La Pass"
    }
  ];

  return (
    <section ref={sectionRef} className="py-40 bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">
            Visual Stories
          </h2>
          <h3 className="text-4xl md:text-6xl font-oswald font-bold text-mountain-blue uppercase tracking-tight mb-6">
            Journey in Frames
          </h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Witness the breathtaking beauty of Ladakh through the lens of our riders. Every frame tells a story of adventure, courage, and the raw magnificence of the Himalayas.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journeyImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden transition-all duration-700 hover:-translate-y-2 rounded-2xl shadow-lg hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="h-80 overflow-hidden rounded-2xl bg-slate-200">
                <img
                  data-src={optimizeImageUrl(image.src, 600)}
                  data-id={image.id}
                  alt={image.title || `Journey frame ${image.id}`}
                  className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setLoadedImages(prev => new Set(prev).add(image.id))}
                />
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-200 rounded-2xl">
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-slate-300 h-4 w-4"></div>
                      <div className="rounded-full bg-slate-300 h-4 w-4"></div>
                      <div className="rounded-full bg-slate-300 h-4 w-4"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-golden-yellow/20">
            <span className="text-2xl">📱</span>
            <div className="text-left">
              <p className="text-mountain-blue font-oswald font-bold text-lg uppercase tracking-wide">
                Share Your Journey
              </p>
              <p className="text-slate-600 text-sm">
                Tag us @himalayan_marmot_2019 for a chance to be featured
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyFrames;