import Heading from "@/app/shared/Heading";
import Img from "@/app/shared/Img";
import CollectionCard from "@/app/shared/cards/CollectionCard";
import React from "react";

const LatestPosts = () => {
  const data = [
    {
      type: "Home Textiles",
      createdAt: "April 21, 2020",
      title: "Chart-Topper Designer Trends This Spring",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      type: "Home Textiles",
      createdAt: "April 21, 2020",
      title: "Chart-Topper Designer Trends This Spring",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      type: "Home Textiles",
      createdAt: "April 21, 2020",
      title: "Chart-Topper Designer Trends This Spring",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="bg-[#f1efe6] py-20">
      <div className="container-lg space-y-10 px-5">
        <Heading
          heading="ARTICLES"
          subHeading="Latest Posts"
          className="mx-auto text-center"
        />
        <div className="flex flex-wrap justify-center gap-8">
          {data?.map((item, idx) => (
            <div
              key={idx}
              className="bg-white relative group cursor-pointer sm:p-10 overflow-hidden p-6 sm:max-w-[400px] w-full"
            >
              <Img
                src="/images/hero2.jpg"
                height={350}
                width={350}
                alt=""
                isLocal
                className="absolute group-hover:opacity-100 opacity-0 group-hover:scale-110 duration-700  w-full h-full left-0 top-0"
              />

              <div className="bg-black/60 absolute left-0 group-hover:opacity-100 opacity-0 duration-500 top-0 h-full w-full" />
              <div className="space-y-5 relative z-10 group-hover:text-white">
                <div className="flex gap-x-2 items-center">
                  <div className="text-sm uppercase">{item?.type}</div>•
                  <div className="text-sm text-gray-400">{item?.createdAt}</div>
                </div>
                <CollectionCard
                  data={{ title: item?.title, subtitle: item?.description }}
                  className="space-y-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
