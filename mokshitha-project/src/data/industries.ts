// Industry Data with Icon Mappings for Mokshitha Industrial Automation
// Used for filtering products and displaying industry application icons

import { LucideIcon } from 'lucide-react';
import {
  Pill,
  UtensilsCrossed,
  Mountain,
  Car,
  Package,
  Wheat,
  Shirt,
  Building2,
} from 'lucide-react';

export type IndustryId = 'pharmaceuticals' | 'food' | 'mining' | 'automotive' | 'packaging' | 'agriculture' | 'textiles' | 'cement';

export interface IndustryData {
  id: IndustryId;
  name: string;
  shortName: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  description: string;
}

export const industries: Record<IndustryId, IndustryData> = {
  pharmaceuticals: {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    shortName: 'Pharma',
    icon: Pill,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    description: 'FDA-approved conveyor solutions for pharmaceutical manufacturing',
  },
  food: {
    id: 'food',
    name: 'Food & Beverage',
    shortName: 'Food',
    icon: UtensilsCrossed,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    description: 'Food-grade conveyors for processing and packaging',
  },
  mining: {
    id: 'mining',
    name: 'Mining & Minerals',
    shortName: 'Mining',
    icon: Mountain,
    color: 'text-amber-700',
    bgColor: 'bg-amber-100',
    description: 'Heavy-duty systems for mining and mineral processing',
  },
  automotive: {
    id: 'automotive',
    name: 'Automotive',
    shortName: 'Auto',
    icon: Car,
    color: 'text-gray-600',
    bgColor: 'bg-gray-100',
    description: 'Precision conveyors for automotive assembly lines',
  },
  packaging: {
    id: 'packaging',
    name: 'Packaging',
    shortName: 'Pack',
    icon: Package,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
    description: 'Efficient conveyor systems for packaging operations',
  },
  agriculture: {
    id: 'agriculture',
    name: 'Agriculture',
    shortName: 'Agri',
    icon: Wheat,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    description: 'Durable systems for agricultural processing',
  },
  textiles: {
    id: 'textiles',
    name: 'Textiles',
    shortName: 'Textile',
    icon: Shirt,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    description: 'Gentle handling conveyors for textile manufacturing',
  },
  cement: {
    id: 'cement',
    name: 'Cement & Construction',
    shortName: 'Cement',
    icon: Building2,
    color: 'text-slate-600',
    bgColor: 'bg-slate-100',
    description: 'Heavy-duty systems for cement and construction materials',
  },
};

// Get all industries as array
export const industriesList: IndustryData[] = Object.values(industries);

// Get industry by ID
export const getIndustry = (id: IndustryId): IndustryData => industries[id];

// Material filter options
export const materials = [
  { id: 'rubber', name: 'Rubber', description: 'Natural and synthetic rubber belts' },
  { id: 'pvc', name: 'PVC', description: 'Polyvinyl chloride belts' },
  { id: 'stainless-steel', name: 'Stainless Steel', description: 'SS 304/316 chains and conveyors' },
  { id: 'cotton', name: 'Cotton/Fabric', description: 'Natural fiber belts' },
  { id: 'ptfe', name: 'PTFE/Teflon', description: 'Non-stick coated belts' },
  { id: 'wire-mesh', name: 'Wire Mesh', description: 'Open structure metal belts' },
  { id: 'nylon', name: 'Nylon', description: 'Reinforced nylon fabric belts' },
] as const;

// Application filter options
export const applications = [
  { id: 'horizontal', name: 'Horizontal Transport', description: 'Standard flat conveying' },
  { id: 'incline', name: 'Incline/Decline', description: 'Elevated or descending transport' },
  { id: 'high-temp', name: 'High Temperature', description: 'Heat-resistant applications' },
  { id: 'food-grade', name: 'Food Grade', description: 'FDA/FSSAI approved for food contact' },
  { id: 'heavy-duty', name: 'Heavy Duty', description: 'High load capacity systems' },
] as const;

// Category filter options
export const categories = [
  { id: 'components', name: 'Conveyor Components', description: 'Belts, rollers, and parts' },
  { id: 'systems', name: 'Conveyor Systems', description: 'Complete conveyor solutions' },
  { id: 'specialized', name: 'Specialized Belts', description: 'Premium and specialty belts' },
  { id: 'industrial', name: 'Industrial Systems', description: 'Heavy-duty industrial conveyors' },
] as const;
