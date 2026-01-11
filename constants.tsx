
import React from 'react';
import { TourPackage, CancellationPolicy } from './types';

export const COMPANY_NAME = "Himalayan Marmot";
export const FOUNDER_NAME = "Tsewang Norboo";
export const CONTACT_NUMBERS = ["+91 6006114260", "+91 9906367672"];
export const EMAIL = "himalayanmarmot19@gmail.com";
export const ADDRESS_MAIN = "Housing Colony, near Radio Station, Leh Ladakh, India - 194101";
export const ADDRESS_OFFICE = "Main market, near Samsung show room Leh Ladakh - 194101";
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
  accountNo: "120001572039",
  bank: "Canara Bank",
  ifsc: "CNRB0017651",
  accountName: "Himalayan Marmot"
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
    id: "ladakh-land-of-high-passes",
    title: "Ladakh Land of High Passes (Leh Circuit)",
    duration: "6D/5N",
    highlights: ["Leh Palace", "Shanti Stupa", "Hall of Fame", "Magnetic Hill", "Sangam Point", "Nubra Valley", "Pangong Lake", "Khardung La", "Best for: First Timers & Families"],
    startingPrice: "₹18,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹18,500", solo: "₹24,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹22,500", solo: "₹28,500" }
    ],
    image: "/Ladakh Land of High Passes (Leh Circuit).png",
    pdfUrl: "/packages/Ladakh Land of High Passes 2026-3.pdf",
    itinerary: [
      { day: 1, title: "DELHI – LEH", description: "Arrival at Leh Airport. Himalayan Marmot representative will receive you. Visit Leh Palace and Shanti Stupa in the evening. Rest for acclimatization." },
      { day: 2, title: "LEH - MAGNETIC HILL - SANGAM", description: "Guided tour of Hall of Fame, Spituk Monastery, Pathar Sahib, Magnetic Hill, and Sangam point." },
      { day: 3, title: "LEH – KHARDUNGLA - NUBRA VALLEY", description: "Drive over Khardung La (18,300 ft), the world's highest motorable road. Visit Hunder sand dunes for a camel safari." },
      { day: 4, title: "NUBRA VALLEY - PANGONG VIA SHAYOK", description: "Travel to Pangong Lake via Shayok valley, visiting Diskit Monastery en route. Overnight at lakeside camp." },
      { day: 5, title: "PANGONG - LEH VIA CHANGLA PASS", description: "Return to Leh via Changla Pass (17,350 ft), visiting Thiksey and Shey monasteries and Hemis." },
      { day: 6, title: "LEH - DEPARTURE", description: "Morning transfer to Leh airport for your flight back home." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Class A / Deluxe",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Leh", x: 20, y: 70, elevation: "3,500m" },
      { name: "Khardung La", x: 40, y: 30, elevation: "5,359m" },
      { name: "Nubra", x: 60, y: 20, elevation: "3,000m" },
      { name: "Pangong", x: 80, y: 50, elevation: "4,250m" }
    ],
    variants: []
  },
  {
    id: "manali-ladakh-manali",
    title: "Manali – Ladakh – Manali (Umling La + Tsomoriri)",
    duration: "11D/10N",
    highlights: ["Rohtang Pass", "Jispa", "Leh", "Khardung La", "Nubra Valley", "Umling La", "Tso Moriri", "Best for: Adventure Seekers & High Altitude Lovers"],
    startingPrice: "₹36,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹36,500", solo: "₹42,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹39,999", solo: "₹46,500" }
    ],
    image: "/Manali - Ladakh - Manali.png",
    pdfUrl: "/packages/Manali - Ladakh - Manalai 2026-3.pdf",
    itinerary: [
      { day: 1, title: "MANALI - SARCHU", description: "Manali – Sarchu – Leh – Sham Valley – Nubra – Pangong – Hanle – Umling La – Tso Moriri – Sarchu – Manali – Delhi (Volvo)" },
      { day: 2, title: "Manali to Jispa", description: "Ride via Rohtang Pass to the picturesque village of Jispa." },
      { day: 3, title: "Jispa to Leh", description: "Scale five major mountain passes including Tanglang La to reach Leh." },
      { day: 4, title: "Leh - Sham Valley", description: "Visit Sangam Point, Magnetic Hill, Hall of Fame, and Spituk Monastery." },
      { day: 5, title: "Leh to Nubra Valley Via Khardungla Pass", description: "Cross Khardung La Pass (18,380 ft) to reach Nubra Valley sand dunes." },
      { day: 6, title: "Nubra Valley via Shayok - Pangong", description: "Drive alongside the Shayok river to reach high-altitude Pangong Tso lake." },
      { day: 7, title: "Pangong to Hanle via Rezang la", description: "Travel through remote border regions via Rezang La war memorial." },
      { day: 8, title: "Hanle - Tsomiri via Umling la pass", description: "Scale Umling La (19,300 ft), the world's highest motorable pass." },
      { day: 9, title: "Tsomiri - Sarchu", description: "Begin return journey by crossing high passes to reach Sarchu plateau." },
      { day: 10, title: "Sarchu - Manali", description: "Ride back to Manali via Baralacha La and Rohtang Pass." },
      { day: 11, title: "Manali - Delhi", description: "Depart from Manali via Volvo bus for the final leg to Delhi." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Deluxe (Hanle Standard Homestay)",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" },
      { name: "Sarchu", x: 30, y: 70, elevation: "4,290m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 55, elevation: "4,250m" },
      { name: "Umling La", x: 90, y: 80, elevation: "5,882m" },
      { name: "Tso Moriri", x: 80, y: 75, elevation: "4,522m" }
    ]
  },
  {
    id: "manali-leh-srinagar",
    title: "Manali – Leh – Srinagar Trip (Umling La + Kargil)",
    duration: "11D/10N",
    highlights: ["Rohtang Pass", "Khardung La", "Pangong Tso", "Hanle", "Umling La", "Zojila Pass", "Srinagar", "Best for: Complete Himalayan Experience"],
    startingPrice: "₹36,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹36,500", solo: "₹42,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹39,999", solo: "₹46,500" }
    ],
    image: "/Manali - Leh - Srinagar.png",
    pdfUrl: "/packages/Manali leh -Srinagar 2026 5.pdf",
    itinerary: [
      { day: 1, title: "Reached in Manali", description: "Arrive in Manali, check into hotel, and explore the local mall road." },
      { day: 2, title: "Manali to Jispa", description: "Journey via high-altitude Rohtang Pass to a riverside camp in Jispa." },
      { day: 3, title: "Jispa to Leh", description: "Traverse More Plains and multiple 16,000+ ft passes to reach Leh." },
      { day: 4, title: "Leh - Sham Valley", description: "Visit Magnetic Hill, Sangam Point, and the War Memorial." },
      { day: 5, title: "Leh to Nubra Valley Via Khardungla Pass", description: "Cross mighty Khardung La (18,380 ft) to reach the Nubra cold desert." },
      { day: 6, title: "Nubra Valley via Shayok - Pangong", description: "Drive through beautiful Shayok valley to iconic blue waters of Pangong Tso." },
      { day: 7, title: "Pangong to Hanle via Rezang la", description: "Ride through restricted border region to arrive in Hanle." },
      { day: 8, title: "Hanle - Leh via Umling la pass", description: "Conquer the world's highest motorable road at Umling La (19,300 ft)." },
      { day: 9, title: "Leh to Kargil via Fotula", description: "Journey towards Kargil, stopping at the Lamayuru 'Moonland'." },
      { day: 10, title: "Kargil to Srinagar via Zojila", description: "Cross Zojila Pass to reach the beautiful valley of Srinagar." },
      { day: 11, title: "Delhi Departure", description: "Morning transfer to Srinagar airport for your flight home." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Deluxe (Hanle Standard Homestay)",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" },
      { name: "Sarchu", x: 30, y: 70, elevation: "4,290m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 55, elevation: "4,250m" },
      { name: "Kargil", x: 35, y: 20, elevation: "2,676m" },
      { name: "Srinagar", x: 25, y: 10, elevation: "1,585m" }
    ]
  },
  {
    id: "srinagar-leh-manali",
    title: "Srinagar – Leh – Manali (Turtuk + Umling La + Tsomoriri)",
    duration: "11D/10N",
    highlights: ["Srinagar", "Kargil", "Leh", "Nubra", "Pangong", "Hanle", "Tso Moriri", "Best for: High Passes & Culture Mix"],
    startingPrice: "₹36,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹36,500", solo: "₹42,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹39,000", solo: "₹46,500" }
    ],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000&auto=format&fit=crop",
    pdfUrl: "/packages/Srinagar Leh Manali-2026 2.pdf",
    itinerary: [
      { day: 1, title: "Arrive Srinagar", description: "Arrival and transfer to hotel in Srinagar." },
      { day: 2, title: "Srinagar to Kargil", description: "Drive through Zojila Pass and Drass to Kargil." },
      { day: 3, title: "Kargil to Leh", description: "Visit Mulbekh & Lamayuru monasteries and Moon Landscape." },
      { day: 4, title: "Leh to Nubra Valley", description: "Ride over Khardung La to the camel safari in Hunder." },
      { day: 5, title: "Nubra to Turtuk", description: "Explore the unique culture of Turtuk village." },
      { day: 6, title: "Nubra to Pangong", description: "Ride to the famous blue Pangong Lake via Shyok valley." },
      { day: 7, title: "Pangong to Hanle", description: "Off-road journey via Rezang La and Tsaga La." },
      { day: 8, title: "Hanle to Tso Moriri", description: "Visit the legendary Umling La (19,300 ft) before reaching Tso Moriri lake." },
      { day: 9, title: "Tso Moriri to Sarchu", description: "Cross Tso Kar lake, Lachungla, and Nakeela passes." },
      { day: 10, title: "Sarchu to Manali", description: "Final leg across Baralacha Pass and Rohtang/Atal Tunnel to Manali." },
      { day: 11, title: "Departure", description: "Transfer to Manali bus stand/airport." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Deluxe (some Standard camps/homestay)",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Srinagar", x: 20, y: 10, elevation: "1,585m" },
      { name: "Kargil", x: 30, y: 25, elevation: "2,676m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 55, elevation: "4,250m" },
      { name: "Hanle", x: 85, y: 70, elevation: "4,300m" },
      { name: "Tso Moriri", x: 80, y: 75, elevation: "4,522m" },
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" }
    ]
  },
  {
    id: "zanskar-umling-la",
    title: "Explore Zanskar to Umling La (Most Extreme)",
    duration: "12D/11N",
    highlights: ["Shinkula Pass", "Phugtal Monastery", "Zanskar", "Umling La", "Pangong Tso", "Best for: Extreme Riders & Off-road"],
    startingPrice: "₹44,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹44,500", solo: "₹52,799" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹48,500", solo: "₹56,500" }
    ],
    image: "/Zanskar to Umling LA.png",
    pdfUrl: "/packages/ZAngskar to UMling LA-6.pdf",
    itinerary: [
      { day: 0, title: "Delhi to Manali", description: "Overnight bus journey from Delhi." },
      { day: 1, title: "Manali Arrival", description: "Bike handover and local Manali exploration." },
      { day: 2, title: "Manali to Jispa", description: "Drive through Atal Tunnel into the Lahaul Valley." },
      { day: 3, title: "Jispa to Padum", description: "Cross the high Shinkula Pass (16,580 ft) to enter Zanskar." },
      { day: 4, title: "Padum to Purne", description: "Visit Phugtal Monastery, uniquely built into a cliff side." },
      { day: 5, title: "Padum to Leh", description: "Epic journey via Lingshet through the Zanskar mountains to Leh." },
      { day: 6, title: "Leh to Nubra", description: "Ride over Khardung La to the high-altitude desert." },
      { day: 7, title: "Nubra to Pangong", description: "Visit Diskit monastery followed by the ride to Pangong Lake." },
      { day: 8, title: "Pangong to Hanle", description: "Off-road ride along the border via Rezang La." },
      { day: 9, title: "Hanle to Tsomoriri", description: "Summit Umling La (19,300 ft) before reaching Tso Moriri." },
      { day: 10, title: "Tsomoriri to Sarchu", description: "Crossing the vast Moore Plains." },
      { day: 11, title: "Sarchu to Manali", description: "Final descent back to Manali over Baralacha Pass." },
      { day: 12, title: "Departure", description: "Transfer from Manali for onward journey." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Mixed Deluxe/Standard camps/homestays",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" },
      { name: "Jispa", x: 25, y: 80, elevation: "3,200m" },
      { name: "Padum", x: 40, y: 60, elevation: "3,669m" },
      { name: "Leh", x: 50, y: 40, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 55, elevation: "4,250m" },
      { name: "Umling La", x: 90, y: 80, elevation: "5,882m" }
    ]
  },
  {
    id: "ride-to-heaven",
    title: "Ride to Heaven (Umling La + Hanle)",
    duration: "8D/7N",
    highlights: ["Hanle", "Umling La", "Pangong Tso", "Nubra Valley", "Best for: Leisure & Scenic Riders"],
    startingPrice: "₹26,000",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹26,000", solo: "₹30,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹29,000", solo: "₹36,500" }
    ],
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
    pdfUrl: "/packages/Ride To Heaven 2026.pdf",
    itinerary: [
      { day: 1, title: "Leh – Leh", description: "Arrival at Leh Airport, hotel transfer, and a full day of rest for acclimatization." },
      { day: 2, title: "Leh Sightseeing", description: "Visit Hall of Fame, Spituk, Pathar Sahib, Magnetic Hill, and Sangam." },
      { day: 3, title: "Leh to Nubra Valley", description: "Ride through Khardung La Pass (18,380 ft) to visit Hunder sand dunes." },
      { day: 4, title: "Nubra Valley to Turtuk", description: "Visit remote Turtuk village, the last village on the Indo-Pak border." },
      { day: 5, title: "Nubra Valley to Pangong", description: "Scenic ride to Pangong Lake via the Shyok river route." },
      { day: 6, title: "Pangong to Hanle", description: "Off-road ride along the lake to Hanle via Rezang La." },
      { day: 7, title: "Hanle to Leh", description: "Return to Leh via Umling La, the world's highest motorable pass (19,024 ft)." },
      { day: 8, title: "Leh-Departure", description: "Transfer to Leh airport for your flight." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Deluxe (Hanle Standard Homestay)",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Leh", x: 20, y: 70, elevation: "3,500m" },
      { name: "Nubra", x: 50, y: 20, elevation: "3,000m" },
      { name: "Pangong", x: 70, y: 50, elevation: "4,250m" },
      { name: "Hanle", x: 80, y: 75, elevation: "4,300m" },
      { name: "Umling La", x: 90, y: 85, elevation: "5,882m" }
    ]
  },
  {
    id: "turtuk-valley",
    title: "Ladakh With Turtuk Valley",
    duration: "7D/6N",
    highlights: ["Turtuk Village", "Pangong Tso", "Nubra Valley", "Khardung La", "Best for: Culture & Landscape Photography"],
    startingPrice: "₹22,500",
    priceTiers: [
      { bike: "RE Himalayan 411cc BS6", dual: "₹22,500", solo: "₹27,500" },
      { bike: "RE Himalayan 450cc BS6", dual: "₹27,500", solo: "₹32,500" }
    ],
    image: "/Turtuk Valley.png",
    pdfUrl: "/packages/turtuk Valley2026-9.pdf",
    itinerary: [
      { day: 1, title: "Leh – Leh", description: "Welcome at Leh airport and full day rest for altitude adjustment." },
      { day: 2, title: "Leh Sightseeing", description: "Local tour of Hall of Fame, Pathar Sahib, Magnetic Hill, and Sangam." },
      { day: 3, title: "Leh to Nubra Valley", description: "Ride across Khardung La to the Hunder sand dunes." },
      { day: 4, title: "Nubra to Turtuk", description: "Visit the northernmost village of Turtuk." },
      { day: 5, title: "Nubra to Pangong", description: "Journey to Pangong Lake via the Shyok river route." },
      { day: 6, title: "Pangong to Leh", description: "Return via Changla Pass, visiting Thiksey monastery and Shey Palace." },
      { day: 7, title: "Leh-Departure", description: "Transfer to airport for departure flight." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Deluxe",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Leh", x: 20, y: 80, elevation: "3,500m" },
      { name: "Khardung La", x: 35, y: 40, elevation: "5,359m" },
      { name: "Nubra", x: 40, y: 20, elevation: "3,000m" },
      { name: "Turtuk", x: 10, y: 15, elevation: "2,800m" },
      { name: "Pangong", x: 80, y: 60, elevation: "4,250m" }
    ]
  },
];

// Local Tours Packages

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
    image: "/royalenfieldhimalayan450rightsideview.webp"
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
    tours: ["ladakh-land-of-high-passes", "turtuk-valley", "ride-to-heaven"]
  },
  GRAND_CIRCUITS: {
    title: "Grand Circuits",
    subtitle: "10-12 Days | Multi-City",
    tours: ["manali-ladakh-manali", "manali-leh-srinagar", "srinagar-leh-manali", "zanskar-umling-la"]
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

export const BLOG_POSTS = [
  {
    id: "best-time-to-visit-ladakh",
    title: "Best Time to Visit Ladakh: A Rider's Guide",
    excerpt: "Planning your trip? Learn about the pass opening times, weather patterns, and the magical seasons of the Himalayas.",
    date: "May 15, 2025",
    author: "Tsewang Norboo",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "essential-gear-list",
    title: "Essential Gear List for High Altitude Expeditions",
    excerpt: "Don't leave without these essentials. A comprehensive list of riding gear, clothing, and medicine for your Zanskar or Leh trip.",
    date: "June 02, 2025",
    author: "Himalayan Marmot Team",
    category: "Gear",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "hidden-monasteries-of-zanskar",
    title: "The Hidden Monasteries of Zanskar",
    excerpt: "Beyond the tourist trails lie ancient sanctuaries built into cliffs. Discover the spiritual secrets of the Phugtal and Lingshed.",
    date: "June 20, 2025",
    author: "Tsewang Norboo",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop"
  }
];
