import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
import Products from "@/app/features/products";
import { client } from "@/app/utils/configSanity";

const getData = async (data1: any) => {
  console.log({ asdasda: data1 });

  const query = `*[_type == "hanger" &&
  (!defined("${data1?.material}") || material->name == "${data1?.material}") ||
  (!defined("${data1?.style}") || styletype[0]->name == "${data1?.style}") ||
  (!defined("${data1?.specialty}") || specialty[0]->name == "${data1?.specialty}") ||
  (!defined("${data1.hook}") || hook[0]->name == "${data1.hook}")
] | order(_createdAt) {
   name, length, height, 
  "images": images[].asset->url,
  "styletype": styletype[]->name,
  "material": material->name,
  "hook": hook[]->name,
  "specialty": specialty[]->name,
}
`;

  const data = await client.fetch(query);
  return data;
};
const getFilters = async () => {
  const styleTypes = `*[_type == "styleType"] | order(_createdAt){ name }`;
  const specialtyType = `*[_type == "specialtyHangerType"] | order(_createdAt){ name }`;
  const materialType = `*[_type == "materialType"] | order(_createdAt){ name }`;
  const hookTypes = `*[_type == "hookType"] | order(_createdAt){ name }`;
  const filters = [styleTypes, specialtyType, materialType, hookTypes];
  const res1 = await client.fetch(filters[0]);
  const res2 = await client.fetch(filters[1]);
  const res3 = await client.fetch(filters[2]);
  const res4 = await client.fetch(filters[3]);
  return {
    styleTypes: res1.map((e: any) => e?.name),
    specialtyType: res2.map((e: any) => e?.name),
    materialType: res3.map((e: any) => e?.name),
    hookTypes: res4.map((e: any) => e?.name),
  };
};
const Page = async (request: any) => {
  const data = await getData(request?.searchParams);
  const filters = await getFilters();

  return (
    <PageWrapper>
      <Products data={data} filters={filters} />
    </PageWrapper>
  );
};

export default Page;
