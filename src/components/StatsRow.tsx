import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { Zap, ShieldAlert, Rocket, Layers, Star } from "lucide-react";

export const StatsRow: React.FC = () => {
  const statIcons = [
    <Layers className="w-5 h-5 text-sky-400" key="1" />,
    <ShieldAlert className="w-5 h-5 text-emerald-400" key="2" />,
    <Rocket className="w-5 h-5 text-cyan-400" key="3" />,
    <Zap className="w-5 h-5 text-indigo-400" key="4" />,
    <Star className="w-5 h-5 text-amber-400" key="5" />,
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
      {portfolioData.stats.map((stat, idx) => (
        <Card
          key={stat.label}
          className="p-5 border-white/10 bg-[#090e1a]/85 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/50"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-white font-mono">
              {stat.value}
            </span>
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10">
              {statIcons[idx]}
            </div>
          </div>
          <p className="text-xs font-semibold text-zinc-200 tracking-wide uppercase">
            {stat.label}
          </p>
          <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
            {stat.description}
          </p>
        </Card>
      ))}
    </div>
  );
};
