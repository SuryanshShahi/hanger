import React from "react";
import { RxCross2 } from "react-icons/rx";

const Chip = ({
  onClick,
  title,
  className,
}: {
  onClick: () => void;
  title: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-primary2 cursor-pointer gap-x-2 flex items-center text-sm pl-4 pr-3 py-1 text-white rounded-full ${className}`}
      onClick={className ? () => onClick : () => {}}
    >
      <div>{title}</div>
      {!className && <RxCross2 size={16} onClick={onClick} />}
    </div>
  );
};

export default Chip;
