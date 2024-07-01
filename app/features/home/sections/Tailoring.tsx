import Heading from "@/app/shared/Heading";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Tailoring = () => {
  const measurements = [
    {
      title: "Premium Quality",
      img: "images/icons/Premium.png",
    },
    {
      title: "Elegant Design",
      img: "images/icons/Elegant.png",
    },
    {
      title: "Long-lived Durability",
      img: "images/icons/Durable.png",
    },
    {
      title: "Versatile Use",
      img: "images/icons/Versatile.png",
    },
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 space-y-10 px-5 container-sm">
        <Heading
          heading="ELEGANCE MEETS DURABILITY"
          subHeading="Perfect Hangers for Every Use"
        />
        <div className="space-y-8 text-secondary">
          <p>
            Our hangers are crafted with the highest quality materials to ensure they provide long-lasting support for your garments.
          </p>
          <p>
            Designed for both functionality and style, our hangers will keep your wardrobe organized and pristine. Discover the perfect balance of elegance and durability with our range of hangers.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 px-5 sm:grid-cols-2">
        {measurements?.map((item, idx) => (
          <div key={idx}>
            <div
              className={`space-y-10 group cursor-pointer ${
                idx === 1
                  ? "lg:border-r border-r-0"
                  : idx !== measurements?.length - 1
                  ? "sm:border-r"
                  : ""
              }
                 border-r-gray-200 pl-12`}
            >
              <img src={item.img} alt={item.title} className="w-20 h-20 object-cover" />
              <div className="text-2xl max-w-[120px]">{item.title}</div>
              <div className="flex items-center w-fit">
                <div className="w-0 text-nowrap overflow-hidden group-hover:w-20 duration-500">
                  View All
                </div>
                <IoIosArrowRoundForward className="h-[30px] w-[30px]" />
              </div>
            </div>
            <div
              className={`lg:border-b-0 border-b my-12 ${
                idx === 3 ? "hidden" : "block"
              }`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Tailoring;
