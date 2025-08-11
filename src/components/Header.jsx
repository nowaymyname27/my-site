// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Optional: close on outside click
  useEffect(() => {
    function onDocClick(e) {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [mobileOpen]);

  const linkBase =
    "text-sm font-medium text-white hover:text-gray-200 transition-colors";
  const isActive = (href) =>
    pathname === href ? "underline underline-offset-4" : "";

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-red-800/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 md:py-4">
        {/* Logo -> Home */}
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl">
            <img
              src="/icons/fox.svg"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Jose Ramirez
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/projects"
            className={`${linkBase} ${isActive("/projects")}`}
          >
            Projects
          </Link>
          <Link href="/blog" className={`${linkBase} ${isActive("/blog")}`}>
            Blog
          </Link>
          <Link
            href="/contact"
            className={`${linkBase} ${isActive("/contact")}`}
          >
            Contact me!
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl border border-white p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div
          ref={menuRef}
          className="mx-auto block max-w-7xl px-4 pb-4 md:hidden bg-red-800/95"
        >
          <div className="grid gap-2 text-center">
            <Link
              href="/projects"
              className="rounded-lg px-3 py-2 text-sm text-white hover:bg-red-700"
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="rounded-lg px-3 py-2 text-sm text-white hover:bg-red-700"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="rounded-lg px-3 py-2 text-sm text-white hover:bg-red-700"
            >
              Contact me!
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
