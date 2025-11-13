import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { VehicleListing } from '@/components/VehicleListing';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20">
        <Hero />
        <VehicleListing />
      </main>
    </div>
  );
};

export default Index;
