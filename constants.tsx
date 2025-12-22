
import React from 'react';
import { TourPackage, CancellationPolicy } from './types';

export const COMPANY_NAME = "Himalayan Marmot";
export const FOUNDER_NAME = "Tsewang Norboo";
export const CONTACT_NUMBERS = ["+91 6006114260", "+91 9971296649"]; 
export const EMAIL = "himalayanmarmot19@gmail.com";
export const ADDRESS_MAIN = "Main market, near Samsung show room Leh Ladakh - 194101";
export const ADDRESS_OFFICE = "Housing Colony, near Radio Station, Leh Ladakh, India - 194101";
export const MAPS_URL = "https://maps.app.goo.gl/hLVkQQUuSCsupyC7A";
export const INSTAGRAM_URL = "https://www.instagram.com/himalayan_marmot_2019/";
export const YOUTUBE_URL = "https://www.youtube.com/@travelsongsindia";

export const IG_STATS = {
  handle: "himalayan_marmot_2019",
  followers: "5,136",
  posts: "280",
  following: "2",
  bio: "We’d love to take you to explore Ladakh Himalaya range. Let’s join with us for culture tour or trek.",
  location: "Main Market near Gompa complex leh, Leh, India 194101"
};

export const BANK_DETAILS = {
  accountNo: "6200157200",
  bank: "Canara Bank",
  ifsc: "CNRB0017651",
  accountName: "Tsewang Norboo"
};

export const COMMON_INCLUSIONS = [
  "Transportation in Himalayan Bike Bs6",
  "Breakfast & Dinner in all Hotels/Camps",
  "All Sightseeing spots covered",
  "Inner Line Permit Fees",
  "Accommodation for specified nights",
  "Oxygen Cylinder for high altitude safety",
  "Airport Transfer (Pickup & Drop)",
  "Backup Car for emergency",
  "Fuel for the entire tour",
  "Biker Gears (Jacket, Gloves, Knee guards, etc.)",
  "Professional Mechanic on every convoy"
];

export const COMMON_EXCLUSIONS = [
  "Airfare & Train Charges",
  "Drone Shoot (available on request)",
  "Personal Shopping and extra meals",
  "Costs arising due to natural calamities (landslides, road blocks)",
  "Anything not mentioned in the inclusions"
];

export const CANCELLATION_POLICIES: CancellationPolicy[] = [
  { period: "From booking till 30 days of departure", deduction: "40% of package cost" },
  { period: "From 30 to 15 days of departure", deduction: "60% of package cost" },
  { period: "From 15 hrs to 7 days of departure", deduction: "85% of package cost" },
  { period: "Less than 7 days of departure", deduction: "100% of package cost" }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "pangong-tso-special",
    title: "Pangong Tso Special",
    duration: "6D/5N",
    highlights: ["Leh Palace", "Nubra Valley", "Diskit Monastery", "Pangong Lake"],
    startingPrice: "₹18,550",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹18,550", solo: "₹23,499" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹19,550", solo: "₹24,499" }
    ],
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Leh Arrival & Local", description: "Visit Leh Palace, Leh Market, and Shanti Stupa. Focus on rest and acclimatization." },
      { day: 2, title: "Sham Valley Circuit", description: "Hall of Fame, Spituk, Pathar Sahib, Magnetic Hill, and Sangam Point." },
      { day: 3, title: "Leh to Nubra Valley", description: "Cross Khardungla Pass to reach the Valley of Flowers. Night stay in Nubra." },
      { day: 4, title: "Nubra to Pangong via Shayok", description: "Visit Diskit Monastery and then ride via Shayok route to the majestic Pangong Lake." },
      { day: 5, title: "Pangong to Leh via Chang La", description: "Return to Leh via Chang La Pass. Visit Thiksey and Rancho School on the way." },
      { day: 6, title: "Leh Departure", description: "Airport transfer for your flight home." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Leh", x: 20, y: 70, elevation: "3,500m" },
      { name: "Khardung La", x: 40, y: 30, elevation: "5,359m" },
      { name: "Nubra", x: 60, y: 20, elevation: "3,000m" },
      { name: "Pangong", x: 80, y: 50, elevation: "4,250m" }
    ]
  },
  {
    id: "turtuk-trail",
    title: "The Turtuk Trail",
    duration: "7D/6N",
    highlights: ["Turtuk Village", "Pangong Tso", "Rezang La", "Khardung La"],
    startingPrice: "₹20,499",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹20,499", solo: "₹26,499" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹21,499", solo: "₹27,499" }
    ],
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Leh Arrival", description: "Leh Palace, Market and Shanti Stupa visit." },
      { day: 2, title: "Sham Valley", description: "Hall of Fame, Spituk, Magnetic Hill, Sangam Point." },
      { day: 3, title: "Leh to Nubra", description: "Cross Khardungla to reach the Valley of Flowers." },
      { day: 4, title: "Nubra to Turtuk", description: "Day trip to the last village of India, Turtuk. Return to Nubra for stay." },
      { day: 5, title: "Nubra to Pangong", description: "Ride via Shayok to Pangong Lake. Overnight stay at the lake." },
      { day: 6, title: "Pangong to Leh", description: "Return via Rezang la and Tsagala La to Leh." },
      { day: 7, title: "Departure", description: "Transfer to Leh Airport." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Leh", x: 20, y: 80, elevation: "3,500m" },
      { name: "Nubra", x: 40, y: 40, elevation: "3,000m" },
      { name: "Turtuk", x: 10, y: 20, elevation: "2,800m" },
      { name: "Pangong", x: 80, y: 60, elevation: "4,250m" }
    ]
  },
  {
    id: "umling-la-challenge",
    title: "Umling La Challenge",
    duration: "8D/7N",
    highlights: ["Highest Road", "Hanle", "Pangong", "Turtuk"],
    startingPrice: "₹22,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹22,500", solo: "₹29,850" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹23,500", solo: "₹30,850" }
    ],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Arrival", description: "Leh Palace, Market, Shanti Stupa." },
      { day: 2, title: "Sham Valley", description: "Hall of Fame, Pathar Sahib, Magnetic Hill, Sangam." },
      { day: 3, title: "Leh to Nubra", description: "Khardungla crossing to Nubra Valley." },
      { day: 4, title: "Nubra to Turtuk", description: "Turtuk Village exploration and return to Nubra." },
      { day: 5, title: "Nubra to Pangong", description: "Via Shayok and Diskit Monastery to Pangong." },
      { day: 6, title: "Pangong to Hanle", description: "Via Rezang la and Tsagala La to Hanle (Dark Sky Sanctuary)." },
      { day: 7, title: "Hanle to Leh via Umling La", description: "Conquer the World's Highest Road: Umling La Pass and return to Leh." },
      { day: 8, title: "Departure", description: "Airport Drop." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Leh", x: 20, y: 70, elevation: "3,500m" },
      { name: "Pangong", x: 60, y: 50, elevation: "4,250m" },
      { name: "Hanle", x: 85, y: 70, elevation: "4,300m" },
      { name: "Umling La", x: 95, y: 90, elevation: "5,882m" }
    ]
  },
  {
    id: "grand-loop",
    title: "Manali-Leh-Manali Loop",
    duration: "11D/10N",
    highlights: ["Atal Tunnel", "Sarchu", "Umling La", "Tso Moriri"],
    startingPrice: "₹29,999",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹32,499", solo: "₹38,499" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹33,499", solo: "₹39,499" }
    ],
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Reach Manali", description: "Assemble and acclimatize in Manali." },
      { day: 2, title: "Manali to Jispa", description: "7-8 hours ride through Atal Tunnel." },
      { day: 3, title: "Jispa to Leh", description: "Long ride across Baralacha Pass and Gata Loops." },
      { day: 4, title: "Leh to Nubra", description: "Cross Khardungla to reach Valley of Flowers." },
      { day: 5, title: "Nubra to Turtuk", description: "Border village excursion and return to Nubra." },
      { day: 6, title: "Nubra to Pangong", description: "Via Shayok and Diskit to the Blue Lake." },
      { day: 7, title: "Pangong to Hanle", description: "Ride via Rezang la and Tsagala La." },
      { day: 8, title: "Hanle to Tso Moriri", description: "Via Umling La Pass to the turquoise Tso Moriri lake." },
      { day: 9, title: "Tso Moriri to Sarchu", description: "Via Tso Kar lake (8-9 hours)." },
      { day: 10, title: "Sarchu to Manali", description: "Final descent to Manali." },
      { day: 11, title: "Departure", description: "Trip ends at Manali." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" },
      { name: "Sarchu", x: 30, y: 70, elevation: "4,290m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Umling La", x: 90, y: 60, elevation: "5,882m" },
      { name: "Tso Moriri", x: 75, y: 80, elevation: "4,522m" }
    ]
  },
  {
    id: "manali-ladakh-srinagar",
    title: "Manali-Ladakh-Srinagar Circuit",
    duration: "11D/10N",
    highlights: ["Manali", "Sarchu", "Leh", "Nubra", "Pangong", "Turtuk", "Kargil", "Srinagar"],
    startingPrice: "₹32,499",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹32,499", solo: "₹38,499" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹33,499", solo: "₹39,499" }
    ],
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Arrival at Manali", description: "Assemble and acclimatize in Manali." },
      { day: 2, title: "Manali to Sarchu/Jispa", description: "Via Rohtang Pass (12,000+ ft), 7-8 hours ride." },
      { day: 3, title: "Sarchu to Leh", description: "Long ride across Baralacha Pass and Gata Loops." },
      { day: 4, title: "Leh Local Sightseeing", description: "Hall of Fame, Shanti Stupa, Leh Palace, Market." },
      { day: 5, title: "Leh to Nubra Valley", description: "Cross Khardung La to reach Valley of Flowers." },
      { day: 6, title: "Nubra to Turtuk", description: "Visit the last village of India and return to Nubra." },
      { day: 7, title: "Nubra to Pangong", description: "Via Shayok route to the blue lake." },
      { day: 8, title: "Pangong to Leh", description: "Via Chang La Pass with scenic stops." },
      { day: 9, title: "Leh to Kargil", description: "Via Lamayuru and Mulbekh monasteries." },
      { day: 10, title: "Kargil to Srinagar", description: "Via Drass and Sonamarg to Kashmir valley." },
      { day: 11, title: "Departure from Srinagar", description: "Airport transfer." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" },
      { name: "Sarchu", x: 30, y: 70, elevation: "4,290m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Pangong", x: 80, y: 50, elevation: "4,250m" },
      { name: "Srinagar", x: 20, y: 10, elevation: "1,585m" }
    ]
  },
  {
    id: "srinagar-leh-manali",
    title: "Srinagar-Leh-Manali Circuit",
    duration: "11D/10N",
    highlights: ["Srinagar", "Sonamarg", "Kargil", "Leh", "Nubra", "Pangong", "Hanle", "Tso Moriri", "Manali"],
    startingPrice: "₹34,999",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹34,999", solo: "₹40,999" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹35,999", solo: "₹41,999" }
    ],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Arrival at Srinagar", description: "Airport pickup and Kashmir valley exploration." },
      { day: 2, title: "Srinagar to Kargil", description: "Via Sonamarg (meadow of gold), 5-6 hours drive." },
      { day: 3, title: "Kargil to Leh", description: "Via Lamayuru monastery and Magnetic Hill." },
      { day: 4, title: "Leh Acclimatization", description: "Local sightseeing and rest day." },
      { day: 5, title: "Leh to Nubra Valley", description: "Cross world's highest motorable pass - Khardung La." },
      { day: 6, title: "Nubra Valley Exploration", description: "Diskit Monastery, sand dunes, double-humped camels." },
      { day: 7, title: "Nubra to Pangong", description: "Via Shayok route to the famous blue lake." },
      { day: 8, title: "Pangong to Hanle", description: "Via Rezang La to India's dark sky sanctuary." },
      { day: 9, title: "Hanle to Tso Moriri", description: "High altitude lake at 4,522m elevation." },
      { day: 10, title: "Tso Moriri to Manali", description: "Long descent via Sarchu, 10-12 hours." },
      { day: 11, title: "Departure from Manali", description: "Trip ends at Manali." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Srinagar", x: 15, y: 15, elevation: "1,585m" },
      { name: "Kargil", x: 25, y: 25, elevation: "2,676m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Hanle", x: 85, y: 70, elevation: "4,300m" },
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" }
    ]
  },
  {
    id: "grand-himalayan-loop",
    title: "Grand Himalayan Loop",
    duration: "10D/9N",
    highlights: ["Srinagar", "Kargil", "Leh", "Nubra", "Pangong", "Hanle", "Tso Moriri", "Manali"],
    startingPrice: "₹35,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹35,500", solo: "₹44,200" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹38,500", solo: "₹47,200" }
    ],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Arrival at Srinagar", description: "Airport pickup and Kashmir valley exploration. Stay at Kashmir Deluxe." },
      { day: 2, title: "Srinagar to Kargil", description: "Via Sonamarg (meadow of gold). Stay at Black Sheep/Similar." },
      { day: 3, title: "Kargil to Leh", description: "Via Lamayuru monastery and Magnetic Hill. Stay at Shava Ladakh/Similar." },
      { day: 4, title: "Leh to Nubra Valley", description: "Cross Khardung La to reach Valley of Flowers. Stay at Organic Boutique/Similar." },
      { day: 5, title: "Nubra to Pangong", description: "Via Shayok route to the famous blue lake. Stay at Royal Forest/Similar." },
      { day: 6, title: "Pangong to Hanle", description: "Via Rezang La to India's dark sky sanctuary. Stay at Lotus Camp/Similar." },
      { day: 7, title: "Hanle to Tso Moriri", description: "High altitude lake at 4,522m elevation. Stay at Dolphin House/Similar." },
      { day: 8, title: "Tso Moriri to Sarchu", description: "Via Tso Kar lake crossing. Stay at Gypsy Camp/Similar." },
      { day: 9, title: "Sarchu to Manali", description: "Final descent via Rohtang Pass. Stay at Keylong Inn/Similar." },
      { day: 10, title: "Departure from Manali", description: "Trip ends at Manali with airport transfer." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS,
    hotelDetails: [
      { city: "Srinagar", hotel: "Kashmir Deluxe/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Kargil", hotel: "Black Sheep/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Leh", hotel: "Shava Ladakh/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Nubra Valley", hotel: "Organic Boutique/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Pangong Lake", hotel: "Royal Forest/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Hanle", hotel: "Lotus Camp/Similar", category: "Standard", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Tso Moriri", hotel: "Dolphin House/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Sarchu", hotel: "Gypsy Camp/Similar", category: "Standard", mealPlan: "Breakfast/Dinner", nights: 1 },
      { city: "Manali", hotel: "Keylong Inn/Similar", category: "Deluxe", mealPlan: "Breakfast/Dinner", nights: 1 }
    ],
    routePoints: [
      { name: "Srinagar", x: 15, y: 15, elevation: "1,585m" },
      { name: "Kargil", x: 25, y: 25, elevation: "2,676m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Hanle", x: 85, y: 70, elevation: "4,300m" },
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" }
    ]
  },
  {
    // Fix: Added missing hemis-festival-special referred to in Festivals.tsx
    id: "hemis-festival-special",
    title: "Hemis Festival Special",
    duration: "7D/6N",
    highlights: ["Hemis Monastery", "Masked Dance", "Leh Local", "Pangong Lake"],
    startingPrice: "₹21,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹21,500", solo: "₹27,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹22,500", solo: "₹28,500" }
    ],
    image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc20c8?q=80&w=1000&auto=format&fit=crop",
    itinerary: [
      { day: 1, title: "Leh Arrival", description: "Acclimatize and rest." },
      { day: 2, title: "Hemis Festival Day 1", description: "Witness the grand opening and masked dances." },
      { day: 3, title: "Hemis Festival Day 2", description: "Further exploration of the festival and rituals." },
      { day: 4, title: "Leh to Nubra", description: "Via Khardungla." },
      { day: 5, title: "Nubra to Pangong", description: "Via Shayok." },
      { day: 6, title: "Pangong to Leh", description: "Via Changla." },
      { day: 7, title: "Departure", description: "Airport transfer." }
    ],
    inclusions: COMMON_INCLUSIONS,
    exclusions: COMMON_EXCLUSIONS
  }
];

export const FLEET = [
  {
    name: "RE Himalayan 411cc BS6",
    engine: "411cc Single Cylinder",
    power: "24.3 bhp @ 6500 rpm",
    feature: "Long-travel suspension & high ground clearance",
    image: "/himalayan-bike-new.jpg"
  },
  {
    name: "RE Himalayan 450cc BS6",
    engine: "450cc Single Cylinder",
    power: "40 bhp @ 8000 rpm",
    feature: "Enhanced power delivery & improved fuel efficiency",
    image: "/himalayan-bike-new.jpg"
  }
];

export const UPCOMING_FESTIVALS = [
  {
    name: "Hemis Festival",
    date: "July 06-07, 2025",
    location: "Hemis Monastery",
    description: "The biggest and most colorful festival of Ladakh.",
    image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc20c8?q=80&w=1000&auto=format&fit=crop"
  }
];

// Fix: Add missing YOUTUBE_VIDEOS export required by VideoGallery.tsx
export const YOUTUBE_VIDEOS = [
  { id: "pNSBrWDu6Fc", title: "Ladakh Adventure Journey" },
  { id: "rzSrTC1r1lM", title: "Himalayan Expedition" },
  { id: "p7jcWjXYAbA", title: "Travel Songs India - Ladakh" },
  { id: "-dLha0UP8qA", title: "Ladakh Bike Tour Experience" }
];

// Tour Categories for Navigation
export const TOUR_CATEGORIES = {
  LOCAL_EXPEDITIONS: {
    title: "Local Expeditions",
    subtitle: "6-8 Days | Leh Based",
    tours: ["pangong-tso-special", "turtuk-trail", "umling-la-challenge"]
  },
  GRAND_CIRCUITS: {
    title: "Grand Circuits",
    subtitle: "10-11 Days | Multi-City",
    tours: ["grand-loop", "grand-himalayan-loop", "manali-ladakh-srinagar", "srinagar-leh-manali"]
  },
  FESTIVAL_SPECIALS: {
    title: "Festival Specials",
    subtitle: "Cultural Tours",
    tours: ["hemis-festival-special"]
  }
};

export const USP_LIST = [
  {
    title: "རང་ས་རང་མི། Local Born",
    desc: "Tsewang Norboo - Born in Leh, raised by these mountains. This is my home, not just business.",
    icon: "🏔️"
  },
  {
    title: "ཁྱིམ་ཚང་གི་སྐུ་ཞབས། Family Service",
    desc: "You're not customers - you're guests in our family. Personal care like visiting relatives.",
    icon: "🏠"
  },
  {
    title: "བདེ་འཇགས། Safety & Care",
    desc: "My father's wisdom + modern safety. Oxygen, mechanics, and mountain experience since childhood.",
    icon: "🙏"
  },
  {
    title: "གསང་སྔགས། Hidden Stories",
    desc: "Secret viewpoints, monastery stories, family recipes. Things guidebooks can't teach.",
    icon: "📿"
  }
];
