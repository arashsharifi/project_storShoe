import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { CgDollar } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";

import Helment from "../components/Helment/Helment";
import ProductsList from "../components/UI/ProductsList";
import ProductListGrid from "../components/UI/ProductListGrid";

import hero from "../../src/assets/images/hero-img.png";
import offerPic from "../../src/assets/images/counter-timer-img.png";

import { products } from "../assets/data/products";
import Services from "../services/Services";
import Clock from "../components/UI/Clock";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";

import { toast } from "react-toastify";

export default function Home() {
  const [trendingData, setTrendingData] = useState([]);
  const [sale, setSale] = useState([]);
  const [mobile, setmobile] = useState([]);
  const [wireless, setWireless] = useState([]);
  const [watch, setWtch] = useState([]);
  const newYear = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredSaleProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredwirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredWatchProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingData(filteredTrendingProducts);
    setSale(filteredSaleProducts);
    setmobile(filteredMobileProducts);
    setWireless(filteredwirelessProducts);
    setWtch(filteredWatchProducts);
  }, []);

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
    <Helment title={"home"}>
      <div className="w-full flex flex-col">
        <div className="bg-sky-100 w-full">
          <div className="flex flex-col-reverse md:flex-row justify-between w-[80%] mx-auto  py-14">
            <div className="flex flex-col gap-4 mt-4 md:mt-0">
              <p>
                Trending product in <span>{newYear}</span>
              </p>
              <h1 className="text-3xl font-bold text-gray-900">
                make your interior more minimalistic &modern
              </h1>
              <p className="max-w-[90%] text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque a provident culpa?
              </p>
              <button className="bg-gray-900 text-white  rounded-md w-[30%] md:w-[20%] py-2 px-2 duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap ">
                <Link to="/shop">shop now</Link>
              </button>
            </div>
            <div className="w-[70%] md:w-[50%]  mx-auto md:mx-0 ">
              <img className="w-full h-full" src={hero} alt="noot" />
            </div>
          </div>
        </div>
        <div className="flex mx-auto  w-[90%]">
          <Services />
        </div>
        <ProductsList data={trendingData} title="best Trending products" />
        <ProductListGrid data={sale} title="best sale products" />
        <div className="bg-slate-900  w-full flex items-center">
          <div className="flex flex-col-reverse md:flex-row w-[80%] mx-auto items-center justify-between">
            <div className="flex flex-col gap-4 w-[80%] md:w-[50%] text-center md:text-left  mb-10">
              <p className="text-white">limited offers</p>
              <p className="text-white font-bold text-xl">Quality Armchair</p>
              <Clock />
              <button className="bg-white rounded-md py-2 px-2 w-[60%] md:w-[20%] self-center md:self-start text-slate-950 duration-300 hover:scale-110">
                <Link to="/shop">visit store</Link>
              </button>
            </div>
            <div className="flex  w-[50%] justify-end   ">
              <div className="w-[380px]">
                <img className="h-full w-full" src={offerPic} alt="noot" />
              </div>
            </div>
          </div>
        </div>
        <ProductsList data={mobile} title="most best mobail offers" />
        <ProductsList data={wireless} title="this is best wireless offers" />
        <div className="w-full flex flex-col">
          <h2 className="text-yellow-600 text-2xl uppercase text-center my-3">
            papular category product
          </h2>
          <div className="w-[90%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9  mx-auto border-2 border-transparent md:border-yellow-600  rounded-lg  md:shadow-lg p-3 m-6">
            {watch.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center  p-3 bg-yellow-500 md:bg-transparent text-white md:text-black rounded-lg shadow-xl md:shadow-none    "
              >
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
                  <p className="font-bold text-md">{item.productName}</p>
                </div>
                <p className="text-white md:text-gray-400  self-start pl-5">
                  {item.category}
                </p>
                <div className="flex w-full justify-between">
                  <div className="flex gap-1 items-center">
                    <CgDollar className="text-xl text-white md:text-gray-900" />
                    <p className="text-xl text-white md:text-gray-900">
                      {item.price}
                    </p>
                  </div>

                  <div
                    onClick={() => addCart(item)}
                    className="w-8 duration-200 hover:scale-125 cursor-pointer"
                  >
                    <IoAddCircle className="w-full h-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Helment>
  );
}
