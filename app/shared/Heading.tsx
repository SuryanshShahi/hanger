import React from "react";

const Heading = ({
  heading,
  subHeading,
  className,
}: {
  heading: string;
  subHeading?: string;
  className?: string;
}) => {
  return (
    <div className={`space-y-5 w-fit ${className}`}>
      <div className="text-sm tracking-widest">{heading}</div>
      <div className="text-[57px] leading-[60px] max-w-[550px]">
        {subHeading}
      </div>
    </div>
  );
};

export default Heading;
