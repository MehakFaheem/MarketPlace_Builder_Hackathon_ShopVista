"use client"
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className='bg-rose-50'>
      <div className='p-12 mx-36'>
      <h1 className="font-bold text-blue-950 text-[26px]">Login</h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="text-black hover:text-gray-800">Home •</a></li>
            <li><a href="/login" className="text-black hover:text-gray-800">Pages •</a></li>
            <li><a href="/login" className="text-pink-700 hover:text-gray-800">Login</a></li>
          </ol>
        </nav>
      </div>
      </div>
      </section>
      
      {/* Login Card */}
      <div className="flex flex-grow items-center justify-center my-40">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-2">Login</h2>
          <p className="text-gray-600 mb-4">Please login using account details below.</p>
          
          <form className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"
            />
            <div className="text-right text-pink-500 cursor-pointer text-sm">
              Forgot your password?
            </div>
            <button 
              type="submit" 
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
              Sign In
            </button>
          </form>
          
          <p className="mt-4 text-gray-600">
            Don't have an account? <Link href="/register" className="text-pink-500">Create account</Link>
          </p>
        </div>
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
                width={800}
                height={800}
                className="h-400 w-400"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
