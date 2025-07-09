import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  onNavClick: (sectionId: string) => void;
  onDownloadCV: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  onNavClick,
  onDownloadCV,
}) => {
  const headerVariants = {
    top: {
      backgroundColor: "var(--background)",
      borderBottomColor: "var(--border)",
      boxShadow: "none",
    },
    scrolled: {
      backgroundColor: "var(--background)",
      borderBottomColor: "var(--border)",
      boxShadow: "var(--shadow-lg)",
    },
  };

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[--border]"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo: Responsive for desktop, tablet, and mobile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center cursor-pointer"
          onClick={() => smoothScrollTo("hero")}
        >
          {/* Desktop: logo.svg */}
          <img
            src="/logo.svg"
            alt="Michael Marwa Logo"
            className="hidden lg:block h-10 w-auto"
          />
          {/* Tablet: logo.png */}
          <img
            src="/logo.png"
            alt="Michael Marwa Logo"
            className="hidden md:block lg:hidden h-10 w-auto"
          />
          {/* Mobile: logo-sml.png */}
          <img
            src="/logo-sml.png"
            alt="Michael Marwa Logo"
            className="block md:hidden h-8 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.button
            onClick={() => onNavClick("about")}
            className="hover:text-[--primary] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About
          </motion.button>
          <motion.button
            onClick={() => onNavClick("projects")}
            className="hover:text-[--primary] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.button>
          <motion.button
            onClick={() => onNavClick("skills")}
            className="hover:text-[--primary] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Skills
          </motion.button>
          <motion.button
            onClick={() => onNavClick("contact")}
            className="hover:text-[--primary] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.button>
          <motion.button
            onClick={onDownloadCV}
            className="bg-[--primary] text-[--accent] px-4 py-2 rounded-md hover:bg-[--primary]/90 transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Download CV
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[--foreground]"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[--background]/95 backdrop-blur-md border-t border-[--border]"
          >
            <div className="container mx-auto px-6 py-4 space-y-4">
              <motion.button
                onClick={() => onNavClick("about")}
                className="block hover:text-[--primary] transition-colors text-left w-full"
                whileHover={{ x: 5 }}
              >
                About
              </motion.button>
              <motion.button
                onClick={() => onNavClick("projects")}
                className="block hover:text-[--primary] transition-colors text-left w-full"
                whileHover={{ x: 5 }}
              >
                Projects
              </motion.button>
              <motion.button
                onClick={() => onNavClick("skills")}
                className="block hover:text-[--primary] transition-colors text-left w-full"
                whileHover={{ x: 5 }}
              >
                Skills
              </motion.button>
              <motion.button
                onClick={() => onNavClick("contact")}
                className="block hover:text-[--primary] transition-colors text-left w-full"
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.button>
              <motion.button
                onClick={onDownloadCV}
                className="bg-[--primary] text-[--accent] px-4 py-2 rounded-md hover:bg-[--primary]/90 transition-colors flex items-center gap-2 w-full justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;