import { Montserrat } from "next/font/google";

// Use Montserrat font
const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center border-b border-gray-200 pb-6 mb-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252B42]">Bandage</div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/" className="p-2 bg-[#FAFAFA] rounded-full hover:bg-blue-200">
              <img src="/images/Fb.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/" className="p-2 bg-[#FAFAFA] rounded-full hover:bg-blue-200">
              <img src="/images/Insta.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://www.twitter.com/" className="p-2 bg-[#FAFAFA] rounded-full hover:bg-blue-200">
              <img src="/images/Twitter.png" alt="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-white">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#252B42]">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>About Us</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Carrier</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>We are hiring</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Blog</a></li>
            </ul>
          </div>

          {/* Column 2: Legal */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#252B42]">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>About Us</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Carrier</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>We are hiring</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Blog</a></li>
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#252B42]">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Business Marketing</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>User Analytics</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Live Chat</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Unlimited Support</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#252B42]">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>iOS & Android</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Watch a Demo</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>Customers</a></li>
              <li><a href="#" className={`hover:underline text-[#737373] ${montserrat.className}`}>API</a></li>
            </ul>
          </div>

          {/* Column 5: Get in Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-2">
              Lorem ipsum dolor amit.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-left pt-[10px] pb-[25px] gap-[213px] font-bold text-[#737373] ${montserrat.className} ml-[70px]">
        <h6>Made With Love By Finland All Rights Reserved</h6>
     </div>
    </footer>
  );
}
