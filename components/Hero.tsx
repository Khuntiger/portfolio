export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[100svh] flex-col items-center justify-center bg-slate-950 px-6 pt-24 text-white"
    >
      <p className="mb-4 rounded-full border border-sky-400/40 px-4 py-2 text-sm font-medium text-sky-200">
        Computer Science Portfolio
      </p>

      <h1 className="max-w-4xl text-center text-4xl font-bold leading-tight sm:text-6xl">
        Nawakhun Promlok
      </h1>

      <p className="mt-4 text-center text-xl text-slate-300">
        Computer Science - Data Science and Cybersecurity
      </p>

      <p className="mt-2 text-center text-lg text-sky-300">
        Cybersecurity | AI | Data Science
      </p>

      <p className="mt-6 max-w-2xl text-center leading-8 text-slate-400">
        I am a Computer Science student specializing in Data Science and
        Cybersecurity. I enjoy learning about Cybersecurity, Artificial
        Intelligence, Data Analytics, and developing practical software
        solutions.
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a
          href="#projects"
          className="rounded-lg bg-sky-500 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-lg border border-white/80 px-6 py-3 text-center font-semibold transition hover:bg-white hover:text-slate-950"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
