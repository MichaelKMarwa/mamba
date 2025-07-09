import React from "react";
import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import AnimatedTextCycle from "./AnimatedTextCycle";
import {
  ContainerScroll,
  BentoGrid,
  BentoCell,
  ContainerScale,
} from "./GalleryScroll";
import { projectImages } from "@/data/portfolioData";

interface HeroSectionProps {
  onDownloadCV: () => void;
  onNavClick: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onDownloadCV,
  onNavClick,
}) => {
  return (
    <section id="hero" className="pt-20">
      <ContainerScroll className="h-[400vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
          {projectImages.map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl bg-[--muted]"
            >
              <img
                className="size-full object-cover object-center"
                src={imageUrl}
                alt={`Project ${index + 1}`}
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-8 mx-auto flex items-baseline justify-center gap-2">
              <span>I Build</span>
              <AnimatedTextCycle
                words={[
                  "Cloud Infrastructure",
                  "Scalable Solutions",
                  "Secure Systems",
                  "Modern Applications",
                ]}
                className="text-[--primary]"
                interval={3000}
              />
            </h1>
            <p className="text-xl md:text-2xl text-[--muted-foreground] mb-8 max-w-2xl mx-auto">
              Cloud Support Engineer with 2+ years of experience in AWS,
              specializing in infrastructure design, cost optimization, and
              serverless applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={onDownloadCV}
                className="bg-[--primary] text-[--accent] px-8 py-3 rounded-md hover:bg-[--primary]/90 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download CV
              </motion.button>
              <motion.button
                onClick={() => onNavClick("projects")}
                className="border border-[--border] px-8 py-3 rounded-md bg-[--muted] text-[--secondary-foreground] hover:bg-[--accent] transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={20} />
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </ContainerScale>
      </ContainerScroll>
    </section>
  );
};

export default HeroSection;
