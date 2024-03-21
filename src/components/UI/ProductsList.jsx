import React from "react";
import ProductCartSwiper from "./ProductCartSwiper";
export default function ProductsList({ data, title, selfElement }) {
  return (
    <div className="flex flex-col w-full mt-4 p-4">
      <h1
        className={`${
          selfElement === "rigth"
            ? "text-3xl text-center  md:text-left"
            : "text-3xl text-center"
        }`}
      >
        {title}
      </h1>
      <ProductCartSwiper dataSwiper={data} />
    </div>
  );
}
