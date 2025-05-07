"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" }, // Assuming you want this page too
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-[#ffff] border-b-1 border-[#222] w-full">
      <div className="flex justify-between items-center h-20 px-6">
        <h2 className="text-xl font-bold">WelCome</h2>
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </div>
        <div className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
