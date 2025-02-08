'use client';
import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearchParams } from 'next/navigation';

// Loading component
const LoadingSpinner = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
    </div>
);

// Search Results Content Component
const SearchResultsContent = () => {
    const [isClient, setIsClient] = useState(false);
    const { cart, wishlist } = useCart();
    const searchParams = useSearchParams();
    const query = searchParams.get('query')?.trim() || '';

    useEffect(() => {
        setIsClient(true);
    }, []);

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
        </div>
    );
};

// Main component with Suspense
const SearchResultsPage = () => {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <SearchResultsContent />
        </Suspense>
    );
};

export default SearchResultsPage;
