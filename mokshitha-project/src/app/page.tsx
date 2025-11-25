import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export default function Home() {
  const stats = [
    { icon: Users, label: 'Satisfied Clients', value: 500, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 11, suffix: '+' },
    { icon: CheckCircle, label: 'Projects Completed', value: 1000, suffix: '+' },
    { icon: Clock, label: 'On-Time Delivery', value: 98, suffix: '%' },
  ];


  const whyChooseUs = [
    'ISO certified manufacturing facility',
    'Customized solutions for every industry',
    'Expert technical support team',
    'Competitive pricing with quality assurance',
    'Pan-India delivery network',
    'Proven track record since 2013',
  ];

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        {/* Video Background - Add your 10-second conveyor belt video to public/videos/hero.mp4 */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="/assets/hero-video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-conveyor.mp4" type="video/mp4" />
          {/* Fallback to image if video not available */}
        </video>
        
        {/* Teal Overlay */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
              MOKSHITHA INDUSTRIAL AUTOMATION
            </h1>
            <p className="text-xl md:text-2xl mb-10 font-light">
              Manufacturers of All Types of Industrial Conveyor Belts
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8">
                <Link href="/products">View Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                  <p className="text-3xl font-bold text-primary mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients - Horizontal Scrolling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Valued Clients</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies across pharmaceutical, food, and manufacturing sectors
            </p>
          </div>
          
          {/* Scrolling Client Logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              {/* First set of clients */}
              <div className="flex gap-12 items-center px-6">
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/dr-reddys.png" alt="Dr. Reddy's Laboratories" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/britannia.png" alt="Britannia Industries" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/patanjali.png" alt="Patanjali Ayurved" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/heritage.png" alt="Heritage Foods" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/nuziveedu.png" alt="Nuziveedu Seeds" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/parle.png" alt="Parle Products" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/bharat-biotech.png" alt="Bharat Biotech" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/nutrine.png" alt="Nutrine Confectionery" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/vimta-labs.png" alt="Vimta Labs" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/jodas.png" alt="Jodas Expoim" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/csit-iict.png" alt="CSIR-IICT" width={180} height={90} className="object-contain" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-12 items-center px-6">
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/dr-reddys.png" alt="Dr. Reddy's Laboratories" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/britannia.png" alt="Britannia Industries" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/patanjali.png" alt="Patanjali Ayurved" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/heritage.png" alt="Heritage Foods" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/nuziveedu.png" alt="Nuziveedu Seeds" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/parle.png" alt="Parle Products" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/bharat-biotech.png" alt="Bharat Biotech" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/nutrine.png" alt="Nutrine Confectionery" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/vimta-labs.png" alt="Vimta Labs" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/jodas.png" alt="Jodas Expoim" width={180} height={90} className="object-contain" />
                </div>
                <div className="flex-shrink-0 w-48 h-32 bg-white border border-border rounded-lg flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow">
                  <Image src="/clients/csit-iict.png" alt="CSIR-IICT" width={180} height={90} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Why Choose Mokshitha?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience, we deliver industry-leading conveyor solutions backed by expert engineering and customer-first service.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {whyChooseUs.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Every product undergoes rigorous quality checks to ensure industry-standard performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Custom Solutions</h3>
                  <p className="text-muted-foreground">
                    Tailored conveyor systems designed to meet your specific operational requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-2">Expert Support</h3>
                  <p className="text-muted-foreground">
                    Dedicated technical team providing installation, maintenance, and troubleshooting services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Get in touch with our experts for customized conveyor solutions that drive efficiency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Request Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
