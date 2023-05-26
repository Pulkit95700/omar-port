import React, { useState } from "react";
import Image from "next/image";
import data from "../../../config/data";
import { useRouter } from "next/router";
import Footer from "../../../components/Footer.jsx";

const SingleProductPage = (props) => {
    const router = useRouter();
    const [countProducts, setCountProducts] = useState(1);

    const product = data.find((product) => {
        return product.id == router.query.productId;
    });

    return (
        <>
            <div className="single-product flex px-8 gap-10 py-8 pt-8 flex-col md:flex-row">
                <div className="basis-[40%]">
                    <div className="w-[90%] pt-12">
                        <Image
                            src={product?.image}
                            alt="product-pic"
                            width={500}
                            height={500}
                            className="w-full h-fit object-contain"
                        />
                    </div>
                </div>
                <div className="product-info flex flex-col gap-4 mt-14 basis-[60%]">
                    <h1 className="font-semibold font-caveat text-5xl">
                        {product?.title}
                    </h1>
                    <p className="price text-[#f23232] font-semibold text-6xl font-nothing">
                        ${product?.price}
                    </p>
                    <p className="text-4xl font-nanum">
                        {product?.description}
                    </p>

                    <div className="poduct-counter gap-4 flex items-center">
                        <button
                            onClick={() => setCountProducts(countProducts - 1)}
                            className="w-8 h-8 bg-white font-semibold text-xl"
                        >
                            -
                        </button>
                        <span className="counter-value text-3xl font-nanum font-semibold">
                            {countProducts}
                        </span>
                        <button
                            onClick={() => setCountProducts(countProducts + 1)}
                            className="w-8 h-8 bg-white font-semibold text-xl"
                        >
                            +
                        </button>
                    </div>
                    <button className="w-[300px] h-12 bg-[#323232] text-white font-semibold text-xl uppercase font-raleway rounded-md">
                        Add to Cart
                    </button>

                    <div className="flex flex-col gap-2 font-nanum text-4xl">
                        <div className="flex gap-4">
                            <p className="head font-semibold">Vendor:</p>
                            <p className="text">Polo</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="head font-semibold">Product Type:</p>
                            <p className="text">Bag</p>
                        </div>
                        <div className="flex gap-4">
                            <p className="head font-semibold">Tag:</p>
                            <p className="text">Handbags, bags</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SingleProductPage;
