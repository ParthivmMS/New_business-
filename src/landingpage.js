import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-xl font-bold">VerdictForge</h1>
        <nav className="space-x-6">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-20 px-4">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Legal AI that saves your time
        </motion.h2>
        <p className="text-lg mb-6 max-w-2xl">
          Upload judgments. Get precise summaries. Focus on strategy, not paperwork.
        </p>
        <Button className="px-6 py-3 flex items-center gap-2">
          Get Started <ArrowRight size={18} />
        </Button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h3 className="text-2xl font-semibold text-center mb-10">Why VerdictForge?</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "AI-Powered Summaries",
              desc: "Summarizes long legal judgments into clear points in seconds.",
            },
            {
              title: "Built for Law Students & Lawyers",
              desc: "Save hours of reading and focus on analysis.",
            },
            {
              title: "Simple & Secure",
              desc: "Upload and process documents safely with no complexity.",
            },
          ].map((f, i) => (
            <Card key={i} className="p-6 shadow-md">
              <CardContent>
                <h4 className="font-semibold mb-2">{f.title}</h4>
                <p>{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <h3 className="text-2xl font-semibold text-center mb-10">Simple Pricing</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { tier: "Free", price: "$0", desc: "Perfect for students" },
            { tier: "Pro", price: "$9/mo", desc: "For lawyers & firms" },
            { tier: "Enterprise", price: "Custom", desc: "For large organizations" },
          ].map((p, i) => (
            <Card key={i} className="p-6 shadow-md text-center">
              <CardContent>
                <h4 className="font-semibold">{p.tier}</h4>
                <p className="text-2xl font-bold">{p.price}</p>
                <p className="mb-4">{p.desc}</p>
                <Button>Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h3 className="text-2xl font-semibold mb-6">About VerdictForge</h3>
        <p className="max-w-2xl mx-auto">
          Built by a law student in India, VerdictForge is designed to bridge the gap between
          law and technology. Our mission is to make legal research faster, easier,
          and accessible for everyone.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
        <p className="mb-4">Have questions? Get in touch.</p>
        <Button className="flex items-center gap-2 mx-auto">
          <Mail size={18} /> Email Us
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 mt-auto">
        © {new Date().getFullYear()} VerdictForge. All rights reserved.
      </footer>
    </div>
  );
}
