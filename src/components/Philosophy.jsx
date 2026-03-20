import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
      });

      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: "20%",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="relative h-screen flex items-center bg-charcoal overflow-hidden">
      <div 
        className="parallax-bg absolute inset-0 bg-cover bg-center opacity-30 scale-110"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop')` }}
      />
      
      <div className="relative z-10 px-12 md:px-24 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            <h2 className="reveal-text text-4xl md:text-6xl text-cream font-bold leading-tight max-w-4xl">
              Modern medicine asks: <span className="text-clay italic font-serif">What is wrong?</span>
            </h2>
            
            <div className="reveal-text w-32 h-[1px] bg-cream/20" />
            
            <h2 className="reveal-text text-6xl md:text-9xl text-white font-bold leading-none">
              We ask: <br />
              <span className="font-serif italic text-clay">What is optimal?</span>
            </h2>
            
            <p className="reveal-text text-cream/40 text-xl md:text-2xl font-light max-w-2xl mt-8">
              Optimization is not an event; it's a constant algorithm. 
              Nura Health leverages clinical biology to transform your 
              biological defaults into performance assets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
