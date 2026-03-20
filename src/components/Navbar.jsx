import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <div className={`
        pill-container flex items-center gap-8 px-8 py-4 rounded-full transition-all duration-500 ease-in-out
        ${scrolled ? 'glass px-6 py-3 scale-95' : 'bg-transparent'}
      `}>
        <div className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-moss' : 'text-white'}`}>
          NURA <span className="font-serif italic font-light">Health</span>
        </div>
        
        <div className={`flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-moss/80' : 'text-white/80'}`}>
          <a href="#philosophy" className="hover:text-clay transition-colors">Philosophy</a>
          <a href="#protocol" className="hover:text-clay transition-colors">Protocol</a>
          <a href="#features" className="hover:text-clay transition-colors">Intelligence</a>
        </div>

        <button className={`
          ml-4 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 btn-magnetic
          ${scrolled ? 'bg-moss text-cream hover:bg-clay' : 'bg-cream text-moss hover:bg-clay hover:text-white'}
        `}>
          Join Membership
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
