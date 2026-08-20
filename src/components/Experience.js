export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-6 py-20"
    >
      <div className="absolute left-0 top-20 h-40 w-40 rounded-full bg-sky-100 blur-3xl" />
      <div className="absolute right-10 bottom-10 h-52 w-52 rounded-full bg-blue-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
            Experience
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#0b1f4d] md:text-4xl">
            Work and leadership experience
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            My experience combines technical development with tutoring and
            mentorship, helping me grow both as a builder and as a communicator.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Tutor Card */}
          <div className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-8 shadow-[0_10px_40px_rgba(11,31,77,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                  Jan 2025 - Present
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#0b1f4d]">
                  CS and Math Tutor
                </h3>
                <p className="mt-1 text-base font-medium text-slate-600">
                  San Jose State University
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                📘
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              Support students in computer science and mathematics by guiding
              debugging, strengthening algorithmic problem-solving, and
              translating complex technical concepts into practical,
              structured strategies.
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Mentor <strong>60+ students per semester</strong> in data
                  structures, algorithms, programming, and mathematics.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Guide students in debugging assignments and strengthening
                  problem-solving; <strong>70%+ of students</strong> reported
                  increased confidence completing coursework.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Lead pre-exam review sessions for{" "}
                  <strong>30–50 students</strong>, turning technical concepts
                  into practical examples.
                </span>
              </li>
            </ul>
          </div>

          {/* DK Lab Card */}
          <div className="rounded-[28px] border border-sky-100 bg-gradient-to-br from-white to-blue-50 p-8 shadow-[0_10px_40px_rgba(11,31,77,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">
                  Oct 2024 - Dec 2024
                </p>
                <h3 className="mt-2 text-2xl font-bold text-[#0b1f4d]">
                  Front-end Developer
                </h3>
                <p className="mt-1 text-base font-medium text-slate-600">
                  DK Lab
                </p>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                💻
              </div>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              Collaborated with a five-member team to build{" "}
              <strong>WebShare Space</strong>, a privacy-focused file-sharing
              platform, building responsive frontend interfaces for a better
              user experience.
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Built reusable, responsive UI components with{" "}
                  <strong>React</strong> and <strong>Tailwind CSS</strong> for
                  desktop and mobile.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Integrated frontend components with backend{" "}
                  <strong>REST APIs</strong>.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                <span>
                  Used <strong>GitHub</strong> for version control, code
                  collaboration, and team-based development.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
