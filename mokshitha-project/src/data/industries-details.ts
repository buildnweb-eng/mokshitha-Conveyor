// Comprehensive Industry Data for Mokshitha Industrial Automation
// Detailed information for each industry served

import { LucideIcon } from 'lucide-react';
import {
  Pill,
  UtensilsCrossed,
  Cookie,
  Beef,
  Wine,
  Wheat,
  Fish,
  Factory,
  Car,
  Battery,
  Shirt,
  Package,
  Cigarette,
  Droplets,
  FlaskConical,
  Boxes,
  ShoppingBag,
  Printer,
  Building2,
  Cog,
  Milk,
  Egg,
} from 'lucide-react';

export type IndustryCategory = 'food-beverage' | 'manufacturing' | 'processing' | 'logistics';

export interface IndustryDetail {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  category: IndustryCategory;
  description: string;
  challenges: string[];
  solutions: string[];
  recommendedProducts: string[]; // Product IDs from products.ts
  certifications: string[];
  clients?: string[];
  caseStudy?: {
    client: string;
    result: string;
  };
  image?: string;
  isFeatured?: boolean;
}

export const industryCategories: Record<IndustryCategory, { name: string; description: string }> = {
  'food-beverage': {
    name: 'Food & Beverage',
    description: 'FDA-approved, food-grade conveyor solutions for processing, packaging, and handling',
  },
  'manufacturing': {
    name: 'Manufacturing & Industrial',
    description: 'Heavy-duty conveyor systems for demanding manufacturing environments',
  },
  'processing': {
    name: 'Processing & Chemical',
    description: 'Specialized solutions for chemical, pharmaceutical, and processing plants',
  },
  'logistics': {
    name: 'Logistics & Packaging',
    description: 'Efficient material handling for warehouses, packaging, and distribution',
  },
};

export const industriesData: IndustryDetail[] = [
  // ============ FOOD & BEVERAGE ============
  {
    id: 'pharmaceutical',
    slug: 'pharmaceutical',
    name: 'Pharmaceutical',
    shortName: 'Pharma',
    icon: Pill,
    category: 'processing',
    description: 'FDA-compliant conveyor systems designed for pharmaceutical manufacturing, from pill compression to bottling and packaging.',
    challenges: [
      'Strict FDA and GMP compliance requirements',
      'Contamination-free material handling',
      'Precise temperature and humidity control',
      'Traceability and batch management',
    ],
    solutions: [
      'Stainless steel SS316 conveyors for hygiene',
      'Clean room compatible belt systems',
      'Metal detector integration',
      'Easy-clean modular designs',
    ],
    recommendedProducts: ['pvc-conveyor-belt', 'stainless-steel-slat-chain', 'metal-detector-conveyor', 'inspection-conveyor'],
    certifications: ['FDA', 'GMP', 'ISO 9001', 'WHO-GMP'],
    clients: ['Dr. Reddy\'s', 'Bharat Biotech', 'Jodas'],
    caseStudy: {
      client: 'Dr. Reddy\'s Laboratories',
      result: '40% improvement in production line efficiency with custom pharmaceutical conveyors',
    },
    isFeatured: true,
  },
  {
    id: 'food-processing',
    slug: 'food-processing',
    name: 'Food Processing',
    shortName: 'Food',
    icon: UtensilsCrossed,
    category: 'food-beverage',
    description: 'Hygienic conveyor solutions for food processing facilities, ensuring safety and efficiency from raw materials to finished products.',
    challenges: [
      'Food safety and FSSAI compliance',
      'Frequent washdown requirements',
      'Temperature variations (freezing to hot)',
      'Gentle product handling',
    ],
    solutions: [
      'FDA-approved food-grade belts',
      'Stainless steel construction',
      'Quick-release belt systems for cleaning',
      'Modular plastic belt conveyors',
    ],
    recommendedProducts: ['pvc-conveyor-belt', 'cotton-conveyor-belt', 'ss-wire-mesh-conveyors', 'ptfe-teflon-coated-belts'],
    certifications: ['FDA', 'FSSAI', 'HACCP', 'ISO 22000'],
    clients: ['Heritage Foods', 'Britannia', 'Parle'],
    caseStudy: {
      client: 'Heritage Foods',
      result: 'Implemented complete dairy processing line with 99.9% uptime',
    },
    isFeatured: true,
  },
  {
    id: 'bakery',
    slug: 'bakery',
    name: 'Bakery & Confectionery',
    shortName: 'Bakery',
    icon: Cookie,
    category: 'food-beverage',
    description: 'Specialized conveyors for bakeries handling dough, baked goods, and confectionery with precise temperature control.',
    challenges: [
      'Sticky product handling',
      'High temperature exposure',
      'Gentle handling of delicate products',
      'Continuous production requirements',
    ],
    solutions: [
      'PTFE non-stick coated belts',
      'Cooling and proofing conveyors',
      'Modular belt systems',
      'Spiral cooling towers',
    ],
    recommendedProducts: ['ptfe-teflon-coated-belts', 'ss-wire-mesh-conveyors', 'belt-conveyor', 'pvc-conveyor-belt'],
    certifications: ['FDA', 'FSSAI', 'ISO 22000'],
    clients: ['Britannia', 'Parle', 'Nutrine'],
    isFeatured: true,
  },
  {
    id: 'beverages',
    slug: 'beverages',
    name: 'Beverages',
    shortName: 'Beverages',
    icon: Wine,
    category: 'food-beverage',
    description: 'High-speed bottle and can handling conveyors for beverage manufacturing, from filling to packaging.',
    challenges: [
      'High-speed bottle handling',
      'Wet environment operation',
      'Accumulation without damage',
      'Multiple container sizes',
    ],
    solutions: [
      'Air conveyor systems',
      'Accumulation tables',
      'Bottle conveyor systems',
      'Quick changeover designs',
    ],
    recommendedProducts: ['bottle-conveyor', 'stainless-steel-slat-chain', 'powered-roller-conveyors'],
    certifications: ['FDA', 'FSSAI', 'ISO 9001'],
  },
  {
    id: 'dairy',
    slug: 'dairy',
    name: 'Dairy & Cheese',
    shortName: 'Dairy',
    icon: Milk,
    category: 'food-beverage',
    description: 'USDA-compliant conveyor systems for dairy processing, from raw milk handling to cheese and yogurt production.',
    challenges: [
      'Strict hygiene requirements',
      'Cold storage compatibility',
      'Gentle product handling',
      'CIP cleaning compatibility',
    ],
    solutions: [
      'Stainless steel SS316L conveyors',
      'Sealed bearing systems',
      'CIP-compatible designs',
      'Temperature-resistant belts',
    ],
    recommendedProducts: ['stainless-steel-slat-chain', 'pvc-conveyor-belt', 'ss-wire-mesh-conveyors'],
    certifications: ['FDA', 'FSSAI', 'USDA'],
    clients: ['Heritage Foods'],
  },
  {
    id: 'poultry-meat',
    slug: 'poultry-meat',
    name: 'Poultry & Meat',
    shortName: 'Meat',
    icon: Beef,
    category: 'food-beverage',
    description: 'Sanitary conveyor solutions for meat and poultry processing, designed for frequent washdowns and USDA compliance.',
    challenges: [
      'Blood and fat resistance',
      'Aggressive cleaning chemicals',
      'Cold room operation',
      'Cross-contamination prevention',
    ],
    solutions: [
      'Modular plastic belts',
      'Open-frame sanitary designs',
      'Color-coded belt systems',
      'Quick-release mechanisms',
    ],
    recommendedProducts: ['ss-wire-mesh-conveyors', 'stainless-steel-slat-chain', 'pvc-conveyor-belt'],
    certifications: ['FDA', 'USDA', 'HACCP'],
  },
  {
    id: 'seafood',
    slug: 'seafood',
    name: 'Seafood',
    shortName: 'Seafood',
    icon: Fish,
    category: 'food-beverage',
    description: 'Corrosion-resistant conveyors for seafood processing in harsh salt water environments.',
    challenges: [
      'Salt water corrosion',
      'Extreme cold temperatures',
      'High moisture environments',
      'Odor and contamination control',
    ],
    solutions: [
      'SS316 marine-grade steel',
      'Plastic modular belts',
      'Self-draining designs',
      'Easy-clean open construction',
    ],
    recommendedProducts: ['stainless-steel-slat-chain', 'ss-wire-mesh-conveyors'],
    certifications: ['FDA', 'HACCP'],
  },
  {
    id: 'rice-mills',
    slug: 'rice-mills',
    name: 'Rice Mills & Grain',
    shortName: 'Grain',
    icon: Wheat,
    category: 'food-beverage',
    description: 'Robust conveyor systems for rice mills and grain processing, handling bulk materials efficiently.',
    challenges: [
      'Dust control requirements',
      'High volume throughput',
      'Gentle grain handling',
      'Moisture sensitivity',
    ],
    solutions: [
      'Enclosed belt conveyors',
      'Bucket elevators',
      'Dust-tight designs',
      'Variable speed controls',
    ],
    recommendedProducts: ['rubber-conveyor-belt', 'z-type-elevators', 'cleated-conveyors', 'belt-conveyor'],
    certifications: ['FSSAI', 'ISO 9001'],
    clients: ['Nuziveedu Seeds'],
  },

  // ============ MANUFACTURING & INDUSTRIAL ============
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive',
    shortName: 'Auto',
    icon: Car,
    category: 'manufacturing',
    description: 'Precision conveyor systems for automotive assembly lines, parts handling, and paint shop applications.',
    challenges: [
      'Heavy component handling',
      'Paint shop compatibility',
      'Just-in-time production',
      'ESD protection requirements',
    ],
    solutions: [
      'Heavy-duty slat conveyors',
      'Overhead chain systems',
      'ESD-safe belt options',
      'Automated guided systems',
    ],
    recommendedProducts: ['slat-chain-conveyor', 'powered-roller-conveyors', 'belt-conveyor'],
    certifications: ['ISO 9001', 'IATF 16949'],
    isFeatured: true,
  },
  {
    id: 'textiles',
    slug: 'textiles',
    name: 'Textiles & Garments',
    shortName: 'Textiles',
    icon: Shirt,
    category: 'manufacturing',
    description: 'Gentle handling conveyors for textile manufacturing, from fiber processing to finished garment handling.',
    challenges: [
      'Static electricity buildup',
      'Fiber contamination',
      'Gentle fabric handling',
      'High-speed operation',
    ],
    solutions: [
      'Anti-static belt options',
      'Smooth surface belts',
      'Low-friction designs',
      'Timing belt precision',
    ],
    recommendedProducts: ['cotton-conveyor-belt', 'pvc-conveyor-belt', 'imported-timing-belts'],
    certifications: ['ISO 9001', 'OEKO-TEX'],
  },
  {
    id: 'battery-manufacturing',
    slug: 'battery-manufacturing',
    name: 'Battery Manufacturing',
    shortName: 'Battery',
    icon: Battery,
    category: 'manufacturing',
    description: 'Specialized conveyors for battery cell production and assembly, with ESD protection and precision handling.',
    challenges: [
      'Electrostatic discharge risks',
      'Precision component handling',
      'Clean room requirements',
      'Chemical resistance needs',
    ],
    solutions: [
      'ESD-safe conveyor belts',
      'Clean room compatible designs',
      'Precision timing systems',
      'Chemical-resistant materials',
    ],
    recommendedProducts: ['pvc-conveyor-belt', 'imported-timing-belts', 'belt-conveyor'],
    certifications: ['ISO 9001', 'ESD S20.20'],
  },
  {
    id: 'tyre-manufacturing',
    slug: 'tyre-manufacturing',
    name: 'Tyre Manufacturing',
    shortName: 'Tyre',
    icon: Cog,
    category: 'manufacturing',
    description: 'Heavy-duty conveyors for tyre production, handling rubber compounds and finished tyres.',
    challenges: [
      'Heavy weight handling',
      'High temperature exposure',
      'Rubber compound sticking',
      'Continuous operation needs',
    ],
    solutions: [
      'Heat-resistant belts',
      'Heavy-duty roller conveyors',
      'Non-stick surface options',
      'High-capacity systems',
    ],
    recommendedProducts: ['rubber-conveyor-belt', 'slat-chain-conveyor', 'incline-conveyor'],
    certifications: ['ISO 9001'],
  },
  {
    id: 'iron-steel',
    slug: 'iron-steel',
    name: 'Iron & Steel',
    shortName: 'Steel',
    icon: Factory,
    category: 'manufacturing',
    description: 'Extreme-duty conveyors for steel mills handling hot materials, slag, and finished steel products.',
    challenges: [
      'Extreme heat exposure',
      'Heavy load requirements',
      'Abrasive materials',
      'Harsh environment durability',
    ],
    solutions: [
      'Heat-resistant conveyor belts',
      'Steel cord belts',
      'Heavy-duty frames',
      'Covered conveyor systems',
    ],
    recommendedProducts: ['rubber-conveyor-belt', 'slat-chain-conveyor', 'nylon-sandwich-belts'],
    certifications: ['ISO 9001'],
  },
  {
    id: 'cement',
    slug: 'cement',
    name: 'Cement & Construction',
    shortName: 'Cement',
    icon: Building2,
    category: 'manufacturing',
    description: 'Rugged conveyor systems for cement plants, handling raw materials, clinker, and finished cement.',
    challenges: [
      'Abrasive material handling',
      'Dust control requirements',
      'Long conveyor spans',
      'Outdoor exposure',
    ],
    solutions: [
      'Wear-resistant rubber belts',
      'Covered conveyor galleries',
      'Heavy-duty idlers',
      'Belt cleaning systems',
    ],
    recommendedProducts: ['rubber-conveyor-belt', 'nylon-sandwich-belts', 'side-wall-rubber-belts', 'conveyor-rollers-frame-set'],
    certifications: ['ISO 9001'],
  },
  {
    id: 'crusher-plants',
    slug: 'crusher-plants',
    name: 'Mining & Crusher Plants',
    shortName: 'Mining',
    icon: Factory,
    category: 'manufacturing',
    description: 'Heavy-duty conveyor systems for mining operations and crusher plants handling aggregates and minerals.',
    challenges: [
      'Extreme abrasion',
      'Impact loading',
      'Steep incline requirements',
      'Outdoor weather exposure',
    ],
    solutions: [
      'Impact-resistant belts',
      'Chevron and cleated designs',
      'High-angle sidewall belts',
      'Covered conveyors',
    ],
    recommendedProducts: ['rubber-conveyor-belt', 'side-wall-rubber-belts', 'cleated-conveyors', 'high-angle-conveyor'],
    certifications: ['ISO 9001'],
  },

  // ============ PROCESSING & CHEMICAL ============
  {
    id: 'chemical-plants',
    slug: 'chemical-plants',
    name: 'Chemical Plants',
    shortName: 'Chemical',
    icon: FlaskConical,
    category: 'processing',
    description: 'Chemical-resistant conveyor solutions for chemical processing plants handling corrosive and hazardous materials.',
    challenges: [
      'Chemical corrosion resistance',
      'Explosion-proof requirements',
      'Toxic material handling',
      'Environmental compliance',
    ],
    solutions: [
      'PTFE-coated belts',
      'Chemical-resistant PVC',
      'Explosion-proof motors',
      'Enclosed conveyor systems',
    ],
    recommendedProducts: ['ptfe-teflon-coated-belts', 'pvc-conveyor-belt', 'stainless-steel-slat-chain'],
    certifications: ['ISO 9001', 'ATEX'],
  },
  {
    id: 'tobacco',
    slug: 'tobacco',
    name: 'Tobacco Processing',
    shortName: 'Tobacco',
    icon: Cigarette,
    category: 'processing',
    description: 'Specialized conveyors for tobacco processing, from green leaf handling to finished product packaging.',
    challenges: [
      'Gentle leaf handling',
      'Moisture control',
      'Dust management',
      'High-speed packaging lines',
    ],
    solutions: [
      'Vacuum belt conveyors',
      'Gentle handling systems',
      'Enclosed designs',
      'High-speed packaging conveyors',
    ],
    recommendedProducts: ['pvc-conveyor-belt', 'belt-conveyor', 'inspection-conveyor'],
    certifications: ['ISO 9001'],
  },
  {
    id: 'aluminum',
    slug: 'aluminum',
    name: 'Aluminum Processing',
    shortName: 'Aluminum',
    icon: Factory,
    category: 'processing',
    description: 'High-temperature conveyors for aluminum smelting and processing operations.',
    challenges: [
      'Extreme heat exposure',
      'Molten metal proximity',
      'Heavy ingot handling',
      'Dust and fumes',
    ],
    solutions: [
      'Heat-resistant belts',
      'Heavy-duty slat conveyors',
      'Cooling conveyor systems',
      'Covered conveyors',
    ],
    recommendedProducts: ['slat-chain-conveyor', 'rubber-conveyor-belt', 'ss-wire-mesh-conveyors'],
    certifications: ['ISO 9001'],
  },

  // ============ LOGISTICS & PACKAGING ============
  {
    id: 'packaging',
    slug: 'packaging',
    name: 'Printing & Packaging',
    shortName: 'Packaging',
    icon: Package,
    category: 'logistics',
    description: 'High-speed conveyor systems for printing presses and packaging lines with precise product handling.',
    challenges: [
      'High-speed operation',
      'Precise registration',
      'Multiple product sizes',
      'Accumulation without damage',
    ],
    solutions: [
      'Vacuum belt conveyors',
      'Timing belt precision',
      'Accumulation conveyors',
      'Quick changeover systems',
    ],
    recommendedProducts: ['belt-conveyor', 'imported-timing-belts', 'powered-roller-conveyors', 'z-type-elevators'],
    certifications: ['ISO 9001'],
    isFeatured: true,
  },
  {
    id: 'logistics',
    slug: 'logistics',
    name: 'Logistics & Warehousing',
    shortName: 'Logistics',
    icon: Boxes,
    category: 'logistics',
    description: 'Efficient material handling conveyors for warehouses, distribution centers, and fulfillment operations.',
    challenges: [
      'Variable package sizes',
      'High throughput demands',
      'Sorting requirements',
      'Integration with WMS',
    ],
    solutions: [
      'Sortation conveyors',
      'Telescopic conveyors',
      'Powered roller systems',
      'Gravity conveyors',
    ],
    recommendedProducts: ['powered-roller-conveyors', 'belt-conveyor', 'drum-conveyors'],
    certifications: ['ISO 9001'],
  },
  {
    id: 'fmcg',
    slug: 'fmcg',
    name: 'FMCG',
    shortName: 'FMCG',
    icon: ShoppingBag,
    category: 'logistics',
    description: 'Fast-moving consumer goods conveyor systems for high-volume production and packaging lines.',
    challenges: [
      'Multiple SKU handling',
      'High-speed changeovers',
      'Seasonal demand spikes',
      'Packaging variety',
    ],
    solutions: [
      'Flexible modular systems',
      'Quick changeover designs',
      'Accumulation tables',
      'Lane dividers',
    ],
    recommendedProducts: ['belt-conveyor', 'bottle-conveyor', 'powered-roller-conveyors'],
    certifications: ['ISO 9001', 'FSSAI'],
  },
  {
    id: 'laundry',
    slug: 'laundry',
    name: 'Industrial Laundry',
    shortName: 'Laundry',
    icon: Droplets,
    category: 'logistics',
    description: 'Conveyor systems for industrial laundry facilities handling textiles through wash, dry, and fold processes.',
    challenges: [
      'Wet environment operation',
      'Heat from dryers',
      'Continuous operation',
      'Gentle fabric handling',
    ],
    solutions: [
      'Stainless steel construction',
      'Heat-resistant belts',
      'Overhead conveyor systems',
      'Sorting conveyors',
    ],
    recommendedProducts: ['stainless-steel-slat-chain', 'belt-conveyor', 'ss-wire-mesh-conveyors'],
    certifications: ['ISO 9001'],
  },
];

// Helper functions
export const getIndustriesByCategory = (category: IndustryCategory): IndustryDetail[] => {
  return industriesData.filter((i) => i.category === category);
};

export const getFeaturedIndustries = (): IndustryDetail[] => {
  return industriesData.filter((i) => i.isFeatured);
};

export const getIndustryBySlug = (slug: string): IndustryDetail | undefined => {
  return industriesData.find((i) => i.slug === slug);
};

export const searchIndustries = (query: string): IndustryDetail[] => {
  const lowerQuery = query.toLowerCase();
  return industriesData.filter(
    (i) =>
      i.name.toLowerCase().includes(lowerQuery) ||
      i.description.toLowerCase().includes(lowerQuery)
  );
};
