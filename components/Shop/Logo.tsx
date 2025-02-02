import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center px-6 sm:px-10 lg:px-20 my-6 sm:my-10">
      <div className="flex flex-wrap gap-6 sm:gap-8 justify-center items-center w-full">
        <Image src="/images/hooli.png" alt="hoolie" width={170} height={34} className="max-w-[120px] sm:max-w-[170px]" />
        <Image src="/images/lyft.png" alt="lyft" width={146} height={59} className="max-w-[100px] sm:max-w-[146px]" />
        <Image src="/images/pen.png" alt="pen" width={152} height={15} className="max-w-[110px] sm:max-w-[152px]" />
        <Image src="/images/stripe.png" alt="stripe" width={151} height={42} className="max-w-[115px] sm:max-w-[151px]" />
        <Image src="/images/aws.png" alt="aws" width={151} height={72} className="max-w-[115px] sm:max-w-[151px]" />
        <Image src="/images/reddit.png" alt="reddit" width={151} height={62} className="max-w-[115px] sm:max-w-[151px]" />
      </div>
    </div>
  );
}
