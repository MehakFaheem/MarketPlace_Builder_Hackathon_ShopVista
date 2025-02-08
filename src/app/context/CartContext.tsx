'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  _id: string;
  name: string;
  image: string; // Changed from 'any' to 'string' for better type safety
  price: string;
  description?: string;
  color?: string;
  size?: string;
  quantity: number;
  discountPercentage?: number;
}

interface NotificationType {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}

// Define a proper Product type
interface Product extends Omit<CartItem, 'quantity'> {
  quantity?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  notification: NotificationType;
  setNotification: React.Dispatch<React.SetStateAction<NotificationType>>;
  addToWishlist: (product: Product) => void;
  wishlist: CartItem[];
  removeFromWishlist: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<CartItem[]>([]);
  const [notification, setNotification] = useState<NotificationType>({
    show: false,
    message: '',
    type: 'success',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart');
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedCart) setCart(JSON.parse(savedCart));
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
      } catch (error) {
        console.error('Error loading data from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
      } catch (error) {
        console.error('Error saving data to localStorage:', error);
      }
    }
  }, [cart, wishlist]);

  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: 'success' });
    }, 3000);
  };

  const addToCart = (product: Product) => {
    try {
      setCart((prevCart) => {
        const existingItem = prevCart.find((item) => item._id === product._id);
        
        if (existingItem) {
          return prevCart.map((item) =>
            item._id === product._id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }

        const newItem: CartItem = {
          ...product,
          quantity: 1,
          color: product.color || 'Default',
          size: product.size || 'M',
          discountPercentage: product.discountPercentage || 0,
        };

        return [...prevCart, newItem];
      });
      showNotification('Product added to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      showNotification('Failed to add product to cart', 'error');
    }
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    try {
      setCart((prevCart) =>
        prevCart
          .map((item) =>
            item._id === id 
              ? { ...item, quantity: Math.max(0, newQuantity) }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
      showNotification('Cart updated successfully');
    } catch (error) {
      console.error('Error updating quantity:', error);
      showNotification('Failed to update cart', 'error');
    }
  };

  const clearCart = () => {
    try {
      setCart([]);
      showNotification('Cart cleared successfully');
    } catch (error) {
      console.error('Error clearing cart:', error);
      showNotification('Failed to clear cart', 'error');
    }
  };

  const addToWishlist = (product: Product) => {
    try {
      const existingItem = wishlist.find((item) => item._id === product._id);
      if (!existingItem) {
        const wishlistItem: CartItem = {
          ...product,
          quantity: 1,
        };
        setWishlist([...wishlist, wishlistItem]);
        showNotification('Product added to wishlist');
      } else {
        showNotification('Product already in wishlist');
      }
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      showNotification('Failed to add to wishlist', 'error');
    }
  };

  const removeFromWishlist = (id: string) => {
    try {
      setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== id));
      showNotification('Product removed from wishlist');
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      showNotification('Failed to remove from wishlist', 'error');
    }
  };

  const cartTotal = cart.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price);
    const discount = item.discountPercentage ? itemPrice * (item.discountPercentage / 100) : 0;
    return sum + (itemPrice - discount) * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        clearCart,
        cartTotal,
        notification,
        setNotification,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 p-4 rounded shadow-lg z-50 ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {notification.message}
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}