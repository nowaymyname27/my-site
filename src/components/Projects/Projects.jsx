"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import ProjectCard from "@/components/Projects/ProjectCard";
import ProjectFilters from "@/components/Projects/ProjectFilters";

function isExternal(url = "") {
  return /^https?:\/\//i.test(url);
}

export default function Projects({
  projects = projectsData,
  title = "Projects",
}) {
  const [filter, setFilter] = useState("All");

  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.tech?.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tech?.includes(filter));
  }, [projects, filter]);

  // Decide buttons per project here (totally flexible)
  const renderActions = (p) => {
    const links = p.links || {};
    const buttons = [];

    // Live Demo (internal or external)
    if (links.demo) {
      const DemoEl = isExternal(links.demo) ? "a" : Link;
      buttons.push(
        <DemoEl
          key="demo"
          href={links.demo}
          {...(isExternal(links.demo)
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
          className="rounded-lg bg-red-700 px-3 py-1.5 text-sm font-semibold text-white hover:bg-red-600"
        >
          Live Demo
        </DemoEl>
      );
    }

    // Source
    if (links.code) {
      buttons.push(
        <a
          key="code"
          href={links.code}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-red-500 px-3 py-1.5 text-sm font-semibold text-red-200 hover:bg-red-900/30"
        >
          Source
        </a>
      );
    }

    // Optional extras if present in data (totally optional)
    if (links.writeup) {
      const WriteEl = isExternal(links.writeup) ? "a" : Link;
      buttons.push(
        <WriteEl
          key="writeup"
          href={links.writeup}
          {...(isExternal(links.writeup)
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
          className="rounded-lg border border-red-500/60 px-3 py-1.5 text-sm font-semibold text-red-200 hover:bg-red-900/30"
        >
          Write-up
        </WriteEl>
      );
    }
    if (links.caseStudy) {
      const CaseEl = isExternal(links.caseStudy) ? "a" : Link;
      buttons.push(
        <CaseEl
          key="case"
          href={links.caseStudy}
          {...(isExternal(links.caseStudy)
            ? { target: "_blank", rel: "noreferrer" }
            : {})}
          className="rounded-lg border border-red-500/60 px-3 py-1.5 text-sm font-semibold text-red-200 hover:bg-red-900/30"
        >
          Case Study
        </CaseEl>
      );
    }

    // If no links provided, you could return null or a disabled button
    if (buttons.length === 0) {
      return <span className="text-xs text-gray-400">No public links yet</span>;
    }

    return buttons;
  };

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h1>
          <ProjectFilters tags={allTags} active={filter} onChange={setFilter} />
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              renderActions={renderActions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
