import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h2 className="text-2xl font-bold text-blue-600">VerdictForge</h2>
      <nav className="space-x-6">
        <a href="#" className="hover:text-blue-600">
          Home
        </a>
        <a href="#" className="hover:text-blue-600">
          Features
        </a>
        <a href="#" className="hover:text-blue-600">
          Blog
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </nav>
    </header>
  );
}
