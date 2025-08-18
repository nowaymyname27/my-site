# Jose Ramirez – Personal Website

This is my personal portfolio site, built with **Next.js 14**, **React**, and **Tailwind CSS 4**.  
It includes a blog powered by Markdown files, a projects showcase, and a working contact form via [Formspree](https://formspree.io).

---

## ✨ Features

- **Landing Page** – introduction and site navigation.
- **Projects Page** – filterable project cards with tech tags, live demo, and source links.
- **Blog** – Markdown-based posts with frontmatter (`title`, `date`, `tags`, `summary`) rendered with `next-mdx-remote`.
- **Contact Page** – functional form submission via Formspree endpoint.
- **Navbar & Footer** – consistent layout across pages.
- **Responsive Design** – fully responsive with TailwindCSS.
- **Custom Favicon** – located in `/public/tab_fox.svg`.

---

## 📂 Project Structure

src/
app/
layout.jsx # Root layout with Navbar & Footer
page.jsx # Landing page
projects/
page.jsx # Projects page
blog/
page.jsx # Blog index
[slug]/
page.jsx # Dynamic blog post pages
contact/
page.jsx # Contact page
components/
Navbar.jsx
Footer.jsx
Projects.jsx
ProjectCard.jsx
data/
projects.js # Projects data
posts/ # Markdown blog posts
lib/
mdx.js # Helpers for parsing MDX
public/
fox.svg # Logo
tab_fox.svg # Favicon

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development

```bash
npm run dev
```

The site will be available at http://localhost:3000.

3. Build for production

```bash
npm run build
npm start
```

⸻

📝 Writing Blog Posts

Blog posts live in src/data/posts as Markdown (.mdx) files.

Each post must start with frontmatter:

---

title: My First Post
date: 2025-08-11
tags: [personal, dev]
summary: A short description of the post.

---

Your blog content here.
Supports **Markdown** formatting.

⸻

📬 Contact Form

The Contact page uses Formspree.
Update the endpoint in src/app/contact/page.jsx:

const FORMSPREE_ENDPOINT = "https://formspree.io/f/your-id";

⸻

🌐 Deployment

This site is hosted on Vercel.

⸻

🔧 Tech Stack

- Next.js – React framework
- Tailwind CSS – styling
- Formspree – contact form handling
- next-mdx-remote – Markdown/MDX blog
