"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const previewBox = useRef<HTMLDivElement>(null!);
  return (
    <AnimatePresence>
      {mousePresent && (
        <motion.div
          ref={previewBox}
          className={`rounded-xl bg-secondaryDark flex items-center justify-center`}
          initial={{
            opacity: 0,
            width: "0px",
            height: "0px",
            borderRadius: "50%",
            x: mousePosition.x + 400,
            y: mousePosition.y,
          }}
          animate={{
            opacity: 1,
            width: "350px",
            height: "350px",
            borderRadius: "10%",
          }}
          exit={{
            opacity: 0,
            borderRadius: "50%",
            width: "0px",
            height: "0px",
          }}
          transition={{ ease: "easeOut", duration: 0.3 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            x: mousePosition.x + 400,
            y: mousePosition.y,
          }}
        >
          <Image src={image || ""} alt="project" width={100} height={50} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectPreview;
