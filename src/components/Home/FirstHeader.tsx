import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaRegUser } from "react-icons/fa";
const FirstHeader = () => {
  return (
    <div className="bg-[#252B42] text-white pt-2 h-10 px-2 py-1">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <FaInstagram className="hover:text-gray-300 cursor-pointer h-5 w-5" />
          <FaYoutube className="hover:text-gray-300 cursor-pointer h-5 w-5" />
          <FaFacebookF className="hover:text-gray-300 cursor-pointer h-5 w-5" />
          <FaTwitter className="hover:text-gray-300 cursor-pointer h-5 w-5" />
        </div>
        <div className="flex items-center space-x-6">
          <Link
            href="/FAQs"
            className="hover:text-[#23A6F0] font-bold text-[14px] tracking-[0.2px]"
          >Help
          </Link>
          <Link
            href="/Register"
            className="flex items-center hover:text-[#23A6F0] font-bold text-[14px] tracking-[0.2px]"
          >
            <FaRegUser className="mr-1 h-5 w-5" /> Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
