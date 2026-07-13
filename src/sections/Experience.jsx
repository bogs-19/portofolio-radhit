import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Experience() {
    const experiences = [
        {
            quote:
                "Actively contributed to community technology advocacy and event management. Successfully organized impactful social initiatives, including a dedicated volunteering program focused on preparing meals for elderly residents at a mental healthcare facility.",
            name: (
                <div className="relative z-20 inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 mb-2 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                    <span className="relative z-10 text-base md:text-lg font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                        Google Student Ambassador
                    </span>
                </div>
            ),
            designation: "Google • Apr 2026 - Present (Part-time, Hybrid)",
            src: "./images/gsa.jpeg",
        },
        {
            quote:
                "Deepening technical expertise in software engineering, encompassing web development, core algorithmic logic, Database Management Systems (DBMS), and Artificial intelligence.",
            name: (
                <div className="relative z-20 inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 mb-2 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                    <span className="relative z-10 text-base md:text-lg font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                        Student (Informatics)
                    </span>
                </div>
            ),
            designation: "University of Muhammadiyah Malang • Aug 2025 - Present (Full-time)",
            src: "./images/studentinfor.jpeg",
        },
        {
            quote:
                "Completed a post-graduation service tenure, delivering intensive bilingual instruction (Arabic & English). Managed students' daily discipline to foster strong character building and leadership development.",
            name: (
                <div className="relative z-20 inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 mb-2 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                    <span className="relative z-10 text-base md:text-lg font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                        Teacher & Mentor
                    </span>
                </div>
            ),
            designation: "Darussalam Gontor Modern Islamic Institution • May 2024 - May 2025 (Full-time)",
            src: "./images/guru.jpeg",
        },
        {
            quote:
                "Supervised and guided students in language proficiency development, focusing on enhancing advanced foreign language skills—specifically Arabic and English—within the residential campus environment.",
            name: (
                <div className="relative z-20 inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 mb-2 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                    <span className="relative z-10 text-base md:text-lg font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                        Language Advisory Council (LAC) Staff
                    </span>
                </div>
            ),
            designation: "Darussalam Gontor Modern Islamic Institution • Dec 2024 - May 2025 (Part-time)",
            src: "./images/LAC.JPG",
        },
        {
            quote:
                "Operated under the Student Organization of Pondok Modern (OPPM), managing large-scale broadcasting operations and overseeing comprehensive audio-visual setups for institution-wide events.",
            name: (
                <div className="relative z-20 inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-2.5 mb-2 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                    <span className="relative z-10 text-base md:text-lg font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                        Central Information Department Staff
                    </span>
                </div>
            ),
            designation: "Darussalam Gontor Modern Islamic Institution • Mar 2023 - May 2024 (Part-time)",
            src: "./images/aing.jpeg",
        },
    ];

    return (
        <section id="experience" className="relative w-full z-10 py-24 bg-transparent overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 md:px-8">

                <div className="text-center mb-16 flex flex-col items-center justify-center">
                    <div className="inline-block border-b-4 border-lime-500 pb-3">
                        <TextGenerateEffect
                            words="My Experience"
                            className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl md:text-5xl"
                        />
                    </div>

                    <div className="mt-6 max-w-2xl mx-auto">
                        <TextGenerateEffect
                            words="A journey from education to digital innovation"
                            className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg"
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}

                    className="relative overflow-hidden rounded-[3rem] border border-white/60 dark:border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-3xl shadow-[inset_6px_6px_20px_rgba(255,255,255,0.9),inset_-6px_-6px_20px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_6px_6px_20px_rgba(255,255,255,0.2),inset_-6px_-6px_20px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.6)] p-6 md:p-10 transition-all duration-500"
                >

                    <div className="relative z-10">
                        <AnimatedTestimonials testimonials={experiences} autoplay={true} />
                    </div>

                </motion.div>

            </div>
        </section>
    );
}