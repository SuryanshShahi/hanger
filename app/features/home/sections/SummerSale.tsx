import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/button/Button";
import React from "react";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Skirt Hanger Combo",
    price: "starting ₹649.00",
    imageSrc: "/images/products/amazon-hanger-1.jpg",
  },
  {
    id: 2,
    name: "Durable Clip Hanger Combo",
    price: "starting ₹690.00",
    imageSrc: "/images/products/amazon-hanger-2.jpg",
  },
  {
    id: 3,
    name: "Suit Hanger Combo",
    price: "starting at ₹649.00",
    imageSrc: "/images/products/amazon-hanger-3.jpg",
  },
  {
    id: 4,
    name: "Stainless Steel Layer Hanger",
    price: "starting at ₹399",
    imageSrc: "/images/products/amazon-hanger-4.jpg",
  },
];

const SummerSale = () => {
  const handleButtonClick = () => {
    window.open("https://www.amazon.in/s?k=Ganpati+Hangers&ref=bl_dp_s_web_0", "_blank");
  };

  return (
    <div className="container-sm space-y-10 px-5">
      <Heading
        heading="OUR ONLINE PRESENCE"
        subHeading="Our Amazon Shop"
        className="mx-auto text-center"
      />
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
        {products.map((product) => (
          <div key={product.id} className="space-y-4">
            <div className="bg-white p-14 h-[333px] group">
              <Img
                src={product.imageSrc}
                height={290}
                width={250}
                alt={product.name}
                isLocal
                className="duration-500 h-full w-full group-hover:scale-110"
              />
            </div>
            <div className="text-center space-y-1">
              <div className="text-black text-xl">{product.name}</div>
              <div className="text-secondary">{product.price}</div>
              <div className="flex gap-x-2 mx-auto w-fit">
                {[1, 1, 1, 1, 1].map((_, idx) => (
                  <FaStar size={16} key={idx} className="text-[#ffc007]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        className="text-xl py-4 flex justify-center mx-auto !px-14"
        onClick={handleButtonClick}
      >
        Browse All Items
      </Button>
    </div>
  );
};

export default SummerSale;
