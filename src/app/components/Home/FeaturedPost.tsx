import React from 'react';
import Image from 'next/image';

const FeaturedPosts = () => {
  const posts = [
    {
      image: "/images/road.png", 
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/images/car.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
    {
      image: "/images/unsplash.png",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: "10 comments",
    },
  ];

  return (
    <div className="flex items-center justify-center h-auto bg-gray-100 py-8">
      {/* Main Container */}
      <div className="container text-center px-4">
        {/* Section Header */}
        <h6 className="text-[16px] font-bold text-[#23A6F0]">
          Practice Advice
        </h6>
        <h2 className="text-[32px] sm:text-[40px] font-bold text-[#252B42]">
          Featured Posts
        </h2>
        <p className="text-[14px] text-[#737373] mx-auto w-full max-w-2xl mb-5">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Grid of Featured Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-full">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md overflow-hidden rounded-lg"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={`Post ${index + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                  New
                </span>
              </div>
              <div className="p-6 text-left">
                <p className="text-sm text-gray-500 mb-1">
                  <span className="text-[#23A6F0]">Google</span>{" "}
                  <span className="text-[#737373]">Trending</span>{" "}
                  <span className="text-[#737373]">New</span>
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-[#252B42] mb-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-[#737373] mb-4">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-[#737373] text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center">
                      <svg
                        className="h-4 w-4 text-[#23A6F0]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6 2a6 6 0 0112 0v8a6 6 0 11-12 0V2zM2 14a4 4 0 014-4h8a4 4 0 014 4v2H2v-2z" />
                      </svg>
                      {post.date}
                    </span>
                    <span>|</span>
                    <span>{post.comments}</span>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-blue-500 font-bold hover:underline mt-4 inline-block"
                >
                  Learn More <span className="text-[#23A6F0]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
