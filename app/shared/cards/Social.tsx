import React from "react";

const Social = ({ children }: { children: any }) => {
  return (
    <div className="h-11 w-11 hover:rotate-[360deg] duration-500 cursor-pointer text-base text-white flex items-center justify-center rounded-full border border-[rgba(249,249,249,0.15)]">
      {children}
    </div>
  );
};

export default Social;
