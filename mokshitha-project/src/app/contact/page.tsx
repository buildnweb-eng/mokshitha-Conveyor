'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you shortly.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Plot No. 54, Kushaiguda IDA Phase-IV, Medchal, Hyderabad – 500 005, Telangana',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: (
        <div className="space-y-1">
          <a href="tel:7288048689" className="block hover:text-accent transition-colors">7288048689</a>
          <a href="tel:8885565829" className="block hover:text-accent transition-colors">8885565829</a>
        </div>
      ),
    },
    {
      icon: Mail,
      title: 'Email',
      content: (
        <div className="space-y-1">
          <a href="mailto:info@mokshithaautomation.com" className="block hover:text-accent transition-colors">
            info@mokshithaautomation.com
          </a>
          <a href="mailto:support@mokshithaautomation.com" className="block hover:text-accent transition-colors">
            support@mokshithaautomation.com
          </a>
        </div>
      ),
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for quotes, support, or any inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="hover:shadow-hover transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                  <div className="text-muted-foreground text-sm">{info.content}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your requirements"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Visit Our Facility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our state-of-the-art manufacturing facility is located in the heart of Hyderabad's industrial zone. 
                  We welcome visits from clients and partners to see our operations firsthand.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Schedule a Visit</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Contact us in advance to schedule a facility tour or product demonstration.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call to Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

