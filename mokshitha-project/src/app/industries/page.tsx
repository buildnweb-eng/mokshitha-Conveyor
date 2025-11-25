import IndustryCard from '@/components/IndustryCard';
import { 
  Factory, 
  Pill, 
  Wheat, 
  Package, 
  Cigarette, 
  Wine, 
  Cookie, 
  Beef,
  Car,
  Battery,
  Shirt,
  Droplets,
  Shield,
  Boxes,
  FlaskConical,
  ShoppingBag
} from 'lucide-react';

export default function Industries() {
  const industries = [
    { name: 'Paper Industry', icon: Package },
    { name: 'Spinning & Weaving', icon: Shirt },
    { name: 'Textiles', icon: Shirt },
    { name: 'Tobacco', icon: Cigarette },
    { name: 'Printing & Packaging', icon: Package },
    { name: 'Aluminum', icon: Factory },
    { name: 'Biscuit & Bread', icon: Cookie },
    { name: 'Confectionery', icon: Cookie },
    { name: 'Beverages', icon: Wine },
    { name: 'Pharmaceutical', icon: Pill },
    { name: 'Tyre Manufacturing', icon: Factory },
    { name: 'Rice Mills', icon: Wheat },
    { name: 'Iron Industry', icon: Factory },
    { name: 'Food Processing', icon: Beef },
    { name: 'Automotive', icon: Car },
    { name: 'Bakery', icon: Cookie },
    { name: 'Poultry & Meat', icon: Beef },
    { name: 'Seafood', icon: Droplets },
    { name: 'Battery Manufacturing', icon: Battery },
    { name: 'Crusher Plants', icon: Factory },
    { name: 'Laundry Services', icon: ShoppingBag },
    { name: 'Chemical Plants', icon: FlaskConical },
    { name: 'FMCG', icon: ShoppingBag },
    { name: 'Logistics & Warehousing', icon: Boxes },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering customized conveyor solutions across diverse industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-16">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} name={industry.name} icon={industry.icon} />
          ))}
        </div>

        <div className="bg-muted rounded-lg p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Why Industries Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Industry Compliance</h3>
              <p className="text-muted-foreground">
                Our products meet all relevant industry standards and certifications for food safety, hygiene, and operational excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Sector Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of unique requirements across manufacturing, processing, and packaging sectors.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Boxes className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored conveyor systems designed to integrate seamlessly with your existing production lines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

