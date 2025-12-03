// Contact Form Validation Schema
// Using Zod for type-safe form validation with React Hook Form

import { z } from 'zod';

// Inquiry types supported by the form
export const inquiryTypes = ['quote', 'general'] as const;
export type InquiryType = (typeof inquiryTypes)[number];

// Timeline options for quote requests
export const timelineOptions = [
  { value: 'immediate', label: 'Immediate (1-2 weeks)' },
  { value: 'short-term', label: 'Short-term (1-3 months)' },
  { value: 'long-term', label: 'Long-term planning (3+ months)' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

// Preferred contact method options
export const contactMethods = ['phone', 'email', 'whatsapp'] as const;
export type ContactMethod = (typeof contactMethods)[number];

// Base schema for common fields
const baseContactSchema = z.object({
  // Step 1: Intent
  inquiryType: z.enum(inquiryTypes, {
    required_error: 'Please select an inquiry type',
  }),
  industryId: z.string().optional(),

  // Step 2: Contact Details
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z.string().optional(),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[+]?[\d\s-()]{10,}$/, 'Please enter a valid phone number'),

  // Step 3: Requirements
  productId: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters describing your requirements')
    .max(2000, 'Message must be less than 2000 characters'),
  preferredContact: z.enum(contactMethods).optional(),
});

// Full form schema with refinements
export const contactFormSchema = baseContactSchema.refine(
  (data) => {
    // For quote requests, product selection is recommended but not required
    return true;
  },
  {
    message: 'Please select a product for quote requests',
    path: ['productId'],
  }
);

// Type inference for form data
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Step-specific schemas for validation per step
export const step1Schema = z.object({
  inquiryType: z.enum(inquiryTypes, {
    required_error: 'Please select an inquiry type',
  }),
  industryId: z.string().optional(),
});

export const step2Schema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  company: z.string().optional(),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[+]?[\d\s-()]{10,}$/, 'Please enter a valid phone number'),
});

export const step3Schema = z.object({
  productId: z.string().optional(),
  timeline: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please provide at least 10 characters describing your requirements')
    .max(2000, 'Message must be less than 2000 characters'),
  preferredContact: z.enum(contactMethods).optional(),
});

// Helper to get step schema
export const getStepSchema = (step: number) => {
  switch (step) {
    case 1:
      return step1Schema;
    case 2:
      return step2Schema;
    case 3:
      return step3Schema;
    default:
      return step1Schema;
  }
};

// Default form values
export const defaultFormValues: Partial<ContactFormData> = {
  inquiryType: 'quote',
  industryId: '',
  name: '',
  company: '',
  email: '',
  phone: '',
  productId: '',
  timeline: '',
  message: '',
  preferredContact: undefined,
};
