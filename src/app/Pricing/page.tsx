import Logo from "@/components/Shop/Logo";
import SecondHeader from "@/components/Home/SecondHeader";
import Image from "next/image";
import Footer from "@/components/Home/Footer1";
import Link from "next/link";
export default function Pricing() {

  const data = [
    {
      title: "Work better together",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "OpenType features and Variable ",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "Start working faster today",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "Work at the speed of thought.",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    { 
      title: "The Fastest way to organize",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
      title: "The Fastest way to navigate",
      description:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
  ];

  return (
    <><div><SecondHeader/></div>
    <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] mt-[10vw] mb-[12vw] lg:mt-[7vw] lg:mb-[7vw]
     xl:mt-[5vw] xl:mb-[4vw]">
    
    <h4 className="text-[3.5vw] font-bold text-[#737373] tracking-wider md:text-[2.8vw] lg:text-[1.8vw] xl:text-[1.2vw]">
      PRICING
    </h4>
    
    {/* Main Heading  */}
    <h1 className="text-[8vw] text-[#252B42] font-bold mt-[4vw] md:text-[6.5vw] lg:text-[5vw] lg:mt-[2vw] xl:text-[4vw]">
      Simple Pricing
    </h1>
    
    {/* Breadcrumb  */}
    <div className="flex items-center mt-[5vw] text-[3.7vw] font-bold md:text-[3vw] lg:text-[1.6vw] lg:mt-[3vw] xl:text-[1.1vw]">
    <span className="text-[#252B42] pr-[2vw] lg:pr-[0.8vw]">
    <Link
              href="/"
              className="hover:text-blue-500 font-bold text-[20px] text-[#737373] tracking-[0.2px]"
            >
              Home
            </Link>
    </span>
          &gt;  
    <span className="text-[#737373]  text-[20px] pl-[2vw] lg:pl-[0.8vw]">
      Pricing
    </span>
    </div>
  </section>

  <section className="flex flex-col items-center justify-center  bg-[#FAFAFA] pt-[10vw] pb-[12vw] xl:pb-[8vw] lg:pt-[6vw] xl:pt-[3vw]">
      {/* Heading */}
      <h1 className="text-[8vw] text-[#252B42] font-bold md:text-[6.5vw] lg:text-[5vw] xl:text-[3vw]">
        Pricing
      </h1>
      
      {/* Description */}
      <p className="text-[3.3vw] font-medium text-[#737373] text-center mt-[3vw] w-[65%] md:text-[2.5vw] lg:text-[1.7vw] lg:mt-[1vw]
      lg:w-[55%] xl:text-[1vw] xl:w-[35%] xl:mt-[0.5vw]">
      Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
      </p>
      
      {/* Toggle Switch */}
      <div className="flex items-center mt-[8vw] space-x-[3vw] lg:mt-[5vw] lg:space-x-[1.5vw] xl:space-x-[1vw]">
        {/* Monthly */}
        <span className="text-[4vw] font-bold text-[#252B42] md:text-[3vw] lg:text-[2vw] xl:text-[1.1vw]">
          Monthly
        </span>
        
        {/* Toggle */}
        <div className="relative flex items-center w-[10vw] h-[5.5vw] bg-white rounded-full border border-[#23A6F0]
        md:w-[9vw] md:h-[4.5vw] lg:w-[6vw] lg:h-[3vw] xl:w-[3.5vw] xl:h-[1.9vw]">
          <span className="absolute left-[0.60vw] w-[3.9vw] h-[3.9vw] border border-[#9e9a9a] bg-gray-200
         rounded-full shadow transition-transform transform duration-300 ease-in-out
         md:w-[3.4] md:h-[3.3vw] md:left-[0.50vw] lg:w-[2.5vw] lg:h-[2.2vw]  lg:left-[0.40vw]
         xl:w-[1.5vw] xl:h-[1.5vw] xl:left-[0.20vw]"></span>
        </div>
        
        {/* Yearly */}
        <span className="text-[4vw] font-bold text-[#252B42] md:text-[3vw] lg:text-[2vw] xl:text-[1.1vw]">
          Yearly
        </span>
        
        {/* Save Tag */}
        <span className="text-[3vw] font-bold text-[#23A6F0] bg-[#B2E3FF] px-[3.3vw] py-[2vw] rounded-full md:text-[2.3vw]
        lg:text-[1.6vw] lg:px-[2.6vw] lg:py-[1.4vw] xl:text-[1vw] xl:px-[1.7vw] xl:py-[0.9vw]">
          Save 25%
        </span>
      </div>
    </section>

    {/* package card  */}

    <section>
    <div className="flex flex-col justify-center items-center bg-[#FAFAFA] space-y-[6vw] lg:space-y-0 lg:flex-row">
      {/* card 1  */}

      <div
        className="bg-[#FFFFFF] border-2 border-[#23A6F0] text-white rounded-xl shadow-lg flex flex-col items-center w-[80vw]
       pt-[15vw] pb-[18vw] 
       lg:w-[25vw] lg:pt-[5.13vw] lg:pb-[5.13vw]
       xl:w-[23.94vw] xl:pt-[5.13vw] xl:pb-[5.13vw]
        transition-transform duration-300 hover:transform hover:translate-y-[-3vw]"      
      >
        <h2 className="text-[6vw] text-[#252B42] tracking-wide font-bold lg:text-[1.76vw] xl:text-[1.76vw]">
          FREE
        </h2>
        <p className="text-[3.6vw] text-[#737373] font-semibold pt-[6vw] text-center
         lg:text-[1.17vw] lg:pt-[2.56vw] lg:font-bold
         xl:text-[1.17vw] xl:pt-[2.56vw] xl:font-bold">
         <span className="block">Organize across all</span>  
         <span className="block">apps by hand</span> 
        </p>
        <div className="text-center pt-[6vw] lg:pt-[2.78vw] xl:pt-[2.78vw]">
          <span className="text-[9vw] text-[#23A6F0] font-bold lg:text-[2.93vw] xl:text-[2.93vw]">
            0
          </span>
          <span className="relative bottom-[3vw] text-[5vw] font-bold text-[#23A6F0] 
          lg:text-[1.76vw] lg:bottom-[1.5vw] lg:left-[1vw]
          xl:text-[1.76vw] xl:bottom-[1.5vw] xl:left-[1vw]"> 
            $
          </span>
          <span className="text-[3vw] font-semibold text-[#8EC2F2] lg:text-[1.02vw] xl:text-[1.02vw] lg:font-bold">
            Per Month
          </span>
        </div>
        <ul className="space-y-[3vw] font-bold tracking-wide text-[3vw] pt-[5vw]
         lg:text-[1.02vw] lg:space-y-[1vw] lg:pt-[2.56vw]
         xl:text-[1.02vw] xl:space-y-[1vw] xl:pt-[2.56vw]">
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
            <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
            lg:w-[2.40vw] lg:h-[2.30vw]
            xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span className="text-[#252B42]">
              Unlimited product updates
            </span>

          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
          lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span className="text-[#252B42]">
              Unlimited product updates
            </span>
          </li>
          <li className="flex items-center space-x-[2vw]  lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
           xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span className="text-[#252B42]">
              Unlimited product updates
            </span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#BDBDBD] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
           xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
          </span>
            <span className="text-[#252B42]">
              1GB Cloud storage
            </span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw] ">
          <span className="bg-[#BDBDBD] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
           xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
          </span>
            <span className="text-[#252B42]">
              Email and community support
            </span>
          </li>
        </ul>
        <button className="bg-[#23A6F0] text-white mt-[8vw] rounded-lg py-[3vw] px-[18vw] text-[3.3vw]
         font-bold hover:bg-blue-600 transition
         lg:py-[1.2vw] lg:px-[6.5vw] lg:mt-[2.70vw] lg:text-[1vw] 
         xl:py-[1.2vw] xl:px-[6.5vw] xl:mt-[2.70vw] xl:text-[1vw] ">
          Try for free
        </button>
      </div>

      {/* card 2  */}

      <div
        className="bg-[#252B42] border-2 border-[#23A6F0] text-white rounded-xl shadow-lg flex flex-col items-center w-[80vw]
       pt-[15vw] pb-[18vw]
       lg:w-[25vw] lg:pt-[5.13vw] lg:pb-[5.13vw]
       xl:w-[23.94vw] xl:pt-[5.13vw] xl:pb-[5.13vw] transition-transform duration-300 hover:transform hover:translate-y-[-3vw]"
       
      >
        <h2 className="text-[6vw] tracking-wide font-bold lg:text-[1.76vw] xl:text-[1.76vw]">
          STANDARD
        </h2>
        <p className="text-[3.6vw] font-semibold pt-[6vw] text-center
         lg:text-[1.17vw] lg:pt-[2.56vw] lg:font-bold
        xl:text-[1.17vw] xl:pt-[2.56vw] xl:font-bold">
         <span className="block">Organize across all</span>  
         <span className="block">apps by hand</span> 
        </p>
        <div className=" text-center pt-[6vw] lg:pt-[2.78vw] xl:pt-[2.78vw]">
          <span className="text-[9vw] text-[#23A6F0] font-bold lg:text-[2.93vw] xl:text-[2.93vw]">
            9.99
          </span>
          <span className="relative bottom-[3vw] text-[5vw] font-bold text-[#23A6F0] 
           lg:text-[1.76vw] lg:bottom-[1.5vw] lg:left-[1vw]
          xl:text-[1.76vw] xl:bottom-[1.5vw] xl:left-[1vw] 
         "> 
            $
          </span>
          <span className="text-[3vw] font-medium text-[#8EC2F2] lg:text-[1.02vw] xl:text-[1.02vw] lg:font-bold">
            Per Month
          </span>
        </div>
        <ul className=" space-y-[3vw] font-bold tracking-wide text-[3vw] pt-[5vw]
        lg:text-[1.02vw] lg:space-y-[1vw] lg:pt-[2.56vw]
        xl:text-[1.02vw] xl:space-y-[1vw] xl:pt-[2.56vw]">
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
            <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
             lg:w-[2.40vw] lg:h-[2.30vw]
            xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span >Unlimited product updates</span>

          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span>Unlimited product updates</span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span>Unlimited product updates</span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#BDBDBD] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
          </span>
            <span>1GB Cloud storage</span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#BDBDBD] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
          </span>
            <span>Email and community support</span>
          </li>
        </ul>
        <button className="bg-[#23A6F0] text-white mt-[8vw] rounded-lg py-[3vw] px-[18vw] text-[3.3vw]
         font-bold hover:bg-blue-600 transition
         lg:py-[1.2vw] lg:px-[6.5vw] lg:mt-[2.70vw] lg:text-[1vw]
         xl:py-[1.2vw] xl:px-[6.5vw] xl:mt-[2.70vw] xl:text-[1vw]">
          Try for free
        </button>
      </div>

      {/* card 3  */}
      <div
        className="bg-[#FFFFFF] border-2 border-[#23A6F0] text-white rounded-xl shadow-lg flex flex-col items-center w-[80vw]
       pt-[15vw] pb-[18vw]
       lg:w-[25vw] lg:pt-[5.13vw] lg:pb-[5.13vw]
       xl:w-[23.94vw] xl:pt-[5.13vw] xl:pb-[5.13vw] transition-transform duration-300 hover:transform hover:translate-y-[-3vw]"
       
      >
        <h2 className="text-[6vw] text-[#252B42] tracking-wide font-bold lg:text-[1.76vw] xl:text-[1.76vw]">
        PREMIUM
        </h2>
        <p className="text-[3.6vw] text-[#737373] font-semibold pt-[6vw] text-center 
         lg:text-[1.17vw] lg:pt-[2.56vw] lg:font-bold
        xl:text-[1.17vw] xl:pt-[2.56vw] xl:font-bold">
         <span className="block">Organize across all</span>  
         <span className="block">apps by hand</span> 
        </p>
        <div className="text-center pt-[6vw] lg:pt-[2.78vw] xl:pt-[2.78vw]">
          <span className="text-[9vw] text-[#23A6F0] font-bold lg:text-[2.93vw] xl:text-[2.93vw]">
            19.99
          </span>
          <span className="relative bottom-[3vw] text-[5vw] font-bold text-[#23A6F0] 
           lg:text-[1.76vw] lg:bottom-[1.5vw] lg:left-[1vw]
          xl:text-[1.76vw] xl:bottom-[1.5vw] xl:left-[1vw] "> 
            $
          </span>
          <span className="text-[3vw] text-[#8EC2F2] lg:text-[1.02vw] xl:text-[1.02vw] lg:font-bold">
            Per Month
          </span>
        </div>
        <ul className="space-y-[3vw] font-bold tracking-wide text-[3vw] pt-[5vw]
        lg:text-[1.02vw] lg:space-y-[1vw] lg:pt-[2.56vw]
        xl:text-[1.02vw] xl:space-y-[1vw] xl:pt-[2.56vw]">
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
            <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
             lg:w-[2.40vw] lg:h-[2.30vw]
            xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span className="text-[#252B42]">Unlimited product updates</span>

          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span className="text-[#252B42]">Unlimited product updates</span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#2DC071] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
            </span>
            <span className="text-[#252B42]">Unlimited product updates</span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#BDBDBD] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center 
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
          </span>
            <span className="text-[#252B42]">1GB Cloud storage</span>
          </li>
          <li className="flex items-center space-x-[2vw] lg:space-x-[0.70vw] xl:space-x-[0.70vw]">
          <span className="bg-[#BDBDBD] rounded-full w-[7.3vw] h-[7vw] flex items-center justify-center
           lg:w-[2.40vw] lg:h-[2.30vw]
          xl:w-[2.40vw] xl:h-[2.30vw]">
                <span className="text-white text-[3.5vw] lg:text-[1.17vw] xl:text-[1.17vw]">&#10004;</span>
          </span>
            <span className="text-[#252B42]">Email and community support</span>
          </li>
        </ul>
        <button className="bg-[#23A6F0] text-white mt-[8vw] rounded-lg py-[3vw] px-[18vw] text-[3.3vw] font-bold
         hover:bg-blue-600 transition
         lg:py-[1.2vw] lg:px-[6.5vw] lg:mt-[2.70vw] lg:text-[1vw]
         xl:py-[1.2vw] xl:px-[6.5vw] xl:mt-[2.70vw] xl:text-[1vw]">
          Try for free
        </button>
      </div>
    </div>
    
    </section>

    {/* Logo Row Section  */}
 <section className="bg-[#FAFAFA] pt-[15vw] text-center font-medium text-[5vw] text-[#252B42] md:text-[4.5vw] 
 lg:font-semibold lg:text-[1.9vw] lg:pt-[7vw] xl:pt-[6vw] xl:text-[1.46vw] ">
    <h4>
      <span className="block lg:inline">Trusted By Over 4000</span>
      <span className="block lg:inline"> Big Companies</span>
    </h4>

<Logo/>

</section>

   {/* FAQs Section  */}

   <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] pt-[10vw] pb-[12vw] xl:pb-[8vw] lg:pt-[6vw] xl:pt-[9.15vw] ">
      {/* Heading */}
      <h1 className="text-[8vw] text-[#252B42] font-bold md:text-[6.5vw] lg:text-[5vw] xl:text-[3vw]">
      Pricing FAQs
      </h1>
      
      {/* Description */}
      <p className="text-[3.7vw] font-semibold text-[#737373] text-center mt-[3vw] w-[75%] md:text-[2.7vw] lg:text-[1.9vw] lg:mt-[1vw]
      lg:w-[55%] xl:text-[1vw] xl:w-[35%] xl:mt-[o.5vw]">
     We focus on ergonomics and meeting  you where you work. It&rsquo;s only 
      a keystroke away.
      </p>

      <section className=" pt-[12vw] lg:pt-[7vw] xl:pt-[6.59vw]">
      <div className="max-w-[80vw] mx-auto lg:max-w-[80vw] xl:max-w-[75vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4vw]">
          {data.map((item, index) => (
            <div
              key={index}
              className="p-[2vw] "
            >
              <h3 className="flex items-center text-[3.8vw] font-bold text-[#333] mb-[3vw] md:text-[3.2vw]
              lg:text-[1.70vw] lg:mb-[0.45vw] xl:text-[1.17vw] xl:mb-[0.37vw]">
                <span className=" mr-[1.5vw] ">
                  <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.180771 0.180771C0.237928 0.123469 0.305828 0.0780066 0.380583 0.0469869C0.455337 0.0159672 0.535477 0 0.616412 0C0.697347 0 0.777487 0.0159672 0.852241 0.0469869C0.926996 0.0780066 0.994896 0.123469 1.05205 0.180771L8.4358 7.56452C8.4931 7.62168 8.53857 7.68958 8.56959 7.76433C8.60061 7.83909 8.61657 7.91923 8.61657 8.00016C8.61657 8.0811 8.60061 8.16124 8.56959 8.23599C8.53857 8.31074 8.4931 8.37865 8.4358 8.4358L1.05205 15.8196C0.936514 15.9351 0.779809 16 0.616412 16C0.453015 16 0.29631 15.9351 0.180771 15.8196C0.0652316 15.704 0.000322157 15.5473 0.000322157 15.3839C0.000322157 15.2205 0.0652316 15.0638 0.180771 14.9483L7.13011 8.00016L0.180771 1.05205C0.123469 0.994897 0.078006 0.926996 0.0469863 0.852242C0.0159666 0.777487 0 0.697347 0 0.616412C0 0.535478 0.0159666 0.455338 0.0469863 0.380583C0.078006 0.305829 0.123469 0.237928 0.180771 0.180771Z" fill="#23A6F0"/>
                  </svg>
                </span>
                {item.title}
              </h3>
              <p className="text-[2.7vw] font-medium text-[#555] md:text-[2.3vw] lg:text-[1.4vw] xl:text-[1.02vw] ml-[2.1vw]">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-[11vw] lg:mt-[4vw] xl:mt-[3.66vw]">
          <p className="text-[3.9vw] font-medium text-[#666] md:text-[2.8vw] lg:text-[1.60vw] xl:text-[1.46vw]">
         <span className="block md:inline"> Haven&#8217;t got your answer? </span>
          <span className="block md:inline">Contact our support</span>
          </p>
        </div>
      </div>
    </section>
    </section>

    {/* free trial  */}

    <section className="flex flex-col items-center justify-center  bg-[#FFFFFF] pt-[10vw] pb-[12vw] xl:pb-[8vw] lg:pt-[6vw] xl:pt-[9.15vw] ">
      {/* Heading */}
      <h1 className="text-[8vw]  text-[#252B42] font-bold md:text-[6.5vw] lg:text-[4.5vw] xl:text-[3vw]">
      <span className="block lg:inline text-center">Start your</span> 
      <span className="block lg:inline"> 14 days free trial</span>
      </h1>
      
      {/* Description */}
      <p className="text-[3.7vw] font-semibold text-[#737373] text-center mt-[3vw] w-[75%] md:text-[2.7vw] lg:text-[1.9vw] lg:mt-[1vw]
      lg:w-[55%] xl:text-[1vw] xl:w-[35%] xl:mt-[o.5vw]">
   Met minim Mollie non desert Alamo est sit cliquey dolor 
   do met sent. RELIT official consequent.
      </p>

      <button className="bg-[#23A6F0] text-white mt-[8vw] rounded-md py-[3vw] px-[10vw] text-[3.3vw]
         font-bold hover:bg-blue-600 transition
         md:text-[2.5vw] md:py-[2vw] md:px-[7vw]
         lg:py-[1.5vw] lg:px-[3.5vw] lg:mt-[2.70vw] lg:text-[1.4vw]
         xl:py-[1.2vw] xl:px-[3vw] xl:mt-[2.70vw] xl:text-[1vw]">
         Try it free now
        </button>

        <div className="w-[55vw] mt-[6vw] md:w-[40vw] lg:w-[20vw] lg:mt-[3vw] xl:w-[18vw] xl:mt-[2vw]">
          <Image 
          src="/images/pricing-social-icons.svg"
          alt=""
          width={30}
          height={30}
          layout="responsive"
          />
        </div>
      

    </section>
    <Footer/>
  </>
  )
}
