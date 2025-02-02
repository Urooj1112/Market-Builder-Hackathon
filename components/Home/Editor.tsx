import { Montserrat } from "next/font/google";
import Image from "next/image";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const Card = () => {
  return (
    <div className="items-center mx-auto my-14">
      <h2
        className={` ${montserrat.className} items-center  text-center text-3xl font-bold  mb-8 text-[#252B42]`}
      >
        EDITOR’S PICK
      </h2>
     
      <p
        className={`${montserrat.className} font-normal  mt-[-15px] text-[14px]  text-[#737373] text-center `}
      >
        Explore our latest selections
      </p>
      {/* row */}
      <div className="flex flex-wrap gap-2 items-center justify-center mt-8">
    {/* Men's Clothing */}
        <div className="relative">
          <Image
            src="/images/Card1.png" 
            className="object-cover w-full h-auto md:w-[510px] md:h-[500px] px-8 md:px-0 transform transition duration-500 hover:scale-110"
            width={510}
            height={500}
            alt="Men's Clothing"
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white text-center px-4 py-3 shadow-lg">
            <p
              className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
            >
              MEN
            </p>
          </div>
        </div>
  {/* Women's Clothing */}
        <div className="relative">
          <Image
            src="/images/Card2.png" 
            alt="Women's Clothing"
            className="w-[255] h-[500px] md:w-[240px] md:h-[500px] transform transition duration-500 hover:scale-110"
            width={240}
            height={500}
          />
          <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
            <h5
              className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
            >
              WOMEN
            </h5>
          </div>
        </div>

         {/* Accessories */}
        <div className="flex flex-row lg:flex-col gap-4 flex-wrap">
          {/* Image 3 */}
          <div className="relative  mx-auto items-center">
            <Image
              src="/images/Card3.png"
              alt="Accessories"
              className="w-[240px] h-[242px] transform transition duration-500 hover:scale-110"
              width={240}
              height={242}
            />
            <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
              <h5
                className={`${montserrat.className}items-center text-center font-bold text-[16px]  text-myDark hover:text-blue-500`}
              >
                ACCESSORIES
              </h5>
            </div>
          </div>

          {/* Kids' Clothing */}
          <div className="relative  mx-auto items-center">
            <Image
             src="/images/Card4.png"
             alt="Kids' Clothing"
              className="w-[240px] h-[242px] object-cover transform transition duration-500 hover:scale-110"
              width={240}
              height={242}
            />
            <div className="w-[170px] h-[48px] absolute bottom-5 left-10 bg-white mx-auto text-center px-4 py-3 shadow-lg">
              <h5
                className={`${montserrat.className}items-center text-center font-bold text-[16px] text-myDark hover:text-blue-500`}
              >
                KIDS
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;