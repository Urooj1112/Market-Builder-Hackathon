import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

const About1 = () => {
  return (
    <div className="relative flex flex-col gap-8">
      <div className="w-full h-full bg-white flex flex-col lg:flex-row px-4 md:px-0 lg:px-20">
        {/* Left Content (Text) */}
        <div className="w-full max-w-[1050px] mx-auto flex flex-col lg:items-start gap-[40px] py-[112px] sm:mb-[50px] lg:w-[50%]">
          <div className="flex flex-col lg:items-start items-center gap-[35px] w-full">
            {/* Text Column */}
            <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
              ABOUT COMPANY
            </h5>
            <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
              ABOUT US
            </h1>
            <h4 className={`text-[12px] ${montserrat.className} font-bold sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]`}>
              We know how large objects will act, but things on a small scale
            </h4>
            <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
              <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
                <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
                  Get Quote Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="relative w-full lg:w-[50%] mt-12 lg:mt-0">
          {/* Background Circles */}
          <div className="absolute inset-0 w-full h-full">
            {/* Debugging: Replace with bg-blue-500 */}
            <div className="absolute w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] bg-red-100 rounded-full right-[35px] bottom-[84px] lg:bottom-[120px] lg:right-[108px] md:w-[360px] md:h-[360px] md:right-[30px] md:bottom-[18px]" />
            <div className="absolute w-10 h-10 lg:w-[60px] lg:h-[60px] bg-red-100 rounded-full top-10 lg:top-[44px] lg:bottom-[0px] left-[11px] lg:left-[-90px] md:w-[50px] md:h-[50px] md:left-[10px]" />
            <div className="absolute w-8 h-8 lg:w-[30px] lg:h-[30px] bg-red-100 rounded-full bottom-[215px] lg:bottom-[350px] right-[-8px] lg:right-[60px] md:bottom-[260px] md:right-[0px]" />
            <div
              className="absolute w-4 h-4 lg:w-[20px] lg:h-[20px] bg-red-100 rounded-full top-16 lg:top-32 right-[2px] lg:right-[20px] md:right-[26px] md:bottom-[18px]"
            />
          </div>
          <Image
            src="/images/technology 2.png"
            alt="technology 2"
            className="relative lg:w-[450px] lg:h-[645px] object-cover transform transition duration-500 hover:scale-110"
            width={450}
            height={645}
          />
        </div>
      </div>
    </div>
  );
};

export default About1;
