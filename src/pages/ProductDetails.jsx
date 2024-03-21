import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Helment from "../components/Helment/Helment";
import CommonSaction from "../components/UI/CommonSaction/CommonSaction";
import StarRating from "../components/UI/StarRating/StarRating";
import ProductsList from "../components/UI/ProductsList";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";

import { products } from "../assets/data/products";

import { FaDollarSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

import { toast } from "react-toastify";

export default function ProductDetails() {
  const [productData, setProductData] = useState(null);
  const [sameCategory, setSameCategory] = useState(null);
  const [Rating, setRating] = useState(0);
  const [tap, setTap] = useState("");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const { id } = useParams();

  function finder() {
    const findProduct = products.find((item) => item.id === Number(id));
    setProductData(findProduct);
    const productCategory = products.filter(
      (item) => item.category === findProduct.category
    );
    setSameCategory(productCategory);
  }

  useEffect(() => {
    finder();
  }, [id]);

  const addCart = (obj) => {
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

  if (!productData) {
    return <div>Loading...</div>;
  }
  const SubmitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewMsgName = reviewMsg.current.value;
  };
  return (
    <Helment title="ProductDetails">
      <div className="flex flex-col">
        <CommonSaction title={`${productData.productName}`} />
        <div className=" w-[90%] md:w-[80%]  mx-auto flex flex-col md:flex-row gap-5 p-4 m-5 ">
          <div className=" w-[90%] mx-auto md:mx-0 md:w-[50%]">
            <img
              className="w-full h-full"
              src={productData.imageProduct}
              alt="nooot"
            />
          </div>
          <div className="flex flex-col gap-5  p-9 w-[100%] md:w-[50%]  ">
            <p className="text-xl font-bold">{productData.productName}</p>
            <div className="flex items-center justify-between w-[100%] md:w-[70%] ">
              <StarRating rate={productData.avgRating} />
              <div className="flex text-sm">
                (<p>{productData.avgRating}</p>
                <p>rating</p>)
              </div>
            </div>
            <div className="p-1 md:p-3 flex  items-center w-full  ">
              <FaDollarSign />
              <div className="flex justify-between p-1 md:p-3 items-center w-[100%]">
                <p className="text-xl">{productData.price}</p>
                <div className="text-sm md:text-xl text-gray-400 flex gap-2">
                  <p>category:</p> <p>{productData.category}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-[11px] md:text-sm ">
              {productData.shortDesc}
            </p>
            <button
              onClick={() => addCart(productData)}
              className="bg-slate-950 text-white rounded-md px-2 py-2 w-[40%] duration-200 hover:scale-110 text-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-[80%] mx-auto flex flex-col">
          <div className="flex gap-7 p-3">
            <button
              onClick={() => setTap("desc")}
              className="duration-200 hover:text-sky-700"
            >
              Description
            </button>
            <button
              onClick={() => setTap("rev")}
              className="duration-200 hover:text-sky-700"
            >
              Riview:({productData.reviews.length})
            </button>
          </div>
          <div className="flex flex-col p-4">
            {tap === "desc" ? (
              <p className="text-gray-400 p-2 text-sm border-b border-gray-400 ">
                {productData.description}
              </p>
            ) : (
              <div className="flex flex-col w-full gap-2 border-b border-slate-900 p-4 ">
                <ul className="w-full">
                  {productData.reviews && productData.reviews.length > 0 ? (
                    productData.reviews.map((item, index) => (
                      <li
                        className="text flex flex-col gap-2 w-full"
                        key={index}
                      >
                        <p className="flex gap-1 text-gray-400">
                          Rating:
                          <span className="text-orange-600">
                            ({item.rating})
                          </span>
                        </p>
                        <p className="text-sm text-gray-400">{item.text}</p>
                      </li>
                    ))
                  ) : (
                    <p>No reviews available.</p>
                  )}
                </ul>
                <div className=" flex flex-col gap-4 w-[100%] md:w-[90%]  mx-auto">
                  <h2>Leave your experience</h2>
                  <div className="flex p-1  bg-transparent border-slate-900 border-2 rounded-lg">
                    <input
                      className="outline-0 p-1 text-sm w-full"
                      type="text"
                      placeholder="Enter Name.."
                    />
                  </div>
                  <div className="flex gap-7 text-orange-600 w-[90%] mx-auto">
                    <div className="flex gap-1 items-center">
                      <span>1</span>
                      <FaStar
                        onClick={() => setRating(1)}
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="flex gap-1 items-center">
                      <span>2</span>
                      <FaStar onClick={() => setRating(2)} />
                    </div>
                    <div className="flex gap-1 items-center">
                      <span>3</span>
                      <FaStar onClick={() => setRating(3)} />
                    </div>
                    <div className="flex gap-1 items-center">
                      <span>4</span>
                      <FaStar onClick={() => setRating(4)} />
                    </div>
                    <div className="flex gap-1 items-center">
                      <span>5</span>
                      <FaStar onClick={() => setRating(5)} />
                    </div>
                  </div>

                  <textarea
                    className="border-2 border-slate-950 rounded-lg w-[80%] mx-auto p-4 "
                    name="aoutPeson"
                    id=""
                    cols="20"
                    rows="5"
                    placeholder="Review Message..."
                  ></textarea>
                  <button className="bg-slate-900 px-2 py-2 rounded-md duration-200 hover:scale-110 text-white w-[40%] md:w-[20%] ">
                    submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <ProductsList
          data={sameCategory}
          title="and also like this"
          selfElement="rigth"
        />
      </div>
    </Helment>
  );
}
