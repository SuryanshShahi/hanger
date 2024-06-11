import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
import Products from "@/app/features/products";
import { client } from "@/app/utils/configSanity";
import React from "react";

const getData = async () => {
  const query = `*[_type == "hanger"] | order(_createdAt) {name, 
    "images": images[].asset->url,
    "styletype" : styletype[]->name,
    "material" : material->name,
    "hook" : hook[0]->name,
    "specialty" : specialty[]->name,
    }`;
  // const query = '*[_type == "hanger"]';
  const data = await client.fetch(query);
  return data;
};
const Page = async () => {
  const data = await getData();

  return (
    <PageWrapper
      seo={{
        metaTitle: "",
        metaDescription: "",
      }}
    >
      <Products data={data} />
    </PageWrapper>
  );
};

export default Page;
