export default function LandingPage() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">AI-Powered Legal Summaries that save hours</h1>
        <p className="mb-6 max-w-xl">
          Upload judgments or contracts and get concise, citation-ready summaries — so you can focus on strategy, not paperwork.
        </p>
        <a href="#pricing" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Try for Free
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">About VerdictForge</h2>
        <p className="max-w-2xl">
          VerdictForge is built for law students, lawyers, and researchers who need fast,
          reliable AI summaries of judgments and contracts. Save time, reduce errors,
          and focus on real legal strategy instead of paperwork.
        </p>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
        <p className="mb-6">Simple plans designed for students, lawyers, and firms.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          <div className="p-6 border rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Free</h3>
            <p>₹0 / month</p>
            <p className="mt-2">Basic summaries with limited usage.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p>₹499 / month</p>
            <p className="mt-2">Unlimited summaries with faster processing.</p>
          </div>
          <div className="p-6 border rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2">Firm</h3>
            <p>Custom Pricing</p>
            <p className="mt-2">Enterprise-grade AI summaries for firms.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-6">Got questions? Reach out to us at:</p>
        <a href="mailto:support@verdictforge.in" className="text-blue-600 font-medium">
          support@verdictforge.in
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2025 VerdictForge. All rights reserved.
      </footer>
    </div>
  );
}
