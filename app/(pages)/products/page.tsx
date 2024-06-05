import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
import Products from "@/app/features/products";
import { client } from "@/app/utils/configSanity";
import React from "react";

const getData = async () => {
  const query = `*[_type == "hanger"]`;
  const data = await client.fetch(query);
  return data;
};
const Page = async () => {
  const data = await getData();
  console.log({ data: data });

  return (
    <PageWrapper>
      <Products />
    </PageWrapper>
  );
};

export default Page;
