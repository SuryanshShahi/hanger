import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/button/Button";
import React, { useEffect, useState } from "react";

const HomeTextiles = () => {
  const images = ["/images/hero1.jpg", "/images/hero2.png"];
  const [image, setImage] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(
      () => (image === 1 ? setImage(0) : setImage((old) => old + 1)),
      5000
    );
    return () => clearTimeout(timerId);
  }, [image]);

  return (
    <div className="flex lg:flex-row flex-col items-center container-sm px-5 gap-20 ">
      <div className="relative md:space-y-0 space-y-6 lg:max-w-[630px] w-full ">
        <Img
          src={images[image]}
          height={650}
          width={530}
          alt=""
          isLocal
          className="h-[610px] w-full lg:max-w-[500px]"
        />
        <div className="p-12 bg-black md:absolute lg:text-4xl text-3xl text-center text-white bottom-0 w-full lg:max-w-[360px] lg:right-0">
        Elegant Solutions for Every Closet
        </div>
      </div>
      <div className="space-y-8">
        <Heading
          heading="Style Meets Function"
          subHeading="Explore the Perfect Hangers for Your Closet"
        />
        <p className="text-secondary">
        Discover the versatility and quality of our hanger collections, meticulously crafted to meet diverse wardrobe needs. Our range combines functionality with sleek design, ensuring your garments are always impeccably presented.
        </p>
        <ul>
          <li><strong>Premium Materials:</strong> Crafted from durable wood and high-grade plastics.</li>
          <li><strong>Customizable Options:</strong> Tailor-made solutions to suit every closet size and style preference.</li>
        </ul>
        <Button className="text-xl py-4 !px-14">View Collection</Button>
      </div>
    </div>
  );
};

export default HomeTextiles;
