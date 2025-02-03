'use client';
import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../sanity/lib/client"; 
import { urlFor } from "../../sanity/lib/image";
import { ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from '../context/CartContext';

// Types
interface Product {
  _id: string;
  name: string;
  image: any;
  price: string;
  description?: string;
  discountPercentage?: number;
  stockLevel: number;
  category: string;
}

const productsQuery = `*[_type == "product"] {
  _id,
  name,
  image,
  price,
  description,
  discountPercentage,
  stockLevel,
  category
}`;

const ProductPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isClient, setIsClient] = useState(false);
    const { addToCart, cart, addToWishlist, wishlist } = useCart();
    
    // Pagination and Sorting States
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(12);
    const [sortOption, setSortOption] = useState('bestMatch');

    useEffect(() => {
        setIsClient(true);
        const fetchProducts = async () => {
            try {
                const data = await client.fetch(productsQuery);
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Sorting and Pagination Logic
    const sortedProducts = useMemo(() => {
        let sorted = [...products];
        switch(sortOption) {
            case 'priceLowToHigh':
                return sorted.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            case 'priceHighToLow':
                return sorted.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            default:
                return sorted;
        }
    }, [products, sortOption]);

    // Pagination Calculation
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Pagination Handlers
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const nextPage = () => {
        if (currentPage < Math.ceil(sortedProducts.length / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Calculate total pages
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

    // Calculate discounted price
    const calculateDiscountedPrice = (price: string, discount?: number) => {
        const numericPrice = parseFloat(price);
        if (!discount) return numericPrice;
        return numericPrice - (numericPrice * (discount / 100));
    };

    // Helper function to check if item is in wishlist
    const isInWishlist = (productId: string) => {
        return wishlist.some(item => item._id === productId);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Cart and Wishlist Icons */}
            <div className="fixed top-4 right-4 z-50 flex gap-4">
                <Link href="/wishlist" className="relative">
                    {isClient && (
                        <div className="relative">
                            <Heart 
                                className="h-6 w-6 text-purple-600" 
                                fill={wishlist.length > 0 ? "#9333EA" : "none"}
                            />
                            {wishlist.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {wishlist.length}
                                </span>
                            )}
                        </div>
                    )}
                </Link>
                <Link href="/cart">
                    {isClient && (
                        <div className="relative">
                            <ShoppingCart className="h-6 w-6 text-purple-600" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            )}
                        </div>
                    )}
                </Link>
            </div>

            {/* Header Section */}
            <div className="bg-gray-100 px-4 md:px-32 py-20">
                <div className="container mx-auto px-4 md:px-10">
                    <h2 className="text-2xl font-bold text-blue-950">Shop Grid Default</h2>
                    <div className="text-sm text-blue-950 mt-2">
                        <Link href="/" className="hover:text-purple-600">Home</Link> /
                        <Link href="/pages" className="hover:text-purple-600"> Pages</Link> /
                        <span className="text-pink-600"> Shop Grid Default</span>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <section className="px-4 md:px-40 py-20">
                <div className="container mx-auto">
                    {/* Filter Options */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                        <h3 className="text-xl">Ecommerce Accessories & Fashion items</h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <span>Per Page:</span>
                                <select 
                                    value={productsPerPage} 
                                    onChange={(e) => {
                                        setProductsPerPage(Number(e.target.value));
                                        setCurrentPage(1);
                                    }} 
                                    className="border rounded px-2 py-1"
                                >
                                    <option value={12}>12</option>
                                    <option value={24}>24</option>
                                    <option value={36}>36</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Sort By:</span>
                                <select 
                                    value={sortOption}
                                    onChange={(e) => {
                                        setSortOption(e.target.value);
                                        setCurrentPage(1);
                                    }}
                                    className="border rounded px-2 py-1"
                                >
                                    <option value="bestMatch">Best Match</option>
                                    <option value="priceLowToHigh">Price: Low to High</option>
                                    <option value="priceHighToLow">Price: High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    {loading ? (
                        <div className="text-center py-20">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {currentProducts.map((product) => (
                                    <div 
                                        key={product._id} 
                                        className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full relative"
                                    >
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
                                                src={urlFor(product.image).url()}
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
                                                        <span className="text-gray-500 line-through">
                                                            ${product.price}
                                                        </span>
                                                        <span className="text-purple-600">
                                                            ${calculateDiscountedPrice(product.price, product.discountPercentage).toFixed(2)}
                                                        </span>
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

                                            {/* View Details button */}
                                            <Link href={`/productdetail/${product._id}`}>
                                                <button className="mt-4 px-4 py-2 rounded-md w-full border border-purple-600 text-purple-600 hover:bg-purple-50 transition-colors">
                                                    View Details
                                                </button>
                                            </Link>

                                            {/* Add to Cart button */}
                                            <button
                                                onClick={() => product.stockLevel > 0 && addToCart(product)}
                                                disabled={product.stockLevel === 0}
                                                className={`mt-2 px-4 py-2 rounded-md transition-colors ${
                                                    product.stockLevel > 0
                                                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                                        : 'bg-gray-300 cursor-not-allowed text-gray-500'
                                                }`}
                                            >
                                                {product.stockLevel > 0 ? 'Add to Cart' : 'Out of Stock'}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination Controls (Responsive) */}
                            <div className="flex flex-wrap justify-center items-center mt-8 space-x-2">
                                <button 
                                    onClick={prevPage} 
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-md disabled:opacity-50 hover:bg-gray-100"
                                >
                                    <ChevronLeft />
                                </button>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => paginate(index + 1)}
                                        className={`px-3 py-2 rounded-md text-sm ${
                                            currentPage === index + 1 
                                                ? 'bg-purple-600 text-white' 
                                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                        }`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                                <button 
                                    onClick={nextPage} 
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-md disabled:opacity-50 hover:bg-gray-100"
                                >
                                    <ChevronRight />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Brands Section */}
            <section className="px-4 md:px-44 py-10">
                <div className="max-w-6xl mx-auto">
                    <div className="relative h-[200px] w-full">
                        <Image
                            src="/images/brands.png"
                            alt="brands"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;