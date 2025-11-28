'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowRight, CheckCircle, Package, Users, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { IndustryDetail } from '@/data/industries-details';

interface IndustryCardProps {
  industry: IndustryDetail;
  variant?: 'compact' | 'detailed';
}

const IndustryCard = ({ industry, variant = 'detailed' }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = industry.icon;

  // Compact variant (simple icon + name)
  if (variant === 'compact') {
    return (
      <Card
        className="hover:shadow-hover hover:border-accent transition-all duration-300 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="flex flex-col items-center justify-center p-6 text-center">
          <div className={cn(
            "h-12 w-12 rounded-full flex items-center justify-center mb-3 transition-colors",
            isHovered ? "bg-accent text-accent-foreground" : "bg-accent/10"
          )}>
            <Icon className={cn("h-6 w-6", isHovered ? "text-accent-foreground" : "text-accent")} />
          </div>
          <h3 className="font-semibold text-sm">{industry.name}</h3>
        </CardContent>
      </Card>
    );
  }

  // Detailed variant (full card with info)
  return (
    <Card
      className="hover:shadow-hover transition-all duration-300 h-full flex flex-col group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center transition-colors",
            isHovered ? "bg-accent text-accent-foreground" : "bg-accent/10"
          )}>
            <Icon className={cn("h-6 w-6", isHovered ? "text-accent-foreground" : "text-accent")} />
          </div>
          {industry.isFeatured && (
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          )}
        </div>
        <CardTitle className="font-heading text-lg mt-3">{industry.name}</CardTitle>
        <CardDescription className="line-clamp-2">{industry.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Certifications */}
        {industry.certifications.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {industry.certifications.slice(0, 3).map((cert) => (
              <Badge key={cert} variant="outline" className="text-xs">
                {cert}
              </Badge>
            ))}
            {industry.certifications.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{industry.certifications.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Quick Stats */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Package className="w-3 h-3" />
            <span>{industry.recommendedProducts.length} Products</span>
          </div>
          {industry.clients && industry.clients.length > 0 && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{industry.clients.length}+ Clients</span>
            </div>
          )}
        </div>

        {/* Case Study Highlight */}
        {industry.caseStudy && (
          <div className="bg-muted/50 rounded-md p-3 text-sm">
            <div className="flex items-center gap-1 text-accent font-medium mb-1">
              <Award className="w-3 h-3" />
              Success Story
            </div>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {industry.caseStudy.result}
            </p>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="mt-auto pt-4 flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1">
                Learn More
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <DialogTitle className="font-heading text-xl">{industry.name}</DialogTitle>
                    <DialogDescription>{industry.description}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {industry.certifications.map((cert) => (
                    <Badge key={cert} variant="secondary">
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Challenges */}
                <div>
                  <h4 className="font-semibold mb-2">Industry Challenges</h4>
                  <ul className="space-y-2">
                    {industry.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive mt-0.5">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-semibold mb-2">Our Solutions</h4>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study */}
                {industry.caseStudy && (
                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold mb-1 flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      Success Story: {industry.caseStudy.client}
                    </h4>
                    <p className="text-sm text-muted-foreground">{industry.caseStudy.result}</p>
                  </div>
                )}

                {/* Clients */}
                {industry.clients && industry.clients.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Trusted By</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map((client) => (
                        <Badge key={client} variant="outline">
                          {client}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex gap-3 pt-4">
                  <Button asChild className="flex-1">
                    <Link href={`/products?industry=${industry.slug}`}>
                      View Products
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link href={`/contact?industry=${encodeURIComponent(industry.name)}`}>
                      Request Consultation
                    </Link>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button asChild size="sm" className="gap-1">
            <Link href={`/contact?industry=${encodeURIComponent(industry.name)}`}>
              Get Quote
              <ArrowRight className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustryCard;
