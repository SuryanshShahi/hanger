import Img from "@/app/shared/Img";
import React from "react";

const HeroSection = () => {
  return (
    <div className="pb-20 z-10 sm:px-10 px-5">
      <div className="text-primary xl:text-[200px] lg:text-[172px] md:text-[150px] sm:text-[100px] text-[77px] z-10 relative space-y-4">
        <div className="uppercase">Hangers</div>
        <div className="uppercase w-fit ml-auto leading-7">& More</div>
      </div>
      <div className="flex items-end justify-between sm:space-x-10 space-x-5 sm:scale-100 scale-90">
        <div className="space-y-10 -mb-[6%]">
          <div className="text-[13px] uppercase sm:block hidden leading-7 tracking-widest">
            Make your home look<br></br> it&apos;s very best , no compromise.
            <br></br>You deserve it
          </div>
          <Img
            src="/images/hero2.png"
            height={407}
            width={326}
            alt=""
            isLocal
            className="sm:h-[407px] sm:w-[326px] w-[140px] h-[160px]"
          />
        </div>
        <div className="lg:-mt-[105px] md:-mt-24 -mt-20">
          <Img
            src="/images/hero2.png"
            height={630}
            width={637}
            alt=""
            isLocal
            className="sm:h-[630px] sm:w-[637px] w-[270px] h-[260px]"
          />
        </div>
        <div className="-mb-[6%] md:block hidden">
          <Img
            src="/images/hero2.png"
            height={302}
            width={175}
            alt=""
            isLocal
            className="h-[302px] w-[175px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
