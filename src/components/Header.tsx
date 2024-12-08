import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div>
   {/* Topbar */}
   <div className="bg-purple-700 text-white flex justify-between items-center px-4 py-2 text-xs">
        {/* Email and Phone */}
        <div className="flex items-center space-x-3">
          <CiMail className="text-sm" />
          <span>mhhasanul@gmail.com</span>
          <FaPhoneVolume className="text-sm" />
          <span>(12345)67890</span>
        </div>
        {/* Right Options */}
        <div className="flex items-center space-x-2">
          <a href="#" className="hover:underline">English</a>
          <a href="#" className="hover:underline">USD</a>
          <a href="#" className="hover:underline">Login</a>
          <CiUser className="text-lg ml-1" />
          <a href="#" className="hover:underline">Wishlist</a>
          <CiHeart className="text-lg ml-1" />
          <FaShoppingCart className="text-lg ml-1" />
        </div>
      </div>
  {/* Navbar */}
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-3 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-950">Hekto</div>
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <li><a href="#" className="hover:text-purple-700 text-pink-500">Home</a></li>
        <li><a href="#" className="hover:text-purple-700">Pages</a></li>
        <li><a href="#" className="hover:text-purple-700">Products</a></li>
        <li><a href="#" className="hover:text-purple-700">Blog</a></li>
        <li><a href="#" className="hover:text-purple-700">Contact</a></li>
      </ul>
      <div className="flex items-center space-x-0">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-4 py-1 text-sm"
        />
        <div className='bg-pink-600 px-2 py-1.5 text-white'>
           <FaSearch/>
        </div>
      </div>
    </div> 
  </nav>
</div>
  );
}
