'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Building2,
  Factory,
  Shield,
  Boxes,
  Phone,
  ArrowRight,
  Search,
  Star,
  Users,
  Award,
  CheckCircle,
} from 'lucide-react';
import IndustryCard from '@/components/IndustryCard';
import {
  industriesData,
  industryCategories,
  getFeaturedIndustries,
  getIndustriesByCategory,
  type IndustryCategory,
} from '@/data/industries-details';

export default function IndustriesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<IndustryCategory | 'all'>('all');

  // Filter industries based on search and category
  const filteredIndustries = useMemo(() => {
    let results = industriesData;

    // Filter by category
    if (activeCategory !== 'all') {
      results = getIndustriesByCategory(activeCategory);
    }

    // Filter by search
    if (searchQuery.length >= 2) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (i) =>
          i.name.toLowerCase().includes(query) ||
          i.description.toLowerCase().includes(query) ||
          i.certifications.some((c) => c.toLowerCase().includes(query))
      );
    }

    return results;
  }, [activeCategory, searchQuery]);

  const featuredIndustries = getFeaturedIndustries();

  // Stats
  const stats = [
    { label: 'Industries Served', value: industriesData.length + '+', icon: Building2 },
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Success Stories', value: '50+', icon: Award },
    { label: 'Years Experience', value: '11+', icon: Star },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Building2 className="w-3 h-3 mr-1" />
            {industriesData.length}+ Industries
          </Badge>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Delivering customized conveyor solutions across diverse industrial sectors.
            From pharmaceuticals to heavy manufacturing, we understand your unique challenges.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-muted/50 rounded-lg p-4 text-center"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <div className="font-heading text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Industries */}
        {activeCategory === 'all' && searchQuery.length < 2 && (
          <section className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <h2 className="font-heading text-2xl font-semibold">Featured Industries</h2>
              <Badge variant="secondary" className="ml-2">Top Sectors</Badge>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredIndustries.map((industry) => (
                <IndustryCard key={industry.id} industry={industry} variant="detailed" />
              ))}
            </div>
          </section>
        )}

        {/* Category Tabs */}
        <Tabs
          value={activeCategory}
          onValueChange={(v) => setActiveCategory(v as IndustryCategory | 'all')}
          className="w-full"
        >
          <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-8">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              All Industries ({industriesData.length})
            </TabsTrigger>
            {(Object.keys(industryCategories) as IndustryCategory[]).map((category) => {
              const count = getIndustriesByCategory(category).length;
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  {industryCategories[category].name} ({count})
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Category Description */}
          {activeCategory !== 'all' && (
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl font-semibold mb-2">
                {industryCategories[activeCategory].name}
              </h2>
              <p className="text-muted-foreground">
                {industryCategories[activeCategory].description}
              </p>
            </div>
          )}

          {/* Results Count */}
          {searchQuery.length >= 2 && (
            <div className="text-center mb-8">
              <p className="text-muted-foreground">
                Found {filteredIndustries.length} industries matching &quot;{searchQuery}&quot;
              </p>
            </div>
          )}

          {/* Industries Grid */}
          <TabsContent value={activeCategory} className="mt-0">
            {filteredIndustries.length === 0 ? (
              <div className="text-center py-16">
                <Building2 className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="font-heading text-xl font-semibold mb-2">
                  No industries found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or category filter
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIndustries.map((industry) => (
                  <IndustryCard key={industry.id} industry={industry} variant="detailed" />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Why Industries Choose Us Section */}
        <section className="mt-20 bg-muted rounded-2xl p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Why Industries Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Industry Compliance</h3>
              <p className="text-muted-foreground">
                FDA, FSSAI, ISO, GMP certified solutions meeting all industry standards for safety and quality.
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <Badge variant="outline">FDA</Badge>
                <Badge variant="outline">ISO 9001</Badge>
                <Badge variant="outline">FSSAI</Badge>
                <Badge variant="outline">GMP</Badge>
              </div>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Sector Expertise</h3>
              <p className="text-muted-foreground">
                11+ years of deep understanding across manufacturing, food processing, pharma, and logistics sectors.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Application-specific designs
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Industry best practices
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Boxes className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored conveyor systems designed to integrate seamlessly with your existing production lines.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  On-site assessments
                </li>
                <li className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Turnkey installations
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Bar */}
        <section className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Certifications & Compliance</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['FDA', 'ISO 9001:2015', 'FSSAI', 'GMP', 'HACCP', 'CE', 'WHO-GMP'].map((cert) => (
              <div
                key={cert}
                className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mt-20 py-16 px-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            We serve many more industries beyond those listed. Contact us to discuss your specific
            conveyor requirements and discover how we can help optimize your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                Discuss Your Industry
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/products">
                Browse All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
