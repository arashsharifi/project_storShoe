import React, { useEffect, useState } from "react";

import CommonSaction from "../components/UI/CommonSaction/CommonSaction";
import Helment from "../components/Helment/Helment";
import ProductListGrid from "../components/UI/ProductListGrid";

import { FaSearch } from "react-icons/fa";
import { products } from "../assets/data/products";

export default function Shop() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    if (productData.length === 0) {
      setProductData(products);
    }
  }, []);

  function handlerFilterSelectedPro(e) {
    const fleterValue = e.target.value;
    const filterendProduct = products.filter(
      (item) => item.category === fleterValue
    );
    setProductData(filterendProduct);
  }

  function handlerSearch(e) {
    const searchItem = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem.toLowerCase())
    );
    setProductData(searchedProducts);
  }

  console.log(productData);

  return (
    <Helment title="Shop">
      <div className="flex flex-col">
        <CommonSaction title="Products" />
        <div className="flex flex-col md:flex-row justify-between w-[80%] mx-auto p-4 m-3 gap-9">
          <select
            onChange={handlerFilterSelectedPro}
            className="bg-slate-900 w-[100%] md:w-[20%] text-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5    "
          >
            <option defaultValue="">Choose product</option>
            <option value="sofa">Sofa</option>
            <option value="mobile">Mobile</option>
            <option value="chair">Chair</option>
            <option value="wireless">Wireless</option>
          </select>
          <select className="bg-slate-900 text-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100%] md:w-[20%] p-2.5    ">
            <option defaultValue>Sort By</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          <div className="flex gap-2 p-1 border-slate-950 border-2 rounded-lg items-center w-[100%] md:w-[40%] ">
            <input
              type="text"
              onChange={handlerSearch}
              className="bg-transparent  p-1 rounded-lg border-none outline-0 text-slate-900 w-full"
              placeholder="search..."
            />
            <FaSearch />
          </div>
        </div>
        <div>
          {productData.length === 0 ? (
            <h1 className="text-center p-3 text-red-600 text-lg">
              There is no product with the specifications you wrote
            </h1>
          ) : (
            <ProductListGrid data={productData} title="list products" />
          )}
        </div>
      </div>
    </Helment>
  );
}
