"use client";
import Img from "@/app/shared/Img";
import React from "react";
import HeroSection from "./sections/HeroSection";
import { IoIosArrowRoundForward } from "react-icons/io";
import Tailoring from "./sections/Tailoring";
import HomeTextiles from "./sections/HomeTextiles";
import BeautyAndComfort from "./sections/BeautyAndComfort";
import LatestPosts from "./sections/LatestPosts";
import SummerSale from "./sections/SummerSale";
import OurCollections from "./sections/OurCollections";

const Home = () => {
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
      <OurCollections data={data} />
      <SummerSale />
      <LatestPosts />
    </div>
  );
};

export default Home;
