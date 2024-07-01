import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
import Products from "@/app/features/products";
import { client } from "@/app/utils/configSanity";

const getData = async (data1: any) => {
  const queryFilters =
    Object.keys(data1)?.length > 1
      ? `*[_type == "hanger" &&
  (!defined("${data1?.material}") || material->name == "${data1?.material}") ||
  (!defined("${data1?.style}") || styletype[0]->name == "${data1?.style}") ||
  (!defined("${data1?.specialty}") || specialty[]->name == "${data1?.specialty}") ||
  (!defined("${data1.hook}") || hook[0]->name == "${data1.hook}")
] | order(_createdAt) {
   name, length, height, 
  "images": images[].asset->url,
  "styletype": styletype[]->name,
  "material": material->name,
  "hook": hook[0]->name,
  "specialty": specialty[]->name,
}
`
      : `*[_type == "hanger"] | order(_createdAt) { name, length, height,
    "images": images[].asset->url,
    "styletype" : styletype[]->name,
    "material" : material->name,
    "height" : height->name,
    "hook" : hook[0]->name,
    "specialty" : specialty[]->name,
    }`;

  const data = await client.fetch(queryFilters);
  return data;
};
const Page = async (request: any) => {
  console.log({ urlulurl: request?.searchParams });

  const data = await getData(request?.searchParams);

  return (
    <PageWrapper>
      <Products data={data} />
    </PageWrapper>
  );
};

export default Page;
