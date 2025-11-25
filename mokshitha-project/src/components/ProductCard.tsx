import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  title: string;
  description: string;
  features?: string[];
  category?: string;
}

const ProductCard = ({ title, description, features, category }: ProductCardProps) => {
  return (
    <Card className="hover:shadow-hover transition-all duration-300 h-full">
      <CardHeader>
        {category && (
          <Badge variant="secondary" className="w-fit mb-2">
            {category}
          </Badge>
        )}
        <CardTitle className="font-heading text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {features && features.length > 0 && (
        <CardContent>
          <ul className="space-y-1 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
};

export default ProductCard;

