"use client";
import { urlFor } from "@/app/utils/configSanity";
import Banner from "./sections/Banner";
import Filters from "./sections/Filters";
import ProductsSection from "./sections/ProductsSection";
import useProducts from "./useProducts";
export interface Root {
  specialty: Specialty[];
  _createdAt: string;
  _rev: string;
  _id: string;
  images: Image[];
  hook: Hook[];
  material: Material;
  _type: string;
  name: string;
  _updatedAt: string;
  styletype: Styletype[];
}

export interface Specialty {
  _ref: string;
  _type: string;
  _key: string;
}

export interface Image {
  _key: string;
  asset: Asset;
  _type: string;
}

export interface Asset {
  _ref: string;
  _type: string;
}

export interface Hook {
  _ref: string;
  _type: string;
  _key: string;
}

export interface Material {
  _ref: string;
  _type: string;
}

export interface Styletype {
  _key: string;
  _ref: string;
  _type: string;
}

const Products = (data: { data: Root[] }) => {
  useProducts();
  console.log(data?.data);
  const products = data?.data
    ?.map((e) => ({
      image:
        e?.images?.[0]?.asset?._ref &&
        urlFor(e?.images?.[0]?.asset?._ref)?.url(),
      name: e?.name,
      type: e?._type,
    }))
    .filter((r) => r);

  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <div className="grid lg:grid-cols-12 container mx-auto md:px-0 px-5">
        <Filters />
        <ProductsSection data={products} />
      </div>
    </div>
  );
};

export default Products;
