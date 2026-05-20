import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingCart, Zap, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Fastest Delivery in Ghana 🇬🇭</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-black leading-tight mb-6">
              Fast & Affordable <br />
              <span className="text-primary">Data Bundles</span> <br />
              in Ghana
            </h1>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Stop overpaying for data. Get instant MTN, Telecel, and AirtelTigo bundles at prices that make sense. Powered by MoMo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-primary text-background px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform cyan-glow group">
                <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                Buy Bundle
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
                Chat on WhatsApp
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-bold text-white">5,000+ Happy Users</p>
                <div className="flex items-center gap-1 text-yellow-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs text-muted-foreground">Trusted Service</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 animate-float">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b6c4a332-684e-4e0d-aabe-65889993f5a6/hero-smartphone-mockup-ac0ce59b-1779306410229.webp" 
                alt="Smartphone Mockup"
                className="w-full max-w-md mx-auto drop-shadow-[0_0_50px_rgba(0,255,255,0.3)]"
              />
            </div>
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-1/4 -left-10 bg-card p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center font-black text-black">MTN</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              className="absolute bottom-1/4 -right-10 bg-card p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-xs">Telecel</div>
            </motion.div>
            <motion.div 
              animate={{ x: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
              className="absolute -top-10 right-20 bg-card p-4 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-[10px]">AirtelTigo</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;