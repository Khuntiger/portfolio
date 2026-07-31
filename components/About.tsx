import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="flex min-h-[calc(100svh-72px)] items-center justify-center bg-slate-900 px-6 py-12 text-white">
            <div className="w-full max-w-5xl">
                <h2 className="mb-10 text-center text-4xl font-bold">About Me</h2>

                <div className="grid items-center gap-10 md:grid-cols-2">
                    <div className="flex justify-center">
                        <Image
                            src="/images/profile.jpg"
                            alt="Nawakhun Promlok"
                            width={280}
                            height={280}
                            className="rounded-full border-4 border-sky-500 object-cover shadow-xl"
                            priority
                        />
                    </div>

                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Hi, I&apos;m Nawakhun</h3>

                        <p className="leading-8 text-slate-300">
                            I am a Computer Science student specializing in Data Science
                            and Cybersecurity. I enjoy developing software, learning cybersecurity,
                            artificial intelligence, cloud technologies, and solving real-world problems through technology.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            <p className="rounded-lg bg-slate-800 p-4">Computer Science</p>
                            <p className="rounded-lg bg-slate-800 p-4">Cybersecurity</p>
                            <p className="rounded-lg bg-slate-800 p-4">Artificial Intelligence</p>
                            <p className="rounded-lg bg-slate-800 p-4">Data Science</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
