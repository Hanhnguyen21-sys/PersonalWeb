export default function Education() {
  const languages = ["Python", "Java", "C++", "JavaScript", "SQL", "HTML", "CSS"];
  const frameworksAndTools = [
    "React",
    "Node.js",
    "Express",
    "Flask",
    "FastAPI",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "REST APIs",
    "SQLAlchemy",
  ];
  const databases = ["PostgreSQL", "MySQL", "MongoDB", "SQLite"];

  return (
    <section id="education" className="relative overflow-hidden bg-[#f4f9ff] px-6 py-20">
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-56 w-56 rounded-full bg-blue-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Background & Skills
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0b1f4d] md:text-4xl">
            Education and Skills
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            A quick look at my academic background and the technical and
            interpersonal skills I bring to projects.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div className="rounded-[28px] border border-sky-100 bg-white/90 p-8 shadow-[0_10px_40px_rgba(11,31,77,0.08)] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-xl">
                🎓
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0b1f4d]">Education</h3>
                <p className="text-sm text-slate-500">
                  Academic background and achievements
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-[#0b1f4d]">
                      San Jose State University
                    </h4>
                    <p className="mt-2 text-slate-600">
                      B.S. in Computer Science
                    </p>
                    <p className="mt-2 text-sm text-slate-500">
                      Expected 12/2027
                    </p>
                  </div>

                  <span className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    GPA: 3.95
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm">
                <h4 className="text-xl font-semibold text-[#0b1f4d]">
                  Ohlone College
                </h4>
                <p className="mt-2 text-slate-600">
                  A.S. in Computer Science & Applied Mathematics
                </p>
                <p className="mt-2 text-sm text-slate-500">01/2022 - 05/2024</p>
              </div>

              <div>
                <p className="mb-3 text-sm font-semibold text-[#0b1f4d]">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Object-Oriented Design",
                    "Operating Systems",
                    "Distributed Systems",
                    "Computer Architecture",
                    "Linear Algebra",
                  ].map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-[#0b1f4d]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="rounded-[28px] border border-sky-100 bg-white/90 p-8 shadow-[0_10px_40px_rgba(11,31,77,0.08)] backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-xl">
                💻
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0b1f4d]">Skills</h3>
                <p className="text-sm text-slate-500">
                  Technical tools and strengths
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-7">
              <div>
                <p className="mb-3 text-base font-semibold text-[#0b1f4d]">
                  Languages
                </p>
                <div className="flex flex-wrap gap-3">
                  {languages.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-[#0b1f4d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-base font-semibold text-[#0b1f4d]">
                  Frameworks & Tools
                </p>
                <div className="flex flex-wrap gap-3">
                  {frameworksAndTools.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-[#0b1f4d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-base font-semibold text-[#0b1f4d]">
                  Databases
                </p>
                <div className="flex flex-wrap gap-3">
                  {databases.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-[#0b1f4d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
