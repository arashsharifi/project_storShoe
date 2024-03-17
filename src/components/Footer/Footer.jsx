import React from "react";
import { Link } from "react-router-dom";
import { LiaPhoneSolid } from "react-icons/lia";
import { TiLocation } from "react-icons/ti";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="bg-slate-950 w-full flex flex-col">
      <div className="w-[100%] lg:w-[90%] mx-auto flex flex-col lg:flex-row gap-10 p-5 m-4">
        <div className="flex flex-col gap-4 p-2  w-[80%] lg:w-[30%] mx-auto text-center lg:text-left">
          <h1 className="text-2xl text-white">Multimart</h1>
          <p className="text-gray-400 text-sm max-w-[100%] lg:w-[90%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            enim, maiores excepturi corrupti veritatis cumque dicta a soluta
          </p>
        </div>
        <div className="flex justify-between w-[90%] lg:w-[40%] ">
          <div className="flex flex-col gap-4 text-gray-400 text-sm ">
            <h2 className="text-white font-bold text-lg">Top Categories</h2>
            <p className="duration-200  hover:scale-105 hover:text-white cursor-pointer">
              Mobile Phones
            </p>
            <p className="duration-200  hover:scale-105 hover:text-white  cursor-pointer">
              Modern Sofa
            </p>
            <p className="duration-200  hover:scale-105 hover:text-white cursor-pointer">
              Arm Chair
            </p>
            <p className="duration-200  hover:scale-105 hover:text-white  cursor-pointer">
              Smart Waches
            </p>
          </div>
          <div className="flex flex-col gap-4 text-gray-400 text-sm">
            <h2 className="text-white font-bold text-lg">UseFul Links</h2>
            <p className="duration-200  hover:scale-105 hover:text-white  cursor-pointer">
              <Link to="/shop">shop</Link>
            </p>
            <p className="duration-200  hover:scale-105 hover:text-white  cursor-pointer">
              <Link to="/cart">cart</Link>
            </p>
            <p className="duration-200  hover:scale-105 hover:text-white  cursor-pointer">
              <Link to="/login">login</Link>
            </p>
            <p className="duration-200  hover:scale-105 hover:text-white  cursor-pointer">
              <Link to="#">Privacy Policy</Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-6 text-white">
          <h4 className="text-xl font-bold">contact</h4>
          <div className="flex gap-3">
            <TiLocation className="text-xl" />
            <p>45 metri golshahr krj Iran</p>
          </div>
          <div className="flex gap-3">
            <MdEmail className="text-xl" />
            <p>Arashamirsharifi1970@gmail.com</p>
          </div>
          <div className="flex gap-3">
            <LiaPhoneSolid className="text-xl" />
            <p>+989365305248</p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center p-4">
        <p className="text-gray-400 text-[10px] lg:text-lg">
          copyright 2022 developed by Arash Amir Sharifi All rigth reserved
        </p>
      </div>
    </div>
  );
}
