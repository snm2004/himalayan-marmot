import React from 'react';

const GoogleReviews: React.FC = () => {
  const googleReviews = [
    {
      id: 1,
      name: "Sandesh gupta",
      rating: 5,
      date: "2 weeks ago",
      review: "Amazing experience with Himalayan Marmot! Tsewang and his team made our Ladakh trip unforgettable. The bikes were in perfect condition and the local knowledge was invaluable. Highly recommended!",
      avatar: "SG"
    },
    {
      id: 2,
      name: "rohith",
      rating: 5,
      date: "1 month ago",
      review: "Best bike tour company in Ladakh! Professional service, well-maintained Royal Enfield bikes, and excellent support throughout the journey. The Pangong Lake tour was breathtaking!",
      avatar: "R"
    },
    {
      id: 3,
      name: "Saketh",
      rating: 5,
      date: "3 weeks ago",
      review: "Incredible adventure through the Himalayas! The team's local expertise and hospitality made all the difference. Safety was their top priority and the bikes performed flawlessly at high altitude.",
      avatar: "S"
    },
    {
      id: 4,
      name: "Sriya ",
      rating: 5,
      date: "1 week ago",
      review: "Outstanding service from start to finish! The Turtuk trail was an adventure of a lifetime. Tsewang's team knows every corner of Ladakh. Will definitely book again!",
      avatar: "SR"
    },
    {
      id: 5,
      name: "Sarah",
      rating: 5,
      date: "2 months ago",
      review: "Perfect organization and execution! The Umling La expedition was challenging but incredibly rewarding. The support team was always there when needed. Truly professional service!",
      avatar: "SA"
    },
    {
      id: 6,
      name: "Vikram Singh",
      rating: 5,
      date: "3 weeks ago",
      review: "Exceptional experience with Himalayan Marmot! The local insights, cultural experiences, and adventure combined perfectly. The bikes were reliable and the team was fantastic!",
      avatar: "VS"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google" 
              className="w-8 h-8 mr-3"
            />
            <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em]">
              Google Reviews
            </h2>
          </div>
          <h3 className="text-4xl md:text-6xl font-oswald font-bold text-mountain-blue uppercase tracking-tight mb-6">
            Trusted by Riders
          </h3>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="flex items-center">
              {renderStars(5)}
              <span className="ml-2 text-2xl font-bold text-mountain-blue">5.0</span>
            </div>
            <div className="text-slate-600">
              <span className="font-bold">150+</span> Google Reviews
            </div>
          </div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. See what our riders say about their Himalayan adventures with us on Google.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {googleReviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Review Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mountain-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-mountain-blue">{review.name}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-slate-500 text-sm">{review.date}</span>
                  </div>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                  alt="Google" 
                  className="w-5 h-5"
                />
              </div>

              {/* Review Content */}
              <p className="text-slate-700 leading-relaxed text-sm">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-slate-50 rounded-2xl p-8 inline-block">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="w-8 h-8"
              />
              <h4 className="text-2xl font-oswald font-bold text-mountain-blue uppercase tracking-wide">
                Leave us a Review
              </h4>
            </div>
            <p className="text-slate-600 mb-6 max-w-md">
              Share your Himalayan adventure experience and help other riders discover the magic of Ladakh
            </p>
            <a
              href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-mountain-blue text-white px-8 py-4 rounded-full font-bold hover:bg-tibetan-red transition-all shadow-lg hover:shadow-xl"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                alt="Google" 
                className="w-5 h-5 mr-3"
              />
              Write a Google Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;