import React from "react";
import Helment from "../components/Helment/Helment";
import CommonSaction from "../components/UI/CommonSaction/CommonSaction";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { CgDollar } from "react-icons/cg";
// totalQuantity: 0,
// totalAmount: 0,
export default function Checkout() {
  const qty = useSelector((state) => state.cart.totalQuantity);
  const amount = useSelector((state) => state.cart.totalAmount);
  const shipping = 30;
  return (
    <Helment title="checkout">
      <div className="flex flex-col">
        <CommonSaction title="user product" />
        <div className="flex gap-4 p-3 m-8">
          <div className="w-full flex flex-col gap-3">
            <h1 className="text-2xl font-bold">Billing Information</h1>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center p-2">
              <form
                action="#"
                className="flex flex-col gap-3 w-[100%] md:w-[60%]"
              >
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="Enter your name"
                />
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="Enter your email"
                />
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="phone Number"
                />
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="Street address"
                />
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="City"
                />
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="Postal code"
                />
                <input
                  type="text"
                  className="bg-transparent border outline-0 border-gray-400 rounded-lg p-3"
                  placeholder="Country"
                />
              </form>
              <div className="bg-slate-900 text-white w-[90%] md:w-[30%] self-start shadow-xl p-4 rounded-lg">
                <div className="w-full flex justify-between items-center p-2">
                  <p>Total Qty:</p>
                  <div className="flex items-center gap-3">{qty} items</div>
                </div>
                <div className="w-full flex justify-between items-center p-2">
                  <p>subtotal</p>
                  <div className="flex items-center gap-3">
                    <CgDollar /> {amount}
                  </div>
                </div>
                <div className="w-full flex justify-between items-center p-2 border-b border-white">
                  <div className="flex flex-col">
                    <p>shipping</p>
                    <p>free shipping</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CgDollar /> {shipping}
                  </div>
                </div>
                <div className="w-full flex justify-between items-center p-2 mt-3 ">
                  <p className="text-2xl">Total Cost:</p>

                  <div className="flex items-center gap-3">
                    <CgDollar /> {amount + shipping}
                  </div>
                </div>
                <button className="bg-white text-black rounded-lg duration-200 hover:scale-110 px-2 py-2 w-[80%]   ">
                  <Link to="/singup"> place on order</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helment>
  );
}
