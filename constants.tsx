
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
export const YOUTUBE_URL = "https://www.youtube.com/@Ladakhpackage";

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
  { period: "From 15 days to 7 days of departure", deduction: "85% of package cost" },
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
    pdfUrl: "/packages/Ladakh%20Land%20of%20High%20Passes%202026-3.pdf",
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
      { name: "Leh", x: 20, y: 60, elevation: "3,500m" },
      { name: "Khardung La", x: 40, y: 20, elevation: "5,359m" },
      { name: "Nubra", x: 60, y: 70, elevation: "3,000m" },
      { name: "Pangong", x: 80, y: 45, elevation: "4,250m" }
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
    pdfUrl: "/packages/Manali%20-%20Ladakh%20-%20Manalai%202026-3.pdf",
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
      { name: "Sarchu", x: 30, y: 45, elevation: "4,290m" },
      { name: "Leh", x: 50, y: 60, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 45, elevation: "4,250m" },
      { name: "Umling La", x: 90, y: 10, elevation: "5,882m" },
      { name: "Tso Moriri", x: 80, y: 40, elevation: "4,522m" }
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
    pdfUrl: "/packages/Manali%20leh%20-Srinagar%202026%205.pdf",
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
      { name: "Sarchu", x: 30, y: 45, elevation: "4,290m" },
      { name: "Leh", x: 50, y: 60, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 45, elevation: "4,250m" },
      { name: "Kargil", x: 35, y: 80, elevation: "2,676m" },
      { name: "Srinagar", x: 25, y: 90, elevation: "1,585m" }
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
    pdfUrl: "/packages/Srinagar%20Leh%20Manali-2026%202.pdf",
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
      { name: "Srinagar", x: 20, y: 90, elevation: "1,585m" },
      { name: "Kargil", x: 30, y: 80, elevation: "2,676m" },
      { name: "Leh", x: 50, y: 60, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 45, elevation: "4,250m" },
      { name: "Hanle", x: 85, y: 44, elevation: "4,300m" },
      { name: "Tso Moriri", x: 80, y: 40, elevation: "4,522m" },
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
    pdfUrl: "/packages/ZAngskar%20to%20UMling%20LA-6.pdf",
    itinerary: [
      { day: 0, title: "Delhi to Manali", description: "The journey begins with an overnight drive from Delhi to Manali, passing scenic landscapes and mountainous terrain. You'll arrive in Manali the next morning and check into your hotel, preparing for the adventure ahead." },
      { day: 1, title: "Manali Arrival", description: "Arrival at Manali bus stand. Himalayan Marmot Representative will receive you at the bus stand and take you to your hotel. Relax by the courtyard upon arrival. While you enjoy your cup of tea / butter tea, the room keys will be handed over to you. Today you will visit Manali market. Spend the rest of the day free for high altitude acclimatization. Overnight at your hotel." },
      { day: 2, title: "Manali to Jispa", description: "After breakfast drive towards Jispa, passing through the Atal Tunnel/Rohtang Pass (12,000ft) for a scenic photo-op. Continue through Keylong (10,000ft) and Darcha to reach Jispa. Overnight stay at Camp/Hotel." },
      { day: 3, title: "Jispa to Padum Via Phugtal Monastery", description: "Begin the day heading towards the challenging Shinku La (5,090 Meters), a high altitude pass offering stunning views of snow-capped peaks. After crossing Shinku La, enjoy the sight of Gonbo Ranjon, a towering mountain that adds to the rugged beauty of the region. Finally, arrive in the remote village of Purne, and end the day with a small trek to the iconic Phugtal Monastery, built into the cliffs. After the visit, continue your journey towards Padum, the administrative town of Zanskar valley. Overnight stay at Camp/Hotel." },
      { day: 4, title: "Padum to Lamayuru Via Lingshet", description: "After early breakfast begin your journey from Padum to Lamayuru via Lingshet. The route crosses two high-altitude passes: Singe La (4,900 meters) and Sirsi La (4,800 meters), offering stunning views of the Zanskar Range. The landscape features rugged mountains, vast desert-like valleys, and the serene Zangla Valley. You’ll be captivated by the rugged beauty before reaching Lamayuru, renowned for its ancient monastery nestled in the heart of this mesmerizing terrain." },
      { day: 5, title: "Lamayuru to Leh", description: "Today, journey from Lamayuru to Leh. The route offers breathtaking views of the Indus river and surrounding mountains. On the way you’ll also pass the enigmatic Magnetic Hill, known for its unique optical illusion where vehicles appear to move uphill. Once you reach Leh, take time to explore local attractions such as the Leh Palace, Shanti Stupa and Local Market. Overnight at the Hotel." },
      { day: 6, title: "Leh to Nubra Valley Via Khardungla Pass", description: "Morning after a relaxed breakfast, ride to Nubra Valley. The route from Leh takes you over Khardung-La, the highest motorable road in the world (18,300 feet / 5,578 m). The view from the top is amazing, overlooking the Indus valley to the Zanskar range and the Saser massif. Drive towards Nubra Valley (Valley of Flowers) and visit the sand dunes for a cold desert camel safari. Overnight stay at Camp." },
      { day: 7, title: "Nubra Valley - via Shayok - Pangong", description: "After breakfast leave for Pangong Lake (14,500 ft) via Shyok valley, visiting Diskit monastery en route. Arrive at Pangong Lake, the highest salt water lake in the world, shared by India & China. Enjoy the beauty of the lake and its changing colors. Overnight stay at Cottage/Camp." },
      { day: 8, title: "Pangong to Hanle via Rezang La", description: "Traverse the distance from Pangong to Hanle via Rezang La (14,500 ft), an off-beat route. Ride along the immaculate waters of Pangong lake, crossing Merak Village and Chushul. Riding further on the Loma bridge, move towards Hanle – a historic village hosting the world's highest astronomical observatory. This is a restricted area open only to domestic tourists with permits. Overnight stay at Home stay." },
      { day: 9, title: "Hanle – Tso Moriri via Umling La", description: "After early breakfast, checkout and visit the world's highest motorable road, Umling La Pass (19,300 ft). Afterwards, drive to Tso Moriri via Mahey bridge. Overnight Stay at Camp." },
      { day: 10, title: "Tso Moriri to Sarchu via Tso Kar", description: "After breakfast, proceed to Sarchu via Puga Valley (famous for hot springs), Tso Kar lake, and the Manali-Leh Highway. Cross Lachung La (16,617 ft) and Nakee La, traveling through the vast Moore Plains (Skyangchu Thang). Reach Sarchu by late evening. Overnight stay at the Camp." },
      { day: 11, title: "Sarchu – Manali", description: "After breakfast, proceed to Manali via Baralacha Pass (15,000+ ft), Keylong, and Rohtang Pass/Atal Tunnel. Reach Manali by evening. Overnight stay at the Hotel." },
      { day: 12, title: "Manali to Delhi", description: "After breakfast check out from hotel and proceed towards your onward destination." }
    ],
    inclusions: [
      ...COMMON_INCLUSIONS,
      "Hotel Category: Mixed Deluxe/Standard camps/homestays",
      "Meal Plan: MAP (Breakfast + Dinner)"
    ],
    exclusions: COMMON_EXCLUSIONS,
    routePoints: [
      { name: "Manali", x: 10, y: 95, elevation: "2,050m" },
      { name: "Jispa", x: 25, y: 65, elevation: "3,200m" },
      { name: "Padum", x: 40, y: 58, elevation: "3,669m" },
      { name: "Leh", x: 50, y: 60, elevation: "3,500m" },
      { name: "Pangong", x: 75, y: 45, elevation: "4,250m" },
      { name: "Umling La", x: 90, y: 10, elevation: "5,882m" }
    ],
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
    pdfUrl: "/packages/Ride%20To%20Heaven%202026.pdf",
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
      { name: "Leh", x: 20, y: 60, elevation: "3,500m" },
      { name: "Nubra", x: 50, y: 70, elevation: "3,000m" },
      { name: "Pangong", x: 70, y: 45, elevation: "4,250m" },
      { name: "Hanle", x: 80, y: 44, elevation: "4,300m" },
      { name: "Umling La", x: 90, y: 10, elevation: "5,882m" }
    ],
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
    pdfUrl: "/packages/turtuk%20Valley2026-9.pdf",
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
      { name: "Leh", x: 20, y: 60, elevation: "3,500m" },
      { name: "Khardung La", x: 35, y: 20, elevation: "5,359m" },
      { name: "Nubra", x: 40, y: 70, elevation: "3,000m" },
      { name: "Turtuk", x: 10, y: 75, elevation: "2,800m" },
      { name: "Pangong", x: 80, y: 45, elevation: "4,250m" }
    ],
  }
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
  { id: "KfktZV7t1To", title: "Ladakh Adventure Journey" },
  { id: "qGQROLS_Ed8", title: "Ladakh Bike Tour Experience" }
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
  },
  {
    id: "conquering-khardung-la",
    title: "Conquering Khardung La: World's Highest Motorable Road",
    excerpt: "Experience the thrill of riding at 18,380 feet. Tips, challenges, and what to expect on this legendary mountain pass.",
    date: "July 08, 2025",
    author: "Tsewang Norboo",
    category: "Adventure",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "altitude-sickness-prevention",
    title: "Altitude Sickness: Prevention and Management Guide",
    excerpt: "Stay safe at high altitudes. Learn the symptoms, prevention strategies, and emergency protocols for riding above 10,000 feet.",
    date: "July 22, 2025",
    author: "Himalayan Marmot Team",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "pangong-lake-complete-guide",
    title: "Pangong Lake: The Complete Rider's Guide",
    excerpt: "From Leh to the stunning blue waters of Pangong Tso. Route details, camping spots, and photography tips for this iconic destination.",
    date: "August 05, 2025",
    author: "Tsewang Norboo",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "royal-enfield-maintenance-ladakh",
    title: "Royal Enfield Maintenance Tips for Ladakh Tours",
    excerpt: "Keep your bike running smoothly in extreme conditions. Essential maintenance checks and common issues to watch for on mountain roads.",
    date: "August 18, 2025",
    author: "Himalayan Marmot Team",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "ladakhi-cuisine-food-guide",
    title: "Ladakhi Cuisine: A Food Lover's Guide to the Himalayas",
    excerpt: "Discover authentic Ladakhi dishes from momos to thukpa. Where to eat, what to try, and the cultural significance of local food.",
    date: "September 02, 2025",
    author: "Tsewang Norboo",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "photography-tips-himalayas",
    title: "Capturing the Himalayas: Photography Tips for Riders",
    excerpt: "Master landscape photography on two wheels. Camera settings, best times, and techniques for stunning mountain shots.",
    date: "September 15, 2025",
    author: "Himalayan Marmot Team",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "nubra-valley-sand-dunes",
    title: "Nubra Valley: Where Desert Meets Mountains",
    excerpt: "Ride through the surreal landscape of Nubra Valley. Double-humped camels, sand dunes, and the journey through Khardung La.",
    date: "October 01, 2025",
    author: "Tsewang Norboo",
    category: "Destinations",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "solo-vs-group-riding",
    title: "Solo Riding vs Group Tours: Which is Right for You?",
    excerpt: "Weighing the pros and cons of solo adventures versus guided group expeditions in the Himalayas.",
    date: "October 12, 2025",
    author: "Himalayan Marmot Team",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "permits-and-documentation",
    title: "Inner Line Permits and Documentation for Ladakh",
    excerpt: "Navigate the paperwork hassle-free. Complete guide to permits, IDs, and documents needed for restricted areas in Ladakh.",
    date: "October 28, 2025",
    author: "Tsewang Norboo",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"
  }
];

// Detailed blog posts with full content
export const BLOG_POSTS_DETAILED = [
  {
    id: "best-time-to-visit-ladakh",
    title: "Best Time to Visit Ladakh: A Rider's Guide",
    excerpt: "Planning your trip? Learn about the pass opening times, weather patterns, and the magical seasons of the Himalayas.",
    date: "May 15, 2025",
    author: "Tsewang Norboo",
    category: "Planning",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    readTime: "8 min read",
    content: [
      {
        heading: "Understanding Ladakh's Seasons",
        paragraphs: [
          "Ladakh, often called the 'Land of High Passes,' experiences extreme weather conditions throughout the year. The region remains cut off from the rest of India for nearly six months due to heavy snowfall that blocks the mountain passes. Understanding the seasonal patterns is crucial for planning your motorcycle expedition.",
          "The riding season in Ladakh is relatively short, typically running from late May to mid-September. However, each month within this window offers a unique experience, and choosing the right time depends on your preferences, riding experience, and what you want to see."
        ]
      },
      {
        heading: "May to June: The Opening Season",
        paragraphs: [
          "Late May marks the beginning of the riding season when the Border Roads Organisation (BRO) clears the snow from major passes like Rohtang La and Khardung La. This period is characterized by cool temperatures, occasional snowfall at high altitudes, and pristine landscapes with snow-capped peaks.",
          "The Manali-Leh highway typically opens around late May, while the Srinagar-Leh route opens slightly earlier in mid-May. During this time, you'll witness the dramatic transformation as the region awakens from its winter slumber."
        ],
        list: [
          {
            title: "Temperature Range",
            description: "Day: 15-20°C, Night: 0-5°C at Leh; High passes can be -5 to 5°C"
          },
          {
            title: "Road Conditions",
            description: "Freshly cleared but may have patches of ice and slush at higher altitudes"
          },
          {
            title: "Crowds",
            description: "Moderate tourist traffic, peaceful monasteries and villages"
          },
          {
            title: "Best For",
            description: "Experienced riders who enjoy challenging conditions and pristine snow views"
          }
        ],
        tips: [
          "Carry extra warm clothing and waterproof gear",
          "Check pass opening status daily with BRO",
          "Book accommodations in advance as many hotels are still opening",
          "Expect road closures due to sudden snowfall",
          "Carry tire chains for emergency situations"
        ]
      },
      {
        heading: "July to August: Peak Season",
        paragraphs: [
          "July and August constitute the peak tourist season in Ladakh. The weather is at its warmest, all passes are open, and the region is in full bloom. This is when Ladakh receives the maximum number of visitors, and the infrastructure is fully operational.",
          "The famous Hemis Festival usually falls in July, offering a unique cultural experience. The days are long and pleasant, perfect for extended riding sessions and photography. However, this is also when you'll encounter the most traffic on popular routes."
        ],
        list: [
          {
            title: "Temperature Range",
            description: "Day: 20-30°C, Night: 10-15°C at Leh; High passes: 5-15°C"
          },
          {
            title: "Road Conditions",
            description: "Excellent on main highways, dusty on remote routes"
          },
          {
            title: "Crowds",
            description: "Heavy tourist traffic, especially on Manali-Leh and Pangong routes"
          },
          {
            title: "Best For",
            description: "First-time visitors, families, and those seeking comfortable weather"
          }
        ],
        tips: [
          "Book hotels and homestays at least 2-3 months in advance",
          "Start early morning rides to avoid traffic on popular routes",
          "Carry sunscreen and sunglasses - UV radiation is intense",
          "Stay hydrated - the dry climate can be deceptive",
          "Expect higher prices for accommodation and services"
        ]
      },
      {
        heading: "September: The Golden Month",
        paragraphs: [
          "September is arguably the best time to visit Ladakh for motorcycle enthusiasts. The summer crowds have thinned out, the weather remains pleasant, and the landscape transforms into stunning shades of gold and brown. The clear skies offer exceptional visibility and photography opportunities.",
          "This is the month when experienced riders prefer to visit. The roads are in their best condition after the summer maintenance, and you'll have more space to enjoy the rides without the peak season rush."
        ],
        list: [
          {
            title: "Temperature Range",
            description: "Day: 15-25°C, Night: 5-10°C at Leh; High passes: 0-10°C"
          },
          {
            title: "Road Conditions",
            description: "Excellent, well-maintained after summer season"
          },
          {
            title: "Crowds",
            description: "Moderate, significantly less than July-August"
          },
          {
            title: "Best For",
            description: "Photographers, experienced riders, and those seeking solitude"
          }
        ],
        tips: [
          "Carry layers as temperature variations increase",
          "Some high-altitude lakes may start freezing by late September",
          "Book early as many hotels start closing by month-end",
          "Perfect time for Pangong and Tso Moriri visits",
          "Ideal for attempting challenging routes like Umling La"
        ]
      },
      {
        heading: "Pass Opening and Closing Dates",
        paragraphs: [
          "The exact opening and closing dates of passes vary each year depending on snowfall and weather conditions. Here's a general timeline based on historical data:"
        ],
        list: [
          {
            title: "Rohtang La (13,050 ft)",
            description: "Opens: Late May | Closes: Mid-October"
          },
          {
            title: "Khardung La (17,582 ft)",
            description: "Opens: Late May | Closes: Late October"
          },
          {
            title: "Chang La (17,590 ft)",
            description: "Opens: Late May | Closes: Late October"
          },
          {
            title: "Tanglang La (17,480 ft)",
            description: "Opens: Mid-May | Closes: Mid-October"
          },
          {
            title: "Umling La (19,300 ft)",
            description: "Opens: Early June | Closes: Early October"
          }
        ],
        warning: "Always check current pass status with local authorities or BRO before planning your route. Weather conditions can change rapidly, and passes may close temporarily even during the season."
      },
      {
        heading: "Weather Considerations for Riders",
        paragraphs: [
          "Ladakh's weather is notoriously unpredictable. Even during summer, you can experience four seasons in a single day. Morning rides might start in freezing temperatures, warm up to pleasant afternoons, and end with cold evenings. High-altitude passes can see sudden snowfall even in July.",
          "The region receives minimal rainfall due to its location in the rain shadow of the Himalayas. However, when it does rain, it can cause landslides and road blockages. The thin atmosphere at high altitudes means intense UV radiation, rapid temperature changes, and lower oxygen levels."
        ],
        tips: [
          "Always carry rain gear regardless of the season",
          "Pack thermal wear even for summer trips",
          "Use high SPF sunscreen and lip balm",
          "Acclimatize properly - spend at least 2 days in Leh before high-altitude rides",
          "Monitor weather forecasts daily and be flexible with your itinerary"
        ]
      },
      {
        heading: "Our Recommendation",
        paragraphs: [
          "For first-time visitors and those seeking comfortable conditions, we recommend July to early August. The weather is predictable, all facilities are operational, and you'll have the full Ladakh experience with festivals and cultural events.",
          "For experienced riders seeking the best riding conditions and fewer crowds, September is ideal. The roads are in excellent condition, the weather is still pleasant, and you'll have more authentic interactions with locals.",
          "For adventure seekers who don't mind challenging conditions and want to see Ladakh in its raw beauty, late May to June offers a unique experience with snow-covered landscapes and the thrill of riding on freshly opened passes.",
          "Regardless of when you choose to visit, Ladakh will leave you with memories that last a lifetime. The key is proper preparation, flexibility, and respect for the mountains."
        ]
      }
    ]
  },
  {
    id: "essential-gear-list",
    title: "Essential Gear List for High Altitude Expeditions",
    excerpt: "Don't leave without these essentials. A comprehensive list of riding gear, clothing, and medicine for your Zanskar or Leh trip.",
    date: "June 02, 2025",
    author: "Himalayan Marmot Team",
    category: "Gear",
    image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop",
    readTime: "10 min read",
    content: [
      {
        heading: "Introduction to High-Altitude Riding Gear",
        paragraphs: [
          "Riding in the Himalayas is unlike any other motorcycle adventure. The extreme altitude, unpredictable weather, and challenging terrain demand specialized gear and equipment. Proper preparation can make the difference between an unforgettable adventure and a dangerous situation.",
          "This comprehensive guide covers everything you need for a safe and comfortable Ladakh motorcycle expedition. We've organized it into categories based on priority and usage, drawing from years of experience guiding riders through the Himalayas."
        ]
      },
      {
        heading: "Riding Gear (Critical)",
        paragraphs: [
          "Your riding gear is your first line of defense against the elements and potential accidents. In Ladakh's extreme conditions, quality gear isn't a luxury—it's a necessity."
        ],
        list: [
          {
            title: "Riding Jacket",
            description: "Waterproof, windproof jacket with removable thermal liner. Must have CE-approved armor at shoulders, elbows, and back. Brands like Royal Enfield, Rynox, or Alpinestars recommended."
          },
          {
            title: "Riding Pants",
            description: "Abrasion-resistant pants with knee and hip armor. Waterproof or with rain liner. Avoid jeans—they offer no protection."
          },
          {
            title: "Helmet",
            description: "Full-face ISI/DOT certified helmet. Dual visor (clear and tinted) recommended. Ensure proper fit as you'll wear it 6-8 hours daily."
          },
          {
            title: "Gloves",
            description: "Two pairs minimum: Waterproof winter gloves for cold mornings and high passes, and summer riding gloves for warmer sections."
          },
          {
            title: "Riding Boots",
            description: "Ankle-high, waterproof boots with good grip. Must provide ankle support and protection. Break them in before the trip."
          },
          {
            title: "Knee Guards",
            description: "Essential for protection and warmth. Adjustable straps for comfort during long rides."
          },
          {
            title: "Elbow Guards",
            description: "Additional protection beyond jacket armor. Particularly important for off-road sections."
          },
          {
            title: "Balaclava/Neck Warmer",
            description: "Protects face and neck from cold winds and dust. Essential at high passes."
          }
        ],
        tips: [
          "Test all gear before the trip - comfort matters on 8-hour riding days",
          "Ensure gear is broken in to avoid chafing and discomfort",
          "Carry spare visor or goggles in case of damage",
          "Layer your clothing - it's easier to remove layers than to add warmth",
          "Bright colored gear increases visibility on mountain roads"
        ]
      },
      {
        heading: "Clothing Layers (Essential)",
        paragraphs: [
          "The key to comfort in Ladakh is layering. You'll experience temperature swings of 20-30°C in a single day. The layering system allows you to adapt quickly to changing conditions."
        ],
        list: [
          {
            title: "Base Layer",
            description: "Thermal innerwear (top and bottom). Merino wool or synthetic moisture-wicking material. Carry 2-3 sets."
          },
          {
            title: "Mid Layer",
            description: "Fleece jacket or down jacket for insulation. Lightweight and compressible. Essential for high passes and evenings."
          },
          {
            title: "Outer Layer",
            description: "Windproof and waterproof jacket (can be your riding jacket). Must be breathable to prevent sweat accumulation."
          },
          {
            title: "Regular Clothing",
            description: "4-5 t-shirts, 2-3 pairs of comfortable pants, 5-6 pairs of socks (including woolen), underwear for 7-8 days."
          },
          {
            title: "Evening Wear",
            description: "Comfortable tracksuit or warm casual wear for hotel/camp evenings. Down jacket for cold nights."
          },
          {
            title: "Sun Protection",
            description: "Wide-brimmed hat or cap, sunglasses (UV400 protection), bandana or buff for dust protection."
          }
        ],
        tips: [
          "Pack clothes in waterproof bags or dry sacks",
          "Avoid cotton - it retains moisture and takes forever to dry",
          "Carry extra socks - your feet will thank you",
          "Quick-dry fabrics are your best friend",
          "Don't overpack - laundry facilities are available in Leh"
        ]
      },
      {
        heading: "Medical Kit (Critical)",
        paragraphs: [
          "A well-stocked medical kit is non-negotiable for high-altitude travel. Altitude sickness, minor injuries, and stomach issues are common. Being prepared can prevent a minor issue from becoming a major problem."
        ],
        list: [
          {
            title: "Altitude Sickness",
            description: "Diamox (Acetazolamide) 250mg - consult doctor before trip. Dexamethasone for emergencies. Start Diamox 24 hours before ascending."
          },
          {
            title: "Pain Relief",
            description: "Paracetamol, Ibuprofen, Aspirin. Essential for headaches and body aches from long rides."
          },
          {
            title: "Digestive Issues",
            description: "ORS packets, anti-diarrheal (Loperamide), antacids, probiotics. Water purification tablets."
          },
          {
            title: "Cold & Flu",
            description: "Antihistamines, cough syrup, throat lozenges, nasal decongestant."
          },
          {
            title: "First Aid",
            description: "Bandages, antiseptic cream, band-aids, gauze, medical tape, scissors, tweezers."
          },
          {
            title: "Skin Care",
            description: "Sunscreen SPF 50+, lip balm with SPF, moisturizer, petroleum jelly (for chafing)."
          },
          {
            title: "Eye Care",
            description: "Eye drops for dryness and dust irritation. Essential in Ladakh's dry climate."
          },
          {
            title: "Personal Medications",
            description: "Any prescription medicines you regularly take, plus extras. Carry prescriptions."
          }
        ],
        warning: "Consult your doctor before the trip, especially regarding altitude sickness medication. Carry a detailed medical history if you have any pre-existing conditions. Know the location of hospitals in Leh and along your route."
      },
      {
        heading: "Electronics and Gadgets",
        paragraphs: [
          "Modern technology enhances safety and captures memories, but the harsh environment demands rugged, reliable equipment."
        ],
        list: [
          {
            title: "Mobile Phone",
            description: "Fully charged with offline maps downloaded. BSNL has best coverage in Ladakh. Carry power bank (20,000mAh minimum)."
          },
          {
            title: "Camera",
            description: "DSLR, mirrorless, or action camera. Extra batteries (they drain faster in cold). Memory cards with ample storage."
          },
          {
            title: "GPS Device",
            description: "Dedicated GPS or smartphone with offline navigation. Google Maps offline mode works well."
          },
          {
            title: "Headlamp/Torch",
            description: "LED headlamp with extra batteries. Essential for early morning starts and power cuts."
          },
          {
            title: "Universal Adapter",
            description: "Power outlets vary. Carry multi-plug adapter and extension cord."
          },
          {
            title: "Portable Charger",
            description: "Solar charger is useful but not reliable. Carry multiple power banks."
          }
        ],
        tips: [
          "Keep electronics in waterproof bags",
          "Batteries drain faster in cold - keep them warm",
          "Download offline entertainment for long evenings",
          "Carry all charging cables and adapters",
          "Back up photos regularly - memory cards can fail"
        ]
      },
      {
        heading: "Personal Items and Toiletries",
        paragraphs: [
          "Personal hygiene becomes challenging at high altitudes. Pack smart and carry essentials that work in limited water conditions."
        ],
        list: [
          {
            title: "Toiletries",
            description: "Toothbrush, toothpaste, soap, shampoo (small bottles), deodorant, razor, nail clipper."
          },
          {
            title: "Wet Wipes",
            description: "Large pack - invaluable when water is scarce or too cold for washing."
          },
          {
            title: "Hand Sanitizer",
            description: "Multiple small bottles. Use frequently to prevent illness."
          },
          {
            title: "Toilet Paper",
            description: "Carry your own - not always available at remote stops."
          },
          {
            title: "Towel",
            description: "Quick-dry microfiber towel. Compact and dries fast."
          },
          {
            title: "Laundry",
            description: "Small packet of detergent for hand washing clothes."
          }
        ]
      },
      {
        heading: "Documents and Money",
        paragraphs: [
          "Proper documentation is crucial for permits and emergencies. Keep multiple copies and digital backups."
        ],
        list: [
          {
            title: "Identity Proof",
            description: "Original Aadhar card, passport, or voter ID. Carry 3-4 photocopies."
          },
          {
            title: "Permits",
            description: "Inner Line Permit for restricted areas. We arrange these, but carry copies."
          },
          {
            title: "Driving License",
            description: "Valid motorcycle license. International license if you're a foreign national."
          },
          {
            title: "Insurance",
            description: "Travel and health insurance documents. Bike insurance papers."
          },
          {
            title: "Emergency Contacts",
            description: "Printed list of emergency numbers, embassy contacts (for foreigners), family contacts."
          },
          {
            title: "Cash",
            description: "₹15,000-20,000 in small denominations. ATMs are limited and often out of service."
          },
          {
            title: "Cards",
            description: "Credit/debit cards as backup. Inform bank about travel to avoid blocks."
          }
        ],
        tips: [
          "Keep documents in waterproof pouch",
          "Carry digital copies on phone and email",
          "Distribute cash in different bags",
          "Keep emergency cash separate from daily use money",
          "Carry small denominations - change is often unavailable"
        ]
      },
      {
        heading: "Miscellaneous Essentials",
        paragraphs: [
          "These items might seem minor but prove invaluable during the journey."
        ],
        list: [
          {
            title: "Water Bottles",
            description: "2-3 bottles (1 liter each). Insulated bottle keeps water from freezing at high passes."
          },
          {
            title: "Snacks",
            description: "Energy bars, dry fruits, chocolates, glucose tablets. Essential for energy at high altitudes."
          },
          {
            title: "Backpack",
            description: "30-40L daypack for daily essentials. Waterproof cover included."
          },
          {
            title: "Plastic Bags",
            description: "Multiple sizes for organizing gear and keeping things dry."
          },
          {
            title: "Duct Tape",
            description: "Small roll - fixes almost anything temporarily."
          },
          {
            title: "Cable Ties",
            description: "Useful for securing loose items on bike."
          },
          {
            title: "Notebook and Pen",
            description: "For journaling, noting expenses, or leaving messages."
          },
          {
            title: "Book or Kindle",
            description: "For entertainment during rest days or evenings."
          }
        ]
      },
      {
        heading: "What NOT to Bring",
        paragraphs: [
          "Equally important is knowing what to leave behind. Overpacking is a common mistake that makes the journey uncomfortable."
        ],
        list: [
          {
            title: "Excessive Clothing",
            description: "You'll wear the same riding gear daily. 5-6 days of regular clothes is enough."
          },
          {
            title: "Heavy Books",
            description: "Use Kindle or phone apps instead."
          },
          {
            title: "Expensive Jewelry",
            description: "Unnecessary and risky. Leave valuables at home."
          },
          {
            title: "Hair Dryer",
            description: "Power is limited, and it's an unnecessary luxury."
          },
          {
            title: "Too Many Shoes",
            description: "Riding boots and one pair of comfortable shoes/sandals is enough."
          },
          {
            title: "Large Suitcases",
            description: "Use duffel bags or backpacks that fit easily on bikes."
          }
        ]
      },
      {
        heading: "Final Packing Tips",
        paragraphs: [
          "Pack smart, not heavy. Remember, you'll be carrying everything on a motorcycle through challenging terrain. Every kilogram matters.",
          "Use compression bags for clothes, keep frequently used items accessible, and distribute weight evenly in your luggage. Pack a small bag with essentials (documents, medicines, valuables) that you can quickly grab in emergencies.",
          "Most importantly, don't stress about forgetting something. Leh has shops where you can buy most essentials, though at higher prices. The key is having the critical safety gear and documents—everything else is manageable."
        ]
      }
    ]
  },
  {
    id: "hidden-monasteries-of-zanskar",
    title: "The Hidden Monasteries of Zanskar",
    excerpt: "Beyond the tourist trails lie ancient sanctuaries built into cliffs. Discover the spiritual secrets of the Phugtal and Lingshed.",
    date: "June 20, 2025",
    author: "Tsewang Norboo",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000&auto=format&fit=crop",
    readTime: "7 min read",
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "Content for this blog post will be added soon. This is a placeholder for the Hidden Monasteries of Zanskar article."
        ]
      }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sandesh Gupta",
    location: "Hyderabad, India",
    quote: "The best bike trip of my life! The BS6 Himalayan was in perfect condition for the Khardung La climb. The support team was literally a lifesaver when I got a flat tire near Nubra.",
    rating: 5,
    date: "June 2024"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    location: "London, UK",
    quote: "Tsewang and his team are true professionals. The safety protocols gave me immense peace of mind, especially as a solo female rider. The oxygen readings every morning showed they really care.",
    rating: 5,
    date: "July 2024"
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Delhi, India",
    quote: "Authentic Ladakhi experience. These guys aren't just tour operators, they are mountain brothers. The homestay arranged in Hanle was the highlight of my trip.",
    rating: 5,
    date: "August 2024"
  },
  {
    id: 4,
    name: "Daniel Rossi",
    location: "Milan, Italy",
    quote: "Riding the new Himalayan 450 in the Himalayas was a dream. Marmot organized everything perfectly - permits, fuel, mechanic support. Pure adventure, zero stress.",
    rating: 5,
    date: "September 2024"
  }
];

export const RIDER_VIDEOS = [
  { id: 1, src: "https://youtu.be/QNp7oC5krEc", title: "Conquering High Passes", delay: 0 },
  { id: 2, src: "https://youtu.be/lXU3tleWiW8", title: "The Road to Adventure", delay: 100 },
  { id: 3, src: "https://youtu.be/iy5OhhSTiUw", title: "Brotherhood on Bikes", delay: 200 },
];
