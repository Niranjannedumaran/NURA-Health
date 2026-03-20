import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: "Essential",
      price: "450",
      features: ["Biometric Audit", "Nutrition Protocol", "Monthly Review"],
      color: "bg-white",
      text: "text-moss",
      btn: "bg-moss text-cream"
    },
    {
      name: "Performance",
      price: "1,200",
      features: ["Genetic Calibration", "Neural Monitoring", "Priority Support", "Bio-hacker Kit"],
      color: "bg-moss",
      text: "text-cream",
      btn: "bg-clay text-white",
      highlight: true
    },
    {
      name: "Elite",
      price: "3,500",
      features: ["Full Bio-Synthesis", "On-site Lab Access", "Daily Optimization", "Concierge Team"],
      color: "bg-white",
      text: "text-moss",
      btn: "bg-moss text-cream"
    }
  ];

  return (
    <section className="py-32 px-12 md:px-24 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-moss mb-6">Select your <span className="font-serif italic">regimen.</span></h2>
            <p className="text-moss/60 max-w-xl mx-auto">Investment in your biology yields the highest dividend. Choose the tier that matches your optimization requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
                <div 
                    key={plan.name}
                    className={`${plan.color} ${plan.text} p-10 rounded-5xl border border-moss/10 flex flex-col justify-between transition-transform duration-500 hover:-translate-y-4 shadow-xl shadow-moss/5 relative overflow-hidden`}
                >
                    {plan.highlight && (
                        <div className="absolute top-6 right-6 bg-clay text-white px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Popular</div>
                    )}
                    <div>
                        <div className="text-xs font-mono tracking-widest mb-2 opacity-50 uppercase">{plan.name}</div>
                        <div className="flex items-baseline gap-1 mb-10">
                            <span className="text-4xl font-bold font-serif">$</span>
                            <span className="text-6xl font-bold tracking-tighter">{plan.price}</span>
                            <span className="text-xs opacity-50 ml-2">/ month</span>
                        </div>
                        <div className="space-y-4">
                            {plan.features.map(f => (
                                <div key={f} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-clay/10 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-clay" />
                                    </div>
                                    <span className="text-sm font-medium opacity-80">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={`${plan.btn} mt-12 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 group`}>
                        Become Member
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
