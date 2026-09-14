import React from "react";
import { portfolioData, WorkExperience } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  ExternalLink, 
  Calendar, 
  MapPin, 
  Briefcase
} from "lucide-react";
import { AppleIcon, PlayStoreIcon } from "@/components/Icons";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-mono text-sky-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Commercial & Enterprise Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Full-lifecycle engineering roles delivering native iOS solutions across international fintech, multi-currency banking, high-volume e-commerce, and telehealth.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {portfolioData.professionalExperience.map((exp: WorkExperience, idx: number) => {
            if (exp.isCareerBreak) {
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.01] text-zinc-400 text-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-semibold text-zinc-300 font-mono">
                      {exp.role}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {exp.bulletPoints[0].text}
                  </p>
                </div>
              );
            }

            return (
              <Card
                key={idx}
                className="p-6 sm:p-8 border-white/10 bg-[#090e1a]/80 hover:border-sky-500/30 transition-all duration-300 shadow-xl shadow-black/50 relative overflow-hidden group"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-3.5">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        className="w-12 h-12 rounded-2xl object-cover border border-white/10 shadow-md shadow-black/40 shrink-0 bg-white/5 p-1"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    )}
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <Badge variant="default" className="text-[11px] font-mono">
                            {exp.badge}
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-zinc-300 font-medium">
                        <span className="text-sky-400 font-semibold">{exp.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="flex items-center gap-1 text-zinc-400 text-xs">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-400 italic mt-1 font-mono">
                        {exp.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Actions & Period */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </div>

                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors border-b border-sky-400/30 hover:border-sky-400 pb-0.5 group"
                      >
                        {exp.companyUrl.includes("apps.apple.com") ? (
                          <AppleIcon className="w-3.5 h-3.5 fill-current text-white/90 group-hover:scale-110 transition-transform" />
                        ) : exp.companyUrl.includes("play.google.com") ? (
                          <PlayStoreIcon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                        ) : null}
                        <span>
                          {exp.companyUrl.includes("apps.apple.com")
                            ? "View on App Store"
                            : exp.companyUrl.includes("play.google.com")
                            ? "View on Google Play"
                            : "Visit Website"}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 border-t border-white/5 pt-5">
                  {exp.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                      <span>
                        {bp.topic && (
                          <strong className="text-white font-semibold mr-1.5 font-sans">
                            {bp.topic}:
                          </strong>
                        )}
                        {bp.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
