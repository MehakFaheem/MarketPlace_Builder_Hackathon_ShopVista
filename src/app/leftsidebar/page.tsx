"use client"
import { useState } from 'react';
import { Star, Grid2X2, List, ShoppingCart, Heart, Search } from 'lucide-react';
import Image from 'next/image';

// Define types
type RatingCounts = {
  [key in 1|2|3|4|5]: number;
};

interface Product {
  id: number;
  name: string;
  price: number;
  salePrice: number;
  rating: 1 | 2 | 3 | 4 | 5;
  image: string;
  colors: string[];
}

const ShopPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('best-match');

  const products: Product[] = [
    {
      id: 1,
      name: 'Dictum morbi',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/whitewatch.jpeg",
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 2,
      name: 'Sadales sit',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/leftsidebar2.jpeg",  
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 3,
      name: 'Nibh varius',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/leftsidebar3.jpeg",  
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 4,
      name: 'Mauris quis',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/leftsidebar4.jpeg",  
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 5,
      name: 'Morbi sagittis',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/leftsidebar5.jpeg",  
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 6,
      name: 'Ultrices venenatis',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/leftsidebar6.jpeg",  
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
    {
      id: 7,
      name: 'Scelerisque dignissim',
      price: 26.00,
      salePrice: 22.00,
      rating: 5,
      image: "/images/leftsidebar7.jpeg",  
      colors: ['#FF0000', '#00FF00', '#0000FF']
    },
  ];

  const categories = [
    'Prestashop',
    'Magento',
    'Bigcommerce',
    'osCommerce',
    'Sitecart',
    'Bag',
    'Accessories',
    'Jewellery',
    'Watches'
  ];

  const brands = [
    'Coaster Furniture',
    'Fusion Dot High Fashion',
    'Unique Furniture Restor',
    'Dream Furniture Flipping',
    'Young Repurposed',
    'Green DIY furniture'
  ];

  const discounts = [
    '20% Cashback',
    '5% Cashback Offer',
    '25% Discount Offer'
  ];

  const priceRanges = [
    '$100+ - $500.00',
    '$500.00 - $700.00',
    '$700.00 - $900.00',
    '$900.00+'
  ];

  const colors = [
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Orange', class: 'bg-orange-500' },
    { name: 'Brown', class: 'bg-brown-500' },
    { name: 'Purple', class: 'bg-purple-500' },
    { name: 'Sky', class: 'bg-sky-500' }
  ];

  const ratingCounts: RatingCounts = {
    5: 1945,
    4: 1234,
    3: 531,
    2: 251,
    1: 159
  };

  return (
    <div className="max-w-6xl mx-44 p-14">
        {/* Breadcrumb */}
        <section className='bg-rose-50'>
      <div className='p-12 mx-36'>
      <h1 className="font-bold text-blue-950 text-[26px]">Left SideBar</h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/home" className="text-black hover:text-gray-800">Home •</a></li>
            <li><a href="/leftsidebar" className="text-black hover:text-gray-800">Pages •</a></li>
            <li><a href="/leftsidebar" className="text-pink-700 hover:text-gray-800">Left side bar</a></li>
          </ol>
        </nav>
      </div>
      </div>
      </section>
      
      {/* Filter Bar */}
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

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4">
          {/* Product Brand */}
          <div className="mb-8">
            <h3 className="font-semibold text-sm mb-4">Product Brand</h3>
            <div className="space-y-2 text-[10px]">
              {brands.map((brand) => (
                <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-pink-500" />
                  <span className="text-gray-600 text-sm">{brand}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Discount Offer */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Discount Offer</h3>
            <div className="space-y-2">
              {discounts.map((discount) => (
                <label key={discount} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-pink-500" />
                  <span className="text-gray-600 text-sm">{discount}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Rating Filter */}
          <div className="mb-8 text-sm">
            <h3 className="font-semibold text-lg mb-4">Rating Item</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {Array(5).fill(0).map((_, index) => (
                        <Star
                          key={index}
                          className={`w-4 h-4 ${
                            index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">({ratingCounts[rating as keyof RatingCounts]})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-pink-500" />
                  <span className="text-gray-600 text-sm">{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Price Filter</h3>
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range} className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 accent-pink-500" />
                  <span className="text-gray-600 text-sm">{range}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Filter By Color</h3>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className={`w-6 h-6 rounded-full ${color.class} cursor-pointer`}
                  title={color.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Products Display */}
        <div className="space-y-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden gap-6 p-4"
            >
              <div className="relative sm:w-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150} 
                  height={100} 
                  className="w-full h-[200px] object-cover rounded-lg p-8" 
                />
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-50">
                    <ShoppingCart className="w-4 h-4 text-pink-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-50">
                    <Heart className="w-4 h-4 text-pink-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-pink-50">
                    <Search className="w-4 h-4 text-pink-600" />
                  </button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex gap-1 mb-2">
                  {product.colors.map((color, index) => (
                    <div 
                      key={index} 
                      className="w-3 h-3 rounded-full" 
                      style={{backgroundColor: color}} 
                    />
                  ))}
                </div>
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {Array(5).fill(0).map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600 font-semibold">${product.salePrice}</span>
                  <span className="text-gray-400 line-through">${product.price}</span>
                </div>
                <p className="mt-4 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                  in phasellus non in justo.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;