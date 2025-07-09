
import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useColorMode } from "@/hooks/useColorMode";

const AnimatedThemeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      onClick={toggleColorMode}
      className="relative flex h-8 w-16 cursor-pointer items-center rounded-full p-1 transition-colors shadow-sm border border-[--border] bg-[--background] duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
    >
      <span className="sr-only">Toggle color mode</span>
      <motion.span
        key={colorMode === "dark" ? "moon" : "sun"}
        className={`absolute z-10 text-[--muted-foreground] ${colorMode === "dark" ? "left-2" : "right-2"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {colorMode === "dark" ? (
          <Moon className="size-4" />
        ) : (
          <Sun className="size-4" />
        )}
      </motion.span>
      <motion.div
        className="absolute z-20 flex h-6 w-6 items-center justify-center rounded-full bg-[--primary] shadow-md"
        initial={false}
        animate={{
          x: colorMode === "dark" ? 32 : 2,
          rotate: colorMode === "dark" ? 40 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 50,
          duration: 0.2,
        }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: colorMode === "dark" ? 0 : 180,
            opacity: [1, 0, 1],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 0.4,
            opacity: { duration: 0.2 },
          }}
        >
          {colorMode === "dark" ? (
            <Moon size={16} className="text-[--primary-foreground]" />
          ) : (
            <Sun size={16} className="text-[--primary-foreground]" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedThemeToggle;
