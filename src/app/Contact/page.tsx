import Image from "next/image";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Footer from "@/components/Home/Footer1";
import SecondHeader from "@/components/Home/SecondHeader";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Contact() {
  return (
    <div className="w-full h-full items-center mx-auto">
      <SecondHeader/>
    <div>
      {/* Contact Section */}
      <div className="w-full h-full bg-white flex flex-col md:flex-row lg:flex-row px-4 lg:px-16">
        {/* Left Content */}
        <div className="w-full flex flex-col mx-auto items-start mt-16 lg:mt-36 px-4 lg:px-0 space-y-10">
          <div>
            <h5
              className={`${montserrat.className} text-center font-bold text-[16px] text-[#252B42]`}
            >
              CONTACT US
            </h5>
          </div>
          <div className="mt-4">
            <h1
              className={`${montserrat.className}  font-bold text-3xl lg:text-5xl text-[#252B42] `}
            >
              Get in touch today!
            </h1>
          </div>
          <div className="mt-4">
            <h4
              className={`${montserrat.className} w-full lg:w-[360px]  font-normal text-base lg:text-lg text-[#737373]`}
            >
              We know how large objects will act, but things on a small scale
            </h4>
          </div>
          <div className="flex flex-col mt-6 mx-auto md:mx-0 lg:mx-0">
            <h4
              className={`${montserrat.className} text-start font-bold text-lg lg:text-xl text-[#252B42]`}
            >
              Phone : +451 215 215
            </h4>
            <h4
              className={`${montserrat.className} text-start font-bold text-lg lg:text-xl text-[#252B42]`}
            >
              Fax : +451 215 215
            </h4>
          </div>
           {/* Social Media Icons */}
           <div className="flex gap-4 mt-6 mx-auto md:mx-0 lg:mx-0">
              <Link href="https://twitter.com">
                <FaTwitter size={30} className="text-[#252B42]" />
              </Link>
              <Link href="https://facebook.com">
                <FaFacebook size={30} className="text-[#252B42]" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram size={30} className="text-[#252B42]" />
              </Link>
              <Link href="https://linkedin.com">
                <FaLinkedin size={30} className="text-[#252B42]" />
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative w-full mt-12 lg:mt-0">
            {/* Background Circles */}
            <div className="absolute inset-0">
              <div className="bg-red-200 absolute w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] rounded-full right-[65px] bottom-[124px] lg:bottom-[137px] lg:right-[28px] md:w-[360px] md:h-[360px] md:right-[30px] md:bottom-[18px]" />
              <div className="bg-red-200 absolute w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-full top-10 lg:top-[44px] lg:bottom-[0px] left-[11px] lg:left-[-90px] md:w-[50px] md:h-[50px] md:left-[-10px] md:top-2" />
              <div className="bg-red-200 absolute w-8 h-8 lg:w-[30px] lg:h-[30px] rounded-full bottom-[215px] lg:bottom-[350px] right-[18px] lg:right-[60px] md:bottom-[260px] md:right-[0px] " />
              <div
                className="bg-myImageBackground2 absolute w-4 h-4 lg:w-[20px] lg:h-[20px] rounded-full top-20 lg:top-32
                 right-[20px] lg:right-[20px] md:right-[26px] md:bottom-[18px]"
              />
            </div>
            <Image
              src="/images/technology 1.png"
              alt="technology 1"
              className="relative lg:w-[450px] lg:h-[645px] object-cover transform transition duration-500 hover:scale-110"
              width={450}
              height={645}
            />
          </div>
        </div>

        
      {/* Visit Section */}
      <div>
        {/* Office Section */}
        <div className="w-full bg-myGreyBackground  py-8 px-4 text-center">
          <h6
            className={`${montserrat.className} font-bold text-sm text-[#252B42]`}
          >
            VISIT OUR OFFICE
          </h6>
          <h2
            className={`${montserrat.className} font-normal  text-2xl lg:text-4xl text-[#252B42] mt-2 `}
          >
            We help small businesses with big ideas
          </h2>
        </div>

        {/* Contact Boxes */}
        <div className="w-full flex flex-wrap justify-center py-8">
          {[
            {
              icon: "call",
              title: "Get Support",
              emails: ["georgia.young@example.com", "georgia.young@ple.com"],
              text: "text-[#252B42]",
            },
            {
              icon: "location",
              title: "Visit Us",
              emails: ["123 Street", "City, Country"],
              bg: "bg-[#252B42]",
              text: "text-white",
            },
            {
              icon: "msg",
              title: "Send a Message",
              emails: ["contact@domain.com", "info@domain.com"],
              text: "text-[#252B42]",
            },
          ].map(
            ({ icon, title, emails, bg = "", text = "text-myDark" }, index) => (
              <div
                key={index}
                className={` w-[328px] sm:w-1/2 lg:w-[328px] lg:h-[403px] h-[403px] p-4 flex flex-col justify-center items-center ${bg} rounded-lg transform transition duration-500 hover:scale-110`}
              >
                <Image
                  src={`/images/${icon}.png`}
                  alt={icon}
                  width={72}
                  height={72}
                />
                <div className="mt-3">
                  {emails.map((email, i) => (
                    <h6
                      key={i}
                      className={`${montserrat.className} text-center font-bold text-sm  ${text}`}
                    >
                      {email}
                    </h6>
                  ))}
                </div>
                <h5
                  className={`${montserrat.className} text-center font-bold text-lg mt-3  ${text}`}
                >
                  {title}
                </h5>
                <Link href="/Submit">
  <button className="w-[189px] mt-4 text-[#23A6F0] font-bold py-2 px-4 rounded-full outline outline-1 outline-myBlue">
    Submit Request
  </button>
</Link>
              </div>
            )
          )}
        </div>

        {/* Final Section */}
        <div className="w-full text-center py-8 ">
          <Image
            src={`/images/Arrow 2.png`}
            alt="Arrow 2"
            width={72}
            height={72}
            className="mx-auto"
          />
          <h5
            className={`${montserrat.className} font-bold text-base text-[#252B42] mt-5 `}
          >
            WE Can&apos;t WAIT TO MEET YOU
          </h5>
          <h2
            className={`${montserrat.className} font-normal text-3xl lg:text-5xl text-[#252B42] mt-4 `}
          >
            Let&apos;s Talk
          </h2>
          <button className="w-48 mt-4 text-white font-bold py-4 px-6 rounded-md bg-[#23A6F0] ">
            Try it free now
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}
