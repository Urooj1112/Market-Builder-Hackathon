'use client'; // Ensures this component is rendered on the client side
function FloatingPage2() {
return (
    <div className="container mx-auto p-4">
      <h4 className="text-3xl font-bold text-[#252B42] mb-4">Floating Phone</h4>

      {/* Rating Section */}
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <h3 className="text-[#252B42]">$1,139.33</h3>
          <div><span className="text-[#252B42]">Rating: </span></div>

          <div className="ml-2 flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26.95.69l-4.128 4.128c-.3.921-.704 1.724-.95 2.374-.34.9-.667 1.577-.95 2.053l-.38.38a1 1 0 00-.367.917l-.318.318a1 1 0 00.084 1.632l7.908 8.15a1 1 0 001.454-1.352l-2.117-9.265a1 1 0 00-.283-.5l-7.151-6.675a1 1 0 00-.735-.235l-4.695 1.448a1 1 0 00-.594.473L5.3 8.37a1 1 0 00-.242 1.122l2.16 7.062a1 1 0 00.79.688h7.51l-5.792 5.892c-.387.389-.556.948-.469 1.462l1.07 5.84a1 1 0 001.516.718l8.139-6.471a1 1 0 00.125-1.5l-3.21-4.48a1 1 0 00-.09-.11l-1.314-1.21z"
                />
              </svg>
            ))}
          </div>
        </div>
      </div>



      {/* Product Description */}
      <div className="mt-4">

        <p className="text-[#858585]">
          Met minim Mollie non desert Alamo est sit cliquey dolor
          do met sent. RELIT official consequent door ENIM RELIT Mollie.
          Excitation venial consequent sent nostrum met.
        </p>
      </div>
      {/* Color Selection Section */}
      <div className="mb-4">

        <div className="flex space-x-4  mt-[60px]">
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-blue-500"
          />
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-green-500"
          />
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-red-500"
          />
          <button
            className="color-btn w-8 h-8 rounded-full border-2 border-gray-300 bg-black-500"
          />
        </div>
      </div>
      {/* Add to Cart Button */}
      <div className="mt-[80px]">
        <button className="px-6 py-2 bg-[#23A6F0] text-white  hover:bg-blue-700">
          Select Option
        </button>
      </div>
    </div>
  );
}

export default FloatingPage2;
