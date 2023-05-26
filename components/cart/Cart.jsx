import React from "react";
import CartItem from "./CartItem";
import { RxCross2 } from "react-icons/rx";

const Cart = (props) => {
  const closeCartHandler = () => {
    props.setOpenCart(false);
  };
  return (
    <div className="absolute w-full sm:w-4/5 md:w-auto top-12 left-1/2 -translate-x-1/2 bg-white rounded py-4 px-6 flex flex-col">
      <h1 className="text-xl font-semibold text-center">
        Products in your cart
      </h1>
      <button onClick={closeCartHandler} className="absolute top-2 right-2 text-2xl text-red-600">
        <RxCross2 />
      </button>
      <div className="cart-list flex flex-col gap-6 max-h-96 overflow-y-scroll mt-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <hr />
      <div className="cart-total flex justify-between items-center mt-4">
        <h1 className="text-xl font-semibold">SUBTOTAL</h1>
        <p className="text-xl font-semibold text-lime-500">$120</p>
      </div>

      <button className="checkou mt-6 transition-all duration-150 w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center justify-center text-xl">
        CHECKOUT
      </button>
    </div>
  );
};

export default Cart;
