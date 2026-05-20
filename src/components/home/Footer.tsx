import React from 'react';
import { Smartphone, Send, Phone, MessageSquare, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const WHATSAPP_NUMBER = "0597222464";
  const WHATSAPP_URL = `https://wa.me/233${WHATSAPP_NUMBER.substring(1)}`;

  return (
    <footer className="bg-card pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Smartphone className="w-6 h-6 text-background" />
              </div>
              <span className="text-xl font-heading font-bold text-white">
                DataGhana
              </span>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ghana's number one platform for cheap and instant data bundles. Empowering you to stay connected for less.
            </p>
            <div className="flex gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <Send className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#packages" className="hover:text-primary transition-colors">Buy Bundle</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                +233 59 722 2464
              </li>
              <li className="flex items-center gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Send className="w-5 h-5 text-primary" />
                Telegram Channel
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get updates on promo and discounts.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl flex-grow text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-background p-3 rounded-xl hover:scale-105 transition-transform">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DataGhana. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;