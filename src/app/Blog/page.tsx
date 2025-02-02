import Image from "next/image";
import Footer from "@/components/Home/Footer1";
import SecondHeader from "@/components/Home/SecondHeader";
import NavBar from "@/components/Shop/NavBar";
import Logo from "@/components/Shop/Logo";
const products = [
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p1.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p2.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p3.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p4.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p5.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p6.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p7.png",
  },
  {
    name: "Graphic Design",
    description: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    imageUrl: "/images/p8.png",
  },
];

export default function Home() {
  return (
    <div>
      <NavBar />
      <SecondHeader />

      <section>
        <div>
          <div className="h-[91px] w-full bg-[#FFFFFF]">
            <h5 className="font-bold text-center pt-[50px] text-[14px] text-[#737373]">
              <span className="mr-[60px]">Description</span>
              <span className="mr-[60px]">Additional Information</span>
              <span>
                Reviews<span className="text-[#23856D] ml-[10px]">(0)</span>
              </span>
            </h5>
          </div>
          <div className="flex flex-col lg:flex-row gap-[30px] px-8 py-12 items-center justify-center">
            {/* Image Section */}
            <div className="w-full lg:w-[323px] h-auto flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src="/images/Home.png"
                alt="Home"
                height={716}
                width={1000}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row w-full lg:w-[65%] mt-6 lg:mt-0">
              {/* Text Block */}
              <div className="w-full lg:w-[332px] space-y-4">
                <h2 className="text-[24px] font-Montserrat font-bold text-gray-800">
                  The quick fox jumps over
                </h2>
                <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do
                  met sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do
                  met sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="text-[#737373] font-Montserrat font-normal text-[14px] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do
                  met sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </div>

              {/* List Section */}
              <div className="flex flex-col justify-center ml-[40px] gap-[30px]">
                {/* First List */}
                <div>
                  <h3 className="text-[24px] font-semibold font-Montserrat text-gray-800 mb-[20px]">
                    The quick fox jumps over
                  </h3>
                  <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                  </ul>
                </div>

                {/* Second List */}
                <div>
                  <h3 className="text-[24px] font-bold text-gray-800">
                    The quick fox jumps over
                  </h3>
                  <ul className="mt-2 space-y-4 text-[#737373] font-Montserrat font-bold text-[14px] leading-[20px]">
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                    <li className="flex items-center gap-2">
                      <Image src="/images/arrow.png" alt="Arrow" width={12} height={12} />
                      The quick fox jumps over the lazy dog
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
  <div className="w-full ml-[10px]">
    <div className="w-full lg:w-[800px] mx-auto pt-[24px] pb-[24px]">
      <h3 className="font-bold text-[18px] pb-[12px] text-[#252B42]">
        BESTSELLER PRODUCTS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="product border rounded-lg p-2 shadow-sm hover:shadow-md transition"
          >
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover rounded-md"
              />
            </div>

            <h5 className="mt-2 text-[14px] font-semibold text-[#252B42]">
              {product.name}
            </h5>
            <p className="text-[#737373] text-[10px]">{product.description}</p>

            <div className="flex justify-between items-center mt-2">
              <span className="text-[12px] font-bold text-[#BDBDBD]">
                {product.discountPrice}
              </span>
              <span className="text-[12px] font-bold text-[#23856D]">
                {product.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>



      <Logo />
      <Footer />
    </div>
  );
}
