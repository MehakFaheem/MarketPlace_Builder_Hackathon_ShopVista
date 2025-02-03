"use client"
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-white-50 min-h-screen">
      {/* Breadcrumb */}
      <section className='bg-rose-50'>
        <div className='p-12 mx-36'>
          <h1 className="font-bold text-blue-950 text-[26px]">Order Completed</h1>
          <div className="mb-8">
            <nav className="text-sm mb-4">
              <ol className="flex items-center space-x-2">
                <li><a href="/" className="text-black hover:text-gray-800">Home •</a></li>
                <li><a href="/page" className="text-black hover:text-gray-800">Pages •</a></li>
                <li><a href="/page" className="text-pink-700 hover:text-gray-800">Order Completed</a></li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      
     {/* Business History Section */}
    <section className="container py-12 px-6 flex flex-col md:flex-row items-center gap-8">
    {/* Image Section */}
    <div className="lg:w-1/2 flex justify-center">
        <Image 
        src="/images/aboutus.jpeg" 
        alt="Business Meeting" 
        width={300} 
        height={300} 
        className="rounded-lg shadow-lg"
        />
    </div>

    {/* Text Section */}
    <div className="lg:w-1/2 max-w-md">
        <h2 className="text-xl font-bold text-blue-950 mb-4">
        Know About Our Ecommerce Business, History
        </h2>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition">
        Contact Us
        </button>
    </div>
    </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8 text-black">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: "Free Delivery", imageUrl: "/images/1.png" },
            { title: "100% Cash Back", imageUrl: "/images/2.png" },
            { title: "Quality Product", imageUrl: "/images/3.png" },
            { title: "24/7 Support", imageUrl: "/images/4.png" },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <Image src={feature.imageUrl} alt={feature.title} width={50} height={50} className="mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet...</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Our Client Say!</h2>
        <div className="flex justify-center space-x-1 mb-4">
          <Image src="/images/client1.jpeg" alt="Client" width={30} height={30} className="" />
          <Image src="/images/client2.jpeg" alt="Client" width={30} height={30} className="" />
          <Image src="/images/client3.jpeg" alt="Client" width={30} height={30} className="" />
        </div>
        <h3 className="text-lg font-semibold">Selina Gomez</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut ultricies quam...
        </p>
      </section>
    </div>
  );
}
export default AboutPage;
