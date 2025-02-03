'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../sanity/lib/image';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

const ShoppingCart = () => {
  const { cart, updateQuantity, clearCart, cartTotal } = useCart();
  console.log('Cart in ShoppingCart component:', cart);
  const shippingCost = 106; // Additional costs
  const total = cartTotal + shippingCost;
  const router = useRouter();

  return (
    <div className="max-w-7xl px-4 py-8">
      <section className="bg-rose-100">
        <div className="p-12 mx-36">
          <h1 className="text-2xl font-bold text-blue-950">Shopping Cart</h1>
          <div className="mb-8">
            <nav className="text-sm mb-4">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-black hover:text-gray-800">
                    Home •
                  </Link>
                </li>
                <li>
                  <Link href="/pages" className="text-black hover:text-gray-800">
                    Pages •
                  </Link>
                </li>
                <li>
                  <span className="text-pink-700">Shopping Cart</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-8 mx-48 my-12 text-sm">
        <div className="lg:w-2/3">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-blue-950">
                  <th className="text-left py-4">Product</th>
                  <th className="text-left py-4">Price</th>
                  <th className="text-left py-4">Quantity</th>
                  <th className="text-left py-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item._id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={urlFor(item.image).url()}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-gray-500">Color: {item.color}</p>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">£{parseFloat(item.price).toFixed(2)}</td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4">£{(parseFloat(item.price) * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between mt-6">
            <Link
              href="/"
              className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Continue Shopping
            </Link>
            <button
              onClick={clearCart}
              className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
            >
              Clear Cart
            </button>
          </div>
        </div>

        <div className="lg:w-1/3 text-blue-950">
          <div className="bg-gray-50 p-6 rounded">
            <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotals:</span>
                <span>£{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Totals:</span>
                <span>£{total.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-gray-500">
                * Shipping & taxes calculated at checkout
              </p>
              <button 
                onClick={() => router.push('/checkout')}
                className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-6 rounded">
            <h2 className="text-xl font-bold mb-4">Calculate Shiping</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-2 border rounded"
              />
              <button className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                Calculate Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;