import React, { useState } from "react";
import List from "@/components/List/List";
import Footer from "@/components/Footer";

const ProductsPage = () => {
    const [maxPrice, setMaxPrice] = useState(1000);
    const [sortBy, setSortBy] = useState("asc");
    // const router = useRouter();
    // const category = router.query.category;
    const category = [];
    return (
        <>
            <div className="products-page flex flex-col md:flex-row relative font-raleway md:pt-[4rem]">
                <div className="products-page__left flex flex-col gap-4 md:sticky md:w-[500px] md:h-[100vh] top-[50px] p-6 pt-[4rem] text-white">
                    <div className="filter-category flex flex-col gap-4 items-center md:items-start mb-4">
                        <h1 className="text-3xl font-bold">Categories</h1>
                        <div className="input__item flex gap-2">
                            <input
                                type="checkbox"
                                name="category"
                                id="category"
                            />
                            <label htmlFor="category" className="text-lg">
                                Category 1
                            </label>
                        </div>
                        <div className="input__item flex gap-2">
                            <input
                                type="checkbox"
                                name="category"
                                id="category"
                            />
                            <label htmlFor="category" className="text-lg">
                                Category 2
                            </label>
                        </div>
                    </div>
                    <div className="filter-category flex flex-col items-center md:items-start gap-4 mb-4">
                        <h1 className="text-2xl font-bold">Filter By Price</h1>
                        <div className="input__item flex items-center gap-2">
                            <span>0</span>
                            <input
                                type="range"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                                name="price"
                                id="price"
                                min={0}
                                max={1000}
                            />
                            <span>{maxPrice}</span>
                        </div>
                    </div>
                    <div className="filter-category items-center md:items-start flex flex-col gap-4">
                        <h1 className="text-2xl font-bold">Sort By</h1>
                        <div className="input__item flex gap-2">
                            <input
                                id="asc"
                                value="asc"
                                onChange={(e) => setSortBy(e.target.value)}
                                type="radio"
                                name="asc"
                            />
                            <label htmlFor="sort" className="text-lg">
                                Price: Low to High
                            </label>
                        </div>
                        <div className="input__item flex gap-2">
                            <input
                                type="radio"
                                name="desc"
                                value="desc"
                                onChange={(e) => setSortBy(e.target.value)}
                                id="desc"
                            />
                            <label htmlFor="sort" className="text-lg">
                                Price: High to Low
                            </label>
                        </div>
                    </div>
                </div>
                <div className="products-page__right flex justify-center py-8">
                    <List
                        maxPrice={maxPrice}
                        sortBy={sortBy}
                        category={category}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductsPage;
