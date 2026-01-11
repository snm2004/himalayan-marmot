export interface KBEntry {
    keywords: string[];
    answer: string;
    priority?: number; // Higher number = higher priority match
}

export const KNOWLEDGE_BASE: KBEntry[] = [
    // --- GENERAL WELCOME & GREETINGS ---
    {
        keywords: ['hi', 'hello', 'hey', 'start', 'greetings', 'julley'],
        answer: "Julley! 🦫 Welcome to Himalayan Marmot. I'm your digital marshal. Ask me about our 2026 expeditions, bike fleet, or travel tips!",
        priority: 10
    },
    {
        keywords: ['who are you', 'what do you do', 'bot', 'human'],
        answer: "I'm the Himalayan Marmot AI assistant, born in the mountains! 🏔️ I can help you plan your dream medical-grade safe motorcycle expedition in Ladakh.",
        priority: 5
    },

    // ==========================================
    // 📦 PACKAGES & PRICING (HIGH LEVEL)
    // ==========================================
    {
        keywords: ['price', 'cost', 'rates', 'how much', 'expensive'],
        answer: "Our expeditions remain at 2024 prices! 💰\n\n• **Ladakh: Land of High Passes (6D/5N)**: ₹18,550\n• **Leh-Hunder-Turtuk (7D/6N)**: ₹20,499\n• **Ride to Heaven (8D/7N)**: ₹22,500\n• **Manali-Ladakh-Manali (11D/10N)**: ₹29,999\n• **Zanskar to Umling La (12D/11N)**: ₹33,499\n• **Srinagar-Leh-Manali (12D/11N)**: ₹33,499",
        priority: 9
    },
    {
        keywords: ['package', 'tour', 'expedition', 'options', 'list'],
        answer: "We offer 6 curated Royal Enfield expeditions:\n\n1. **Land of High Passes** (6 Days) - Best for beginners.\n2. **Turtuk Valley** (7 Days) - Cultural depth.\n3. **Ride to Heaven** (8 Days) - The perfect balance.\n4. **Manali Circuit** (11 Days) - The classic adventure.\n5. **Zanskar & Umling La** (12 Days) - For the brave.\n6. **Srinagar-Leh-Manali** (12 Days) - The full Kashmir to Ladakh experience.",
        priority: 9
    },

    // ==========================================
    // 📅 DAY-WISE ITINERARIES (DETAILED)
    // ==========================================

    // --- Land of High Passes (6 Days) ---
    {
        keywords: ['day 1 high passes', 'day 1', 'landing'],
        answer: "🏔️ **Day 1: Arrival in Leh**\n• Pick up from KBR Airport.\n• Transfer to Hotel.\n• **Strict Rest Day** for acclimatization (AMS prevention).\n• Evening: Interaction with Road Captain & Briefing."
    },
    {
        keywords: ['day 2 high passes', 'day 2', 'local sight', 'hall of fame'],
        answer: "🏔️ **Day 2: Leh Local Exploration**\n• Visit **Hall of Fame** (War Memorial).\n• **Magnetic Hill** & **Sangam** (Confluence of Zanskar & Indus).\n• **Gurudwara Pathar Sahib**.\n• Test ride of your Royal Enfield bikes! 🏍️"
    },
    {
        keywords: ['day 3 high passes', 'day 3', 'nubra', 'khardung'],
        answer: "🏔️ **Day 3: Leh to Nubra Valley**\n• Ride to the top of the world: **Khardung La** (17,982 ft).\n• Descend into the white sands of **Nubra Valley**.\n• Stay at a premium campsite in Hunder."
    },
    {
        keywords: ['day 4 high passes', 'day 4', 'pangong', 'shyok'],
        answer: "🏔️ **Day 4: Nubra to Pangong Lake**\n• The toughest leg! Ride via the **Shyok River** route.\n• Off-road patches and water crossings.\n• Arrival at the majestic, color-changing **Pangong Tso** (14,000 ft)."
    },
    {
        keywords: ['day 5 high passes', 'day 5', 'chang la', 'changla'],
        answer: "🏔️ **Day 5: Pangong to Leh**\n• Sunrise at the lake.\n• Ride back via **Chang La Pass** (Third highest motorable road).\n• Visit **Thiksey Monastery** en route.\n• Farewell dinner in Leh."
    },
    {
        keywords: ['day 6 high passes', 'day 6', 'departure'],
        answer: "�️ **Day 6: Departure**\n• Breakfast and transfer to Leh Airport.\n• Fly out with memories of a lifetime! ✈️"
    },

    // --- Ride to Heaven (8 Days) ---
    {
        keywords: ['day 7 heaven', 'hanle', 'star', 'observatory'],
        answer: "⛰️ **Hanle (Ride to Heaven Exclusive)**\n• We ride to **Hanle**, home to the Indian Astronomical Observatory.\n• It is a designated **Dark Sky Reserve**.\n• The galaxy is visible with the naked eye! ✨"
    },

    // ==========================================
    // 🏍️ BIKE SPECS & FLEET
    // ==========================================
    {
        keywords: ['bike', 'motorcycle', 'royal enfield', 'fleet'],
        answer: "We use only the best machinery for the mountains! 🏍️\n\n1. **Himalayan 450cc** (Liquid Cooled)\n2. **Himalayan 411cc** (The Proven Workhorse)\n3. **Classic 350cc Reborn** (Comfort & Style)"
    },
    {
        keywords: ['himalayan 450', '450cc', 'sherpa'],
        answer: "🏍️ **Royal Enfield Himalayan 450**\n• **Engine**: 452cc Liquid Cooled Sherpa\n• **Power**: 40 BHP\n• **Weight**: 196 kg\n• **Seat Height**: 825mm (Adjustable)\n• **Best for**: Experienced riders wanting power."
    },
    {
        keywords: ['himalayan 411', '411cc', 'scram'],
        answer: "🏍️ **Royal Enfield Himalayan 411**\n• **Engine**: 411cc Oil Cooled\n• **Power**: 24 BHP\n• **Weight**: 199 kg\n• **Seat Height**: 800mm\n• **Best for**: Stability and off-road tractor-like torque."
    },
    {
        keywords: ['seat height', 'short rider', 'tall'],
        answer: "📏 **Seat Heights**:\n• **Himalayan 411**: 800mm (Very accessible)\n• **Classic 350**: 805mm\n• **Himalayan 450**: 825mm\n\nIf you are below 5'5\", we recommend the Himalayan 411 or Classic 350."
    },

    // ==========================================
    // 💰 BOOKING & PAYMENTS
    // ==========================================
    {
        keywords: ['book', 'reserve', 'payment', 'pay'],
        answer: "To book your slot:\n1. Click 'Book on WhatsApp'.\n2. Pay **₹5,000 token advance** via UPI/Bank Transfer.\n3. Pay the rest upon arrival in Leh (Cash or Online)."
    },
    {
        keywords: ['google pay', 'gpay', 'phonepe', 'upi'],
        answer: "Yes! We accept all UPI apps (Google Pay, PhonePe, Paytm). We can share the QR code on WhatsApp for your advance payment."
    },
    {
        keywords: ['credit card', 'debit card', 'emi'],
        answer: "We prefer Bank Transfer or UPI for the advance. For the remaining balance in Leh, cash is king (internet can be flaky!), but we do have card machines in the office."
    },

    // ==========================================
    // 🏥 HEALTH & SAFETY
    // ==========================================
    {
        keywords: ['ams', 'sickness', 'altitude', 'headache', 'diamox'],
        answer: "⚠️ **AMS (Acute Mountain Sickness)** is serious.\n• **Rule 1**: Complete rest on Day 1.\n• **Rule 2**: Hydrate (3-4L water).\n• **Meds**: Diamox is common (preventative), but consult your doctor first.\n• **Oxygen**: We carry O2 cylinders in the backup vehicle."
    },
    {
        keywords: ['hospital', 'doctor', 'emergency'],
        answer: "🏥 **Medical Facilities**:\n• Leh has a large district hospital (SNM Hospital).\n• Army hospitals are available at key points (Siachen Base Camp, Hunder).\n• Our Road Captain is First-Aid certified."
    },

    // ==========================================
    // 🎒 GEAR & PREP
    // ==========================================
    {
        keywords: ['gear', 'bring', 'packing', 'list', 'clothes'],
        answer: "🎒 **Packing Essentials**:\n• Thermal innerwear (Top & Bottom)\n• Balaclava & warm gloves\n• Riding Boots (or sturdy trekking shoes)\n• Sunscreen (SPF 50+) & Sunglasses\n• Lip balm & Moisturizer"
    },
    {
        keywords: ['rent', 'rental', 'jacket', 'knee guards'],
        answer: "You can rent riding gear from our Leh office:\n• **Riding Jacket**: ₹300/day\n• **Knee Guards**: ₹100/day\n• **Gloves**: ₹50/day\n• **Gumboots**: ₹50/day"
    },
    {
        keywords: ['sim', 'network', 'phone', 'airtel', 'jio'],
        answer: "📱 **Network in Ladakh**:\n• Only **Postpaid** connections work (J&K mandate).\n• **Airtel & Jio** have the best coverage.\n• **BSNL** works in remote areas.\n• No network at Pangong/Hanle usually (Digital Detox!)."
    },

    // ==========================================
    // 🤝 COMPANY INFO
    // ==========================================
    {
        keywords: ['contact', 'call', 'number', 'email'],
        answer: "📞 **Call/WhatsApp**: +91 6006114260\n📧 **Email**: travel@himalayanmarmot.com\n📍 **Office**: Main Market, Leh"
    },
    {
        keywords: ['reviews', 'trust', 'scam'],
        answer: "We are a **registered** Ladakh-based operator (Local Experts). We prioritize safety and authentic experiences. Check our Google Reviews!"
    },

    // ==========================================
    // 🏔️ MANALI - LADAKH - MANALI (11 Days)
    // ==========================================
    {
        keywords: ['day 1 manali', 'arrival manali'],
        answer: "🌲 **Day 1: Arrival in Manali**\n• Check-in to hotel.\n• Bike allocation & Test Ride.\n• Briefing by Road Captain.\n• Explore Mall Road."
    },
    {
        keywords: ['day 2 manali', 'jispa', 'atal tunnel'],
        answer: "🏍️ **Day 2: Manali to Jispa**\n• Cross the engineering marvel **Atal Tunnel**.\n• Ride along the Chenab River.\n• Overnight in Jispa (Camps/Hotel)."
    },
    {
        keywords: ['day 3 manali', 'sarchu', 'baralacha', 'zing zing'],
        answer: "❄️ **Day 3: Jispa to Sarchu**\n• Pass **Baralacha La** (16,040 ft) & Suraj Tal.\n• Cross Zing Zing Bar.\n• Stay at Sarchu (Windy & Cold!)."
    },
    {
        keywords: ['day 4 manali', 'tanglang', 'more plains'],
        answer: "🏜️ **Day 4: Sarchu to Leh**\n• Ride through the 40km flat **More Plains**.\n• Cross **Tanglang La** (2nd highest pass).\n• Arrival in Leh!"
    },
    {
        keywords: ['day 5 manali', 'leh rest'],
        answer: "🧘 **Day 5: Leh Rest Day**\n• Bike maintenance.\n• Visit Shanti Stupa & Leh Market.\n• Acclimatization."
    },
    {
        keywords: ['day 6 manali', 'nubra manali'],
        answer: "🐫 **Day 6: Leh to Nubra Valley**\n• Cross Khardung La.\n• ATV Ride in Sand Dunes.\n• Double Hump Camels."
    },
    {
        keywords: ['day 7 manali', 'pangong manali'],
        answer: "🌊 **Day 7: Nubra to Pangong Tso**\n• Via Shyok River route.\n• Overnight lakeside camping."
    },
    {
        keywords: ['day 8 manali', 'leh return'],
        answer: "🔙 **Day 8: Pangong to Leh**\n• Return via Chang La.\n• Final shopping in Leh."
    },
    {
        keywords: ['day 9 manali', 'sarchu return'],
        answer: "🏔️ **Day 9: Leh to Sarchu/Jispa**\n• Ride back towards Manali.\n• Overnight at Sarchu or Jispa."
    },
    {
        keywords: ['day 10 manali', 'rohtang'],
        answer: "🌲 **Day 10: Sarchu to Manali**\n• Final leg of the journey.\n• Celebration Dinner in Manali!"
    },
    {
        keywords: ['day 11 manali', 'depart manali'],
        answer: "👋 **Day 11: Departure**\n• Check-out and proceed to bus stand/airport.\n• Trip ends!"
    },

    // ==========================================
    // ❓ GENERAL FAQs
    // ==========================================
    {
        keywords: ['permit', 'ilp', 'inner line', 'pass'],
        answer: "🎫 **Permits**: We handle all Inner Line Permits (ILP) for restricted areas (Nubra, Pangong, Hanle). You just need to provide your ID (Aadhar/Passport)."
    },
    {
        keywords: ['couple', 'pillion', 'two up'],
        answer: "💑 **Couples**: Absolutely! Many couples ride 2-up. We recommend the **Himalayan 450** or **411** for better comfort for the pillion. Backup vehicle is available if the pillion gets tired."
    },
    {
        keywords: ['solo', 'single', 'alone'],
        answer: "🦅 **Solo Riders**: You are never alone! You'll ride in a convoy with 15-20 other riders. It's the best way to make new friends."
    },
    {
        keywords: ['food', 'meal', 'veg', 'non-veg'],
        answer: "🍲 **Food**: We provide breakfast and dinner (Buffet). It's a mix of Indian, Chinese, and Continental. Vegetarian and Egg options are standard; Non-veg depends on location availability."
    },
    {
        keywords: ['alcohol', 'drink', 'beer', 'smoking'],
        answer: "🍺 **Alcohol**: Strictly **not recommended** at high altitudes as it dehydrates you and worsens AMS. Safe to consume in moderation only on the last night in Manali/Leh."
    },
    {
        keywords: ['atm', 'cash', 'money'],
        answer: "🏧 **ATMs**: Leh Main Market has many ATMs. Nubra and Pangong have NO working ATMs. Carry sufficient cash from Leh."
    },
    {
        keywords: ['refund', 'cancel', 'cancellation'],
        answer: "❌ **Cancellation Policy**:\n• >60 days: 10% deduction\n• 30-60 days: 50% deduction\n• <30 days: No refund.\n(Transfer to a friend is allowed!)"
    },

    // Generic Fallbacks
    {
        keywords: ['thank', 'thanks', 'bye', 'goodbye'],
        answer: "You're welcome! Julley!  Hope to see you in the mountains soon."
    }
];

export const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    const matches = KNOWLEDGE_BASE.map(entry => {
        // Count how many keywords match using Regex Word Boundaries
        const matchCount = entry.keywords.reduce((count, keyword) => {
            // Escape special characters in keyword if any (though mostly text here)
            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

            // Look for whole word match
            const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
            return regex.test(lowerQuery) ? count + 1 : count;
        }, 0);

        // Add priority boost only if there's a match
        const score = matchCount > 0 ? matchCount + (entry.priority || 0) : 0;

        return { ...entry, score };
    });

    matches.sort((a, b) => b.score - a.score);

    if (matches.length > 0 && matches[0].score > 0) {
        return matches[0].answer;
    }

    return "I'm not 100% sure about that specific detail, but I can connect you with our Head Marshal. Call us at +91 6006114260 or click the WhatsApp button for instant human help! 🏍️";
};
