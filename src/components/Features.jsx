import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Activity, Cpu, MousePointer2, RefreshCw } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-32 px-12 md:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-clay font-mono text-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
              INTELLIGENCE CORE
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-moss leading-tight">
              Precision <br />
              <span className="font-serif italic font-medium">Instrumentation.</span>
            </h2>
          </div>
          <p className="text-moss/60 max-w-sm text-right font-medium">
            Moving beyond passive health tracking into proactive biological optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DiagnosticShuffler />
          <TelemetryTypewriter />
          <MockCursorProtocol />
        </div>
      </div>
    </section>
  );
};

const DiagnosticShuffler = () => {
  const [items, setItems] = useState([
    "Epigenetic Age",
    "Microbiome Score",
    "Cortisol Optimization"
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const newItems = [...prev];
        const last = newItems.pop();
        newItems.unshift(last);
        return newItems;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(".shuffler-card", 
      { scale: 0.95, y: 20, opacity: 0 },
      { 
        scale: 1, 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "elastic.out(1, 0.75)" 
      }
    );
  }, [items]);

  return (
    <div className="bg-moss rounded-5xl p-8 h-[450px] flex flex-col justify-between overflow-hidden group">
      <div className="flex justify-between items-start">
        <Activity className="text-clay h-8 w-8" />
        <div className="text-cream/30 font-mono text-xs">AUDIT_01</div>
      </div>
      
      <div className="relative h-64 flex items-center justify-center" ref={containerRef}>
        {items.map((item, idx) => (
          <div 
            key={item}
            className="shuffler-card absolute w-full p-6 bg-white rounded-3xl shadow-2xl border border-moss/10 transition-all duration-700"
            style={{ 
              transform: `translateY(${(idx - 1) * 20}px) scale(${1 - idx * 0.05})`,
              zIndex: 10 - idx,
              opacity: 1 - idx * 0.2
            }}
          >
            <div className="text-moss font-bold text-lg mb-2">{item}</div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-full bg-cream rounded-full overflow-hidden">
                <div className="h-full bg-clay" style={{ width: `${85 - idx * 10}%` }} />
              </div>
              <span className="text-xs font-mono text-moss/40">{85 - idx * 10}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-cream text-2xl font-bold mb-2">Audit Intelligence</h3>
        <p className="text-cream/50 text-sm">Real-time biological data synthesis across three primary health vectors.</p>
      </div>
    </div>
  );
};

const TelemetryTypewriter = () => {
  const [text, setText] = useState("");
  const messages = [
    "Optimizing Circadian Rhythm...",
    "Analyzing Glucose Variance...",
    "Syncing Neural Pathways...",
    "Calibrating VO2 Max Intake..."
  ];
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    let currentText = "";
    let charIdx = 0;
    const msg = messages[msgIdx];
    
    const typeInterval = setInterval(() => {
      if (charIdx < msg.length) {
        currentText += msg[charIdx];
        setText(currentText);
        charIdx++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setMsgIdx((prev) => (prev + 1) % messages.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [msgIdx]);

  return (
    <div className="bg-charcoal rounded-5xl p-8 h-[450px] flex flex-col justify-between group overflow-hidden border border-moss/20">
      <div className="flex justify-between items-start">
        <Cpu className="text-clay h-8 w-8" />
        <div className="flex items-center gap-2 text-cream/30 font-mono text-xs">
          <div className="w-2 h-2 rounded-full bg-clay animate-ping" />
          LIVE FEED
        </div>
      </div>

      <div className="font-mono text-cream/90 text-2xl leading-relaxed">
        {text}
        <span className="w-3 h-6 bg-clay inline-block ml-1 animate-pulse" />
      </div>

      <div>
        <h3 className="text-cream text-2xl font-bold mb-2">Neural Stream</h3>
        <p className="text-cream/50 text-sm">AI-driven clinical telemetry processing your biometric shifts in UTC-0.</p>
      </div>
    </div>
  );
};

const MockCursorProtocol = () => {
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(2); // Tuesday

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(cursorRef.current, {
      x: 100, y: 50, duration: 2, ease: "power2.inOut", opacity: 1
    })
    .to(cursorRef.current, {
      scale: 0.8, duration: 0.3, onComplete: () => setActiveDay((prev) => (prev + 1) % 7)
    })
    .to(cursorRef.current, {
      scale: 1, duration: 0.3
    })
    .to(cursorRef.current, {
      x: 200, y: 150, duration: 1.5, ease: "power2.inOut"
    })
    .to(cursorRef.current, {
      opacity: 0, duration: 1
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="bg-white rounded-5xl p-8 h-[450px] flex flex-col justify-between border border-moss/10 relative overflow-hidden">
      <div className="flex justify-between items-start">
        <RefreshCw className="text-clay h-8 w-8" />
        <div className="text-moss/30 font-mono text-xs">PROTOCOL_V2</div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {days.map((day, idx) => (
            <div 
              key={idx} 
              className={`h-12 flex items-center justify-center rounded-xl border text-xs font-bold transition-all duration-500 ${idx === activeDay ? 'bg-moss text-cream border-moss' : 'bg-transparent text-moss border-moss/10'}`}
            >
              {day}
            </div>
          ))}
        </div>
        
        <div className="h-20 bg-moss/5 rounded-2xl flex items-center justify-center border border-dashed border-moss/20">
          <span className="text-moss/40 font-mono text-[10px] tracking-widest">AUTO_CALIBRATE_SYSTEM</span>
        </div>

        <div 
          ref={cursorRef}
          className="absolute top-0 left-0 pointer-events-none opacity-0"
        >
          <MousePointer2 className="fill-clay text-clay rotate-[-15deg] h-6 w-6 shadow-xl" />
        </div>
      </div>

      <div>
        <h3 className="text-moss text-2xl font-bold mb-2">Adaptive Regimen</h3>
        <p className="text-moss/50 text-sm">Automated protocol scaling that adjusts your lifestyle parameters dynamically.</p>
      </div>
    </div>
  );
};

export default Features;
