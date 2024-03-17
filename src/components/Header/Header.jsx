import React, { useState } from "react";

import { Link } from "react-router-dom";

import { CiShoppingBasket } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GrBasket } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import { Gi3DMeeple } from "react-icons/gi";

import Navlinks from "../Navlinks/Navlinks";

import iconUser from "../../assets/images/user-icon.png";

import { useSelector } from "react-redux";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFunc() {
    setIsOpen(!isOpen);
  }
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(totalQuantity);
  return (
    <nav className="bg-white z-50 shadow-xl fixed left-0 right-0">
      <div className="flex my-8 items-center justify-between md:justify-around ">
        <div className="flex items-center p-2 gap-2  ">
          <CiShoppingBasket className="text-3xl" />
          <p className="font-bold text-xl text-gray-800 uppercase">store</p>
        </div>
        <ul className="md:flex hidden gap-2  w-[30%] justify-between ">
          <Navlinks />
        </ul>
        <div className="flex gap-5 p-2">
          <div className="flex items-center  gap-5 p-2">
            <div className=" relative  ">
              <Gi3DMeeple className="text-2xl text-gray-900  " />
              <span className="bg-gray-900 w-6 h-6 text-white absolute top-[-21px] right-[-10px] flex items-center justify-center rounded-full text-sm ">
                0
              </span>
            </div>
            <div className=" relative  ">
              <GrBasket className="text-2xl text-gray-900  " />
              <span className="bg-gray-900 w-6 h-6 text-white absolute top-[-21px] right-[-10px] flex items-center justify-center rounded-full text-sm ">
                {totalQuantity}
              </span>
            </div>
          </div>
          <div className="w-10 h-10  cursor-pointer duration-150 hover:scale-125 hidden md:block ">
            <img className="w-full h-full" src={iconUser} alt="noot" />
          </div>
          <div
            onClick={() => toggleFunc()}
            className="text-3xl mt-3 md:hidden z-50 "
          >
            {isOpen == false ? (
              <RxHamburgerMenu className="cursor-pointer " />
            ) : (
              <ImCancelCircle className="cursor-pointer " />
            )}
          </div>
        </div>
        {/* mobail responsive */}
        <ul
          className={`md:hidden bg-white   flex flex-col gap-0 md:gap-12 absolute w-full h-[100vh] top-0   py-24 
          duration-500 ${isOpen ? "left-0" : "left-[-100%]"} `}
        >
          <div className="flex flex-col gap-2">
            <div className="flex w-full justify-between ">
              <div className="w-16 ml-4">
                <img className="w-full h-full" src={iconUser} alt="noot" />
              </div>
            </div>
            <h1 className="text-sm ml-3  ">foody foods</h1>
          </div>
          <Navlinks />
          <div className="py-5 bg-white flex flex-col gap-4 p-4">
            <div className="flex gap-1">
              <span className="text-xl">
                <FaPhone className="text-red-700" />
              </span>
              <p className="text-sm"> 09365305248</p>
            </div>
            <div className="flex gap-1">
              <span className="text-xl">
                <MdEmail className="text-red-700" />
              </span>
              <p className="text-sm"> ArashSharfi1970@gmail.com</p>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
}
