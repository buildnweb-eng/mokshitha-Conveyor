'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

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
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo/logo.jpeg" 
              alt="Mokshitha Logo" 
              width={50} 
              height={50}
              className="object-contain rounded-lg"
            />
            <div className="font-heading font-bold text-xl text-primary">
              MOKSHITHA
              <span className="block text-xs text-muted-foreground font-normal">Industrial Automation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className="relative text-sm font-medium text-foreground hover:text-primary transition-colors pb-1"
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1.5 h-1.5 bg-primary rounded-full"></span>
                  )}
                </Link>
              );
            })}
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
              {navigation.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="relative text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    )}
                    {item.name}
                  </Link>
                );
              })}
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

