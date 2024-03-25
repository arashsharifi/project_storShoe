import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Helment from "../components/Helment/Helment";
import CommonSaction from "../components/UI/CommonSaction/CommonSaction";
import notepic1 from "../../src/assets/images/1.jpg";
import notepic2 from "../../src/assets/images/2.jpg";
import TbodyMobailBoodyStore from "../components/TbodyMobailBoodyStore/TbodyMobailBoodyStore";

import { CgDollar } from "react-icons/cg";
export default function Cart() {
  const stateItems = useSelector((state) => state.cart.cartItems);
  const amount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helment title="cart">
      <div className="flex flex-col">
        <CommonSaction title="list Products" />
        {stateItems.length === 0 ? (
          <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between p-4 items-center my-7 text-2xl text-center">
            <div className="w-64">
              <img className="w-full h-full" src={notepic1} alt="nooot" />
            </div>
            <div className="w-64">
              <img className="w-full h-full" src={notepic2} alt="nooot" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row gap-10 m-8">
            <div className="w-[100%] md:w-[70%]">
              <TbodyMobailBoodyStore />
            </div>
            <div className="w-[100%] md:w-[30%]">
              <div className="flex flex-col gap-7 md:gap-3">
                <div className="flex justify-between p-2">
                  <p>subtotal</p>
                  <div className="flex gap-2 p-1 items-center">
                    <CgDollar className="text-2xl" />
                    <p className="text-xl">{amount.toFixed(2)}</p>
                  </div>
                </div>
                <p className="text-gray-400 max-w-[80%] mx-auto ">
                  taxes and shipping will calculate in checkout
                </p>
                <button className="bg-slate-900 mx-auto md:mx-0 text-white rounded-lg duration-200 hover:scale-105 px-2 py-2 w-[80%] ">
                  <Link to="/shop">continue shopping</Link>
                </button>
                <button className="bg-slate-900   mx-auto md:mx-0 text-white rounded-lg duration-200 hover:scale-105 px-2 py-2 w-[80%] ">
                  <Link to="/checkout">checkout</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Helment>
  );
}
