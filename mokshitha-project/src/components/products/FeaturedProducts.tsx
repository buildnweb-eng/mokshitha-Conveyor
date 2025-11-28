'use client';

import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, type Product } from '@/data/products';

interface FeaturedProductsProps {
  showCompare?: boolean;
  compareIds?: string[];
  onCompareToggle?: (productId: string) => void;
}

export default function FeaturedProducts({
  showCompare = false,
  compareIds = [],
  onCompareToggle,
}: FeaturedProductsProps) {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  if (featuredProducts.length === 0) return null;

  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 text-accent fill-accent" />
        <h2 className="font-heading text-2xl font-semibold">Featured Products</h2>
        <Badge variant="secondary" className="ml-2">
          Top Picks
        </Badge>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showCompare={showCompare}
            isComparing={compareIds.includes(product.id)}
            onCompareToggle={onCompareToggle}
          />
        ))}
      </div>
    </section>
  );
}
