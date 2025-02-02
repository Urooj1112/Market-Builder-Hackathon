import Image from "next/image";
import Footer from "@/components/Home/Footer1";
import SecondHeader from "@/components/Home/SecondHeader";
import About from "@/components/About/about";
import BigCompanies from "@/components/About/BigCom";
import About1 from "@/components/About/aboutTop";

export default function Home() {
  return (
    <div>
      <SecondHeader />

      <div className="relative flex flex-col gap-8">
        <About1 />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full h-[236px] pb-[5px] mx-auto px-4 ">
        <div className="flex flex-col justify-center items-center gap-[60px]">
          <p className="font-normal text-[14px] text-[#E74040] text-center">
            Problems trying
          </p>
          <h3 className="font-bold text-[24px] text-[#252B42] text-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>

        <div className="flex justify-center items-center">
          <p className="font-normal text-[14px] text-[#737373] text-center max-w-[500px] sm:mb-20">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>

      <About />
      <BigCompanies />

      {/* Team Section */}
      <section className="bg-white py-16 ">
        <div className="container mx-auto flex flex-col items-center gap-16 px-4 ">
          {/* Heading */}
          <div className="text-center max-w-lg">
            <h2 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h2>
            <p className="text-base text-[#737373] mt-4 ">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
              <div className="w-full h-[230px] relative">
                <Image
                  src="/images/User1.jpg"
                  alt="maingirl"
                  height={716}
                  width={1440}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold text-[#252B42]">John Doe</h5>
                <h6 className="text-sm font-semibold text-[#737373]">Software Engineer</h6>
                {/* Social Media */}
                <div className="flex justify-center gap-4 mt-4">
                  <Image src="/images/fb.png" alt="fb" height={24} width={24} />
                  <Image src="/images/insta.png" alt="insta" height={24} width={24} />
                  <Image src="/images/twi.png" alt="twi" height={24} width={24} />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
              <div className="w-full h-[230px] relative">
                <Image
                  src="/images/User2.jpg"
                  alt="maingirl"
                  height={716}
                  width={1440}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold text-[#252B42]">Jane Smith</h5>
                <h6 className="text-sm font-semibold text-[#737373]">Marketing Head</h6>
                <div className="flex justify-center gap-4 mt-4">
                  <Image src="/images/fb.png" alt="fb" height={24} width={24} />
                  <Image src="/images/insta.png" alt="insta" height={24} width={24} />
                  <Image src="/images/twi.png" alt="twi" height={24} width={24} />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white shadow-md overflow-hidden">
              <div className="w-full h-[230px] relative">
                <Image
                  src="/images/User3.jpg"
                  alt="maingirl"
                  height={716}
                  width={1440}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-bold text-[#252B42]">Emily Rose</h5>
                <h6 className="text-sm font-semibold text-[#737373]">UI/UX Designer</h6>
                <div className="flex justify-center gap-4 mt-4">
                  <Image src="/images/fb.png" alt="fb" height={24} width={24} />
                  <Image src="/images/insta.png" alt="insta" height={24} width={24} />
                  <Image src="/images/twi.png" alt="twi" height={24} width={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grow Section */}
      <section className="relative w-full h-[636px] flex bg-[#2A7CC7] justify-center items-center mt-[-30px]">
        {/* Right Side Blue Section */}
        <div className="w-full lg:w-1/2 h-full bg-[#2A7CC7] py-16 flex flex-col justify-center px-4 lg:px-[250px]">
          <div className="w-[438px] flex flex-col gap-[24px]">
            <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
            <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
              Now Let’s grow Yours
            </h2>
            <p className="text-white text-sm lg:text-sm text-[12px] leading-[20px] tracking-[0.2px]">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
            </p>
            <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
              <span className="text-white text-sm font-bold">Button</span>
            </button>
          </div>
        </div>

        {/* Left Side Image */}
        <div className="w-full lg:w-1/2 h-full relative">
          <Image
            src="/images/Girl2.png"
            alt="maingirl"
            height={716}
            width={1440}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
