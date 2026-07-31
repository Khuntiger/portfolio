export default function Skills() {
    const skills = [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Spring Boot",
        "MySQL",
        "Docker",
        "Linux",
        "Wazuh",
        "Wireshark",
        "Nmap",
        "Git",
        "Data Science",
        "AI",
    ];

    return (
        <section id="skills" className="flex min-h-[calc(100svh-72px)] items-center bg-slate-950 px-6 py-12 text-white">
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-4xl font-bold">Skills</h2>
                <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-400">
                    Tools and technologies I use for software development, security practice,
                    and data-focused projects.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-lg border border-slate-700 bg-slate-900 p-5 text-center shadow-lg transition duration-300 hover:border-sky-400 hover:bg-slate-800"
                        >
                            <h3 className="text-lg font-semibold">{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
