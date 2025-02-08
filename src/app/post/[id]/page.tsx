import React from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  author: string;
  tags: string[];
}

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
}

const BlogPost = () => {
  const post: BlogPost = {
    id: 1,
    title: "Mauris et orci non vulputate diam tincidunt nec",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec ante gravida lectus molestie tincidunt. Curabitur tempor tellus eget libero ultrices, a tincidunt lorem pulvinar. Sed vitae erat ut neque ultricies ultrices.

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus sem, varius non consequat vitae, ornare id diam. Maecenas finibus sed nisi id vehicula. Nullam lorem ipsum dolor sit amet.`,
    image: "/images/blog1.jpeg",
    date: "April 20, 2024",
    author: "Staff Author",
    tags: ["General", "Design", "Tech"]
  };

  const recentProducts: Product[] = [
    { id: 1, name: "Queen sofa", price: "$350.00", image: "/images/sofa.jpeg", rating: 5 },
    { id: 2, name: "Eutipque sofa", price: "$700.00", image: "/images/sneaker.jpeg", rating: 4 },
    { id: 3, name: "A plain", price: "$199.00", image: "/images/tshirt.jpeg", rating: 5 },
    { id: 4, name: "Mi qui", price: "$150.00", image: "/images/chair.jpeg", rating: 4 }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <div className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>

          <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="relative h-48">
              <Image
                src="/images/video-thumb1.jpeg"
                alt="Video thumbnail"
                width={400}
                height={192}
                className="object-cover rounded-lg"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-pink-500">►</span>
                </div>
              </button>
            </div>
            <div className="relative h-48">
              <Image
                src="/images/video-thumb2.jpeg"
                alt="Video thumbnail"
                width={400}
                height={192}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6">Comments</h3>
            <div className="space-y-6">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="p-2 border rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="p-2 border rounded-md"
                  />
                </div>
                <textarea
                  placeholder="Write your comment"
                  rows={4}
                  className="w-full p-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  Submit Comment
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Recent Products</h3>
            <div className="grid grid-cols-2 gap-4">
              {recentProducts.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="relative h-32 mb-2">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={160}
                      height={128}
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-gray-600">{product.price}</p>
                  <div className="flex justify-center">
                    {"★".repeat(product.rating)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Follow</h3>
            <div className="flex gap-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-blue-600">Twitter</a>
              <a href="#" className="text-pink-600 hover:text-pink-800">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;