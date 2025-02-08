'use client';

import { useState } from 'react';

const ContactSection = ()  => {
  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });

  const handleChange = (e : any ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e : any ) => {
    e.preventDefault();
    alert(`Message Sent!\nName: ${formData.name}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">
        {/* Breadcrumb */}
        <section className='bg-rose-50'>
      <div className='p-12 mx-36'>
      <h1 className="font-bold text-blue-950 text-[26px]">FAQ</h1>
      <div className="mb-8">
        <nav className="text-sm mb-4">
          <ol className="flex items-center space-x-2">
            <li><a href="/home" className="text-black hover:text-gray-800">Home •</a></li>
            <li><a href="/faq" className="text-black hover:text-gray-800">Pages •</a></li>
            <li><a href="/faq" className="text-pink-700 hover:text-gray-800">FAQ</a></li>
          </ol>
        </nav>
      </div>
      </div>
      </section>
      {/* General Information Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4">General Information</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Eu dictumst cum et vel euismod condimentum?</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-semibold">Massa blandit est fermentum orci.</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-semibold">Odio malesuada fusc est consectetur scelerisque?</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Ask a Question</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Type Your Message*"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows= {4}
          ></textarea>
          <button type="submit" className="w-full bg-pink-600 text-white p-3 rounded-md hover:bg-pink-700">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactSection;