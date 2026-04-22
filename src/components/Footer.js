export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0b1f4d] px-6 py-12 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <h3 className="text-2xl font-semibold">
          Let’s connect
        </h3>

        <p className="mt-4 text-sky-100">
          Feel free to reach out for opportunities or just to say hello.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3 text-sm">
          <a
            href="mailto:nnhn212002@gmail.com"
            className="hover:text-sky-300"
          >
            nnhn212002@gmail.com
          </a>

          <p className="text-sky-100">
            (+1) 408 577 7867
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-6 text-sm">
          <a
            href="https://github.com/Hanhnguyen21-sys"
            target="_blank"
            className="hover:text-sky-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/hanhnguyen21"
            target="_blank"
            className="hover:text-sky-300"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8 border-t border-sky-700 pt-6 text-xs text-sky-200">
          © {new Date().getFullYear()} Nguyen Nu Hanh Nguyen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}