"use client"
import React from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const products = [
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

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
      />
    ))}
  </div>
);

const ShopList = () => {
  return (
    <div className="max-w-6xl mx-44 p-14">
      {/* Header */}
      <h1 className="text-2xl font-bold text-blue-950">Shop List</h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="text-black hover:text-gray-800">Home•</a></li>
            <li><a href="/page" className="text-black hover:text-gray-800">Page•</a></li>
            <li><a href="/page" className="text-pink-700 hover:text-gray-800">Shop Grid Default</a></li>
          </ol>
        </nav>
      </div>

      {/* Filter Bar */}
      {/* <div className="flex justify-between items-center mb-6 pb-4 border-b"> */}
        <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <h3 className="text-blue-950">Ecommerce Accesories & Fashion item</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                            <span>Per Page:</span>
                            <select className="border rounded px-2 py-1">
                                <option>12</option>
                                <option>24</option>
                                <option>36</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Sort By:</span>
                            <select className="border rounded px-2 py-1">
                                <option>Best Match</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                        <span>View:</span>
                    </div>
                </div>
                </div>
      {/* </div> */}

      {/* Product List */}
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-48 h-48 relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <span className="text-purple-600 font-bold">{product.price}</span>
              </div>
              <div className="mb-2">
                <RatingStars rating={product.rating} />
              </div>
              <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-purple-600">
                  <Heart size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-purple-600">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
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

export default ShopList;