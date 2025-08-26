import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          VerdictForge
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          AI-powered judgment summarizer that saves lawyers, students, and
          professionals hours of reading time.
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Try It Now
        </a>
      </main>
      <Footer />
    </div>
  );
}
