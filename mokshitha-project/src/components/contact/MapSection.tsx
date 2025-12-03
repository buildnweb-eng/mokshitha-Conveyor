'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';

const FACILITY_LOCATION = {
  address: 'Plot No. 54, Kushaiguda IDA Phase-IV, Medchal, Hyderabad – 500 005, Telangana',
  lat: 17.5015,
  lng: 78.5534,
  // Google Maps embed URL for Kushaiguda Industrial Area
  embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2!2d78.55!3d17.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMwJzA1LjQiTiA3OMKwMzMnMTIuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  directionsUrl: 'https://www.google.com/maps/dir//Plot+No.+54,+Kushaiguda+IDA+Phase-IV,+Medchal,+Hyderabad+500005',
};

export function MapSection() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="font-heading text-lg flex items-center gap-2">
          <MapPin className="h-5 w-5 text-accent" />
          Visit Our Facility
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Map Embed */}
        <div className="aspect-video rounded-lg overflow-hidden bg-muted">
          <iframe
            src={FACILITY_LOCATION.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mokshitha Industrial Automation Location"
          />
        </div>

        {/* Address */}
        <p className="text-sm text-muted-foreground">{FACILITY_LOCATION.address}</p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            asChild
          >
            <a
              href={FACILITY_LOCATION.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4 mr-2" />
              Get Directions
            </a>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            asChild
          >
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${FACILITY_LOCATION.lat},${FACILITY_LOCATION.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Open in Maps
            </a>
          </Button>
        </div>

        {/* Visit Info */}
        <div className="bg-muted/50 rounded-lg p-3 text-sm">
          <p className="font-medium mb-1">Schedule a Facility Tour</p>
          <p className="text-muted-foreground text-xs">
            Contact us in advance to schedule a visit and see our manufacturing facility in action.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
