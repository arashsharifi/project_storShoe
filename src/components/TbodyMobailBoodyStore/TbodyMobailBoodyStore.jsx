import React from "react";

import { CgDollar } from "react-icons/cg";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../redux/slices/CartSlice";

export default function TbodyMobailBoodyStore() {
  const storeDatas = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch();

  function deleteHandler(idObj) {
    dispatch(cartActions.deleteItem(idObj));
  }
  return (
    <>
      <div className="w-[100%] mx-auto m-3 overflow-auto rounded-lg shadow-lg hidden md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className=" w-[15%] p-3 text-lg  font-bold tracking-wide text-left ">
                image
              </th>
              <th className=" w-[30%]  p-3 text-lg  font-bold tracking-wide text-left ">
                Title
              </th>
              <th className=" w-[15%] p-3 text-lg  font-bold tracking-wide text-left ">
                Price
              </th>
              <th className="w-[15%] p-3 text-lg  font-bold tracking-wide text-left ">
                Qty
              </th>
              <th className="w-[15%] p-3 text-lg  font-bold tracking-wide text-left ">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className=" divide-gray-100 w-full ">
            {storeDatas.map((store) => (
              <Tr key={store.id} data={store} deleteHandler={deleteHandler} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden m-4">
        {storeDatas.map((store) => (
          <MoBaileTr
            key={store.id}
            data={store}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}

const Tr = ({ data, deleteHandler }) => {
  const { id, image01, productName, quantity, totalprice } = data;
  return (
    <tr>
      <td className="p-3 ">
        <div className="w-20">
          <img className="w-full h-full" src={image01} alt="nooot" />
        </div>
      </td>
      <td className="font-bold text-xl">
        <p className="ml-2">{productName}</p>
      </td>
      <td>
        <div className="flex gap-1 items-center">
          <span>
            <CgDollar className="text-slate-900 text-xl" />
          </span>
          <p>{totalprice.toFixed(2)}</p>
        </div>
      </td>
      <td>
        <div className=" ml-2 flex gap-1 items-center">
          <span>
            <MdOutlineProductionQuantityLimits className="text-slate-900 text-xl" />
          </span>
          <p className="text-xl">{quantity}</p>
        </div>
      </td>
      <td>
        <div
          onClick={() => deleteHandler(id)}
          className="flex w-20 justify-center p-3 bg-slate-900 rounded-lg shadow-lg duration-300 hover:shadow-gray-400 cursor-pointer"
        >
          <MdOutlineDeleteForever className="text-white text-xl" />
        </div>
      </td>
    </tr>
  );
};

const MoBaileTr = ({ data, deleteHandler }) => {
  const {
    id,
    image01,
    totalprice,
    productName,
    quantity,
    shortDesc,
    avgRating,
    category,
  } = data;
  return (
    <div className="bg-white border-slate-900 border-2  space-y-3 p-4 rounded-lg shadow-lg shadow-slate-400 block md:hidden">
      <div className="flex flex-col p-2 gap-3 space-x-2 text-sm ">
        <div className="w-20">
          <img
            className="w-full h-full duration-200 hover:scale-125"
            src={image01}
            alt="nooot"
          />
        </div>
        <div className="font-bold text-xl italic flex gap-2 items-center ">
          <div className="text-gray-400 text-[16px] flex gap-6">
            <p>name is :</p>{" "}
            <p className="text-sm md:text-lg text-slate-800">{productName}</p>{" "}
          </div>
        </div>

        <div className="flex gap-1 items-center   ">
          <div className="flex justify-between bg-slate-900 text-white rounded-lg items-center p-2 w-full">
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-[12px] md:text-[16px]">
                price is:
              </p>
              <div className="flex gap-1 items-center ">
                <span className="text-white text-lg md:text-lg">
                  <CgDollar />
                </span>
                <p className="text-sm md:text-xl">{totalprice}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-[12px] md:text-[16px]">
                category is:
              </p>
              <div className="flex gap-1 items-center ">
                <p className="text-sm">{category}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 items-center   ">
          <div className="flex justify-between  rounded-lg items-center p-2 w-full">
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-[12px] md:text-[16px]">
                quantity is:
              </p>
              <div className="flex gap-1 items-center ">
                <span className="text-slate-900 text-xl">
                  <MdOutlineProductionQuantityLimits />
                </span>
                <p className="text-sm">{quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-400 text-[12px] md:text-[16px]">
                avgRating is:
              </p>
              <div className="flex gap-1 items-center ">
                <p className="text-sm">({avgRating})</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  p-1 md:p-4 text-sm  italic">{shortDesc}</div>
      <div className="p-3">
        <button
          onClick={() => deleteHandler(id)}
          className="bg-slate-900 flex justify-center text-white px-2 py-1 w-20 rounded-lg shadow-lg duration-300 hover:shadow-gray-600 cursor-pointer"
        >
          <MdOutlineDeleteForever className="text-xl" />
        </button>
      </div>
    </div>
  );
};
