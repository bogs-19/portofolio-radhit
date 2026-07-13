import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { PinContainer } from "@/components/ui/3d-pin";

// Data Pencapaian
const topRowData = [
    {
        title: "Google Student Ambassador",
        desc: "Candidate for 2026, spearheading campus-wide technology initiatives and AI literacy programs.",
        image: "./images/gsa.jpeg",
        link: "./documents/Sertifikat_GSA.pdf"
    },
    {
        title: "Advanced English Proficiency",
        desc: "Achieved C1 level, enabling seamless cross-cultural communication and professional mentoring.",
        image: "./images/inggris.png",
        link: "./documents/Sertifikat_GSA.pdf"
    },
    {
        title: "1st Place National Math Olympiad",
        desc: "Secured 1st place at the Regency level National Science Olympiad (OSN) in Mathematics.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2560&auto=format&fit=crop",
        link: "./documents/Sertifikat_GSA.pdf"
    },
    {
        title: "GSA Career Hack Initiative",
        desc: "Designed an interactive seminar utilizing Google NotebookLM for advanced corporate research.",
        image: "./images/aing.jpeg",
        link: "./documents/Sertifikat_GSA.pdf",
        imgPos: "object-top"
    },
    {
        title: "Academic Acceleration Scholar",
        desc: "Awarded a prestigious merit scholarship in 8th grade (2 KMI) for exceptional academic acceleration.",
        image: "./images/classFive.png",
        link: "./documents/Sertifikat_GSA.pdf"
    }
];

const bottomRowData = [
    {
        title: "Advanced Arabic Proficiency",
        desc: "Achieved C1 level mastery acquired through immersive daily practice and intensive linguistic training.",
        image: "/images/arab.png"
    },
    {
        title: "Academic Excellence Award",
        desc: "Secured a highly competitive academic scholarship during the 11th grade (5 KMI) recognizing sustained high achievement.",
        image: "/images/transkip.png"
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

const BentoCard = ({ title, desc, image, link, imgPos }) => (
    <div className="mx-4 flex h-[22rem] w-80 items-center justify-center">

        {/* PERUBAHAN HANYA DI BARIS INI: Menggunakan variabel {title} dan menghapus href */}
        <PinContainer title={title}>

            <div className="group relative flex h-72 w-80 flex-col overflow-hidden rounded-[2.5rem] bg-[#e0e5ec]/20 dark:bg-[#1a1b1e]/40 backdrop-blur-2xl transition-all duration-500">

                <div className="relative z-10 flex h-full w-full flex-col">

                    <div className="relative h-[75%] w-full shrink-0 overflow-hidden bg-black/5">
                        <img
                            src={image}
                            alt={title}
                            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${imgPos ? imgPos : 'object-center'}`}
                        />
                    </div>

                    <div className="relative flex h-[25%] w-full flex-col justify-center px-5 py-3 overflow-hidden">
                        <h3 className="text-[14px] font-bold text-neutral-900 dark:text-white truncate drop-shadow-sm leading-tight">
                            {title}
                        </h3>
                        <p className="mt-1 text-[11px] text-neutral-700 dark:text-neutral-300 leading-tight line-clamp-2">
                            {desc}
                        </p>
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-0 z-30 rounded-[2.5rem] border border-white/50 dark:border-white/20 shadow-[inset_6px_6px_16px_rgba(255,255,255,0.7),inset_-6px_-6px_16px_rgba(0,0,0,0.1)] dark:shadow-[inset_6px_6px_16px_rgba(255,255,255,0.15),inset_-6px_-6px_16px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:shadow-[inset_6px_6px_16px_rgba(255,255,255,0.8),inset_-6px_-6px_16px_rgba(0,0,0,0.1),0_0_25px_rgba(132,204,22,0.3)] dark:group-hover:shadow-[inset_6px_6px_16px_rgba(255,255,255,0.2),inset_-6px_-6px_16px_rgba(0,0,0,0.4),0_0_25px_rgba(132,204,22,0.3)]">

                    <div className="absolute inset-x-3 top-1 h-6 bg-gradient-to-b from-white/50 dark:from-white/10 to-transparent rounded-t-[2rem]"></div>
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
                        words="Leadership, public speaking, and extracurricular impact"
                        className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg"
                    />
                </div>
            </div>

            <div className="relative flex w-full overflow-hidden mb-6 group">
                <div className="animate-marquee-right flex group-hover:[animation-play-state:paused]">
                    {[...topRowData, ...topRowData].map((item, i) => (
                        <BentoCard key={`top-${i}`} {...item} />
                    ))}
                </div>
            </div>

            <div className="relative flex w-full overflow-hidden group">
                <div className="animate-marquee-left flex group-hover:[animation-play-state:paused]">
                    {[...bottomRowData, ...bottomRowData].map((item, i) => (
                        <BentoCard key={`bottom-${i}`} {...item} />
                    ))}
                </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white/80 dark:from-black/80 to-transparent z-20"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white/80 dark:from-black/80 to-transparent z-20"></div>

        </section>
    );
}