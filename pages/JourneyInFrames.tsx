import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FrameImage {
  id: number;
  src: string;
  title: string;
  location: string;
}

const JourneyInFrames: React.FC = () => {
  const images: FrameImage[] = [
    {
      id: 1,
      src: "/journey frames (1).png",
      title: "Pangong Lake Serenity",
      location: "Pangong Tso, Ladakh"
    },
    {
      id: 3,
      src: "/journey in frames (3).png",
      title: "Royal Enfield Adventure",
      location: "Leh-Manali Highway"
    },
    {
      id: 4,
      src: "/journey in frames (4).png",
      title: "Monastery Views",
      location: "Hemis Monastery"
    },
    {
      id: 5,
      src: "/DSC04203.JPG",
      title: "Rider at Sunrise",
      location: "Leh outskirts"
    },
    {
      id: 6,
      src: "/DSC07330.JPG",
      title: "Mountain Trail",
      location: "Zanskar Range"
    },
    {
      id: 7,
      src: "/DSC08054.JPG",
      title: "High Pass View",
      location: "Umling La"
    },
    {
      id: 8,
      src: "/rider-umling-la.png",
      title: "High Altitude Roads",
      location: "Umling La Pass"
    },
    {
      id: 9,
      src: "/journey frames (5).png",
      title: "Lakeside Moments",
      location: "Pangong Lake"
    },
    {
      id: 10,
      src: "/journey frames (6).png",
      title: "Evening Trails",
      location: "Srinagar Valley"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 md:pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold text-mountain-blue uppercase tracking-tight mb-4">
              Journey in Frames
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Witness the breathtaking beauty of Ladakh through our collection. Every frame tells a story of adventure, courage, and the raw magnificence of the Himalayas.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image) => (
              <div
                key={image.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-80 overflow-hidden bg-slate-200">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JourneyInFrames;
