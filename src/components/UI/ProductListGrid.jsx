import React from "react";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

export default function ProductListGrid({ data, title }) {
  return (
    <div className="flex flex-col w-full mt-8">
      <h1 className="text-3xl text-center">{title}</h1>
      <ProductsGrid dataSwiper={data} />
    </div>
  );
}
