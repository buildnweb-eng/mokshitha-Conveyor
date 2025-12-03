'use client';

import { useFormContext } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { products, categoryInfo, type ProductCategory } from '@/data/products';
import { timelineOptions, type ContactFormData } from '@/lib/schemas/contact-form';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function FormStepDetails() {
  const { control, watch } = useFormContext<ContactFormData>();
  const inquiryType = watch('inquiryType');
  const isQuote = inquiryType === 'quote';

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<ProductCategory, typeof products>);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-heading text-lg font-semibold mb-1">
          {isQuote ? 'Quote Details' : 'Your Message'}
        </h3>
        <p className="text-sm text-muted-foreground">
          {isQuote
            ? 'Tell us about the products and timeline for your project'
            : 'Share your questions or requirements with us'}
        </p>
      </div>

      {/* Product Selection - Only for quotes */}
      {isQuote && (
        <FormField
          control={control}
          name="productId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product of Interest</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product (optional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                    <div key={category}>
                      <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted/50">
                        {categoryInfo[category as ProductCategory].title}
                      </div>
                      {categoryProducts.map((product) => (
                        <SelectItem key={product.id} value={product.id}>
                          {product.title}
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Select a specific product or describe your needs in the message
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Timeline - Only for quotes */}
      {isQuote && (
        <FormField
          control={control}
          name="timeline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Timeline</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you need it?" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {timelineOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      {/* Message */}
      <FormField
        control={control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              {isQuote ? 'Additional Requirements *' : 'Your Message *'}
            </FormLabel>
            <FormControl>
              <Textarea
                {...field}
                placeholder={
                  isQuote
                    ? 'Please describe your requirements, specifications, quantity needed, application details, or any questions you have...'
                    : 'How can we help you? Please share your questions or requirements...'
                }
                rows={5}
                className="resize-none"
              />
            </FormControl>
            <FormDescription>
              {isQuote
                ? 'Include details like belt width, length, load capacity, environment conditions, etc.'
                : 'The more details you provide, the better we can assist you'}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Preferred Contact Method */}
      <FormField
        control={control}
        name="preferredContact"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Preferred Contact Method (Optional)</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="pref-phone" />
                  <Label
                    htmlFor="pref-phone"
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <Phone className="h-4 w-4" />
                    Phone Call
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="pref-email" />
                  <Label
                    htmlFor="pref-email"
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    Email
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="whatsapp" id="pref-whatsapp" />
                  <Label
                    htmlFor="pref-whatsapp"
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
