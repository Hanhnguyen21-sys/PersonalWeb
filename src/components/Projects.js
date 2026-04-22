export default function Projects() {
  const projects = [
    {
      title: "Green Meals",
      description:
        "A full-stack app that connects restaurants with customers by selling surplus food at discounted prices to reduce waste.",
      tech: ["React", "Node.js", "MySQL"],
      link: "https://github.com/fungjessica/CS160-GreenMeals/tree/Master",
    },
    {
      title: "ZenTask",
      description:
        "A task management web app that helps teams track work using Agile concepts like stories, bugs, and progress tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/Hanhnguyen21-sys/TrackerApp1",
    },
    {
      title: "Mini-processor",
      description:
        "A simulated 32-bit processor built in Verilog, capable of executing instructions in ModelSim.",
      tech: ["Verilog", "ModelSim"],
      link: "https://github.com/Hanhnguyen21-sys/MiniProcessor",
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
            Things I’ve built
          </h2>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_10px_40px_rgba(11,31,77,0.08)] transition hover:-translate-y-2 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#0b1f4d]">
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