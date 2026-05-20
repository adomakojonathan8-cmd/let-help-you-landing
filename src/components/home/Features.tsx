import React from 'react';
import { Zap, Wallet, ShieldCheck, Headphones } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: 'Instant Delivery',
    description: 'Our system is automated to deliver your data bundles in less than 60 seconds.',
    tag: 'FAST ⚡'
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" />,
    title: 'Cheap Prices',
    description: 'We offer the most competitive rates for all networks in the Ghanaian market.',
    tag: 'SAVE 💰'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: 'Trusted Service',
    description: 'Join over 5,000+ satisfied customers who trust us for their daily data needs.',
    tag: 'SECURE 🔒'
  },
  {
    icon: <Headphones className="w-8 h-8 text-primary" />,
    title: '24/7 Support',
    description: 'Our support team is always available on WhatsApp to assist you with any issues.',
    tag: 'HELP 📱'
  }
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-6xl font-heading mb-8 leading-tight">
              Why Thousands <br />
              <span className="text-primary">Choose DataGhana</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We provide a seamless experience for purchasing data bundles. No more long USSD codes or high prices. Simple, fast, and reliable.
            </p>
            
            <div className="flex items-center gap-8">
              <div className="text-center">
                <h4 className="text-4xl font-black text-white">5k+</h4>
                <p className="text-sm text-muted-foreground font-bold">Users</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <h4 className="text-4xl font-black text-white">100k+</h4>
                <p className="text-sm text-muted-foreground font-bold">Bundles Sold</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <h4 className="text-4xl font-black text-white">4.9</h4>
                <p className="text-sm text-muted-foreground font-bold">Rating</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
                <div className="bg-background w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 shadow-inner">
                  {feature.icon}
                </div>
                <div className="inline-block text-[10px] font-black tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-md mb-3">
                  {feature.tag}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;