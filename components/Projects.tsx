import Image from "next/image";

const projects = [
    {
        title: "TechBurnout 2026",
        category: "Data Analytics & Machine Learning",
        image: "/images/model_comparison.png",
        imageAlt: "Model performance comparison chart for TechBurnout 2026",
        link: "https://github.com/Khuntiger/techburnout-2026",
        description:
            "A CS462 final project analyzing employee burnout in technology roles. The project included data preprocessing, EDA, machine learning model comparison, and a Power BI dashboard. Logistic Regression achieved 0.828 accuracy and 0.915 ROC-AUC.",
        tools: ["Python", "Machine Learning", "Power BI", "Data Analytics"],
    },
    {
        title: "Inventory API",
        category: "Backend API Development",
        link: "https://github.com/Khuntiger/inventory-api",
        description:
            "A TypeScript backend API project for inventory management, designed to support product and stock data operations.",
        tools: ["TypeScript", "API", "Backend", "Inventory"],
    },
    {
        title: "Inventory Management",
        category: "Full-Stack Web Development",
        link: "https://github.com/Khuntiger/Inventory-Management",
        demoLink: "https://inventory-management-zeta-one-74.vercel.app",
        description:
            "A TypeScript inventory management web application for organizing product and stock information, deployed on Vercel.",
        tools: ["TypeScript", "CSS", "JavaScript", "HTML"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="bg-slate-900 px-6 py-20 text-white">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-4xl font-bold">Projects</h2>
                <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-400">
                    Selected work that shows my interest in cybersecurity, AI, data science,
                    and practical software development.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-950 shadow-lg"
                        >
                            {"image" in project && project.image ? (
                                <div className="relative aspect-video border-b border-slate-800 bg-white">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        className="object-contain p-3"
                                    />
                                </div>
                            ) : null}

                            <div className="flex flex-1 flex-col p-6">
                                <p className="text-sm font-semibold text-sky-300">{project.category}</p>
                                <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
                                <p className="mt-4 flex-1 leading-7 text-slate-400">
                                    {project.description}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-200"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                {"link" in project && project.link ? (
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex w-fit rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                                        >
                                            View Code
                                        </a>
                                        {"demoLink" in project && project.demoLink ? (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex w-fit rounded-lg border border-slate-500 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-300"
                                            >
                                                Live Demo
                                            </a>
                                        ) : null}
                                    </div>
                                ) : null}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
