import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Membership from './components/Membership';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Smoother scroll entry for the whole page
    const ctx = gsap.context(() => {
      gsap.from("main", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative bg-cream selection:bg-clay selection:text-white">
      {/* Global Aesthetics */}
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main className="relative">
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <Membership />
      </main>

      <Footer />
    </div>
  );
}

export default App;
