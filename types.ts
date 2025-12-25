
export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  elevation?: string;
  marshalTip?: string;
}

export interface RoutePoint {
  name: string;
  x: number; // Percentage 0-100 for SVG positioning
  y: number; // Percentage 0-100 for SVG positioning
  elevation: string;
}

export interface PriceTier {
  bike: string;
  dual: string;
  solo: string;
}

export interface HotelDetail {
  city: string;
  hotel: string;
  category: string;
  mealPlan: string;
  nights: number;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  highlights: string[];
  startingPrice: string;
  priceTiers: PriceTier[];
  image: string;
  pdfUrl?: string; // PDF itinerary download link
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  routePoints?: RoutePoint[]; // New: For interactive map
  hotelDetails?: HotelDetail[]; // New: For hotel accommodation details
}

export interface CancellationPolicy {
  period: string;
  deduction: string;
}
