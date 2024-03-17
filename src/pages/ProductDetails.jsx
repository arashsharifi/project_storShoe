import React, { useEffect, useState } from "react";
import Helment from "../components/Helment/Helment";

import CommonSaction from "../components/UI/CommonSaction/CommonSaction";
import { useParams } from "react-router-dom";
import { products } from "../assets/data/products";

export default function ProductDetails() {
  const [productData, setProductData] = useState([]);
  const { id } = useParams();
  function finder() {
    const findProduct = products.find((item) => item.id === Number(id));
    setProductData(findProduct);
  }

  useEffect(() => {
    finder();
  }, []);

  console.log(productData);
  return (
    <Helment title="ProductDetails">
      <div className="flex flex-col">
        <CommonSaction title="sdfs" />
      </div>
    </Helment>
  );
}
