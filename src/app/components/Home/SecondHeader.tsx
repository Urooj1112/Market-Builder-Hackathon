"use client"; 

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts as queryAllProducts } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "../../../types/products";
import { FaShoppingCart, FaRegHeart, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [categoryOpen, setCategoryOpen] = useState<boolean>(false);

  const truncateDescription = (text: string | undefined) => {
    return text && text.length > 100
      ? text.slice(0, 100) + "..."
      : text || "No description available.";
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(queryAllProducts);
        setAllProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <header>
      <div className="bg-white shadow py-5">
        <div className="container mx-auto px-4 flex justify-between items-center text-lg w-full flex-wrap">
          <h3 className="text-[#252B42] font-bold text-[24px]">Bandage</h3>

          {/* Navigation Links */}
          <nav className="flex space-x-6 items-center flex-wrap justify-center sm:justify-start">
            <Link href="/" className="hover:text-[#23A6F0] font-bold text-[16px] text-[#737373] tracking-[0.2px]">
              Home
            </Link>

            <div className="relative cursor-pointer" onClick={toggleDropdown}>
              <div className="flex items-center space-x-1 font-bold text-[16px] text-[#737373] tracking-[0.2px] hover:text-[#23A6F0]">
                <Link href="/Shop">Shop</Link>
                <IoIosArrowDown className="text-[#737373]" />
              </div>
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg py-2 mt-2 w-40">
                  <Link href="/Team" className="block px-4 py-2 text-sm text-[#737373] hover:bg-blue-100 hover:text-[#23A6F0]">
                    Team
                  </Link>
                  <Link href="/Pricing" className="block px-4 py-2 text-sm text-[#737373] hover:bg-blue-100 hover:text-[#23A6F0]">
                    Pricing
                  </Link>
                </div>
              )}
            </div>

            <Link href="/About" className="hover:text-[#23A6F0] font-bold text-[16px] text-[#737373] tracking-[0.2px]">
              About
            </Link>
            <Link href="/Blog" className="hover:text-[#23A6F0] font-bold text-[16px] text-[#737373] tracking-[0.2px]">
              Blog
            </Link>
            <Link href="/Contact" className="hover:text-[#23A6F0] font-bold text-[16px] text-[#737373] tracking-[0.2px]">
              Contact
            </Link>
            {/* Category Dropdown */}
            <div className="relative cursor-pointer" onClick={toggleCategory}>
              <div className="flex items-center space-x-1 font-bold text-[16px] text-[#737373] tracking-[0.2px] hover:text-[#23A6F0]">
                <span>Category</span>
                <IoIosArrowDown className="text-[#737373]" />
              </div>
              {/* Category Dropdown Menu */}
              {categoryOpen && (
                <div className="absolute bg-white shadow-lg rounded-lg py-2 mt-2 w-40">
                  <Link href="/Shop/Bedroom" className="block px-4 py-2 text-sm text-[#737373] hover:bg-blue-100 hover:text-[#23A6F0]">
                    Bedroom
                  </Link>
                  <Link href="/Shop/Home-decor" className="block px-4 py-2 text-sm text-[#737373] hover:bg-blue-100 hover:text-[#23A6F0]">
                    Home Decor
                  </Link>
                  <Link href="/Shop/Lighting" className="block px-4 py-2 text-sm text-[#737373] hover:bg-blue-100 hover:text-[#23A6F0]">
                    Lighting
                  </Link>
                  <Link href="/Shop/Furniture" className="block px-4 py-2 text-sm text-[#737373] hover:bg-blue-100 hover:text-[#23A6F0]">
                    Furniture
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Search Bar in Header */}
          <div className="relative flex items-center space-x-4 mt-4 sm:mt-0">
            {/* Search Bar */}
            <div className="relative w-full max-w-xs sm:max-w-lg">
              <input
                type="text"
                className="w-full py-2 pl-4 pr-12 border rounded-lg focus:outline-none"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* Search Icon on the Right */}
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#737373]" />
            </div>
          </div>

          {/* Cart and Wishlist Icons */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Link href="/Cart">
              <FaShoppingCart className="hover:text-[#23A6F0] cursor-pointer h-6 w-6" />
            </Link>

            <FaRegHeart className="hover:text-[#23A6F0] cursor-pointer h-6 w-6" />
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 && searchQuery && (
        <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
          <p className="text-gray-500">No products found.</p>
        </div>
      )}

      {filteredProducts.length > 0 && searchQuery && (
        <div className="p-4 bg-white shadow-lg rounded-lg mt-4">
          <h2 className="text-lg font-bold">Search Results:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
              >
                {/* Product Image */}
                {product.productImage?.asset?._ref && (
                  <Image
                    src={urlFor(product.productImage.asset._ref).url()}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                {/* Product Title */}
                <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
                {/* Product Price */}
                <p className="text-gray-500 mt-2">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>
                {/* Product Description */}
                <p className="text-slate-800 mt-2 text-sm">
                  {product.description ? truncateDescription(product.description) : "No description available."}
                </p>
                {/* Discount */}
                {product.discountPercentage > 0 && (
                  <p className="text-sm text-green-600">
                    {product.discountPercentage}% OFF
                  </p>
                )}

                {/* Link to the Product Detail Page */}
                <Link
                  href={`/product/${product.slug?.current || product.slug}`}
                  className="block px-4 py-2 text-sm text-[#23A6F0] hover:text-[#23A6F0] font-semibold"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
