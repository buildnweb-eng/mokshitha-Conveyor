'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/contact-faq';
import { HelpCircle } from 'lucide-react';

export function FAQSection() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          <HelpCircle className="h-4 w-4" />
          Frequently Asked Questions
        </div>
        <h2 className="font-heading text-3xl font-bold mb-2">Common Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find quick answers to frequently asked questions about our products, services, and processes
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground">
          Can&apos;t find what you&apos;re looking for?{' '}
          <a href="#contact-form" className="text-accent hover:underline">
            Send us a message
          </a>{' '}
          and we&apos;ll get back to you within 24 hours.
        </p>
      </div>
    </section>
  );
}
