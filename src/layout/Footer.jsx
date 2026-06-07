import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SocialTooltip from "@/components/ui/SocialTooltip";
import { World } from "@/components/ui/globe";

export default function Footer() {
    // State untuk menyimpan tema
    const [isDark, setIsDark] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // 1. Cek tema saat web pertama kali dimuat
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkTheme();

        // 2. Buat "Mata-mata" untuk mengawasi perubahan class 'dark' di <html>
        const observer = new MutationObserver(() => {
            checkTheme();
        });

        // Pasang mata-mata ke elemen <html>
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect(); // Bersihkan saat keluar
    }, []);

    // ==========================================
    // KONFIGURASI WARNA (EMERALD LIGHT & NEON DARK)
    // ==========================================
    const globeConfig = {
        pointSize: 4,
        // BUMI: Saat Light, gunakan abu-abu gelap kebiruan (slate) agar bentuk bola kontras dengan latar belakang putih
        globeColor: isDark ? "#0f172a" : "#334155",
        showAtmosphere: true,
        // ATMOSFER: Tetap gunakan hijau emerald lembut
        atmosphereColor: isDark ? "#a3e635" : "#10b981",
        atmosphereAltitude: 0.2,
        // EMISSIVE: Kita matikan pantulan cahayanya di mode terang agar warna bumi tidak memutih/silau
        emissive: isDark ? "#0f172a" : "#334155",
        emissiveIntensity: isDark ? 0.1 : 0.0, // Diubah jadi 0.0 supaya tidak silau
        shininess: 0.9,
        // PULAU/DARATAN: Gunakan hijau neon/emerald terang agar terlihat sangat kontras di atas bola abu-abu gelap
        polygonColor: isDark ? "rgba(255, 255, 255, 0.7)" : "#10b981",
        // CAHAYA: Gunakan putih netral agar tidak merusak warna asli hijau daratan
        ambientLight: isDark ? "#a3e635" : "#ffffff",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };



    // Garis lintasan pesawat (Arcs) juga menyesuaikan
    const sampleArcs = [
        { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: isDark ? "#a3e635" : "#10b981" },
        { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: isDark ? "#ffffff" : "#000000" },
        { order: 2, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: isDark ? "#a3e635" : "#10b981" },
    ];

    return (
        <footer id="contact" className="relative w-full flex-col flex items-center justify-center overflow-hidden pt-20 pb-10 z-10 transition-colors duration-500 bg-transparent min-h-[70vh]">
            <div className="relative mx-auto w-full max-w-7xl px-4 flex flex-col items-center">

                {/* Teks Judul dan Ikon Sosial */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative z-20 w-full mb-10"
                >
                    <h2 className="text-center text-3xl font-bold text-black dark:text-white md:text-5xl">
                        Let's <span className="text-lime-400">Collaborate</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-center text-base font-normal text-neutral-600 dark:text-neutral-400 md:text-lg">
                        Tertarik untuk berkolaborasi dalam pengembangan perangkat lunak atau inisiatif teknologi? Mari terhubung!
                    </p>

                    <div className="mt-8 flex items-center justify-center z-50">
                        <ul className="example-2">
                            {/* LinkedIn */}
                            <li className="icon-content">
                                <a data-social="linkedin" aria-label="LinkedIn" href="https://www.linkedin.com/in/bagus-radhit-pratama-501382348/?skipRedirect=true" target="_blank" rel="noopener noreferrer">
                                    <div className="filled"></div>
                                    <svg viewBox="0 0 16 16" className="bi bi-linkedin" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>
                                </a>
                                <div className="tooltip">LinkedIn</div>
                            </li>

                            {/* GitHub */}
                            <li className="icon-content">
                                <a data-social="github" aria-label="GitHub" href="https://github.com/bogs-19" target="_blank" rel="noopener noreferrer">
                                    <div className="filled"></div>
                                    <svg viewBox="0 0 16 16" className="bi bi-github" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path></svg>
                                </a>
                                <div className="tooltip">GitHub</div>
                            </li>

                            {/* Instagram */}
                            <li className="icon-content">
                                <a data-social="instagram" aria-label="Instagram" href="https://www.instagram.com/radhitama_19?igsh=MWswZnk5Nm4wMW9qNQ==" target="_blank" rel="noopener noreferrer">
                                    <div className="filled"></div>
                                    <svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"></path></svg>
                                </a>
                                <div className="tooltip">Instagram</div>
                            </li>

                            {/* WhatsApp */}
                            <li className="icon-content">
                                <a data-social="whatsapp" aria-label="WhatsApp" href="https://wa.me/6282221558476" target="_blank" rel="noopener noreferrer">
                                    <div className="filled"></div>
                                    <svg viewBox="0 0 16 16" className="bi bi-whatsapp" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.522a6.6 6.6 0 0 1-3.354-.92l-.24-.144-2.49.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.008-3.568c0-3.637 2.96-6.592 6.592-6.592a6.57 6.57 0 0 1 6.59 6.59c0 3.638-2.96 6.592-6.596 6.592zm3.604-4.945c-.197-.099-1.157-.57-1.337-.635-.18-.065-.31-.099-.44.1-.128.196-.49.636-.6.767-.11.13-.223.147-.42.048-.198-.1-.836-.308-1.592-.985-.59-.525-.987-1.173-1.103-1.372-.116-.198-.012-.305.088-.403.09-.09.2-.234.3-.35.1-.115.133-.198.2-.33.065-.132.033-.248-.016-.351-.049-.103-.443-1.07-.607-1.464-.162-.383-.326-.33-.443-.336-.114-.006-.245-.007-.375-.007-.13 0-.34.048-.518.24-.177.192-.676.66-.676 1.61s.69 1.86.786 1.99c.097.132 1.35 2.062 3.268 2.89.456.197.812.315 1.092.404.459.145.877.125 1.206.076.368-.055 1.157-.473 1.32-.929.163-.456.163-.847.114-.929-.049-.083-.18-.133-.377-.232z"></path></svg>
                                </a>
                                <div className="tooltip">WhatsApp</div>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Sinar Aura Dinamis (Menyesuaikan Tema) */}
                <div className={`absolute top-[60%] left-1/2 h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] pointer-events-none z-0 transition-colors duration-1000 ${isDark ? 'bg-lime-500/20' : 'bg-emerald-400/30'}`}></div>

                {/* Globe 3D Background - Menggunakan key yang berubah saat tema berubah agar dirender ulang */}
                <div className="relative mx-auto flex h-[30rem] md:h-[40rem] w-full max-w-5xl items-center justify-center overflow-hidden mt-10 z-10">
                    <AnimatePresence mode="wait">
                        {mounted && (
                            <motion.div
                                key={isDark ? "dark" : "light"}
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(10px)" }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute flex h-full w-full items-center justify-center"
                            >
                                <World data={sampleArcs} globeConfig={globeConfig} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Gradasi Hitam/Putih Penutup Bawah */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-10 w-full select-none bg-gradient-to-b from-transparent to-white dark:to-black" />
            </div>
        </footer>
    );
}