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
  id,
  mousePosition,
  mousePresent,
  image,
}: ProjectPreviewProps) {
  const previewBox = useRef<HTMLDivElement>(null!);
  const [previewBoxWidth, setPreviewBoxWidth] = useState(
    previewBox.current !== null
      ? previewBox.current.getBoundingClientRect().width
      : 0
  );

  const INNERWIDTH = window.innerWidth;
  const INNERHEIGHT = window.innerHeight;
  const SCREEN_FRACTION = 4;

  return (
    <AnimatePresence>
      {mousePresent && (
        <motion.div
          ref={previewBox}
          className={`rounded-xl 
         bg-secondaryDark w-[350px] h-[350px] absolute`}
          initial={{
            opacity: 0,
            width: "0px",
            height: "0px",
            borderRadius: "50%",
            x: mousePosition.x - INNERHEIGHT,
            y: mousePosition.y - INNERWIDTH / SCREEN_FRACTION,
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
            y: mousePosition.y - INNERHEIGHT,
            x:
              mousePosition.x -
              INNERWIDTH / SCREEN_FRACTION +
              previewBoxWidth +
              100,
          }}
        >
          <Image src={image || ""} alt="project" width={300} height={200} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectPreview;
