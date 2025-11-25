'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  const [activeTab, setActiveTab] = useState('components');

  const conveyorComponents = [
    {
      title: 'Conveyor Rollers Frame Set',
      description: 'Complete roller frame assemblies for smooth material handling',
      features: ['Heavy-duty construction', 'Precision bearings', 'Customizable lengths'],
    },
    {
      title: 'Rubber Conveyor Belt',
      description: 'Durable rubber belts for heavy-duty applications',
      features: ['High tensile strength', 'Heat resistant', 'Oil resistant options'],
    },
    {
      title: 'Cotton Conveyor Belt',
      description: 'Natural fiber belts for food-grade applications',
      features: ['Food-safe materials', 'Flexible design', 'Cost-effective'],
    },
    {
      title: 'PVC Conveyor Belt',
      description: 'Versatile PVC belts for various industries',
      features: ['Chemical resistant', 'Easy to clean', 'Multiple grades available'],
    },
    {
      title: 'Stainless Steel Slat Chain',
      description: 'Corrosion-resistant chains for harsh environments',
      features: ['Food-grade SS 304/316', 'High load capacity', 'Temperature resistant'],
    },
    {
      title: 'Conveyor Rollers',
      description: 'Individual rollers for belt support and drive systems',
      features: ['Multiple diameters', 'Sealed bearings', 'Low maintenance'],
    },
  ];

  const conveyorSystems = [
    {
      title: 'Belt Conveyor',
      description: 'Standard belt conveyor systems for material transport',
      features: ['Modular design', 'Variable speed options', 'Easy installation'],
    },
    {
      title: 'Inspection Conveyor',
      description: 'Specialized conveyors for quality control processes',
      features: ['Adjustable speed', 'Good lighting compatibility', 'Ergonomic design'],
    },
    {
      title: 'High-Angle Conveyor',
      description: 'Steep incline conveyors with cleated belts',
      features: ['Space-saving design', 'Angles up to 90°', 'Anti-slip surface'],
    },
    {
      title: 'Incline Conveyor',
      description: 'Standard incline systems for elevation',
      features: ['Smooth material flow', 'Customizable angles', 'Robust construction'],
    },
    {
      title: 'Metal Detector Conveyor',
      description: 'Integrated metal detection for food safety',
      features: ['High sensitivity', 'Reject mechanism', 'Compliance certified'],
    },
    {
      title: 'Bottle Conveyor',
      description: 'Specialized systems for bottle handling',
      features: ['Gentle handling', 'Accumulation zones', 'High-speed operation'],
    },
  ];

  const specializedBelts = [
    {
      title: 'Side Wall Rubber Belts',
      description: 'Vertical or steep angle material handling',
      features: ['High capacity', 'Prevents spillage', 'Customizable heights'],
    },
    {
      title: 'PVC Rough Top Belts',
      description: 'Enhanced grip for incline applications',
      features: ['Non-slip surface', 'Durable PVC', 'Multiple patterns'],
    },
    {
      title: 'Imported PVC Belts',
      description: 'Premium imported belts for critical applications',
      features: ['FDA approved', 'Superior quality', 'Long service life'],
    },
    {
      title: 'Imported Timing Belts',
      description: 'Precision timing belts for synchronized systems',
      features: ['High accuracy', 'Low noise', 'Minimal maintenance'],
    },
    {
      title: 'Nylon Sandwich Belts',
      description: 'Multi-layer belts for heavy loads',
      features: ['Reinforced structure', 'High strength', 'Tear resistant'],
    },
    {
      title: 'PTFE (Teflon) Coated Belts',
      description: 'Non-stick belts for food and packaging',
      features: ['Temperature resistant', 'Easy release', 'Chemical resistant'],
    },
  ];

  const industrialSystems = [
    {
      title: 'SS Wire Mesh Conveyors',
      description: 'Stainless steel mesh for washing and drying',
      features: ['Corrosion proof', 'Easy cleaning', 'Open structure'],
    },
    {
      title: 'Drum Conveyors',
      description: 'Roller drum systems for accumulation',
      features: ['Zero pressure zones', 'Smooth operation', 'Low noise'],
    },
    {
      title: 'Cleated Conveyors',
      description: 'Belts with cleats for incline transport',
      features: ['Prevents rollback', 'Various cleat patterns', 'Strong attachment'],
    },
    {
      title: 'Z-Type Elevators',
      description: 'Compact vertical elevation systems',
      features: ['Space efficient', 'Gentle handling', 'High throughput'],
    },
    {
      title: 'Slat Chain Conveyor',
      description: 'Heavy-duty chain conveyors for harsh conditions',
      features: ['Extreme durability', 'High temperature rated', 'Heavy loads'],
    },
    {
      title: 'Powered Roller Conveyors',
      description: 'Motorized roller systems for automated handling',
      features: ['Energy efficient', 'Precise control', 'Modular zones'],
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of conveyor solutions for every industrial application
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
            <TabsTrigger value="components" className="text-sm py-3">
              Conveyor Components
            </TabsTrigger>
            <TabsTrigger value="systems" className="text-sm py-3">
              Conveyor Systems
            </TabsTrigger>
            <TabsTrigger value="specialized" className="text-sm py-3">
              Specialized Belts
            </TabsTrigger>
            <TabsTrigger value="industrial" className="text-sm py-3">
              Industrial Systems
            </TabsTrigger>
          </TabsList>

          <TabsContent value="components">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conveyorComponents.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  category="Components"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="systems">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conveyorSystems.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  category="Systems"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="specialized">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedBelts.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  category="Specialized"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="industrial">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industrialSystems.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  features={product.features}
                  category="Industrial"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

