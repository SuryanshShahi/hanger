import React from "react";

const Heading = ({
  title,
  subTitle,
  className,
  styleTitle,
  styleSubTitle,
}: {
  title: string;
  subTitle: string;
  className?: string;
  styleTitle?: string;
  styleSubTitle?: string;
}) => {
  return (
    <div className={`${className}`}>
      <div
        className={`text-[42px] leading-[59px] text-primary font-saint ${styleTitle}`}
      >
        {title}
      </div>
      <h1
        className={`text-[40px] font-semibold uppercase leading-10 font-oswald -mt-5 ${styleSubTitle}`}
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default Heading;
