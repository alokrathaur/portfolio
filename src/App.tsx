import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsRow } from "@/components/StatsRow";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PersonalProjectsSection } from "@/components/PersonalProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactFooter } from "@/components/ContactFooter";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-[#f8fafc] selection:bg-sky-500/20 selection:text-sky-300 font-sans antialiased">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Key Metrics & Proof (10k-websites standard) */}
        <StatsRow />

        {/* 3. Core Technical Skills */}
        <SkillsSection />

        {/* 4. Professional Experience ⭐ (Enterprise & Client Production Work) */}
        <ExperienceSection />

        {/* 5. Key Personal Projects & Product Ownership (Independent Product Lab) */}
        <PersonalProjectsSection />

        {/* 6. Education & Certifications */}
        <EducationSection />
      </main>

      {/* 7. Contact & Footer */}
      <ContactFooter />
    </div>
  );
};

export default App;
