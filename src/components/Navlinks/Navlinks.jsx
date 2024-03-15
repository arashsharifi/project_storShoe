import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { nav_Links } from "../../assets/data/products";

export default function Navlinks() {
  const [linkDatas, setLinksDatas] = useState(nav_Links);
  const linksNotActive =
    "duration-300 hover:text-sky-700 cursor-pointer bg-gray-300 p-3 md:p-0 w-[80%] md:w-full  border-2 border-transparent hover:border-sky-700 md:hover:border-transparent md:bg-transparent rounded-lg md:rounded-none";
  const linksActive =
    "duration-300 text-sky-700 cursor-pointer bg-gray-300 p-3 md:p-0 w-[80%] md:w-full  border-2 border-sky-700 md:border-transparent hover:border-sky-700 md:hover:border-transparent md:bg-transparent rounded-lg md:rounded-none ";
  return (
    <div className=" bg-white  flex flex-col md:flex-row  gap-8 w-full mr-3  p-4">
      {linkDatas.map((linkData) => (
        <NavLink
          className={(link) => (link.isActive ? linksActive : linksNotActive)}
          key={linkData.id}
          to={linkData.path}
        >
          {linkData.display}
        </NavLink>
      ))}
    </div>
  );
}
