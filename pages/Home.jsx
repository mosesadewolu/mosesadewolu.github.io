import React from "react";
import Sidebar from "../components/researcher/Sidebar";
import HeroSection from "../components/researcher/HeroSection";
import ExperienceSection from "../components/researcher/ExperienceSection";
import ProjectsSection from "../components/researcher/ProjectsSection";
import SkillsSection from "../components/researcher/SkillsSection";
import EducationSection from "../components/researcher/EducationSection";
import FooterSection from "../components/researcher/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground" >
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] max-w-[1600px] mx-auto">
        <Sidebar />
        <main className="px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
}