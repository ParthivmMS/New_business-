// src/landingpage.js  
"use client";  
import React from "react";  
import Navbar from "./components/navbar";  
  
export default function LandingPage() {  
  return (  
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">  
      {/* Nav (client component) */}  
      <Navbar />  
  
      {/* HERO */}  
      <header id="home" className="scroll-mt-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">  
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 text-center">  
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">  
            AI-Powered Legal Summaries that save hours  
          </h1>  
          <p className="mt-4 text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">  
            Upload judgments or contracts and get concise, citation-ready summaries — focus on strategy, not paperwork.  
          </p>  
          <div className="mt-8 flex justify-center">  
            <a  
              href="/summarizer"  
              className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"  
            >  
              Try for Free  
            </a>  
          </div>  
        </div>  
      </header>  
  
      {/* FEATURES */}  
      <section id="features" className="scroll-mt-20 py-16">  
        <div className="max-w-6xl mx-auto px-6 md:px-8">  
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why VerdictForge?</h2>  
          <div className="grid gap-6 md:grid-cols-3">  
            <div className="bg-white p-6 rounded-xl shadow">  
              <h3 className="text-lg font-semibold mb-2">AI-Powered Summaries</h3>  
              <p className="text-sm text-gray-600">  
                Converts long judgments and contracts into concise, structured summaries with key takeaways.  
              </p>  
            </div>  
  
            <div className="bg-white p-6 rounded-xl shadow">  
              <h3 className="text-lg font-semibold mb-2">Built for Legal Workflows</h3>  
              <p className="text-sm text-gray-600">  
                Supports citation-ready export, clause highlighting, and quick reference notes for lawyers and students.  
              </p>  
            </div>  
  
            <div className="bg-white p-6 rounded-xl shadow">  
              <h3 className="text-lg font-semibold mb-2">Privacy & Security</h3>  
              <p className="text-sm text-gray-600">  
                Documents are processed securely — designed to respect confidentiality for legal work.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>  
  
      {/* PRICING */}  
      <section id="pricing" className="scroll-mt-20 py-16 bg-gray-50">  
        <div className="max-w-6xl mx-auto px-6 md:px-8">  
          <div className="text-center mb-10">  
            <h2 className="text-2xl md:text-3xl font-bold">Simple Pricing</h2>  
            <p className="text-gray-600 mt-2">Start free. Upgrade when you need more.</p>  
          </div>  
  
          <div className="grid gap-6 md:grid-cols-3">  
            {/* Free */}  
            <div className="bg-white p-6 rounded-2xl shadow">  
              <h3 className="text-lg font-semibold mb-2">Free</h3>  
              <div className="text-2xl font-bold mb-3">₹0 <span className="text-sm font-medium">/ month</span></div>  
              <ul className="text-sm text-gray-600 mb-6 space-y-1">  
                <li>• 10 pages / month</li>  
                <li>• Short summaries & highlights</li>  
              </ul>  
              <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">  
                Get Started  
              </button>  
            </div>  
  
            {/* Pro */}  
            <div className="bg-white p-6 rounded-2xl shadow border-2 border-indigo-600">  
              <div className="flex items-center justify-center mb-2">  
                <span className="text-sm px-3 py-1 bg-indigo-600 text-white rounded-full">Most popular</span>  
              </div>  
              <h3 className="text-lg font-semibold mb-2">Pro</h3>  
              <div className="text-2xl font-bold mb-3">₹499 <span className="text-sm font-medium">/ month</span></div>  
              <ul className="text-sm text-gray-600 mb-6 space-y-1">  
                <li>• Unlimited pages</li>  
                <li>• Advanced summarization model</li>  
                <li>• Export to Word / Markdown</li>  
              </ul>  
              <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">  
                Subscribe  
              </button>  
            </div>  
  
            {/* Enterprise */}  
            <div className="bg-white p-6 rounded-2xl shadow">  
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>  
              <div className="text-2xl font-bold mb-3">Custom</div>  
              <ul className="text-sm text-gray-600 mb-6 space-y-1">  
                <li>• Team seats & SSO</li>  
                <li>• API & integrations</li>  
                <li>• SLA & dedicated support</li>  
              </ul>  
              <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">  
                Contact Us  
              </button>  
            </div>  
          </div>  
        </div>  
      </section>  
  
      {/* ABOUT */}  
      <section id="about" className="scroll-mt-20 py-16">  
        <div className="max-w-4xl mx-auto px-6 text-center">  
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About VerdictForge</h2>  
          <p className="text-gray-600 max-w-2xl mx-auto">  
            Built by law students and practitioners to make legal research faster. VerdictForge condenses long legal texts into clear summaries,  
            highlights obligations and risks, and helps you prepare notes for court or study.  
          </p>  
        </div>  
      </section>  
  
      {/* CONTACT */}  
      <section id="contact" className="scroll-mt-20 py-16 bg-gray-50">  
        <div className="max-w-3xl mx-auto px-6">  
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Contact Us</h2>  
          <p className="text-center text-gray-600 mb-6">Questions, feedback or partnership enquiries — drop a message below.</p>  
  
          <form className="max-w-md mx-auto grid gap-4">  
            <input type="text" placeholder="Your name" className="border rounded px-4 py-2" />  
            <input type="email" placeholder="Your email" className="border rounded px-4 py-2" />  
            <textarea placeholder="Message" rows="5" className="border rounded px-4 py-2" />  
            <div className="text-center">  
              <button type="submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg">Send</button>  
            </div>  
          </form>  
        </div>  
      </section>  
  
      {/* FOOTER */}  
      <footer className="mt-auto bg-gray-900 text-white py-6">  
        <div className="max-w-6xl mx-auto px-6 text-center">  
          <p className="text-sm">© {new Date().getFullYear()} VerdictForge. All rights reserved.</p>  
        </div>  
      </footer>  
    </div>  
  );  
        }
