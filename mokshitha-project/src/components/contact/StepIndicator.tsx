'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description?: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Desktop view */}
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isUpcoming = currentStep < step.number;

          return (
            <div key={step.number} className="flex items-center flex-1 last:flex-none">
              {/* Step circle and content */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    'flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300',
                    isCompleted && 'bg-accent border-accent text-white',
                    isCurrent && 'border-accent bg-accent/10 text-accent',
                    isUpcoming && 'border-muted-foreground/30 text-muted-foreground/50'
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <span className="font-semibold">{step.number}</span>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className={cn(
                      'text-sm font-medium',
                      isCurrent && 'text-accent',
                      isCompleted && 'text-foreground',
                      isUpcoming && 'text-muted-foreground/50'
                    )}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 hidden md:block">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4 mt-[-24px]">
                  <div
                    className={cn(
                      'h-0.5 transition-all duration-300',
                      currentStep > step.number ? 'bg-accent' : 'bg-muted-foreground/20'
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile view - simplified */}
      <div className="flex sm:hidden items-center justify-center gap-2">
        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;

          return (
            <div
              key={step.number}
              className={cn(
                'flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300',
                isCompleted && 'bg-accent border-accent text-white',
                isCurrent && 'border-accent bg-accent/10 text-accent',
                !isCompleted && !isCurrent && 'border-muted-foreground/30 text-muted-foreground/50'
              )}
            >
              {isCompleted ? (
                <Check className="h-4 w-4" />
              ) : (
                <span className="text-sm font-semibold">{step.number}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile step title */}
      <div className="sm:hidden text-center mt-3">
        <p className="text-sm font-medium text-accent">
          Step {currentStep}: {steps.find((s) => s.number === currentStep)?.title}
        </p>
      </div>
    </div>
  );
}

// Default steps for the contact form
export const contactFormSteps: Step[] = [
  {
    number: 1,
    title: 'Your Inquiry',
    description: 'What can we help you with?',
  },
  {
    number: 2,
    title: 'Contact Details',
    description: 'How can we reach you?',
  },
  {
    number: 3,
    title: 'Requirements',
    description: 'Tell us more about your needs',
  },
];
