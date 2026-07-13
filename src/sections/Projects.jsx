import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

// Data proyek
const projectsData = [
    {
        id: 1,
        title: "Chat-Health",
        description: "Sistem Terdistribusi Multi-Agen berbasis ruang obrolan untuk mentransformasi krisis triase kesehatan. Memadukan Frontend React, Backend Express.js, dan Agen Python otonom (Band SDK) yang digerakkan oleh model Llama 3.3 70B.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
        tags: ["React", "Express.js", "Python", "Band SDK", "Llama 3.3"],
        category: "Healthcare AI",
        detailsPdf: "./docs/ChatHealth.pdf",
        liveLink: "#",
    },
    {
        id: 2,
        title: "GSA Tech Initiative: AI Career Hack",
        description: "Spearheaded 'Career Hack' and 'Virtual HRD' campaigns as a Google Student Ambassador 2026. Empowered students to utilize Google NotebookLM for advanced company research and Gemini Live for real-time interview stress-testing.",
        image: "/portofolio-radhit/images/virtualhrd.png",
        tags: ["Google Gemini", "NotebookLM", "Tech Advocacy", "Leadership"],
        category: "Technology Advocacy",
        detailsPdf: "./docs/gsa-event-virtual-hrd.pdf",
        link: "#",
    },
    {
        id: 3,
        title: "GSA Campaign: Gemini Prompt Relay",
        description: "Conceptualized and executed an interactive AI collaborative event. Facilitated cross-disciplinary teamwork by educating participants on structured prompt engineering to generate cohesive visual assets using Generative AI.",
        image: "/portofolio-radhit/images/gsa3.jpeg",
        tags: ["Generative AI", "Prompt Engineering", "Event Management"],
        category: "Community Leadership",
        detailsPdf: "./docs/gsa-event-prompt-relay.pdf",
        link: "#",
    },
    {
        id: 4,
        title: "Live Audio-Visual & Broadcast Operations",
        description: "Directed comprehensive broadcasting operations and managed complex audio-visual infrastructure for major institutional events. Ensured seamless technical execution and troubleshooting under high-pressure environments.",
        image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2560&auto=format&fit=crop",
        tags: ["Broadcasting Systems", "AV Infrastructure", "Technical Operations"],
        category: "Systems Operation",
        detailsPdf: "./docs/broadcast-operations.pdf",
        link: "#",
    },
    {
        id: 5,
        title: "Cross-Cultural Education & Mentorship",
        description: "Served as Language Advisory Council (LAC) Staff, designing curriculum and delivering intensive C1-level English and Arabic training. Fostered student character development through effective mentoring and public speaking.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2560&auto=format&fit=crop",
        tags: ["Bilingual Mentoring", "Curriculum Design", "Public Speaking"],
        category: "Education & Communication",
        detailsPdf: "./docs/education-mentorship.pdf",
        link: "#",
    },
    {
        id: 6,
        title: "AI ATS CV Analyzer",
        description: "Platform cerdas berbasis AI untuk menganalisis kecocokan CV dengan pekerjaan impian. Menampilkan persentase ATS Score, evaluasi detail, serta rekomendasi langkah demi langkah untuk pengoptimalan CV.",
        image: "/portofolio-radhit/images/Chatbot.png",
        tags: ["React", "Tailwind CSS", "Gemini AI API"],
        category: "Artificial Intelligence",
        detailsPdf: "./docs/ai-ats-cv-analyzer-case-study.pdf",
        liveLink: "https://gsa-ats-bot-fqmueya8a7dwakalnsqjim.streamlit.app/",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full overflow-hidden px-4 py-20 z-10 transition-colors duration-500 bg-transparent">
            <div className="mx-auto max-w-7xl text-center mb-10 flex flex-col items-center justify-center">
                <div className="inline-block pb-3">
                    <TextGenerateEffect
                        words="Selected Works"
                        className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 sm:text-4xl md:text-5xl drop-shadow-sm"
                    />
                </div>

                <div className="mt-4 max-w-2xl mx-auto">
                    <TextGenerateEffect
                        words="Dari pengembangan perangkat lunak terstruktur hingga advokasi teknologi komunitas."
                        className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg"
                    />
                </div>
            </div>

            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-10">
                {projectsData.map((project) => (
                    <CardContainer key={project.id} className="inter-var">
                        <CardBody className="group/card relative h-auto w-full max-w-[22rem] md:max-w-md rounded-3xl p-6 md:p-8 
                            bg-[#E0E5EC] dark:bg-[#1a1b1e] 
                            border border-[#E0E5EC] dark:border-[#1a1b1e]
                            shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff] 
                            dark:shadow-[12px_12px_24px_rgba(0,0,0,0.6),-12px_-12px_24px_rgba(255,255,255,0.08)] 
                            transition-all duration-300 will-change-transform">

                            <CardItem
                                translateZ="50"
                                className="text-2xl font-extrabold text-neutral-800 dark:text-white leading-tight"
                            >
                                {project.title}
                            </CardItem>

                            <CardItem
                                as="p"
                                translateZ="60"
                                className="mt-4 max-w-sm text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium"
                            >
                                {project.description}
                            </CardItem>

                            <CardItem translateZ="100" className="mt-8 w-full rounded-2xl p-2 bg-[#E0E5EC] dark:bg-[#1a1b1e] shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] dark:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.8),inset_-6px_-6px_12px_rgba(255,255,255,0.05)]">
                                <img
                                    src={project.image}
                                    className="h-56 w-full rounded-xl object-cover transition-all duration-500 group-hover/card:brightness-110"
                                    alt={project.title}
                                />
                            </CardItem>

                            <CardItem translateZ="40" className="mt-8 flex flex-wrap gap-3">
                                {project.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full px-4 py-1.5 text-xs font-bold text-lime-600 dark:text-lime-400 bg-[#E0E5EC] dark:bg-[#1a1b1e] shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.6),-4px_-4px_8px_rgba(255,255,255,0.08)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </CardItem>

                            <div className="mt-10 flex flex-wrap gap-4 items-center justify-between">

                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href={project.detailsPdf}
                                    download
                                    className="rounded-xl px-6 py-3 text-xs font-bold text-neutral-600 dark:text-neutral-300 bg-[#E0E5EC] dark:bg-[#1a1b1e] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.08)] hover:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8),inset_-4px_-4px_8px_rgba(255,255,255,0.06)] transition-all active:scale-95"
                                >
                                    View Details ↓
                                </CardItem>

                                {/* CONDITIONAL RENDERING: Tombol hanya muncul jika ID proyek adalah 6 */}
                                {project.id === 6 && (
                                    <CardItem
                                        translateZ={30}
                                        as="a"
                                        href={project.liveLink || project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl px-6 py-3 text-xs font-bold text-lime-600 dark:text-lime-400 bg-[#E0E5EC] dark:bg-[#1a1b1e] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_rgba(0,0,0,0.6),-6px_-6px_12px_rgba(255,255,255,0.08)] hover:shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.8),inset_-4px_-4px_8px_rgba(255,255,255,0.06)] transition-all active:scale-95"
                                    >
                                        Live Demo ↗
                                    </CardItem>
                                )}

                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </section>
    );
}