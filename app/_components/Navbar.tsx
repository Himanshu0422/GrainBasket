import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 left-0 w-full z-50 px-24">
      <div className="text-2xl font-bold">Grain Basket</div>
      <div className="space-x-12">
        <a href="#home" className="hover:text-gray-500 transition">
          Home
        </a>
        <a href="#about" className="hover:text-gray-500 transition">
          About
        </a>
        <a href="#products" className="hover:text-gray-500 transition">
          Products
        </a>
        <a href="#why-choose-us" className="hover:text-gray-500 transition">
          Why Choose Us
        </a>
        <a href="#contact" className="hover:text-gray-500 transition">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
