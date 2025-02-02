import Image from 'next/image';

export default function Vedio() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-white px-4 sm:px-8 md:px-16">
      <div className="relative w-full max-w-[989px] h-auto md:h-[540px]">
        <Image
          src="/images/VedioA.png"
          alt="maingirl"
          height={540}
          width={989}
          className="w-full h-full object-cover shadow-lg rounded-lg"
        />
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-blue-500 flex justify-center items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-play"
          >
            <path d="M5 3l14 9-14 9v-18z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
