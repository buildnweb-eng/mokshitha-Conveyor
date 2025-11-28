import { Suspense } from 'react';
import { ContactPageClient } from './ContactPageClient';

// URL search params interface
interface ContactPageProps {
  searchParams: Promise<{
    product?: string;
    industry?: string;
    type?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;

  return (
    <Suspense fallback={<ContactPageSkeleton />}>
      <ContactPageClient
        initialProduct={params.product}
        initialIndustry={params.industry}
        initialType={params.type}
      />
    </Suspense>
  );
}

// Loading skeleton
function ContactPageSkeleton() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-pulse">
          <div className="h-12 bg-muted rounded w-64 mx-auto mb-4" />
          <div className="h-6 bg-muted rounded w-96 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 h-96 bg-muted rounded-lg" />
          <div className="space-y-4">
            <div className="h-64 bg-muted rounded-lg" />
            <div className="h-48 bg-muted rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
