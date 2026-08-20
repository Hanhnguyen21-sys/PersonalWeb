export default function Projects() {
  const projects = [
    {
      title: "JobPrep - AI Career Preparation",
      period: "07/2026 - Present",
      description:
        "AI-powered job preparation platform that analyzes resumes against live job postings, identifies skill gaps, and generates personalized learning roadmaps to help users prepare for target roles",
      tech: ["FastAPI", "PostgreSQL", "SQLAlchemy", "React", "Next.js"],
      link: "https://github.com/Hanhnguyen21-sys/JobPrep",
    },
    {
      title: "Crochet Flower Marketplace",
      period: "04/2026 - 06/2026",
      description:
        "A full-stack e-commerce app for a small crochet-flower business, with responsive product browsing, cart and checkout, and an admin dashboard for inventory and order tracking.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Hanhnguyen21-sys/Sweety4Girls",
    },
    {
      title: "GreenMeals",
      period: "09/2025 - 12/2025",
      description:
        "A full-stack marketplace built with a team of four, connecting restaurants with customers buying discounted surplus food, with authentication, menu browsing, and order workflows backed by 20+ unit tests.",
      tech: ["React", "Node.js", "Express", "MySQL"],
      link: "https://github.com/fungjessica/CS160-GreenMeals/tree/Master",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#eaf4ff] px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0b1f4d] md:text-4xl">
            Things I&apos;ve built
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,31,77,0.08)] transition hover:-translate-y-2 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
                {project.period}
              </p>

              <h3 className="mt-2 text-xl font-bold text-[#0b1f4d]">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-[#0b1f4d]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block rounded-full bg-sky-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-sky-600"
                >
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
