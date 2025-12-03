'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactInfo {
  icon: typeof Phone;
  title: string;
  content: React.ReactNode;
  action?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <span className="text-sm">
        Plot No. 54, Kushaiguda IDA Phase-IV,
        <br />
        Medchal, Hyderabad – 500 005
      </span>
    ),
  },
  {
    icon: Phone,
    title: 'Phone',
    content: (
      <div className="space-y-1">
        <a
          href="tel:7288048689"
          className="block text-sm hover:text-accent transition-colors"
        >
          +91 72880 48689
        </a>
        <a
          href="tel:8885565829"
          className="block text-sm hover:text-accent transition-colors"
        >
          +91 88855 65829
        </a>
      </div>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <div className="space-y-1">
        <a
          href="mailto:info@mokshithaautomation.com"
          className="block text-sm hover:text-accent transition-colors"
        >
          info@mokshithaautomation.com
        </a>
        <a
          href="mailto:support@mokshithaautomation.com"
          className="block text-sm hover:text-accent transition-colors"
        >
          support@mokshithaautomation.com
        </a>
      </div>
    ),
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: (
      <div className="text-sm">
        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
        <p className="text-muted-foreground">Sunday: Closed</p>
      </div>
    ),
  },
];

export function ContactInfoCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {contactInfo.map((info) => (
        <Card key={info.title} className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <info.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{info.title}</h3>
              <div className="text-muted-foreground">{info.content}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
