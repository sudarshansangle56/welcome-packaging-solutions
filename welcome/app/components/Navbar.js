"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react"; // You can also use Heroicons, FontAwesome, etc.

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-300 w-full">
      <div className="flex justify-between items-center h-20 px-6">
        <h2 className="text-xl font-bold">MySite</h2>

        {/* Hamburger Icon (visible on mobile only) */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Menu size={28} />
        </div>

        {/* Navbar links for desktop */}
        <div className="hidden md:flex gap-10">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Products</h2>
          <h2>Contact Us</h2>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-4 md:hidden">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Products</h2>
          <h2>Contact Us</h2>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
