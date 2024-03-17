import React, { useState } from "react";

import serviceData from "../assets/data/serviceData";
export default function Services() {
  const [datas, setDatas] = useState(serviceData);
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-7 p-5 items-center justify-between">
      {datas.map((data) => (
        <div
          key={data.id}
          style={{ backgroundColor: data.bg }}
          className=" flex flex-col gap-2 w-full h-full p-5 rounded-md shadow-lg"
        >
          <p className="text-2xl">{data.title}</p>
          <p className="text-gray-300">{data.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
