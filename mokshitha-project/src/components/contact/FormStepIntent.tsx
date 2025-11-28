'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { FileText, MessageSquare } from 'lucide-react';
import { industriesData, industryCategories, type IndustryCategory } from '@/data/industries-details';
import type { ContactFormData } from '@/lib/schemas/contact-form';
import { cn } from '@/lib/utils';

export function FormStepIntent() {
  const { control } = useFormContext<ContactFormData>();

  // Group industries by category
  const groupedIndustries = industriesData.reduce((acc, industry) => {
    const category = industry.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(industry);
    return acc;
  }, {} as Record<IndustryCategory, typeof industriesData>);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">What can we help you with?</h3>
        <p className="text-sm text-muted-foreground">
          Select the type of inquiry to help us serve you better
        </p>
      </div>

      {/* Inquiry Type Selection */}
      <FormField
        control={control}
        name="inquiryType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="sr-only">Inquiry Type</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Quote Request Option */}
                <Label
                  htmlFor="quote"
                  className={cn(
                    'flex items-start gap-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-accent/50',
                    field.value === 'quote'
                      ? 'border-accent bg-accent/5'
                      : 'border-border'
                  )}
                >
                  <RadioGroupItem value="quote" id="quote" className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="h-5 w-5 text-accent" />
                      <span className="font-semibold">Request Quote</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Get pricing for conveyor systems, belts, or components
                    </p>
                  </div>
                </Label>

                {/* General Inquiry Option */}
                <Label
                  htmlFor="general"
                  className={cn(
                    'flex items-start gap-4 rounded-lg border-2 p-4 cursor-pointer transition-all hover:border-accent/50',
                    field.value === 'general'
                      ? 'border-accent bg-accent/5'
                      : 'border-border'
                  )}
                >
                  <RadioGroupItem value="general" id="general" className="mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <MessageSquare className="h-5 w-5 text-accent" />
                      <span className="font-semibold">General Inquiry</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Questions, partnership, or other inquiries
                    </p>
                  </div>
                </Label>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Industry Selection */}
      <FormField
        control={control}
        name="industryId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your Industry (Optional)</FormLabel>
            <Select onValueChange={field.onChange} value={field.value || ''}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.entries(groupedIndustries).map(([category, industries]) => (
                  <div key={category}>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">
                      {industryCategories[category as IndustryCategory].name}
                    </div>
                    {industries.map((industry) => (
                      <SelectItem key={industry.id} value={industry.id}>
                        {industry.name}
                      </SelectItem>
                    ))}
                  </div>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
