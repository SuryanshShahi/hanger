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
      <Slider
        {...SLICK_SETTING}
        speed={5000}
        className="mt-12 flex items-center justify-center"
      >
        {[
          "Customizable Designs",
          "Durable & Long-Lasting",
          "Exclusive Discounts",
          "Bundle Deals Available",
          "Custom Branding Options",
        ].map((item, idx) => (
          <div key={idx} className="flex items-center">
            <span className="text-black text-2xl">{item}</span>
          </div>
        ))}
      </Slider>

      <div className="grid lg:grid-cols-2 gap-16 items-center place-items-center px-20">
        <div className="flex sm:flex-row flex-col w-full gap-6">
          <Img
            src="/images/unmatched-quality-1.png"
            height={700}
            width={425}
            alt=""
            isLocal
            className="lg:h-[700px] h-[250px] lg:w-[300px] w-full object-cover"
          />
          <Img
            src="/images/unmatched-quality-2.png"
            height={700}
            width={425}
            alt=""
            isLocal
            className="lg:h-[700px] h-[250px] lg:w-[300px] w-full object-cover"
          />
        </div>
        <div className="space-y-8">
          <Heading heading="Why Choose Us" subHeading="Unmatched Quality" />
          <p className="text-secondary">
            Experience the difference that exceptional craftsmanship and
            attention to detail make. Our hangers are designed to provide
            unparalleled support and longevity, ensuring your garments stay in
            pristine condition.
          </p>
          <div className="space-y-2">
            {[
              "Superior Durability: Built to last with high-quality materials.",
              "Versatile Designs: Suitable for all types of clothing.",
              "Eco-Friendly Options: Sustainable choices for a greener future.",
              "Competitive Pricing: Affordable solutions without compromising on quality.",
            ]?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-2">
                <FaCheck size={16} className="text-primary" />
                <div>{item}</div>
              </div>
            ))}
          </div>
          <Button className="text-xl py-4 !px-14 bg-primary">
            Ready to Upgrade?
          </Button>
        </div>
      </div>
    </>
  );
};

export default BeautyAndComfort;
