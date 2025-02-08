import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Breadcrumb Navigation */}
      <section className='bg-rose-50'>
      <div className='p-12 mx-36'>
      <h1 className="font-bold text-blue-950 text-[26px]">404 </h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/home" className="text-black hover:text-gray-800">Home •</a></li>
            <li><a href="/notfound" className="text-black hover:text-gray-800">Pages •</a></li>
            <li><a href="/notfound" className="text-pink-700 hover:text-gray-800">Not Found</a></li>
          </ol>
        </nav>
      </div>
      </div>
      </section>

      {/* Main Content */}
      <div className="w-full max-w-lg text-center mb-8">
        {/* 404 Illustration */}
        <div className="w-full mb-8 relative h-64">
          <Image 
            src="/images/404error.png" 
            alt="404 illustration with construction theme"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Error Message */}
        <h2 className="text-xl text-gray-700 mb-6">
          oops! The page you requested was not found!
        </h2>

        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors duration-200"
        >
          Back To Home
        </Link>
      </div>

     {/* Brands Section */}
           <section>
             <div className="max-w-6xl mx-auto py-10 px-44">
               <div>
                 {/* Brand Logos */}
                 <div className="h-400 w-full">
                   <Image
                     src="/images/brands.png"
                     alt="brands"
                     width={800}
                     height={800}
                     className="h-400 w-400"
                   />
                 </div>
               </div>
             </div>
           </section>
    </div>
  );
};

export default NotFound;