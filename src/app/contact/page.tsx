"use client"
import React from 'react';
import Image from 'next/image';

const ContactSection = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className='bg-rose-50'>
        <div className='p-12 mx-44 max-w-7xl'>
          <h1 className="font-bold text-blue-950 text-[26px]">Contact Us</h1>
          <div className="mb-8">
            <nav className="text-sm mb-4">
              <ol className="flex items-center space-x-2">
                <li><a href="/home" className="text-black hover:text-gray-800">Home •</a></li>
                <li><a href="/page" className="text-black hover:text-gray-800">Pages •</a></li>
                <li><a href="/page" className="text-pink-700 hover:text-gray-800">Contact Us</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-44 px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
          <div className="space-y-12">
            {/* Top Section with Information and Contact Way */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="space-y-4 md:w-1/2">
                  <h2 className="text-2xl font-bold text-blue-900">Information About us</h2>
                  <p className="text-gray-600 leading-relaxed pr-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
                    tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  </div>
                </div>

                <div className="space-y-4 md:w-1/2 mt-8 md:mt-0">
                  <h2 className="text-2xl font-bold text-blue-900">Contact Way</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 mt-2 rounded-full bg-blue-600"></div>
                      <div>
                        <p className="text-gray-600">Tel: 877-67-88-99</p>
                        <p className="text-blue-600">E-Mail: shop@store.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 mt-2 rounded-full bg-pink-500"></div>
                      <div>
                        <p className="text-gray-600">Support Forum</p>
                        <p className="text-pink-500">For over 24hr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 mt-2 rounded-full bg-orange-400"></div>
                      <div>
                        <p className="text-gray-600">20 Margaret st, London</p>
                        <p className="text-orange-400">Great Britain, 3NM98-LK</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 mt-2 rounded-full bg-green-400"></div>
                      <div>
                        <p className="text-gray-600">Free standard shipping</p>
                        <p className="text-green-400">on all orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get In Touch Form */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-900">Get In Touch</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition duration-300"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Illustration */}
          <div className="flex items-center justify-center lg:pt-20">
            <Image
              src="/images/contactus.png"
              alt="Contact illustration"
              width={300}
              height={300}
              className="max-w-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;