export interface KBEntry {
    keywords: string[];
    answer: string;
    priority?: number;
}

export const KNOWLEDGE_BASE: KBEntry[] = [
    // ==========================================
    // GENERAL WELCOME & GREETINGS
    // ==========================================
    // ==========================================
    // GENERAL WELCOME & GREETINGS
    // ==========================================
    {
        keywords: ['hi', 'hello', 'hey', 'start', 'greetings', 'julley', 'namaste'],
        answer: "Julley! 🦫 Welcome to Himalayan Marmot. I'm your digital guide for the ultimate Ladakh motorcycle adventure.\n\n**Quick Actions**:\n• [📦 View Packages](/tours)\n• [📅 Book Now](/booking)\n• [📞 Contact Us](/contact)\n• [🏍️ Our Bikes](/about)\n\nAsk me about our 2026 expeditions, Royal Enfield bikes, safety protocols, or travel tips!",
        priority: 2
    },
    {
        keywords: ['who are you', 'what do you do', 'bot', 'human', 'ai'],
        answer: "I'm the Himalayan Marmot AI assistant, born in the mountains! 🏔️ I can help you plan your dream motorcycle expedition in Ladakh with medical-grade safety and local expertise.",
        priority: 5
    },
    {
        keywords: ['help', 'what can you do', 'assist'],
        answer: "I can help you with:\n\n[📦 Tour Packages](/tours) & pricing\n[🏍️ Bike Specs](/about)\n[📅 Best Time](/blogs)\n[🎒 Packing List](/blogs)\n[🏥 Safety Tips](/safety)\n[💰 Booking](/booking)\n\nJust ask away!",
        priority: 8
    },
    {
        keywords: ['booking', 'book', 'reserve', 'reservation'],
        answer: "**Ready to Book?** 🏍️\n\nClick here to start your adventure: **[Book Now](/booking)**\n\nOr contact us directly:\n• [WhatsApp Us](https://wa.me/916006114260)\n• Call: +91 6006114260\n\nSecure your slot with just ₹5,000 advance!",
        priority: 10
    },
    {
        keywords: ['contact', 'phone', 'email', 'number', 'whatsapp'],
        answer: "**Get in Touch** 📞\n\n• **WhatsApp**: [Chat with Founder](https://wa.me/916006114260)\n• **Call**: +91 6006114260\n• **Email**: himalayanmarmot19@gmail.com\n• **Visit**: [Contact Page](/contact)\n\nWe are available 9 AM - 8 PM IST.",
        priority: 10
    },
    {
        keywords: ['navigation', 'menu', 'go to', 'open', 'show me'],
        answer: "**Where would you like to go?**\n\n• [🏠 Home](/) \n• [📦 Tours](/tours)\n• [📅 Booking](/booking)\n• [📞 Contact](/contact)\n• [🏥 Safety](/safety)\n• [📚 Blogs](/blogs)\n• [📸 Gallery](/journey-in-frames)",
        priority: 8
    },

    // ==========================================
    // LADAKH CULTURE & TRADITIONS
    // ==========================================
    {
        keywords: ['culture', 'cultural', 'tradition', 'traditional', 'customs', 'ladakhi culture', 'local culture', 'about culture', 'tell me about culture', 'ladakh culture', 'cultural heritage', 'heritage'],
        answer: "**Ladakh's Rich Cultural Heritage** 🙏\n\nLadakh is a unique blend of Tibetan Buddhism and ancient traditions:\n\n🕉️ **Buddhist Heritage**:\n• 1000+ year old monasteries\n• Prayer flags everywhere (carrying blessings in wind)\n• Prayer wheels (spin clockwise for good karma)\n• Mani walls (sacred stone carvings)\n\n👥 **People & Language**:\n• Ladakhi language (Tibetan dialect)\n• 'Julley' = Hello/Goodbye/Thank you (most important word!)\n• Warm, hospitable mountain people\n• Strong community bonds\n\n🎭 **Festivals**:\n• Hemis Festival (June-July) - Masked dances\n• Losar (Tibetan New Year)\n• Dosmoche (February) - Evil spirit exorcism\n\n🏛️ **Architecture**:\n• Whitewashed mud-brick houses\n• Flat roofs for drying crops\n• Buddhist stupas at village entrances\n\nOur tours include monastery visits with local guides who share authentic stories!",
        priority: 9
    },
    {
        keywords: ['food', 'cuisine', 'eat', 'eating', 'dish', 'dishes', 'ladakhi food', 'local food', 'traditional food', 'what to eat', 'food in ladakh', 'ladakh food', 'meals', 'dining', 'restaurant'],
        answer: "**Ladakhi Cuisine - Mountain Flavors** 🍜\n\n**Must-Try Traditional Dishes**:\n\n1. **Thukpa** (Noodle Soup)\n   • Hearty Tibetan noodle soup\n   • Perfect for cold mountain weather\n   • Vegetarian or with meat\n\n2. **Momos** (Dumplings)\n   • Steamed or fried dumplings\n   • Filled with vegetables or meat\n   • Served with spicy chutney\n\n3. **Butter Tea (Gur Gur Chai)**\n   • Salted tea with yak butter\n   • High-calorie energy drink\n   • Acquired taste but essential!\n\n4. **Skyu** (Pasta Stew)\n   • Traditional Ladakhi pasta\n   • Thick vegetable stew\n   • Comfort food of the mountains\n\n5. **Tingmo** (Steamed Bread)\n   • Fluffy steamed buns\n   • Eaten with curry or vegetables\n\n6. **Apricot Jam**\n   • Made from local apricots\n   • Sweet and tangy\n   • Available everywhere\n\n🍽️ **Dining Tips**:\n• Most restaurants serve Tibetan, Indian & Chinese\n• Vegetarian options widely available\n• Lunch costs ₹200-400 per meal\n• Try local bakeries for fresh bread\n\n**Our tours include**: Breakfast & Dinner at hotels. Lunch stops at authentic local restaurants!",
        priority: 9
    },
    {
        keywords: ['monastery', 'monasteries', 'gompa', 'temple', 'temples', 'buddhist', 'buddhism', 'monks', 'lama', 'spiritual', 'religious', 'prayer', 'meditation'],
        answer: "**Sacred Monasteries of Ladakh** 🕉️\n\n**Major Monasteries We Visit**:\n\n1. **Thiksey Monastery**\n   • 12-story complex\n   • Stunning Maitreya Buddha statue\n   • Morning prayers at 6 AM (magical!)\n\n2. **Hemis Monastery**\n   • Largest & wealthiest in Ladakh\n   • Famous Hemis Festival (June-July)\n   • Ancient thangkas & artifacts\n\n3. **Diskit Monastery** (Nubra Valley)\n   • 32-meter Maitreya Buddha statue\n   • Panoramic valley views\n   • 14th century foundation\n\n4. **Lamayuru Monastery**\n   • Oldest in Ladakh (11th century)\n   • 'Moonland' landscape\n   • Cave meditation chambers\n\n5. **Alchi Monastery**\n   • UNESCO World Heritage Site\n   • 1000-year-old wall paintings\n   • Unique Indo-Himalayan art\n\n**Monastery Etiquette**:\n✅ Remove shoes before entering\n✅ Walk clockwise around stupas\n✅ Don't point feet at Buddha statues\n✅ Ask before photographing\n✅ Dress modestly\n✅ Maintain silence in prayer halls\n✅ Small donations appreciated\n\n🙏 **Spiritual Experience**:\n• Attend morning prayers (chanting)\n• Spin prayer wheels clockwise\n• Light butter lamps\n• Receive blessings from monks\n\nOur local guides explain the symbolism and stories behind each monastery!",
        priority: 9
    },
    {
        keywords: ['festival', 'festivals', 'celebration', 'celebrations', 'event', 'events', 'hemis', 'losar', 'cultural event', 'local festival'],
        answer: "**Ladakh's Vibrant Festivals** 🎭\n\n**Major Festivals**:\n\n1. **Hemis Festival** (June-July)\n   • Biggest monastery festival\n   • Colorful masked dances (Cham)\n   • Celebrates Guru Padmasambhava\n   • Once every 12 years: Sacred thangka display\n   • Best time to visit for culture!\n\n2. **Losar** (Tibetan New Year - Feb/March)\n   • 15-day celebration\n   • Traditional dances & music\n   • Special foods & butter sculptures\n   • Family gatherings\n\n3. **Dosmoche** (February)\n   • Exorcism of evil spirits\n   • Ritual dances at Leh Palace\n   • Torma (ritual cake) offerings\n\n4. **Ladakh Festival** (September)\n   • Government-organized cultural fest\n   • Traditional music & dance\n   • Archery competitions\n   • Polo matches\n   • Handicraft exhibitions\n\n5. **Phyang Tsedup** (July-August)\n   • Sacred mask dances\n   • Oracle predictions\n   • Colorful costumes\n\n**Festival Tips**:\n• Book tours 3-4 months in advance\n• Accommodation fills up quickly\n• Prices slightly higher during festivals\n• Amazing photo opportunities\n• Authentic cultural immersion\n\nWant to time your tour with a festival? Contact us for special festival packages!",
        priority: 8
    },
    {
        keywords: ['local people', 'ladakhi people', 'locals', 'people of ladakh', 'community', 'villagers', 'native', 'indigenous', 'tribes'],
        answer: "**The Warm People of Ladakh** 👥\n\n**Ladakhi Character**:\n• Incredibly hospitable & friendly\n• 'Julley' culture - always smiling\n• Strong Buddhist values\n• Resilient mountain people\n• Multilingual (Ladakhi, Hindi, English)\n\n**Traditional Lifestyle**:\n🏡 **Villages**:\n• Mud-brick houses with flat roofs\n• Solar panels everywhere\n• Community water channels\n• Shared agricultural work\n\n👨‍🌾 **Occupations**:\n• Agriculture (barley, wheat, peas)\n• Animal husbandry (yaks, dzos, sheep)\n• Tourism (growing sector)\n• Handicrafts (pashmina, carpets)\n\n👗 **Traditional Dress**:\n• **Goncha** (long woolen robe)\n• **Perak** (women's turquoise headdress)\n• **Tibi** (ceremonial hat)\n• Worn during festivals\n\n🎵 **Arts & Crafts**:\n• Thangka paintings\n• Wood carving\n• Pashmina weaving\n• Silver jewelry\n• Traditional music & dance\n\n**Our Local Connection**:\n• Founder Tsewang Norboo is Leh-born\n• 100% local support staff\n• Stay with local families (optional)\n• Learn authentic stories\n• Support local economy directly\n\nYou're not just tourists - you're guests in our home!",
        priority: 8
    },
    {
        keywords: ['language', 'speak', 'speaking', 'words', 'phrases', 'ladakhi language', 'local language', 'tibetan', 'learn ladakhi', 'common phrases'],
        answer: "**Essential Ladakhi Phrases** 🗣️\n\n**Greetings**:\n• **Julley** (ju-lay) = Hello/Goodbye/Thank you (most important!)\n• **Khamzang-in-le?** = How are you?\n• **Khamzang-in** = I'm fine\n\n**Courtesy**:\n• **Thugs-je-che** = Thank you (formal)\n• **Gon-da** = Sorry/Excuse me\n• **Kacho** = Okay/Alright\n\n**Useful Words**:\n• **Cha** = Tea\n• **Chu** = Water\n• **Kha-le** = Food\n• **Gon-pa** = Monastery\n• **La** = Mountain pass\n• **Tso** = Lake\n\n**Directions**:\n• **Yod** = Yes\n• **Min** = No\n• **Ga-bar?** = Where?\n• **Ga-gi-re?** = How much?\n\n**Numbers**:\n• **Chik** = One\n• **Nyi** = Two\n• **Sum** = Three\n• **Zhi** = Four\n• **Nga** = Five\n\n**Fun Fact**: Ladakhi is a Tibetan dialect written in Tibetan script. Most locals also speak Hindi and English!\n\n💡 **Pro Tip**: Just saying 'Julley' with a smile opens every door in Ladakh!",
        priority: 7
    },
    {
        keywords: ['handicraft', 'handicrafts', 'shopping', 'souvenirs', 'buy', 'market', 'bazaar', 'pashmina', 'carpet', 'thangka', 'local products', 'what to buy'],
        answer: "**Ladakh Shopping & Handicrafts** 🛍️\n\n**Authentic Ladakhi Products**:\n\n1. **Pashmina Shawls**\n   • Made from Changthang goat wool\n   • Incredibly soft & warm\n   • Price: ₹2,000-50,000+\n   • Buy from: Leh Main Bazaar\n\n2. **Thangka Paintings**\n   • Buddhist religious art\n   • Hand-painted on cloth\n   • Price: ₹500-10,000+\n   • Buy from: Monastery shops\n\n3. **Tibetan Carpets**\n   • Hand-woven wool carpets\n   • Traditional designs\n   • Price: ₹5,000-50,000\n   • Buy from: Carpet cooperatives\n\n4. **Prayer Flags & Wheels**\n   • Colorful Buddhist flags\n   • Portable prayer wheels\n   • Price: ₹50-500\n   • Buy from: Monastery shops\n\n5. **Apricot Products**\n   • Dried apricots\n   • Apricot oil\n   • Apricot jam\n   • Price: ₹200-800\n   • Buy from: Local markets\n\n6. **Silver Jewelry**\n   • Traditional Ladakhi designs\n   • Turquoise stones\n   • Price: ₹500-5,000\n   • Buy from: Leh Bazaar\n\n**Best Shopping Areas**:\n📍 **Leh Main Bazaar** - Everything!\n📍 **Tibetan Refugee Market** - Handicrafts\n📍 **Moti Market** - Local products\n📍 **Monastery Shops** - Authentic items\n\n**Shopping Tips**:\n✅ Bargain politely (except fixed-price shops)\n✅ Check quality carefully\n✅ Ask for authenticity certificates (pashmina)\n✅ Support local artisans\n✅ Avoid plastic bags\n\n💡 **Our tours include**: Free time for shopping in Leh with local guide recommendations!",
        priority: 7
    },
    {
        keywords: ['music', 'dance', 'song', 'traditional music', 'folk music', 'ladakhi music', 'cultural performance', 'folk dance'],
        answer: "**Ladakhi Music & Dance** 🎵\n\n**Traditional Music**:\n\n🎶 **Instruments**:\n• **Daman** (Frame drum)\n• **Surna** (Oboe-like instrument)\n• **Dungchen** (Long trumpet)\n• **Gyaling** (Ceremonial horn)\n• **Damaru** (Hand drum)\n\n🎭 **Folk Dances**:\n\n1. **Jabro**\n   • Harvest celebration dance\n   • Group circle dance\n   • Rhythmic foot stomping\n\n2. **Shondol**\n   • Archery festival dance\n   • Colorful costumes\n   • Celebrates victory\n\n3. **Kompa Tsum-tsak**\n   • Three-step dance\n   • Performed at weddings\n   • Graceful movements\n\n4. **Cham Dance**\n   • Sacred monastery dance\n   • Elaborate masks & costumes\n   • Tells Buddhist stories\n   • Performed during festivals\n\n**Folk Songs**:\n• Work songs (during farming)\n• Love songs (romantic ballads)\n• Religious chants (monastery prayers)\n• Festival songs (celebrations)\n\n**Where to Experience**:\n🎪 **Ladakh Festival** (September) - Best showcase\n🏛️ **Cultural Centers** in Leh - Evening performances\n🕉️ **Monastery Festivals** - Sacred dances\n🏨 **Hotel Cultural Nights** - Tourist performances\n\n💡 **Our tours**: We can arrange cultural evening programs with traditional music & dance performances!",
        priority: 7
    },

    // ==========================================
    // PACKAGES & PRICING (With Links)
    // ==========================================
    {
        keywords: ['price', 'prices', 'pricing', 'cost', 'rates', 'how much'],
        answer: "Our 2026 expeditions at 2024 prices! 💰\n\n• [Land of High Passes](/package/ladakh-land-of-high-passes) (6D/5N): ₹18,500\n• [Turtuk Valley](/package/turtuk-valley) (7D/6N): ₹22,500\n• [Ride to Heaven](/package/ride-to-heaven) (8D/7N): ₹26,000\n• [Manali-Ladakh-Manali](/package/manali-ladakh-manali) (11D/10N): ₹36,500\n• [Manali-Leh-Srinagar](/package/manali-leh-srinagar) (11D/10N): ₹36,500\n• [Srinagar-Leh-Manali](/package/srinagar-leh-manali) (11D/10N): ₹36,500\n• [Zanskar to Umling La](/package/zanskar-to-umling-la) (12D/11N): ₹44,500\n\n*Prices for dual riding with Himalayan 411cc",
        priority: 10
    },
    {
        keywords: ['package', 'packages', 'tours', 'expeditions', 'trips', 'list', 'options'],
        answer: "We offer 7 curated Royal Enfield expeditions:\n\n1. [Land of High Passes](/package/ladakh-land-of-high-passes) (6D) - Best for beginners\n2. [Turtuk Valley](/package/turtuk-valley) (7D) - Cultural depth\n3. [Ride to Heaven](/package/ride-to-heaven) (8D) - Perfect balance\n4. [Manali-Ladakh-Manali](/package/manali-ladakh-manali) (11D) - Classic adventure\n5. [Manali-Leh-Srinagar](/package/manali-leh-srinagar) (11D) - Complete Himalayan\n6. [Srinagar-Leh-Manali](/package/srinagar-leh-manali) (11D) - Kashmir to Ladakh\n7. [Zanskar & Umling La](/package/zanskar-to-umling-la) (12D) - For the brave\n\nClick any package to see details!",
        priority: 10
    },
    {
        keywords: ['shortest tour', 'minimum days', 'quickest', '6 days'],
        answer: "Our shortest tour is [Land of High Passes](/package/ladakh-land-of-high-passes) (6D/5N) at ₹18,500.\n\nPerfect for first-timers! Covers:\n• Leh sightseeing\n• Khardung La (18,380 ft)\n• Nubra Valley\n• Pangong Lake\n• Chang La Pass\n\nIdeal if you have limited vacation time.",
        priority: 8
    },
    {
        keywords: ['longest tour', 'maximum days', '12 days', 'most days'],
        answer: "Our longest expedition is [Zanskar to Umling La](/package/zanskar-to-umling-la) (12D/11N) at ₹44,500.\n\nThis extreme adventure includes:\n• Zanskar Valley\n• Phugtal Monastery\n• Umling La (19,300 ft)\n• Pangong, Hanle, Tso Moriri\n• Most challenging terrain\n\nFor experienced riders only!",
        priority: 8
    },
    {
        keywords: ['cheapest', 'budget', 'affordable', 'lowest price'],
        answer: "Most affordable: [Land of High Passes](/package/ladakh-land-of-high-passes) at ₹18,500 (dual riding, Himalayan 411cc).\n\nIncludes:\n✅ 6 Days/5 Nights\n✅ All major highlights\n✅ Accommodation & meals\n✅ Bike, fuel, permits\n✅ Safety equipment\n\nBest value for money!",
        priority: 9
    },
    {
        keywords: ['expensive', 'premium', 'highest price', 'most expensive'],
        answer: "Premium expedition: [Zanskar to Umling La](/package/zanskar-to-umling-la) at ₹44,500-₹56,500.\n\nWhy premium:\n• 12 days of adventure\n• Remote Zanskar Valley\n• Highest passes\n• Off-road challenges\n• Extreme terrain\n• Maximum altitude exposure\n\nWorth every rupee for serious riders!",
        priority: 8
    },
    {
        keywords: ['land of high passes', 'leh circuit', 'beginner package', '6d5n'],
        answer: "**[Land of High Passes](/package/ladakh-land-of-high-passes)** (6D/5N) - ₹18,500\n\n✨ Best for: First-timers & Families\n\n📍 Highlights:\n• Leh Palace & Shanti Stupa\n• Hall of Fame, Magnetic Hill\n• Khardung La (18,380 ft)\n• Nubra Valley sand dunes\n• Pangong Lake\n• Chang La Pass\n\n[Click to View Itinerary](/package/ladakh-land-of-high-passes)",
        priority: 9
    },
    {
        keywords: ['turtuk', 'turtuk valley', '7 days', 'balti culture'],
        answer: "**[Turtuk Valley](/package/turtuk-valley)** (7D/6N) - ₹22,500\n\n✨ Best for: Culture & Photography\n\n📍 Highlights:\n• Turtuk Village (last village on Indo-Pak border)\n• Balti culture experience\n• Nubra Valley\n• Pangong Lake\n• Khardung La & Chang La\n\n[Click to View Details](/package/turtuk-valley)",
        priority: 9
    },
    {
        keywords: ['ride to heaven', 'hanle', '8 days', 'umling'],
        answer: "**[Ride to Heaven](/package/ride-to-heaven)** (8D/7N) - ₹26,000\n\n✨ Best for: Scenic & Leisure Riders\n\n📍 Highlights:\n• Hanle Observatory (Dark Sky Reserve)\n• Umling La (19,300 ft) - World's highest pass\n• Pangong Lake\n• Nubra Valley & Turtuk\n• Stargazing at Hanle ✨\n\n[Click to View Details](/package/ride-to-heaven)",
        priority: 9
    },
    {
        keywords: ['manali ladakh manali', 'manali circuit', '11 days manali'],
        answer: "**[Manali-Ladakh-Manali](/package/manali-ladakh-manali)** (11D/10N) - ₹36,500\n\n✨ Best for: Adventure Seekers\n\n📍 Highlights:\n• Atal Tunnel, Rohtang Pass\n• Jispa, Sarchu, More Plains\n• Multiple high passes\n• Nubra, Pangong, Hanle\n• Umling La & Tso Moriri\n\n[Click to View Details](/package/manali-ladakh-manali)",
        priority: 9
    },
    {
        keywords: ['manali leh srinagar', 'kashmir ladakh', 'srinagar end'],
        answer: "**[Manali-Leh-Srinagar](/package/manali-leh-srinagar)** (11D/10N) - ₹36,500\n\n✨ Best for: Complete Himalayan Experience\n\n📍 Highlights:\n• Manali to Leh via high passes\n• Nubra, Pangong, Hanle\n• Umling La (19,300 ft)\n• Kargil & Drass\n• Zojila Pass\n• End in beautiful Srinagar\n\n[Click to View Details](/package/manali-leh-srinagar)",
        priority: 9
    },
    {
        keywords: ['srinagar leh manali', 'kashmir start', 'srinagar to manali'],
        answer: "**[Srinagar-Leh-Manali](/package/srinagar-leh-manali)** (11D/10N) - ₹36,500\n\n✨ Best for: High Passes & Culture\n\n📍 Highlights:\n• Start from Srinagar\n• Zojila, Kargil\n• Leh, Nubra, Turtuk\n• Pangong, Hanle\n• Tso Moriri\n• Umling La\n• End in Manali\n\n[Click to View Details](/package/srinagar-leh-manali)",
        priority: 9
    },
    {
        keywords: ['zanskar', 'zanskar umling', 'extreme', '12 days', 'phugtal'],
        answer: "**[Zanskar to Umling La](/package/zanskar-to-umling-la)** (12D/11N) - ₹44,500\n\n✨ Best for: Extreme Riders\n\n📍 Highlights:\n• Shinkula Pass (16,580 ft)\n• Phugtal Monastery (cliff monastery)\n• Zanskar Valley\n• Padum, Purne\n• Leh, Nubra, Pangong\n• Hanle & Umling La\n\n⚠️ Advanced riders only. [View details](/package/zanskar-to-umling-la)",
        priority: 9
    },
    {
        keywords: ['dual riding', 'two people', 'pillion', 'couple bike'],
        answer: "**Dual Riding** = 2 people on 1 bike (rider + pillion)\n\n💰 Pricing:\n• Base package price applies\n• Both get accommodation & meals\n• Shared bike experience\n\n👫 Perfect for:\n• Couples\n• Friends\n• If pillion doesn't want to ride\n\n✅ Backup vehicle available if pillion gets tired",
        priority: 9
    },
    {
        keywords: ['solo riding', 'single rider', 'one person', 'alone bike'],
        answer: "**Solo Riding** = 1 person on 1 bike\n\n💰 Pricing: +₹6,000 from dual price\nExample: ₹18,500 → ₹24,500\n\n✅ Benefits:\n• Complete control\n• Your own pace\n• Better maneuverability\n• More freedom\n\n🤝 You still ride in group convoy with other riders!",
        priority: 9
    },
    {
        keywords: ['what included', 'inclusions', 'package includes', 'whats included'],
        answer: "**All Packages Include**:\n\n✅ Royal Enfield Himalayan BS6\n✅ Fuel for entire tour\n✅ Accommodation (hotels/camps)\n✅ Breakfast & Dinner\n✅ Oxygen cylinder\n✅ Professional mechanic\n✅ Road Captain/Guide\n✅ Backup car\n✅ Inner Line Permits\n✅ Airport pickup & drop\n✅ All sightseeing\n✅ Riding gear (rental available)",
        priority: 10
    },
    {
        keywords: ['not included', 'exclusions', 'extra cost', 'additional charges'],
        answer: "**NOT Included**:\n\n❌ Airfare/train to Leh\n❌ Lunch (₹200-400/meal)\n❌ Personal shopping\n❌ Alcohol & extra snacks\n❌ Tips for staff\n❌ Drone photography\n❌ Travel insurance\n❌ Costs due to landslides/natural calamities\n\n💡 Budget extra ₹5,000-8,000 for meals & personal expenses",
        priority: 9
    },
    {
        keywords: ['first time', 'beginner', 'never been', 'recommend for beginner'],
        answer: "For first-timers, I recommend:\n\n🥇 **Land of High Passes** (6D) - ₹18,500\n• Perfect introduction\n• All major highlights\n• Comfortable pacing\n• Leh-based (easier acclimatization)\n\n🥈 **Turtuk Valley** (7D) - ₹22,500\n• Extra day for culture\n• Less rushed\n• Unique experience\n\nBoth ideal for beginners with proper preparation!",
        priority: 9
    },
    {
        keywords: ['experienced', 'advanced', 'challenging', 'difficult tour'],
        answer: "For experienced riders:\n\n🔥 **Zanskar to Umling La** (12D) - ₹44,500\n• Most challenging\n• Off-road sections\n• Remote areas\n• Highest passes\n\n⛰️ **Manali Circuits** (11D) - ₹36,500\n• Complete trans-Himalayan\n• Multiple high passes\n• Varied terrain\n\nRequires: Good fitness & prior high-altitude experience",
        priority: 8
    },
    {
        keywords: ['group size', 'how many riders', 'convoy size', 'group tour'],
        answer: "**Group Size**: 15-20 riders per convoy\n\n👥 Each group has:\n• 1 Road Captain (guide)\n• 1 Professional mechanic\n• 1 Backup vehicle\n• First-aid kit\n\n✅ Benefits:\n• Personal attention\n• Safety in numbers\n• Make new friends\n• Shared experiences\n\n💡 Private groups available for 8+ people",
        priority: 8
    },
    {
        keywords: ['custom', 'customize', 'private tour', 'modify package'],
        answer: "**Yes! We offer customization**:\n\n🎨 You can modify:\n• Duration (add/remove days)\n• Route changes\n• Accommodation upgrades\n• Additional destinations\n• Private group (8+ people)\n• Special occasions\n\n📞 Contact us:\nWhatsApp: +91 6006114260\nEmail: himalayanmarmot19@gmail.com",
        priority: 8
    },

    // ==========================================
    // BIKES & FLEET (Comprehensive)
    // ==========================================
    {
        keywords: ['bike', 'bikes', 'biking', 'biker', 'motorcycle', 'motorcycles', 'motorbike', 'motorbikes', 'royal enfield', 'enfield', 'fleet', 'vehicles', 'vehicle', 'ride', 'rides', 'riding', 'which bike', 'what bike', 'about bike', 'know about bike', 'tell me about bike', 'bike info', 'bike information', 'want to know about bike', 'tell about bike', 'info about bike', 'information about bike', 'show bike', 'show bikes', 'show me bike', 'show me bikes', 'see bike', 'see bikes', 'view bike', 'view bikes', 'available bike', 'available bikes', 'bike available', 'bikes available', 'bike options', 'bike choices', 'have bike', 'have bikes', 'got bike', 'got bikes', 'provide bike', 'provide bikes', 'offer bike', 'offer bikes', 'bike details', 'bike specs', 'bike specifications', 'what kind of bike', 'what type of bike', 'which motorcycle', 'what motorcycle', 'bike model', 'bike models', 'model bike', 'models bike', 'bke', 'biks', 'byke', 'bykes', 'motercycle', 'motorcyle', 'motorbke', 'abotu bike', 'abot bike', 'knwo about bike', 'konw about bike'],
        answer: "We use only Royal Enfield Himalayan BS6! 🏍️\n\n1. **Himalayan 411cc** (Oil Cooled)\n   • 24.3 BHP\n   • Proven workhorse\n   • Excellent for mountains\n\n2. **Himalayan 450cc** (Liquid Cooled)\n   • 40 BHP\n   • More power\n   • Latest technology\n\nBoth are purpose-built for Himalayan terrain!",
        priority: 10
    },
    {
        keywords: ['himalayan 411', '411cc', 'oil cooled', '411 specs'],
        answer: "**Royal Enfield Himalayan 411cc**\n\n🔧 Engine: 411cc Single Cylinder, Oil Cooled\n⚡ Power: 24.3 BHP @ 6500 rpm\n💪 Torque: 32 Nm @ 4000 rpm\n⚖️ Weight: 199 kg\n📏 Seat Height: 800mm\n⛽ Fuel Tank: 15 liters\n\n✅ Best for: Stability, reliability, tractor-like torque\n💰 Most affordable option",
        priority: 9
    },
    {
        keywords: ['himalayan 450', '450cc', 'liquid cooled', '450 specs', 'sherpa'],
        answer: "**Royal Enfield Himalayan 450cc**\n\n🔧 Engine: 452cc Single Cylinder, Liquid Cooled (Sherpa)\n⚡ Power: 40 BHP @ 8000 rpm\n💪 Torque: 40 Nm @ 5500 rpm\n⚖️ Weight: 196 kg\n📏 Seat Height: 825mm (adjustable)\n⛽ Fuel Tank: 17 liters\n\n✅ Best for: Experienced riders wanting more power\n💰 Premium option (+₹3,000-4,000)",
        priority: 9
    },
    {
        keywords: ['411 vs 450', 'difference 411 450', 'which bike better', 'compare bikes'],
        answer: "**Himalayan 411cc vs 450cc**:\n\n**411cc**:\n✅ More affordable\n✅ Lower seat height (800mm)\n✅ Proven reliability\n✅ Easier for beginners\n✅ Oil cooled (simpler)\n\n**450cc**:\n✅ More power (40 BHP vs 24)\n✅ Better fuel efficiency\n✅ Liquid cooling (better for long rides)\n✅ Latest technology\n✅ Lighter (196kg vs 199kg)\n\n💡 Choose 411 for reliability, 450 for performance",
        priority: 9
    },
    {
        keywords: ['seat height', 'short rider', 'tall rider', 'height requirement'],
        answer: "**Seat Heights**:\n\n📏 Himalayan 411cc: 800mm\n📏 Himalayan 450cc: 825mm (adjustable)\n\n👤 Recommendations:\n• Below 5'5\": Himalayan 411cc\n• 5'5\" to 6'0\": Either bike works\n• Above 6'0\": Himalayan 450cc\n\n💡 Tip: You can lower seat or use boots for extra height. Test ride available in Leh!",
        priority: 8
    },
    {
        keywords: ['bike condition', 'maintenance', 'bike quality', 'well maintained'],
        answer: "**Our Bike Standards**:\n\n✅ All bikes are BS6 (latest emission standard)\n✅ Regular servicing before each tour\n✅ Professional mechanic on every convoy\n✅ Spare parts carried\n✅ Backup vehicle for emergencies\n✅ Insurance covered\n✅ Test ride on Day 2\n\n🔧 We maintain our fleet like our own bikes!",
        priority: 8
    },
    {
        keywords: ['bike breakdown', 'mechanical issue', 'bike problem', 'what if bike breaks'],
        answer: "**If Bike Breaks Down**:\n\n🔧 **Immediate Support**:\n• Professional mechanic with convoy\n• Spare parts available\n• Roadside repairs\n\n🚗 **Backup Options**:\n• Backup vehicle follows convoy\n• Replacement bike if needed\n• Continue in support vehicle\n\n✅ **No Extra Cost**: All mechanical issues covered in package\n\n💡 Most issues are minor and fixed quickly!",
        priority: 8
    },
    {
        keywords: ['own bike', 'my bike', 'personal motorcycle', 'bring own bike'],
        answer: "**Can you bring your own bike?**\n\nYes, but:\n\n✅ **Allowed**: Any bike in good condition\n❌ **Not Recommended** because:\n• No mechanical support for your bike\n• Spare parts not available\n• Insurance complications\n• Breakdown risks\n\n💡 **Better Option**: Use our well-maintained Himalayans with full support!\n\n📞 If you insist, contact us for custom arrangement",
        priority: 7
    },
    {
        keywords: ['bike license', 'driving license', 'license required', 'permit to ride'],
        answer: "**License Requirements**:\n\n✅ **Must Have**:\n• Valid motorcycle driving license\n• License should cover gearless vehicles\n• Original license (not photocopy)\n\n🌍 **For Foreign Nationals**:\n• International Driving Permit (IDP)\n• Valid passport\n\n⚠️ **Important**: License checked at multiple police checkpoints. No license = No riding!",
        priority: 9
    },
    {
        keywords: ['bike insurance', 'insurance coverage', 'accident coverage'],
        answer: "**Bike Insurance**:\n\n✅ **Included in Package**:\n• Third-party insurance\n• Basic accident coverage\n\n❌ **Not Covered**:\n• Personal injury (get travel insurance)\n• Theft of personal belongings\n• Damage due to rash driving\n\n💡 **Recommendation**: Get comprehensive travel insurance covering:\n• Medical emergencies\n• Evacuation\n• Trip cancellation\n• Personal accident",
        priority: 8
    },
    {
        keywords: ['fuel', 'petrol', 'gas station', 'refueling', 'mileage'],
        answer: "**Fuel Information**:\n\n⛽ **Included**: All fuel for the tour\n\n📍 **Petrol Pumps**:\n• Leh: Multiple pumps\n• Nubra: Diskit has pump\n• Pangong: NO pump (carry extra)\n• Hanle: NO pump\n• Kargil: Available\n\n💡 **Mileage**:\n• Himalayan 411cc: 30-35 km/l\n• Himalayan 450cc: 35-40 km/l\n\n🚨 We carry extra fuel in backup vehicle",
        priority: 7
    },
    {
        keywords: ['riding experience', 'beginner rider', 'never rode', 'first time riding'],
        answer: "**Riding Experience Required**:\n\n🟢 **Minimum**: Basic motorcycle riding skills\n• Know how to operate gears\n• Comfortable riding 4-5 hours\n• Highway riding experience helpful\n\n🟡 **Recommended**:\n• 1-2 years riding experience\n• Long-distance riding (200+ km)\n• Some hill riding\n\n🔴 **For Extreme Tours**:\n• 3+ years experience\n• Off-road riding skills\n• High-altitude experience\n\n💡 **Never Rode?**: Take riding lessons before the trip!",
        priority: 9
    },

    // ==========================================
    // HEALTH & SAFETY (Comprehensive)
    // ==========================================
    {
        keywords: ['ams', 'altitude sickness', 'mountain sickness', 'headache', 'diamox'],
        answer: "**AMS (Acute Mountain Sickness)** is serious! ⚠️\n\n🚨 **Symptoms**:\n• Headache\n• Nausea, vomiting\n• Dizziness\n• Fatigue\n• Shortness of breath\n\n✅ **Prevention**:\n• Complete rest on Day 1\n• Hydrate (3-4L water daily)\n• Diamox (consult doctor first)\n• Gradual ascent\n• Avoid alcohol\n\n🏥 **We Carry**: Oxygen cylinders, first-aid, emergency contacts",
        priority: 10
    },
    {
        keywords: ['diamox', 'altitude medicine', 'ams medicine', 'acetazolamide'],
        answer: "**Diamox (Acetazolamide)** - AMS prevention medicine\n\n💊 **Dosage**: 125-250mg twice daily\n\n⏰ **When to Start**: 24 hours before ascending\n\n✅ **Benefits**:\n• Helps acclimatization\n• Reduces AMS symptoms\n• Improves breathing\n\n⚠️ **Side Effects**:\n• Tingling in fingers/toes\n• Frequent urination\n• Altered taste (carbonated drinks)\n\n🏥 **IMPORTANT**: Consult your doctor before taking!",
        priority: 9
    },
    {
        keywords: ['hospital', 'doctor', 'medical', 'emergency', 'health facility'],
        answer: "**Medical Facilities**:\n\n🏥 **Leh**:\n• SNM Hospital (main district hospital)\n• Private clinics\n• Pharmacies\n• 24/7 emergency\n\n🏥 **Other Locations**:\n• Army hospitals at key points\n• Basic health centers in villages\n• Limited facilities in remote areas\n\n📞 **Emergency**:\n• Road Captain is First-Aid certified\n• Oxygen cylinders in backup vehicle\n• Emergency evacuation possible\n• Insurance recommended",
        priority: 9
    },
    {
        keywords: ['oxygen', 'oxygen cylinder', 'breathing problem', 'low oxygen'],
        answer: "**Oxygen Support**:\n\n✅ **We Provide**:\n• Oxygen cylinders in backup vehicle\n• Available 24/7\n• Free to use if needed\n\n🫁 **Oxygen Levels**:\n• Sea level: 100%\n• Leh (11,500 ft): 65%\n• Khardung La (18,380 ft): 50%\n• Umling La (19,300 ft): 48%\n\n⚠️ **When to Use**:\n• Severe breathlessness\n• AMS symptoms\n• Emergency situations\n\n💡 Don't hesitate to ask for oxygen!",
        priority: 9
    },
    {
        keywords: ['fitness', 'physical fitness', 'health requirement', 'medical clearance'],
        answer: "**Fitness Requirements**:\n\n✅ **Basic Health**:\n• No serious heart conditions\n• No severe respiratory issues\n• No recent surgeries\n• Moderate fitness level\n\n🏃 **Recommended Fitness**:\n• Can walk 2-3 km comfortably\n• No breathlessness on stairs\n• Regular physical activity\n\n⚠️ **Medical Clearance Needed**:\n• Age 60+\n• Heart conditions\n• Asthma/COPD\n• Diabetes\n• High blood pressure\n\n💡 Start cardio exercises 2 months before trip!",
        priority: 9
    },
    {
        keywords: ['pre existing', 'medical condition', 'health problem', 'chronic disease'],
        answer: "**Pre-existing Conditions**:\n\n⚠️ **Consult Doctor If You Have**:\n• Heart disease\n• High blood pressure\n• Asthma/COPD\n• Diabetes\n• Epilepsy\n• Recent surgery\n\n✅ **Usually Manageable**:\n• Controlled hypertension\n• Mild asthma\n• Controlled diabetes\n\n❌ **Not Recommended**:\n• Severe heart conditions\n• Uncontrolled BP\n• Recent heart attack/surgery\n• Severe respiratory issues\n\n📋 Carry medical certificate & medicines",
        priority: 9
    },
    {
        keywords: ['insurance', 'travel insurance', 'medical insurance', 'coverage'],
        answer: "**Travel Insurance** - Highly Recommended! 🛡️\n\n✅ **Should Cover**:\n• Medical emergencies\n• Helicopter evacuation\n• Trip cancellation\n• Lost baggage\n• Personal accident\n• Adventure sports (motorcycle riding)\n\n💰 **Cost**: ₹500-2,000 for 10-12 days\n\n🏢 **Recommended Providers**:\n• ICICI Lombard\n• HDFC Ergo\n• Bajaj Allianz\n• World Nomads (international)\n\n⚠️ **Important**: Declare motorcycle riding!",
        priority: 9
    },
    {
        keywords: ['first aid', 'medical kit', 'medicines', 'what medicines'],
        answer: "**Essential Medicines to Carry**:\n\n💊 **Altitude**:\n• Diamox (consult doctor)\n• Dexamethasone (emergency)\n\n💊 **Common Issues**:\n• Paracetamol (headache)\n• Ibuprofen (pain)\n• Antacids (acidity)\n• Anti-diarrheal (Loperamide)\n• ORS packets\n\n💊 **Others**:\n• Band-aids, antiseptic\n• Personal prescriptions\n• Cough syrup\n• Eye drops\n\n🏥 We carry comprehensive first-aid kit",
        priority: 9
    },
    {
        keywords: ['safety', 'safe', 'dangerous', 'risk', 'accidents'],
        answer: "**Safety Measures**:\n\n✅ **We Provide**:\n• Experienced Road Captain\n• Professional mechanic\n• Backup vehicle\n• Oxygen cylinders\n• First-aid kit\n• Emergency contacts\n• Riding briefings\n\n✅ **You Should**:\n• Wear all safety gear\n• Follow Road Captain\n• Ride within limits\n• Stay hydrated\n• Report any issues\n\n📊 **Safety Record**: 10+ years, 5000+ riders, excellent safety record",
        priority: 9
    },
    {
        keywords: ['accident', 'crash', 'fall', 'injury', 'what if accident'],
        answer: "**In Case of Accident**:\n\n🚨 **Immediate Action**:\n• Road Captain provides first-aid\n• Assess injuries\n• Oxygen if needed\n• Call for medical help\n\n🏥 **Medical Care**:\n• Transfer to nearest hospital\n• Backup vehicle available\n• Emergency evacuation if serious\n• Insurance claim assistance\n\n✅ **Prevention**:\n• Wear all safety gear\n• Ride at safe speed\n• Follow instructions\n• Don't show off\n\n💡 Most incidents are minor scrapes",
        priority: 8
    },
    {
        keywords: ['covid', 'corona', 'vaccination', 'pandemic'],
        answer: "**COVID-19 Protocols**:\n\n✅ **Current Status** (2026):\n• No mandatory vaccination\n• No RT-PCR required\n• Normal operations\n\n💡 **Recommendations**:\n• Carry sanitizer\n• Masks optional\n• Maintain hygiene\n\n📞 Check latest guidelines before travel",
        priority: 7
    },

    // ==========================================
    // BOOKING & PAYMENTS (Comprehensive)
    // ==========================================
    {
        keywords: ['book', 'booking', 'reserve', 'reservation', 'how to book'],
        answer: "**How to Book**:\n\n1️⃣ Choose your package\n2️⃣ Click 'Book on WhatsApp' or call +91 6006114260\n3️⃣ Confirm dates & bike preference\n4️⃣ Pay ₹5,000 token advance\n5️⃣ Receive booking confirmation\n6️⃣ Pay balance upon arrival in Leh\n\n✅ Booking confirmed once advance received!",
        priority: 10
    },
    {
        keywords: ['advance', 'token', 'deposit', 'booking amount'],
        answer: "**Advance Payment**: ₹5,000\n\n💰 **Payment Methods**:\n• UPI (Google Pay, PhonePe, Paytm)\n• Bank Transfer\n• Online payment\n\n✅ **Refundable**: As per cancellation policy\n\n📱 We'll share payment details on WhatsApp",
        priority: 9
    },
    {
        keywords: ['payment', 'pay', 'payment method', 'how to pay'],
        answer: "**Payment Options**:\n\n💳 **Advance (₹5,000)**:\n• UPI (GPay, PhonePe, Paytm)\n• Bank Transfer\n• Online payment\n\n💵 **Balance (in Leh)**:\n• Cash (preferred)\n• UPI\n• Card (subject to network)\n\n⚠️ **Note**: Internet can be unreliable, carry cash!",
        priority: 9
    },
    {
        keywords: ['upi', 'google pay', 'phonepe', 'paytm', 'gpay'],
        answer: "**Yes! We accept all UPI apps**:\n\n✅ Google Pay\n✅ PhonePe\n✅ Paytm\n✅ BHIM\n✅ Any UPI app\n\n📱 We'll share QR code on WhatsApp for advance payment\n\n💡 UPI is the easiest payment method!",
        priority: 9
    },
    {
        keywords: ['bank transfer', 'neft', 'rtgs', 'imps', 'bank details'],
        answer: "**Bank Transfer Details**:\n\n🏦 **Account Name**: Himalayan Marmot\n🏦 **Account No**: 120001572039\n🏦 **Bank**: Canara Bank\n🏦 **IFSC**: CNRB0017651\n\n📱 Share payment screenshot on WhatsApp: +91 6006114260",
        priority: 8
    },
    {
        keywords: ['credit card', 'debit card', 'card payment', 'emi'],
        answer: "**Card Payments**:\n\n💳 **Advance**: Prefer UPI/Bank Transfer\n\n💳 **Balance in Leh**:\n• Card machines available at office\n• Subject to network availability\n• Cash preferred (more reliable)\n\n❌ **EMI**: Not available currently\n\n💡 Carry sufficient cash as backup!",
        priority: 7
    },
    {
        keywords: ['cancel', 'cancellation', 'refund', 'cancel booking'],
        answer: "**Cancellation Policy**:\n\n📅 **>30 days before**: 40% deduction\n📅 **30-15 days before**: 60% deduction\n📅 **15-7 days before**: 85% deduction\n📅 **<7 days before**: 100% deduction (no refund)\n\n✅ **Alternative**: Transfer booking to a friend!\n\n⚠️ No refund for natural calamities/road blocks",
        priority: 9
    },
    {
        keywords: ['reschedule', 'change dates', 'postpone', 'modify dates'],
        answer: "**Rescheduling**:\n\n✅ **Allowed**: Subject to availability\n\n💰 **Charges**:\n• >30 days: Free (one time)\n• <30 days: As per cancellation policy\n\n📞 **Process**:\n1. Contact us immediately\n2. Check new date availability\n3. Confirm rescheduling\n\n💡 Better to reschedule than cancel!",
        priority: 8
    },
    {
        keywords: ['group discount', 'bulk booking', 'corporate', 'friends group'],
        answer: "**Group Discounts**:\n\n👥 **8-12 people**: 5% discount\n👥 **13-20 people**: 8% discount\n👥 **20+ people**: 10% discount\n\n✅ **Benefits**:\n• Private convoy\n• Customized itinerary\n• Dedicated support\n\n📞 Contact for corporate/college group bookings: +91 6006114260",
        priority: 8
    },
    {
        keywords: ['early bird', 'advance booking', 'discount', 'offer'],
        answer: "**Booking Offers**:\n\n🎯 **Early Bird** (3+ months advance):\n• 5% discount\n• Priority bike selection\n• Flexible rescheduling\n\n🎯 **Off-Season** (May, September):\n• Special rates\n• Better availability\n\n📞 Call for current offers: +91 6006114260",
        priority: 7
    },

    // ==========================================
    // TRAVEL TIPS & PREPARATION
    // ==========================================
    {
        keywords: ['best time', 'when to visit', 'season', 'weather', 'what\'s the best time', 'when should i visit', 'good time to visit', 'when is the best', 'ideal time', 'perfect time', 'visit ladakh when', 'month to visit'],
        answer: "**Best Time to Visit Ladakh**:\n\n🌟 **September** (BEST!)\n• Clear skies, perfect visibility\n• Fewer crowds than July-Aug\n• Perfect weather (15-25°C)\n• Golden landscapes for photos\n• All passes accessible\n\n☀️ **July-August** (Peak Season)\n• Warmest weather\n• All high passes open\n• Hemis Festival (June-July)\n• Maximum crowds\n• Book early\n\n❄️ **May-June** (Opening Season)\n• Some passes still snowy\n• Cool weather (10-18°C)\n• Fewer tourists\n• Challenging for high passes\n• Good for acclimation\n\n⚠️ **Avoid**: October-April (snow, roads closed)\n\n🎯 **Recommendation**: June-July for peak, September for best experience!",
        priority: 15
    },
    {
        keywords: ['packing', 'what to bring', 'packing list', 'luggage'],
        answer: "**Essential Packing List**:\n\n🎒 **Clothing**:\n• Thermal innerwear (2-3 sets)\n• Fleece/down jacket\n• 4-5 t-shirts\n• 2-3 pants\n• Warm socks (5-6 pairs)\n\n🏍️ **Riding Gear** (rental available):\n• Jacket, gloves, knee guards\n• Helmet (we provide)\n• Balaclava\n\n💊 **Medical**:\n• Diamox, painkillers\n• Personal medicines\n• Sunscreen SPF 50+\n• Lip balm\n\n📱 **Others**:\n• Power bank\n• Sunglasses\n• Documents\n• Cash",
        priority: 10
    },
    {
        keywords: ['documents', 'id proof', 'permit', 'papers required'],
        answer: "**Required Documents**:\n\n✅ **Must Carry**:\n• Aadhar Card/Passport (original)\n• 4-5 photocopies\n• Driving License (original)\n• Passport size photos (4-5)\n\n✅ **We Arrange**:\n• Inner Line Permits\n• Protected Area Permits\n\n✅ **Recommended**:\n• Travel insurance\n• Medical certificate (if 60+)\n• Emergency contacts\n\n⚠️ No documents = No entry to restricted areas!",
        priority: 10
    },
    {
        keywords: ['permit', 'ilp', 'inner line', 'protected area'],
        answer: "**Permits in Ladakh**:\n\n📋 **Inner Line Permit (ILP)** required for:\n• Nubra Valley\n• Pangong Lake\n• Tso Moriri\n• Hanle\n• Umling La\n\n✅ **We Handle**:\n• All permit arrangements\n• Included in package\n• You just provide ID copies\n\n⏰ **Processing**: 1-2 days\n\n💡 Permits checked at multiple checkpoints",
        priority: 9
    },
    {
        keywords: ['acclimatization', 'acclimatize', 'altitude adjustment', 'adapt altitude'],
        answer: "**Acclimatization Tips**:\n\n✅ **Day 1 in Leh**:\n• Complete rest (non-negotiable!)\n• No physical activity\n• Stay in hotel\n• Hydrate well\n\n✅ **General Tips**:\n• Drink 3-4L water daily\n• Avoid alcohol\n• Eat light meals\n• Sleep well\n• Gradual ascent\n• Listen to your body\n\n⚠️ **Don't Rush**: Proper acclimatization prevents AMS\n\n💊 Consider Diamox (consult doctor)",
        priority: 10
    },
    {
        keywords: ['hydration', 'water', 'drink water', 'dehydration'],
        answer: "**Hydration is Critical**:\n\n💧 **Daily Requirement**: 3-4 liters\n\n✅ **Why Important**:\n• Prevents altitude sickness\n• Combats dry climate\n• Maintains energy\n• Prevents headaches\n\n💡 **Tips**:\n• Carry 2-3 water bottles\n• Drink even if not thirsty\n• Avoid excessive tea/coffee\n• ORS packets helpful\n• Insulated bottle for cold areas\n\n⚠️ Dehydration worsens AMS!",
        priority: 9
    },
    {
        keywords: ['food', 'meal', 'diet', 'eating', 'cuisine'],
        answer: "**Food on Tour**:\n\n🍽️ **Included**:\n• Breakfast (buffet)\n• Dinner (buffet)\n\n🍽️ **Lunch**: Not included (₹200-400/meal)\n\n🥘 **Cuisine**:\n• Indian (North & South)\n• Chinese\n• Continental\n• Tibetan (momos, thukpa)\n• Ladakhi specialties\n\n✅ **Dietary Options**:\n• Vegetarian\n• Vegan (inform in advance)\n• Jain (limited)\n\n💡 Carry snacks for rides!",
        priority: 8
    },
    {
        keywords: ['vegetarian', 'veg', 'non veg', 'vegan', 'jain'],
        answer: "**Dietary Preferences**:\n\n✅ **Vegetarian**: Widely available\n✅ **Vegan**: Available (inform in advance)\n✅ **Jain**: Limited options\n✅ **Non-veg**: Available (chicken, mutton)\n\n🥘 **Note**:\n• Remote areas have limited options\n• Veg is safer for sensitive stomachs\n• Carry snacks if specific requirements\n\n💡 Inform us about dietary restrictions while booking",
        priority: 7
    },
    {
        keywords: ['alcohol', 'drink', 'beer', 'wine', 'liquor'],
        answer: "**Alcohol at High Altitude**:\n\n❌ **Strictly NOT Recommended**:\n• Dehydrates body\n• Worsens AMS\n• Impairs judgment\n• Dangerous for riding\n\n✅ **If You Must**:\n• Only on last night in Leh/Manali\n• After completing high passes\n• In moderation\n• Drink extra water\n\n⚠️ **Never**:\n• Before/during riding\n• At high altitude\n• First 2-3 days\n\n💡 Save celebrations for after the trip!",
        priority: 8
    },
    {
        keywords: ['smoking', 'cigarette', 'tobacco', 'vaping'],
        answer: "**Smoking at High Altitude**:\n\n❌ **Not Recommended**:\n• Reduces oxygen intake\n• Worsens breathing\n• Increases AMS risk\n• Affects stamina\n\n💡 **If You Smoke**:\n• Reduce significantly\n• Avoid at high passes\n• Never while riding\n• Consider quitting before trip\n\n⚠️ Smoking makes high altitude much harder!",
        priority: 6
    },
    {
        keywords: ['network', 'mobile', 'internet', 'wifi', 'connectivity'],
        answer: "**Mobile Network in Ladakh**:\n\n📱 **Best Networks**:\n• BSNL (best coverage)\n• Airtel (good in main areas)\n• Jio (limited)\n\n⚠️ **Requirements**:\n• Only POSTPAID connections work\n• Prepaid doesn't work (J&K rule)\n\n📵 **No Network**:\n• Pangong Lake\n• Hanle\n• Tso Moriri\n• Remote passes\n\n💡 **WiFi**: Available in Leh hotels, limited elsewhere\n\n🔌 Digital detox opportunity!",
        priority: 9
    },
    {
        keywords: ['atm', 'cash', 'money', 'withdraw'],
        answer: "**ATMs & Cash**:\n\n🏧 **ATMs Available**:\n• Leh (multiple ATMs)\n• Kargil\n• Manali\n\n❌ **No ATMs**:\n• Nubra Valley\n• Pangong\n• Hanle\n• Tso Moriri\n• Most remote areas\n\n💰 **Recommendation**:\n• Withdraw ₹15,000-20,000 in Leh\n• Carry small denominations\n• Keep cash in multiple places\n• Cards as backup\n\n⚠️ ATMs often run out of cash!",
        priority: 9
    },
    {
        keywords: ['shopping', 'buy', 'souvenirs', 'market', 'handicrafts'],
        answer: "**Shopping in Ladakh**:\n\n🛍️ **What to Buy**:\n• Pashmina shawls\n• Tibetan handicrafts\n• Prayer flags\n• Thangka paintings\n• Apricot products\n• Ladakhi jewelry\n• Buddhist artifacts\n\n📍 **Where**:\n• Leh Main Market\n• Tibetan Refugee Market\n• Monastery shops\n\n💰 **Budget**: ₹2,000-10,000\n\n💡 **Tips**:\n• Bargain politely\n• Check authenticity\n• Support local artisans",
        priority: 6
    },

    // ==========================================
    // DESTINATIONS & ROUTES
    // ==========================================
    {
        keywords: ['khardung la', 'khardungla', 'highest road', 'world highest'],
        answer: "**Khardung La Pass** (18,380 ft / 5,359m)\n\n🏔️ **Facts**:\n• World's highest motorable road (disputed)\n• Gateway to Nubra Valley\n• Opened in 1988\n• Maintained by BRO\n\n❄️ **Conditions**:\n• Very cold & windy\n• Snow possible even in summer\n• Oxygen: 50% of sea level\n\n📸 **Must-do**:\n• Photo at signboard\n• Chai at top\n• Don't stay long (AMS risk)\n\n💡 Start early to avoid traffic!",
        priority: 10
    },
    {
        keywords: ['pangong', 'pangong lake', 'pangong tso', '3 idiots'],
        answer: "**Pangong Tso Lake** (14,000 ft / 4,250m)\n\n💙 **Features**:\n• 134 km long (1/3 in India)\n• Changes color (blue to green)\n• Brackish water (salty)\n• Famous from '3 Idiots' movie\n\n🏕️ **Experience**:\n• Lakeside camping\n• Stunning sunrises\n• Crystal clear water\n• Migratory birds\n\n⚠️ **Note**:\n• No network\n• Very cold at night\n• Basic facilities\n• Carry warm clothes",
        priority: 10
    },
    {
        keywords: ['nubra', 'nubra valley', 'hunder', 'sand dunes'],
        answer: "**Nubra Valley** (10,000 ft / 3,000m)\n\n🏜️ **Highlights**:\n• White sand dunes at Hunder\n• Double-hump Bactrian camels\n• Diskit Monastery (32m Buddha)\n• Warmer than Leh\n• Lush green villages\n\n🐫 **Activities**:\n• Camel safari (₹300-500)\n• ATV rides\n• Monastery visits\n• Photography\n\n💡 **Best Time**: Morning for sand dunes (golden light)",
        priority: 10
    },
    {
        keywords: ['leh', 'leh city', 'leh market', 'leh palace'],
        answer: "**Leh City** (11,500 ft / 3,500m)\n\n🏛️ **Main Attractions**:\n• Leh Palace (mini Potala)\n• Shanti Stupa (peace pagoda)\n• Main Market (shopping)\n• Hall of Fame (war museum)\n• Shey Palace\n• Thiksey Monastery\n\n🏨 **Facilities**:\n• Hotels, restaurants\n• ATMs, hospitals\n• Bike rentals\n• Tour operators\n\n💡 **Base**: Most tours start/end here",
        priority: 9
    },
    {
        keywords: ['magnetic hill', 'gravity hill', 'magnetic'],
        answer: "**Magnetic Hill**\n\n🧲 **Phenomenon**:\n• Optical illusion\n• Vehicles appear to roll uphill\n• Actually a downward slope\n• Magnetic field theory (myth)\n\n📍 **Location**: 30 km from Leh on Leh-Kargil highway\n\n🎯 **Experience**:\n• Stop at marked spot\n• Put vehicle in neutral\n• Watch it 'roll uphill'\n• Fun photo opportunity\n\n💡 Quick 15-minute stop",
        priority: 7
    },
    {
        keywords: ['sangam', 'confluence', 'indus zanskar'],
        answer: "**Sangam Point**\n\n🌊 **Confluence**:\n• Indus River (muddy brown)\n• Zanskar River (clear blue)\n• Two colors clearly visible\n• Rivers meet but don't mix\n\n📍 **Location**: 35 km from Leh\n\n📸 **Photography**:\n• Best from viewpoint\n• Clear color difference\n• Stunning landscape\n\n💡 Part of Leh local sightseeing",
        priority: 7
    },
    {
        keywords: ['chang la', 'changla', 'third highest'],
        answer: "**Chang La Pass** (17,590 ft / 5,360m)\n\n🏔️ **Facts**:\n• Third highest motorable pass\n• Gateway to Pangong\n• Maintained by BRO\n• Chai stalls at top\n\n❄️ **Conditions**:\n• Very cold & windy\n• Snow patches common\n• Oxygen: 55% of sea level\n\n📸 **Must-do**:\n• Photo at signboard\n• Visit Chang La Baba temple\n• Hot chai/maggi\n\n⚠️ Don't stay long (AMS risk)",
        priority: 9
    },
    {
        keywords: ['monastery', 'monasteries', 'gompa', 'buddhist'],
        answer: "**Famous Monasteries**:\n\n🏛️ **Must Visit**:\n• **Thiksey** - Mini Potala Palace\n• **Hemis** - Largest & richest\n• **Diskit** - 32m Buddha statue\n• **Lamayuru** - Moonland landscape\n• **Phugtal** - Built in cliff\n\n⏰ **Timings**: Usually 7 AM - 6 PM\n\n💡 **Tips**:\n• Dress modestly\n• Remove shoes inside\n• Photography rules vary\n• Donations welcome\n• Attend morning prayers (6-7 AM)",
        priority: 8
    },

    // ==========================================
    // COMPANY & SERVICES
    // ==========================================
    {
        keywords: ['contact', 'phone', 'call', 'whatsapp', 'number'],
        answer: "📞 **Contact Himalayan Marmot**:\n\n**WhatsApp/Call**: +91 6006114260\n**Alternative**: +91 9906367672\n**Email**: himalayanmarmot19@gmail.com\n\n📍 **Office**: Main market, near Samsung show room, Leh Ladakh - 194101\n\n🕐 **Hours**: 9 AM - 8 PM (IST)\n\n💬 WhatsApp is fastest for booking!",
        priority: 10
    },
    {
        keywords: ['founder', 'owner', 'tsewang', 'who runs'],
        answer: "**Founder: Tsewang Norboo**\n\n🏔️ **Local Expert**:\n• Born and raised in Leh\n• 10+ years experience\n• Knows every trail\n• Speaks Ladakhi, Hindi, English\n\n💪 **Philosophy**:\n• Safety first\n• Authentic experiences\n• Family-like service\n• Local community support\n\n🙏 \"You're not customers, you're guests in our family\"",
        priority: 8
    },
    {
        keywords: ['reviews', 'testimonials', 'feedback', 'ratings'],
        answer: "**Our Track Record**:\n\n⭐ **Google Reviews**: 4.9/5 (500+ reviews)\n⭐ **Instagram**: 5,136 followers\n⭐ **Experience**: 10+ years\n⭐ **Riders**: 5,000+ happy customers\n\n💬 **What Riders Say**:\n• \"Best organized tour\"\n• \"Safety was top priority\"\n• \"Tsewang is amazing\"\n• \"Bikes in perfect condition\"\n• \"Felt like family\"\n\n📱 Check our Instagram: @himalayan_marmot_2019",
        priority: 8
    },
    {
        keywords: ['local', 'ladakhi', 'born in leh', 'authentic'],
        answer: "**Why Choose Local Operator**:\n\n✅ **Himalayan Marmot is 100% Local**:\n• Tsewang born in Leh\n• Family business\n• Deep local knowledge\n• Community connections\n• Authentic experiences\n\n🏔️ **Benefits**:\n• Hidden gems & secret spots\n• Local food & culture\n• Better emergency support\n• Fair prices\n• Supporting local economy\n\n🙏 \"This is our home, not just business\"",
        priority: 9
    },
    {
        keywords: ['why choose', 'why himalayan marmot', 'why you', 'difference'],
        answer: "**Why Himalayan Marmot?**\n\n🏔️ **Local Expertise**: Born in Leh, know every trail\n🛡️ **Safety First**: Oxygen, mechanic, backup vehicle\n🏍️ **Best Bikes**: Well-maintained Himalayan BS6\n👨‍👩‍👧‍👦 **Family Service**: You're guests, not customers\n💰 **Fair Pricing**: No hidden costs\n⭐ **Proven Track Record**: 5,000+ happy riders\n🎯 **Authentic**: Real Ladakhi experience\n\n📊 **10+ years, 4.9★ rating, Zero major incidents**",
        priority: 10
    },
    {
        keywords: ['office', 'location', 'address', 'where are you'],
        answer: "**Our Locations**:\n\n🏠 **Main Store**:\nHousing Colony, near Radio Station\nLeh, Ladakh - 194101\n\n🏢 **Office**:\nMain market, near Samsung show room\nLeh, Ladakh - 194101\n\n📍 **Google Maps**: https://maps.app.goo.gl/hLVkQQUuSCsupyC7A\n\n💡 Visit us when you arrive in Leh!",
        priority: 7
    },
    {
        keywords: ['instagram', 'social media', 'facebook', 'youtube'],
        answer: "**Follow Us**:\n\n📸 **Instagram**: @himalayan_marmot_2019\n• 5,136 followers\n• 280+ posts\n• Real tour photos & videos\n\n📺 **YouTube**: @Ladakhpackage\n• Tour videos\n• Rider testimonials\n• Destination guides\n\n💡 See real experiences from our riders!",
        priority: 7
    },
    {
        keywords: ['certificate', 'completion certificate', 'achievement'],
        answer: "**Completion Certificate**:\n\n🏆 **You Receive**:\n• Official completion certificate\n• Signed by Himalayan Marmot\n• Mentions passes conquered\n• Great souvenir!\n\n📸 **Also Get**:\n• Group photos\n• Memories for lifetime\n• New friends\n• Stories to tell\n\n💡 Frame it and display with pride!",
        priority: 6
    },

    // ==========================================
    // MISCELLANEOUS & FALLBACKS
    // ==========================================
    {
        keywords: ['thank', 'thanks', 'thank you'],
        answer: "You're welcome! Julley! 🦫 Hope to see you in the mountains soon. Feel free to ask anything else!",
        priority: 5
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'later'],
        answer: "Julley! Safe travels and see you in Ladakh! 🏔️ For bookings, WhatsApp us at +91 6006114260",
        priority: 5
    },
    {
        keywords: ['julley', 'julay'],
        answer: "Julley! 🙏 That's how we greet in Ladakh - it means hello, goodbye, and thank you all in one! How can I help you plan your Ladakh adventure?",
        priority: 6
    },

    // Follow-up and conversational keywords
    {
        keywords: ['more', 'describe', 'tell me more', 'details', 'elaborate', 'explain', 'information'],
        answer: "I'd be happy to provide more details! 📋\n\nWhat would you like to know more about?\n\n• **Tour Packages** - Specific itineraries, day-wise plans\n• **Pricing** - Dual vs solo, bike options, inclusions\n• **Bikes** - 411cc vs 450cc comparison, specifications\n• **Safety** - AMS prevention, medical support, oxygen\n• **Booking** - How to book, payment methods, cancellation\n• **Destinations** - Khardung La, Pangong, Nubra, Umling La\n• **Best Time** - Month-by-month weather guide\n• **Packing** - What to bring, gear rental\n\nJust ask about any specific topic!",
        priority: 7
    },
    {
        keywords: ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'continue'],
        answer: "Great! What specific aspect would you like to explore?\n\n💡 **Try asking**:\n• \"Tell me about Land of High Passes\"\n• \"What's included in the package?\"\n• \"Difference between 411 and 450?\"\n• \"How to prevent altitude sickness?\"\n• \"Best time to visit?\"\n• \"How to book?\"\n\nI'm here to help! 🏍️",
        priority: 6
    },
    {
        keywords: ['no', 'nope', 'not really', 'nothing'],
        answer: "No problem! If you have any questions later, I'm here 24/7. You can also:\n\n📞 Call us: +91 6006114260\n💬 WhatsApp: Click the button below\n📧 Email: himalayanmarmot19@gmail.com\n\nJulley! 🦫",
        priority: 6
    },
    {
        keywords: ['compare', 'comparison', 'difference', 'vs', 'versus', 'which one', 'which is better'],
        answer: "I can help you compare! 🔍\n\n**What would you like to compare?**\n\n🏍️ **Bikes**: \"411 vs 450\" or \"which bike for beginners\"\n📦 **Packages**: \"shortest vs longest tour\" or \"beginner vs advanced\"\n💰 **Pricing**: \"dual vs solo\" or \"cheapest vs expensive\"\n📅 **Timing**: \"May vs September\" or \"peak vs off-season\"\n\nJust ask your comparison question!",
        priority: 7
    },
    {
        keywords: ['recommend', 'suggestion', 'suggest', 'advice', 'should i', 'best', 'better', 'top', 'choice', 'choose', 'which one', 'which package'],
        answer: "Happy to recommend! 💡\n\n**Tell me about yourself**:\n\n👤 **Experience Level**:\n• First-timer? → [Land of High Passes](/package/ladakh-land-of-high-passes) (6D)\n• Experienced? → [Zanskar to Umling La](/package/zanskar-to-umling-la) (12D)\n\n⏰ **Time Available**:\n• 6-7 days? → Local expeditions\n• 10-12 days? → Grand circuits\n\n💪 **Fitness Level**:\n• Moderate? → Easier packages\n• Excellent? → Extreme adventures\n\n💰 **Budget**:\n• ₹18,500-26,000 → Local tours\n• ₹36,500-44,500 → Grand circuits\n\nWhat's your situation?",
        priority: 8
    },
    {
        keywords: ['confused', 'not sure', 'dont know', 'help me choose', 'undecided'],
        answer: "No worries! Let me help you decide. 🤔\n\n**Quick Questions**:\n\n1️⃣ **First time in Ladakh?**\n   → Yes: Start with [Land of High Passes](/package/ladakh-land-of-high-passes)\n   → No: Try advanced routes\n\n2️⃣ **How many days can you spare?**\n   → 6-8 days: Local expeditions\n   → 10-12 days: Grand circuits\n\n3️⃣ **Riding experience?**\n   → Beginner: 411cc, easier routes\n   → Advanced: 450cc, challenging terrain\n\n4️⃣ **Budget range?**\n   → ₹18-26k: Local tours\n   → ₹36-44k: Complete circuits\n\nAnswer these and I'll recommend the perfect package!",
        priority: 8
    },
    {
        keywords: ['all', 'everything', 'complete', 'full', 'entire'],
        answer: "Here's the complete overview! 📚\n\n**7 Tour Packages**:\n1. [Land of High Passes](/package/ladakh-land-of-high-passes) (6D) - ₹18,500\n2. [Turtuk Valley](/package/turtuk-valley) (7D) - ₹22,500\n3. [Ride to Heaven](/package/ride-to-heaven) (8D) - ₹26,000\n4. [Manali-Ladakh-Manali](/package/manali-ladakh-manali) (11D) - ₹36,500\n5. [Manali-Leh-Srinagar](/package/manali-leh-srinagar) (11D) - ₹36,500\n6. [Srinagar-Leh-Manali](/package/srinagar-leh-manali) (11D) - ₹36,500\n7. [Zanskar to Umling La](/package/zanskar-to-umling-la) (12D) - ₹44,500\n\n**2 Bike Options**:\n• Himalayan 411cc (₹base price)\n• Himalayan 450cc (+₹3-4k)\n\n**Season**: May-September\n**Group Size**: 15-20 riders\n**Includes**: Bike, fuel, accommodation, meals, permits, safety\n\nWhat specific aspect interests you?",
        priority: 7
    }
];

// Levenshtein distance for typo tolerance
const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix: number[][] = [];

    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[str2.length][str1.length];
};

// Fuzzy matching with typo tolerance
const fuzzyMatch = (query: string, keyword: string, threshold: number = 2): boolean => {
    // Exact match
    if (query.includes(keyword)) return true;

    // Use stricter threshold for short words to avoid false positives
    const effectiveThreshold = keyword.length <= 4 ? 1 : threshold;

    // Check if keyword is in query with typos
    const queryWords = query.split(/\s+/);
    const keywordWords = keyword.split(/\s+/);

    // Single word keyword - check against all query words
    if (keywordWords.length === 1) {
        for (const word of queryWords) {
            if (levenshteinDistance(word, keywordWords[0]) <= effectiveThreshold) {
                return true;
            }
        }
    } else {
        // Multi-word keyword - check if all words match with typos
        let matchedWords = 0;
        for (const kw of keywordWords) {
            for (const qw of queryWords) {
                if (levenshteinDistance(qw, kw) <= effectiveThreshold) {
                    matchedWords++;
                    break;
                }
            }
        }
        if (matchedWords === keywordWords.length) {
            return true;
        }
    }

    return false;
};

// Remove common filler words
const cleanQuery = (query: string): string => {
    const fillers = ['i', 'want', 'to', 'know', 'about', 'tell', 'me', 'can', 'you', 'please', 'the', 'a', 'an', 'is', 'are', 'what', 'how', 'show', 'give', 'need', 'info', 'information', 'details', 'which'];
    const words = query.toLowerCase().split(/\s+/);
    return words.filter(word => !fillers.includes(word) && word.length > 2).join(' ');
};

export const findAnswer = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    const cleanedQuery = cleanQuery(lowerQuery);

    const matches = KNOWLEDGE_BASE.map(entry => {
        let matchCount = 0;

        // Exact keyword matching
        matchCount += entry.keywords.reduce((count, keyword) => {
            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b${escapedKeyword}\\b`, 'i');
            return regex.test(lowerQuery) ? count + 2 : count; // Higher weight for exact matches
        }, 0);

        // Fuzzy matching for typos
        matchCount += entry.keywords.reduce((count, keyword) => {
            return fuzzyMatch(lowerQuery, keyword, 2) ? count + 1 : count;
        }, 0);

        // Match against cleaned query (without filler words)
        if (cleanedQuery) {
            matchCount += entry.keywords.reduce((count, keyword) => {
                return cleanedQuery.includes(keyword) ? count + 1.5 : count;
            }, 0);
        }

        const score = matchCount > 0 ? matchCount + (entry.priority || 0) : 0;
        return { ...entry, score };
    });

    matches.sort((a, b) => b.score - a.score);

    if (matches.length > 0 && matches[0].score > 0) {
        return matches[0].answer;
    }

    return "I'm not 100% sure about that specific detail, but I can connect you with our team. Call us at +91 6006114260 or click the WhatsApp button for instant help! 🏍️";
};
