import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <h1></h1>
            <nav>
                <Link  href="/">Home</Link>
                <Link  href="/pages">Pages</Link>
                <Link  href="/products">Products</Link>
                <Link  href="/blog">Blogs</Link>
                <Link  href="/shop">Shops</Link>
                <Link  href="/contact">Contact</Link>
            </nav>
        </header>
    );
};
export default Header;