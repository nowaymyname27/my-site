import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata = { title: "Blog" };

export default async function BlogIndexPage() {
  const posts = await getAllPostsMeta();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>

      <ul className="space-y-6">
        {posts.map((p) => (
          <li
            key={p.slug}
            className="rounded-2xl border border-red-500/60 p-5 transition hover:border-red-400"
          >
            <Link href={`/blog/${p.slug}`} className="block">
              <h2 className="text-2xl font-semibold text-white">{p.title}</h2>
              <div className="mt-1 text-sm text-gray-400">
                {new Date(p.date).toLocaleDateString()}
              </div>
              {p.summary && <p className="mt-3 text-gray-300">{p.summary}</p>}
              {p.tags?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-red-500/40 px-2 py-0.5 text-[11px] text-red-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
