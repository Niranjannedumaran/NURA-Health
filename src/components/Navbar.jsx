import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMenuOpen(false);
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: target, autoKill: true },
      ease: "power4.inOut"
    });
  };

  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[110] w-[90%] md:w-fit">
        <div className={`
          pill-container flex items-center justify-between md:justify-start gap-4 md:gap-8 px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-500 ease-in-out
          ${scrolled ? 'glass scale-95' : 'bg-transparent'}
        `}>
          <div className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled || menuOpen ? 'text-moss' : 'text-white'}`}>
            NURA <span className="font-serif italic font-light">Health</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-moss/80' : 'text-white/80'}">
            <a href="#philosophy" onClick={(e) => handleNavClick(e, '#philosophy')} className="hover:text-clay transition-colors text-white">Philosophy</a>
            <a href="#protocol" onClick={(e) => handleNavClick(e, '#protocol')} className="hover:text-clay transition-colors text-white">Protocol</a>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-clay transition-colors text-white">Intelligence</a>
          </div>

          <button 
            onClick={(e) => handleNavClick(e, '#membership')}
            className={`
              hidden md:block ml-4 px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 btn-magnetic
              ${scrolled ? 'bg-moss text-cream hover:bg-clay' : 'bg-cream text-moss hover:bg-clay hover:text-white'}
            `}>
            Join Membership
          </button>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-full transition-colors ${scrolled || menuOpen ? 'text-moss bg-moss/10' : 'text-white bg-white/10'}`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 z-[105] bg-cream/95 backdrop-blur-2xl transition-all duration-700 ease-in-out md:hidden
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        <div className="h-full flex flex-col items-center justify-center gap-12 text-center">
          <div className="space-y-8">
            {['Philosophy', 'Protocol', 'Intelligence'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-4xl font-bold text-moss hover:text-clay transition-colors tracking-tighter"
              >
                {item}
              </a>
            ))}
          </div>
          <button className="px-10 py-5 bg-moss text-cream rounded-full font-bold text-lg shadow-2xl shadow-moss/20">
            Join Membership
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
