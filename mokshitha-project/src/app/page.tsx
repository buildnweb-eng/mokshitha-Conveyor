import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Users, Award, Clock, Package, Cog, Wrench, Component, Pill, UtensilsCrossed, Mountain, Car, Box, Wheat, Building, Shirt, Quote, Star, Shield, Globe, Factory, MessageSquare, PenTool, Truck, FileText, Download, Mail, Phone } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { FloatingCTA } from '@/components/FloatingCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mokshitha Industrial Automation - Leading Conveyor Belt Manufacturer in Hyderabad',
  description: 'Manufacturers of all types of industrial conveyor belts. ISO certified, 11+ years experience, serving 500+ clients across pharmaceuticals, food processing, mining, and more. Custom solutions for your industry.',
  keywords: ['conveyor belts', 'industrial automation', 'PVC belts', 'PU belts', 'rubber conveyor', 'modular belts', 'Hyderabad', 'India', 'manufacturing', 'conveyor systems'],
  authors: [{ name: 'Mokshitha Industrial Automation' }],
  openGraph: {
    title: 'Mokshitha Industrial Automation - Conveyor Belt Solutions',
    description: 'Leading manufacturer of industrial conveyor belts with 11+ years of excellence. Serving 500+ clients across India.',
    url: 'https://www.mokshithaautomation.com',
    siteName: 'Mokshitha Industrial Automation',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mokshitha Industrial Automation',
    description: 'Leading manufacturer of industrial conveyor belts in Hyderabad, India',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const stats = [
    { icon: Users, label: 'Satisfied Clients', value: 500, suffix: '+' },
    { icon: Award, label: 'Years Experience', value: 11, suffix: '+' },
    { icon: CheckCircle, label: 'Projects Completed', value: 1000, suffix: '+' },
    { icon: Clock, label: 'On-Time Delivery', value: 98, suffix: '%' },
  ];

  const productCategories = [
    {
      icon: Package,
      name: 'Conveyor Belts',
      description: 'PVC, PU, Rubber, and Modular belts for all applications',
      specs: 'Load capacity: up to 500kg',
    },
    {
      icon: Cog,
      name: 'Conveyor Systems',
      description: 'Complete roller, chain, and slat conveyor systems',
      specs: 'Customizable lengths and widths',
    },
    {
      icon: Wrench,
      name: 'Industrial Belts',
      description: 'V-Belts, Timing Belts for power transmission',
      specs: 'High durability and efficiency',
    },
    {
      icon: Component,
      name: 'Components',
      description: 'Pulleys, rollers, bearings, and spare parts',
      specs: 'OEM and aftermarket options',
    },
  ];

  const industries = [
    { icon: Pill, name: 'Pharmaceuticals', description: 'FDA-compliant conveyor solutions' },
    { icon: UtensilsCrossed, name: 'Food & Beverage', description: 'Food-grade belt systems' },
    { icon: Mountain, name: 'Mining & Quarry', description: 'Heavy-duty mining conveyors' },
    { icon: Car, name: 'Automotive', description: 'Assembly line conveyors' },
    { icon: Box, name: 'Packaging', description: 'High-speed packaging systems' },
    { icon: Wheat, name: 'Agriculture', description: 'Grain and seed conveyors' },
    { icon: Building, name: 'Cement & Construction', description: 'Material handling systems' },
    { icon: Shirt, name: 'Textiles', description: 'Fabric and garment conveyors' },
  ];

  const testimonials = [
    {
      quote: "Mokshitha has been our conveyor belt partner for 5 years. Their quality and after-sales service is exceptional.",
      name: "Rajesh Kumar",
      designation: "Plant Manager",
      company: "Dr. Reddy's Laboratories",
      rating: 5,
    },
    {
      quote: "Custom solutions delivered on time, every time. Highly recommended for food-grade conveyor systems.",
      name: "Priya Sharma",
      designation: "Operations Head",
      company: "Britannia Industries",
      rating: 5,
    },
    {
      quote: "Outstanding technical support and reliable products. They understand our mining operations perfectly.",
      name: "Vikram Singh",
      designation: "Operations Director",
      company: "Heritage Foods",
      rating: 5,
    },
    {
      quote: "Professional team, quality products, and excellent maintenance support. A trusted partner for our facility.",
      name: "Anjali Mehta",
      designation: "Facility Manager",
      company: "Patanjali Ayurved",
      rating: 5,
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management', icon: Shield },
    { name: 'ISO 14001', description: 'Environmental', icon: Globe },
    { name: 'OHSAS 18001', description: 'Safety Standards', icon: Shield },
    { name: 'CE Marked', description: 'European Conformity', icon: Award },
  ];

  const partnerships = [
    { name: 'Gates', role: 'Authorized Dealer' },
    { name: 'Bando', role: 'Partner' },
    { name: 'MBL', role: 'Distributor' },
    { name: 'Rexnord', role: 'Partner' },
  ];

  const qualityBadges = [
    { label: '11+ Years of Excellence', icon: Award },
    { label: 'Made in India', icon: Factory },
    { label: 'Pan-India Delivery', icon: Globe },
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Inquiry',
      icon: MessageSquare,
      description: 'Share your requirements via call, email, or form',
    },
    {
      step: 2,
      title: 'Consultation',
      icon: Users,
      description: 'Our experts analyze your needs and suggest solutions',
    },
    {
      step: 3,
      title: 'Design',
      icon: PenTool,
      description: 'Custom design and specifications tailored to you',
    },
    {
      step: 4,
      title: 'Manufacturing',
      icon: Factory,
      description: 'Quality production at our Hyderabad facility',
    },
    {
      step: 5,
      title: 'Delivery & Support',
      icon: Truck,
      description: 'Pan-India delivery with ongoing maintenance support',
    },
  ];

  const faqItems = [
    {
      question: 'What is the minimum order quantity?',
      answer: 'We accept orders of all sizes, from single belts to bulk orders. Contact us for custom requirements and flexible ordering options.',
    },
    {
      question: 'Do you provide installation services?',
      answer: 'Yes, we offer complete installation and commissioning services across India. Our expert technical team ensures proper setup and training for your staff.',
    },
    {
      question: 'What is the typical delivery time?',
      answer: 'Standard products ship within 7-10 days. Custom orders may take 2-3 weeks depending on specifications. We maintain transparency throughout the process.',
    },
    {
      question: 'Do you offer warranty on your products?',
      answer: 'Yes, all our products come with a 12-month warranty against manufacturing defects. Extended warranty options are available for specific applications.',
    },
    {
      question: 'Can you customize belts for specific applications?',
      answer: 'Absolutely. We specialize in custom conveyor solutions for unique industrial requirements. Our engineering team works closely with you to design the perfect solution.',
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve 24+ industries including pharmaceuticals, food processing, mining, automotive, packaging, agriculture, cement, textiles, and more.',
    },
  ];

  const caseStudies = [
    {
      client: "Dr. Reddy's Laboratories",
      industry: 'Pharmaceutical',
      challenge: 'Needed food-grade conveyor system for tablet packaging line',
      solution: 'Custom PU conveyor belt with FDA-compliant materials',
      result: '30% increase in packaging efficiency',
      icon: Pill,
    },
    {
      client: 'Heritage Foods',
      industry: 'Food & Beverage',
      challenge: 'Required temperature-resistant belts for dairy processing',
      solution: 'Specialized cold-resistant PVC belts with easy-clean surface',
      result: 'Reduced maintenance downtime by 40%',
      icon: UtensilsCrossed,
    },
    {
      client: 'Mining Operations Ltd.',
      industry: 'Mining & Quarry',
      challenge: 'Heavy-duty conveyor for abrasive material transport',
      solution: 'Reinforced rubber belts with high tensile strength',
      result: 'Extended belt life by 60%',
      icon: Mountain,
    },
  ];

  const downloadResources = [
    {
      title: 'Product Catalog',
      description: 'Complete catalog with 50+ products and specifications',
      icon: FileText,
    },
    {
      title: 'Technical Specifications',
      description: 'Detailed specs for all belt types',
      icon: Download,
    },
    {
      title: 'Company Brochure',
      description: 'Learn about our capabilities and facilities',
      icon: Building,
    },
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
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">ISO 9001:2015 Certified • 11+ Years Experience</span>
            </div>

            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight animate-fade-in">
              MOKSHITHA INDUSTRIAL AUTOMATION
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Manufacturers of All Types of Industrial Conveyor Belts
            </p>
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Trusted by 500+ leading companies across India • Custom solutions • 98% on-time delivery
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Link href="/products">View Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold px-8 shadow-lg">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
            </div>

            {/* Quick Stats Below Hero */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-2xl font-bold">500+</p>
                <p className="text-sm text-white/80">Happy Clients</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-2xl font-bold">1000+</p>
                <p className="text-sm text-white/80">Projects</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-sm text-white/80">On-Time</p>
              </div>
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

      {/* Products Showcase Section */}
      <section className="py-20 bg-white relative">
        {/* Decorative Element */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Package className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent">PRODUCT CATEGORIES</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Product Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive conveyor solutions for diverse industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {productCategories.map((product, index) => (
              <Card key={product.name} className="group hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-accent relative overflow-hidden">
                {/* Card Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                  {index + 1}
                </div>
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <product.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="bg-muted px-3 py-2 rounded-lg mb-4">
                    <p className="text-xs text-primary font-medium">
                      {product.specs}
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all">
                    <Link href="/products">Explore Range →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Products CTA */}
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/products">View All Products & Specifications</Link>
            </Button>
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
              <div className="flex gap-8 items-center px-6">
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/dr-reddys.png" alt="Dr. Reddy's Laboratories" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/britannia.png" alt="Britannia Industries" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/patanjali.png" alt="Patanjali Ayurved" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/heritage.png" alt="Heritage Foods" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/nuziveedu.png" alt="Nuziveedu Seeds" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/parle.png" alt="Parle Products" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/bharat-biotech.png" alt="Bharat Biotech" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/nutrine.png" alt="Nutrine Confectionery" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/vimta-labs.png" alt="Vimta Labs" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/jodas.png" alt="Jodas Expoim" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/csit-iict.png" alt="CSIR-IICT" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-8 items-center px-6">
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/dr-reddys.png" alt="Dr. Reddy's Laboratories" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/britannia.png" alt="Britannia Industries" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/patanjali.png" alt="Patanjali Ayurved" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/heritage.png" alt="Heritage Foods" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/nuziveedu.png" alt="Nuziveedu Seeds" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/parle.png" alt="Parle Products" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/bharat-biotech.png" alt="Bharat Biotech" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/nutrine.png" alt="Nutrine Confectionery" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/vimta-labs.png" alt="Vimta Labs" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/jodas.png" alt="Jodas Expoim" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
                <div className="flex-shrink-0 w-52 h-36 bg-gradient-to-br from-white to-gray-50 border-2 border-secondary/20 rounded-xl flex items-center justify-center p-5 shadow-lg hover:shadow-2xl hover:border-secondary/60 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <Image src="/clients/csit-iict.png" alt="CSIR-IICT" width={180} height={90} className="object-contain filter hover:brightness-110 transition-all" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Client Reviews Section */}
      <section className="py-20 bg-muted relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-9xl text-accent">"</div>
          <div className="absolute bottom-10 right-10 text-9xl text-accent">"</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-semibold text-accent">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by industry leaders across India • Average rating 4.9/5
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-all bg-white border-2 hover:border-accent">
                <CardContent className="pt-8 pb-6">
                  {/* Large Quotation Mark */}
                  <Quote className="absolute top-4 right-4 h-16 w-16 text-accent/10" />

                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-foreground mb-6 text-lg leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t pt-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-lg">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.designation}</p>
                      <p className="text-sm font-medium text-accent">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-lg p-6 shadow-lg">
              <div className="text-center px-4 border-r">
                <p className="text-3xl font-bold text-accent">4.9</p>
                <div className="flex gap-0.5 my-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Average Rating</p>
              </div>
              <Button asChild variant="default" className="bg-primary">
                <Link href="/clients">View All Reviews →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Preview */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Building className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">24+ INDUSTRIES SERVED</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering tailored conveyor solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {industries.map((industry) => (
              <Card key={industry.name} className="group hover:shadow-xl transition-all hover:scale-105 border-2 hover:border-primary">
                <CardContent className="pt-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                    <industry.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-muted rounded-2xl p-8">
            <p className="text-muted-foreground mb-4">Serving businesses across India with specialized solutions</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/industries">Explore All Industries →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
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

      {/* Certifications & Awards Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality assured through international standards and trusted partnerships
            </p>
          </div>

          {/* Certifications Row */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">Our Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert) => (
                <Card key={cert.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <cert.icon className="h-12 w-12 mx-auto mb-3 text-accent" />
                    <h4 className="font-semibold text-lg mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Brand Partnerships Row */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-6">Trusted Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partnerships.map((partner) => (
                <Card key={partner.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <div className="h-16 flex items-center justify-center mb-3">
                      <p className="text-2xl font-bold text-primary">{partner.name}</p>
                    </div>
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                      {partner.role}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quality Badges Row */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {qualityBadges.map((badge) => (
                <Card key={badge.label} className="bg-white border-2 border-accent/20 hover:border-accent transition-colors">
                  <CardContent className="pt-6 pb-6 text-center">
                    <badge.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                    <p className="font-semibold text-lg">{badge.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work / Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures quality delivery from inquiry to installation
            </p>
          </div>

          {/* Desktop: Horizontal Timeline */}
          <div className="hidden md:block relative">
            {/* Connecting Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-accent/20" style={{ left: '10%', right: '10%' }}></div>

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((process, index) => (
                <div key={process.step} className="relative">
                  {/* Step Card */}
                  <Card className="text-center hover:shadow-lg transition-all hover:scale-105 border-2 border-transparent hover:border-accent">
                    <CardContent className="pt-6 pb-6">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                        {process.step}
                      </div>

                      {/* Icon */}
                      <process.icon className="h-12 w-12 mx-auto mb-4 text-accent" />

                      {/* Title */}
                      <h3 className="font-semibold text-lg mb-2">{process.title}</h3>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-6">
            {processSteps.map((process, index) => (
              <div key={process.step} className="relative pl-12">
                {/* Vertical Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-accent/20 -mb-6"></div>
                )}

                {/* Step Number Badge */}
                <div className="absolute left-2 top-6 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {process.step}
                </div>

                <Card className="hover:shadow-lg transition-shadow border-2 border-transparent hover:border-accent">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <process.icon className="h-10 w-10 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-world solutions that drive results for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  {/* Industry Icon */}
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                      <study.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>

                  {/* Client & Industry */}
                  <h3 className="font-semibold text-xl mb-1">{study.client}</h3>
                  <p className="text-sm text-accent mb-4">{study.industry}</p>

                  {/* Challenge */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Challenge</p>
                    <p className="text-sm">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Solution</p>
                    <p className="text-sm">{study.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="bg-accent/10 rounded-lg p-3 mt-4">
                    <p className="text-xs font-semibold text-accent uppercase mb-1">Result</p>
                    <p className="text-sm font-bold text-primary">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Download Our Resources</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get detailed information about our products and capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {downloadResources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <resource.icon className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <h3 className="font-semibold text-xl mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {resource.description}
                  </p>
                  <Button className="w-full" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Need more information? <Link href="/contact" className="text-accent font-medium hover:underline">Contact our team</Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg border px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Have more questions?
              </p>
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Form */}
              <div>
                <h2 className="font-heading text-4xl font-bold mb-4">Get a Quick Quote</h2>
                <p className="text-muted-foreground mb-6">
                  Share your requirements and we'll respond within 24 hours with a customized solution.
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-muted-foreground">
                      <option value="">Product Interest</option>
                      <option value="conveyor-belts">Conveyor Belts</option>
                      <option value="conveyor-systems">Conveyor Systems</option>
                      <option value="industrial-belts">Industrial Belts</option>
                      <option value="components">Components</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message (Optional)"
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    Request Quote
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We respond within 24 hours • Your data is secure
                  </p>
                </form>
              </div>

              {/* Right: Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-sm text-muted-foreground">7288048869</p>
                        <p className="text-sm text-muted-foreground">8885565829</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <p className="text-sm text-muted-foreground">info@mokshithaautomation.com</p>
                        <p className="text-sm text-muted-foreground">kumarbeltings@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Building className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-2">Visit Our Facility</h3>
                        <p className="text-sm text-muted-foreground">
                          Plot No. 54, Kushaiguda IDA Phase-IV, Medchal, Hyderabad – 500 005
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://www.mokshithaautomation.com/#organization',
                name: 'Mokshitha Industrial Automation',
                url: 'https://www.mokshithaautomation.com',
                logo: 'https://www.mokshithaautomation.com/logo.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91-7288048869',
                  contactType: 'Sales',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi', 'Telugu'],
                },
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Plot No. 54, Kushaiguda IDA Phase-IV',
                  addressLocality: 'Hyderabad',
                  addressRegion: 'Telangana',
                  postalCode: '500005',
                  addressCountry: 'IN',
                },
                sameAs: [
                  'https://www.kumarbeltings.com',
                ],
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://www.mokshithaautomation.com/#localbusiness',
                name: 'Mokshitha Industrial Automation',
                image: 'https://www.mokshithaautomation.com/facility.jpg',
                priceRange: '$$',
                telephone: '+91-7288048869',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Plot No. 54, Kushaiguda IDA Phase-IV, Medchal',
                  addressLocality: 'Hyderabad',
                  addressRegion: 'Telangana',
                  postalCode: '500005',
                  addressCountry: 'IN',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 17.5449,
                  longitude: 78.5718,
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              },
              {
                '@type': 'FAQPage',
                '@id': 'https://www.mokshithaautomation.com/#faqpage',
                mainEntity: faqItems.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              },
              {
                '@type': 'Product',
                '@id': 'https://www.mokshithaautomation.com/#product',
                name: 'Industrial Conveyor Belts',
                description: 'Complete range of conveyor belts including PVC, PU, Rubber, and Modular belts for industrial applications',
                brand: {
                  '@type': 'Brand',
                  name: 'Mokshitha Industrial Automation',
                },
                manufacturer: {
                  '@type': 'Organization',
                  name: 'Mokshitha Industrial Automation',
                },
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.9',
                  reviewCount: '150',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
              ...testimonials.map((testimonial, index) => ({
                '@type': 'Review',
                '@id': `https://www.mokshithaautomation.com/#review${index}`,
                itemReviewed: {
                  '@type': 'Product',
                  name: 'Industrial Conveyor Belts',
                },
                author: {
                  '@type': 'Person',
                  name: testimonial.name,
                  jobTitle: testimonial.designation,
                  worksFor: {
                    '@type': 'Organization',
                    name: testimonial.company,
                  },
                },
                reviewRating: {
                  '@type': 'Rating',
                  ratingValue: testimonial.rating,
                  bestRating: '5',
                },
                reviewBody: testimonial.quote,
              })),
            ],
          }),
        }}
      />

      {/* Floating CTA Button */}
      <FloatingCTA />
    </div>
  );
}
