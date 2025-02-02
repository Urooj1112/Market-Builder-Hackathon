import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="flex w-full max-w-md shadow-lg bg-white rounded-lg p-8">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Create an Account
          </h2>
          <form>
            {/* Full Name */}
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#23A6F0] text-white py-2 px-4 rounded-lg  hover:text-black hover:bg-gray-400 transition duration-200"
            >
              Register
            </button>
          </form>

          {/* Social Login */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-4">Or register with</p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center justify-center bg-red-500 text-white py-3 px-3 rounded-full hover:bg-red-600 transition duration-200">
                <FaGoogle size={24} />
              </button>
              <button className="flex items-center justify-center bg-blue-700 text-white py-3 px-3 rounded-full hover:bg-blue-800 transition duration-200">
                <FaFacebook size={24} />
              </button>
              <button className="flex items-center justify-center bg-gray-800 text-white py-3 px-3 rounded-full hover:bg-gray-900 transition duration-200">
                <FaGithub size={24} />
              </button>
            </div>
          </div>

          {/* Redirect to Login */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-[#23A6F0] hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
