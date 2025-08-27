import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow">
        <h1 className="text-2xl font-bold">VerdictForge</h1>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#pricing" className="hover:text-blue-600">Pricing</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Legal AI that saves your time
        </motion.h2>
        <p className="text-lg text-gray-600 mb-6">
          Upload judgments. Get precise summaries. Focus on strategy, not paperwork.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:bg-blue-700">
          Get Started <ArrowRight size={18} />
        </button>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-gray-50 px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Why VerdictForge?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "AI-Powered Summaries", desc: "Summarizes long legal judgments into clear points in seconds." },
            { title: "Built for Law Students & Lawyers", desc: "Save hours of reading and focus on analysis." },
            { title: "Simple & Secure", desc: "Upload and process documents safely with no complexity." },
          ].map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Simple Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { tier: "Free", price: "$0", desc: "Perfect for students" },
            { tier: "Pro", price: "$9/mo", desc: "For lawyers & firms" },
            { tier: "Enterprise", price: "Custom", desc: "For large organizations" },
          ].map((p, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow border">
              <h4 className="text-xl font-bold">{p.tier}</h4>
              <p className="text-2xl font-semibold my-2">{p.price}</p>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">About VerdictForge</h3>
        <p className="text-gray-600">
          Built by a law student in India, VerdictForge is designed to bridge the gap between law and technology. 
          Our mission is to make legal research faster, easier, and accessible for everyone.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <p className="mb-4">Have questions? Get in touch.</p>
        <a
          href="mailto:your-email@example.com"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          <Mail size={18} /> Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t mt-10 text-gray-600">
        © {new Date().getFullYear()} VerdictForge. All rights reserved.
      </footer>
    </div>
  );
}
