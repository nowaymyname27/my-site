"use client";

export default function ProjectCard({
  project,
  renderActions,
  className = "",
}) {
  const { title, blurb, image, tech = [] } = project;

  return (
    <article
      className={`group rounded-2xl border border-red-500/70 bg-black/60 p-5 transition
                  hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.18)] ${className}`}
    >
      {/* Thumb */}
      <div className="flex h-50 items-center justify-center rounded-xl border border-red-500/40 bg-black/50">
        <img
          src={image}
          alt={`${title} logo`}
          className="min-h-30 max-h-30 w-auto opacity-90 transition group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      {blurb && <p className="mt-2 text-sm text-gray-300">{blurb}</p>}

      {/* Tags */}
      {tech.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-red-500/40 px-2 py-0.5 text-[11px] text-red-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Actions (slot) */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {typeof renderActions === "function" ? renderActions(project) : null}
      </div>
    </article>
  );
}
