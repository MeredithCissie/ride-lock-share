import { Shield, Lock, MapPin, Users, Fuel } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CarCardProps {
  image: string;
  model: string;
  brand: string;
  price: string;
  location: string;
  seats: number;
  fuelType: string;
  encrypted: boolean;
}

export const CarCard = ({ 
  image, 
  model, 
  brand, 
  price, 
  location, 
  seats, 
  fuelType,
  encrypted 
}: CarCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover bg-gradient-card border-border/50">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image} 
            alt={`${brand} ${model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Encrypted Badge */}
          {encrypted && (
            <div className="absolute top-4 right-4">
              <Badge className="bg-encrypted/90 backdrop-blur-sm text-primary-foreground border-0 shadow-lg">
                <Lock className="w-3 h-3 mr-1" />
                Encrypted
              </Badge>
            </div>
          )}
          
          {/* Privacy Shield Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-secure/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Protected Information</span>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title and Price */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                {brand} {model}
              </h3>
              <div className="flex items-center gap-1 text-muted-foreground mt-1">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">${price}</p>
              <p className="text-xs text-muted-foreground">per day</p>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex items-center gap-4 pt-2 border-t border-border">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="text-sm">{seats} seats</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Fuel className="w-4 h-4" />
              <span className="text-sm">{fuelType}</span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button 
              className="flex-1 font-semibold transition-all hover:shadow-glow"
            >
              Rent Now
            </Button>
            <Button 
              variant="outline"
              className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold transition-all"
            >
              View Details
            </Button>
          </div>
          
          {/* Encrypted Notice */}
          {encrypted && (
            <div className="flex items-center gap-2 p-3 bg-encrypted-light/20 border border-encrypted-light/30 rounded-lg">
              <Lock className="w-4 h-4 text-encrypted shrink-0" />
              <p className="text-xs text-muted-foreground">
                Driving history and personal data are encrypted and private
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
