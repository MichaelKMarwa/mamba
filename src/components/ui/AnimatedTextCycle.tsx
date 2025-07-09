
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AnimatedTextCycleProps {
  words: string[];
  interval?: number;
  className?: string;
}

const AnimatedTextCycle: React.FC<AnimatedTextCycleProps> = ({
  words,
  interval = 3000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const measureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      const elements = measureRef.current.children;
      let widestElement = 0;
      
      for (let i = 0; i < elements.length; i++) {
        const width = elements[i].getBoundingClientRect().width;
        if (width > widestElement) {
          widestElement = width;
        }
      }
      
      setMaxWidth(widestElement);
    }
  }, [words]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, words.length]);

  const containerVariants: Variants = {
    hidden: { 
      y: -20, 
      opacity: 0, 
      filter: "blur(8px)" 
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { 
        duration: 0.4, 
        ease: [0.4, 0.0, 0.2, 1] 
      },
    },
    exit: {
      y: 20,
      opacity: 0,
      filter: "blur(8px)",
      transition: { 
        duration: 0.3, 
        ease: [0.4, 0.0, 1, 1] 
      },
    },
  };

  return (
    <>
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none"
        style={{ visibility: "hidden", position: "fixed", top: "-9999px" }}
      >
        {words.map((word, i) => (
          <span key={i} className={`font-bold ${className}`}>
            {word}
          </span>
        ))}
      </div>

      <motion.span
        className="relative inline-block"
        style={{
          width: maxWidth > 0 ? `${maxWidth}px` : "auto",
          minWidth: maxWidth > 0 ? `${maxWidth}px` : "auto",
          lineHeight: "inherit",
          verticalAlign: "baseline",
        }}
        animate={{
          transition: {
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 1.2,
          },
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentIndex}
            className={`absolute font-bold ${className}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ 
              whiteSpace: "nowrap",
              lineHeight: "inherit",
              top: "0",
              left: "0",
              transform: "translateY(0)",
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};

export default AnimatedTextCycle;
