import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-1/2 bg-green-500">
      <section>{children}</section>
    </div>
  );
}

export default layout;
