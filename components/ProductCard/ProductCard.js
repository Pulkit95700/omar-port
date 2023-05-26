/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const ProductCard = (props) => {
    const router = useRouter();
    const product = props.product;
    return (
        <div className="course2-card bg-[#cecece]">
            <div className="course2-card__img-container">
                <img
                    src={product.image}
                    alt="image"
                    className="object-contain"
                />
            </div>
            <div className="course2-card__content">
                <h2 className="text-[1.9rem] font-caveat">{product.title}</h2>
                <p className="text-4xl font-bold mt-2 text-[#f23232] mb-4 font-nothing">
                    ${product.price}
                </p>

                <button
                    to={"/"}
                    className="course2-card__btn"
                    onClick={() => router.push("/products/" + product.id)}
                >
                    <span>Buy now</span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
