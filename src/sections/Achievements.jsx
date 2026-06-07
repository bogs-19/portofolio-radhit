import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PinContainer } from "@/components/ui/3d-pin"; // Import PinContainer

// Data Pencapaian
const topRowData = [
    {
        title: "Google Student Ambassador",
        desc: "Candidate for 2026, spearheading campus-wide technology initiatives and AI literacy programs.",
        image: "/images/gsa.jpeg",
        link: "/documents/Sertifikat_GSA.pdf"
    },
    {
        title: "Advanced English Proficiency",
        desc: "Achieved C1 level, enabling seamless cross-cultural communication and professional mentoring.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2560&auto=format&fit=crop",
        link: "/documents/Sertifikat_GSA.pdf"
    },
    {
        title: "1st Place National Math Olympiad",
        desc: "Secured 1st place at the Regency level National Science Olympiad (OSN) in Mathematics.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2560&auto=format&fit=crop",
        link: "/documents/Sertifikat_GSA.pdf"
    },
    {
        title: "GSA Career Hack Initiative",
        desc: "Designed an interactive seminar utilizing Google NotebookLM for advanced corporate research.",
        image: "/images/aing.jpeg",
        link: "/documents/Sertifikat_GSA.pdf",
        imgPos: "object-top"
    },
    {
        title: "Academic Acceleration Scholar",
        desc: "Awarded a prestigious merit scholarship in 8th grade (2 KMI) for exceptional academic acceleration.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2560&auto=format&fit=crop",
        link: "/documents/Sertifikat_GSA.pdf"
    }
];

const bottomRowData = [
    {
        title: "Advanced Arabic Proficiency",
        desc: "Achieved C1 level mastery acquired through immersive daily practice and intensive linguistic training.",
        image: "https://images.unsplash.com/photo-1584281722370-161e12720d5c?q=80&w=2560&auto=format&fit=crop"
    },
    {
        title: "Academic Excellence Award",
        desc: "Secured a highly competitive academic scholarship during the 11th grade (5 KMI) recognizing sustained high achievement.",
        image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2560&auto=format&fit=crop"
    },
    {
        title: "GSA Prompt Relay",
        desc: "Initiated a collaborative generative AI prompt engineering competition for university students.",
        image: "/images/gsa3.jpeg",
        imgPos: "object-bottom"
    },
    {
        title: "Virtual HRD Simulation",
        desc: "Pioneered high-pressure interview stress tests utilizing Gemini Live's advanced voice capabilities.",
        image: "/images/gsa2.jpeg"
    },
    {
        title: "Community Volunteering",
        desc: "Dedicated volunteer committed to driving social impact and assisting in community-driven initiatives.",
        image: "/images/volunteer1.jpeg",
        imgPos: "object-top"
    }
];

// Komponen Card Bento yang DIBUNGKUS 3D PIN
const BentoCard = ({ title, desc, image, link }) => (
    // Membutuhkan jarak ekstra agar efek 3D Pin tidak terpotong (h-[20rem])
    <div className="mx-4 flex h-[20rem] w-80 items-center justify-center">

        {/* PinContainer dipanggil di sini. href mengarah ke file PDF di folder public/documents */}
        <PinContainer title="See More (Download PDF)" href={link || "/documents/Detail_Kegiatan.pdf"}>

            <div className="group flex h-64 w-80 flex-col overflow-hidden rounded-2xl border border-black/20 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900/50 backdrop-blur-md transition-colors hover:border-lime-500/50 dark:hover:border-lime-500/50 hover:bg-neutral-50 dark:hover:bg-neutral-900 shadow-sm dark:shadow-none">
                <div className="h-32 w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <img src={image} alt={title} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5">
                    <h3 className="text-lg font-bold text-black dark:text-white line-clamp-1">{title}</h3>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">{desc}</p>
                </div>
            </div>

        </PinContainer>

    </div>
);

export default function Achievements() {
    return (
        <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-transparent py-20 z-10 transition-colors duration-500">

            {/* Header Section */}
            <div className="text-center mb-12 flex flex-col items-center justify-center">
                <div className="inline-block pb-3 border-b-4 border-lime-500">
                    <TextGenerateEffect
                        words="Beyond Code"
                        className="text-3xl md:text-5xl font-bold text-black dark:text-white"
                    />
                </div>

                <div className="mt-4 max-w-2xl mx-auto">
                    <TextGenerateEffect
                        words="Kepemimpinan, public speaking, dan kegiatan ekstrakurikuler."
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg"
                    />
                </div>
            </div>

            {/* Baris Atas: Gerak ke Kanan (Ditambahkan group hover pause) */}
            <div className="relative flex w-full overflow-hidden mb-6 group">
                {/* hover:[animation-play-state:paused] agar user bisa mengklik pin dengan tenang */}
                <div className="animate-marquee-right flex group-hover:[animation-play-state:paused]">
                    {[...topRowData, ...topRowData].map((item, i) => (
                        <BentoCard key={`top-${i}`} {...item} />
                    ))}
                </div>
            </div>

            {/* Baris Bawah: Gerak ke Kiri (Ditambahkan group hover pause) */}
            <div className="relative flex w-full overflow-hidden group">
                <div className="animate-marquee-left flex group-hover:[animation-play-state:paused]">
                    {[...bottomRowData, ...bottomRowData].map((item, i) => (
                        <BentoCard key={`bottom-${i}`} {...item} />
                    ))}
                </div>
            </div>

            {/* Gradasi penutup di tepi kiri dan kanan */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white/80 dark:from-black/80 to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white/80 dark:from-black/80 to-transparent z-20"></div>

        </section>
    );
}