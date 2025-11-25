import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Target, Users, Award, TrendingUp, Shield, CheckCircle,
  Clock, Globe, Headphones, PenTool, Zap, MapPin,
  Building, Calendar, Handshake, Trophy, Star, Rocket,
  Eye, Heart, Factory, Cog, FlaskConical, Package,
  Phone, Mail, FileText, Quote, Linkedin
} from 'lucide-react';

// SEO Metadata
export const metadata: Metadata = {
  title: 'About Us | Mokshitha Industrial Automation',
  description: 'Learn about Mokshitha Industrial Automation - 11+ years of excellence in conveyor belt manufacturing. ISO certified, 500+ clients, pan-India service. Trusted partner for industrial automation since 2013.',
  keywords: ['about mokshitha', 'conveyor belt manufacturer', 'industrial automation company', 'hyderabad manufacturing', 'conveyor systems india', 'industrial belts supplier'],
  openGraph: {
    title: 'About Mokshitha Industrial Automation',
    description: 'Trusted partner for conveyor belt solutions since 2013. 500+ clients, 1000+ projects, ISO certified.',
    type: 'website',
    images: ['/assets/about-facility.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mokshitha Industrial Automation',
    description: 'Trusted partner for conveyor belt solutions since 2013. 500+ clients, 1000+ projects, ISO certified.',
  },
};

// Data Arrays
const stats = [
  { value: '500+', label: 'Happy Clients', icon: Users },
  { value: '11+', label: 'Years Excellence', icon: Calendar },
  { value: '1000+', label: 'Projects Delivered', icon: CheckCircle },
  { value: '98%', label: 'On-Time Delivery', icon: Clock },
];

const timelineMilestones = [
  {
    year: '2013',
    title: 'Company Founded',
    description: 'Mokshitha Industrial Automation established in Hyderabad, Telangana with a vision to provide quality conveyor solutions.',
    icon: Building,
  },
  {
    year: '2015',
    title: 'ISO Certification',
    description: 'Achieved ISO 9001:2015 certification for quality management and established standardized manufacturing processes.',
    icon: Award,
  },
  {
    year: '2017',
    title: 'Facility Expansion',
    description: 'Expanded manufacturing facility at Kushaiguda IDA, increasing production capacity by 200%.',
    icon: Factory,
  },
  {
    year: '2019',
    title: '500 Clients Milestone',
    description: 'Reached 500+ satisfied clients across India, expanding into pharmaceutical and food industries.',
    icon: Users,
  },
  {
    year: '2021',
    title: 'Strategic Partnerships',
    description: 'Became authorized dealer for Gates Corporation, partnered with Bando, MBL, and Rexnord.',
    icon: Handshake,
  },
  {
    year: '2023',
    title: '1000 Projects Completed',
    description: 'Completed 1000+ successful projects and expanded service network pan-India.',
    icon: Trophy,
  },
  {
    year: '2024',
    title: 'Present Day',
    description: 'Pan-India delivery network established, serving 24+ industries with custom solutions.',
    icon: Rocket,
  },
];

const teamMembers = [
  {
    name: 'Rajendra Kumar',
    designation: 'Founder & Managing Director',
    bio: '25+ years of experience in industrial automation. Founded Mokshitha with a vision to provide world-class conveyor solutions to Indian industries.',
    image: '/assets/team/founder.jpg',
  },
  {
    name: 'Suresh Reddy',
    designation: 'Technical Director',
    bio: 'Expert in conveyor system design with 15+ years in manufacturing. Leads our engineering team for custom solutions.',
    image: '/assets/team/technical-director.jpg',
  },
  {
    name: 'Priya Sharma',
    designation: 'Head of Operations',
    bio: 'Ensures timely delivery and quality standards across all projects. 12+ years in supply chain management.',
    image: '/assets/team/operations-head.jpg',
  },
  {
    name: 'Vikram Singh',
    designation: 'Business Development Head',
    bio: 'Building lasting client relationships across 24+ industries. Customer satisfaction champion.',
    image: '/assets/team/business-head.jpg',
  },
];

const missionVisionValues = [
  {
    icon: Target,
    title: 'Our Mission',
    content: 'To provide innovative, reliable, and cost-effective conveyor solutions that enhance operational efficiency for industries across India.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    content: 'To be India\'s most trusted partner for industrial automation, recognized for quality, innovation, and customer-centric solutions.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    content: 'Quality First • Customer Focus • Innovation • Integrity • Teamwork',
  },
];

const whyChooseUs = [
  {
    icon: PenTool,
    title: 'Tailored Engineering',
    description: 'Every conveyor system designed specifically for your operational requirements.',
  },
  {
    icon: Shield,
    title: 'Premium Grade Materials',
    description: 'Only FDA-approved, food-grade, and industrial-certified materials.',
  },
  {
    icon: Users,
    title: 'Experienced Engineers',
    description: '25+ years collective expertise in conveyor system design and manufacturing.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Standard products in 7-10 days, custom orders in 2-3 weeks.',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'Installation, maintenance, and support across all Indian states.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Support',
    description: '12-month warranty + ongoing maintenance and spare parts availability.',
  },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management', icon: Award },
  { name: 'ISO 14001:2015', description: 'Environmental Management', icon: Globe },
  { name: 'OHSAS 18001', description: 'Occupational Safety', icon: Shield },
  { name: 'CE Marked', description: 'European Conformity', icon: CheckCircle },
];

const partners = [
  { name: 'Gates Corporation', type: 'Authorized Dealer' },
  { name: 'Bando', type: 'Certified Partner' },
  { name: 'MBL India', type: 'Authorized Distributor' },
  { name: 'Rexnord', type: 'Service Partner' },
];

const capabilities = [
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    description: 'Advanced production facilities equipped with modern machinery for precision manufacturing of conveyor components and systems.',
    features: ['CNC Machining', 'Automated Assembly', 'Quality Testing'],
  },
  {
    icon: Cog,
    title: 'Custom Engineering',
    description: 'In-house design and engineering team capable of developing bespoke solutions tailored to unique operational requirements.',
    features: ['CAD Design', '3D Modeling', 'Prototype Development'],
  },
  {
    icon: FlaskConical,
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality control protocols ensuring every product meets stringent industry standards.',
    features: ['Material Testing', 'Load Testing', 'Performance Validation'],
  },
];

const testimonials = [
  {
    quote: 'Mokshitha has been our conveyor belt partner for 5 years. Their quality and after-sales service is unmatched in the industry.',
    name: 'Rajesh Kumar',
    designation: 'Plant Manager',
    company: 'Dr. Reddy\'s Laboratories',
    rating: 5,
  },
  {
    quote: 'Custom food-grade conveyor solutions delivered on time, every time. Highly recommended for pharmaceutical and food processing.',
    name: 'Priya Menon',
    designation: 'Operations Head',
    company: 'Britannia Industries',
    rating: 5,
  },
  {
    quote: 'From design to installation, the Mokshitha team exceeded our expectations. True experts in industrial automation.',
    name: 'Suresh Reddy',
    designation: 'Production Director',
    company: 'Heritage Foods',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'How long has Mokshitha been in business?',
    answer: 'Mokshitha Industrial Automation was founded in 2013. With 11+ years of experience, we\'ve completed over 1000 projects for 500+ clients across India.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve 24+ industries including pharmaceuticals, food & beverage, mining, automotive, packaging, agriculture, cement, textiles, and more. Our solutions are customized for each industry\'s specific requirements.',
  },
  {
    question: 'Do you provide installation services?',
    answer: 'Yes, we offer complete installation and commissioning services across India. Our experienced technicians ensure proper setup and training for your team.',
  },
  {
    question: 'What is your typical delivery time?',
    answer: 'Standard products ship within 7-10 business days. Custom conveyor systems typically take 2-3 weeks depending on specifications and complexity.',
  },
  {
    question: 'Do you offer warranty on products?',
    answer: 'All our products come with a 12-month warranty against manufacturing defects. Extended warranty options are available for select products.',
  },
  {
    question: 'What is your minimum order quantity?',
    answer: 'We have no minimum order requirement. We serve orders of all sizes, from single replacement belts to complete conveyor systems.',
  },
  {
    question: 'Do you provide maintenance services?',
    answer: 'Yes, we offer ongoing maintenance contracts, emergency repair services, and spare parts supply. Our service network covers all major Indian cities.',
  },
  {
    question: 'Can you customize conveyor systems for specific applications?',
    answer: 'Absolutely. Custom solutions are our specialty. Our engineering team designs conveyor systems tailored to your exact operational requirements, space constraints, and industry standards.',
  },
];

// JSON-LD Structured Data
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mokshitha Industrial Automation',
  url: 'https://mokshithaautomation.com',
  logo: 'https://mokshithaautomation.com/logo.png',
  foundingDate: '2013',
  description: 'Leading manufacturer and supplier of conveyor belts, conveyor systems, and industrial automation solutions in India.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 54, Kushaiguda IDA Phase-IV',
    addressLocality: 'Medchal',
    addressRegion: 'Telangana',
    postalCode: '500005',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-7288048869',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  sameAs: [],
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 50,
  },
  award: ['ISO 9001:2015 Certified', 'ISO 14001:2015 Certified'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function About() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative">
        {/* ===== SECTION 1: ENHANCED HERO ===== */}
        <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Trust Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">ISO 9001:2015 Certified</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center max-w-4xl mx-auto mb-10">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                About Mokshitha Industrial Automation
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Powering Indian Industries Since 2013
              </p>
              <p className="text-lg text-muted-foreground/80">
                Trusted by 500+ companies across 24+ industries for premium conveyor solutions
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-4 text-center hover:shadow-lg transition-all">
                    <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-accent/25 transition-all">
                <Link href="/products">
                  <Package className="mr-2 h-5 w-5" />
                  View Our Products
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 hover:bg-primary/5">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SECTION 2: COMPANY OVERVIEW ===== */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative">
                  <Image
                    src="/assets/about-facility.jpg"
                    alt="Mokshitha Industrial Automation manufacturing facility"
                    width={800}
                    height={600}
                    className="rounded-xl shadow-2xl w-full h-auto"
                  />
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -right-4 bg-accent text-white px-6 py-3 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">15,000+</div>
                    <div className="text-sm">Sq.ft Facility</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                  <Building className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Who We Are</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Your Trusted Partner in Industrial Automation
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Mokshitha Industrial Automation</strong>, established in 2013 in Hyderabad, is a leading manufacturer & supplier of conveyor belts, conveyor systems, and industrial automation solutions.
                  </p>
                  <p>
                    Built on the expertise of highly skilled professionals, we provide high-quality, industry-standard products customized to client requirements. Our commitment to excellence has earned us the trust of <strong className="text-foreground">500+ clients</strong> across India.
                  </p>
                  <p>
                    Our state-of-the-art manufacturing facility at Kushaiguda IDA and commitment to innovation have made us a trusted partner for major industries, from pharmaceuticals to food processing, mining to automotive.
                  </p>
                </div>

                {/* Quick Features */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Made in India</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Pan-India Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">Custom Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3: TIMELINE / OUR JOURNEY ===== */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full mb-4">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">11+ Years of Excellence</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From a small workshop to a leading industrial automation company
              </p>
            </div>

            {/* Timeline - Desktop */}
            <div className="hidden lg:block relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

              <div className="space-y-0">
                {timelineMilestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Content Card */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/50">
                        <CardContent className="p-6">
                          <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                            <span className="text-2xl font-bold text-accent">{milestone.year}</span>
                          </div>
                          <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                          <p className="text-sm text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center Icon */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-900 border-4 border-accent flex items-center justify-center shadow-lg">
                        <milestone.icon className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline - Mobile */}
            <div className="lg:hidden relative">
              {/* Left Line */}
              <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full" />

              <div className="space-y-8">
                {timelineMilestones.map((milestone) => (
                  <div key={milestone.year} className="relative flex items-start gap-6 pl-16">
                    {/* Icon */}
                    <div className="absolute left-0 z-10">
                      <div className="h-12 w-12 rounded-full bg-white dark:bg-gray-900 border-4 border-accent flex items-center justify-center shadow-lg">
                        <milestone.icon className="h-5 w-5 text-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <Card className="flex-1 hover:shadow-lg transition-all">
                      <CardContent className="p-4">
                        <span className="text-xl font-bold text-accent">{milestone.year}</span>
                        <h3 className="font-semibold text-lg mt-1">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 4: LEADERSHIP TEAM ===== */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Expert Team</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals driving innovation in industrial automation
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <Card key={member.name} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Avatar/Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                      <div className="h-24 w-24 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-3xl font-bold text-primary shadow-lg group-hover:scale-110 transition-transform">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                          <Linkedin className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-6 text-center">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-sm text-accent font-medium mb-3">{member.designation}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 5: MISSION, VISION, VALUES ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full mb-4">
                <Heart className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Our Philosophy</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Mission, Vision & Values</h2>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {missionVisionValues.map((item) => (
                <Card key={item.title} className="text-center border-2 hover:border-accent/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 6: WHY CHOOSE US ===== */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Our Differentiators</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose Mokshitha?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What sets us apart in the industry
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={item.title}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                          <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">0{index + 1}</div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom Features */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                No minimum order quantity
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                Free technical consultation
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                On-site installation available
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-accent" />
                Emergency repair services
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: CERTIFICATIONS & PARTNERSHIPS ===== */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full mb-4">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Quality Assured</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Certifications & Partnerships</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Certified excellence, trusted partnerships
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-16">
              <h3 className="font-semibold text-xl text-center mb-8">Quality Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {certifications.map((cert) => (
                  <Card key={cert.name} className="text-center hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <cert.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div>
              <h3 className="font-semibold text-xl text-center mb-8">Our Trusted Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {partners.map((partner) => (
                  <Card key={partner.name} className="text-center hover:shadow-lg transition-all bg-white dark:bg-gray-900">
                    <CardContent className="p-6">
                      <div className="h-16 flex items-center justify-center mb-3">
                        <span className="font-bold text-lg text-primary">{partner.name}</span>
                      </div>
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                        {partner.type}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 8: CAPABILITIES ===== */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <Cog className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">What We Do</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end conveyor solutions from design to delivery
              </p>
            </div>

            {/* Capabilities Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {capabilities.map((cap) => (
                <Card key={cap.title} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
                      <div className="h-14 w-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                        <cap.icon className="h-7 w-7" />
                      </div>
                      <h3 className="font-semibold text-xl">{cap.title}</h3>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{cap.description}</p>
                      <div className="space-y-2">
                        {cap.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-accent" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SECTION 9: TESTIMONIALS PREVIEW ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
          {/* Background Quote */}
          <div className="absolute top-10 left-10 opacity-5">
            <Quote className="h-40 w-40 text-primary" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-5 rotate-180">
            <Quote className="h-40 w-40 text-primary" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full mb-4">
                <Star className="h-4 w-4 text-accent fill-accent" />
                <span className="text-sm font-medium text-accent">Client Testimonials</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by industry leaders across India
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.name} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-muted-foreground mb-6 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.designation}</div>
                        <div className="text-sm text-accent">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View More */}
            <div className="text-center mt-10">
              <Button asChild variant="outline" className="border-2">
                <Link href="/clients">
                  Read More Client Stories
                  <TrendingUp className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SECTION 10: FAQ ===== */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-4">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Common Questions</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers about our company and services
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-white dark:bg-gray-900 rounded-lg border-2 px-6 data-[state=open]:border-accent/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* More Questions */}
            <div className="text-center mt-10">
              <p className="text-muted-foreground mb-4">Have more questions?</p>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ===== SECTION 11: FINAL CTA ===== */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Let&apos;s discuss how Mokshitha can transform your operations with reliable conveyor solutions
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-xl">
                <Link href="/contact">
                  <FileText className="mr-2 h-5 w-5" />
                  Request a Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                <Link href="/products">
                  <Package className="mr-2 h-5 w-5" />
                  View Our Products
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-white/80">
              <a href="tel:+917288048869" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>7288048869</span>
              </a>
              <a href="mailto:info@mokshithaautomation.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>info@mokshithaautomation.com</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield className="h-4 w-4" />
                ISO Certified
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Users className="h-4 w-4" />
                500+ Clients
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="h-4 w-4" />
                1000+ Projects
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="h-4 w-4" />
                24/7 Support
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
