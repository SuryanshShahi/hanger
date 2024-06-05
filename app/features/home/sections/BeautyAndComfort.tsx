import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/button/Button";
import { SLICK_SETTING } from "@/app/utils/constant";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Slider from "react-slick";

const BeautyAndComfort = () => {
  return (
    <>
      <Slider {...SLICK_SETTING} speed={8000} className="mt-12">
        {[
          "Value Collection",
          "50% Selected Made to Measure Styles",
          "Value Collection",
          "50% Selected Made to Measure Styles",
        ]?.map((item, idx) => (
          <div key={idx} className="text-black text-2xl text-center">
            {item}
          </div>
        ))}
      </Slider>
      <div className="grid lg:grid-cols-2 gap-20 items-center place-items-center px-5">
        <div className="flex sm:flex-row flex-col w-full gap-6">
          <Img
            src="/images/hero2.jpg"
            height={700}
            width={300}
            alt=""
            isLocal
            className="lg:h-[700px] h-[250px] lg:w-[260px] w-full"
          />
          <Img
            src="/images/hero2.jpg"
            height={700}
            width={300}
            alt=""
            isLocal
            className="lg:h-[700px] h-[250px] lg:w-[260px] w-full"
          />
        </div>
        <div className="space-y-8">
          <Heading
            heading="BEAUTY & COMFORT"
            subHeading="Choose Our New Home Textile Collection"
          />
          <p className="text-secondary">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <div className="space-y-2">
            {[
              "Exclusive Offers and discounts",
              "Tips and advice from our experts",
              "Beautiful inspiration for your new home",
            ]?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-2">
                <FaCheck size={16} className="text-primary" />
                <div>{item}</div>
              </div>
            ))}
          </div>
          <Button className="text-xl py-4 !px-14 bg-primary">
            Find Out More
          </Button>
        </div>
      </div>
    </>
  );
};

export default BeautyAndComfort;
