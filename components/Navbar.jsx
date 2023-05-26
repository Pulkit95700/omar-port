import { BsFillCartFill } from "react-icons/bs";
import Link from "next/link";
import { Modal } from "@mui/material";
import Cart from "./cart/Cart";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false);
    const isServices = useRouter().pathname === "/services";
    const isProducts = useRouter().pathname === "/products";
    const isSingleProduct = useRouter().pathname.includes("/products/");

    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar z-[100] bg-transparent w-full md:fixed top-0 transition-all ${
                show ? "backdrop-blur-xl" : ""
            }`}
        >
            <Link href={"/"}>
                <h1
                    className={`text-6xl font-nanum italic cursor-pointer text-center text-[#FF0000] md:hidden  ${
                        isServices || isProducts ? "text-white" : ""
                    }`}
                >
                    omar
                </h1>
            </Link>
            <div className="flex justify-evenly md:justify-between items-center px-3 py-3 max-md:p-1 font-raleway text-xl font-bold text-[#FF0000]">
                <div className="flex">
                    {/* <Link
            href="/work"
            className={`transition-all duration-200 hover:${
              isServices || isProducts ? "text-black" : "text-white"
            } hover:bg-white p-4`}
          >
            Work
          </Link> */}
                    <Link
                        href="/services"
                        className={`transition-all duration-200 ${
                            isServices || isProducts
                                ? "text-white hover:text-black"
                                : ""
                        } hover:bg-white p-4 max-md:p-2`}
                    >
                        Services
                    </Link>
                    <Link
                        href="/work"
                        className={`transition-all duration-200 ${
                            isServices || isProducts
                                ? "text-white hover:text-black"
                                : ""
                        } hover:bg-white p-4 max-md:p-2`}
                    >
                        About
                    </Link>
                </div>
                <Link href={"/"} className="hidden md:block">
                    <h1
                        className={`text-6xl font-nanum font-medium  italic cursor-pointer ${
                            isServices || isProducts ? "text-white" : ""
                        }`}
                    >
                        omar
                    </h1>
                </Link>
                <div className="flex">
                    <Link
                        href="/products"
                        className={`transition-all duration-200 ${
                            isServices || isProducts
                                ? "text-white hover:text-black"
                                : ""
                        } hover:bg-white p-4 max-md:p-2`}
                    >
                        Store
                    </Link>
                    <div
                        onClick={() => setOpenCart(true)}
                        className={`transition-all duration-200 ${
                            isServices || isProducts
                                ? "text-white hover:text-black"
                                : ""
                        } hover:bg-white p-4 flex items-center justify-center max-md:p-2`}
                    >
                        <BsFillCartFill />
                    </div>
                    <Modal open={openCart} onClose={() => setOpenCart(false)}>
                        <Cart setOpenCart={setOpenCart} />
                    </Modal>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
