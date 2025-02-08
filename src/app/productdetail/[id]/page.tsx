'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';
import { useCart } from '../../context/CartContext';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { use } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ProductDetailProps } from '@/app/types/product';

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
const ProductDetail = ({ params }: ProductDetailProps) => {
    const resolvedParams = use(params);
    const [product, setProduct] = useState<any>(null);
    const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
    const [selectedImage, setSelectedImage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const { 
        addToCart, 
        addToWishlist, 
        removeFromWishlist, 
        wishlist, 
        cart,
        notification 
    } = useCart();

    // Handle hydration
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Fetch product data and related products
    useEffect(() => {
        const fetchProductAndRelated = async () => {
            try {
                const query = `*[_type == "product" && _id == $id][0]`;
                const data = await client.fetch(query, { id: resolvedParams.id });
                setProduct(data);

                // Fetch related products based on category
                const relatedQuery = `*[_type == "product" && category == $category && _id != $id][0..3]`;
                const relatedData = await client.fetch(relatedQuery, { category: data.category, id: resolvedParams.id });
                setRelatedProducts(relatedData);

                if (isClient) {
                    setIsInWishlist(wishlist.some(item => item._id === data._id));
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };

        fetchProductAndRelated();
    }, [resolvedParams.id, wishlist, isClient]);

    const handleWishlist = () => {
        if (isInWishlist) {
            removeFromWishlist(product._id);
            setIsInWishlist(false);
        } else {
            addToWishlist(product);
            setIsInWishlist(true);
        }
    };

    const handleAddToCart = () => {
        if (product.stockLevel > 0) {
            addToCart(product);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (!product) {
        return <div className="text-center py-20">Product not found</div>;
    }

    const thumbnails = Array(4).fill(product.image);

    return (
        <div className="container mx-auto px-4 py-8 relative min-h-screen">
            {/* Notification */}
            {isClient && notification.show && (
                <div
                    className={`fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${
                        notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                    } text-white max-w-md animate-fade-in`}
                >
                    {notification.message}
                </div>
            )}

            {/* Cart and Wishlist Icons */}
            {isClient && (
                <div className="fixed top-4 right-4 z-40 flex gap-4">
                    <Link href="/wishlist" className="relative">
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
                    </Link>
                    <Link href="/cart">
                        <div className="relative">
                            <ShoppingCart className="h-6 w-6 text-purple-600" />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                </span>
                            )}
                        </div>
                    </Link>
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-8 mt-16 md:mt-20">
                {/* Left side - Image gallery */}
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 order-2 md:order-1">
                            {thumbnails.map((img, index) => (
                                <div
                                    key={index}
                                    className={`w-16 h-16 md:w-20 md:h-20 border-2 cursor-pointer transition-all ${
                                        selectedImage === index ? 'border-purple-600 scale-105' : 'border-gray-200'
                                    }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={urlFor(img).url()}
                                            alt={`Thumbnail ${index + 1}`}
                                            fill
                                            className="object-cover p-1"
                                            sizes="(max-width: 768px) 80px, 100px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Main image */}
                        <div className="flex-1 relative aspect-square order-1 md:order-2">
                            <Image
                                src={urlFor(thumbnails[selectedImage]).url()}
                                alt={product.name}
                                fill
                                className="object-cover rounded-lg"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Right side - Product details */}
                <div className="w-full md:w-1/2">
                    <div className="flex justify-between items-start mb-4">
                        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                        <button
                            onClick={handleWishlist}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
                        >
                            <Heart
                                className={`w-6 h-6 transition-colors ${
                                    isInWishlist ? 'fill-red-500 stroke-red-500' : 'stroke-gray-400'
                                }`}
                            />
                        </button>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className="w-4 h-4"
                                    fill={star <= 4 ? "#FCD34D" : "none"}
                                    stroke={star <= 4 ? "#FCD34D" : "#D1D5DB"}
                                />
                            ))}
                        </div>
                        <span className="text-gray-500">(22)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-purple-600">
                                ${product.price}
                            </span>
                            {product.discountPercentage && (
                                <span className="text-xl text-gray-400 line-through">
                                    ${(parseFloat(product.price) * (1 + product.discountPercentage/100)).toFixed(2)}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    {/* Color selection */}
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Color</h3>
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-blue-500 cursor-pointer border-2 border-white shadow-md hover:scale-110 transition-transform"></div>
                            <div className="w-8 h-8 rounded-full bg-red-500 cursor-pointer border-2 border-white shadow-md hover:scale-110 transition-transform"></div>
                            <div className="w-8 h-8 rounded-full bg-green-500 cursor-pointer border-2 border-white shadow-md hover:scale-110 transition-transform"></div>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="flex gap-4 mb-8">
                        <button
                            onClick={handleAddToCart}
                            disabled={product.stockLevel === 0}
                            className={`w-full px-6 py-3 rounded-md transition-all transform hover:scale-105 ${
                                product.stockLevel > 0
                                    ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                    : 'bg-gray-300 cursor-not-allowed text-gray-500'
                            }`}
                        >
                            {product.stockLevel > 0 ? 'Add To Cart' : 'Out of Stock'}
                        </button>
                    </div>

                    {/* Categories and tags */}
                    <div className="space-y-2 text-sm text-gray-600">
                        <p>Category: <span className="text-purple-600">{product.category}</span></p>
                        <p>Tags: <span className="text-purple-600">Fashion, Style, Vintage</span></p>
                        <p>Stock Status: 
                            <span className={`ml-2 ${product.stockLevel > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {product.stockLevel > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Description, videos, reviews, additional info */}
            <div className="mt-12">
            <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="additional-info">Additional Info</TabsTrigger>
                </TabsList>

                {/* Description Tab */}
                <TabsContent value="description" className="p-4">
                <p className="text-gray-600">{product.description}</p>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="p-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            className="w-4 h-4"
                            fill={star <= 4 ? "#FCD34D" : "none"}
                            stroke={star <= 4 ? "#FCD34D" : "#D1D5DB"}
                        />
                        ))}
                    </div>
                    <span className="text-gray-500">(22 Reviews)</span>
                    </div>
                    <div className="space-y-4">
                    {/* Example Review */}
                    <div className="border p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                        </div>
                        <div className="mt-2">
                        <p className="text-gray-600">
                            This product is amazing! The quality is top-notch, and it looks even better in person.
                        </p>
                        </div>
                    </div>
                    {/* Add more reviews here */}
                    </div>
                </div>
                </TabsContent>

                {/* Videos Tab */}
                <TabsContent value="videos" className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative aspect-video">
                    <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Product Video"
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    </div>
                    {/* Add more videos here */}
                </div>
                </TabsContent>

                {/* Additional Info Tab */}
                <TabsContent value="additional-info" className="p-4">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                    <AccordionTrigger>Dimensions</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-gray-600">Height: 30cm, Width: 20cm, Depth: 15cm</p>
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                    <AccordionTrigger>Materials</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-gray-600">Made from high-quality wood and eco-friendly materials.</p>
                    </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                    <AccordionTrigger>Care Instructions</AccordionTrigger>
                    <AccordionContent>
                        <p className="text-gray-600">Wipe clean with a damp cloth. Avoid direct sunlight.</p>
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                </TabsContent>
            </Tabs>
            </div>
            {/* Related Products Section */}
<div className="mt-16">
    <h2 className="text-2xl font-bold mb-8">Related Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {relatedProducts.map((relatedProduct) => (
            <div key={relatedProduct._id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <Link href={`/product/${relatedProduct._id}`}>
                    <div className="relative aspect-square">
                        <Image
                            src={urlFor(relatedProduct.image).url()}
                            alt={relatedProduct.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                        <p className="text-gray-600">${relatedProduct.price}</p>
                    </div>
                </Link>
                <div className="p-4 mt-auto flex flex-col sm:flex-row gap-2">
                    <Link 
                        href={`/productdetail/${relatedProduct._id}`} 
                        className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors text-center"
                    >
                        View Details
                    </Link>
                    <button
                        onClick={() => addToCart(relatedProduct)}
                        className="w-full px-4 py-2 bg-gray-200 text-purple-600 rounded-md hover:bg-gray-300 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>
        </div>
    );
};

export default ProductDetail;