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
          className={`rounded-xl 
         bg-secondaryDark w-[350px] h-[350px] absolute top-0 left-0 z-10`}
          initial={{
            opacity: 0,
            width: "0px",
            height: "0px",
            borderRadius: "50%",
            x: mousePosition.x / 2,
            y: mousePosition.y / 3,
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
          transition={{ ease: "easeOut", duration: 0.2 }}
          style={{
            left: mousePosition.x / 3 + 50,
            top: mousePosition.y / 4 - 200,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <Image src={image || ""} alt="project" width={300} height={200} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectPreview;
