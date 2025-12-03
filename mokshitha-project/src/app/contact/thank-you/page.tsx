'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ArrowRight,
  Package,
  Phone,
  Clock,
  Mail,
} from 'lucide-react';

interface SubmissionData {
  refNumber: string;
  inquiryType: 'quote' | 'general';
  name: string;
  email: string;
}

export default function ThankYouPage() {
  const [submission, setSubmission] = useState<SubmissionData | null>(null);

  useEffect(() => {
    // Retrieve submission data from sessionStorage
    const data = sessionStorage.getItem('contactSubmission');
    if (data) {
      setSubmission(JSON.parse(data));
      // Clear the data after reading
      sessionStorage.removeItem('contactSubmission');
    }
  }, []);

  const isQuote = submission?.inquiryType === 'quote';

  return (
    <div className="py-20 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="font-heading text-4xl font-bold mb-4">
            Thank You{submission?.name ? `, ${submission.name.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {isQuote
              ? 'Your quote request has been received. Our team will prepare a customized proposal for you.'
              : 'Your message has been received. We appreciate you reaching out to us.'}
          </p>

          {/* Reference Card */}
          {submission?.refNumber && (
            <Card className="mb-8 border-2 border-accent/20 bg-accent/5">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground mb-2">
                  Reference Number
                </p>
                <p className="font-mono text-2xl font-bold text-accent">
                  {submission.refNumber}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Please save this for your records
                </p>
              </CardContent>
            </Card>
          )}

          {/* What's Next */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="p-4 rounded-lg bg-muted/50">
              <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Response Time</p>
              <p className="text-xs text-muted-foreground">
                {isQuote ? 'Within 24-48 hours' : 'Within 24 hours'}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <Mail className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Check Your Email</p>
              <p className="text-xs text-muted-foreground">
                {submission?.email
                  ? `Confirmation sent to ${submission.email}`
                  : 'Confirmation email sent'}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <Phone className="h-6 w-6 text-accent mx-auto mb-2" />
              <p className="font-semibold text-sm">Urgent?</p>
              <p className="text-xs text-muted-foreground">
                Call +91 72880 48689
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/products">
                <Package className="h-4 w-4 mr-2" />
                Browse Products
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                Go to Homepage
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-muted-foreground mt-8">
            Questions? Contact us at{' '}
            <a
              href="mailto:info@mokshithaautomation.com"
              className="text-accent hover:underline"
            >
              info@mokshithaautomation.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
