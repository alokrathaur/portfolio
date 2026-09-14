import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bg-sky-500/10 top-[-100px] left-1/2 -translate-x-1/2" />
      <div className="ambient-glow w-[350px] h-[350px] bg-indigo-500/10 top-[20%] right-[-50px]" />
      <div className="ambient-glow w-[300px] h-[300px] bg-cyan-500/10 bottom-[0] left-[-50px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-sky-500/25 bg-sky-500/5 text-sky-400 text-xs font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
            <span>{portfolioData.personal.statusBadge}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            Architecting world-class{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400">
              Apple Platform
            </span>{" "}
            applications.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
            I am <strong className="text-white font-semibold">{portfolioData.personal.name}</strong>, a Senior iOS Engineer with 8.3+ years of software engineering experience (7+ years native Apple ecosystem) architecting, developing, and deploying high-impact iOS and macOS applications across Fintech, Consumer E-Commerce, and Telehealth. Specializing in Swift 6, SwiftUI, Swift Concurrency, MVVM-C, and enterprise payment SDKs.
          </p>

          {/* Location & Relocation */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-zinc-400 font-mono mb-10">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>{portfolioData.personal.location}</span>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
            <a href="#experience">
              <Button size="lg" variant="primary" className="font-semibold text-sm">
                <span>View Enterprise Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#personal-projects">
              <Button size="lg" variant="outline" className="font-semibold text-sm">
                <span>Explore Personal Products</span>
              </Button>
            </a>
            <a href="Alok_Kumar_Rathaur_Senior_iOS_Engineer_Resume.docx" download>
              <Button size="lg" variant="secondary" className="font-semibold text-sm">
                <Download className="w-4 h-4 text-sky-400" />
                <span>Resume (DOCX)</span>
              </Button>
            </a>
          </div>

          {/* Tech stack pill strip */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-zinc-400">
            <span className="text-zinc-500 font-mono">Core Stack:</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">Swift 6</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">SwiftUI</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">UIKit</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">Swift Concurrency</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">MVVM-C</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">Apple Pay & Payment SDKs</span>
            <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300">React Native</span>
          </div>
        </div>
      </div>
    </section>
  );
};
