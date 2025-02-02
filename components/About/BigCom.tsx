import Logo from "../Shop/Logo";

export default function BigCompanies() {
  return (
    <div className="h-[300px] w-full bg-[#FAFAFA]">
      <div className="h-full w-full mx-auto flex flex-col items-center justify-center">
        {/* Heading Section */}
        <h2 className="font-bold text-[40px] text-[#252B42] text-center mt-10 text-2xl sm:text-3xl md:text-4xl">
          Big Companies Are Here
        </h2>

        {/* Paragraph Section */}
        <p className="font-normal text-[14px] text-[#737373] text-center w-full sm:w-[574px] mt-4 text-sm sm:text-base">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Logo Section */}
        <div className="mt-[10px]">
          <Logo />
        </div>
      </div>
    </div>
  );
}
