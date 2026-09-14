import React from "react";
import { portfolioData, EducationItem } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { GraduationCap, Award, CheckCircle2 } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-mono text-indigo-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Rigorous foundation in computer science and specialized financial security compliance certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold text-zinc-300 font-mono tracking-wide uppercase flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-sky-400" />
              <span>Higher Education</span>
            </h3>

            {portfolioData.education.map((edu: EducationItem, idx: number) => (
              <Card
                key={idx}
                className="p-6 border-white/10 bg-[#090e1a]/70 hover:border-indigo-500/30 transition-all duration-300 shadow-lg shadow-black/40"
              >
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h4 className="text-base font-bold text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 shrink-0">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-zinc-500 mt-1">
                  Grade / Result: {edu.score}
                </p>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-base font-semibold text-zinc-300 font-mono tracking-wide uppercase flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Professional Certifications</span>
            </h3>

            <Card className="p-6 border-white/10 bg-[#090e1a]/70 space-y-3.5 shadow-lg shadow-black/40">
              {portfolioData.certifications.map((cert: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
                    {cert}
                  </span>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
