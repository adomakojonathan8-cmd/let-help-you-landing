import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import NetworkPackages from './components/home/NetworkPackages';
import Features from './components/home/Features';
import HowItWorks from './components/home/HowItWorks';
import Testimonials from './components/home/Testimonials';
import Footer from './components/home/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <NetworkPackages />
        <Features />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;