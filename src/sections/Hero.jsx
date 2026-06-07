import React from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";

// Data identitas yang mengorbit
// Durasi total 20s, dibagi 5 item = selang waktu 4 detik
const orbitBadges = [
    { icon: "💻", title: "Tech Geek", subtitle: "Problem Solver", delay: "0s" },
    { icon: "🤖", title: "AI Enthusiast", subtitle: "GSA 2026 Candidate", delay: "-4s" },
    { icon: "🎙️", title: "Broadcaster", subtitle: "Event Operations", delay: "-8s" },
    { icon: "🗣️", title: "Language Advisor", subtitle: "C1 Eng & Ar", delay: "-12s" },
    { icon: "📚", title: "Edu-Tech Pioneer", subtitle: "ERP Developer", delay: "-16s" },
];

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden rounded-b-[3rem] bg-black text-white transition-colors duration-500 dark:bg-white dark:text-black sm:rounded-b-[4rem] lg:rounded-b-[5rem] z-10 shadow-2xl">

            <div className="mx-auto flex max-w-7xl flex-col items-stretch pt-28 md:flex-row md:pt-36">

                {/* =========================================
            BAGIAN KIRI: KONTEN TEKS
            ========================================= */}
                <div className="flex flex-1 flex-col justify-center px-6 pb-10 md:px-12 md:pb-24 z-20 text-center md:text-left">
                    <div className="mx-auto md:mx-0 mb-6 w-max inline-flex items-center rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm font-medium text-lime-400 dark:border-lime-500/50 dark:bg-lime-500/20 dark:text-lime-600 backdrop-blur-sm">
                        <span className="mr-2 flex h-2 w-2 rounded-full bg-lime-500 animate-pulse"></span>
                        Available for collaboration
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="block text-neutral-400 dark:text-neutral-500 text-2xl sm:text-3xl md:text-4xl mb-4 font-medium tracking-normal">
                            Hello, I'm
                        </span>
                        <EncryptedText
                            text="Bagus Radhit Pratama"
                            encryptedClassName="text-lime-500/50 dark:text-lime-600/50"
                            revealedClassName="text-white dark:text-black"
                            revealDelayMs={200}
                        />
                    </h1>

                    <p className="mx-auto md:mx-0 mt-6 max-w-xl text-base text-neutral-400 dark:text-neutral-600 sm:text-lg leading-relaxed">
                        Informatics Student, Software Engineer, and Google Student Ambassador 2026.
                        Bridging logic and creativity to build impactful digital solutions.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center md:justify-start">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="rounded-full bg-lime-500 px-8 py-3 font-bold text-black transition-all hover:bg-lime-400 hover:scale-105 active:scale-95"
                        >
                            View Projects
                        </button>
                        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto rounded-2xl border border-neutral-700 bg-transparent px-8 py-3.5 font-bold transition-all hover:border-lime-500 dark:border-neutral-300 dark:hover:border-lime-500 hover:text-lime-400 dark:hover:text-lime-600">
                            Let's Connect
                        </button>
                    </div>
                </div>

                {/* =========================================
            BAGIAN KANAN: FOTO & ORBIT CAROUSEL
            ========================================= */}
                <div className="relative flex flex-1 items-end justify-center px-6 mt-16 md:mt-0 min-h-125 md:min-h-150 lg:min-h-175 w-full">

                    {/* Lingkaran Abu-abu di belakang foto (Diperbesar) */}
                    <div className="absolute top-[45%] md:top-[50%] left-1/2 h-96 w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-800 dark:bg-neutral-200 sm:h-128 sm:w-lg md:h-152 md:w-152 z-0 transition-colors duration-500"></div>

                    {/* Pendaran Glow Hijau Halus */}
                    <div className="absolute top-[45%] md:top-[50%] left-1/2 h-96 w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/10 dark:bg-lime-400/20 blur-[80px] z-0 pointer-events-none"></div>

                    {/* Map Orbit Badges */}
                    {orbitBadges.map((badge, idx) => (
                        <div
                            key={idx}
                            // 1. Tambahkan pointer-events-none agar kebal kursor
                            // 2. Ubah border & background agar lebih cinematic dan menyatu dengan glow
                            className="badge-orbit pointer-events-none flex w-max items-center gap-3 rounded-2xl border border-lime-500/20 bg-black/40 p-3 shadow-[0_0_20px_rgba(163,230,53,0.1)] backdrop-blur-md transition-all duration-300 dark:border-lime-500/30 dark:bg-white/40"
                            style={{ animationDelay: badge.delay }}
                        >
                            {/* Ikon dengan inner shadow neon */}
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-500/20 text-xl text-lime-400 shadow-[inset_0_0_10px_rgba(163,230,53,0.2)] dark:bg-lime-500/20 dark:text-lime-600">
                                {badge.icon}
                            </span>
                            <div className="w-28 text-left">
                                <p className="text-sm font-extrabold leading-tight text-white dark:text-black">{badge.title}</p>
                                <p className="text-[10px] font-medium text-neutral-300 dark:text-neutral-600">{badge.subtitle}</p>
                            </div>
                        </div>
                    ))}

                    {/* Foto Profil (DIPAKSA MEMBESAR & NAIK) */}
                    {/* max-w-none mencegah foto terjepit oleh div parent-nya */}
                    <img
                        src="/images/aing.png"
                        alt="Bagus Radhit Pratama"
                        className="absolute bottom-0 z-10 h-[105%] sm:h-[115%] md:h-[125%] max-h-212.5 w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_20px_20px_rgba(255,255,255,0.2)] pointer-events-none"
                    />

                </div>
            </div>
        </section>
    );
}