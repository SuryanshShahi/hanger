"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
const Products = ({ data, filters }: { data: Root[]; filters: any }) => {
  const router = useRouter();
  useProducts();
  useEffect(() => {
    router.push("/products?material=Plastic");
  }, []);
  console.log({ filters1: filters });

  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <div className="grid lg:grid-cols-12 container mx-auto md:px-0 px-5">
        <Filters filters={filters} />
        <ProductsSection data={data} />
      </div>
    </div>
  );
};

export default Products;
