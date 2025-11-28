'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Clock, Award, CheckCircle2 } from 'lucide-react';

interface TrustItem {
  icon: typeof Shield;
  value: string;
  label: string;
}

const trustItems: TrustItem[] = [
  {
    icon: Shield,
    value: 'ISO 9001',
    label: 'Certified',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Clients Served',
  },
  {
    icon: Clock,
    value: '11+',
    label: 'Years Experience',
  },
  {
    icon: Award,
    value: '98%',
    label: 'On-Time Delivery',
  },
];

const certifications = [
  'FDA Approved',
  'FSSAI Certified',
  'GMP Compliant',
  'HACCP Standards',
];

export function TrustSignals() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="font-heading text-lg flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          Why Choose Us
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 p-2 rounded-lg bg-muted/50"
            >
              <item.icon className="h-4 w-4 text-accent shrink-0" />
              <div>
                <p className="font-semibold text-sm">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-2">
            CERTIFICATIONS
          </p>
          <div className="space-y-1.5">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Response Promise */}
        <div className="bg-accent/10 rounded-lg p-3 text-center">
          <p className="text-sm font-medium text-accent">
            We respond within 24 hours
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Mon-Sat, 9 AM - 6 PM IST
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
