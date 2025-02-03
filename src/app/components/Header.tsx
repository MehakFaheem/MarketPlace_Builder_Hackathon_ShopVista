'use client'
import { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { client } from "../../sanity/lib/client";

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        if (searchTerm.trim()) {
          const suggestionQuery = `*[_type == "product" && (
            name match "${searchTerm}*" || 
            description match "${searchTerm}*" || 
            category match "${searchTerm}*"
          )][0...5] {
            _id,
            name
          }`;
          const data = await client.fetch(suggestionQuery);
          setSuggestions(data);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/searchresult?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion.name);
    router.push(`/searchresult?query=${encodeURIComponent(suggestion.name)}`);
  };

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
          <Link href="/language" className="hover:underline">English</Link>
          <Link href="/currency" className="hover:underline">USD</Link>
          <Link href="/login" className="hover:underline">Login</Link>
          <CiUser className="text-lg ml-1" />
          <Link href="/wishlist" className="hover:underline">Wishlist</Link>
          <CiHeart className="text-lg ml-1" />
          <Link href="/cart">
            <FaShoppingCart className="text-lg ml-1" />
          </Link>
        </div>
      </div>
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-950">
            ShopVista
          </Link>
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <li>
              <Link href="/" className="hover:text-purple-700 text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages" className="hover:text-purple-700">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-purple-700">
                Products
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-700">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-700">
                Contact
              </Link>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="relative w-full max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="border border-gray-300 px-4 py-1 text-sm w-full"
            />
            {suggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md z-10 mt-1">
                {suggestions.map((suggestion) => (
                  <div
                    key={suggestion._id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.name}
                  </div>
                ))}
              </div>
            )}
            <button 
              type="submit"
              className='bg-pink-600 px-2 py-1.5 text-white absolute top-1/2 right-2 -translate-y-1/2'
            >
              <FaSearch/>
            </button>
          </form>
        </div> 
      </nav>
    </div>
  );
}

export default Header;