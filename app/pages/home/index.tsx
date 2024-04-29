"use client";
import Img from "@/app/shared/Img";
import React from "react";
import HeroSection from "./sections/HeroSection";
import Heading from "@/app/shared/Heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tailoring from "./sections/Tailoring";
import HomeTextiles from "./sections/HomeTextiles";
import Slider from "react-slick";
import {
  COLLECTIONSLICK_SETTING,
  COLLECTION_SLICK_SETTING,
  SLICK_SETTING,
} from "@/app/utils/constant";
import { FaCheck, FaStar } from "react-icons/fa";
import Button from "@/app/shared/button/Button";
import BeautyAndComfort from "./sections/BeautyAndComfort";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Home = () => {
  const measurement = [
    "Custom Tailoring",
    "Hemmng Shortening",
    "Home Texttiles",
    "Repair & Maintenance",
  ];
  const data = [
    {
      title: "Drapes",
      subtitle: "asdaada asdad asdad",
    },
    {
      title: "Drapes",
      subtitle: "asdaada asdad asdad",
    },
    {
      title: "Drapes",
      subtitle: "asdaada asdad asdad",
    },
    {
      title: "Drapes",
      subtitle: "asdaada asdad asdad",
    },
  ];
  return (
    <div className="space-y-32">
      <div className="container-lg md:space-y-32 space-y-20">
        <HeroSection />
        <Tailoring />
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2">
        {data?.map((item, idx) => (
          <div key={idx} className="relative text-white group cursor-pointer">
            <Img
              src="/images/hero2.jpg"
              height={710}
              width={610}
              alt=""
              isLocal
              className="min-h-[610px]"
            />

            <div className="bg-black/40 group-hover:bg-black/60 duration-500 h-full flex flex-col justify-between w-full absolute top-0 p-6">
              <div className="text-2xl">0{idx + 1}.</div>
              <div className="space-y-2">
                <div className="text-xl">{item?.title}</div>
                <div className="text-sm">{item?.subtitle}</div>
                <IoIosArrowRoundForward className="w-[30px] h-0 group-hover:h-[30px] duration-500 group-hover:!mt-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <HomeTextiles />
      <BeautyAndComfort />
      <div className="grid grid-cols-12 bg-[#f1efe6] py-20 px-5">
        <Heading
          heading="BROWSE OUR COLLECTIONS"
          className="tracking-widest lg:col-span-4 col-span-12 font-semibold p-5"
        />
        <div className="lg:col-span-8 col-span-12 ">
          <Slider {...COLLECTION_SLICK_SETTING} speed={8000}>
            {data?.map((item, idx) => (
              <div key={idx} className={`space-y-6 group cursor-pointer group`}>
                <div className="text-[33px] font-bold max-w-[120px]">
                  {item?.title}
                </div>
                <div className="text-lg max-w-[120px]">{item?.subtitle}</div>
                <div className="flex items-center w-fit">
                  <div className="w-0 text-nowrap overflow-hidden group-hover:w-20 duration-500">
                    Read More
                  </div>
                  <IoIosArrowRoundForward className="h-[30px] w-[30px]" />
                </div>
                <div className="h-[290px] relative w-[390px] overflow-hidden">
                  <Img
                    src="/images/hero2.jpg"
                    height={290}
                    width={390}
                    alt=""
                    isLocal
                    className="h-[290px] min-w-[390px] duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 w-full h-full bg-black/20" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="container-sm space-y-10 px-5">
        <Heading
          heading="FROM THE SHOP"
          subHeading="Our Summer Sale"
          className="mx-auto text-center"
        />
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
          {[1, 1, 1, 1]?.map((item, idx) => (
            <div key={idx} className="space-y-4">
              <div className="bg-white p-14 h-[333px] group">
                <Img
                  src="/images/hero2.jpg"
                  height={290}
                  width={250}
                  alt=""
                  isLocal
                  className="duration-500 h-full group-hover:scale-110"
                />
              </div>
              <div className="text-center space-y-1">
                <div className="text-black text-xl">Chiffon Curtains</div>
                <div className="text-secondary">$165.00</div>
                <div className="flex gap-x-2 mx-auto w-fit">
                  {[1, 1, 1, 1, 1]?.map((item, idx) => (
                    <FaStar size={16} key={idx} className="text-[#ffc007]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="text-xl py-4 flex justify-center mx-auto !px-14">
          Browse All Items
        </Button>
      </div>
    </div>
  );
};

export default Home;
