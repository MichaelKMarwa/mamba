import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { cvData } from "@/data/portfolioData";

interface ProjectsSectionProps {
  onProjectClick: (project: any) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectClick }) => {
  return (
    <section id="projects" className="py-20 bg-[--muted]/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cvData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[--card] p-6 rounded-lg border border-[--border] hover:shadow-lg transition-shadow"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "var(--shadow-lg)",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <motion.button
                    onClick={() => onProjectClick(project)}
                    className="text-[--primary] cursor-pointer hover:text-[--primary]/80 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
                <p className="text-[--muted-foreground] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="bg-[--primary]/10 text-[--primary] px-3 py-1 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;