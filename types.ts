
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

export interface TourVariant {
  duration: string;
  startingPrice: string;
  priceTiers: PriceTier[];
  itinerary: ItineraryDay[];
  hotelDetails?: HotelDetail[];
  pdfUrl?: string;
}

export interface TourPackage {
  id: string;
  title: string;
  duration: string; // Default duration
  highlights: string[];
  startingPrice: string; // Default starting price (for calculation/display)
  priceTiers: PriceTier[]; // Default pricing
  image: string;
  pdfUrl?: string;
  itinerary: ItineraryDay[]; // Default itinerary
  inclusions: string[];
  exclusions: string[];
  routePoints?: RoutePoint[];
  hotelDetails?: HotelDetail[];
  variants?: TourVariant[]; // Optional: List of alternative durations/pricings
}

export interface CancellationPolicy {
  period: string;
  deduction: string;
}
