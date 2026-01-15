import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { findAnswer } from './KnowledgeBase';
import { TOUR_PACKAGES } from '../constants';
import { useNavigate, useLocation } from 'react-router-dom';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const QUICK_QUESTIONS = [
    '📦 Show me tour packages',
    '💰 What are the prices?',
    '🏍️ Which bikes are available?',
    '📅 Best time to visit?',
    '📞 How to book?'
];

export default function ChatbotEnhanced() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Julley! 🦫 Welcome to Himalayan Marmot. How can I help you plan your Ladakh adventure today?'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [conversationHistory, setConversationHistory] = useState<string[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Context mapping for page awareness
    const PAGE_CONTEXT: Record<string, string> = {
        '/': "",
        '/tours': "You are currently viewing all our tour packages! We have 8 curated expeditions ranging from 6 to 12 days. Need help choosing one?",
        '/booking': "Ready to start your adventure? You can secure your slot with just ₹5,000 advance payment. Let me know if you need bank details!",
        '/contact': "Need to talk to us directly? You can find our phone numbers, email, and office location here. We are available 9 AM - 8 PM.",
        '/safety': "Safety is our #1 priority. On this page, you can read about our oxygen support, medical kits, and expert Road Captains.",
        '/blogs': "Welcome to our Travel Blog! Here you'll find expert guides on packing, best time to visit, and cultural stories.",
        '/journey-in-frames': "This is our photo gallery featuring real moments from our past expeditions. See what the adventure looks like!",
        '/payments': "Here you can see our payment options. We accept UPI and Bank Transfers.",
        '/terms': "Please read our Terms & Conditions carefully regarding cancellations and refunds.",
        '/festivals': "Ladakh's festivals are colorful and vibrant! Check dates here to align your trip with a cultural event."
    };

    // Detect page changes and add context message
    useEffect(() => {
        // Reset if on home page and likely a fresh session
        if (location.pathname === '/' && messages.length <= 1) return;

        const contextMsg = PAGE_CONTEXT[location.pathname];

        // Only send if it's not already the last message to avoid duplicates
        const lastMsg = messages[messages.length - 1];
        if (contextMsg && lastMsg?.content !== `📍 **Page Info**: ${contextMsg}`) {
            // Small delay to feel natural after navigation
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: `📍 **Page Info**: ${contextMsg}`
                }]);
            }, 800);
        }
    }, [location.pathname]);

    const handleSend = async (text?: string) => {
        const messageText = text || input;
        if (!messageText.trim()) return;

        const userMessage: Message = { role: 'user', content: messageText };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setShowSuggestions(false);

        // Update conversation history
        const newHistory = [...conversationHistory, messageText];
        setConversationHistory(newHistory);

        // Check for "Current Page" / "Context" queries
        const lowerText = messageText.toLowerCase();
        if (lowerText.includes('which page') || lowerText.includes('this page') || lowerText.includes('where am i') || lowerText.includes('what page') || lowerText.includes('tell me about this')) {
            if (location.pathname.startsWith('/package/')) {
                const pkgId = location.pathname.split('/')[2];
                const pkg = TOUR_PACKAGES.find(p => p.id === pkgId);

                if (pkg) {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: `🏔️ **Current Expedition**: ${pkg.title}\n\n• **Duration**: ${pkg.duration}\n• **Price**: Starts ${pkg.startingPrice}\n• **Highlights**: ${pkg.highlights.join(', ')}\n\nWould you like to see the itinerary or book this tour?`
                    }]);
                    setIsLoading(false);
                    return;
                }
            } else if (PAGE_CONTEXT[location.pathname]) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: `📍 ${PAGE_CONTEXT[location.pathname]}`
                }]);
                setIsLoading(false);
                return;
            }
        }

        setTimeout(() => {
            // Get response from knowledge base
            const answer = findAnswer(messageText);

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: answer
            }]);
            setIsLoading(false);
        }, 600);
    };

    const clearHistory = () => {
        setMessages([{
            role: 'assistant',
            content: 'Julley! 🦫 Welcome to Himalayan Marmot. How can I help you plan your Ladakh adventure today?'
        }]);
        setConversationHistory([]);
        setShowSuggestions(true);
    };

    // Handle link clicks with React Router
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        if (url.startsWith('/')) {
            e.preventDefault(); // Prevent default anchor behavior for internal links
            navigate(url);
            setIsOpen(false); // Optionally close chatbot on navigation
        }
        // For external links, default behavior (opening in new tab) will apply
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="chat-float"
                    aria-label="Open chat support"
                >
                    🦫
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-4 right-4 w-[90vw] max-w-[420px] h-[650px] max-h-[85vh] bg-gradient-to-b from-slate-50 to-white rounded-3xl shadow-2xl flex flex-col z-[999999] border-2 border-slate-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#1B4F72] via-[#2D5A87] to-[#1B4F72] text-white p-5 flex items-center justify-between relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[40px] border-b-white"></div>
                            <div className="absolute bottom-0 left-20 w-0 h-0 border-l-[80px] border-l-transparent border-r-[80px] border-r-transparent border-b-[60px] border-b-white"></div>
                            <div className="absolute bottom-0 right-10 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[35px] border-b-white"></div>
                        </div>

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-white to-slate-100 rounded-full flex items-center justify-center text-3xl shadow-lg ring-2 ring-white/30">
                                🦫
                            </div>
                            <div>
                                <h3 className="font-oswald font-bold text-lg tracking-wide uppercase">Himalayan Marmot</h3>
                                <p className="text-xs opacity-90 flex items-center gap-1 font-roboto">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    Your Mountain Guide
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 relative z-10">
                            {messages.length > 1 && (
                                <button
                                    onClick={clearHistory}
                                    className="text-white hover:bg-white/20 rounded-full p-2 transition text-xs"
                                    title="Clear chat"
                                >
                                    🗑️
                                </button>
                            )}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20 rounded-full p-2 transition"
                            >
                                <X size={22} />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] p-3.5 rounded-2xl ${msg.role === 'user'
                                        ? 'bg-gradient-to-br from-[#2D5A87] to-[#1B4F72] text-white rounded-br-sm shadow-md'
                                        : 'bg-white text-slate-800 rounded-bl-sm shadow-sm border border-slate-100'
                                        }`}
                                >
                                    <p className="text-sm whitespace-pre-line leading-relaxed">
                                        {msg.content.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                                            const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                            if (match) {
                                                const url = match[2];
                                                return (
                                                    <a
                                                        key={i}
                                                        href={url}
                                                        onClick={(e) => handleLinkClick(e, url)}
                                                        className="text-golden-yellow underline font-bold hover:text-white transition-colors"
                                                        target={url.startsWith('http') ? '_blank' : undefined}
                                                        rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    >
                                                        {match[1]}
                                                    </a>
                                                );
                                            }
                                            return part;
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Quick Suggestions */}
                        {showSuggestions && messages.length === 1 && (
                            <div className="space-y-2 animate-fade-in-down">
                                <p className="text-xs text-slate-500 font-medium px-1">Quick questions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {QUICK_QUESTIONS.map((q, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleSend(q)}
                                            className="px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-[#2D5A87] hover:to-[#1B4F72] hover:text-white text-slate-700 rounded-full text-xs font-medium transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-md"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white p-4 rounded-2xl rounded-bl-sm shadow-sm border border-slate-100">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 bg-[#2D5A87] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2.5 h-2.5 bg-[#2D5A87] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2.5 h-2.5 bg-[#2D5A87] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t-2 border-slate-100">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about tours, bikes, pricing..."
                                className="flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent text-sm transition-all"
                            />
                            <button
                                onClick={() => handleSend()}
                                disabled={!input.trim()}
                                className="bg-gradient-to-r from-[#2D5A87] to-[#1B4F72] text-white p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}