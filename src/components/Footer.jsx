"use client";
export default function Footer() {
  return (
    <footer className="border-t bg-red-800/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <div className="flex items-center gap-4 text-sm text-gray-50">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-red-800/95 text-white">
            <img
              src="/icons/fox.svg"
              alt="Starter logo"
              className="h-7 w-15 rounded-full"
            />
          </span>
          <span> Jose Ramirez</span>
          <span>© {new Date().getFullYear()}</span>
          <span>V 1.0.1 </span>
        </div>
      </div>
    </footer>
  );
}
