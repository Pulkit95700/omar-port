import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Image from "next/image";

const index = () => {
    return (
        <>
            <div className="services min-h-screen p-2 md:p-10 w-full text-white flex flex-col items-center pt-[2rem] md:pt-[4rem]">
                <div className="flex flex-col justify-start mb-[40px] md:mb-[80px] relative">
                    <h1 className="max-md:text-[3rem] text-[6rem] font-nanum font-bold">
                        FILM DIRECTING
                    </h1>
                    <div className="flex gap-[20px] md:gap-[80px] max-md:flex-col max-md:justify-center">
                        <Image
                            src="https://rvu.edu.in/wp-content/uploads/2022/03/The-Science-of-Filmmaking-813X451-1.png"
                            alt=""
                            width={400}
                            height={400}
                            className="w-[200px] md:w-[400px] rounded-3xl h-fit object-cover"
                        />
                        <div className="max-w-[500px]">
                            <p className="max-md:text-2xl text-4xl font-nanum ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Unde blanditiis fugit quam
                                facere modi ad corporis mollitia quaerat est
                                dolorum doloribus, voluptatem iste sunt.
                                Consequatur dolor harum dolores aperiam ullam.
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/assets/images/diamond.png"
                        alt=""
                        width={200}
                        height={200}
                        className="absolute invert w-[200px] h-fit left-0 top-[400px] -rotate-6 max-md:hidden"
                    />
                </div>
                <div className="flex flex-col md:items-end mb-[40px] md:mb-[80px] relative">
                    <h1 className="max-md:text-[3rem] text-[6rem] font-nanum font-bold">
                        MODELING
                    </h1>
                    <div className="flex gap-[20px] md:gap-[80px] max-md:flex-col max-md:justify-center">
                        <div className="max-w-[500px]">
                            <p className="max-md:text-2xl text-4xl font-nanum">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Unde blanditiis fugit quam
                                facere modi ad corporis mollitia quaerat est
                                dolorum doloribus, voluptatem iste sunt.
                                Consequatur dolor harum dolores aperiam ullam.
                            </p>
                        </div>
                        <Image
                            src="https://rvu.edu.in/wp-content/uploads/2022/03/The-Science-of-Filmmaking-813X451-1.png"
                            alt=""
                            width={400}
                            height={400}
                            className="w-[200px] md:w-[400px] rounded-3xl object-cover"
                        />
                    </div>
                    <Image
                        src="/assets/images/crown.png"
                        alt=""
                        width={200}
                        height={200}
                        className="absolute invert w-[200px] h-fit right-0 top-[420px] rotate-[30deg] max-md:hidden"
                    />
                </div>
                <div className="flex flex-col justify-start mb-[40px] md:mb-[80px] relative">
                    <h1 className="max-md:text-[3rem] text-[6rem] font-nanum font-bold">
                        PHOTOGRAPHY
                    </h1>
                    <div className="flex gap-[20px] md:gap-[80px] max-md:flex-col max-md:justify-center">
                        <Image
                            src="https://rvu.edu.in/wp-content/uploads/2022/03/The-Science-of-Filmmaking-813X451-1.png"
                            alt=""
                            width={400}
                            height={400}
                            className="w-[200px] md:w-[400px]  h-fit rounded-3xl object-cover"
                        />
                        <div className="max-w-[500px]">
                            <p className="max-md:text-2xl text-4xl font-nanum ">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Unde blanditiis fugit quam
                                facere modi ad corporis mollitia quaerat est
                                dolorum doloribus, voluptatem iste sunt.
                                Consequatur dolor harum dolores aperiam ullam.
                            </p>
                        </div>
                    </div>
                    <Image
                        src="/assets/images/star.png"
                        alt=""
                        width={140}
                        height={140}
                        className="absolute invert w-[140px] left-0 top-[440px] max-md:hidden"
                    />
                </div>
                <div className="flex flex-col md:items-end mb-[40px] md:mb-[80px]">
                    <h1 className="max-md:text-[3rem] text-[6rem] font-nanum font-bold">
                        FASHION DESIGN
                    </h1>
                    <div className="flex gap-[20px] md:gap-[80px] max-md:flex-col">
                        <div className="max-w-[500px]">
                            <p className="max-md:text-2xl text-4xl font-nanum">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Unde blanditiis fugit quam
                                facere modi ad corporis mollitia quaerat est
                                dolorum doloribus, voluptatem iste sunt.
                                Consequatur dolor harum dolores aperiam ullam.
                            </p>
                        </div>
                        <Image
                            width={400}
                            height={400}
                            src="https://rvu.edu.in/wp-content/uploads/2022/03/The-Science-of-Filmmaking-813X451-1.png"
                            alt=""
                            className="w-[200px] md:w-[400px] h-fit rounded-3xl object-cover"
                        />
                    </div>
                </div>
            </div>
            <ContactMe />
            <Footer />
        </>
    );
};

export default index;
