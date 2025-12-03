'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StepIndicator, contactFormSteps } from './StepIndicator';
import { FormStepIntent } from './FormStepIntent';
import { FormStepContact } from './FormStepContact';
import { FormStepDetails } from './FormStepDetails';
import {
  contactFormSchema,
  defaultFormValues,
  getStepSchema,
  type ContactFormData,
} from '@/lib/schemas/contact-form';
import { ArrowLeft, ArrowRight, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormWizardProps {
  initialValues?: Partial<ContactFormData>;
}

export function ContactFormWizard({ initialValues }: ContactFormWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const methods = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      ...defaultFormValues,
      ...initialValues,
    },
    mode: 'onChange',
  });

  const { handleSubmit, trigger, formState } = methods;

  const validateCurrentStep = async () => {
    const stepSchema = getStepSchema(currentStep);
    const fieldsToValidate = Object.keys(stepSchema.shape) as (keyof ContactFormData)[];
    const isValid = await trigger(fieldsToValidate);
    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();
    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate a reference number
      const refNumber = `MIA-${Date.now().toString(36).toUpperCase()}`;

      // Store submission data in sessionStorage for thank-you page
      sessionStorage.setItem(
        'contactSubmission',
        JSON.stringify({
          refNumber,
          inquiryType: data.inquiryType,
          name: data.name,
          email: data.email,
        })
      );

      // Redirect to thank you page
      router.push('/contact/thank-you');
    } catch (error) {
      toast({
        title: 'Submission Failed',
        description: 'Something went wrong. Please try again or contact us directly.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <FormStepIntent />;
      case 2:
        return <FormStepContact />;
      case 3:
        return <FormStepDetails />;
      default:
        return null;
    }
  };

  return (
    <Card className="border-2">
      <CardContent className="pt-6">
        {/* Step Indicator */}
        <StepIndicator
          steps={contactFormSteps}
          currentStep={currentStep}
          className="mb-8"
        />

        {/* Form */}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step Content */}
            <div className="min-h-[300px]">{renderStepContent()}</div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {/* Back Button */}
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
                className={currentStep === 1 ? 'invisible' : ''}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>

              {/* Next/Submit Button */}
              {currentStep < 3 ? (
                <Button type="button" onClick={handleNext} className="bg-accent hover:bg-accent/90">
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting || !formState.isValid}
                  className="bg-accent hover:bg-accent/90"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Request
                    </>
                  )}
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}
