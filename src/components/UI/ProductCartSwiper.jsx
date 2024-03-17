import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";

import { CgDollar } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ProductCartSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/CartSlice";
import { useSelector } from "react-redux";

import { toast } from "react-toastify";

export default function ProductCartSwiper({ dataSwiper }) {
  const [data, setData] = useState(dataSwiper);

  useEffect(() => {
    setData(dataSwiper);
  }, [dataSwiper]);

  const dispatch = useDispatch();
  const store = useSelector((state) => state.cart.cartItems);
  const addCart = (obj) => {
    console.log(obj.imageProduct);
    dispatch(
      cartActions.addItem({
        id: obj.id,
        productName: obj.productName,
        price: obj.price,
        imageProduct: obj.imageProduct,
      })
    );
    toast.success(`add ${obj.productName} in basket `);
  };

  return (
    <div className=" flex justify-center items-center h-[60vh] m-8">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[50%] mx-auto duration-300 hover:scale-110 ">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
