'use client'
import { useState, useEffect, useRef } from "react";
import { CiMail, CiHeart, CiUser } from "react-icons/ci";
import { FaPhoneVolume, FaShoppingCart, FaSearch, FaChevronDown } from "react-icons/fa";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { client } from "../../sanity/lib/client";

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim()) {
        try {
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
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  useEffect(() => {
    // Close dropdown if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="flex items-center space-x-3">
          <CiMail className="text-sm" />
          <span>mehak@gmail.com</span>
          <FaPhoneVolume className="text-sm" />
          <span>(12345)67890</span>
        </div>
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
            {/* Home with Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button 
                className="hover:text-pink-500 flex items-center gap-1" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Home <FaChevronDown className="text-sm" />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-20">
                  <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                  <Link href="/products" className="block px-4 py-2 hover:bg-gray-100">Products</Link>
                  <Link href="/cart" className="block px-4 py-2 hover:bg-gray-100">Shopping Cart</Link>
                  <Link href="/generalinfo" className="block px-4 py-2 hover:bg-gray-100">General Info</Link>
                  <Link href="/leftsidebar" className="block px-4 py-2 hover:bg-gray-100">Left Side Bar</Link>
                  <Link href="/shops" className="block px-4 py-2 hover:bg-gray-100">Shops</Link>

                </div>
              )}
            </li>

            <li><Link href="/about" className="hover:text-pink-500">About Us</Link></li>
            <li><Link href="/products" className="hover:text-pink-500">Products</Link></li>
            <li><Link href="/blogs" className="hover:text-pink-500">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-pink-500">Contact</Link></li>
            <li><Link href="/login" className="hover:text-pink-500">Login</Link></li>

          </ul>

          {/* Search Bar */}
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
              <FaSearch />
            </button>
          </form>
        </div> 
      </nav>
    </div>
  );
}

export default Header;
