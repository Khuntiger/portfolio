const contacts = [
    { label: "Email", value: "nawakhun091143@gmail.com", href: "mailto:nawakhun091143@gmail.com" },
    { label: "Phone", value: "093-334-5082", href: "tel:0933345082" },
    { label: "GitHub", value: "github.com/Khuntiger", href: "https://github.com/Khuntiger" },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/nawakhun-promlok-644114196",
        href: "https://www.linkedin.com/in/nawakhun-promlok-644114196/",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="flex min-h-[calc(100svh-72px)] items-center bg-slate-900 px-6 py-12 text-white">
            <div className="mx-auto w-full max-w-5xl text-center">
                <h2 className="text-4xl font-bold">Contact</h2>
                <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
                    I am open to opportunities, internships, and projects related to
                    cybersecurity, AI, data science, and software development.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {contacts.map((contact) => (
                        <a
                            key={contact.label}
                            href={contact.href}
                            className="rounded-lg border border-slate-700 bg-slate-950 p-6 text-left transition hover:border-sky-400"
                        >
                            <p className="text-sm font-semibold text-sky-300">{contact.label}</p>
                            <p className="mt-2 text-slate-300">{contact.value}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
