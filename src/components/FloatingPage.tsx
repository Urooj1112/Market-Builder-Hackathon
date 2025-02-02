import Image from 'next/image'
import FloatingPage2 from './FloatingPage2';
export default function FloatingPage() {
  return (
    <div className="container bg-[#FAFAFA] mx-auto px-4">
      <div className="flex items-center justify-between">
        {/* <h1 className="text-2xl font-bold">Home</h1> */}
        <a href="/" className="text-black font-semibold  text-2xl">
         Home-
        </a>
        <a href="/Shop" className="text-black  font-semibold text-2xl mr-[1100px]">
          Shop
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  ml-[60px] mt-8">
        <div className="relative">
          <Image
            src="/images/carousel 2.png"
            alt="Yellow couch"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center bg-gray-100 p-2 rounded-b-lg">
            <span className="text-xs font-bold">Asfaa</span>
            <div className="flex gap-2">
              <button className="bg-white border-2 border-gray-400 px-2 py-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="bg-white border-2 border-gray-400 px-2 py-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 5.293a1 1 0 011.414 0L12 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[510px] h-[471px]"> <FloatingPage2 /></div>

      </div>

    </div>
  );
}
