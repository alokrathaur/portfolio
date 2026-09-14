import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Button } from "@/components/ui/Button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Download, 
  Globe, 
  ArrowUp,
  Smartphone
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative pt-20 pb-12 border-t border-white/10 bg-[#02050e] overflow-hidden">
      {/* Background glow */}
      <div className="ambient-glow w-[450px] h-[450px] bg-sky-500/5 bottom-[-150px] left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Callout */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-mono text-sky-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Let's build something exceptional together.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Interested in Senior iOS Developer, Lead Engineer, or Mobile Architecture roles. Open to relocation, hybrid, or remote positions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Email Copy Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all shadow-md active:scale-95"
            >
              <Mail className="w-4 h-4 text-sky-400" />
              <span>{portfolioData.personal.email}</span>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400 ml-1" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-zinc-400 ml-1" />
              )}
            </button>

            {/* Direct Resume Download */}
            <a href="Alok_Kumar_Rathaur_Senior_iOS_Engineer_Resume.pdf" download>
              <Button variant="primary" size="md" className="font-semibold text-sm">
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-white/5 text-sm text-zinc-400">
          <div>
            <div className="flex items-center gap-2.5 text-white font-bold text-base mb-2">
              <Smartphone className="w-4 h-4 text-sky-400" />
              <span>Alok Kumar Rathaur</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Senior iOS Engineer specializing in Swift 6, SwiftUI, Swift Concurrency, MVVM-C architecture, and high-security payment systems.
            </p>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-3">
              Direct Contact
            </span>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${portfolioData.personal.email}`} className="hover:text-white transition-colors">
                  {portfolioData.personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <a href={`tel:${portfolioData.personal.phone}`} className="hover:text-white transition-colors">
                  {portfolioData.personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{portfolioData.personal.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <span className="block text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-3">
              Connect & Repositories
            </span>
            <div className="flex flex-wrap gap-2">
              {portfolioData.personal.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-xs text-zinc-300 hover:text-white border border-white/5 transition-all"
                >
                  {link.label === "GitHub" && <GithubIcon className="w-3.5 h-3.5 fill-current" />}
                  {link.label === "LinkedIn" && <LinkedinIcon className="w-3.5 h-3.5 fill-current" />}
                  {link.label === "Studio Portal" && <Globe className="w-3.5 h-3.5" />}
                  {link.label === "Email" && <Mail className="w-3.5 h-3.5" />}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Alok Kumar Rathaur. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
