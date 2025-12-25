import { TOUR_PACKAGES, CANCELLATION_POLICIES, BANK_DETAILS, COMPANY_NAME, FOUNDER_NAME, CONTACT_NUMBERS, EMAIL, ADDRESS_MAIN, COMMON_INCLUSIONS, COMMON_EXCLUSIONS } from '../constants';

export interface ChatResponse {
    text: string;
    quickReplies?: string[];
}

// Helper function to find tours by keyword
const findToursByKeyword = (keyword: string): typeof TOUR_PACKAGES => {
    const lowerKeyword = keyword.toLowerCase();
    return TOUR_PACKAGES.filter(tour =>
        tour.title.toLowerCase().includes(lowerKeyword) ||
        tour.highlights.some(h => h.toLowerCase().includes(lowerKeyword)) ||
        tour.id.includes(lowerKeyword)
    );
};

// Helper function to find tours by duration
const findToursByDuration = (days: number): typeof TOUR_PACKAGES => {
    return TOUR_PACKAGES.filter(tour => {
        const duration = parseInt(tour.duration.split('D')[0]);
        return duration === days || duration === days - 1 || duration === days + 1;
    });
};

// Pattern matching function
export const getChatbotResponse = (userMessage: string): ChatResponse => {
    const msg = userMessage.toLowerCase().trim();

    // Greeting patterns
    if (/^(hi|hello|hey|julley|namaste)/i.test(msg)) {
        return {
            text: "Julley! 🏔️ Welcome to Himalayan Marmot! I can help you with:\n\n• Tour packages & itineraries\n• Pricing & bike options\n• Booking & cancellation policies\n• Best time to visit\n• Contact information\n\nWhat would you like to know?",
            quickReplies: ["Show all tours", "Pricing info", "Contact details", "Best time to visit"]
        };
    }

    // Tour listing
    if (/show.*tours|list.*tours|what tours|available tours|all tours/i.test(msg)) {
        const tourList = TOUR_PACKAGES.map((tour, idx) =>
            `${idx + 1}. **${tour.title}** (${tour.duration}) - Starting from ${tour.startingPrice}`
        ).join('\n\n');

        return {
            text: `Here are all our Ladakh bike expeditions:\n\n${tourList}\n\nWhich tour interests you?`,
            quickReplies: ["Pangong tour", "Turtuk tour", "Umling La tour", "Manali tours"]
        };
    }

    // Specific tour queries - Pangong
    if (/pangong/i.test(msg)) {
        const tour = TOUR_PACKAGES.find(t => t.id === 'pangong-tso-special');
        if (tour) {
            return {
                text: `🏔️ **${tour.title}** (${tour.duration})\n\n**Highlights:**\n${tour.highlights.map(h => `• ${h}`).join('\n')}\n\n**Pricing:**\n${tour.priceTiers.map(t => `• ${t.bike}\n  - Dual Rider: ${t.dual}\n  - Solo Rider: ${t.solo}`).join('\n\n')}\n\nInterested in booking?`,
                quickReplies: ["Book this tour", "Show itinerary", "Other tours", "Contact us"]
            };
        }
    }

    // Specific tour queries - Turtuk
    if (/turtuk/i.test(msg)) {
        const tour = TOUR_PACKAGES.find(t => t.id === 'turtuk-trail');
        if (tour) {
            return {
                text: `🏔️ **${tour.title}** (${tour.duration})\n\n**Highlights:**\n${tour.highlights.map(h => `• ${h}`).join('\n')}\n\n**Pricing:**\n${tour.priceTiers.map(t => `• ${t.bike}\n  - Dual Rider: ${t.dual}\n  - Solo Rider: ${t.solo}`).join('\n\n')}\n\nThis includes a visit to Turtuk, the last village of India!`,
                quickReplies: ["Book this tour", "Show itinerary", "Other tours"]
            };
        }
    }

    // Specific tour queries - Umling La
    if (/umling|highest/i.test(msg)) {
        const tour = TOUR_PACKAGES.find(t => t.id === 'umling-la-challenge');
        if (tour) {
            return {
                text: `🏔️ **${tour.title}** (${tour.duration})\n\n**Highlights:**\n${tour.highlights.map(h => `• ${h}`).join('\n')}\n\n**Pricing:**\n${tour.priceTiers.map(t => `• ${t.bike}\n  - Dual Rider: ${t.dual}\n  - Solo Rider: ${t.solo}`).join('\n\n')}\n\nConquer the world's highest motorable road!`,
                quickReplies: ["Book this tour", "Show itinerary", "Other tours"]
            };
        }
    }

    // Manali tours
    if (/manali/i.test(msg)) {
        const manaliTours = TOUR_PACKAGES.filter(t => t.title.toLowerCase().includes('manali'));
        if (manaliTours.length > 0) {
            const tourList = manaliTours.map((tour, idx) =>
                `${idx + 1}. **${tour.title}** (${tour.duration}) - ${tour.startingPrice}`
            ).join('\n\n');

            return {
                text: `We have ${manaliTours.length} tours involving Manali:\n\n${tourList}\n\nWhich one interests you?`,
                quickReplies: manaliTours.slice(0, 3).map(t => t.title.split(' ').slice(0, 3).join(' '))
            };
        }
    }

    // Duration-based queries
    const durationMatch = msg.match(/(\d+)\s*(day|days|d)/i);
    if (durationMatch && /how long|duration|days/i.test(msg)) {
        const days = parseInt(durationMatch[1]);
        const tours = findToursByDuration(days);

        if (tours.length > 0) {
            const tourList = tours.map(t => `• ${t.title} (${t.duration}) - ${t.startingPrice}`).join('\n');
            return {
                text: `Here are tours around ${days} days:\n\n${tourList}\n\nWhich one would you like to know more about?`,
                quickReplies: tours.slice(0, 4).map(t => t.title.split(' ').slice(0, 2).join(' '))
            };
        }
    }

    // I have X days
    const haveMatch = msg.match(/i have (\d+) days?/i);
    if (haveMatch) {
        const days = parseInt(haveMatch[1]);
        const tours = findToursByDuration(days);

        if (tours.length > 0) {
            const tourList = tours.map(t => `• ${t.title} (${t.duration})`).join('\n');
            return {
                text: `Perfect! For ${days} days, I recommend:\n\n${tourList}\n\nWould you like pricing details?`,
                quickReplies: tours.slice(0, 3).map(t => "Price for " + t.title.split(' ').slice(0, 2).join(' '))
            };
        } else {
            return {
                text: `For ${days} days, our closest options are:\n\n${TOUR_PACKAGES.slice(0, 3).map(t => `• ${t.title} (${t.duration})`).join('\n')}\n\nWould any of these work for you?`,
                quickReplies: ["Show all tours", "Contact us"]
            };
        }
    }

    // Pricing queries
    if (/price|cost|how much|pricing/i.test(msg)) {
        if (/all|every|list/i.test(msg)) {
            const priceList = TOUR_PACKAGES.map(t =>
                `**${t.title}** (${t.duration}): Starting from ${t.startingPrice}`
            ).join('\n\n');

            return {
                text: `Here's our complete pricing:\n\n${priceList}\n\n*Note: Prices vary by bike model (411cc vs 450cc) and rider type (dual/solo)*`,
                quickReplies: ["Bike options", "What's included?", "Booking process"]
            };
        } else {
            return {
                text: `Our tours start from ₹18,550 for the 6D/5N Pangong Tso Special.\n\nPricing depends on:\n• Tour duration (6-11 days)\n• Bike model (411cc or 450cc)\n• Rider type (dual or solo)\n\nWhich tour are you interested in?`,
                quickReplies: ["Show all tours", "Cheapest tour", "Longest tour"]
            };
        }
    }

    // Bike/Fleet queries
    if (/bike|royal enfield|himalayan|fleet|450|411/i.test(msg)) {
        return {
            text: `🏍️ **Our Fleet:**\n\n• **RE Himalayan 411cc BS6**\n  24.3 bhp, Long-travel suspension\n\n• **RE Himalayan 450cc BS6**\n  40 bhp, Enhanced power delivery\n\n**All tours include:**\n• Maintenance & fuel\n• Biker gear (jacket, gloves, knee guards)\n• Professional mechanic on every convoy\n\nWhich bike would you prefer?`,
            quickReplies: ["411cc pricing", "450cc pricing", "Tour packages"]
        };
    }

    // Inclusions queries
    if (/include|included|what.*included|what do i get/i.test(msg)) {
        return {
            text: `✅ **Every tour includes:**\n\n${COMMON_INCLUSIONS.map(inc => `• ${inc}`).join('\n')}\n\n❌ **Not included:**\n\n${COMMON_EXCLUSIONS.map(exc => `• ${exc}`).join('\n')}\n\nAny questions about these?`,
            quickReplies: ["Pricing", "Cancellation policy", "Book a tour"]
        };
    }

    // Cancellation policy
    if (/cancel|refund|cancellation/i.test(msg)) {
        const policyText = CANCELLATION_POLICIES.map(p =>
            `• **${p.period}**: ${p.deduction} deduction`
        ).join('\n');

        return {
            text: `📋 **Cancellation Policy:**\n\n${policyText}\n\n*All cancellations must be sent via email*\n\nNeed to cancel a booking?`,
            quickReplies: ["Contact email", "Other tours", "Book a tour"]
        };
    }

    // Contact information
    if (/contact|phone|email|whatsapp|call|reach/i.test(msg)) {
        return {
            text: `📞 **Contact ${COMPANY_NAME}:**\n\n**Founder:** ${FOUNDER_NAME}\n\n**Phone/WhatsApp:**\n${CONTACT_NUMBERS.map(num => `• ${num}`).join('\n')}\n\n**Email:** ${EMAIL}\n\n**Office:** ${ADDRESS_MAIN}\n\nHow can we help you?`,
            quickReplies: ["Book a tour", "Ask a question", "View tours"]
        };
    }

    // Payment/Bank details
    if (/payment|bank|transfer|account|pay/i.test(msg)) {
        return {
            text: `💳 **Payment Details:**\n\n**Bank:** ${BANK_DETAILS.bank}\n**Account Name:** ${BANK_DETAILS.accountName}\n**Account Number:** ${BANK_DETAILS.accountNo}\n**IFSC Code:** ${BANK_DETAILS.ifsc}\n\nYou can also pay via UPI or online transfer.\n\nReady to book?`,
            quickReplies: ["Booking process", "Contact us", "Tour options"]
        };
    }

    // Best time to visit
    if (/best time|when to|season|weather|month/i.test(msg)) {
        return {
            text: `🌤️ **Best Time to Visit Ladakh:**\n\n**Peak Season:** May to September\n• Roads are open\n• Pleasant weather (15-25°C)\n• All passes accessible\n\n**Best Months:**\n• June-July: Perfect for all tours\n• August-September: Post-monsoon beauty\n\n**Avoid:** October to April (heavy snow, roads closed)\n\nWhen are you planning to visit?`,
            quickReplies: ["June tours", "July tours", "August tours", "All tours"]
        };
    }

    // Booking process
    if (/how to book|booking|book|reserve/i.test(msg)) {
        return {
            text: `📝 **Booking Process:**\n\n1. Choose your tour from our packages\n2. Select your preferred dates\n3. Contact us via WhatsApp or fill the booking form\n4. Pay the booking amount\n5. Receive confirmation & prepare for adventure!\n\n**Need help choosing a tour?**`,
            quickReplies: ["Show all tours", "Contact us", "Pricing info"]
        };
    }

    // Group/Custom tours
    if (/group|custom|private|corporate/i.test(msg)) {
        return {
            text: `👥 **Custom Group Tours:**\n\nWe tailor tours for groups of 10+ riders!\nPerfect for:\n• Corporate retreats\n• Private club rides\n• Friends & family groups\n\n📱 Contact us on WhatsApp for custom packages!\n\nInterested in a group tour?`,
            quickReplies: ["Contact WhatsApp", "View regular tours", "Pricing"]
        };
    }

    // Safety queries
    if (/safe|safety|oxygen|emergency|medical/i.test(msg)) {
        return {
            text: `🛡️ **Safety Measures:**\n\n• Oxygen cylinders for high altitude\n• Backup car for emergencies\n• Professional mechanic on every convoy\n• Experienced local guides\n• First-aid equipped\n• 24/7 support\n\n**Founded by local Ladakhi ${FOUNDER_NAME}** - we know these mountains!\n\nFeel safe to ride with us?`,
            quickReplies: ["Book a tour", "Tour packages", "Contact us"]
        };
    }

    // Thank you
    if (/thank|thanks|appreciate/i.test(msg)) {
        return {
            text: "You're welcome! 😊 If you have any more questions about our Ladakh bike tours, feel free to ask. Julley! 🏔️",
            quickReplies: ["View tours", "Contact info", "Book now"]
        };
    }

    // Default fallback response
    return {
        text: "I can help you with information about:\n\n• **Tour Packages** - Pangong, Turtuk, Umling La, Manali circuits\n• **Pricing** - Tour costs and bike options\n• **Booking** - How to reserve your slot\n• **Policies** - Cancellations and inclusions\n• **Contact** - Phone, email, WhatsApp\n• **Best Time** - When to visit Ladakh\n\nWhat would you like to know?",
        quickReplies: ["Show all tours", "Pricing info", "Contact details", "Best time to visit"]
    };
};
