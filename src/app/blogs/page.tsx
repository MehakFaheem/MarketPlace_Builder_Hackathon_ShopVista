"use client"
import React from 'react';
import Link from 'next/link';

const BlogEcommerce = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Mauris et orci non vulputate diam tincidunt nec",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "/images/blog1.jpeg",
      date: "April 15, 2024",
      author: "Staff Author"
    },
    {
      id: 2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "/images/blog2.jpeg",
      date: "April 12, 2024",
      author: "Staff Author"
    },
    {
      id: 3,
      title: "Sit nam congue feugiat nisl, mauris amet nisl",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      image: "/images/blog3.jpeg",
      date: "April 10, 2024",
      author: "Staff Author"
    }
  ];

  const products = [
    {
      id: 1,
      name: "Black Bag",
      price: "$99.99",
      image: "/images/b2.jpeg"
    },
    {
      id: 2,
      name: "Sneakers",
      price: "$79.99",
      image: "/images/sneaker.jpeg"
    },
    {
      id: 3,
      name: "White Shirt",
      price: "$49.99",
      image: "/images/tshirt.jpeg"
    }
  ];

  return (
    <div className="max-w-6xl px-4 py-8">
       {/* Breadcrumb */}
       <section className='bg-rose-50'>
      <div className='p-12 mx-36'>
      <h1 className="font-bold text-blue-950 text-[26px]">Our Blogs</h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/home" className="text-black hover:text-gray-800">Home •</a></li>
            <li><a href="/blogs" className="text-black hover:text-gray-800">Pages •</a></li>
            <li><a href="/blogs" className="text-pink-700 hover:text-gray-800">Blog Page</a></li>
          </ol>
        </nav>
      </div>
      </div>
      </section>

      {/* Main Content and Sidebar Layout */}
      <div className="flex flex-col lg:flex-row gap-8 mx-44 my-10">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Blog Posts */}
          {blogPosts.map((post) => (
            <article key={post.id} className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="flex gap-4 text-sm text-gray-500 mb-2">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/post/${post.id}`} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/post/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                Read More...
              </Link>
            </article>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <button className="px-4 py-2 bg-pink-500 text-white rounded-md">
              1
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
        {/* Search Bar */}
      <div className="mb-8 py-10">
        <h1 className='text-blue-950 text-xl'>Search</h1>
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-64 p-2 border rounded-md"
        />
      </div>
          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Category 1</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Category 2</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-blue-600">Category 3</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Recent Post</h3>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <Link href={`/post/${post.id}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shop Products */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Offer Product</h3>
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded mb-2"
                  />
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-950">Follow</h3>
            <div className="flex gap-2">
              <Link href="#" className="text-blue-600 hover:text-blue-800">Facebook</Link>
              <Link href="#" className="text-blue-400 hover:text-blue-600">Twitter</Link>
              <Link href="#" className="text-pink-600 hover:text-pink-800">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEcommerce;