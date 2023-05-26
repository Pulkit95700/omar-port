import React from "react";
import Image from "next/image";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = () => {
  return (
    <li className="w-full flex gap-4 border-b border-slate-200 py-2">
      <Image
        src={"https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"}
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg">Long Sleeve Graphic T-Shirt</h3>
          <p className="description text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
        </div>
        <p className="price text-blue-400 font-semibold text-xl">1 x $12</p>
      </div>
      <button className="btn-del text-2xl text-red-600 ml-4">
        <AiOutlineDelete />
      </button>
    </li>
  );
};

export default CartItem;
