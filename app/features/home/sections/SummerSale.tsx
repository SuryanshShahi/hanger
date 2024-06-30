import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/button/Button";
import React from "react";
import { FaStar } from "react-icons/fa";

const SummerSale = () => {
  return (
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
                src="/images/hero2.png"
                height={290}
                width={250}
                alt=""
                isLocal
                className="duration-500 h-full w-full group-hover:scale-110"
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
  );
};

export default SummerSale;
