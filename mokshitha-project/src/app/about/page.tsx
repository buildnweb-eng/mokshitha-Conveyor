import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide high-quality, customized conveyor solutions that enhance industrial efficiency and productivity.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with deep expertise in industrial automation and conveyor systems.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Industry-standard products manufactured with precision and rigorous quality control processes.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Growth',
      description: 'Constantly innovating and expanding our product range to meet evolving industry needs.',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl font-bold mb-6">About Mokshitha Industrial Automation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the industry in conveyor belt manufacturing since 2013
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image 
              src="/assets/about-facility.jpg" 
              alt="Mokshitha Industrial Automation facility" 
              width={800}
              height={600}
              className="rounded-lg shadow-hover w-full h-auto"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Mokshitha Industrial Automation, established in 2013 in Hyderabad, is a leading manufacturer & supplier of conveyor belts, conveyor systems, and industrial automation solutions.
              </p>
              <p>
                Built on the expertise of highly skilled professionals, we provide high-quality, industry-standard products customized to client requirements.
              </p>
              <p>
                Our state-of-the-art manufacturing facility and commitment to innovation have made us a trusted partner for major industries across India, from pharmaceuticals to food processing.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-hover transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="bg-muted rounded-lg p-8 md:p-12">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">Our Capabilities</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-3 text-primary">Manufacturing Excellence</h3>
              <p className="text-muted-foreground">
                Advanced production facilities equipped with modern machinery for precision manufacturing of conveyor components and systems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3 text-primary">Custom Engineering</h3>
              <p className="text-muted-foreground">
                In-house design and engineering team capable of developing bespoke solutions tailored to unique operational requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-3 text-primary">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Comprehensive testing and quality control protocols ensuring every product meets stringent industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

