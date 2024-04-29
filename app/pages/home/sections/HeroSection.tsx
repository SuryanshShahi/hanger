import Img from "@/app/shared/Img";
import React from "react";

const HeroSection = () => {
  return (
    <div className="pb-20 z-10">
      <div className="text-primary xl:text-[200px] lg:text-[172px] md:text-[100px] text-[77px] z-10 relative space-y-4">
        <div className="uppercase">Curtains</div>
        <div className="uppercase w-fit md:ml-auto leading-7">& Blinds</div>
      </div>
      <div className="flex items-end justify-between space-x20">
        <div className="space-y-10 -mb-[6%]">
          <div className="text-[13px] uppercase leading-7 tracking-widest">
            Make your home look<br></br> it&apos;s very best , no compromise.
            <br></br>You deserve it
          </div>
          <Img
            src="/images/hero2.jpg"
            height={407}
            width={326}
            alt=""
            isLocal
            className="h-[407px] w-[326px]"
          />
        </div>
        <div className="-mt-[105px]">
          <Img
            src="/images/hero2.jpg"
            height={630}
            width={637}
            alt=""
            isLocal
            className="h-[630px] w-[637px]"
          />
        </div>
        <div className="-mb-[6%] md:block hidden">
          <Img
            src="/images/hero2.jpg"
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
