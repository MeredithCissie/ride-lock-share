import { useState } from 'react';
import { Calendar, Clock, Wallet, Shield } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { toast } from 'sonner';

interface RentalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  carBrand: string;
  carModel: string;
  pricePerDay: string;
  encrypted: boolean;
}

export const RentalDialog = ({
  open,
  onOpenChange,
  carBrand,
  carModel,
  pricePerDay,
  encrypted,
}: RentalDialogProps) => {
  const { isConnected } = useAccount();
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [step, setStep] = useState<'dates' | 'confirm'>('dates');

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const diff = endDate.getTime() - startDate.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
  };

  const totalPrice = calculateDays() * parseFloat(pricePerDay);

  const handleContinue = () => {
    if (!startDate || !endDate) {
      toast.error('Please select both start and end dates');
      return;
    }
    if (endDate < startDate) {
      toast.error('End date must be after start date');
      return;
    }
    setStep('confirm');
  };

  const handleConfirmRental = () => {
    toast.success(`Rental confirmed for ${carBrand} ${carModel}! You will receive encrypted confirmation details.`);
    onOpenChange(false);
    // Reset state
    setTimeout(() => {
      setStep('dates');
      setStartDate(new Date());
      setEndDate(undefined);
    }, 300);
  };

  const handleBack = () => {
    setStep('dates');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {step === 'dates' ? 'Select Rental Dates' : 'Confirm Your Rental'}
          </DialogTitle>
          <DialogDescription>
            {step === 'dates' 
              ? `Book your ${carBrand} ${carModel} with encrypted protection`
              : 'Review and confirm your rental details'}
          </DialogDescription>
        </DialogHeader>

        {!isConnected ? (
          <div className="py-8 space-y-4">
            <div className="flex flex-col items-center gap-4 p-6 bg-muted/50 rounded-lg border border-border">
              <Wallet className="w-12 h-12 text-muted-foreground" />
              <p className="text-center text-muted-foreground">
                Please connect your wallet to continue with the rental
              </p>
              <ConnectButton />
            </div>
          </div>
        ) : (
          <>
            {step === 'dates' && (
              <div className="space-y-6 py-4">
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Start Date
                  </Label>
                  <CalendarComponent
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    End Date
                  </Label>
                  <CalendarComponent
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) => !startDate || date < startDate}
                    className="rounded-md border"
                  />
                </div>

                {encrypted && (
                  <div className="flex items-center gap-2 p-3 bg-encrypted-light/20 border border-encrypted-light/30 rounded-lg">
                    <Shield className="w-4 h-4 text-encrypted shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      All rental information will be encrypted and protected
                    </p>
                  </div>
                )}
              </div>
            )}

            {step === 'confirm' && (
              <div className="space-y-6 py-4">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Vehicle</span>
                    <span className="font-semibold">{carBrand} {carModel}</span>
                  </div>
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Start Date</span>
                    <span className="font-medium">{startDate?.toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">End Date</span>
                    <span className="font-medium">{endDate?.toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Duration
                    </span>
                    <span className="font-medium">{calculateDays()} days</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Price per day</span>
                    <span className="font-medium">${pricePerDay}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold">Total Price</span>
                    <span className="font-bold text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                {encrypted && (
                  <div className="flex items-start gap-3 p-4 bg-encrypted-light/20 border border-encrypted-light/30 rounded-lg">
                    <Shield className="w-5 h-5 text-encrypted shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Encrypted Protection Active</p>
                      <p className="text-xs text-muted-foreground">
                        Your rental agreement, driving records, and personal information will be encrypted and stored securely on the blockchain
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {isConnected && (
          <DialogFooter className="gap-2">
            {step === 'confirm' && (
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
            )}
            <Button
              onClick={step === 'dates' ? handleContinue : handleConfirmRental}
              disabled={!startDate || !endDate}
              className="flex-1 sm:flex-none"
            >
              {step === 'dates' ? 'Continue' : 'Confirm Rental'}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
