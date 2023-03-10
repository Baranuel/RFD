"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewProps {
  id: any;
  mousePosition: Record<any, number>;
  mousePresent: boolean;
  image?: string;
}

function ProjectPreview({
  mousePosition,
  mousePresent,
  image,
}: ProjectPreviewProps) {
  return (
    <AnimatePresence>
      {mousePresent && (
        <motion.div
          className={` pointer-events-none rounded-full bg-secondaryDark  fixed flex items-center justify-center`}
          initial={{
            opacity: 0,
            width: "0px",
            height: "0px",
          }}
          animate={{
            opacity: 1,
            x: mousePosition.x + "px",
            y: mousePosition.y + "px",
            width: "200px",
            height: "200px",
          }}
          exit={{
            opacity: 0,
          }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          style={{
            x: mousePosition.x + "px",
            y: mousePosition.y + "px",
          }}
        >
          <Image src={image || ""} alt="project" fill />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectPreview;
