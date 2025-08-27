import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} VerdictForge. All rights reserved.</p>
    </footer>
  );
}
