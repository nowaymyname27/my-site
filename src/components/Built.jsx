"use client";
const skills = [
  { name: "React", src: "/icons/react.svg" },
  { name: "Tailwind", src: "/icons/tailwind.svg" },
  { name: "Node.js", src: "/icons/node.svg" },
  { name: "Docker", src: "/icons/docker.svg" },
  { name: "AWS", src: "/icons/aws.svg" },
  { name: "PostgreSQL", src: "/icons/postgres.svg" },
  // Add more as needed
];

export default function Built() {
  return (
    <section className=" bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <p className="text-center text-xs uppercase tracking-wider text-gray-50">
          Skills & Tools
        </p>
        <div className="mt-5 grid grid-cols-2 items-center gap-6 opacity-90 sm:grid-cols-3 md:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="flex h-16 w-16 items-center justify-center">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className="max-h-full max-w-full"
                />
              </div>
              <span className="text-sm font-medium text-gray-50">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
