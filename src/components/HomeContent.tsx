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
            <img
              src="whiteimg.png"
              alt="Product 1"
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
      {/* latest products */}
      <section>
        <div>
          <h1 className="text-blue-950 font-Josefin Sans text-[38px] text-center justify-between py-6">Latest Products</h1>
        </div>
        <div className="text-center justify-center text-blue-950 space-x-10" >
          <Link href="/" className="hover:text-pink-600 hover:underline">New Arrival</Link>
          <Link href="/" className="hover:text-pink-600 hover:underline">Best Seller</Link>
          <Link href="/" className="hover:text-pink-600 hover:underline">Featured</Link>
          <Link href="/" className="hover:text-pink-600 hover:underline">Special Offer</Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-20">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376 ">
            <img
              src="brown.png"
              alt="Product 1"
              className="w-full h-25 object-cover"
            />
            <div className="p-4 text-center flex gap-3 font-10px">
              <h3 className="text-pink-500 font-bold">Comfort Handy Craft</h3>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="yellow.png"
              alt="Product 4"
              className="w-full h-25 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="white.png"
              alt="Product 4"
              className="w-full h-25 object-cover"
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
              src="sofa.png"
              alt="Product 4"
              className="w-full h-25 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="blacksofa.png"
              alt="Product 4"
              className="w-full h-25 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out top-1105 left-376">
            <img
              src="3whiteimg.png"
              alt="Product 4"
              className="w-full h-25 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-pink-500 font-bold">Cantilever Chair</h3>
              <p className="text-sm text-gray-500">Code - Y523201</p>
              <p className="text-lg font-bold text-gray-800">$42.00</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;