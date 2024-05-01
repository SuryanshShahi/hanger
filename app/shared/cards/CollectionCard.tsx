import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const CollectionCard = ({
  data,
  className,
}: {
  data: { title: string; subtitle: string };
  className?: string;
}) => {
  return (
    <div className={`space-y-6 cursor-pointer group ${className || ""}`}>
      <div className="text-[33px] font-bold">{data?.title}</div>
      <div className="text-lg">{data?.subtitle}</div>
      <div className="flex items-center w-fit">
        <div className="w-0 text-nowrap overflow-hidden group-hover:w-20 duration-500">
          Read More
        </div>
        <IoIosArrowRoundForward className="h-[30px] w-[30px]" />
      </div>
    </div>
  );
};

export default CollectionCard;
