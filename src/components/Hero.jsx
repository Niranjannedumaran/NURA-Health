import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      })
      .from(".hero-desc", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5");
      
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full overflow-hidden bg-charcoal">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-moss/40 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-end pb-24 px-8 md:px-24">
        <div className="max-w-4xl">
          <div className="overflow-hidden">
            <h1 className="hero-line text-white text-5xl md:text-8xl font-bold tracking-tight leading-[0.9]">
              Nature is the
            </h1>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="hero-line text-cream text-6xl md:text-[10rem] font-serif italic leading-[0.8]">
              Algorithm.
            </h1>
          </div>
          
          <p className="hero-desc text-cream/70 text-base md:text-xl max-w-xl font-light tracking-wide leading-relaxed">
            Nura Health bridges biological research and avant-garde wellness. 
            We don't just ask what's wrong—we engineer what's optimal using 
            epigenetic intelligence and clinical precision.
          </p>

          <div className="hero-desc mt-10 flex gap-6">
            <button className="px-8 py-4 bg-clay text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-moss transition-colors duration-500 shadow-xl shadow-clay/20">
              Start Evaluation
            </button>
            <div className="flex items-center gap-3 text-cream/50 text-xs font-mono uppercase tracking-[0.2em]">
              <div className="w-2 h-2 rounded-full bg-clay animate-pulse" />
              Clinical Trials Active
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
