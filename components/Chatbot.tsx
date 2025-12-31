
import React, { useState, useRef, useEffect } from 'react';
import { getChatbotResponse } from '../utils/chatbotKnowledge';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Julley! I'm your Himalayan Marmot assistant. How can I help you plan your Ladakh expedition today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quickQuestions, setQuickQuestions] = useState<string[]>([
    "Show all tours",
    "Pricing info",
    "Best time to visit",
    "Contact details"
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMsg = { role: 'user' as const, text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Simulate a small delay for better UX (feels more natural)
    setTimeout(() => {
      const response = getChatbotResponse(text);

      setMessages(prev => [...prev, { role: 'bot', text: response.text }]);

      // Update quick questions if response includes suggestions
      if (response.quickReplies && response.quickReplies.length > 0) {
        setQuickQuestions(response.quickReplies);
      }

      setIsLoading(false);
    }, 500);
  };



  return (
    <div className="fixed bottom-20 right-4 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 z-[99999] flex flex-col items-end gap-3">
      {isOpen ? (
        <div className="bg-white w-[340px] md:w-[400px] h-[550px] rounded-[2.5rem] shadow-[0_30px_100px_-15px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden border border-slate-100 animate-fade-in-down origin-bottom-right">
          {/* Header */}
          <div className="bg-mountain-blue p-6 flex justify-between items-center text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="flex items-center space-x-4 relative z-10">
              <div className="w-12 h-12 bg-golden-yellow rounded-2xl flex items-center justify-center text-mountain-blue text-2xl shadow-lg transform -rotate-3 transition hover:rotate-0">
                🦫
              </div>
              <div>
                <p className="font-oswald font-bold text-lg leading-none tracking-wide uppercase">MARMOT GUIDE</p>
                <div className="flex items-center mt-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2 border border-mountain-blue"></span>
                  <p className="text-[9px] uppercase font-black tracking-widest opacity-80">Local Expert Online</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all border border-white/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50 hide-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-[13px] leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-mountain-blue text-white rounded-br-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-3 rounded-full shadow-sm border border-slate-100 flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                  </div>
                  <span className="text-[9px] uppercase font-black text-slate-400 tracking-[0.2em]">Authenticating...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestions */}
          <div className="px-6 py-4 bg-white border-t border-slate-50">
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full hover:bg-mountain-blue hover:text-white hover:border-mountain-blue transition-all duration-300"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-5 bg-slate-100 border-t border-slate-200">
            <div className="bg-white rounded-full p-1.5 border border-slate-200 flex items-center shadow-lg">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Ladakh tours..."
                className="flex-1 bg-transparent py-2 px-5 text-sm focus:outline-none placeholder:text-slate-400"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="bg-mountain-blue text-white w-11 h-11 rounded-full flex items-center justify-center hover:bg-tibetan-red transition-all disabled:opacity-50 shadow-md active:scale-95"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          {/* Chatbot Button */}
          <div className="relative">
            {showGreeting && (
              <div className="absolute bottom-20 right-0 bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 w-48 animate-bounce transition-all">
                <p className="text-xs font-bold text-mountain-blue leading-snug">
                  Julley! Ask me anything about our bike tours! 🏔️
                </p>
                <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 border-r border-b border-slate-100"></div>
              </div>
            )}
            <button
              onClick={() => setIsOpen(true)}
              className="group bg-mountain-blue text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_8px_25px_-5px_rgba(27,79,114,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 md:border-3 border-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="text-3xl relative z-10 transition-transform group-hover:scale-125">🦫</span>
            </button>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/916006114260"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-[0_8px_25px_-5px_rgba(34,197,94,0.4)] flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 md:border-3 border-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-green-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg className="w-7 h-7 relative z-10 transition-transform group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
