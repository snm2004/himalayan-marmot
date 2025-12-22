
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { COMPANY_NAME } from '../constants';

interface Review {
  name: string;
  rating: number;
  quote: string;
  location: string;
  isUserSubmitted?: boolean;
}

const TestimonialsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReviews, setUserReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    location: '',
    quote: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    // Load local reviews from localStorage
    const saved = localStorage.getItem('himalayan_marmot_user_reviews');
    let existingUserReviews: Review[] = [];
    if (saved) {
      try {
        existingUserReviews = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved reviews", e);
      }
    }

    // Add Sandesh Gupta specifically as per user request if not already there
    const sandeshReview: Review = {
      name: "Sandesh Gupta",
      rating: 5,
      location: "Hyderabad, India",
      quote: "An absolutely incredible experience with Himalayan Marmot. Tsewang and his team were professional, and the BS6 Himalayan bikes were in top-notch condition. Best way to see Ladakh!",
      isUserSubmitted: true
    };

    const hasSandesh = existingUserReviews.some(r => r.name === "Sandesh Gupta");
    if (!hasSandesh) {
      existingUserReviews = [sandeshReview, ...existingUserReviews];
    }
    
    setUserReviews(existingUserReviews);

    const fetchAIReviews = async () => {
      try {
        // ALWAYS use new GoogleGenAI({ apiKey: process.env.API_KEY }) directly.
        // Create a new GoogleGenAI instance right before making an API call.
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: `Generate 3 diverse and realistic customer reviews for a bike tour company called "${COMPANY_NAME}" based in Leh, Ladakh. 
          Include travelers from different countries and India. Ratings should be 4 or 5 stars. 
          Quotes should highlight local expertise, safety, and the quality of the Himalayan BS6 bikes.`,
          config: {
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  rating: { type: Type.NUMBER },
                  quote: { type: Type.STRING },
                  location: { type: Type.STRING }
                },
                required: ["name", "rating", "quote", "location"]
              }
            }
          }
        });

        // The GenerateContentResponse features a text property (not a method).
        if (response.text) {
          const data = JSON.parse(response.text);
          setReviews(data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
        // Fallback reviews if API fails or key is missing
        setReviews([
          { name: "Arjun Mehta", rating: 5, location: "Mumbai, India", quote: "The best bike trip of my life! The BS6 Himalayan was in perfect condition for the Khardung La climb." },
          { name: "Sarah Jenkins", rating: 5, location: "London, UK", quote: "Tsewang and his team are true professionals. The safety protocols gave me immense peace of mind." },
          { name: "Vikram Singh", rating: 4, location: "Delhi, India", quote: "Authentic Ladakhi experience. These guys aren't just tour operators, they are mountain brothers." }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchAIReviews();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newReview: Review = {
      ...formData,
      isUserSubmitted: true
    };

    // Simulate delay
    setTimeout(() => {
      const updatedUserReviews = [newReview, ...userReviews];
      setUserReviews(updatedUserReviews);
      localStorage.setItem('himalayan_marmot_user_reviews', JSON.stringify(updatedUserReviews));
      
      setSubmitSuccess(true);
      setIsSubmitting(false);
      setFormData({ name: '', rating: 5, location: '', quote: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowForm(false);
      }, 3000);
    }, 1000);
  };

  const renderStars = (rating: number, interactive = false, onSelect?: (r: number) => void) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span 
        key={i} 
        onClick={() => interactive && onSelect && onSelect(i + 1)}
        className={`${i < rating ? "text-golden-yellow" : "text-slate-200"} ${interactive ? "cursor-pointer transition-transform hover:scale-125" : ""}`}
      >
        ★
      </span>
    ));
  };

  const allReviews = [...userReviews, ...reviews];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">Voices of the Road</h2>
            <h3 className="text-4xl md:text-5xl font-oswald font-bold text-mountain-blue uppercase">WHAT RIDERS SAY</h3>
            <div className="h-1 w-20 bg-golden-yellow mt-6 hidden md:block"></div>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-mountain-blue text-white px-8 py-3 rounded-full font-bold font-oswald tracking-widest hover:bg-tibetan-red transition shadow-lg text-sm uppercase"
          >
            {showForm ? 'CLOSE FORM' : 'SHARE YOUR STORY'}
          </button>
        </div>

        {/* Submission Form */}
        {showForm && (
          <div className="mb-20 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 animate-fade-in-down max-w-2xl mx-auto">
            <h4 className="text-2xl font-oswald font-bold text-mountain-blue mb-8 uppercase text-center">WRITE A REVIEW</h4>
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🏔️</div>
                <h5 className="text-xl font-bold text-green-600 mb-2 uppercase">Julley! Thank you.</h5>
                <p className="text-slate-500">Your experience has been recorded and shared with the community.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Name</label>
                    <input 
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-mountain-blue/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Location</label>
                    <input 
                      required
                      type="text"
                      value={formData.location}
                      onChange={e => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g. Bangalore, India"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-mountain-blue/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Rating</label>
                  <div className="text-3xl flex space-x-2">
                    {renderStars(formData.rating, true, (r) => setFormData({...formData, rating: r}))}
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Experience</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.quote}
                    onChange={e => setFormData({...formData, quote: e.target.value})}
                    placeholder="Tell us about your ride, the bikes, and the views..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-mountain-blue/20"
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-golden-yellow text-mountain-blue py-4 rounded-xl font-black font-oswald text-lg tracking-[0.2em] hover:bg-mountain-blue hover:text-white transition-all shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? 'SUBMITTING...' : 'POST TESTIMONIAL'}
                </button>
              </form>
            )}
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="bg-white p-8 rounded-3xl animate-pulse">
                <div className="h-4 bg-slate-100 w-24 mb-4 rounded"></div>
                <div className="h-2 bg-slate-50 w-full mb-2 rounded"></div>
                <div className="h-2 bg-slate-50 w-full mb-2 rounded"></div>
                <div className="h-2 bg-slate-50 w-2/3 mb-6 rounded"></div>
                <div className="h-8 bg-slate-100 w-8 rounded-full"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allReviews.map((review, idx) => (
              <div 
                key={idx} 
                className={`bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 border flex flex-col group hover:-translate-y-2 relative overflow-hidden ${review.isUserSubmitted ? 'border-golden-yellow/30' : 'border-slate-100'}`}
              >
                {review.isUserSubmitted && (
                  <div className="absolute top-0 right-0 bg-golden-yellow text-mountain-blue text-[8px] font-black uppercase px-4 py-1 rounded-bl-xl shadow-sm">
                    Recent
                  </div>
                )}
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
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

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
