import React, { useState, useRef, useEffect } from 'react';
import { X, Send } from 'lucide-react';
import { findAnswer } from './KnowledgeBase';
import { TOUR_PACKAGES } from '../constants';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const QUICK_QUESTIONS = [
    '🤖 Plan my trip',
    '📦 Show me tour packages',
    '💰 What are the prices?',
    '🏍️ Which bikes are available?',
    '📅 Best time to visit?'
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

    // AI PLANNER STATE
    const [plannerStep, setPlannerStep] = useState(0);
    // 0: Off, 1: Duration, 2: Style, 3: Completed
    const [plannerData, setPlannerData] = useState({ duration: '', style: '' });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Context mapping for page awareness
    const PAGE_CONTEXT: Record<string, string> = {
        '/': "You are on the **Home Page** of Himalayan Marmot. From here, you can browse all our [Expeditions](/tours), read our [Blogs](/blogs), or check our [Safety Standards](/safety).",
        '/tours': "You are currently viewing all our tour packages! We have 8 curated expeditions ranging from 6 to 12 days. Need help choosing one?",
        '/booking': "Ready to start your adventure? You can secure your slot with just ₹5,000 advance payment. Let me know if you need bank details!",
        '/contact': "Need to talk to us directly? You can find our phone numbers, email, and office location here. We are available 9 AM - 8 PM.",
        '/safety': "Safety is our #1 priority. On this page, you can read about our oxygen support, medical kits, and expert Road Captains.",
        '/blogs': "Welcome to our Travel Blog! Here you'll find expert guides on packing, best time to visit, and cultural stories.",
        '/journey-in-frames': "This is our photo gallery featuring real moments from our past expeditions. See what the adventure looks like!",
        '/payments': "Here you can see our payment options. We accept UPI and Bank Transfers.",
        '/terms': "Please read our Terms & Conditions carefully regarding cancellations and refunds.",
        '/festivals': "Ladakh's festivals are colorful and vibrant! Check dates here to align your trip with a cultural event.",
        '/packing-list': "This is our smart packing tool. Select your month and duration to get a custom checklist!"
    };

    // Detect page changes and add context message
    useEffect(() => {
        if (location.pathname === '/' && messages.length <= 1) return;
        const contextMsg = PAGE_CONTEXT[location.pathname];
        const lastMsg = messages[messages.length - 1];
        if (contextMsg && lastMsg?.content !== `📍 **Page Info**: ${contextMsg}`) {
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
        setConversationHistory([...conversationHistory, messageText]);

        // --- AI PLANNER LOGIC ---
        if (plannerStep > 0 || messageText.toLowerCase().includes('plan my trip')) {
            handlePlannerSteps(messageText);
            return;
        }

        // --- STANDARD LOGIC ---
        const lowerText = messageText.toLowerCase();

        // Page Context Query
        if (lowerText.includes('which page') || lowerText.includes('where am i')) {
            if (location.pathname.startsWith('/package/')) {
                const pkgId = location.pathname.split('/')[2];
                const pkg = TOUR_PACKAGES.find(p => p.id === pkgId);
                if (pkg) {
                    setMessages(prev => [...prev, {
                        role: 'assistant',
                        content: `🏔️ **Current Expedition**: ${pkg.title}\n\n• **Duration**: ${pkg.duration}\n• **Price**: Starts ${pkg.startingPrice}\n• **Highlights**: ${pkg.highlights.join(', ')}\n\nWould you like to book this tour?`
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
            const answer = findAnswer(messageText);
            setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
            setIsLoading(false);
        }, 600);
    };

    const handlePlannerSteps = (userInput: string) => {
        const lowerInput = userInput.toLowerCase();

        // START
        if (plannerStep === 0 || lowerInput.includes('plan my trip')) {
            setPlannerStep(1);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "🤖 **AI Adventure Planner activated!**\n\nI'll ask you 2 quick questions to find your perfect ride.\n\n**Q1:** How many days do you have for this trip?\n(Reply: *Short* (<7 days), *Standard* (8-10 days), or *Long* (12+ days))"
            }]);
            setIsLoading(false);
            return;
        }

        // STEP 1: DURATION
        if (plannerStep === 1) {
            let duration = '';
            if (lowerInput.includes('short') || lowerInput.includes('7') || lowerInput.includes('less')) duration = 'short';
            else if (lowerInput.includes('standard') || lowerInput.includes('8') || lowerInput.includes('10')) duration = 'standard';
            else if (lowerInput.includes('long') || lowerInput.includes('12') || lowerInput.includes('more')) duration = 'long';
            else {
                setMessages(prev => [...prev, { role: 'assistant', content: "I didn't quite catch that. Please assume roughly: **Short**, **Standard**, or **Long**?" }]);
                setIsLoading(false);
                return;
            }

            setPlannerData(prev => ({ ...prev, duration }));
            setPlannerStep(2);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "Got it. ⏱️\n\n**Q2:** What's your riding style?\n\n• **Comfort**: Paved roads, comfortable hotels, relaxed pace.\n• **Standard**: Mix of everything, some off-road, camping.\n• **Extreme**: Remote passes, rough terrain, pure adventure (Zanskar/Umling La)."
            }]);
            setIsLoading(false);
            return;
        }

        // STEP 2: STYLE & RECOMMENDATION
        if (plannerStep === 2) {
            let style = 'standard';
            if (lowerInput.includes('comfort') || lowerInput.includes('paved') || lowerInput.includes('hotel')) style = 'comfort';
            else if (lowerInput.includes('extreme') || lowerInput.includes('hard') || lowerInput.includes('remote')) style = 'extreme';

            // RECOMMENDATION ENGINE
            let recommendedPkg = '';
            let reason = '';

            const { duration } = plannerData; // accessing previous state + current style logic

            if (style === 'extreme') {
                // Extreme preferences usually map to Zanskar or Manali-Leh-Srinagar
                recommendedPkg = 'zanskar-umling-la';
                reason = "You crave the unknown. Zanskar & Umling La offers the most challenging and rewarding terrain.";
            } else if (duration === 'short') {
                recommendedPkg = 'ladakh-land-of-high-passes';
                reason = "It packs the best of Leh into a crisp 6-day itinerary without exhausting you.";
            } else if (duration === 'long') {
                recommendedPkg = 'manali-veh-srinagar'; // Assuming this exists or falls back
                if (!TOUR_PACKAGES.find(p => p.id === recommendedPkg)) recommendedPkg = 'manali-ladakh-manali';
                reason = "With 12+ days, you can experience the complete transition from Green Himalayas to Cold Desert.";
            } else {
                // Standard duration + Standard/Comfort style
                recommendedPkg = 'nubra-pangong-odyssey';
                // Fallback check
                if (!TOUR_PACKAGES.find(p => p.id === recommendedPkg)) recommendedPkg = 'ladakh-land-of-high-passes';
                reason = "It's the perfect balance of famous sights like Pangong Tso and comfortable riding days.";
            }

            // Find actual package object
            const pkg = TOUR_PACKAGES.find(p => p.id === recommendedPkg) || TOUR_PACKAGES[0];

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `🎉 **I found your perfect match!**\n\n**[${pkg.title}](/package/${pkg.id})**\n\n**Why?** ${reason}\n\n• **Duration:** ${pkg.duration}\n• **Starts:** ${pkg.startingPrice}\n\n[Click here to view itinerary](/package/${pkg.id})`
            }]);

            setPlannerStep(0); // Reset or Keep active? Reset for now.
            setIsLoading(false);
        }
    };

    const clearHistory = () => {
        setMessages([{
            role: 'assistant',
            content: 'Julley! 🦫 Welcome to Himalayan Marmot. How can I help you plan your Ladakh adventure today?'
        }]);
        setConversationHistory([]);
        setShowSuggestions(true);
        setPlannerStep(0);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        if (url.startsWith('/')) {
            e.preventDefault();
            navigate(url);
            // setIsOpen(false); // Keep open so they can ask more if they want? Or close. Let's keep open.
        }
    };

    return (
        <>
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="chat-float"
                    aria-label="Open chat support"
                >
                    🦫
                </button>
            )}

            {isOpen && (
                <div className="fixed bottom-4 right-4 w-[90vw] max-w-[420px] h-[650px] max-h-[85vh] bg-gradient-to-b from-slate-50 to-white rounded-3xl shadow-2xl flex flex-col z-[999999] border-2 border-slate-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#1B4F72] via-[#2D5A87] to-[#1B4F72] text-white p-5 flex items-center justify-between relative overflow-hidden">
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-12 h-12 bg-gradient-to-br from-white to-slate-100 rounded-full flex items-center justify-center text-3xl shadow-lg ring-2 ring-white/30">
                                🦫
                            </div>
                            <div>
                                <h3 className="font-oswald font-bold text-lg tracking-wide uppercase">Himalayan Marmot</h3>
                                <p className="text-xs opacity-90 flex items-center gap-1 font-roboto">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    AI Guide {plannerStep > 0 && '(Planning Mode)'}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2 relative z-10">
                            {messages.length > 1 && (
                                <button onClick={clearHistory} className="text-white hover:bg-white/20 rounded-full p-2 transition text-xs" title="Reset">🗑️</button>
                            )}
                            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded-full p-2 transition"><X size={22} /></button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl ${msg.role === 'user'
                                    ? 'bg-gradient-to-br from-[#2D5A87] to-[#1B4F72] text-white rounded-br-sm shadow-md'
                                    : 'bg-white text-slate-800 rounded-bl-sm shadow-sm border border-slate-100'
                                    }`}>
                                    <p className="text-sm whitespace-pre-line leading-relaxed">
                                        {msg.content.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                                            const match = part.match(/\[(.*?)\]\((.*?)\)/);
                                            if (match) {
                                                const url = match[2];
                                                return <a key={i} href={url} onClick={(e) => handleLinkClick(e, url)} className="text-golden-yellow underline font-bold hover:text-white transition-colors">{match[1]}</a>;
                                            }
                                            return part;
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {showSuggestions && messages.length === 1 && (
                            <div className="space-y-2 animate-fade-in-down">
                                <p className="text-xs text-slate-500 font-medium px-1">Quick actions:</p>
                                <div className="flex flex-wrap gap-2">
                                    {QUICK_QUESTIONS.map((q, idx) => (
                                        <button key={idx} onClick={() => handleSend(q)} className="px-3 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-[#2D5A87] hover:to-[#1B4F72] hover:text-white text-slate-700 rounded-full text-xs font-medium transition-all duration-300 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-md">
                                            {q}
                                        </button>
                                    ))}
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
                                placeholder={plannerStep === 0 ? "Ask about tours..." : "Type your answer..."}
                                className="flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2D5A87] focus:border-transparent text-sm transition-all"
                            />
                            <button onClick={() => handleSend()} disabled={!input.trim()} className="bg-gradient-to-r from-[#2D5A87] to-[#1B4F72] text-white p-3 rounded-full hover:shadow-lg transition-all disabled:opacity-50">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}