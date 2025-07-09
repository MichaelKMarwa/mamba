import React from "react";
import { motion } from "framer-motion";
import { Server, Code, Globe, Shield, Zap } from "lucide-react";
import { cvData } from "@/data/portfolioData";

const SkillsSection: React.FC = () => {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case "aws":
        return <Server className="text-[--primary]" size={24} />;
      case "tools":
        return <Code className="text-[--primary]" size={24} />;
      case "os":
        return <Globe className="text-[--primary]" size={24} />;
      case "networking":
        return <Globe className="text-[--primary]" size={24} />;
      case "security":
        return <Shield className="text-[--primary]" size={24} />;
      case "troubleshooting":
        return <Zap className="text-[--primary]" size={24} />;
      default:
        return <Code className="text-[--primary]" size={24} />;
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(cvData.skills).map(
              ([category, skills], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[--card] p-6 rounded-lg border border-[--border]"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "var(--shadow-lg)",
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {getSkillIcon(category)}
                    <h3 className="text-xl font-semibold capitalize">
                      {category.replace(/([A-Z])/g, " $1")}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="bg-[--primary]/10 text-[--primary] px-3 py-1 rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;