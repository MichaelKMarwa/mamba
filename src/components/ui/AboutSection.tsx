import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Shield, Zap } from "lucide-react";
import { cvData } from "@/data/portfolioData";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[--muted]/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <p className="text-lg text-[--muted-foreground] mb-6">
                I'm a passionate Cloud Support Engineer with expertise in AWS
                services, infrastructure automation, and cost optimization. I
                specialize in building scalable, secure, and efficient cloud
                solutions.
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="text-[--primary]" size={20} />
                  <span>{cvData.email}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Github className="text-[--primary]" size={20} />
                  <span>{cvData.github}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Linkedin className="text-[--primary]" size={20} />
                  <span>{cvData.linkedin}</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="bg-[--card] p-6 rounded-lg border border-[--border]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="text-[--primary]" size={20} />
                  <span>AWS Certified Cloud Practitioner</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-[--primary]" size={20} />
                  <span>AWS Solutions Architect Associate (In Progress)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;