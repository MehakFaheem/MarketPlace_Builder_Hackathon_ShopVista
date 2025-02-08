"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
    const router = useRouter();
    const [cart, setCart] = useState([]);

    const handleCheckout = async () => {
        try {
            // Perform checkout logic here
            console.log("Checkout process initiated");
            router.push("/success");
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    );
};

export default CheckoutPage;
