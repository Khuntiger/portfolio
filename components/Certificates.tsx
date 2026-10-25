import Image from "next/image";

const aiGovernanceImage =
    "/certificates/%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%20-%202025-12-07-17-21_page-0001.jpg";

const certificates = [

    {
        title: "AWS Cloud Practitioner Essentials",
        issuer: "Amazon Web Services (AWS)",
        date: "October 23, 2026",
        href: "/certificates/AWS%20Cloud%20Practitioner.pdf",
        image: "/certificates/AWS%20Cloud%20Practitioner.jpg",
    },
    {
        title: "AI Mini Hackathon 2026",
        issuer: "Bangkok University",
        date: "May 21, 2026",
        href: "/certificates/20.jpg",
        image: "/certificates/20.jpg",
    },
    {
        title: "Penetration Testing",
        issuer: "National Cyber Security Agency (NCSA)",
        date: "May 12, 2026",
        href: "/certificates/Certificate-Penetration-test.jpg",
        image: "/certificates/Certificate-Penetration-test.jpg",
    },
    {
        title: "AWS Academy Graduate - Generative AI Foundations",
        issuer: "AWS Academy",
        date: "May 11, 2026",
        href: "/certificates/AWSAcademy12NEW20260512-32-248bos_page-0001.jpg",
        image: "/certificates/AWSAcademy12NEW20260512-32-248bos_page-0001.jpg",
    },
    {
        title: "AWS Academy Graduate - Machine Learning for NLP",
        issuer: "AWS Academy",
        date: "May 6, 2026",
        href: "/certificates/AWS_Academy_Graduate___Machine_Learning_for_Natural_Language_Processing_page-0001.jpg",
        image: "/certificates/AWS_Academy_Graduate___Machine_Learning_for_Natural_Language_Processing_page-0001.jpg",
    },
    {
        title: "AWS Academy Graduate - Machine Learning Foundations",
        issuer: "AWS Academy",
        date: "February 12, 2026",
        href: "/certificates/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_page-0001.jpg",
        image: "/certificates/AWS_Academy_Graduate___Machine_Learning_Foundations___Training_page-0001.jpg",
    },
    {
        title: "Cybersecurity Analyst",
        issuer: "NCSA e-Learning",
        date: "February 5, 2026",
        href: "/certificates/4766959382NP_page-0001.jpg",
        image: "/certificates/4766959382NP_page-0001.jpg",
    },
    {
        title: "Cybersecurity Foundation Course",
        issuer: "Online Certificate",
        date: "December 5, 2025",
        href: "/certificates/cybersecurity%20foundation%20course_page-0001.jpg",
        image: "/certificates/cybersecurity%20foundation%20course_page-0001.jpg",
    },
    {
        title: "AI Governance & Ethics",
        issuer: "DGA / TDGA",
        date: "December 7, 2025",
        href: aiGovernanceImage,
        image: aiGovernanceImage,
    },
];

export default function Certificates() {
    return (
        <section id="certificates" className="bg-slate-950 px-6 py-20 text-white">
            <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-4xl font-bold">Certificates</h2>
                <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-400">
                    Certificates and learning achievements related to AI, machine learning,
                    cybersecurity, and technology.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((certificate) => (
                        <article
                            key={certificate.title}
                            className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-slate-900 shadow-lg"
                        >
                            <div className="relative aspect-video border-b border-slate-800 bg-white">
                                <Image
                                    src={certificate.image}
                                    alt={certificate.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <p className="text-sm font-semibold text-sky-300">
                                    {certificate.issuer}
                                </p>
                                <h3 className="mt-3 text-xl font-bold leading-7">
                                    {certificate.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-400">{certificate.date}</p>

                                <a
                                    href={certificate.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto inline-flex w-fit rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                                >
                                    View Certificate
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
