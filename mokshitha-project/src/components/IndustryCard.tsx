import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  name: string;
  icon: LucideIcon;
}

const IndustryCard = ({ name, icon: Icon }: IndustryCardProps) => {
  return (
    <Card className="hover:shadow-hover hover:border-accent transition-all duration-300 cursor-pointer">
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <h3 className="font-semibold text-sm">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default IndustryCard;

