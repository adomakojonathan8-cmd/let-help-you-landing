import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Smartphone className="w-6 h-6 text-background" />
          </div>
          <span className="text-xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            DataGhana
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#packages" className="text-sm font-medium hover:text-primary transition-colors">Packages</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How it Works</a>
          <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Reviews</a>
          <button className="bg-primary text-background px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform">
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-white/5 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#packages" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Packages</a>
          <a href="#how-it-works" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#testimonials" className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <button className="bg-primary text-background px-6 py-3 rounded-xl font-bold">
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;