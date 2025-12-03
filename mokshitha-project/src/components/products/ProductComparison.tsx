'use client';

import { X, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';
import { industries } from '@/data/industries';

interface ProductComparisonProps {
  products: Product[];
  onRemove: (productId: string) => void;
  onClearAll: () => void;
}

export default function ProductComparison({
  products,
  onRemove,
  onClearAll,
}: ProductComparisonProps) {
  if (products.length === 0) return null;

  const comparisonRows = [
    { key: 'category', label: 'Category', getValue: (p: Product) => p.categoryLabel },
    { key: 'loadCapacity', label: 'Load Capacity', getValue: (p: Product) => p.specs.loadCapacity || '-' },
    { key: 'beltWidth', label: 'Belt Width', getValue: (p: Product) => p.specs.beltWidth || '-' },
    { key: 'temperature', label: 'Temperature Range', getValue: (p: Product) => p.specs.temperature || '-' },
    { key: 'material', label: 'Material', getValue: (p: Product) => p.specs.material || '-' },
    { key: 'speed', label: 'Speed', getValue: (p: Product) => p.specs.speed || '-' },
    {
      key: 'certifications',
      label: 'Certifications',
      getValue: (p: Product) => p.specs.certifications?.join(', ') || '-',
    },
    {
      key: 'industries',
      label: 'Industries',
      getValue: (p: Product) =>
        p.industries.map((i) => industries[i as keyof typeof industries]?.shortName || i).join(', '),
    },
  ];

  return (
    <>
      {/* Floating Comparison Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-background border rounded-lg shadow-lg p-4 flex items-center gap-4 max-w-3xl w-[calc(100%-2rem)]">
        <div className="flex items-center gap-2">
          <GitCompare className="w-5 h-5 text-accent" />
          <span className="font-medium">
            Compare ({products.length}/4)
          </span>
        </div>

        {/* Product Pills */}
        <div className="flex-1 flex items-center gap-2 overflow-x-auto">
          {products.map((product) => (
            <Badge
              key={product.id}
              variant="secondary"
              className="shrink-0 gap-1 pr-1"
            >
              <span className="max-w-[100px] truncate">{product.title}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => onRemove(product.id)}
              >
                <X className="w-3 h-3" />
              </Button>
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm" onClick={onClearAll}>
            Clear
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" disabled={products.length < 2}>
                Compare
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh]">
              <DialogHeader>
                <DialogTitle>Product Comparison</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh]">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-40 sticky left-0 bg-background">Specification</TableHead>
                      {products.map((product) => (
                        <TableHead key={product.id} className="min-w-[180px]">
                          <div className="flex flex-col gap-1">
                            <span className="font-medium">{product.title}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs w-fit"
                              onClick={() => onRemove(product.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonRows.map((row) => (
                      <TableRow key={row.key}>
                        <TableCell className="font-medium sticky left-0 bg-background">
                          {row.label}
                        </TableCell>
                        {products.map((product) => (
                          <TableCell key={product.id}>
                            {row.getValue(product)}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell className="font-medium sticky left-0 bg-background">
                        Features
                      </TableCell>
                      {products.map((product) => (
                        <TableCell key={product.id}>
                          <ul className="list-disc list-inside text-sm">
                            {product.features.map((feature, idx) => (
                              <li key={idx}>{feature}</li>
                            ))}
                          </ul>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
