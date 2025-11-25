'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Industries', path: '/industries' },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:7288048689" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-3 w-3" />
              <span>7288048689</span>
            </a>
            <a href="mailto:info@mokshithaautomation.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">info@mokshithaautomation.com</span>
            </a>
          </div>
          <div className="text-xs">
            <span>Since 2013 • Hyderabad</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-heading font-bold text-xl text-primary">
            MOKSHITHA
            <span className="block text-xs text-muted-foreground font-normal">Industrial Automation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild variant="default" className="bg-accent hover:bg-accent/90 w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

