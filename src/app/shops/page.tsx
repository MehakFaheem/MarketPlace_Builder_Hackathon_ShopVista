"use client"
import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Define TypeScript interfaces
interface Product {
  id: number;
  title: string;
  price: string;
  rating: number;
  image: string;
  description: string;
}

interface RatingStarsProps {
  rating: number;
  className?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Awesome furniture",
    price: "$99.00",
    rating: 4,
    image: "/images/shoplist1.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  },
  {
    id: 2,
    title: "In sofa",
    price: "$89.00",
    rating: 5,
    image: "/images/shoplist2.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  },
  {
    id: 3,
    title: "Val arm",
    price: "$79.00",
    rating: 4,
    image: "/images/shoplist3.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  },
  {
    id: 4,
    title: "Barrett sofa",
    price: "$129.00",
    rating: 5,
    image: "/images/shoplist4.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  },
  {
    id: 5,
    title: "Magic to",
    price: "$149.00",
    rating: 4,
    image: "/images/shoplist5.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  },
  {
    id: 6,
    title: "Wine feeders",
    price: "$69.00",
    rating: 5,
    image: "/images/shoplist6.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  },
  {
    id: 7,
    title: "Comfortable furlay",
    price: "$199.00",
    rating: 4,
    image: "/images/shoplist7.jpeg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu molestie ex.",
  }
];

const RatingStars: React.FC<RatingStarsProps> = ({ rating, className = "" }) => (
  <div className={`flex ${className}`}>
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        aria-hidden="true"
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ))}
    <span className="sr-only">{rating} out of 5 stars</span>
  </div>
);

const ShopList: React.FC = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <section className="bg-rose-50 mb-8">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="font-bold text-blue-950 text-2xl mb-4">Shops</h1>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/home" className="text-black hover:text-gray-800">Home</Link><span className="mx-2">•</span></li>
              <li><Link href="/shops" className="text-black hover:text-gray-800">Pages</Link><span className="mx-2">•</span></li>
              <li><Link href="/shops" className="text-pink-700 hover:text-gray-800" aria-current="page">Shops</Link></li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Filter Section */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-blue-950 text-xl">Ecommerce Accessories & Fashion Items</h2>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <label htmlFor="per-page">Per Page:</label>
              <select id="per-page" className="border rounded px-2 py-1">
                <option>12</option>
                <option>24</option>
                <option>36</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort-by">Sort By:</label>
              <select id="sort-by" className="border rounded px-2 py-1">
                <option>Best Match</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="space-y-6">
        {products.map((product) => (
          <article key={product.id} className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-48 h-48 relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <span className="text-purple-600 font-bold">{product.price}</span>
              </div>
              <RatingStars rating={product.rating} className="mb-2" />
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center space-x-4">
                <button
                  className="p-2 text-gray-500 hover:text-purple-600"
                  aria-label="Add to wishlist"
                >
                  <Heart size={20} />
                </button>
                <button
                  className="p-2 text-gray-500 hover:text-purple-600"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Brands Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/images/brands.png"
            alt="Brand logos"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default ShopList;