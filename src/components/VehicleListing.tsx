import { CarCard } from './CarCard';
import car1 from '@/assets/car1.jpg';
import car2 from '@/assets/car2.jpg';
import car3 from '@/assets/car3.jpg';
import car4 from '@/assets/car4.jpg';

const vehicles = [
  {
    id: 1,
    image: car1,
    brand: 'Tesla',
    model: 'Model 3',
    price: '89',
    location: 'San Francisco, CA',
    seats: 5,
    fuelType: 'Electric',
    encrypted: true,
  },
  {
    id: 2,
    image: car2,
    brand: 'BMW',
    model: '5 Series',
    price: '129',
    location: 'Los Angeles, CA',
    seats: 5,
    fuelType: 'Hybrid',
    encrypted: true,
  },
  {
    id: 3,
    image: car3,
    brand: 'Mercedes',
    model: 'GLE SUV',
    price: '149',
    location: 'New York, NY',
    seats: 7,
    fuelType: 'Diesel',
    encrypted: true,
  },
  {
    id: 4,
    image: car4,
    brand: 'Audi',
    model: 'A6',
    price: '119',
    location: 'Miami, FL',
    seats: 5,
    fuelType: 'Gasoline',
    encrypted: true,
  },
];

export const VehicleListing = () => {
  return (
    <section id="vehicles" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Available Vehicles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All vehicles come with encrypted protection. Your privacy is guaranteed with every rental.
          </p>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <CarCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};
