import React from 'react';

const GoogleReviews: React.FC = () => {
  const googleReviews = [
    {
      id: 1,
      name: "Kiran Nagpure",
      rating: 5,
      date: "Recently",
      review: "An Unforgettable Ladakh Bike Trip! We recently completed a 7-night, 8-day bike trip across Ladakh, and it was truly an experience of a lifetime. The owner, Mr. Nobu, is incredibly caring and attentive to every detail. Special mention to Jimmy, Padma, and Sunny bhai who captured all the moments!",
      avatar: "KN",
      url: "https://share.google/L1TYg1Mg51UTK58X1"
    },
    {
      id: 2,
      name: "Rajat Shrimal",
      rating: 5,
      date: "Recently",
      review: "I completed my dream bike trip to Leh-Ladakh with Himalayan Marmot, and it exceeded every expectation! A huge shoutout to Padma, our tour marshal, who was the true backbone of this trip. Riding through the high passes with Himalayan Marmot felt like being part of a family!",
      avatar: "RS",
      url: "https://share.google/LfnnMYsj2PbqRfgsb"
    },
    {
      id: 3,
      name: "Kiran Magar",
      rating: 5,
      date: "Recently",
      review: "Thank you, Nobuji and team! We truly enjoyed the incredible 11 days trip from Srinagar, Kargil, Leh, Nubra Valley, Turtuk, Pangong, Tsomoriri & Manali. A very special thanks for arranging my birthday celebration at Pangong Lake – truly unforgettable!",
      avatar: "KM",
      url: "https://share.google/Uyx1XtQSjV7VFY2qz"
    },
    {
      id: 4,
      name: "Abinash Singh",
      rating: 5,
      date: "Recently",
      review: "Ladakh is a dream destination for every biker and Marmot helped me to make it true. From managing every single thing to making our trip memorable, Himalayan Marmot took care of everything. Norbu, Jimmy, Padma – every one of you gave your best!",
      avatar: "AS",
      url: "https://share.google/ATOW4HH1PPDhbaKrX"
    },
    {
      id: 5,
      name: "Kiran",
      rating: 5,
      date: "Recently",
      review: "Did the Manali–Ladakh bike trip with Himalayan Marmot. The ride was well-organized with good support, experienced guides, and decent bike condition. Overall, a solid experience and worth it for the adventure!",
      avatar: "K",
      url: "https://share.google/r664L9Fxiizvr3wM2"
    },
    {
      id: 6,
      name: "Mukesh Raja",
      rating: 5,
      date: "Recently",
      review: "We did a 10 day custom bike trip with Himalayan Marmot. Marshalls Padma and Gyal were supportive and knowledgeable. They even arranged for a birthday cake in the remote Hanle village! If you're visiting Ladakh for the first time, I highly recommend Himalayan Marmot!",
      avatar: "MR",
      url: "https://maps.app.goo.gl/EdGrwJgz1R1zAuWTA"
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
            <a
              key={review.id}
              href={review.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-mountain-blue/30 cursor-pointer group"
            >
              {/* Review Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-mountain-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 group-hover:bg-tibetan-red transition-colors">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-mountain-blue group-hover:text-tibetan-red transition-colors">{review.name}</h4>
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

              {/* Click hint */}
              <p className="text-xs text-mountain-blue/60 mt-3 group-hover:text-mountain-blue transition-colors">
                Click to view on Google →
              </p>
            </a>
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
              href="https://maps.app.goo.gl/EdGrwJgz1R1zAuWTA"
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