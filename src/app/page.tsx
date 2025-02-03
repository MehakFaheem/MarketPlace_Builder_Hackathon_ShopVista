// import HomeContent from "@/app/pages/HomeContent";

// export default function Home() {
//     return (
//         <div>
//             <HomeContent />
//         </div>
//     );
// };
'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeContent = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-purple-50 flex flex-col lg:flex-row items-center px-8 lg:px-20 py-12 relative">
        {/* Lamp Holder Image */}
        <div className="absolute top-0 left-6 hidden lg:block z-10">
          <Image src="/black.png" alt="Lamp Holder" width={300} height={300} />
        </div>

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 w-full lg:ml-60 z-20">
          <span className="text-pink-600 font-semibold uppercase text-xs">
            Best Furniture For Your Castle...
          </span>
          <h1 className="text-4xl font-bold mt-3 leading-snug text-black">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in pharetra non in justo.
          </p>
          <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-800">
            Shop Now
          </button>
        </div>

        {/* Chair Image */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
          <div className="relative">
            <Image
              src="/pinkchair.png"
              alt="PinkChair"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <div
              className="absolute bg-blue-500 text-white px-4 py-1 rounded-full text-sm top-4 right-4"
              style={{ borderRadius: '20px 40px 10px 30px' }}
            >
              50% off
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-6 lg:mx-20 my-12">
        <h2 className="text-blue-950 font-Josefin Sans text-[38px] text-center justify-between py-">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-24">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <Image
              src="/images/whiteimg.png"
              alt="Product 1"
              width={100}
              height={48}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="2whiteimg.png"
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-blue-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="skyblueimg.png"
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="3whiteimg.png"
              alt="Product 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Products */}
<section className="py-10">
  <div>
    <h1 className="text-blue-950 font-Josefin Sans text-[38px] text-center py-6">
      Latest Products
    </h1>
  </div>
  
  {/* Navigation Links */}
  <div className="text-center text-blue-950 space-x-10 pb-6">
    <Link href="/" className="hover:text-pink-600 hover:underline">New Arrival</Link>
    <Link href="/" className="hover:text-pink-600 hover:underline">Best Seller</Link>
    <Link href="/" className="hover:text-pink-600 hover:underline">Featured</Link>
    <Link href="/" className="hover:text-pink-600 hover:underline">Special Offer</Link>
  </div>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-10">
    {/* Product Cards */}
    {[
      { img: "brown.png", name: "Comfort Handy Craft", price: "$42.00", price2: "$60.00" },
      { img: "yellow.png", name: "Comfort Handy Craft", price: "$42.00", price2: "$60.00" },
      { img: "white.png", name: "Comfort Handy Craft", price: "$42.00", price2: "$60.00" },
      { img: "sofa.png", name: "Comfort Handy Craft", price: "$42.00", price2: "$60.00" },
      { img: "blacksofa.png", name: "Comfort Handy Craft", price: "$42.00", price2: "$60.00" },
      { img: "3whiteimg.png", name: "Comfort Handy Craft", price: "$42.00", price2: "$60.00" },
    ].map((product, index) => (
      <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={product.img} alt={product.name} className="w-full h-[200px] object-contain" />
        <div className="p-4 text-center flex">
          <div className="flex justify-center gap-3 items-center">
            <h3 className="text-sm text-blue-950">{product.name}</h3>
            <p className="text-blue-950 px-4">{product.price}</p>
          </div>
          {product.price2 && <p className=" text-pink-700">{product.price2}</p>}
        </div>
      </div>
    ))}
  </div>
</section>


{/* What Shopex Offer Section */}
<section className="mx-6 lg:mx-20 my-12">
    <h2 className="text-blue-950 font-Josefin Sans text-[38px] text-center justify-between py-6">
        What Shopex Offer!
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-12">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-6 text-center">
            <Image
                src="/1.png"
                alt="24/7 Support"
                width={65}
                height={65}
                className="mx-auto mb-4 py-4"
            />
            <h3 className="text-blue-950 font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-6 text-center">
            <Image
                src="/2.png"
                alt="24/7 Support"
                width={65}
                height={65}
                className="mx-auto mb-4 py-2"
            />
            <h3 className="text-blue-950 font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-6 text-center">
            <Image
                src="/3.png"
                alt="24/7 Support"
                width={65}
                height={65}
                className="mx-auto mb-4"
            />
            <h3 className="text-blue-950 font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-6 text-center">
            <Image
                src="/4.png"
                alt="24/7 Support"
                width={65}
                height={65}
                className="mx-auto mb-4 py-3"
            />
            <h3 className="text-blue-950 font-bold text-xl mb-3">24/7 Support</h3>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </div>
</section>
{/* <!-- Product Card Container --> */}
<section>
<div className="max-w-6xl mx-auto p-6 bg-gradient-to-r from-pink-50 to-pink-100 min-h-screen flex items-center justify-center">
  <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl">
    <div className="relative w-full md:w-1/2">
      <div className="absolute inset-0 bg-pink-200 rounded-full opacity-20"></div>
      <img 
        src="/trending.png" 
        alt="B&B Italian Sofa" 
        className="relative z-10 w-full h-auto"
      />
    </div>

    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-navy-900">
        Unique Features Of Latest & Trending Products
      </h2>

      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-pink-500 mt-2"></div>
          <span className="text-gray-600">All frames constructed with hardwood solids and laminates</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
          <span className="text-gray-600">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
          <span className="text-gray-600">Arms, backs and seats are structurally reinforced</span>
        </li>
      </ul>
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">B&B Italian Sofa</h3>
        <p className="text-lg font-bold">$32.00</p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  </div>
</div>
</section>
{/* Trending Products */}
<section className="mx-6 lg:mx-20 my-12">
    <h2 className="text-blue-950 font-Josefin Sans text-[38px] text-center justify-between py-6">
        Trending Products
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-12">
        {/* Product 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-50 p-4">
                <Image
                    src="/trendingproducts1.png"
                    alt="Cantilever chair"
                    width={140}
                    height={140}
                    className="mx-auto"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-blue-950 font-bold">Cantilever chair</h3>
                <div className="flex justify-center gap-4 mt-2">
                    <span className="text-blue-600">$26.00</span>
                    <span className="text-gray-400 line-through">$42.00</span>
                </div>
            </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-50 p-4">
                <Image
                    src="/trendingproducts2.png"
                    alt="Cantilever chair"
                    width={140}
                    height={140}
                    className="mx-auto"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-blue-950 font-bold">Modern chair</h3>
                <div className="flex justify-center gap-4 mt-2">
                    <span className="text-blue-600">$32.00</span>
                    <span className="text-gray-400 line-through">$48.00</span>
                </div>
            </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-50 p-4">
                <Image
                    src="/trendingproducts3.png"
                    alt="Cantilever chair"
                    width={200}
                    height={200}
                    className="mx-auto"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-blue-950 font-bold">Stylish chair</h3>
                <div className="flex justify-center gap-4 mt-2">
                    <span className="text-blue-600">$29.00</span>
                    <span className="text-gray-400 line-through">$45.00</span>
                </div>
            </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-50 p-4">
                <Image
                    src="/trendingproducts4.png"
                    alt="Cantilever chair"
                    width={200}
                    height={200}
                    className="mx-auto"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-blue-950 font-bold">Comfort chair</h3>
                <div className="flex justify-center gap-4 mt-2">
                    <span className="text-blue-600">$28.00</span>
                    <span className="text-gray-400 line-through">$44.00</span>
                </div>
            </div>
        </div>
    </div>
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-pink-50 p-6 rounded-lg">
          <div className="space-y-4">
            <h2 className="text-indigo-900 text-xl font-bold">23% off in all products</h2>
            <a href="#" className="text-pink-500 hover:text-pink-600 text-sm">Shop Now</a>
            <div className="flex justify-center p-4">
              <img 
                src="trendingproducts5.png" 
                alt="Black Clock" 
                className="w-48 h-48 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <div className="space-y-4">
            <h2 className="text-indigo-900 text-xl font-bold">23% off in all products</h2>
            <a href="#" className="text-pink-500 hover:text-pink-600 text-sm">View Collection</a>
            <div className="flex justify-center p-4">
              <img 
                src="trendingproducts6.png" 
                alt="TV Console" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
    <div className="bg-white p-6 rounded-lg space-y-4">
  <div className="flex items-center space-x-4">
    <img 
      src="trendingproducts7.png" 
      alt="trendingproducts7" 
      className="w-20 h-20 object-contain"
    />
    <div className="flex-1">
      <h3 className="text-indigo-900 font-medium">Executive Seat chair</h3>
      <p className="text-indigo-900 font-semibold">$32.00</p>
    </div>
  </div>

  {/* Second Chair */}
  <div className="flex items-center space-x-4">
    <img 
      src="trendingproducts8.png" 
      alt="Executive Chair 2" 
      className="w-20 h-20 object-contain"
    />
    <div className="flex-1">
      <h3 className="text-indigo-900 font-medium">Executive Seat chair</h3>
      <p className="text-indigo-900 font-semibold">$32.00</p>
    </div>
  </div>

  {/* Third Chair */}
  <div className="flex items-center space-x-4">
    <img 
      src="trendingproducts9.png" 
      alt="Executive Chair 3" 
      className="w-20 h-20 object-contain"
    />
    <div className="flex-1">
      <h3 className="text-indigo-900 font-medium">Executive Seat chair</h3>
      <p className="text-indigo-900 font-semibold">$32.00</p>
    </div>
  </div>
  </div>
  </div>
</div>
</section>
<section>
<div className="max-w-6xl mx-auto p-6">
  {/* Header */}
  <div className="text-center mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">Discount Item</h2>
    
    {/* Navigation Tabs */}
    <div className="flex justify-center gap-4 text-gray-600">
      <a href="#" className="text-pink-500 hover:text-pink-600 border-b-2 border-pink-500">Wood Chair</a>
      <span className="text-gray-400">•</span>
      <a href="#" className="hover:text-pink-600">Plastic Chair</a>
      <span className="text-gray-400">•</span>
      <a href="#" className="hover:text-pink-600">Sofa Collection</a>
    </div>
  </div>

  {/* Product Content */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-indigo-900">20% Discount Of All Products</h3>
      <p className="text-pink-500 font-medium">Eams Sofa Compact</p>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget 
        feugiat habitasse nec, bibendum condimentum.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">Material expose like metals</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">Clear lines and geometric figures</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">Simple neutral colours</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-600">Material expose like metals</span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition-colors">
        Shop Now
      </button>
    </div>

    {/* Right Content - Chair Image */}
    <div className="relative">
      <div className="absolute inset-0 bg-pink-100 rounded-full"></div>
      <img 
        src="discountitem.png" 
        alt="Eams Sofa Compact" 
        className="relative z-10 w-full h-auto"
      />
    </div>
  </div>
</div>
</section>
{/* Top categories */}
{/* Header */}
<section>
<div className="max-w-6xl mx-auto p-6">
  <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 text-center mb-12">Top Categories</h2>

  {/* Product Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* First Chair Card */}
    <div className="relative group">
      <div className="bg-gray-50 rounded-full p-8 relative overflow-hidden">
        <img 
          src="topcategories.png" 
          alt="Mini LCW Chair" 
          className="w-full h-auto relative z-10"
        />
        {/* Button - Hidden by default, shown on hover */}
        <button className="bg-emerald-500 text-white px-4 py-1 mx-14 text-sm rounded-md hover:bg-emerald-600 absolute bottom-6 left-8 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">   
          View Shop
        </button>
      </div>
      <div className="text-center mt-4 space-y-2">
        <h3 className="text-indigo-900 font-medium">Mini LCW Chair</h3>
        <p className="text-indigo-900 font-semibold">$56.00</p>
      </div>
    </div>

    {/* Second Chair Card */}
    <div className="relative group">
      <div className="bg-gray-50 rounded-full p-8 relative overflow-hidden">
        <img 
          src="whiteimg.png" 
          alt="Mini LCW Chair" 
          className="w-full h-auto relative z-10"
        />
        <button className="bg-emerald-500 text-white px-4 py-1 mx-14 text-sm rounded-md hover:bg-emerald-600 absolute bottom-6 left-8 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
          View Shop
        </button>
      </div>
      <div className="text-center mt-4 space-y-2">
        <h3 className="text-indigo-900 font-medium">Mini LCW Chair</h3>
        <p className="text-indigo-900 font-semibold">$56.00</p>
      </div>
    </div>

    {/* Third Chair Card */}
    <div className="relative group">
      <div className="bg-gray-50 rounded-full p-8 relative overflow-hidden">
        <img 
          src="trendingproducts1.png" 
          alt="Mini LCW Chair" 
          className="w-full h-auto relative z-10"
        />
        <button className="bg-emerald-500 text-white px-4 py-1 mx-14 text-sm rounded-md hover:bg-emerald-600 absolute bottom-6 left-8 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
          View Shop
        </button>
      </div>
      <div className="text-center mt-4 space-y-2">
        <h3 className="text-indigo-900 font-medium">Mini LCW Chair</h3>
        <p className="text-indigo-900 font-semibold">$56.00</p>
      </div>
    </div>

    {/* Fourth Chair Card */}
    <div className="relative group">
      <div className="bg-gray-50 rounded-full p-8 relative overflow-hidden">
        <img 
          src="topcategories.png" 
          alt="Mini LCW Chair" 
          className="w-full h-auto relative z-10"
        />
        <button className="bg-emerald-500 text-white px-4 py-1 mx-14 text-sm rounded-md hover:bg-emerald-600 absolute bottom-6 left-8 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
          View Shop
        </button>
      </div>
      <div className="text-center mt-4 space-y-2">
        <h3 className="text-indigo-900 font-medium">Mini LCW Chair</h3>
        <p className="text-indigo-900 font-semibold">$56.00</p>
      </div>
    </div>
  </div>

  {/* Slider Dots */}
  <div className="flex justify-center gap-2 mt-8">
    <button className="w-2 h-2 rounded-full bg-pink-500"></button>
    <button className="w-2 h-2 rounded-full bg-gray-300"></button>
    <button className="w-2 h-2 rounded-full bg-gray-300"></button>
  </div>
</div>
</section>

<section>
{/* Newsletter Section */}
<div className="relative w-full bg-gray-100 py-24">
  {/* Background Image Container */}
  <div className="absolute inset-0">
    <img 
      src="subscribe.jpg"
      alt="Newsletter background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
      Get Leatest Update By Subscribe
    </h2>
    <h3 className="text-xl md:text-2xl font-bold text-indigo-900 mb-8">
      Our Newslater
    </h3>
    <button className="bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition-colors">
      Shop Now
    </button>
  </div>
</div>

{/* Brands Section */}
<div className="max-w-6xl mx-auto py-12 px-6">
  <div>
    {/* Brand Logos */}
    <div className="h-400 w-full">
      <img 
        src="brands.png"
        alt="brands"
        className="h-400 w-400"
      />
    </div>
  </div>
</div>
</section>

{/* Latest Blog */}
<section className="mx-6 lg:mx-20 my-12">
    <h2 className="text-blue-950 font-Josefin Sans text-[38px] text-center justify-between py-6">
        Latest Blog
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12">
        {/* Blog 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
                src="/latestblog.jpg"
                alt="Blog 1"
                width={400}
                height={300}
                className="w-full object-cover"
            />
            <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-pink-600">SaberAli</span>
                    <span className="text-gray-500">21 August,2020</span>
                </div>
                <h3 className="text-blue-950 font-bold mb-3">Top essential Trends in 2021</h3>
                <p className="text-gray-500 text-sm mb-4">
                    More off this less hello samlande lied much over tightly circa horse taped mightily
                </p>
                <Link href="/" className="text-blue-600 hover:text-blue-700">
                    Read More
                </Link>
            </div>
        </div>

        {/* Blog 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
                src="/latestblog2.jpg"
                alt="Blog 2"
                width={400}
                height={300}
                className="w-full object-cover"
            />
            <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-pink-600">Surfauxion</span>
                    <span className="text-gray-500">22 August,2020</span>
                </div>
                <h3 className="text-blue-950 font-bold mb-3">New Furniture Design Trends</h3>
                <p className="text-gray-500 text-sm mb-4">
                    More off this less hello samlande lied much over tightly circa horse taped mightily
                </p>
                <Link href="/" className="text-blue-600 hover:text-blue-700">
                    Read More
                </Link>
            </div>
        </div>

        {/* Blog 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
                src="/latestblog3.jpg"
                alt="Blog 3"
                width={400}
                height={300}
                className="w-full object-cover"
            />
            <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-pink-600">SaberAli</span>
                    <span className="text-gray-500">23 August,2020</span>
                </div>
                <h3 className="text-blue-950 font-bold mb-3">Interior Design Trends 2021</h3>
                <p className="text-gray-500 text-sm mb-4">
                    More off this less hello samlande lied much over tightly circa horse taped mightily
                </p>
                <Link href="/" className="text-blue-600 hover:text-blue-700">
                    Read More
                </Link>
            </div>
        </div>
    </div>
</section>
</div>
);
};
export default HomeContent;