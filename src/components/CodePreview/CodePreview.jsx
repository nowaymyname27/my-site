"use client";
import { useMemo, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import "./hljs-overrides.css";

export default function CodePreview({
  code = "",
  label = "",
  className = "",
  onRefresh,
  lang,
}) {
  const formatted = useMemo(() => code.replace(/\\n/g, "\n"), [code]);

  const highlighted = useMemo(() => {
    try {
      if (lang) {
        return hljs.highlight(formatted, { language: lang }).value;
      }
      const res = hljs.highlightAuto(formatted);
      return (
        res?.value ?? hljs.highlight(formatted, { language: "plaintext" }).value
      );
    } catch {
      return formatted
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  }, [formatted, lang]);

  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formatted);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      {/* Force hljs to use transparent background */}

      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-red-900/60 to-black" />
      <div className="w-full rounded-2xl border border-red-500 bg-black p-4 shadow-xl md:p-5">
        <div className="flex items-center justify-between gap-3 px-1 pb-2">
          <div className="truncate text-sm font-medium text-red-200/90">
            {label || "Snippet"}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="rounded-lg border border-red-500/50 px-2 py-1 text-xs font-semibold text-red-100 hover:bg-red-900/40"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            {onRefresh && (
              <button
                onClick={onRefresh}
                className="rounded-lg border border-red-500/50 px-2 py-1 text-xs font-semibold text-red-100 hover:bg-red-900/40"
              >
                Refresh
              </button>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-red-500 bg-black p-4 md:p-5">
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <pre className="mt-4 overflow-x-auto rounded-lg bg-black/80 p-6 font-mono text-sm leading-relaxed text-gray-200 md:text-base">
            <code
              className="hljs"
              dangerouslySetInnerHTML={{ __html: highlighted }}
            />
          </pre>
        </div>
      </div>
    </div>
  );
}
