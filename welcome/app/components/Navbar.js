"use client";
import React, { useState } from "react";
import { Menu, Search, User, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-[#f8f5f500] w-full  top-0 z-10">
      <div className="flex justify-between items-center h-20 sm:px-9 px-4 bg-[#f1f2ed]">
        {/* Logo */}
        <Image src="/welcome.png" alt="Logo" height={120} width={120} />

        <div className="hidden md:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary text-black font-semibold transition text-[19px] active:scale-105"
            >
              {item.name}
            </Link>
          ))}
        </div>

        
        <div className="hidden md:flex gap-6 items-center">
          <Search className="cursor-pointer hover:text-primary" />
          <User className="cursor-pointer hover:text-primary" />
          <ShoppingCart className="cursor-pointer hover:text-primary" />
        </div>

        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden bg-[#f1f2ed]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-6 mt-2">
            <Search className="cursor-pointer hover:text-primary" />
            <User className="cursor-pointer hover:text-primary" />
            <ShoppingCart className="cursor-pointer hover:text-primary" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
