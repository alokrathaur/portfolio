import React from "react";
import { portfolioData, PersonalProject } from "@/data/portfolioData";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  Rocket, 
  ArrowUpRight 
} from "lucide-react";

export const PersonalProjectsSection: React.FC = () => {
  return (
    <section id="personal-projects" className="py-20 sm:py-28 relative border-t border-white/5 bg-[#030712]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-mono text-cyan-400 mb-3">
            <Rocket className="w-3.5 h-3.5" />
            <span>Independent Products & Creations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Key Personal Projects & Product Ownership
          </h2>
          
          {/* User's Exact Preamble Callout */}
          <div className="p-4 sm:p-5 rounded-xl border border-white/10 bg-white/[0.02] text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            <p className="font-semibold text-white mb-1">
              Independent Engineering & Product Lab (Nov 2025 – Present)
            </p>
            <p className="text-zinc-400 mb-3">
              Self-directed engineering initiative following Redpin tenure, architecting and shipping commercial-grade software across native Apple platforms (Swift 6, SwiftUI), real-time cross-platform multiplayer (iOS & Android), and SaaS.
            </p>
            <div className="pt-2.5 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono">
              <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">Total Shipped Track Record:</span>
              <span className="text-cyan-400 font-medium">8 Mobile Apps (7 iOS • 1 Android)</span>
              <span className="text-zinc-600">•</span>
              <span className="text-purple-400 font-medium">1 Native Mac App</span>
              <span className="text-zinc-600">•</span>
              <span className="text-emerald-400 font-medium">4 Web & SaaS Platforms</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {portfolioData.personalProjects.projects.map((project: PersonalProject) => (
            <Card
              key={project.title}
              className="p-6 sm:p-8 border-white/10 bg-[#090e1a]/85 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-2xl shadow-black/60 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      className="w-12 h-12 rounded-2xl object-cover border border-white/10 shadow-md shadow-black/40 group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        // Fallback in case path differs
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <Badge variant="accent" className="text-[10px] font-mono">
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-xs font-mono text-zinc-400 mt-0.5">
                        {project.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm font-medium text-cyan-300 mb-3 font-sans">
                  {project.tagline}
                </p>

                {/* Technology Pill */}
                <div className="mb-5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono text-zinc-300">
                  <span className="text-zinc-500 block mb-1">Tech Stack:</span>
                  <span>{project.technology}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {project.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>
                        <strong className="text-white font-semibold mr-1 font-sans">
                          {bp.topic}:
                        </strong>
                        {bp.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2.5">
                {project.webUrl && (
                  <a
                    href={project.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors shadow-sm"
                  >
                    <span>Launch Product</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-colors"
                  >
                    <span>App Store</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.googlePlayUrl && (
                  <a
                    href={project.googlePlayUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-colors"
                  >
                    <span>Google Play</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.standaloneUrl && (
                  <a
                    href={project.standaloneUrl}
                    className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-white px-2.5 py-2 transition-colors ml-auto"
                  >
                    <span>Product Specs →</span>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
