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
      title: "Top Wear",
      subtitle: "Find the perfect hangers to keep your tops wrinkle-free and organized.",
      image: "/images/top-wear-hanger-category.png"
    },
    {
      title: "Accessories",
      subtitle: "Stylish and practical hangers for all your accessory needs",
      image: "/images/accessories-hanger-category.png"
    },
    {
      title: "Kids Wear",
      subtitle: "Durable and fun hangers designed specifically for children's clothing.",
      image: "/images/kids-wear-hanger-category.png"
    },
    {
      title: "Outerwear",
      subtitle: "Strong and sturdy hangers to support your heavy outerwear.",
      image: "/images/outerwear-hanger-category.png"
    },
    {
      title: "Bottom Wear",
      subtitle: "Specialized hangers to keep your pants and skirts neatly hung.",
      image: "/images/bottom-wear-hanger-category.png"
    },
    {
      title: "Intimate Wear",
      subtitle: "Delicate and secure hangers for your intimate wear collection.",
      image: "/images/intimate-wear-hanger-category.png"
    },
  ];
  return (
    <div className="space-y-32">
      <div className="container-lg md:space-y-32 space-y-20">
        <HeroSection />
        <Tailoring />
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2">
        {data?.map((item, idx) => (
          <div key={idx} className="relative text-white group cursor-pointer">
            <Img
              src={item?.image}
              height={710}
              width={660}
              alt=""
              isLocal
              className="w-full h-full object-cover"
            />

            <div className="bg-black/40 group-hover:bg-black/60 duration-500 h-full flex flex-col justify-between w-full absolute top-0 p-6 object-cover">
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
