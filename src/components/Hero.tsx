import { Shield, Lock, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Encrypted Car Sharing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secure/95 via-secure/85 to-secure/95" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-encrypted-light/20 backdrop-blur-sm border border-encrypted-light/30 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-encrypted-light" />
            <span className="text-sm font-medium text-primary-foreground">End-to-End Encrypted Platform</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Share Cars,
            <br />
            <span className="bg-gradient-to-r from-encrypted-light to-accent bg-clip-text text-transparent">
              Protect Privacy
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Experience the future of car sharing with military-grade encryption. 
            Your driving records and personal information stay completely private.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20">
              <div className="p-3 bg-encrypted rounded-lg">
                <Lock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Encrypted Records</h3>
              <p className="text-sm text-primary-foreground/80 text-center">All driving data is encrypted end-to-end</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20">
              <div className="p-3 bg-encrypted rounded-lg">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Privacy First</h3>
              <p className="text-sm text-primary-foreground/80 text-center">Your personal information is never exposed</p>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20">
              <div className="p-3 bg-encrypted rounded-lg">
                <Key className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary-foreground">Wallet Secured</h3>
              <p className="text-sm text-primary-foreground/80 text-center">Blockchain authentication for maximum security</p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button 
              size="lg"
              variant="accent"
              className="px-8 py-6 text-lg"
              onClick={() => document.getElementById('vehicles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Vehicles
            </Button>
            <Button 
              size="lg"
              variant="hero"
              className="px-8 py-6 text-lg"
              onClick={() => toast.info('Learn more about our end-to-end encrypted car sharing platform and how we protect your privacy.')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
