"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = target.getAttribute("href")?.substring(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          VerdictForge
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
