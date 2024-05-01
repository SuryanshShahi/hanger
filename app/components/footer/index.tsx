import HoverText from "@/app/shared/HoverText";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#151617] text-white">
      <div className="grid md:grid-cols-2 py-20 container-lg px-5 gap-x-5 gap-y-10">
        <div className="text-5xl">We develop & create modern textiles</div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="space-y-6 max-w-64">
            <div className="text-xl font-semibold">Address</div>
            <p className="text-lg text-[#d2d3d5]">
              Germany — 785 15h Street, Office 478 Berlin, De 81566
            </p>
            <div className="flex gap-x-5">
              {[<FaFacebookF />, <FaTwitter />, <FaInstagram />]?.map(
                (item, idx) => (
                  <div
                    key={idx}
                    className="h-11 w-11 hover:rotate-[360deg] duration-500 cursor-pointer text-base text-white flex items-center justify-center rounded-full border border-[rgba(249,249,249,0.15)]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
          <div className="space-y-6 max-w-64">
            <div className="text-xl font-semibold">Say Hello</div>
            <HoverText text="info@email.com" />
            <div className="text-xl font-semibold">+1 840 841 25 69</div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-neutral-600" />
      <div className="flex md:flex-row gap-y-4 flex-col items-center md:justify-between justify-center container-lg px-5 py-6">
        <div className="flex gap-x-6">
          {["Our Blog", "Latest Projects", "Contact"]?.map((item, idx) => (
            <HoverText
              text={item}
              key={idx}
              styleBottomLine="!w-0 group-hover:!w-full"
            />
          ))}
        </div>
        <div className="sm:text-lg text-sm text-[#d2d3d5]">
          Design Krunch © 2024. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
