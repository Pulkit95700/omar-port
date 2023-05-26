/* eslint-disable @next/next/no-img-element */
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Image from "next/image";

// the problem was the layout fill and objectFit properties was deprecated in nextJs and new Browsers have major changes in rendering images so it is preferred to use width and height instead of layout fill and objectFit

export default function Home() {
  return (
    <>
      <div className="home min-h-[100vh] pt-[1rem] md:pt-[3rem]">
        <section className="section-1 px-10 max-md:px-2 w-full">
          {/* Image and Feautures */}
          <div className="flex px-20 max-md:px-4 md:mt-10 w-full gap-10 mb-32 max-md:mb-10 max-md:flex-col h-[400px] max-md:h-[400px] overflow-hidden">
            <div className="basis-[50%] flex justify-center w-full">
              <div className="w-full relative flex items-center justify-center">
                <div className="w-[60px] h-full -top-[140px] left-[180px] z-20 absolute">
                  <Image
                    src={"/assets/images/star.png"}
                    alt="star"
                    className="object-contain w-full h-full"
                    // layout="fill"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="w-[150px] md:w-[200px] md:h-[300px] absolute">
                  <Image
                    src={
                      "https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg"
                    }
                    alt="portrait"
                    // layout="fill"
                    width={300}
                    height={300}
                    className="border-[20px] -rotate-3 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="basis-[50%] flex relative w-full">
              <div className="w-[800px] max-md:w-full md:h-[400px] absolute z-[100] -left-48 max-md:left-0 max-md:-top-10">
                <Image
                  src="/assets/images/features.png"
                  alt=""
                  // layout="fill"
                  width={800}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="px-28 relative mb-20 max-md:px-4">
            <p className="text-5xl max-md:text-3xl font-caveat mb-24 max-md:mb-10 font-semibold">
              Omar is a multidisiplinary artist from the UAE Based in Abu Dhabi
              & Dubai.
            </p>
            {/* </Plx> */}
            <div className="relative">
              <p className="text-5xl max-md:text-3xl font-caveat font-semibold  max-md:mb-10">
                He tackles different forms of art such as:
              </p>
              <ul className="text-5xl max-md:text-3xl font-caveat font-semibold pl-10 max-md:pl-2 leading-snug mb-24  max-md:mb-10">
                <li>Videography,</li>
                <li>Directing, </li>
                <li>Photography, </li>
                <li>Creative Directing,</li>
                <li>Fashion Design, </li>
                <li>Modeling & whatever his artistic mind leads him to.</li>
              </ul>
              <div className="absolute w-[250px] max-md:w-[100px] h-full z-20 top-[20px] right-0 max-md:right-10">
                <Image
                  src={"/assets/images/star-pic.png"}
                  alt="star"
                  // layout="fill"
                  width={250}
                  height={250}
                  className="object-contain w-fit h-fit"
                  // objectFit="contain"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-20 -top-16 max-md:-top-16 -left-10 max-md:-left-4 w-[60px] max-md:w-[30px] h-full">
                <Image
                  src={"/assets/images/star.png"}
                  alt="star"
                  // layout="fill"
                  width={60}
                  height={60}
                  className="object-contain w-fit h-fit"
                />
              </div>
              <p className="text-5xl max-md:text-3xl font-caveat font-semibold">
                His mission is to help build the artistic scene in the UAE, as
                well as encourage younger artists to pursue art not only as a
                passion but as a viable career path.
              </p>
            </div>
          </div>
        </section>
      </div>
      <ContactMe />
      <Footer />
    </>
  );
}
