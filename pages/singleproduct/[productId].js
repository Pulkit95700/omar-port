/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import data from "../../config/data";
import { useRouter } from "next/router";
import Navbar from "@/components/NavigationBar/Navbar";
import Footer from "@/components/FooterPage/Footer";

const SingleProductPage = (props) => {
    const router = useRouter();
    const [countProducts, setCountProducts] = useState(1);

    const product = data.find((product) => {
        return product.id == router.query.productId;
    });

    return (
        <>
            <div className="flex px-8 gap-8 py-8 mt-8">
                <img
                    src={product?.image}
                    alt="product-pic"
                    className="w-1/2 h-96"
                />
                <div className="product-info flex flex-col gap-4 mt-14">
                    <h1 className="font-semibold font-caveat text-3xl">
                        {product?.title}
                    </h1>
                    <p className="price text-blue-400 font-semibold text-xl">
                        ${product?.price}
                    </p>
                    <p className="font-mono text-xl">{product?.description}</p>

                    <div className="poduct-counter gap-4 flex items-center">
                        <button
                            onClick={() => setCountProducts(countProducts - 1)}
                            className="w-8 h-8 bg-slate-300 font-semibold"
                        >
                            -
                        </button>
                        <span className="counter-value">{countProducts}</span>
                        <button
                            onClick={() => setCountProducts(countProducts + 1)}
                            className="w-8 h-8 bg-slate-300 font-semibold"
                        >
                            +
                        </button>
                    </div>

                    <button className="w-1/2 h-12 bg-[#323232] text-white font-semibold text-xl">
                        Add to Cart
                    </button>

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-4">
                            <p className="head">Vendor:</p>
                            <p className="text">Polo</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="head">Product Type:</p>
                            <p className="text">Bag</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="head">Tag:</p>
                            <p className="text">Handbags, bags</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProductPage;
