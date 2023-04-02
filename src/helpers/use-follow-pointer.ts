import { useState, RefObject, useEffect, MutableRefObject } from "react";

export function useFollowPointer(
  ref: RefObject<HTMLElement>,
  isMobile: boolean
) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current || isMobile) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      if (!ref.current) return;
      const element = ref.current!;
      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isMobile, ref]);
  return point;
}
