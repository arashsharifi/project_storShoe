import React from "react";

export default function CommonSaction({ title }) {
  return (
    <div className="w-full h-[200px] bg-banner flex justify-center items-center bg-center bg-cover opacity-75">
      <p className="text-white text-4xl">{title}</p>
    </div>
  );
}
