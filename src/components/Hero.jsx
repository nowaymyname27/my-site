"use client";

import { useState, useEffect, useCallback } from "react";
import CodePreview from "@/components/CodePreview/CodePreview";
import AutoHeight from "@/components/AutoHeight";
import snippets from "@/data/snippets.json";

function getRandomIndex(except = -1) {
  if (!Array.isArray(snippets) || snippets.length <= 1) return 0;
  let i = Math.floor(Math.random() * snippets.length);
  if (i === except) i = (i + 1) % snippets.length;
  return i;
}

export default function Improved() {
  // Hydration-safe: deterministic first render, randomize after mount
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    setIdx(getRandomIndex());
  }, []);

  const refreshSnippet = useCallback(() => {
    setIdx((prev) => getRandomIndex(prev));
  }, []);

  const snippet = snippets[idx] ?? { id: "init", code: "", label: "" };

  return (
    <section
      className="relative overflow-hidden min-h-[75vh] flex items-center"
      style={{
        // Subtle red glow over global black body
        backgroundImage: `
          radial-gradient(at 18% 28%, rgba(239,68,68,0.22) 0%, transparent 42%),
          radial-gradient(at 82% 72%, rgba(127,29,29,0.28) 0%, transparent 46%)
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 w-full">
        <div className="grid gap-12 md:grid-cols-2 lg:flex lg:items-start lg:gap-12">
          {/* Left column (fixed width on lg) */}
          <div className="lg:basis-[32rem] lg:shrink-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500 bg-black/30 px-4 py-1.5 text-sm font-medium text-red-200">
              <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
              Built with: React, Next.js and Tailwind
            </span>

            <h1 className="mt-6 text-6xl font-bold leading-tight tracking-tight text-white md:text-7xl">
              Developer & Designer
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-200 md:text-xl">
              You can have all this talent at your company!
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <a
                href="/projects"
                className="rounded-2xl bg-red-800 px-6 py-4 text-center text-base font-semibold text-white shadow-sm hover:bg-red-700"
              >
                See Projects
              </a>
              <a
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-red-500 px-6 py-4 text-center text-base font-semibold text-red-200 hover:bg-red-900/30"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right column (expands; bleeds to edge via -mr-6) */}
          <div className="min-w-0 flex-1 -mr-6">
            <AutoHeight>
              <CodePreview
                key={snippet.id ?? idx}
                code={snippet.code}
                label={snippet.label}
                onRefresh={refreshSnippet}
                className="w-full"
              />
            </AutoHeight>
          </div>
        </div>
      </div>
    </section>
  );
}
