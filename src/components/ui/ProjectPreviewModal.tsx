import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Button } from "./button";

interface ProjectPreviewModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectPreviewModal: React.FC<ProjectPreviewModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const projectScreenshots = {
    "AWS Cloud Resume Challenge": "/gallery/vorunadia.svg",
    "Cost-Optimized Wallet App": "/gallery/vorunadia.svg",
    "Taxi App Architecture": "/gallery/driverplan.svg",
    "UK-based App Backend": "/gallery/driverplan.svg",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <DialogHeader className="space-y-4">
            <DialogTitle className="text-2xl font-bold text-left">
              {project?.title}
            </DialogTitle>
            <DialogDescription className="text-left text-base">
              {project?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-6">
            {/* Project Screenshot */}
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden border border-[--border] bg-[--muted]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <img
                src={
                  projectScreenshots[
                    project?.title as keyof typeof projectScreenshots
                  ] || projectScreenshots["AWS Cloud Resume Challenge"]
                }
                alt={`${project?.title} screenshot`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-4"
            >
              <div>
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project?.tech.map((tech: string, techIndex: number) => (
                    <motion.span
                      key={techIndex}
                      className="bg-[--primary]/10 text-[--primary] px-3 py-1 rounded-full text-sm border border-[--border]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4">
                <div className="bg-[--card]/50 p-4 rounded-lg border border-[--border]">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Code className="text-[--primary]" size={16} />
                    Project Type
                  </h5>
                  <p className="text-[--muted-foreground] capitalize">
                    {project?.type || "Web Application"}
                  </p>
                </div>

                <div className="bg-[--card]/50 p-4 rounded-lg border border-[--border]">
                  <h5 className="font-semibold mb-2 flex items-center gap-2">
                    <Zap className="text-[--primary]" size={16} />
                    Status
                  </h5>
                  <p className="text-[--muted-foreground]">Completed</p>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[--border]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Button
                variant="default"
                className="flex items-center gap-2"
                disabled
              >
                <ExternalLink size={16} />
                View Live Demo
                <span className="text-xs opacity-60">(Coming Soon)</span>
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2"
                disabled
              >
                <Github size={16} />
                View Source Code
                <span className="text-xs opacity-60">(Private)</span>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectPreviewModal;
