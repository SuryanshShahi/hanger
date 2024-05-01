import React from "react";

const HoverText = ({
  text,
  styleBottomLine,
}: {
  text: string;
  styleBottomLine?: string;
}) => {
  return (
    <div className="space-y-1 w-fit group cursor-pointer">
      <div className="text-lg text-[#d2d3d5]">{text}</div>
      <div
        className={`h-[1px] w-10 group-hover:w-full duration-500 bg-white ${styleBottomLine}`}
      />
    </div>
  );
};

export default HoverText;
