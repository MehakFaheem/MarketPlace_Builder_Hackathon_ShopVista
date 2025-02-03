// app/actions/CheckOut.tsx
import { client } from "@/sanity/lib/client";

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Product {
  _id: string;
  name: string;
  price: number;
  description?: string;
  quantity: number;
}

// Create customer in Sanity
const CreateCustomerInSanity = async (customerInfo: Customer) => {
  try {
    const customerObject = {
      _type: "customer",
      name: customerInfo.name,
      email: customerInfo.email,
      phone: customerInfo.phone
    };

    const response = await client.create(customerObject);
    console.log("user created in sanity", response);
    return response;
  } catch(error) {
    console.log("error created user in sanity", error);
    throw error;
  }
};

// Create order in Sanity
const CreateOrderInSanity = async (cartData: Product[], customer_id: string) => {
  try {
    const orderObject = {
      _type: "order",
      customer: {
        _type: "reference",
        _ref: customer_id
      },
      items: cartData.map((item: Product) => ({
        _type: "items",
        _id: item._id,
        product_name: item.name,
        product_price: item.price,
        quantity: 1
      })),
      order_date: new Date().toISOString()
    };

    const response = await client.create(orderObject);
    console.log("order created in sanity", response);
    return response;
  } catch(error) {
    console.log("error created order in sanity", error);
    throw error;
  }
};

export { CreateCustomerInSanity, CreateOrderInSanity };