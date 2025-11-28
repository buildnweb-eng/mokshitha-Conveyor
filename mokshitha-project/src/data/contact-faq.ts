// Contact Page FAQ Data
// Common questions to reduce support inquiries

export type FAQCategory = 'ordering' | 'support' | 'shipping' | 'customization';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqs: FAQ[] = [
  {
    id: 'lead-time',
    question: 'What is the typical lead time for conveyor systems?',
    answer:
      'Standard conveyor components ship within 2-3 weeks from order confirmation. Custom-engineered conveyor systems typically require 4-6 weeks depending on complexity, specifications, and current production schedule. For urgent requirements, we offer expedited manufacturing options.',
    category: 'ordering',
  },
  {
    id: 'custom-solutions',
    question: 'Do you offer custom conveyor solutions?',
    answer:
      'Yes, customization is our specialty. Our engineering team designs conveyor systems tailored to your specific application requirements, space constraints, and throughput needs. We handle everything from design consultation to installation and commissioning.',
    category: 'customization',
  },
  {
    id: 'certifications',
    question: 'What certifications do your products have?',
    answer:
      'Our products are certified to meet various industry standards including FDA, FSSAI, ISO 9001:2015, ISO 14001:2015, GMP, and HACCP. Specific certifications vary by product line - food-grade conveyors meet FDA/FSSAI requirements, while pharmaceutical conveyors comply with GMP standards.',
    category: 'support',
  },
  {
    id: 'warranty',
    question: 'What warranty do you provide?',
    answer:
      'We offer a standard 12-month warranty on all products covering manufacturing defects. Extended warranty options (up to 3 years) are available for complete conveyor systems. Warranty coverage includes free replacement of defective parts and technical support.',
    category: 'support',
  },
  {
    id: 'installation',
    question: 'Do you provide installation services?',
    answer:
      'Yes, we offer turnkey installation services across India. Our experienced technicians handle site assessment, system installation, alignment, testing, and commissioning. We also provide operator training as part of our installation package.',
    category: 'support',
  },
  {
    id: 'payment',
    question: 'What are your payment terms?',
    answer:
      'Standard payment terms are 50% advance with purchase order and 50% before dispatch. For established clients and bulk orders, we offer flexible payment arrangements including letter of credit (LC) and post-delivery payment terms. GST invoicing is standard.',
    category: 'ordering',
  },
  {
    id: 'shipping',
    question: 'Do you ship pan-India and internationally?',
    answer:
      'Yes, we ship to all major cities across India with our logistics partners. International shipping is available for select products to countries in the Middle East, Africa, and Southeast Asia. Shipping costs and delivery times vary based on destination and order size.',
    category: 'shipping',
  },
  {
    id: 'technical-support',
    question: 'How can I get technical support?',
    answer:
      'Technical support is available through multiple channels: phone support (7288048689), email (support@mokshithaautomation.com), and WhatsApp. For existing customers, we offer on-site support for urgent issues. Our support team is available Monday-Saturday, 9 AM to 6 PM.',
    category: 'support',
  },
];

// Get FAQs by category
export const getFAQsByCategory = (category: FAQCategory): FAQ[] => {
  return faqs.filter((faq) => faq.category === category);
};

// Get all unique categories
export const faqCategories: FAQCategory[] = ['ordering', 'customization', 'support', 'shipping'];
