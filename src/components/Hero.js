import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#eaf4ff] px-6 py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div className="z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-sky-500">
            Personal Portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#0b1f4d] md:text-6xl">
            Computer Science Student
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#16356b]">
            I&apos;m a Computer Science student at San Jose State University based in San Jose, CA. 
            I enjoy building full-stack development applications, and I&apos;m looking for a software 
            engineering internship where I can keep shipping real products.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="rounded-xl bg-sky-500 px-6 py-3 font-medium text-white shadow-md transition hover:bg-sky-600"
            >
              Get in Touch
            </a>

            <a
              href="#projects"
              className="rounded-xl border border-[#0b1f4d] px-6 py-3 font-medium text-[#0b1f4d] transition hover:bg-white"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full bg-sky-200 md:h-[500px] md:w-[500px]">
            <Image
              src="/personal2.jpg"
              alt="Nguyen Nguyen"
              fill
              sizes="(max-width: 768px) 320px, 500px"
              priority
              className="object-cover"
            />
          </div>

          <div className="absolute left-0 top-10 h-16 w-16 rounded-full bg-sky-500 md:h-20 md:w-20" />
          <div className="absolute bottom-6 left-8 h-24 w-24 rounded-full bg-sky-400 md:h-28 md:w-28" />
          <div className="absolute right-4 top-0 h-14 w-14 rounded-full bg-sky-600 md:h-16 md:w-16" />
        </div>
      </div>
    </section>
  );
}
