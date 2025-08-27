// src/landingpage.js

import { useState } from "react";

export default function LandingPage() {
  const [active, setActive] = useState("home");

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">VerdictForge</h1>
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => setActive("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setActive("about")}>About</button>
          </li>
          <li>
            <button onClick={() => setActive("pricing")}>Pricing</button>
          </li>
          <li>
            <button onClick={() => setActive("contact")}>Contact</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      {active === "home" && (
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <h2 className="text-5xl font-bold mb-4">AI-Powered Legal Summarizer</h2>
          <p className="text-lg mb-6">
            Save hours of reading—get precise, AI-generated legal judgment summaries.
          </p>
          <button className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold shadow-md hover:bg-gray-200">
            Try for Free
          </button>
        </section>
      )}

      {/* About Section */}
      {active === "about" && (
        <section className="px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">About VerdictForge</h2>
          <p className="max-w-2xl mx-auto text-lg">
            VerdictForge is built by a law student for law students, advocates, and
            researchers. Our AI reduces hours of case law reading into minutes, giving
            you clear and reliable case summaries.
          </p>
        </section>
      )}

      {/* Pricing Section */}
      {active === "pricing" && (
        <section className="px-6 py-16 text-center bg-gray-100">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-bold mb-2">Free</h3>
              <p className="mb-4">₹0 / month</p>
              <ul className="mb-6 text-sm">
                <li>✔ 10 summaries / month</li>
                <li>✔ Basic AI model</li>
              </ul>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Get Started
              </button>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl border-2 border-blue-600">
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="mb-4">₹499 / month</p>
              <ul className="mb-6 text-sm">
                <li>✔ Unlimited summaries</li>
                <li>✔ Advanced AI model</li>
                <li>✔ Priority support</li>
              </ul>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Subscribe
              </button>
            </div>

            <div className="p-6 bg-white shadow-md rounded-xl">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="mb-4">Custom</p>
              <ul className="mb-6 text-sm">
                <li>✔ API Access</li>
                <li>✔ Team Accounts</li>
                <li>✔ Custom Features</li>
              </ul>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {active === "contact" && (
        <section className="px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">We’d love to hear from you. Drop us a message.</p>
          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              className="w-full mb-4 px-4 py-2 border rounded-lg"
            />
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg">
              Send
            </button>
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white mt-10">
        <p>© {new Date().getFullYear()} VerdictForge. All rights reserved.</p>
      </footer>
    </div>
  );
}
