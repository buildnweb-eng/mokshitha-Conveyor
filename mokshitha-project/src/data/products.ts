// Product Data Architecture for Mokshitha Industrial Automation
// This file centralizes all product data with specs, industries, and images

export type ProductCategory = 'components' | 'systems' | 'specialized' | 'industrial';
export type Industry = 'pharmaceuticals' | 'food' | 'mining' | 'automotive' | 'packaging' | 'agriculture' | 'textiles' | 'cement';
export type Material = 'rubber' | 'pvc' | 'stainless-steel' | 'cotton' | 'ptfe' | 'wire-mesh' | 'nylon';
export type Application = 'horizontal' | 'incline' | 'high-temp' | 'food-grade' | 'heavy-duty';

export interface ProductSpecs {
  loadCapacity?: string;
  beltWidth?: string;
  temperature?: string;
  material?: string;
  speed?: string;
  certifications?: string[];
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProductCategory;
  categoryLabel: string;
  features: string[];
  specs: ProductSpecs;
  industries: Industry[];
  materials: Material[];
  applications: Application[];
  image: string;
  isFeatured?: boolean;
  isPopular?: boolean;
}

// Category metadata for category hero sections
export const categoryInfo: Record<ProductCategory, {
  title: string;
  description: string;
  industries: Industry[];
}> = {
  components: {
    title: 'Conveyor Components',
    description: 'Individual parts and assemblies for building, repairing, or upgrading conveyor systems. High-quality rollers, belts, and chains designed for durability and performance.',
    industries: ['pharmaceuticals', 'food', 'mining', 'packaging'],
  },
  systems: {
    title: 'Conveyor Systems',
    description: 'Complete conveyor solutions designed for specific material handling applications. From standard belt conveyors to specialized inspection systems.',
    industries: ['food', 'pharmaceuticals', 'automotive', 'packaging'],
  },
  specialized: {
    title: 'Specialized Belts',
    description: 'Premium belts engineered for challenging environments and specific applications. FDA-approved, temperature-resistant, and high-performance options.',
    industries: ['food', 'pharmaceuticals', 'textiles', 'packaging'],
  },
  industrial: {
    title: 'Industrial Systems',
    description: 'Heavy-duty conveyor solutions for demanding industrial environments. Built to handle extreme conditions, heavy loads, and continuous operation.',
    industries: ['mining', 'cement', 'automotive', 'agriculture'],
  },
};

// All products with enhanced data
export const products: Product[] = [
  // ============ CONVEYOR COMPONENTS ============
  {
    id: 'conveyor-rollers-frame-set',
    slug: 'conveyor-rollers-frame-set',
    title: 'Conveyor Rollers Frame Set',
    description: 'Complete roller frame assemblies for smooth material handling',
    category: 'components',
    categoryLabel: 'Components',
    features: ['Heavy-duty construction', 'Precision bearings', 'Customizable lengths'],
    specs: {
      loadCapacity: 'Up to 500 kg/m',
      beltWidth: '300-2000 mm',
      material: 'MS/SS Frame',
      certifications: ['ISO 9001'],
    },
    industries: ['mining', 'cement', 'packaging'],
    materials: ['stainless-steel'],
    applications: ['horizontal', 'heavy-duty'],
    image: '/assets/products/roller-frame-set.jpg',
    isPopular: true,
  },
  {
    id: 'rubber-conveyor-belt',
    slug: 'rubber-conveyor-belt',
    title: 'Rubber Conveyor Belt',
    description: 'Durable rubber belts for heavy-duty applications',
    category: 'components',
    categoryLabel: 'Components',
    features: ['High tensile strength', 'Heat resistant', 'Oil resistant options'],
    specs: {
      loadCapacity: 'Up to 1000 kg/m',
      beltWidth: '500-2400 mm',
      temperature: '-20°C to 150°C',
      material: 'Natural/Synthetic Rubber',
      certifications: ['ISO 9001', 'REACH'],
    },
    industries: ['mining', 'cement', 'agriculture'],
    materials: ['rubber'],
    applications: ['horizontal', 'incline', 'heavy-duty'],
    image: '/assets/products/rubber-belt.jpg',
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'cotton-conveyor-belt',
    slug: 'cotton-conveyor-belt',
    title: 'Cotton Conveyor Belt',
    description: 'Natural fiber belts for food-grade applications',
    category: 'components',
    categoryLabel: 'Components',
    features: ['Food-safe materials', 'Flexible design', 'Cost-effective'],
    specs: {
      loadCapacity: 'Up to 200 kg/m',
      beltWidth: '300-1200 mm',
      temperature: '-10°C to 80°C',
      material: 'Cotton Fabric',
      certifications: ['FDA', 'FSSAI'],
    },
    industries: ['food', 'agriculture', 'textiles'],
    materials: ['cotton'],
    applications: ['horizontal', 'food-grade'],
    image: '/assets/products/cotton-belt.jpg',
  },
  {
    id: 'pvc-conveyor-belt',
    slug: 'pvc-conveyor-belt',
    title: 'PVC Conveyor Belt',
    description: 'Versatile PVC belts for various industries',
    category: 'components',
    categoryLabel: 'Components',
    features: ['Chemical resistant', 'Easy to clean', 'Multiple grades available'],
    specs: {
      loadCapacity: 'Up to 300 kg/m',
      beltWidth: '300-2000 mm',
      temperature: '-10°C to 80°C',
      material: 'Industrial PVC',
      certifications: ['FDA', 'ISO 9001'],
    },
    industries: ['pharmaceuticals', 'food', 'packaging'],
    materials: ['pvc'],
    applications: ['horizontal', 'incline', 'food-grade'],
    image: '/assets/products/pvc-belt.jpg',
    isPopular: true,
  },
  {
    id: 'stainless-steel-slat-chain',
    slug: 'stainless-steel-slat-chain',
    title: 'Stainless Steel Slat Chain',
    description: 'Corrosion-resistant chains for harsh environments',
    category: 'components',
    categoryLabel: 'Components',
    features: ['Food-grade SS 304/316', 'High load capacity', 'Temperature resistant'],
    specs: {
      loadCapacity: 'Up to 800 kg/m',
      beltWidth: '150-1000 mm',
      temperature: '-40°C to 250°C',
      material: 'SS 304/316',
      certifications: ['FDA', 'ISO 9001', 'CE'],
    },
    industries: ['food', 'pharmaceuticals', 'automotive'],
    materials: ['stainless-steel'],
    applications: ['horizontal', 'high-temp', 'food-grade'],
    image: '/assets/products/ss-slat-chain.jpg',
    isFeatured: true,
  },
  {
    id: 'conveyor-rollers',
    slug: 'conveyor-rollers',
    title: 'Conveyor Rollers',
    description: 'Individual rollers for belt support and drive systems',
    category: 'components',
    categoryLabel: 'Components',
    features: ['Multiple diameters', 'Sealed bearings', 'Low maintenance'],
    specs: {
      loadCapacity: 'Up to 100 kg/roller',
      material: 'MS/SS/PVC',
      certifications: ['ISO 9001'],
    },
    industries: ['mining', 'packaging', 'automotive'],
    materials: ['stainless-steel', 'pvc'],
    applications: ['horizontal', 'incline'],
    image: '/assets/products/conveyor-rollers.jpg',
  },

  // ============ CONVEYOR SYSTEMS ============
  {
    id: 'belt-conveyor',
    slug: 'belt-conveyor',
    title: 'Belt Conveyor',
    description: 'Standard belt conveyor systems for material transport',
    category: 'systems',
    categoryLabel: 'Systems',
    features: ['Modular design', 'Variable speed options', 'Easy installation'],
    specs: {
      loadCapacity: 'Up to 500 kg/m',
      beltWidth: '300-2000 mm',
      speed: '0.5-3 m/s',
      material: 'PVC/Rubber Belt',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['packaging', 'food', 'pharmaceuticals', 'automotive'],
    materials: ['pvc', 'rubber'],
    applications: ['horizontal'],
    image: '/assets/products/belt-conveyor.jpg',
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'inspection-conveyor',
    slug: 'inspection-conveyor',
    title: 'Inspection Conveyor',
    description: 'Specialized conveyors for quality control processes',
    category: 'systems',
    categoryLabel: 'Systems',
    features: ['Adjustable speed', 'Good lighting compatibility', 'Ergonomic design'],
    specs: {
      loadCapacity: 'Up to 100 kg/m',
      beltWidth: '300-800 mm',
      speed: '0.1-1 m/s (variable)',
      material: 'White PVC Belt',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['pharmaceuticals', 'food', 'packaging'],
    materials: ['pvc'],
    applications: ['horizontal', 'food-grade'],
    image: '/assets/products/inspection-conveyor.jpg',
  },
  {
    id: 'high-angle-conveyor',
    slug: 'high-angle-conveyor',
    title: 'High-Angle Conveyor',
    description: 'Steep incline conveyors with cleated belts',
    category: 'systems',
    categoryLabel: 'Systems',
    features: ['Space-saving design', 'Angles up to 90°', 'Anti-slip surface'],
    specs: {
      loadCapacity: 'Up to 300 kg/m',
      beltWidth: '300-1500 mm',
      temperature: '-10°C to 80°C',
      material: 'Cleated PVC/Rubber',
      certifications: ['ISO 9001'],
    },
    industries: ['mining', 'cement', 'agriculture'],
    materials: ['pvc', 'rubber'],
    applications: ['incline', 'heavy-duty'],
    image: '/assets/products/high-angle-conveyor.jpg',
  },
  {
    id: 'incline-conveyor',
    slug: 'incline-conveyor',
    title: 'Incline Conveyor',
    description: 'Standard incline systems for elevation',
    category: 'systems',
    categoryLabel: 'Systems',
    features: ['Smooth material flow', 'Customizable angles', 'Robust construction'],
    specs: {
      loadCapacity: 'Up to 400 kg/m',
      beltWidth: '300-1500 mm',
      speed: '0.3-2 m/s',
      material: 'Rough Top PVC/Rubber',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['packaging', 'food', 'agriculture'],
    materials: ['pvc', 'rubber'],
    applications: ['incline'],
    image: '/assets/products/incline-conveyor.jpg',
    isPopular: true,
  },
  {
    id: 'metal-detector-conveyor',
    slug: 'metal-detector-conveyor',
    title: 'Metal Detector Conveyor',
    description: 'Integrated metal detection for food safety',
    category: 'systems',
    categoryLabel: 'Systems',
    features: ['High sensitivity', 'Reject mechanism', 'Compliance certified'],
    specs: {
      loadCapacity: 'Up to 200 kg/m',
      beltWidth: '300-1000 mm',
      speed: '0.3-1.5 m/s',
      material: 'Non-metallic Belt',
      certifications: ['FDA', 'HACCP', 'ISO 22000'],
    },
    industries: ['food', 'pharmaceuticals'],
    materials: ['pvc'],
    applications: ['horizontal', 'food-grade'],
    image: '/assets/products/metal-detector-conveyor.jpg',
    isFeatured: true,
  },
  {
    id: 'bottle-conveyor',
    slug: 'bottle-conveyor',
    title: 'Bottle Conveyor',
    description: 'Specialized systems for bottle handling',
    category: 'systems',
    categoryLabel: 'Systems',
    features: ['Gentle handling', 'Accumulation zones', 'High-speed operation'],
    specs: {
      loadCapacity: 'Up to 50 kg/m',
      beltWidth: '100-400 mm',
      speed: 'Up to 60 bottles/min',
      material: 'SS/Plastic Chain',
      certifications: ['FDA', 'ISO 9001'],
    },
    industries: ['food', 'pharmaceuticals', 'packaging'],
    materials: ['stainless-steel', 'pvc'],
    applications: ['horizontal', 'food-grade'],
    image: '/assets/products/bottle-conveyor.jpg',
  },

  // ============ SPECIALIZED BELTS ============
  {
    id: 'side-wall-rubber-belts',
    slug: 'side-wall-rubber-belts',
    title: 'Side Wall Rubber Belts',
    description: 'Vertical or steep angle material handling',
    category: 'specialized',
    categoryLabel: 'Specialized',
    features: ['High capacity', 'Prevents spillage', 'Customizable heights'],
    specs: {
      loadCapacity: 'Up to 500 kg/m',
      beltWidth: '400-2000 mm',
      temperature: '-20°C to 120°C',
      material: 'Reinforced Rubber',
      certifications: ['ISO 9001'],
    },
    industries: ['mining', 'cement', 'agriculture'],
    materials: ['rubber'],
    applications: ['incline', 'heavy-duty'],
    image: '/assets/products/sidewall-belt.jpg',
  },
  {
    id: 'pvc-rough-top-belts',
    slug: 'pvc-rough-top-belts',
    title: 'PVC Rough Top Belts',
    description: 'Enhanced grip for incline applications',
    category: 'specialized',
    categoryLabel: 'Specialized',
    features: ['Non-slip surface', 'Durable PVC', 'Multiple patterns'],
    specs: {
      loadCapacity: 'Up to 200 kg/m',
      beltWidth: '300-1500 mm',
      temperature: '-10°C to 80°C',
      material: 'Textured PVC',
      certifications: ['ISO 9001'],
    },
    industries: ['packaging', 'food', 'agriculture'],
    materials: ['pvc'],
    applications: ['incline'],
    image: '/assets/products/rough-top-belt.jpg',
  },
  {
    id: 'imported-pvc-belts',
    slug: 'imported-pvc-belts',
    title: 'Imported PVC Belts',
    description: 'Premium imported belts for critical applications',
    category: 'specialized',
    categoryLabel: 'Specialized',
    features: ['FDA approved', 'Superior quality', 'Long service life'],
    specs: {
      loadCapacity: 'Up to 300 kg/m',
      beltWidth: '300-2000 mm',
      temperature: '-30°C to 100°C',
      material: 'Premium PVC',
      certifications: ['FDA', 'EU 10/2011', 'ISO 9001'],
    },
    industries: ['pharmaceuticals', 'food', 'packaging'],
    materials: ['pvc'],
    applications: ['horizontal', 'food-grade'],
    image: '/assets/products/imported-pvc-belt.jpg',
    isFeatured: true,
  },
  {
    id: 'imported-timing-belts',
    slug: 'imported-timing-belts',
    title: 'Imported Timing Belts',
    description: 'Precision timing belts for synchronized systems',
    category: 'specialized',
    categoryLabel: 'Specialized',
    features: ['High accuracy', 'Low noise', 'Minimal maintenance'],
    specs: {
      loadCapacity: 'Up to 150 kg/m',
      beltWidth: '10-450 mm',
      speed: 'Up to 80 m/s',
      material: 'Polyurethane/Rubber',
      certifications: ['ISO 9001', 'DIN'],
    },
    industries: ['automotive', 'packaging', 'textiles'],
    materials: ['rubber', 'pvc'],
    applications: ['horizontal'],
    image: '/assets/products/timing-belt.jpg',
  },
  {
    id: 'nylon-sandwich-belts',
    slug: 'nylon-sandwich-belts',
    title: 'Nylon Sandwich Belts',
    description: 'Multi-layer belts for heavy loads',
    category: 'specialized',
    categoryLabel: 'Specialized',
    features: ['Reinforced structure', 'High strength', 'Tear resistant'],
    specs: {
      loadCapacity: 'Up to 800 kg/m',
      beltWidth: '500-2400 mm',
      temperature: '-20°C to 100°C',
      material: 'Nylon/EP Fabric',
      certifications: ['ISO 9001'],
    },
    industries: ['mining', 'cement', 'agriculture'],
    materials: ['nylon', 'rubber'],
    applications: ['heavy-duty', 'incline'],
    image: '/assets/products/nylon-belt.jpg',
    isPopular: true,
  },
  {
    id: 'ptfe-teflon-coated-belts',
    slug: 'ptfe-teflon-coated-belts',
    title: 'PTFE (Teflon) Coated Belts',
    description: 'Non-stick belts for food and packaging',
    category: 'specialized',
    categoryLabel: 'Specialized',
    features: ['Temperature resistant', 'Easy release', 'Chemical resistant'],
    specs: {
      loadCapacity: 'Up to 100 kg/m',
      beltWidth: '300-2000 mm',
      temperature: '-70°C to 260°C',
      material: 'PTFE Coated Fiberglass',
      certifications: ['FDA', 'ISO 9001'],
    },
    industries: ['food', 'packaging', 'textiles'],
    materials: ['ptfe'],
    applications: ['high-temp', 'food-grade'],
    image: '/assets/products/ptfe-belt.jpg',
    isFeatured: true,
  },

  // ============ INDUSTRIAL SYSTEMS ============
  {
    id: 'ss-wire-mesh-conveyors',
    slug: 'ss-wire-mesh-conveyors',
    title: 'SS Wire Mesh Conveyors',
    description: 'Stainless steel mesh for washing and drying',
    category: 'industrial',
    categoryLabel: 'Industrial',
    features: ['Corrosion proof', 'Easy cleaning', 'Open structure'],
    specs: {
      loadCapacity: 'Up to 300 kg/m',
      beltWidth: '300-2000 mm',
      temperature: '-40°C to 350°C',
      material: 'SS 304/316 Wire Mesh',
      certifications: ['FDA', 'ISO 9001'],
    },
    industries: ['food', 'pharmaceuticals', 'automotive'],
    materials: ['stainless-steel', 'wire-mesh'],
    applications: ['high-temp', 'food-grade'],
    image: '/assets/products/wire-mesh-conveyor.jpg',
    isPopular: true,
  },
  {
    id: 'drum-conveyors',
    slug: 'drum-conveyors',
    title: 'Drum Conveyors',
    description: 'Roller drum systems for accumulation',
    category: 'industrial',
    categoryLabel: 'Industrial',
    features: ['Zero pressure zones', 'Smooth operation', 'Low noise'],
    specs: {
      loadCapacity: 'Up to 1000 kg/m',
      beltWidth: '400-1200 mm',
      speed: '0.1-2 m/s',
      material: 'Steel/PVC Rollers',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['packaging', 'automotive', 'pharmaceuticals'],
    materials: ['stainless-steel'],
    applications: ['horizontal', 'heavy-duty'],
    image: '/assets/products/drum-conveyor.jpg',
  },
  {
    id: 'cleated-conveyors',
    slug: 'cleated-conveyors',
    title: 'Cleated Conveyors',
    description: 'Belts with cleats for incline transport',
    category: 'industrial',
    categoryLabel: 'Industrial',
    features: ['Prevents rollback', 'Various cleat patterns', 'Strong attachment'],
    specs: {
      loadCapacity: 'Up to 400 kg/m',
      beltWidth: '300-1500 mm',
      temperature: '-10°C to 80°C',
      material: 'PVC/Rubber with Cleats',
      certifications: ['ISO 9001'],
    },
    industries: ['agriculture', 'mining', 'packaging'],
    materials: ['pvc', 'rubber'],
    applications: ['incline', 'heavy-duty'],
    image: '/assets/products/cleated-conveyor.jpg',
  },
  {
    id: 'z-type-elevators',
    slug: 'z-type-elevators',
    title: 'Z-Type Elevators',
    description: 'Compact vertical elevation systems',
    category: 'industrial',
    categoryLabel: 'Industrial',
    features: ['Space efficient', 'Gentle handling', 'High throughput'],
    specs: {
      loadCapacity: 'Up to 200 kg/m',
      beltWidth: '200-800 mm',
      speed: '0.3-1.5 m/s',
      material: 'Cleated Belt/Bucket',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['packaging', 'food', 'pharmaceuticals'],
    materials: ['pvc'],
    applications: ['incline'],
    image: '/assets/products/z-elevator.jpg',
    isFeatured: true,
  },
  {
    id: 'slat-chain-conveyor',
    slug: 'slat-chain-conveyor',
    title: 'Slat Chain Conveyor',
    description: 'Heavy-duty chain conveyors for harsh conditions',
    category: 'industrial',
    categoryLabel: 'Industrial',
    features: ['Extreme durability', 'High temperature rated', 'Heavy loads'],
    specs: {
      loadCapacity: 'Up to 2000 kg/m',
      beltWidth: '200-1500 mm',
      temperature: '-40°C to 300°C',
      material: 'SS/Carbon Steel',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['automotive', 'cement', 'mining'],
    materials: ['stainless-steel'],
    applications: ['heavy-duty', 'high-temp'],
    image: '/assets/products/slat-chain-conveyor.jpg',
    isPopular: true,
  },
  {
    id: 'powered-roller-conveyors',
    slug: 'powered-roller-conveyors',
    title: 'Powered Roller Conveyors',
    description: 'Motorized roller systems for automated handling',
    category: 'industrial',
    categoryLabel: 'Industrial',
    features: ['Energy efficient', 'Precise control', 'Modular zones'],
    specs: {
      loadCapacity: 'Up to 500 kg/m',
      beltWidth: '300-1000 mm',
      speed: '0.1-2.5 m/s',
      material: 'Steel/Poly Rollers',
      certifications: ['ISO 9001', 'CE'],
    },
    industries: ['packaging', 'automotive', 'pharmaceuticals'],
    materials: ['stainless-steel'],
    applications: ['horizontal'],
    image: '/assets/products/powered-roller.jpg',
  },
];

// Helper functions
export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getProductsByIndustry = (industry: Industry): Product[] => {
  return products.filter((p) => p.industries.includes(industry));
};

export const getProductsByMaterial = (material: Material): Product[] => {
  return products.filter((p) => p.materials.includes(material));
};

export const getProductsByApplication = (application: Application): Product[] => {
  return products.filter((p) => p.applications.includes(application));
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isFeatured);
};

export const getPopularProducts = (): Product[] => {
  return products.filter((p) => p.isPopular);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.title.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.features.some((f) => f.toLowerCase().includes(lowerQuery))
  );
};
