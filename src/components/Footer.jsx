import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-cream pt-32 pb-12 px-12 md:px-24 rounded-t-[4rem] relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold tracking-tight mb-8">
              NURA <span className="font-serif italic font-light">Health</span>
            </div>
            <p className="text-cream/40 max-w-sm text-lg leading-relaxed">
              Engineering the intersection of biology and extreme performance. 
              Based in Zurich, scaling globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Network</h4>
            <ul className="space-y-4 text-cream/50 text-sm">
              <li><a href="#" className="hover:text-clay transition-colors">Lab Locations</a></li>
              <li><a href="#" className="hover:text-clay transition-colors">Clinical Network</a></li>
              <li><a href="#" className="hover:text-clay transition-colors">Research Portal</a></li>
              <li><a href="#" className="hover:text-clay transition-colors">API Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-cream/50 text-sm">
              <li><a href="#" className="hover:text-clay transition-colors">Privacy Protocol</a></li>
              <li><a href="#" className="hover:text-clay transition-colors">Terms of Calibration</a></li>
              <li><a href="#" className="hover:text-clay transition-colors">Biometric Consent</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-cream/20 text-xs font-mono">
            &copy; 2026 NURA HEALTH AG. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex items-center gap-3 text-cream/40 text-[10px] font-mono uppercase tracking-[0.2em]">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            System Operational: v2.4.12_STABLE
          </div>

          <div className="flex gap-6 uppercase text-[10px] font-bold tracking-widest text-cream/30">
            <a href="#" className="hover:text-cream transition-colors">X / TWITTER</a>
            <a href="#" className="hover:text-cream transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-cream transition-colors">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
