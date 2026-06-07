import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Experience() {
    const experiences = [
        {
            quote:
                "Actively contributed to community technology advocacy and event management. Successfully organized impactful social initiatives, including a dedicated volunteering program focused on preparing meals for elderly residents at a mental healthcare facility.",
            name: "Google Student Ambassador",
            designation: "Google • Apr 2026 - Present (Part-time, Hybrid)",
            src: "/images/gsa.jpeg",
        },
        {
            quote:
                "Deepening technical expertise in software engineering, encompassing web development, core algorithmic logic, Database Management Systems (DBMS), and Artificial intelligence.",
            name: "Student (Informatics)",
            designation: "University of Muhammadiyah Malang • Aug 2025 - Present (Full-time)",
            src: "/images/studentinfor.jpeg",
        },
        {
            quote:
                "Completed a post-graduation service tenure, delivering intensive bilingual instruction (Arabic & English). Managed students' daily discipline to foster strong character building and leadership development.",
            name: "Teacher & Mentor",
            designation: "Darussalam Gontor Modern Islamic Institution • May 2024 - May 2025 (Full-time)",
            src: "/images/guru.jpeg",
        },
        {
            quote:
                "Supervised and guided students in language proficiency development, focusing on enhancing advanced foreign language skills—specifically Arabic and English—within the residential campus environment.",
            name: "Language Advisory Council (LAC) Staff",
            designation: "Darussalam Gontor Modern Islamic Institution • Dec 2024 - May 2025 (Part-time)",
            src: "/images/LAC.JPG",
        },
        {
            quote:
                "Operated under the Student Organization of Pondok Modern (OPPM), managing large-scale broadcasting operations and overseeing comprehensive audio-visual setups for institution-wide events.",
            name: "Central Information Department Staff",
            designation: "Darussalam Gontor Modern Islamic Institution • Mar 2023 - May 2024 (Part-time)",
            src: "/images/aing.jpeg",
        },
    ];

    return (
        <section id="experience" className="relative w-full z-10 py-24 bg-transparent overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-8">

                {/* Header Section */}
                <div className="text-center mb-16 flex flex-col items-center justify-center">
                    <div className="inline-block border-b-4 border-lime-500 pb-3">
                        <TextGenerateEffect
                            words="My Experience"
                            className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl md:text-5xl"
                        />
                    </div>

                    <div className="mt-6 max-w-2xl mx-auto">
                        <TextGenerateEffect
                            words="Perjalanan dedikasi dari disiplin pendidikan hingga eksplorasi teknologi digital."
                            className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg"
                        />
                    </div>
                </div>

                {/* Animated Testimonials / Experience Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="bg-white/5 dark:bg-black/20 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-3xl p-4 md:p-8 shadow-2xl"
                >
                    <AnimatedTestimonials testimonials={experiences} autoplay={true} />
                </motion.div>

            </div>
        </section>
    );
}