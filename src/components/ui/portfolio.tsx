"use client";

import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ProjectPreviewModal from "./ProjectPreviewModal";

// Smooth scroll function
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

// Main Portfolio Component
const PortfolioLandingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const handleDownloadCV = () => {
    // Create link to download PDF from public folder
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => smoothScrollTo(sectionId), 100);
  };

  return (
    <div className="min-h-screen bg-[--background] text-[--foreground]">
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavClick={handleNavClick}
        onDownloadCV={handleDownloadCV}
      />

      <HeroSection
        onDownloadCV={handleDownloadCV}
        onNavClick={handleNavClick}
      />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection onProjectClick={handleProjectClick} />

      <ContactSection onDownloadCV={handleDownloadCV} />

      <Footer />

      {/* Project Preview Modal */}
      <ProjectPreviewModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default PortfolioLandingPage;
