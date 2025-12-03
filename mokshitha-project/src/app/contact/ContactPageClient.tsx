'use client';

import { useMemo } from 'react';
import {
  ContactFormWizard,
  ContactInfoCards,
  FAQSection,
  MapSection,
  TrustSignals,
} from '@/components/contact';
import { products } from '@/data/products';
import { industriesData } from '@/data/industries-details';
import type { ContactFormData, InquiryType } from '@/lib/schemas/contact-form';
import { MessageSquareMore } from 'lucide-react';

interface ContactPageClientProps {
  initialProduct?: string;
  initialIndustry?: string;
  initialType?: string;
}

export function ContactPageClient({
  initialProduct,
  initialIndustry,
  initialType,
}: ContactPageClientProps) {
  // Match product from URL param (by title or slug)
  const matchedProduct = useMemo(() => {
    if (!initialProduct) return undefined;
    const decoded = decodeURIComponent(initialProduct);
    return products.find(
      (p) =>
        p.title.toLowerCase() === decoded.toLowerCase() ||
        p.slug === decoded.toLowerCase() ||
        p.id === decoded
    );
  }, [initialProduct]);

  // Match industry from URL param (by name or slug)
  const matchedIndustry = useMemo(() => {
    if (!initialIndustry) return undefined;
    const decoded = decodeURIComponent(initialIndustry);
    return industriesData.find(
      (i) =>
        i.name.toLowerCase() === decoded.toLowerCase() ||
        i.slug === decoded.toLowerCase() ||
        i.id === decoded
    );
  }, [initialIndustry]);

  // Validate inquiry type
  const validTypes: InquiryType[] = ['quote', 'general'];
  const inquiryType: InquiryType = validTypes.includes(initialType as InquiryType)
    ? (initialType as InquiryType)
    : 'quote';

  // Build initial form values
  const initialValues: Partial<ContactFormData> = {
    inquiryType,
    productId: matchedProduct?.id || '',
    industryId: matchedIndustry?.id || '',
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <MessageSquareMore className="h-4 w-4" />
            Get in Touch
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to optimize your material handling? Get a custom quote or ask our experts anything.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="mb-12">
          <ContactInfoCards />
        </div>

        {/* Main Content Grid */}
        <div id="contact-form" className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Form Column (2/3) */}
          <div className="lg:col-span-2">
            <ContactFormWizard initialValues={initialValues} />

            {/* Pre-selected Context */}
            {(matchedProduct || matchedIndustry) && (
              <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  {matchedProduct && (
                    <>
                      Inquiring about:{' '}
                      <span className="font-medium text-foreground">
                        {matchedProduct.title}
                      </span>
                    </>
                  )}
                  {matchedProduct && matchedIndustry && ' for '}
                  {matchedIndustry && (
                    <>
                      {!matchedProduct && 'Industry: '}
                      <span className="font-medium text-foreground">
                        {matchedIndustry.name}
                      </span>
                    </>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar (1/3) */}
          <div className="space-y-6">
            <MapSection />
            <TrustSignals />
          </div>
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  );
}
