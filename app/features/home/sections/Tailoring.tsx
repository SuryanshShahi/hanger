import Heading from "@/app/shared/Heading";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Tailoring = () => {
  const measurement = [
    "Custom Tailoring",
    "Hemmng Shortening",
    "Home Texttiles",
    "Repair & Maintenance",
  ];
  return (
    <>
      <div className="grid md:grid-cols-2 space-y-10 px-5 container-sm">
        <Heading
          heading="INDIVIDUAL TAILORING"
          subHeading="Measured, Made and Fitted by Us"
        />
        <div className="space-y-8 text-secondary">
          <p>
            Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco.
          </p>
          <p>
            Adipiscing elit, sed do euismod tempor incidunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 px-5 sm:grid-cols-2 ">
        {measurement?.map((item, idx) => (
          <div key={idx}>
            <div
              className={`space-y-10 group cursor-pointer ${
                idx === 1
                  ? "lg:border-r border-r-0"
                  : idx !== measurement?.length - 1
                  ? "sm:border-r"
                  : ""
              }
                 border-r-gray-200 pl-12`}
            >
              <IoShieldCheckmarkOutline size={80} className="text-primary" />
              <div className="text-2xl max-w-[120px]">{item}</div>
              <div className="flex items-center w-fit">
                <div className="w-0 text-nowrap overflow-hidden group-hover:w-20 duration-500">
                  Read More
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
