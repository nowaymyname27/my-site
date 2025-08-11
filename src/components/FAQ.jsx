"use client";
export default function FAQ() {
  const faqs = [
    {
      q: "What’s your core skill set?",
      a: "I specialize in React, Next.js, Tailwind CSS, Node.js, and Python, with experience in AWS and SQL.",
    },
    {
      q: "Why should I hire you?",
      a: "I can code without the assistance of AI, I prefer reading documentation and I write easy to read code.",
    },
    {
      q: "How do you work with others?",
      a: "I focus on clear communication, transparent timelines, and proactive problem-solving to keep projects moving smoothly. I've never had any problems with any co-workers.",
    },
    {
      q: "What value do you add beyond coding?",
      a: "I am a problem solver at heart, it doesn't always apply specifically to code. I am good at coming up with solutions to big picture stuff as well.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full bg-black text-white relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundImage: `
          radial-gradient(at 28% 45%, rgba(255,0,0,0.3) 0%, transparent 40%),
          radial-gradient(at 72% 55%, rgba(139,0,0,0.35) 0%, transparent 40%)
        `,
      }}
    >
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mx-auto mt-8 grid max-w-3xl gap-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-red-500/80 p-4 open:bg-black/50
                         transition-all duration-300
                         hover:border-red-400 hover:bg-black/60
                         hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]
                         focus-within:border-red-400 focus-within:shadow-[0_0_30px_rgba(239,68,68,0.35)]"
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between font-medium
                                   text-red-200 transition-colors duration-300
                                   group-hover:text-red-100 group-open:text-red-100
                                   focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 rounded-lg px-1"
              >
                <span>{item.q}</span>
                <svg
                  className="h-5 w-5 text-red-400 transition-all duration-300
                             group-hover:text-red-300 group-open:rotate-180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <p className="mt-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
