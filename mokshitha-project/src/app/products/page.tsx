'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Package, Phone, ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductFilters, { type FilterState } from '@/components/products/ProductFilters';
import ProductSearch from '@/components/products/ProductSearch';
import ProductComparison from '@/components/products/ProductComparison';
import FeaturedProducts from '@/components/products/FeaturedProducts';
import { products, categoryInfo, type Product, type ProductCategory } from '@/data/products';

export default function ProductsPage() {
  // Filter state
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    industries: [],
    materials: [],
    applications: [],
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  // Comparison state
  const [compareIds, setCompareIds] = useState<string[]>([]);

  // Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (searchQuery.length >= 2) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.features.some((f) => f.toLowerCase().includes(query));
        if (!matchesSearch) return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Industry filter
      if (
        filters.industries.length > 0 &&
        !product.industries.some((i) => filters.industries.includes(i))
      ) {
        return false;
      }

      // Material filter
      if (
        filters.materials.length > 0 &&
        !product.materials.some((m) => filters.materials.includes(m))
      ) {
        return false;
      }

      // Application filter
      if (
        filters.applications.length > 0 &&
        !product.applications.some((a) => filters.applications.includes(a))
      ) {
        return false;
      }

      return true;
    });
  }, [filters, searchQuery]);

  // Group products by category
  const productsByCategory = useMemo(() => {
    const grouped: Record<ProductCategory, Product[]> = {
      components: [],
      systems: [],
      specialized: [],
      industrial: [],
    };

    filteredProducts.forEach((product) => {
      grouped[product.category].push(product);
    });

    return grouped;
  }, [filteredProducts]);

  // Handle comparison toggle
  const handleCompareToggle = (productId: string) => {
    setCompareIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      if (prev.length >= 4) {
        return prev; // Max 4 products
      }
      return [...prev, productId];
    });
  };

  // Get products for comparison
  const compareProducts = products.filter((p) => compareIds.includes(p.id));

  // Check if we should show category sections or flat list
  const showCategorySections =
    filters.categories.length === 0 && searchQuery.length < 2;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Package className="w-3 h-3 mr-1" />
            24+ Products
          </Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Premium conveyor solutions for 24+ industries. FDA-approved, industrial-grade
            components designed for performance and reliability.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <ProductSearch
              value={searchQuery}
              onChange={setSearchQuery}
              className="w-full max-w-xl"
            />
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">4</span>
              <span>Product Categories</span>
            </div>
            <Separator orientation="vertical" className="h-5 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">24+</span>
              <span>Products</span>
            </div>
            <Separator orientation="vertical" className="h-5 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">8+</span>
              <span>Industries Served</span>
            </div>
            <Separator orientation="vertical" className="h-5 hidden md:block" />
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Custom</span>
              <span>Solutions Available</span>
            </div>
          </div>
        </div>

        {/* Featured Products (only show when no filters active) */}
        {filters.categories.length === 0 &&
          filters.industries.length === 0 &&
          filters.materials.length === 0 &&
          filters.applications.length === 0 &&
          searchQuery.length < 2 && (
            <FeaturedProducts
              showCompare={true}
              compareIds={compareIds}
              onCompareToggle={handleCompareToggle}
            />
          )}

        {/* Main Content Area */}
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <ProductFilters
            filters={filters}
            onFilterChange={setFilters}
            productCount={filteredProducts.length}
            totalCount={products.length}
          />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button + Results Count */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <ProductFilters
                filters={filters}
                onFilterChange={setFilters}
                productCount={filteredProducts.length}
                totalCount={products.length}
              />
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
            </div>

            {/* Results */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  No products found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFilters({
                      categories: [],
                      industries: [],
                      materials: [],
                      applications: [],
                    });
                    setSearchQuery('');
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            ) : showCategorySections ? (
              // Category Sections View
              <div className="space-y-16">
                {(Object.keys(categoryInfo) as ProductCategory[]).map((category) => {
                  const categoryProducts = productsByCategory[category];
                  if (categoryProducts.length === 0) return null;

                  const info = categoryInfo[category];

                  return (
                    <section key={category}>
                      {/* Category Header */}
                      <div className="mb-6">
                        <h2 className="font-heading text-2xl font-semibold mb-2">
                          {info.title}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                          {info.description}
                        </p>
                      </div>

                      {/* Products Grid */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categoryProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            showCompare={true}
                            isComparing={compareIds.includes(product.id)}
                            onCompareToggle={handleCompareToggle}
                          />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            ) : (
              // Flat Grid View (when filters/search active)
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    showCompare={true}
                    isComparing={compareIds.includes(product.id)}
                    onCompareToggle={handleCompareToggle}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Final CTA Section */}
        <section className="mt-20 py-16 px-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Can&apos;t find what you need?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We specialize in custom conveyor solutions tailored to your specific requirements.
            Contact our engineering team for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                Request Custom Solution
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/contact">
                Get Expert Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>

      {/* Comparison Bar */}
      <ProductComparison
        products={compareProducts}
        onRemove={(id) => setCompareIds((prev) => prev.filter((pid) => pid !== id))}
        onClearAll={() => setCompareIds([])}
      />
    </div>
  );
}
