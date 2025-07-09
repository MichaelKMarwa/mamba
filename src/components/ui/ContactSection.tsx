import React from "react";
import { motion } from "framer-motion";
import { Mail, FileText } from "lucide-react";
import { cvData } from "@/data/portfolioData";

interface ContactSectionProps {
  onDownloadCV: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onDownloadCV }) => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-[--muted-foreground] mb-8">
            I'm always open to discussing new opportunities and interesting
            projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href={`mailto:${cvData.email}`}
              className="bg-[--primary] text-[--accent] px-8 py-3 rounded-md hover:bg-[--primary]/90 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Send Email
            </motion.a>
            <motion.button
              onClick={onDownloadCV}
              className="bg-[--muted] text-[--secondary-foreground] border border-[--border] px-8 py-3 rounded-md hover:bg-[--accent] transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              View CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;