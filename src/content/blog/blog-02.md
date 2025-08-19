---
title: The Fastes I've Ever Coded, and The Dumbest I've Ever Felt
date: 2025-08-19
tags: [personal, AI, React]
summary: This blog is about how I went from fumbling through React and Tailwind to building a full site in a week with ChatGPT’s help—only to realize that while AI makes me more productive than ever, it also makes me feel like I’m learning less and losing confidence in my growth as a developer.
---

Last month I had no idea how React worked. I couldn’t have told you what a component was, let alone a hook. Tailwind? I’d heard of it, thought it looked cool, but had never touched it. Next.js? All I knew was that developers used it for something React-related, though I couldn’t have explained what or why. And yet here I am—the first thing you see on my landing page is that this site was built with React, styled with Tailwind, and running on Next.js. How was this possible?

Well, it all started with wanting to update my website. About two years ago I built a small site to host my university projects, hoping some employer might stumble across it and decide to hire me. Back then I had zero web dev experience, so I kept it simple: just HTML, CSS, and Bootstrap. Javascript? I hardly knew her.

This time around, I wanted to do it properly. React seemed like the obvious choice—it’s the framework everyone uses. So I did what any junior dev would do: I bought a Udemy course. Fifty hours of videos, the kind you’re supposed to slog through over weeks, maybe months. I made it through five hours where I learned all the basics: Components, Hooks, Props, State, etc... but doing this course was just killing my motivation. So instead, I jumped in headfirst after learning the basics. Trial by fire.

So I started small—or at least I thought I did. My first goal was just to make a header. That should have been simple. Instead, I spent three to five hours wrestling with it, trying to figure out how the pieces even fit together. Components. Props. State. They all felt so easy in the tutorial but so hard to get right in practice. I’d get one thing working, then break three others.

And that was before I even touched styling. Tailwind was supposed to make CSS easier, but at the time it just felt like someone had dumped a giant list of class names in my lap. Every Google search sent me back to the documentation which, while straightforward, still felt like trying to memorize a million little attributes.

Meanwhile, I was building everything on Vite because that’s what I saw the Udemy course using, even though I couldn’t have explained what it actually did. And Next.js? I kept seeing it mentioned in tutorials and docs, but I had no idea why it existed or what problem it was supposed to solve. Piece by piece, I was fumbling in the dark, convinced this was going to take forever.

So I did the one thing I had vowed not to do. I opened up AI.

Now, whenever I say that, I feel like I have to clarify—probably not in the way you think. I didn’t ask it to build my whole site or write my code for me. I just asked ChatGPT to sketch out a simple template: React, Vite, Tailwind. This was the day GPT-5 had just come out, and I figured it was the perfect chance to see what it could really do.

And… it was incredible. In seconds it generated a full landing page that put my hours of fumbling to shame. Clean structure, solid styling, everything working right out of the box. It was so good, it scared me. Because if AI can do this in seconds—better than I could in hours—then how am I supposed to compete? How am I supposed to get a job against something like that?

So I did what any sane person would do: I took the template as a starting point. I told myself it wasn’t cheating, just a time save. After all, I understood what it was doing — it was basic React, nothing mysterious. Four clean sections: a header, a hero, a skills/tools grid, and a footer.

And then ChatGPT casually dropped _this_:

```jsx
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Single‑file portfolio template with 4 sections: Header, Hero, Tools/Skills, Footer
// TailwindCSS + shadcn/ui + framer-motion
// Replace placeholder text, links, and skills with your own.

export default function PortfolioPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skills = {
    "Core": ["React", "Next.js", "TypeScript", "Node.js"],
    "Styling": ["Tailwind CSS", "shadcn/ui", "Radix Primitives"],
    "Backend": ["PostgreSQL", "Prisma", "tRPC", "REST"],
    "Cloud & DevOps": ["Vercel", "AWS", "Docker"],
    "Tooling": ["Git", "ESLint", "Prettier", "Jest"],
  } as const;

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-block h-3 w-3 rounded-full bg-neutral-900 dark:bg-neutral-100" />
            <span>Your Name</span>
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
            <a href="#about" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">About</a>
            <a href="#skills" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">Skills</a>
            <a href="#contact" className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="secondary" className="hidden sm:inline-flex">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
            <p className="mb-3 text-sm font-medium tracking-wide text-neutral-600 dark:text-neutral-400">Hi, I’m</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">Your Name — Frontend Engineer</h1>
            <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-400">
              I build fast, accessible web apps with a focus on delightful UX and clean, maintainable code.
              Currently exploring design systems and performance optimization.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button className="group">
                View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <div className="ml-1 flex items-center gap-2 text-neutral-600 dark:text-neutral-400" aria-label="Social links">
                <a href="https://github.com/" aria-label="GitHub" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/" aria-label="LinkedIn" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:you@example.com" aria-label="Email" className="rounded-md p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }} className="order-first md:order-none">
            <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-b from-neutral-100 to-white shadow-sm dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950 md:h-80">
              <div className="absolute inset-0 bg-[radial-gradient(20rem_20rem_at_80%_20%,rgba(0,0,0,.06),transparent)] dark:bg-[radial-gradient(20rem_20rem_at_80%_20%,rgba(255,255,255,.06),transparent)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Featured Project</span>
                  <h3 className="mt-2 text-xl font-semibold">Project Name</h3>
                  <p className="mt-2 px-6 text-sm text-neutral-600 dark:text-neutral-400">A quick blurb about a recent build. Link this card to a live demo or case study.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools / Skills */}
      <section id="skills" className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Tools & Skills
          </motion.h2>
          <p className="mt-2 max-w-prose text-neutral-600 dark:text-neutral-400">
            A snapshot of the technologies I use to ship reliable, user‑friendly products.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <Card key={group} className="rounded-2xl border-neutral-200 dark:border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{group}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((s) => (
                      <Badge key={s} variant="secondary" className="rounded-full px-3 py-1 text-sm">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Let’s build something great.</p>
              <a href="mailto:you@example.com" className="mt-1 inline-block text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-700 dark:hover:decoration-neutral-200">
                you@example.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
              <a href="#" className="text-sm hover:text-neutral-900 dark:hover:text-neutral-100">Privacy</a>
              <span aria-hidden>·</span>
              <a href="#" className="text-sm hover:text-neutral-900 dark:hover:text-neutral-100">Imprint</a>
              <span aria-hidden>·</span>
              <span className="text-sm">© {new Date().getFullYear()} Your Name</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

In one shot, I had a fully working landing page with animations, clean structure, even nice styling. All the things I had been sweating over for hours, AI spit out like it was nothing.

But if you’ve spent any time with React, you know that as nice as this template looked, it had some serious problems under the hood. The biggest one: there were no components. It was just one giant file, everything crammed together. Sure, it worked, but there was no way I could build on it without making a mess.

So my first real task was obvious — split it up. I separated each of the four sections into its own component: header, hero, skills, footer. Simple enough, but instantly the whole project felt more manageable. Suddenly it wasn’t this overwhelming wall of code anymore. It felt like something I could actually work with.

Once I had all the components separated, I tried again to manually edit each one — and of course I broke things. Over and over. It was easier now that I had a solid base, but still painfully slow to get everything working exactly how I wanted. That’s when I hit what I’d call my breaking point.

I love coding, but I hate feeling like I’m crawling. So I had to make a choice. I could spend the next month grinding it out, building this site piece by piece at a snail’s pace. Or I could accept reality: ChatGPT could handle the bulk of the code, and my job could be debugging, tweaking, and making the design decisions.

So I gave in and used ChatGPT to help me build the site, component by component. And honestly, it was both freeing and demoralizing. Freeing, because I could finally make things work exactly how I wanted without spending hours stuck on tiny details. Demoralizing, because every time I did, I felt like I was giving up a chance to actually _learn_.

I started to feel like the very thing I’d always made fun of: a vibe coder. Someone who can ship something that looks polished, but can’t fully explain how it all works under the hood.

Of course, that wasn’t really true. I could read the code, follow what it was doing, and even explain it back. But if you had asked me to write it all from scratch, it would have taken me hours—maybe days. Given enough time, I’d get faster. Maybe one day I’d even be good enough to write it all without hesitation.

But that’s the catch, isn’t it? In a world where junior dev roles are disappearing, and where the expectation is that you already know all the tools, is it really worth grinding it out? Why spend months building that muscle when AI can handle the hard part in seconds?

The truth is, AI has made me more productive than I’ve ever been. I can build faster, cleaner, and with less trial and error than I thought possible a month ago. But it’s also drained something out of me. It’s made me less eager to wrestle with new tools, less motivated to grind through the hard parts until I truly _own_ them. When you are poor, you can't afford to learn things slow.

That’s why, if you asked me what I’m most proud of as a developer, I wouldn’t point to this site. I’d point to Neovim. My Neovim. The custom config I’ve built piece by piece, brick by brick, until it felt like my own personal workshop. Every keybinding, every plugin, every tweak is something I chose, something I understand. It’s the one tool where I can confidently say: I didn’t just use it, I _mastered_ it.

And maybe that’s why it feels special—because I know not many developers these days can say the same.

But that’s a story for another time.
