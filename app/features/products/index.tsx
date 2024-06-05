"use client";
import Banner from "./sections/Banner";
import Filters from "./sections/Filters";
import ProductsSection from "./sections/ProductsSection";
import useProducts from "./useProducts";

const Products = () => {
  useProducts();
  return (
    <div className="space-y-20 mb-20">
      <Banner />
      <div className="grid grid-cols-12 container mx-auto md:px-0 px-5">
        <Filters />
        <ProductsSection />
      </div>
    </div>
  );
};

export default Products;
