import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import CollectionCard from "@/app/shared/cards/CollectionCard";
import { COLLECTION_SLICK_SETTING } from "@/app/utils/constant";
import React from "react";
import Slider from "react-slick";

const OurCollections = ({
  data,
}: {
  data: { title: string; subtitle: string }[];
}) => {
  return (
    <div className="grid grid-cols-12 bg-[#f1efe6] py-20 px-5">
      <Heading
        heading="BROWSE OUR COLLECTIONS"
        className="tracking-widest lg:col-span-4 col-span-12 font-semibold p-5"
      />
      <div className="lg:col-span-8 col-span-12 ">
        <Slider {...COLLECTION_SLICK_SETTING} speed={8000}>
          {data?.map((item, idx) => (
            <div key={idx} className="space-y-6 group">
              <CollectionCard
                data={{ title: item?.title, subtitle: item?.subtitle }}
              />
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
  );
};

export default OurCollections;
