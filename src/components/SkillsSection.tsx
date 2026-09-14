import React from "react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import {
  Apple,
  CreditCard,
  Cpu,
  Layers,
  Activity,
  ShieldCheck,
  GitBranch,
  Smartphone,
  Users,
  CheckCircle2
} from "lucide-react";

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Apple":
        return <Apple className="w-5 h-5 text-sky-400" />;
      case "CreditCard":
        return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-blue-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-purple-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-pink-400" />;
      case "Users":
        return <Users className="w-5 h-5 text-teal-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-sky-400 mb-3">
            <span>Capabilities & Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Core Technical Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Engineered through 7.7+ years of building production applications, enterprise fintech platforms, and commercial apps.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.skillCategories.map((category: SkillCategory) => (
            <Card
              key={category.title}
              className="p-6 border-white/10 bg-[#090e1a]/70 hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/40 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-sky-500/30 transition-colors">
                  {getIcon(category.iconName)}
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 border border-white/5 hover:border-sky-500/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
