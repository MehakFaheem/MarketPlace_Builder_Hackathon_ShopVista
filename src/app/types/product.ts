export interface Product {
  _id: string;
  name: string;
  image: string;
  price: string;
  description?: string;
  discountPercentage?: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  }

export interface ProductDetailProps {
  params: Promise<{
      id: string;
  }>;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}
//   // Types
// interface Product {
//   _id: string;
//   name: string;
//   image: any;
//   price: string;
//   description?: string;
//   discountPercentage?: number;
//   stockLevel: number;
//   category: string;
// }