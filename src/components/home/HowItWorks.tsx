import React from 'react';
import { Smartphone, CreditCard, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    icon: <Smartphone className="w-10 h-10 text-primary" />,
    title: 'Choose Bundle',
    description: 'Pick your network and the data amount you need.'
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: 'Pay via MoMo',
    description: 'Enter your number and approve the prompt on your phone.'
  },
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: 'Receive Instantly',
    description: 'Your data is delivered within seconds of payment.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">How It <span className="text-primary">Works</span></h2>
            <p className="text-muted-foreground">Three simple steps to get your data bundle.</p>
          </div>

          <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 -z-10" />

            <div className="grid md:grid-cols-3 gap-12">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-card border-2 border-primary/20 rounded-full flex items-center justify-center relative z-10 shadow-2xl">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-background rounded-full flex items-center justify-center font-black text-xl border-4 border-background">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;