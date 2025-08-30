"use client";
import React, { useState } from "react";

export default function Summarizer() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSummarize() {
    setLoading(true);
    try {
      const response = await fetch("https://new-businessbackend.onrender.com/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();
      setSummary(data.summary);
    } catch (err) {
      setSummary("⚠️ Error connecting to backend");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Try VerdictForge Summarizer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste judgment or contract here..."
        className="w-full max-w-2xl p-4 border rounded-lg mb-4"
        rows="10"
      />
      <button
        onClick={handleSummarize}
        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        disabled={loading}
      >
        {loading ? "Summarizing..." : "Summarize"}
      </button>

      {summary && (
        <div className="mt-6 w-full max-w-2xl p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Summary</h2>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
}
