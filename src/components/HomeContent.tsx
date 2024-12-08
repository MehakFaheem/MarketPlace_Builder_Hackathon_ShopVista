import React from "react";

const HomeContent = () => {
    return(
        <div>
            <section className="hero h-screen flex items-center bg-cover bg-center" style={{backgroundImage: "url(hero-bg.jpg)"}}>
                <div className="pl-0 md:pl-16 text-gray-950 text-center">
                    <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Discover Exquisite Crockery Designs</h1>
                    <p className="text-2xl mt-4">Explore a world of unique crockery designs crafted with perfection.</p>
                    <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-slate-500 rounded-md font-bold">Browse Collections</button>
                </div>
            </section>
        </div>
    );;
}
export default HomeContent;