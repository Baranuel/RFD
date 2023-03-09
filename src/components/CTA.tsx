import React from "react";

interface CTAProps {
  text: string;
  onClick?: () => void;
}

function CTA({ text }: CTAProps) {
  return (
    <button className="px-12 py-3 text-xl bg-accentDark/10 text-accentDark uppercase border-2 border-accentDark">
      {text}
    </button>
  );
}

export default CTA;
