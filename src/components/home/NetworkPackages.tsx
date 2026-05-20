import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, ArrowRight, CheckCircle2, Smartphone } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const NETWORKS = [
  {
    id: 'mtn',
    name: 'MTN',
    color: 'bg-yellow-400',
    textColor: 'text-black',
    bundles: [
      { size: '1GB', price: 5, speed: 'Instant' },
      { size: '5GB', price: 22, speed: 'Instant' },
      { size: '10GB', price: 40, speed: 'Instant' },
      { size: '20GB', price: 75, speed: 'Instant' },
    ]
  },
  {
    id: 'telecel',
    name: 'Telecel',
    color: 'bg-red-600',
    textColor: 'text-white',
    bundles: [
      { size: '1GB', price: 4.5, speed: 'Instant' },
      { size: '5GB', price: 20, speed: 'Instant' },
      { size: '10GB', price: 38, speed: 'Instant' },
      { size: '20GB', price: 70, speed: 'Instant' },
    ]
  },
  {
    id: 'airteltigo',
    name: 'AirtelTigo',
    color: 'bg-blue-600',
    textColor: 'text-white',
    bundles: [
      { size: '1GB', price: 4, speed: 'Instant' },
      { size: '5GB', price: 18, speed: 'Instant' },
      { size: '10GB', price: 35, speed: 'Instant' },
      { size: '20GB', price: 65, speed: 'Instant' },
    ]
  }
];

const NetworkPackages = () => {
  const [activeNetwork, setActiveNetwork] = useState('mtn');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [recipientNumber, setRecipientNumber] = useState('');
  const [selectedBundle, setSelectedBundle] = useState<{size: string, price: number, network: string} | null>(null);

  const WHATSAPP_NUMBER = "0597222464";

  const handleBuyInitiate = (size: string, price: number, network: string) => {
    setSelectedBundle({ size, price, network });
    setIsDialogOpen(true);
  };

  const handleConfirmPurchase = () => {
    if (!recipientNumber || recipientNumber.length < 10) {
      toast.error("Please enter a valid recipient phone number.");
      return;
    }

    const message = `Hello, I want to buy a ${selectedBundle?.size} ${selectedBundle?.network} data bundle for ${recipientNumber}. Amount: GHS ${selectedBundle?.price}. Please provide payment details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/233${WHATSAPP_NUMBER.substring(1)}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsDialogOpen(false);
    setRecipientNumber('');
    toast.success("Redirecting to WhatsApp to complete your purchase...");
  };

  return (
    <section id="packages" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading mb-4">Choose Your <span className="text-primary">Package</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select your preferred network and find the bundle that fits your needs and budget perfectly.
          </p>
        </div>

        {/* Network Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {NETWORKS.map((network) => (
            <button
              key={network.id}
              onClick={() => setActiveNetwork(network.id)}
              className={`flex items-center gap-3 px-8 py-3 rounded-2xl font-bold transition-all ${
                activeNetwork === network.id 
                ? `${network.color} ${network.textColor} scale-105 shadow-xl` 
                : 'bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              <div className={`w-3 h-3 rounded-full ${activeNetwork === network.id ? 'bg-white animate-pulse' : 'bg-current opacity-30'}`} />
              {network.name}
            </button>
          ))}
        </div>

        {/* Bundles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NETWORKS.find(n => n.id === activeNetwork)?.bundles.map((bundle, idx) => (
            <motion.div
              layout
              key={`${activeNetwork}-${bundle.size}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-white/5 rounded-3xl p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-2xl">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <Zap className="w-3 h-3" />
                  {bundle.speed}
                </div>
              </div>

              <h3 className="text-3xl font-heading font-black mb-1">{bundle.size}</h3>
              <p className="text-muted-foreground text-sm mb-6 uppercase tracking-widest font-bold">Data Bundle</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-bold text-muted-foreground">GHS</span>
                <span className="text-4xl font-black text-white">{bundle.price}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {['No Expiry', 'Fast Delivery', 'Trusted Service'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleBuyInitiate(bundle.size, bundle.price, activeNetwork.toUpperCase())}
                className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl font-bold hover:bg-primary hover:text-background hover:border-primary transition-all flex items-center justify-center gap-2 group-hover:cyan-glow"
              >
                Buy Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Buy Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card border-white/10 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold text-primary">Purchase Details</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              You are buying <span className="text-white font-bold">{selectedBundle?.size} {selectedBundle?.network}</span> for <span className="text-white font-bold">GHS {selectedBundle?.price}</span>.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="number" className="text-sm font-medium">Recipient Phone Number</Label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="number"
                  placeholder="e.g. 0597222464"
                  value={recipientNumber}
                  onChange={(e) => setRecipientNumber(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 focus:border-primary text-white h-12 rounded-xl"
                  type="tel"
                />
              </div>
              <p className="text-[10px] text-muted-foreground italic">
                * Please ensure the number is correct. Payments are non-refundable.
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button 
              onClick={handleConfirmPurchase}
              className="w-full h-12 bg-primary text-background font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform cyan-glow"
            >
              Confirm Purchase
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NetworkPackages;