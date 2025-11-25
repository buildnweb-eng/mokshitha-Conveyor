'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <Button
        asChild
        size="lg"
        className="bg-accent hover:bg-accent/90 text-white shadow-2xl hover:shadow-accent/50 transition-all hover:scale-110 rounded-full px-6"
      >
        <Link href="/contact" className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span className="font-semibold">Get Free Quote</span>
        </Link>
      </Button>
    </div>
  );
}
