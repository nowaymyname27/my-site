import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

// Where your .md posts live
const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

/** Return slugs (filenames without .md) for all posts */
export async function getAllSlugs() {
  const files = await fs.readdir(BLOG_DIR);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** Read one post by slug, parse frontmatter, compile Markdown -> HTML */
export async function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, "utf8");

  const { data, content } = matter(raw);

  // Markdown -> HTML with GFM + syntax highlighting
  const file = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight) // uses highlight.js under the hood
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    meta: normalizeMeta(data),
    html: String(file),
  };
}

/** Lightweight listing: title/date/tags/summary for the index page */
export async function getAllPostsMeta() {
  const slugs = await getAllSlugs();
  const entries = await Promise.all(
    slugs.map(async (slug) => {
      const { meta } = await getPostBySlug(slug);
      return { slug, ...meta };
    })
  );
  // Newest first
  return entries.sort((a, b) => (a.date < b.date ? 1 : -1));
}

function normalizeMeta(data) {
  return {
    title: data.title ?? "Untitled",
    // store as ISO string so sorting is reliable
    date: data.date
      ? new Date(data.date).toISOString()
      : new Date(0).toISOString(),
    tags: Array.isArray(data.tags) ? data.tags : [],
    summary: data.summary ?? "",
  };
}
