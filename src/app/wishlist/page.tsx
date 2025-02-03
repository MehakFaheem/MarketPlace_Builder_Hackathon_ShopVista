'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { urlFor } from '../../sanity/lib/image';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist, addToCart, cart } = useCart();

    // Calculate discounted price
    const calculateDiscountedPrice = (price: string, discount?: number) => {
        const numericPrice = parseFloat(price);
        if (!discount) return numericPrice;
        return numericPrice - (numericPrice * (discount / 100));
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Header with Cart Icon */}
            <div className="fixed top-4 right-4 z-50">
                <Link href="/cart" className="relative">
                    <ShoppingCart className="h-6 w-6 text-purple-600" />
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                            {cart.reduce((sum, item) => sum + item.quantity, 0)}
                        </span>
                    )}
                </Link>
            </div>

            {/* Breadcrumb */}
            <div className="bg-gray-100 px-4 md:px-32 py-20">
                <div className="container mx-auto px-4 md:px-10">
                    <h2 className="text-2xl font-bold text-blue-950">My Wishlist</h2>
                    <div className="text-sm text-blue-950 mt-2">
                        <Link href="/" className="hover:text-purple-600">Home</Link> /
                        <span className="text-pink-600"> Wishlist</span>
                    </div>
                </div>
            </div>

            {/* Wishlist Content */}
            <div className="container mx-auto px-4 md:px-32 py-12">
                {wishlist.length === 0 ? (
                    <div className="text-center py-20">
                        <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-600 mb-2">Your wishlist is empty</h3>
                        <p className="text-gray-500 mb-6">Browse our products and add items you love to your wishlist</p>
                        <Link href="/" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {wishlist.map((item) => (
                            <div key={item._id} className="bg-white rounded-lg shadow-md p-4 relative">
                                {/* Remove from wishlist button */}
                                <button
                                    onClick={() => removeFromWishlist(item._id)}
                                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>

                                {/* Product Image */}
                                <div className="relative h-48 mb-4">
                                    <Image
                                        src={urlFor(item.image).url()}
                                        alt={item.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="text-center">
                                    <h3 className="font-semibold text-purple-600 mb-2">{item.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                                    
                                    {/* Price */}
                                    <div className="flex justify-center space-x-2 text-sm mb-4">
                                        {item.discountPercentage ? (
                                            <>
                                                <span className="text-gray-500 line-through">
                                                    ${item.price}
                                                </span>
                                                <span className="text-purple-600">
                                                    ${calculateDiscountedPrice(item.price, item.discountPercentage).toFixed(2)}
                                                </span>
                                            </>
                                        ) : (
                                            <span className="text-purple-600">${item.price}</span>
                                        )}
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button
                                        onClick={() => {
                                            addToCart(item);
                                            removeFromWishlist(item._id);
                                        }}
                                        className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                                    >
                                        Move to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistPage;