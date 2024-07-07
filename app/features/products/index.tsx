"use client";
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
  useProducts();

  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <div className="grid lg:grid-cols-12 lg:container mx-auto md:px-0 gap-x-10 !px-5">
        <Filters filters={filters} className='lg:block hidden'/>
        <ProductsSection data={data} filters={filters} />
      </div>
    </div>
  );
};

export default Products;
