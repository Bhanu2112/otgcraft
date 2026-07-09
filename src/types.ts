export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  specs: string[];
  basePrice: string;
  icon: string;
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

export type DeviceType = "iphone" | "samsung";

export interface DemoVibe {
  id: string;
  name: string;
  category: "single" | "multi";
  title: string;
  subtitle: string;
  bgGradient: string;
  accentColor: string;
  emoji: string;
  reelLength: string;
  features: string[];
}
