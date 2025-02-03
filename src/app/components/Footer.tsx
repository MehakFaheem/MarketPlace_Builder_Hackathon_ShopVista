// Footer.tsx
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { RxInstagramLogo } from 'react-icons/rx';

function Footer() {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup logic here
    console.log('Email submitted:', email);
  };

  return (
    <div>
      <footer className="text-gray-600 body-font bg-[#E7E4F8]">
        <div className="container px-5 py-24 mx-auto mt-[40px]">
          <div className="flex flex-wrap md:text-left text-center order-first">
            {/* Column 1 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Hekto
              </h2>
              <form onSubmit={handleSubmit} className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  />
                  <input
                    type="email"
                    id="footer-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-xs outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button 
                  type="submit"
                  className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Sign-Up
                </button>
              </form>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Contact Info
                <br className="lg:block hidden" />
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>

            {/* Column 2 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3 ml-6">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/category/laptops" className="text-gray-600 hover:text-gray-800 ml-6">
                    Laptops & Computers
                  </Link>
                </li>
                <li>
                  <Link href="/category/cameras" className="text-gray-600 hover:text-gray-800 ml-6">
                    Cameras & Photography
                  </Link>
                </li>
                <li>
                  <Link href="/category/smartphones" className="text-gray-600 hover:text-gray-800 ml-6">
                    Smart Phones & Tablets
                  </Link>
                </li>
                <li>
                  <Link href="/category/gaming" className="text-gray-600 hover:text-gray-800 ml-6">
                    Video Games & Consoles
                  </Link>
                </li>
                <li>
                  <Link href="/category/headphones" className="text-gray-600 hover:text-gray-800 ml-6">
                    Waterproof Headphones
                  </Link>
                </li>
              </nav>
            </div>

            {/* Column 3 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Customer Care
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/account" className="text-gray-600 hover:text-gray-800">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/discounts" className="text-gray-600 hover:text-gray-800">
                    Discount
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-gray-600 hover:text-gray-800">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="text-gray-600 hover:text-gray-800">
                    Orders History
                  </Link>
                </li>
                <li>
                  <Link href="/tracking" className="text-gray-600 hover:text-gray-800">
                    Order Tracking
                  </Link>
                </li>
              </nav>
            </div>

            {/* Column 4 */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-black tracking-widest text-lg mb-3">
                Pages
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-gray-800">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-gray-600 hover:text-gray-800">
                    Browse the Shop
                  </Link>
                </li>
                <li>
                  <Link href="/category" className="text-gray-600 hover:text-gray-800">
                    Category
                  </Link>
                </li>
                <li>
                  <Link href="/pre-built" className="text-gray-600 hover:text-gray-800">
                    Pre-Built Pages
                  </Link>
                </li>
                <li>
                  <Link href="/elements" className="text-gray-600 hover:text-gray-800">
                    Visual Composer Elements
                  </Link>
                </li>
                <li>
                  <Link href="/woocommerce" className="text-gray-600 hover:text-gray-800">
                    WooCommerce Pages
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-[#E7E4F8]">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © {currentYear} Hekto —
              <Link
                href="https://twitter.com/knyttnev"
                className="text-gray-600 ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Right Reserved
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href="https://facebook.com" className="text-3xl text-gray-900">
                <FaFacebook />
              </Link>
              <Link href="https://instagram.com" className="text-3xl ml-3 text-gray-900">
                <RxInstagramLogo />
              </Link>
              <Link href="https://linkedin.com" className="text-3xl ml-3 text-gray-900">
                <FaLinkedin />
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;