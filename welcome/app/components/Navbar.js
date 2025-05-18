"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" }, // Assuming you want this page too
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white w-full border-b border-gray-300 sticky top-0 z-10">
      <div className="flex justify-between items-center h-24 px-10 overflow-hidden">
        <Image src="/welcome.png" alt="Logo" height={150} width={150} />
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
              className="hover:text-primary text-secondary font-bold transition active:scale-95"
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
