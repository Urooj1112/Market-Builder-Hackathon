import React from 'react';

const ShopCard = () => {
  return (
    <div className="container bg-[#FAFAFA] pb-10 mx-auto px-4">
      <h3 className="text-3xl font-bold text-[#252B42] mt-4 mb-4">Shop</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Item 1 */}
        <div className="bg-white overflow-hidden rounded-lg shadow-md">
          <img
            src="/images/Product1.png"
            alt="Product 1"
            className="w-full h-48 object-cover"
          />
         
        </div>
        {/* Item 2 */}
        <div className="bg-white overflow-hidden rounded-lg shadow-md">
          <img
            src="/images/Product2.png"
            alt="Product 2"
            className="w-full h-48 object-cover"
          />
         
        </div>
        {/* Item 3 */}
        <div className="bg-white overflow-hidden rounded-lg shadow-md">
          <img
            src="/images/Product3.png"
            alt="Product 3"
            className="w-full h-48 object-cover"
          />
         
        </div>
        {/* Item 4 */}
        <div className="bg-white overflow-hidden rounded-lg shadow-md">
          <img
            src="/images/Product4.png"
            alt="Product 4"
            className="w-full h-48 object-cover"
          />
         
        </div>
        {/* Item 5 */}
        <div className="bg-white overflow-hidden rounded-lg shadow-md">
          <img
            src="/images/Product5.png"
            alt="Product 5"
            className="w-full h-48 object-cover"
          />
         
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
