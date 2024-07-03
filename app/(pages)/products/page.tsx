import PageWrapper from "@/app/components/PageWrapper/PageWrapper";
import Products from "@/app/features/products";
import { client } from "@/app/utils/configSanity";

const getData = async (data1: any) => {
  console.log("Received search parameters:", data1);
  const query = `*[_type == "hanger" &&
  (!defined($materialType) || material->name == $materialType) &&
  (!defined($styleType) || styletype[0]->name == $styleType) &&
  (!defined($specialtyHangerType) || specialty[0]->name == $specialtyHangerType) &&
  (!defined($hookType) || hook[0]->name == $hookType)
] | order(_createdAt) {
  name, length, height,
  "images": images[].asset->url,
  "styletype": styletype[]->name,
  "material": material->name,
  "hook": hook[]->name,
  "specialty": specialty[]->name,
}`;

  const params = {
    materialType: data1?.material || null,
    styleType: data1?.style || null,
    specialtyHangerType: data1?.specialty || null,
    hookType: data1?.hook || null,
  };

  const data = await client.fetch(query, params);
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
