import Link from "next/link";
import React from "react";
import { FaRegUser, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-[#23856D] text-white px-4 py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
        {/* Social Media & Utility Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <h6 className="font-bold text-xs sm:text-sm">Follow Us :</h6>
          <div className="flex space-x-3 sm:space-x-4">
            <FaInstagram className="hover:text-gray-300 cursor-pointer h-4 w-4 sm:h-5 sm:w-5" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer h-4 w-4 sm:h-5 sm:w-5" />
            <FaFacebookF className="hover:text-gray-300 cursor-pointer h-4 w-4 sm:h-5 sm:w-5" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>

        {/* Promotion Message */}
        <div className="hidden sm:flex items-center font-semibold text-center text-xs sm:text-sm">
          <span>Follow Us and get a chance to win 80% off</span>
        </div>

        {/* Help and Login */}
        <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm font-semibold">
          <Link href="/FAQs" className="hover:text-gray-300 font-bold">Help</Link>
          <Link href="/Register" className="flex items-center hover:text-gray-300 font-bold">
            <FaRegUser className="mr-1 h-4 w-4 sm:h-5 sm:w-5" /> Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
