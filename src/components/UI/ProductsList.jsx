import React from "react";
import ProductCartSwiper from "./ProductCartSwiper";
export default function ProductsList({ data, title }) {
  return (
    <div className="flex flex-col w-full mt-8">
      <h1 className="text-3xl text-center">{title}</h1>
      <ProductCartSwiper dataSwiper={data} />
    </div>
  );
}
