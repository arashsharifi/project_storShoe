import React, { useEffect } from "react";

import { useRef, useState } from "react";
// Import Swiper React components

import { CgDollar } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../../../redux/slices/CartSlice";

import { toast } from "react-toastify";

import { Link } from "react-router-dom";

export default function ProductsGrid({ dataSwiper }) {
  const [data, setData] = useState(dataSwiper);

  useEffect(() => {
    setData(dataSwiper);
  }, [dataSwiper]);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.cart.cartItems);

  const addCart = (obj) => {
    dispatch(
      cartActions.addItem({
        id: obj.id,
        productName: obj.productName,
        price: obj.price,
        imageProduct: obj.imageProduct,
        shortDesc: obj.shortDesc,
        avgRating: obj.avgRating,
        category: obj.category,
      })
    );
    toast.success(`add ${obj.productName} in basket `);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[95%] gap-7 mx-auto p-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center border border-gray-950 p-3 rounded-lg "
        >
          <div className="w-[50%] mx-auto duration-300 hover:scale-110 cursor-pointer ">
            <Link className="w-full h-full" to={`/shop/${item.id}`}>
              <img
                className="w-full h-full"
                src={item.imageProduct}
                alt="nooot"
              />
            </Link>
          </div>
          <div className="flex p-3 ">
            <p className="font-bold text-2xl">{item.productName}</p>
          </div>
          <p className="text-gray-400 self-start pl-5">{item.category}</p>
          <div className="flex w-full justify-between">
            <div className="flex gap-1 items-center">
              <CgDollar className="text-2xl text-gray-900" />
              <p className="text-2xl text-gray-900">{item.price}</p>
            </div>

            <div
              onClick={() => addCart(item)}
              className="w-10 duration-200 hover:scale-125 cursor-pointer"
            >
              <IoAddCircle className="w-full h-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
