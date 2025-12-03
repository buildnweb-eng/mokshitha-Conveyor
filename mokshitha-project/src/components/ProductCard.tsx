'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ChevronDown, ChevronUp, Weight, Ruler, Thermometer, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product, Industry } from '@/data/products';
import { industries } from '@/data/industries';

interface ProductCardProps {
  product: Product;
  showCompare?: boolean;
  isComparing?: boolean;
  onCompareToggle?: (productId: string) => void;
  image?: string;
}

const ProductCard = ({
  product,
  showCompare = false,
  isComparing = false,
  onCompareToggle
}: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate quote URL with product name
  const quoteUrl = `/contact?product=${encodeURIComponent(product.title)}`;

  return (
    <Card className={cn(
      'hover:shadow-hover transition-all duration-300 h-full flex flex-col overflow-hidden group',
      isComparing && 'ring-2 ring-accent'
    )}>
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        {!imageError ? (
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary/60" />
              </div>
              <p className="text-sm text-muted-foreground">{product.categoryLabel}</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
        >
          {product.categoryLabel}
        </Badge>

        {/* Featured/Popular Badges */}
        {(product.isFeatured || product.isPopular) && (
          <div className="absolute top-3 right-3 flex flex-col gap-1">
            {product.isFeatured && (
              <Badge className="bg-accent text-accent-foreground">
                Featured
              </Badge>
            )}
            {product.isPopular && (
              <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                Popular
              </Badge>
            )}
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="font-heading text-lg leading-tight">{product.title}</CardTitle>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Quick Specs Row */}
        <div className="flex flex-wrap gap-2 text-xs">
          {product.specs.loadCapacity && (
            <div className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
              <Weight className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{product.specs.loadCapacity}</span>
            </div>
          )}
          {product.specs.beltWidth && (
            <div className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
              <Ruler className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{product.specs.beltWidth}</span>
            </div>
          )}
          {product.specs.temperature && (
            <div className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md">
              <Thermometer className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">{product.specs.temperature}</span>
            </div>
          )}
        </div>

        {/* Industry Icons */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-muted-foreground mr-1">Industries:</span>
          <div className="flex flex-wrap gap-1">
            {product.industries.slice(0, 4).map((industryId) => {
              const industry = industries[industryId as keyof typeof industries];
              if (!industry) return null;
              const Icon = industry.icon;
              return (
                <Tooltip key={industryId}>
                  <TooltipTrigger asChild>
                    <div className={cn(
                      'w-6 h-6 rounded-full flex items-center justify-center',
                      industry.bgColor
                    )}>
                      <Icon className={cn('w-3 h-3', industry.color)} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{industry.name}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
            {product.industries.length > 4 && (
              <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs text-muted-foreground">+{product.industries.length - 4}</span>
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        {product.specs.certifications && product.specs.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {product.specs.certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="text-xs px-1.5 py-0">
                {cert}
              </Badge>
            ))}
          </div>
        )}

        {/* Expandable Features */}
        {product.features && product.features.length > 0 && (
          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-full justify-between px-0 h-8">
                <span className="text-sm text-muted-foreground">
                  {isExpanded ? 'Hide features' : 'View features'}
                </span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2">
              <ul className="space-y-1 text-sm">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* CTA Buttons */}
        <div className="mt-auto pt-4 flex gap-2">
          <Button asChild className="flex-1" size="sm">
            <Link href={quoteUrl}>
              Request Quote
            </Link>
          </Button>
          {showCompare && onCompareToggle && (
            <Button
              variant={isComparing ? 'secondary' : 'outline'}
              size="sm"
              onClick={() => onCompareToggle(product.id)}
              className="px-3"
            >
              {isComparing ? 'Added' : 'Compare'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
