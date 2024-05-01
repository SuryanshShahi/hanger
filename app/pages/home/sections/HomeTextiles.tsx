import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import Button from "@/app/shared/button/Button";
import React, { useEffect, useState } from "react";

const HomeTextiles = () => {
  const images = ["/images/hero1.jpg", "/images/hero2.jpg"];
  const [image, setImage] = useState(0);
  useEffect(() => {
    const timerId = setTimeout(
      () => (image === 1 ? setImage(0) : setImage((old) => old + 1)),
      5000
    );
    return () => clearTimeout(timerId);
  }, [image]);

  return (
    <div className="flex lg:flex-row flex-col items-center container-sm px-5 gap-20">
      <div className="relative md:space-y-0 space-y-6 lg:max-w-[630px] w-full">
        <Img
          src={images[image]}
          height={650}
          width={530}
          alt=""
          isLocal
          className="h-[610px] w-full lg:max-w-[500px]"
        />
        <div className="p-12 bg-black md:absolute lg:text-4xl text-3xl text-center text-white bottom-0 w-full lg:max-w-[360px] lg:right-0">
          We’ll make your home a perfect place for living
        </div>
      </div>
      <div className="space-y-8">
        <Heading
          heading="HOME TEXTILES"
          subHeading="Discover Our New Cozy Collection"
        />
        <p className="text-secondary">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>
        <Button className="text-xl py-4 !px-14">View Collection</Button>
      </div>
    </div>
  );
};

export default HomeTextiles;
