import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conveyor Products | Mokshitha Industrial Automation',
  description:
    'Browse 100+ conveyor belts, systems, and components. FDA-approved, industrial-grade solutions for pharmaceuticals, food processing, mining, automotive, and more. Request a quote today.',
  keywords: [
    'conveyor belts',
    'conveyor systems',
    'industrial conveyors',
    'PVC conveyor belt',
    'rubber conveyor belt',
    'stainless steel conveyor',
    'food grade conveyor',
    'pharmaceutical conveyor',
    'belt conveyor manufacturer',
    'conveyor components',
    'Hyderabad',
    'India',
  ],
  openGraph: {
    title: 'Conveyor Products | Mokshitha Industrial Automation',
    description:
      'Premium conveyor solutions for 24+ industries. FDA-approved, industrial-grade components.',
    type: 'website',
    locale: 'en_IN',
  },
};

// JSON-LD Structured Data for Products Page
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Conveyor Products',
  description:
    'Browse our complete range of conveyor belts, systems, and components for industrial applications.',
  url: 'https://mokshithaautomation.com/products',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Product',
          name: 'Conveyor Components',
          description: 'Belts, rollers, chains, and parts for conveyor systems',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Product',
          name: 'Conveyor Systems',
          description: 'Complete conveyor solutions for material handling',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Product',
          name: 'Specialized Belts',
          description: 'Premium belts for challenging environments',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Product',
          name: 'Industrial Systems',
          description: 'Heavy-duty conveyor solutions for demanding applications',
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

export default function ProductsLayout({
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
