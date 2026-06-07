import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Data proyek (Bisa kamu pindahkan ke src/data/index.js nanti jika makin banyak)
const projectsData = [
    {
        id: 1,
        title: "Stokie - Custom ERP & POS System",
        description: "Developed and deployed a comprehensive web-based inventory management and Point-of-Sale system. Streamlined supply chain logistics and automated financial reporting to optimize operations for culinary enterprises.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        tags: ["JavaScript", "Oracle APEX", "Database Design", "System Architecture"],
        category: "Software Engineering",
        detailsPdf: "/docs/stokie-case-study.pdf", // Mengarah ke PDF untuk di-download
        liveLink: "https://link-ke-aplikasi-stokie.com",
    },
    {
        id: 2,
        title: "GSA Tech Initiative: AI Career Hack",
        description: "Spearheaded 'Career Hack' and 'Virtual HRD' campaigns as a Google Student Ambassador 2026. Empowered students to utilize Google NotebookLM for advanced company research and Gemini Live for real-time interview stress-testing.",
        image: "/images/virtualhrd.png",
        tags: ["Google Gemini", "NotebookLM", "Tech Advocacy", "Leadership"],
        category: "Technology Advocacy",
        detailsPdf: "/docs/gsa-event-virtual-hrd.pdf",
        link: "#",
    },
    {
        id: 3,
        title: "GSA Campaign: Gemini Prompt Relay",
        description: "Conceptualized and executed an interactive AI collaborative event. Facilitated cross-disciplinary teamwork by educating participants on structured prompt engineering to generate cohesive visual assets using Generative AI.",
        image: "/images/event.jpeg",
        imgPos: "object-top",
        tags: ["Generative AI", "Prompt Engineering", "Event Management"],
        category: "Community Leadership",
        detailsPdf: "/docs/gsa-event-prompt-relay.pdf",
        link: "#",
    },
    {
        id: 4,
        title: "Live Audio-Visual & Broadcast Operations",
        description: "Directed comprehensive broadcasting operations and managed complex audio-visual infrastructure for major institutional events. Ensured seamless technical execution and troubleshooting under high-pressure environments.",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2560&auto=format&fit=crop",
        tags: ["Broadcasting Systems", "AV Infrastructure", "Technical Operations"],
        category: "Systems Operation",
        detailsPdf: "/docs/broadcast-operations.pdf",
        link: "#",
    },
    {
        id: 5,
        title: "Cross-Cultural Education & Mentorship",
        description: "Served as Language Advisory Council (LAC) Staff, designing curriculum and delivering intensive C1-level English and Arabic training. Fostered student character development through effective mentoring and public speaking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2560&auto=format&fit=crop",
        tags: ["Bilingual Mentoring", "Curriculum Design", "Public Speaking"],
        category: "Education & Communication",
        detailsPdf: "/docs/education-mentorship.pdf",
        link: "#",
    },
    {
        id: 6, // Pastikan ID ini unik / melanjutkan nomor terakhirmu
        title: "AI ATS CV Analyzer",
        description: "Platform cerdas berbasis AI untuk menganalisis kecocokan CV dengan pekerjaan impian. Menampilkan persentase ATS Score, evaluasi detail, serta rekomendasi langkah demi langkah untuk pengoptimalan CV.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000", // Gambar default resume/analisis
        tags: ["React", "Tailwind CSS", "Gemini AI API"],
        category: "Artificial Intelligence",
        detailsPdf: "/docs/ai-ats-cv-analyzer-case-study.pdf",
        liveLink: "https://link-ke-web-ai-kamu.vercel.app",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full overflow-hidden px-4 py-20 z-10 transition-colors duration-500 bg-transparent">
            {/* Header Section */}
            <div className="mx-auto max-w-7xl text-center mb-10 flex flex-col items-center justify-center">
                <div className="inline-block pb-3">
                    <TextGenerateEffect
                        words="Selected Works"
                        className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-5xl"
                    />
                </div>

                <div className="mt-4 max-w-2xl mx-auto">
                    <TextGenerateEffect
                        words="Dari pengembangan perangkat lunak terstruktur hingga advokasi teknologi komunitas."
                        className="text-gray-400 text-base md:text-lg"
                    />
                </div>
            </div>

            {/* Grid Cards */}
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8">
                {projectsData.map((project) => (
                    <CardContainer key={project.id} className="inter-var">
                        <CardBody className="group/card relative h-auto w-auto sm:w-md md:w-120 rounded-xl border border-black/20 dark:border-white/10 bg-neutral-100 dark:bg-neutral-950 
                                    shadow-[0_0_20px_rgba(163,230,53,0.1)] 
                                    hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] 
                                    p-6 transition-all duration-300">
                            {/* Judul Proyek */}
                            <CardItem
                                translateZ="50" className="text-2xl font-bold text-black
                                dark:text-white leading-tight"
                            >
                                {project.title}
                            </CardItem>

                            {/* Deskripsi */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="mt-4 max-w-sm text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed"
                            >
                                {project.description}
                            </CardItem>

                            {/* Gambar Proyek */}
                            <CardItem translateZ="100" className="mt-6 w-full">
                                <img
                                    src={project.image}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl border border-white/5"
                                    alt={project.title}
                                />
                            </CardItem>

                            {/* Tags Tech Stack */}
                            <CardItem translateZ="40" className="mt-4 flex flex-wrap gap-2">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="rounded-full bg-lime-500/10 px-3 py-1 text-xs font-medium text-lime-400 border border-lime-500/20">
                                        {tag}
                                    </span>
                                ))}
                            </CardItem>

                            {/* Tombol Aksi */}
                            <div className="mt-8 flex flex-wrap gap-4 items-center justify-between">

                                {/* Tombol 1: DOWNLOAD PDF */}
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.detailsPdf} // Berubah dari project.link menjadi project.detailsPdf
                                    download // Menambahkan fungsi agar file langsung di-download
                                    className="rounded-xl px-4 py-2 text-xs font-normal text-white hover:text-lime-400 transition-colors"
                                >
                                    View Details ↓
                                </CardItem>

                                {/* Tombol 2: BUKA LIVE DEMO / WEB */}
                                <CardItem
                                    translateZ={20}
                                    as="a" // Berubah dari "button" menjadi "a" (link)
                                    href={project.liveLink || project.link} // Memanggil properti liveLink
                                    target="_blank" // Membuka di tab baru
                                    rel="noopener noreferrer"
                                    className="rounded-xl bg-lime-500 px-4 py-2 text-xs font-bold text-black transition-colors hover:bg-lime-400"
                                >
                                    Live Demo ↗
                                </CardItem>

                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
}