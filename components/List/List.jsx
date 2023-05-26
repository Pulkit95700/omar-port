import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import data from "../../config/data";

const List = (props) => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default List;
