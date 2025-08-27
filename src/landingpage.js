// src/LandingPage.js
import { useState } from "react";

export default function LandingPage() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* NAV */}
      <nav className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          <div className="text-xl font-bold text-indigo-600">VerdictForge</div>
          <div className="hidden md:flex items-center space-x-6 text-gray-700">
            <button onClick={() => setActive("home")} className="hover:text-indigo-600">Home</button>
            <button onClick={() => setActive("about")} className="hover:text-indigo-600">About</button>
            <button onClick={() => setActive("pricing")} className="hover:text-indigo-600">Pricing</button>
            <button onClick={() => setActive("contact")} className="hover:text-indigo-600">Contact</button>
          </div>

          {/* mobile dropdown */}
          <div className="md:hidden">
            <select
              className="border rounded px-2 py-1"
              value={active}
              onChange={(e) => setActive(e.target.value)}
            >
              <option value="home">Home</option>
              <option value="about">About</option>
              <option value="pricing">Pricing</option>
              <option value="contact">Contact</option>
            </select>
          </div>
        </div>
      </nav>

      {/* HERO */}
      {active === "home" && (
        <header className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              AI-Powered Legal Summaries that save hours
            </h1>
            <p className="mt-4 text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
              Upload judgments or contracts and get concise, citation-ready summaries — so you can focus on strategy, not paperwork.
            </p>
            <div className="mt-8">
              <a
                href="#pricing"
                className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
                onClick={() => setActive("pricing")}
              >
                Try for Free
              </a>
            </div>
          </div>
        </header>
      )}

      {/* ABOUT */}
      {active === "about" && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About VerdictForge</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built by a law student for law students, advocates and legal teams. VerdictForge condenses long judgments and contracts into clear
              summaries, flags key clauses, and exports citation-ready notes — saving hours of reading each week.
            </p>
          </div>
        </section>
      )}

      {/* PRICING */}
      {active === "pricing" && (
        <section id="pricing" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold">Simple Pricing</h2>
              <p className="text-gray-600 mt-2">Start free. Upgrade as your needs grow.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">Free</h3>
                <div className="text-2xl font-bold mb-3">₹0</div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• 10 pages / month</li>
                  <li>• Short summaries & highlights</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white">Get Started</button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow border-2 border-indigo-600">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-full">Most popular</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Pro</h3>
                <div className="text-2xl font-bold mb-3">₹499 / month</div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Unlimited pages</li>
                  <li>• Advanced summarization model</li>
                  <li>• Export to Word / Markdown</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white">Subscribe</button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                <div className="text-2xl font-bold mb-3">Custom</div>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  <li>• Team seats & SSO</li>
                  <li>• API & integrations</li>
                  <li>• SLA & dedicated support</li>
                </ul>
                <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white">Contact Us</button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
      {active === "contact" && (
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Contact Us</h2>
            <p className="text-center text-gray-600 mb-6">Questions, feedback, partnership? Drop us a message.</p>
            <form className="grid gap-4">
              <input className="border rounded px-4 py-2" placeholder="Your name" />
              <input className="border rounded px-4 py-2" placeholder="Your email" />
              <textarea className="border rounded px-4 py-2" rows="4" placeholder="Message" />
              <div className="text-center">
                <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">Send</button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="mt-auto bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm">© {new Date().getFullYear()} VerdictForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
