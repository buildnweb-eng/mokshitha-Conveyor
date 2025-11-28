import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | Mokshitha Industrial Automation',
  description:
    'Conveyor solutions for 24+ industries including pharmaceuticals, food processing, automotive, packaging, mining, and more. FDA, FSSAI, ISO certified.',
  keywords: [
    'conveyor solutions by industry',
    'pharmaceutical conveyors',
    'food processing conveyors',
    'automotive conveyor systems',
    'packaging conveyors',
    'industrial conveyors India',
    'FDA approved conveyors',
    'FSSAI certified conveyor belts',
  ],
  openGraph: {
    title: 'Industries We Serve | Mokshitha Industrial Automation',
    description:
      'Customized conveyor solutions for pharmaceuticals, food processing, automotive, and 20+ more industries.',
    type: 'website',
    locale: 'en_IN',
  },
};

// JSON-LD Structured Data for Industries Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Industries We Serve',
  description:
    'Mokshitha Industrial Automation provides conveyor solutions across 24+ industries including pharmaceuticals, food processing, automotive, and more.',
  url: 'https://mokshithaautomation.com/industries',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Pharmaceutical Conveyor Solutions',
          description: 'FDA-compliant conveyor systems for pharmaceutical manufacturing',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Food Processing Conveyor Solutions',
          description: 'Hygienic food-grade conveyors for food processing facilities',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Automotive Conveyor Solutions',
          description: 'Precision conveyor systems for automotive assembly lines',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Packaging & Logistics Solutions',
          description: 'Efficient material handling conveyors for warehouses and packaging',
        },
      },
    ],
  },
  provider: {
    '@type': 'Organization',
    name: 'Mokshitha Industrial Automation',
    url: 'https://mokshithaautomation.com',
  },
};

export default function IndustriesLayout({
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
