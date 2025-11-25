import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function Clients() {
  const clients = [
    { name: 'Dr. Reddy\'s Laboratories', logo: '/clients/dr-reddys.png' },
    { name: 'Britannia Industries', logo: '/clients/britannia.png' },
    { name: 'Patanjali Ayurved', logo: '/clients/patanjali.png' },
    { name: 'Heritage Foods', logo: '/clients/heritage.png' },
    { name: 'Nuziveedu Seeds', logo: '/clients/nuziveedu.png' },
    { name: 'Parle Products', logo: '/clients/parle.png' },
    { name: 'Bharat Biotech', logo: '/clients/bharat-biotech.png' },
    { name: 'Nutrine Confectionery', logo: '/clients/nutrine.png' },
    { name: 'Vimta Labs', logo: '/clients/vimta-labs.png' },
    { name: 'Jodas Expoim', logo: '/clients/jodas.png' },
    { name: 'CSIR-IICT', logo: '/clients/csit-iict.png' },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold mb-6">Our Valued Clients</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading companies across pharmaceutical, food, and manufacturing sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client) => (
            <Card key={client.name} className="hover:shadow-hover transition-all duration-300">
              <CardContent className="flex items-center justify-center p-6 h-40">
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={200} 
                  height={100}
                  className="object-contain w-full h-full"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Join Our Growing Family</h2>
          <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
            We're proud to serve 500+ satisfied clients across India. Experience the quality and reliability that industry leaders trust.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-primary-foreground text-primary rounded-lg px-6 py-4">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Active Clients</p>
            </div>
            <div className="bg-primary-foreground text-primary rounded-lg px-6 py-4">
              <p className="text-3xl font-bold">98%</p>
              <p className="text-sm">Client Retention</p>
            </div>
            <div className="bg-primary-foreground text-primary rounded-lg px-6 py-4">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

