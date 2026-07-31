export default function Education() {
    return (
        <section id="education" className="flex min-h-[calc(100svh-72px)] items-center bg-slate-950 px-6 py-12 text-white">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-center text-4xl font-bold">Education</h2>

                <div className="mt-10 rounded-lg border border-slate-700 bg-slate-900 p-8 shadow-lg">
                    <p className="text-sm font-semibold text-sky-300">University</p>

                    <h3 className="mt-3 text-2xl font-bold">Bangkok University</h3>

                    <p className="mt-3 text-lg text-slate-300">School of Information Technology and Innovation</p>

                    <p className="mt-2 text-slate-400">Computer Science - Data Science and Cybersecurity</p>

                    <p className="mt-6 rounded-lg bg-slate-800 p-4 text-slate-300">Focused on software development, data science, artificial intelligence, 
                        cybersecurity, and practical technology projects.
                    </p>
                </div>
            </div>
        </section>
    );
}
