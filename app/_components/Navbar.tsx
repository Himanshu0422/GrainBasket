"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 md:px-24 ${
        menuOpen ? "pb-4" : ""
      }`}
    >
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
          <Image
            src="/logo.png"
            alt="Grain Basket Logo"
            width={32}
            height={32}
          />
          <span>Grain Basket</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-orange-600 transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-2 bg-white shadow-lg rounded-lg px-4 py-3 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-orange-600 font-medium transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
