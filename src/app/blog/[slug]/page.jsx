import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props) {
  const { slug } = await props.params;
  try {
    const { meta } = await getPostBySlug(slug);
    return { title: meta.title, description: meta.summary };
  } catch {
    return { title: "Post" };
  }
}

export default async function BlogPostPage(props) {
  const { slug } = await props.params;
  try {
    const { meta, html } = await getPostBySlug(slug);
    return (
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header>
          <h1 className="text-4xl font-bold">{meta.title}</h1>
          <p className="mt-2 text-sm text-gray-400">
            {new Date(meta.date).toLocaleDateString()}
          </p>
          {meta.tags?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-3">
              {meta.tags.map((t) => (
                <span
                  key={t}
                  className="mb-5 rounded-full border border-red-500/40 px-2 py-0.5 text-[11px] text-red-200"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="
    mt-8 text-gray-200 leading-7

    /* paragraphs */
    [&>p]:mt-5 [&>p:first-child]:mt-0

    /* headings */
    [&>h1]:mt-10 [&>h1]:text-3xl [&>h1]:font-bold
    [&>h2]:mt-8  [&>h2]:text-2xl [&>h2]:font-semibold
    [&>h3]:mt-6  [&>h3]:text-xl  [&>h3]:font-semibold

    /* lists */
    [&>ul]:mt-5 [&>ol]:mt-5
    [&>ul]:list-disc [&>ol]:list-decimal
    [&>ul]:pl-6 [&>ol]:pl-6
    [&>li]:mt-2

    /* blockquote */
    [&>blockquote]:mt-6 [&>blockquote]:border-l [&>blockquote]:border-red-500/40
    [&>blockquote]:pl-4 [&>blockquote]:text-gray-300 [&>blockquote]:italic

    /* code blocks */
    [&>pre]:mt-6 [&>pre]:rounded-lg [&>pre]:p-4
    [&>pre]:bg-black/60 [&>pre]:border [&>pre]:border-red-500/30
    [&>pre>code]:block

    /* inline code */
    [&_code:not(pre_*)]:rounded [&_code:not(pre_*)]:px-1.5 [&_code:not(pre_*)]:py-0.5
    [&_code:not(pre_*)]:bg-black/50 [&_code:not(pre_*)]:border [&_code:not(pre_*)]:border-red-500/30
  "
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    );
  } catch {
    notFound();
  }
}
