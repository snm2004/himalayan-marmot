import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface FrameImage {
  id: number;
  src: string;
  title: string;
  location: string;
  file?: File;
}

const JourneyInFrames: React.FC = () => {
  const [images, setImages] = useState<FrameImage[]>([
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
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ title: '', location: '', src: '' });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.location && formData.src) {
      const newImage: FrameImage = {
        id: Math.max(...images.map(img => img.id), 0) + 1,
        src: formData.src,
        title: formData.title,
        location: formData.location
      };
      setImages([...images, newImage]);
      setFormData({ title: '', location: '', src: '' });
      setShowForm(false);
      alert('Image added successfully! Remember to update constants.tsx with the new image.');
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData({ ...formData, src: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = (id: number) => {
    if (window.confirm('Are you sure you want to remove this image?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

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
            <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
              Witness the breathtaking beauty of Ladakh through our collection. Share your adventure moments with us!
            </p>
            <button
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-6 py-3 bg-mountain-blue text-white font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span className="mr-2 text-xl">+</span>
              Add New Image
            </button>
          </div>

          {/* Add Image Form */}
          {showForm && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-mountain-blue/20">
              <h2 className="text-2xl font-bold text-mountain-blue mb-6">Add Image to Gallery</h2>
              <form onSubmit={handleAddImage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Image Title
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="e.g., Sunset at Pangong Lake"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-mountain-blue transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                      Location
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Pangong Tso, Ladakh"
                      className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-mountain-blue transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Image URL or Upload
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={formData.src}
                      onChange={(e) => setFormData({ ...formData, src: e.target.value })}
                      placeholder="e.g., /image-name.jpg or paste image URL"
                      className="flex-1 px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:border-mountain-blue transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold rounded-lg transition-all"
                    >
                      Upload File
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-mountain-blue text-white font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                  >
                    Add Image
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setFormData({ title: '', location: '', src: '' });
                    }}
                    className="px-6 py-3 bg-slate-300 text-slate-700 font-bold uppercase tracking-wider rounded-lg hover:bg-slate-400 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

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
                <div className="p-6">
                  <h3 className="text-lg font-bold text-mountain-blue mb-2 uppercase tracking-wide">
                    {image.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 flex items-center">
                    <span className="mr-2">📍</span>
                    {image.location}
                  </p>
                  <button
                    onClick={() => handleDeleteImage(image.id)}
                    className="w-full px-4 py-2 bg-red-100 text-red-600 font-bold uppercase tracking-wider rounded-lg hover:bg-red-200 transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {images.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg mb-4">No images yet. Add your first journey frame!</p>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-6 py-3 bg-mountain-blue text-white font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-all"
              >
                <span className="mr-2 text-xl">+</span>
                Add Image
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JourneyInFrames;
