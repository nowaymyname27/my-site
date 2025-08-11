"use client";

export default function ProjectFilters({
  tags,
  active,
  onChange,
  className = "",
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onChange(tag)}
          className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
            active === tag
              ? "border-red-500 bg-red-900/40 text-red-100"
              : "border-red-500/50 text-red-200 hover:bg-red-900/30"
          }`}
          aria-pressed={active === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
