export default function Navbar() {
    const links = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#education", label: "Education" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#certificates", label: "Certificates" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <nav className="fixed left-0 top-0 z-50 w-full bg-slate-950/90 text-white shadow-md backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
                <a href="#home" className="text-xl font-bold text-sky-300">
                    Nawakhun
                </a>

                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-200 sm:justify-end">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="transition hover:text-sky-300">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
