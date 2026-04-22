export default function Navbar() {
  return (
    <header className="w-full border-b border-sky-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-wide text-[#0b1f4d]">
          Nguyen <span className="text-sky-500">Portfolio</span>
        </div>

        <nav className="hidden gap-8 md:flex">
          <a
            href="#home"
            className="font-medium text-[#0b1f4d] transition hover:text-sky-500"
          >
            Home
          </a>
        
          <a
            href="#education"
            className="font-medium text-[#0b1f4d] transition hover:text-sky-500"
          >
            Education
          </a>
          <a
            href="#experience"
            className="font-medium text-[#0b1f4d] transition hover:text-sky-500"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="font-medium text-[#0b1f4d] transition hover:text-sky-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="font-medium text-[#0b1f4d] transition hover:text-sky-500"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}