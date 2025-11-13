import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Shield } from 'lucide-react';
import logo from '@/assets/logo.png';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Encrypted Car Sharing" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
                Encrypted Car Sharing
              </h1>
              <p className="hidden sm:block text-xs text-muted-foreground">Share Cars, Protect Privacy</p>
            </div>
          </div>
          
          <ConnectButton 
            chainStatus="icon"
            showBalance={false}
          />
        </div>
      </div>
    </header>
  );
};
