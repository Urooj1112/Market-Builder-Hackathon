import Image from 'next/image';

export default function PartNeuralPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-6 px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center w-full">
                {/* Image Section */}
                <div className="flex justify-center">
                    <Image
                        src="/images/winter-clothes.png"
                        alt="Neural Universe"
                        width={400} // Adjusted width for better responsiveness
                        height={400} // Adjusted height for better responsiveness
                        className="object-cover"
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
                    <h5 className="mb-4 md:mb-6 font-bold text-[#BDBDBD] text-[14px] md:text-[16px]">SUMMER 2020</h5>
                    <h2 className="text-3xl md:text-5xl text-[#252B42] font-bold mb-4">
                        Part of the Neural Universe
                    </h2>
                    <h4 className="text-lg mb-6 text-[#737373] max-w-xs md:max-w-md">
                        We know how large objects will act, but things on a small scale.
                    </h4>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <button className="bg-[#2DC071] text-white font-bold py-2 px-4 rounded transition duration-300 w-full md:w-auto">
                            Buy Now
                        </button>
                        <button className="bg-white border border-[#2DC071] shadow-md text-[#2DC071] font-bold py-2 px-4 rounded transition duration-300 w-full md:w-auto">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
