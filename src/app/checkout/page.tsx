// app/checkout/page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '../context/CartContext';
import { CreateCustomerInSanity, CreateOrderInSanity } from '../actions/CheckOut';

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

const CheckoutForm = () => {
  const router = useRouter();
  const { cart, cartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      const customerResponse = await CreateCustomerInSanity({
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      });
  
      // Convert cart prices to numbers before sending to Sanity
      const sanitizedCart = cart.map(item => ({
        ...item,
        price: parseFloat(item.price)
      }));
  
      const orderResponse = await CreateOrderInSanity(sanitizedCart, customerResponse._id);
      
      clearCart();
      router.push(`/order-confirmation`);
    } catch (error) {
      console.error('Error processing order:', error);
      alert('There was an error processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className='bg-rose-50 text-blue-950'>
        <div className='p-12 mx-36'>
          <h1 className="font-bold text-[26px]">Checkout</h1>
          <nav className="text-sm mb-4">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="hover:text-gray-800">Home</Link> / Checkout</li>
            </ol>
          </nav>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8 mx-48 my-12">
        {/* Left Column - Form */}
        <div className="lg:w-2/3">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-blue-950 mb-4">Contact Information</h2>
            
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded mb-4"
              value={formData.name}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 border rounded mb-4"
              value={formData.email}
              onChange={handleInputChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded mb-4"
              value={formData.phone}
              onChange={handleInputChange}
            />

            <h2 className="text-lg font-semibold mb-4 text-blue-950">Shipping address</h2>

            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="w-full p-3 border rounded mb-4"
              value={formData.address}
              onChange={handleInputChange}
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                required
                className="w-full p-3 border rounded"
                value={formData.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                required
                className="w-full p-3 border rounded"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Processing...' : 'Complete Order'}
          </button>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg h-fit">
          {cart.map((item) => (
            <div key={item._id} className="flex items-center gap-4 mb-4 pb-4 border-b">
              <div className="flex-grow">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">£{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>£{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Total (including tax):</span>
              <span>£{(cartTotal + (cartTotal * 0.1)).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;