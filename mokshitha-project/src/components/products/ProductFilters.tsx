'use client';

import { X, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { industriesList, materials, applications, categories } from '@/data/industries';
import type { ProductCategory, Industry, Material, Application } from '@/data/products';

export interface FilterState {
  categories: ProductCategory[];
  industries: Industry[];
  materials: Material[];
  applications: Application[];
}

interface ProductFiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
  totalCount: number;
}

export default function ProductFilters({
  filters,
  onFilterChange,
  productCount,
  totalCount,
}: ProductFiltersProps) {
  const activeFilterCount =
    filters.categories.length +
    filters.industries.length +
    filters.materials.length +
    filters.applications.length;

  const handleCategoryToggle = (category: ProductCategory) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    onFilterChange({ ...filters, categories: newCategories });
  };

  const handleIndustryToggle = (industry: Industry) => {
    const newIndustries = filters.industries.includes(industry)
      ? filters.industries.filter((i) => i !== industry)
      : [...filters.industries, industry];
    onFilterChange({ ...filters, industries: newIndustries });
  };

  const handleMaterialToggle = (material: Material) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter((m) => m !== material)
      : [...filters.materials, material];
    onFilterChange({ ...filters, materials: newMaterials });
  };

  const handleApplicationToggle = (application: Application) => {
    const newApplications = filters.applications.includes(application)
      ? filters.applications.filter((a) => a !== application)
      : [...filters.applications, application];
    onFilterChange({ ...filters, applications: newApplications });
  };

  const clearAllFilters = () => {
    onFilterChange({
      categories: [],
      industries: [],
      materials: [],
      applications: [],
    });
  };

  const FilterContent = () => (
    <div className="space-y-4">
      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Active Filters</span>
            <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-auto p-1 text-xs">
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-1">
            {filters.categories.map((cat) => (
              <Badge key={cat} variant="secondary" className="gap-1">
                {categories.find((c) => c.id === cat)?.name}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleCategoryToggle(cat)}
                />
              </Badge>
            ))}
            {filters.industries.map((ind) => (
              <Badge key={ind} variant="secondary" className="gap-1">
                {industriesList.find((i) => i.id === ind)?.shortName}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleIndustryToggle(ind)}
                />
              </Badge>
            ))}
            {filters.materials.map((mat) => (
              <Badge key={mat} variant="secondary" className="gap-1">
                {materials.find((m) => m.id === mat)?.name}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleMaterialToggle(mat)}
                />
              </Badge>
            ))}
            {filters.applications.map((app) => (
              <Badge key={app} variant="secondary" className="gap-1">
                {applications.find((a) => a.id === app)?.name}
                <X
                  className="w-3 h-3 cursor-pointer"
                  onClick={() => handleApplicationToggle(app)}
                />
              </Badge>
            ))}
          </div>
          <Separator />
        </div>
      )}

      <Accordion type="multiple" defaultValue={['categories', 'industries']} className="w-full">
        {/* Category Filter */}
        <AccordionItem value="categories">
          <AccordionTrigger className="text-sm font-medium">
            Category
            {filters.categories.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.categories.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={filters.categories.includes(category.id as ProductCategory)}
                    onCheckedChange={() => handleCategoryToggle(category.id as ProductCategory)}
                  />
                  <div className="grid gap-0.5 leading-none">
                    <Label
                      htmlFor={`category-${category.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category.name}
                    </Label>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Industry Filter */}
        <AccordionItem value="industries">
          <AccordionTrigger className="text-sm font-medium">
            Industry
            {filters.industries.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.industries.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {industriesList.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.id} className="flex items-center space-x-3">
                    <Checkbox
                      id={`industry-${industry.id}`}
                      checked={filters.industries.includes(industry.id)}
                      onCheckedChange={() => handleIndustryToggle(industry.id)}
                    />
                    <div className={cn('w-6 h-6 rounded-full flex items-center justify-center', industry.bgColor)}>
                      <Icon className={cn('w-3 h-3', industry.color)} />
                    </div>
                    <Label
                      htmlFor={`industry-${industry.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {industry.name}
                    </Label>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Material Filter */}
        <AccordionItem value="materials">
          <AccordionTrigger className="text-sm font-medium">
            Material
            {filters.materials.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.materials.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {materials.map((material) => (
                <div key={material.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={`material-${material.id}`}
                    checked={filters.materials.includes(material.id as Material)}
                    onCheckedChange={() => handleMaterialToggle(material.id as Material)}
                  />
                  <div className="grid gap-0.5 leading-none">
                    <Label
                      htmlFor={`material-${material.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {material.name}
                    </Label>
                    <p className="text-xs text-muted-foreground">{material.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Application Filter */}
        <AccordionItem value="applications">
          <AccordionTrigger className="text-sm font-medium">
            Application
            {filters.applications.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {filters.applications.length}
              </Badge>
            )}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {applications.map((application) => (
                <div key={application.id} className="flex items-start space-x-3">
                  <Checkbox
                    id={`application-${application.id}`}
                    checked={filters.applications.includes(application.id as Application)}
                    onCheckedChange={() => handleApplicationToggle(application.id as Application)}
                  />
                  <div className="grid gap-0.5 leading-none">
                    <Label
                      htmlFor={`application-${application.id}`}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {application.name}
                    </Label>
                    <p className="text-xs text-muted-foreground">{application.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-semibold">Filters</h3>
            <span className="text-sm text-muted-foreground">
              {productCount} of {totalCount} products
            </span>
          </div>
          <ScrollArea className="h-[calc(100vh-200px)]">
            <FilterContent />
          </ScrollArea>
        </div>
      </aside>

      {/* Mobile Filter Sheet */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-1">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full sm:w-80">
            <SheetHeader>
              <SheetTitle className="flex items-center justify-between">
                <span>Filters</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {productCount} of {totalCount}
                </span>
              </SheetTitle>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-100px)] mt-4">
              <FilterContent />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
