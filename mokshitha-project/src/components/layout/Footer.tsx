import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2d3748] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">MOKSHITHA</h3>
            <p className="text-sm opacity-90">
              Leading manufacturer of industrial conveyor belts and automation solutions since 2013.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link href="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="/clients" className="hover:text-accent transition-colors">Clients</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-accent transition-colors">Conveyor Components</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Conveyor Systems</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Specialized Belts</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Industrial Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Plot No. 54, Kushaiguda IDA Phase-IV, Medchal, Hyderabad – 500 005</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:7288048689" className="hover:text-accent transition-colors">7288048689</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@mokshithaautomation.com" className="hover:text-accent transition-colors">
                  info@mokshithaautomation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 2025 Mokshitha Industrial Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

