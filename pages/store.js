import React from 'react'
import Footer from '@/components/FooterPage/Footer';
import data from '../config/data';
import ProductCard from '@/components/ProductCard/ProductCard';
const StorePage = () => {
  return (
    <>
        <h1 className="products-list  px-8  text-center font-semibold mt-8 text-2xl">
          Products List
        </h1>

        <div className="products-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Footer />
    </>
  )
}

export default StorePage