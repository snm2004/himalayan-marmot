
import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "What is the best time to visit Ladakh for a bike tour?",
    answer: "The ideal window is from late May to mid-September. This is when the high mountain passes like Khardung La and Rohtang are open, and the weather is pleasant for riding."
  },
  {
    question: "Do I need a special license or permit?",
    answer: "You need a valid Indian driving license for motorcycles with gear. For international tourists, an International Driving Permit (IDP) is mandatory. We handle all Inner Line Permits (ILP) required for restricted areas like Pangong and Nubra."
  },
  {
    question: "How do you handle High Altitude Sickness (AMS)?",
    answer: "Safety is our priority. We include an extra day for acclimatization in Leh. Every tour is equipped with medical-grade oxygen cylinders, and our marshals are trained in wilderness first aid."
  },
  {
    question: "What should I carry in my riding kit?",
    answer: "While we provide basic gear like jackets and knee guards, we recommend bringing your own well-fitted helmet, waterproof gloves, and sturdy riding boots. Layered clothing is essential as temperatures fluctuate wildly."
  },
  {
    question: "Which mobile networks work in Ladakh?",
    answer: "Only post-paid SIM cards from Jio, Airtel, and BSNL work in Ladakh. Pre-paid SIMs from outside the state do not work due to security regulations. We provide Wi-Fi at most hotel locations."
  }
];

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-mountain-blue transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold font-oswald uppercase tracking-wide">{question}</span>
        <span className={`text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 font-light leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-tibetan-red font-oswald text-xl font-bold uppercase tracking-[0.4em] mb-4">Got Questions?</h2>
          <h3 className="text-4xl md:text-5xl font-oswald font-bold text-mountain-blue">FREQUENTLY ASKED</h3>
          <div className="h-1 w-20 bg-golden-yellow mx-auto mt-6"></div>
        </div>
        <div className="space-y-2">
          {FAQ_DATA.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
