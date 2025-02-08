'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client"; 
import { urlFor } from "../../sanity/lib/image";
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearchParams } from 'next/navigation';

interface Product {
  _id: string;
  name: string;
  image: any; // Changed from string to any for Sanity images
  price: string;
  description?: string;
  discountPercentage?: number;
  stockLevel: number;
  category: string;
}

const SearchResultsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const { addToCart, cart, addToWishlist, wishlist } = useCart();
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.trim() || '';  // Ensuring query is not null

    useEffect(() => {
        setIsClient(true);
        if (!query) {
            setProducts([]);
            setLoading(false);
            return;
        }

        const fetchSearchResults = async () => {
            try {
                const searchQuery = `*[_type == "product" && (
                    name match "${query}*" || 
                    description match "${query}*" || 
                    category match "${query}*"
                )] {
                    _id,
                    name,
                    image,
                    price,
                    description,
                    discountPercentage,
                    stockLevel,
                    category
                }`;

                const data = await client.fetch(searchQuery);
                setProducts(data);
            } catch (error) {
                console.error("Error searching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    const calculateDiscountedPrice = (price: string, discount?: number) => {
        const numericPrice = parseFloat(price);
        return discount ? numericPrice - (numericPrice * (discount / 100)) : numericPrice;
    };

    const isInWishlist = (productId: string) => wishlist?.some(item => item._id === productId);

    return (
        <div className="bg-white min-h-screen">
            {/* Cart and Wishlist Icons */}
            <div className="fixed top-4 right-4 z-50 flex gap-4">
                {isClient && (
                    <>
                        <Link href="/wishlist" className="relative">
                            <Heart 
                                className="h-6 w-6 text-purple-600" 
                                fill={wishlist?.length > 0 ? "#9333EA" : "none"}
                            />
                            {wishlist?.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {wishlist.length}
                                </span>
                            )}
                        </Link>
                        <Link href="/cart">
                            <ShoppingCart className="h-6 w-6 text-purple-600" />
                            {cart?.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            )}
                        </Link>
                    </>
                )}
            </div>

            {/* Header */}
            <div className="bg-gray-100 px-4 md:px-32 py-20">
                <div className="container mx-auto px-4 md:px-10">
                    <h2 className="text-2xl font-bold text-blue-950">Search Results</h2>
                    <div className="text-sm text-blue-950 mt-2">
                        <Link href="/" className="hover:text-purple-600">Home</Link> / 
                        <span className="text-pink-600"> Search Results</span>
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <section className="px-4 md:px-40 py-20">
                <div className="container mx-auto">
                    <h3 className="text-xl mb-8">
                        {loading ? "Searching..." : products.length ? `Found ${products.length} result(s) for "${query}"` : `No results found for "${query}"`}
                    </h3>

                    {loading ? (
                        <div className="text-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {products.map((product) => (
                                <div key={product._id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative">
                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => addToWishlist(product)}
                                        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        <Heart 
                                            className="h-5 w-5 text-purple-600" 
                                            fill={isInWishlist(product._id) ? "#9333EA" : "none"}
                                        />
                                    </button>

                                    {/* Product Image */}
                                    <div className="relative pt-[100%] bg-gray-100 rounded-t-lg">
                                        <Image 
                                            src={urlFor(product.image).url()} // Ensured image type compatibility
                                            alt={product.name}
                                            fill
                                            className="object-contain p-4 rounded-t-lg"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="p-4 flex flex-col flex-grow">
                                        <h4 className="font-semibold text-purple-600 text-center">{product.name}</h4>
                                        <p className="text-sm text-gray-600 mt-2 text-center flex-grow">{product.description}</p>
                                        <div className="flex justify-center space-x-2 text-sm mt-4">
                                            {product.discountPercentage ? (
                                                <>
                                                    <span className="text-gray-500 line-through">${product.price}</span>
                                                    <span className="text-purple-600">${calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(2)}</span>
                                                </>
                                            ) : (
                                                <span className="text-purple-600">${product.price}</span>
                                            )}
                                        </div>
                                        <div className="mt-2 text-center">
                                            <span className={`text-sm ${product.stockLevel > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {product.stockLevel > 0 ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </div>

                                        <Link href={`/productdetail/${product._id}`}>
                                            <button className="mt-4 px-4 py-2 rounded-md w-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors">
                                                View Details
                                            </button>
                                        </Link>

                                        <button
                                            onClick={() => product.stockLevel > 0 && addToCart(product)}
                                            disabled={product.stockLevel === 0}
                                            className={`mt-2 px-4 py-2 rounded-md transition-colors ${product.stockLevel > 0 ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-300 cursor-not-allowed text-gray-500'}`}
                                        >
                                            {product.stockLevel > 0 ? 'Add to Cart' : 'Out of Stock'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default SearchResultsPage;
