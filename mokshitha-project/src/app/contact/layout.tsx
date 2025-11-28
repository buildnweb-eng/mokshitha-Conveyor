import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Mokshitha Industrial Automation',
  description:
    'Get a custom quote for conveyor belts, industrial automation systems, and material handling solutions. Contact our experts for technical consultation, support, or partnership inquiries.',
  keywords: [
    'contact conveyor manufacturer',
    'conveyor belt quote',
    'industrial automation inquiry',
    'material handling consultation',
    'conveyor system pricing',
    'Hyderabad conveyor manufacturer',
    'industrial conveyor support',
  ],
  openGraph: {
    title: 'Contact Us | Mokshitha Industrial Automation',
    description:
      'Get a custom quote for conveyor belts and industrial automation systems. Response within 24 hours.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mokshitha Industrial Automation',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Mokshitha Industrial Automation',
  description:
    'Contact page for quotes, support, and inquiries about conveyor belts and industrial automation systems.',
  url: 'https://mokshithaautomation.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: 'Mokshitha Industrial Automation',
    description:
      'Leading manufacturer of industrial conveyor belts and automation systems in Hyderabad, India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot No. 54, Kushaiguda IDA Phase-IV',
      addressLocality: 'Medchal',
      addressRegion: 'Hyderabad',
      postalCode: '500005',
      addressCountry: 'IN',
    },
    telephone: ['+91-7288048689', '+91-8885565829'],
    email: ['info@mokshithaautomation.com', 'support@mokshithaautomation.com'],
    openingHours: 'Mo-Sa 09:00-18:00',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '17.5015',
      longitude: '78.5534',
    },
    priceRange: '$$',
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  },
  potentialAction: {
    '@type': 'CommunicateAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://mokshithaautomation.com/contact',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
