import React from 'react';

const ResultsHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4 sm:mb-0 sm:ml-[100px]">
        <span className="text-gray-600 font-medium text-[#737373] text-[14px]">
          Showing all 12 results
        </span>
      </div>
      <div className="flex items-center w-full sm:w-auto justify-between sm:justify-end">
        <div className="flex items-center mb-4 sm:mb-0 hidden sm:flex">
          <span className="text-gray-600 font-medium mr-2">Views:</span>
          <div className="inline-flex items-center">
            {/* List View Button */}
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Grid View Button */}
            <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-md">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.5a1 1 0 01-.2.8l-13.5 13.5a1 1 0 010 1.4l-2.6 2.6a1 1 0 01-1.4 0l-1.4-1.4a1 1 0 010-1.4l2.6-2.6a1 1 0 011.4 0l13.5 13.5a1 1 0 01.8-.2H20a1 1 0 011-1V4z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-gray-600 font-medium">Sort by:</span>
          <select className="ml-2 bg-gray-200 text-gray-600 p-2 rounded-md focus:outline-none">
            <option value="latest">Latest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
