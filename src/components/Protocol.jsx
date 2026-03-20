import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Dna, ScanLine, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Protocol = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".protocol-card");
      
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
          onUpdate: (self) => {
            const nextCard = cards[i + 1];
            if (nextCard) {
              const progress = self.progress;
              gsap.set(card, {
                scale: 1 - progress * 0.1,
                opacity: 1 - progress * 0.5,
                filter: `blur(${progress * 20}px)`,
              });
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="protocol" className="relative bg-cream">
      <ProtocolCard 
        index={1}
        title="Cellular Audit" 
        subtitle="PHASE 01"
        desc="Extensive epigenetic screening to map your biological baseline and identifying accelerated aging markers."
        icon={<Dna className="w-12 h-12 text-clay" />}
        color="bg-moss"
        textColor="text-cream"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <div className="w-[500px] h-[500px] border-2 border-cream/20 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-[400px] h-[400px] border border-cream/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        </div>
      </ProtocolCard>

      <ProtocolCard 
        index={2}
        title="System Calibration" 
        subtitle="PHASE 02"
        desc="Dynamic adjustment of your metabolic and neural circuitry through targeted clinical protocols."
        icon={<ScanLine className="w-12 h-12 text-clay" />}
        color="bg-clay"
        textColor="text-white"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="h-full w-[1px] bg-white absolute left-1/4 animate-[scan_4s_ease-in-out_infinite]" />
            <div className="h-full w-[1px] bg-white absolute left-1/2 animate-[scan_4s_ease-in-out_infinite_1s]" />
            <div className="h-full w-[1px] bg-white absolute left-3/4 animate-[scan_4s_ease-in-out_infinite_2s]" />
        </div>
      </ProtocolCard>

      <ProtocolCard 
        index={3}
        title="Neural Integration" 
        subtitle="PHASE 03"
        desc="Final synchronization of biological output with cognitive performance layers for sustained excellence."
        icon={<Activity className="w-12 h-12 text-moss" />}
        color="bg-charcoal"
        textColor="text-cream"
      >
        <div className="absolute inset-0 opacity-30 flex items-center justify-center">
            <svg className="w-full h-48" viewBox="0 0 1000 200">
                <path 
                    d="M0,100 L100,100 L120,20 L140,180 L160,100 L300,100 L320,50 L340,150 L360,100 L500,100 L520,0 L540,200 L560,100 L1000,100" 
                    fill="none" 
                    stroke="#CC5833" 
                    strokeWidth="2"
                    className="animate-[dash_5s_linear_infinite]"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                />
            </svg>
        </div>
      </ProtocolCard>
    </div>
  );
};

const ProtocolCard = ({ index, title, subtitle, desc, icon, color, textColor, children }) => {
  return (
    <div className={`protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-6 md:p-12 overflow-hidden ${color}`}>
      {children}
      <div className="relative z-10 max-w-4xl text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
            {icon}
          </div>
        </div>
        <div className="text-clay font-mono text-xs tracking-[0.3em] mb-4">{subtitle}</div>
        <h3 className={`${textColor} text-4xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tighter`}>{title}</h3>
        <p className={`${textColor}/60 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-4 md:px-0`}>
          {desc}
        </p>
        <button 
          onClick={() => gsap.to(window, { duration: 1, scrollTo: '#membership', ease: "power4.inOut" })}
          className="mt-12 px-10 py-4 rounded-full border border-clay text-clay font-bold hover:bg-clay hover:text-white transition-all duration-500 uppercase tracking-widest text-xs"
        >
          Explore Phase
        </button>
      </div>
      <div className="absolute bottom-12 left-12 font-mono text-white/5 text-[15rem] font-bold leading-none pointer-events-none">
        0{index}
      </div>
    </div>
  );
};

export default Protocol;
