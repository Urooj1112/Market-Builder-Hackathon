import Image from "next/image";

export default function Vite() {
  return (
    <div className="bg-white mt-10 px-4 sm:px-10">
      <div className="bg-[#23856D] mt-10 p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start mx-auto max-w-lg text-center md:text-left">
            <h2 className="text-white text-xs sm:text-sm uppercase mb-3 sm:mb-5">Summer 2020</h2>
            <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">
              Vita Classic Product
            </h1>
            <p className="text-white text-sm sm:text-base mb-6">
              We know how large objects will act. We know how objects will act. We know.
            </p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <span className="text-white font-bold text-lg sm:text-xl">$16.48</span>
              <button className="bg-[#2DC071] text-white px-5 py-2 font-bold hover:bg-green-600 transition-all duration-300">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <Image
              src="/images/shop-Hero.png"
              alt="Product image"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
