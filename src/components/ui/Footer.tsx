import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import AnimatedThemeToggle from "./AnimatedThemeToggle";
import { cvData } from "@/data/portfolioData";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-[--border]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[--muted-foreground]">
            © 2025 Michael Marwa. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <AnimatedThemeToggle />
            <div className="flex items-center space-x-6">
              <motion.a
                href={`mailto:${cvData.email}`}
                className="text-[--muted-foreground] hover:text-[--primary] transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/MichaelKMarwa"
                className="text-[--muted-foreground] hover:text-[--primary] transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/michael-k-marwa-5b5103184/"
                className="text-[--muted-foreground] hover:text-[--primary] transition-colors"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;