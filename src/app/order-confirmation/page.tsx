'use client';
import React from 'react';
import { Clock, CheckCircle, Receipt } from 'lucide-react';
import Image from 'next/image';

const OrderCompleted = () => {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      {/* Breadcrumb */}
      <section className='bg-rose-50'>
      <div className='p-12 mx-36'>
      <h1 className="font-bold text-blue-950 text-[26px]">Order Completed</h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/home" className="text-black hover:text-gray-800">Home •</a></li>
            <li><a href="/order-confirmation" className="text-black hover:text-gray-800">Pages •</a></li>
            <li><a href="/order-confirmation" className="text-pink-700 hover:text-gray-800">Order Completed</a></li>
          </ol>
        </nav>
      </div>
      </div>
      </section>

      {/* Main Content */}
      <div className="max-w-3xl text-center mx-44 my-12">
        <div className="flex justify-center items-center mb-8 space-x-8">
          <Clock className="w-12 h-12 text-blue-600" />
          <CheckCircle className="w-16 h-16 text-pink-500" />
          <Receipt className="w-12 h-12 text-pink-500" strokeWidth={1.5} />
        </div>

        <h1 className="text-2xl font-bold mb-4">Your Order Is Completed!</h1>

        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Thank you for your order! Your order is being processed and will be completed within 3-6
          hours. You will receive an email confirmation when your order is completed.
        </p>

        <button 
          className="bg-pink-500 text-white px-8 py-3 rounded-md hover:bg-pink-600 transition-colors"
          onClick={() => window.location.href = '/'}
        >
          Continue Shopping
        </button>
      </div>
       {/* Brands Section /} */}
        <section>
        <div className="max-w-6xl mx-auto py-10 px-44">
        <div>
            {/* {/ Brand Logos */}
            <div className="h-400 w-full">
            <Image
            src="/images/brands.png"
            alt="brands"
            width= {800}
            height={800 }
            className="h-400 w-400"
            />
            </div>
        </div>
        </div>
        </section>
    </div>
  );
};

export default OrderCompleted;