"use client";   
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { urlFor } from "@/sanity/lib/image";
import { FaStar } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

interface IProducts {
  id: string;
  heading: string;
  subheading: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: {
    originalPrice: string;
    discountedPrice: string;
  };
}

const ProductDetails = ({ productId }: { productId: string }) => {
  const [result, setResult] = useState<IProducts | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          image,
          price ,
          discountPercentage,
          description
        }`;
        const data = await client.fetch(query);
        const product = data.find((item: IProducts) => item.id === productId);
        setResult(product || null);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          aria-label="Loading..."
        ></div>
      </div>
    );
  }

  if (!result) {
    return (
      <p
        className={`${montserrat.className} text-center text-3xl font-semibold text-gray-800`}
      >
        Product not found
      </p>
    );
  }

  return (
    <div className="p-8 hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-center space-y-4">
          <Image
            src={
              result.image?.asset
                ? urlFor(result.image.asset).url()
                : "/images/placeholder.jpg"
            }
            alt={`Main Image ${result.heading || "Product"}`}
            className="w-full h-auto lg:w-[450px] lg:h-[500px] rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            width={506}
            height={450}
            priority
          />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h1
            className={`${montserrat.className} text-3xl font-semibold text-gray-800`}
          >
            {result.heading}
          </h1>
          <h2
            className={`${montserrat.className} text-lg font-medium text-gray-600`}
          >
            {result.subheading}
          </h2>
          <div className="flex items-center space-x-2">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            <FaStar className="text-gray-300" />
            <span className="text-gray-500">(10 Reviews)</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-xl font-bold text-green-600">
              ${result.price.discountedPrice}
            </span>
            <span className="line-through text-gray-500 text-lg">
              ${result.price.originalPrice}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
