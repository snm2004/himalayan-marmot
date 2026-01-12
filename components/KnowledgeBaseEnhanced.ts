import { KNOWLEDGE_BASE, KBEntry } from './KnowledgeBase';

export interface EnhancedResponse {
    answer: string;
    links?: Array<{ text: string; url: string }>;
}

// Page-specific context
const PAGE_CONTEXT: Record<string, string> = {
    '/': 'home page',
    '/tours': 'tours page',
    '/booking': 'booking page',
    '/contact': 'contact page',
    '/safety': 'safety page',
    '/blogs': 'blogs page',
    '/festivals': 'festivals page',
    '/journey-in-frames': 'journey in frames page'
};

// Link mappings for different topics
const TOPIC_LINKS: Record<string, Array<{ text: string; url: string }>> = {
    'packages': [
        { text: '📦 View All Tours', url: '/tours' },
        { text: '💰 Book Now', url: '/booking' }
    ],
    'booking': [
        { text: '📝 Start Booking', url: '/booking' },
        { text: '📞 Contact Us', url: '/contact' }
    ],
    'safety': [
        { text: '🏥 Safety Protocols', url: '/safety' },
        { text: '📋 Preparation Guide', url: '/blogs' }
    ],
    'contact': [
        { text: '📞 Contact Page', url: '/contact' },
        { text: '💬 WhatsApp', url: 'https://wa.me/916006114260' }
    ],
    'blogs': [
        { text: '📚 Read Our Blogs', url: '/blogs' },
        { text: '🎉 Festivals Guide', url: '/festivals' }
    ],
    'photos': [
        { text: '📸 Journey in Frames', url: '/journey-in-frames' },
        { text: '🏔️ View Gallery', url: '/#packages' }
    ]
};

export const findAnswerWithContext = (
    query: string,
    conversationHistory: string[],
    currentPage: string
): EnhancedResponse => {
    const lowerQuery = query.toLowerCase();
    
    // Check for context-dependent queries
    if (conversationHistory.length > 0) {
        const lastQuery = conversationHistory[conversationHistory.length - 1].toLowerCase();
        
        // Handle follow-up questions
        if (lowerQuery.includes('more') || lowerQuery.includes('tell me') || lowerQuery.includes('describe')) {
            // Check what the last topic was about
            if (lastQuery.includes('price') || lastQuery.includes('cost')) {
                return {
                    answer: "Here's more detail on pricing:\n\n💰 **Dual Riding** (2 people, 1 bike):\n• Most affordable option\n• Both get accommodation & meals\n• Perfect for couples/friends\n\n💰 **Solo Riding** (1 person, 1 bike):\n• +₹6,000 from dual price\n• Complete control\n• Your own pace\n\n🏍️ **Bike Options**:\n• Himalayan 411cc: Base price\n• Himalayan 450cc: +₹3,000-4,000\n\n✅ **What's Included**:\n• Bike, fuel, accommodation\n• Breakfast & dinner\n• All permits & safety equipment\n• Professional guide & mechanic",
                    links: TOPIC_LINKS['packages']
                };
            }
            
            if (lastQuery.includes('bike') || lastQuery.includes('motorcycle')) {
                return {
                    answer: "Here's detailed bike information:\n\n🏍️ **Himalayan 411cc**:\n• Engine: 411cc Oil Cooled\n• Power: 24.3 BHP\n• Weight: 199 kg\n• Seat Height: 800mm\n• Best for: Reliability & stability\n• Price: Base package price\n\n🏍️ **Himalayan 450cc**:\n• Engine: 452cc Liquid Cooled\n• Power: 40 BHP\n• Weight: 196 kg (lighter!)\n• Seat Height: 825mm\n• Best for: Power & performance\n• Price: +₹3,000-4,000\n\n💡 **Recommendation**:\n• Beginners: 411cc\n• Experienced: 450cc\n• Short riders (<5'5\"): 411cc",
                    links: TOPIC_LINKS['packages']
                };
            }
            
            if (lastQuery.includes('package') || lastQuery.includes('tour')) {
                return {
                    answer: "Let me provide more package details:\n\n📦 **By Duration**:\n• 6-7 days: Local expeditions (Leh-based)\n• 8 days: Balanced adventure\n• 11-12 days: Grand circuits\n\n📦 **By Difficulty**:\n• Easy: Land of High Passes, Turtuk Valley\n• Moderate: Ride to Heaven, Manali circuits\n• Difficult: Zanskar to Umling La\n\n📦 **By Budget**:\n• ₹18-26k: Local tours\n• ₹36-44k: Complete circuits\n\n📦 **By Interest**:\n• Culture: Turtuk Valley\n• Adventure: Zanskar\n• Scenic: Ride to Heaven\n• Complete: Manali circuits",
                    links: TOPIC_LINKS['packages']
                };
            }
        }
        
        // Handle affirmative responses
        if (lowerQuery === 'yes' || lowerQuery === 'yeah' || lowerQuery === 'sure' || lowerQuery === 'ok') {
            return {
                answer: "Great! What would you like to know more about?\n\n💡 **Popular Topics**:\n• Specific package details\n• Bike specifications\n• Booking process\n• Safety measures\n• Best time to visit\n• What to pack\n\nJust ask your question!",
                links: TOPIC_LINKS['packages']
            };
        }
    }
    
    // Add page context to response
    const pageContext = PAGE_CONTEXT[currentPage] || '';
    let contextNote = '';
    
    if (currentPage === '/tours') {
        contextNote = "\n\n💡 You're on the tours page - scroll down to see all packages!";
    } else if (currentPage === '/booking') {
        contextNote = "\n\n💡 You're on the booking page - ready to reserve your slot!";
    } else if (currentPage === '/contact') {
        contextNote = "\n\n💡 You're on the contact page - feel free to reach out directly!";
    }
    
    // Find answer from knowledge base
    const matches = KNOWLEDGE_BASE.map(entry => {
        const matchCount = entry.keywords.reduce((count, keyword) => {
            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
            return regex.test(lowerQuery) ? count + 1 : count;
        }, 0);

        const score = matchCount > 0 ? matchCount + (entry.priority || 0) : 0;
        return { ...entry, score };
    });

    matches.sort((a, b) => b.score - a.score);

    if (matches.length > 0 && matches[0].score > 0) {
        const answer = matches[0].answer + contextNote;
        
        // Determine relevant links based on query
        let links: Array<{ text: string; url: string }> | undefined;
        
        if (lowerQuery.includes('package') || lowerQuery.includes('tour') || lowerQuery.includes('price')) {
            links = TOPIC_LINKS['packages'];
        } else if (lowerQuery.includes('book') || lowerQuery.includes('reserve') || lowerQuery.includes('payment')) {
            links = TOPIC_LINKS['booking'];
        } else if (lowerQuery.includes('safety') || lowerQuery.includes('health') || lowerQuery.includes('ams')) {
            links = TOPIC_LINKS['safety'];
        } else if (lowerQuery.includes('contact') || lowerQuery.includes('call') || lowerQuery.includes('whatsapp')) {
            links = TOPIC_LINKS['contact'];
        } else if (lowerQuery.includes('blog') || lowerQuery.includes('guide') || lowerQuery.includes('festival')) {
            links = TOPIC_LINKS['blogs'];
        } else if (lowerQuery.includes('photo') || lowerQuery.includes('picture') || lowerQuery.includes('gallery')) {
            links = TOPIC_LINKS['photos'];
        }
        
        return { answer, links };
    }

    return {
        answer: "I'm not 100% sure about that specific detail, but I can connect you with our team. Call us at +91 6006114260 or click the WhatsApp button for instant help! 🏍️" + contextNote,
        links: TOPIC_LINKS['contact']
    };
};