import React from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden rounded-b-[3rem] bg-[#E0E5EC] text-neutral-800 transition-colors duration-500 dark:bg-[#1a1b1e] dark:text-neutral-100 sm:rounded-b-[4rem] lg:rounded-b-[5rem] z-10">

            <div className="mx-auto flex max-w-7xl flex-col items-stretch pt-28 md:flex-row md:pt-36">

                <div className="flex flex-1 flex-col justify-center px-6 pb-10 md:px-12 md:pb-24 z-20 text-center md:text-left">

                    <div className="mx-auto md:mx-0 mb-8 w-max inline-flex items-center rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold text-lime-600 dark:text-lime-400 bg-[#E0E5EC] dark:bg-[#1a1b1e] shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff] dark:shadow-[6px_6px_12px_#0f1012,-6px_-6px_12px_#25262a] transition-all">
                        <span className="mr-2.5 flex h-2.5 w-2.5 rounded-full bg-lime-500 animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.8)]"></span>
                        Available for collaboration
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="block text-neutral-500 dark:text-neutral-400 text-2xl sm:text-3xl md:text-4xl mb-4 font-medium tracking-normal drop-shadow-sm">
                            Hello, I'm
                        </span>
                        <EncryptedText
                            text="Bagus Radhit Pratama"
                            encryptedClassName="text-neutral-400 dark:text-neutral-500"
                            revealedClassName="text-neutral-800 dark:text-white"
                            revealDelayMs={200}
                        />
                    </h1>

                    <p className="mx-auto md:mx-0 mt-6 max-w-xl text-base text-neutral-500 dark:text-neutral-400 sm:text-lg leading-relaxed">
                        Informatics Student, Software Engineer, and Google Student Ambassador 2026.
                        Bridging logic and creativity to build impactful digital solutions.
                    </p>

                    <div className="mt-10 flex flex-row items-center gap-4 sm:gap-6 w-full justify-center md:justify-start">
                        {/* Tombol Primary: Diberi whitespace-nowrap agar teks tidak terbelah */}
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="whitespace-nowrap rounded-full bg-[#E0E5EC] dark:bg-[#1a1b1e] px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-lime-600 dark:text-lime-400 transition-all duration-300 shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0f1012,-8px_-8px_16px_#25262a] hover:text-lime-700 dark:hover:text-lime-300 hover:shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] dark:hover:shadow-[inset_6px_6px_12px_#0f1012,inset_-6px_-6px_12px_#25262a] active:scale-95"
                        >
                            View Projects
                        </button>

                        {/* Tombol Secondary */}
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="whitespace-nowrap rounded-full bg-[#E0E5EC] dark:bg-[#1a1b1e] px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-neutral-600 dark:text-neutral-300 transition-all duration-300 shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0f1012,-8px_-8px_16px_#25262a] hover:text-lime-600 dark:hover:text-lime-400 hover:shadow-[inset_6px_6px_12px_#a3b1c6,inset_-6px_-6px_12px_#ffffff] dark:hover:shadow-[inset_6px_6px_12px_#0f1012,inset_-6px_-6px_12px_#25262a] active:scale-95"
                        >
                            Let's Connect
                        </button>
                    </div>
                </div>

                <div className="relative flex flex-1 items-end justify-center px-6 mt-16 md:mt-0 min-h-[30rem] md:min-h-150 lg:min-h-175 w-full">

                    <div className="absolute top-[45%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-0">

                        <div className="flex items-center justify-center rounded-full bg-[#E0E5EC] dark:bg-[#1a1b1e] h-[24rem] w-[24rem] sm:h-[30rem] sm:w-[30rem] md:h-[36rem] md:w-[36rem] transition-colors duration-500 shadow-[12px_12px_24px_#a3b1c6,-12px_-12px_24px_#ffffff] dark:shadow-[12px_12px_24px_#0f1012,-12px_-12px_24px_#25262a]">

                            <div className="flex items-center justify-center rounded-full bg-[#E0E5EC] dark:bg-[#1a1b1e] h-[18rem] w-[18rem] sm:h-[22rem] sm:w-[22rem] md:h-[26rem] md:w-[26rem] transition-colors duration-500 shadow-[inset_8px_8px_16px_#a3b1c6,inset_-8px_-8px_16px_#ffffff] dark:shadow-[inset_8px_8px_16px_#0f1012,inset_-8px_-8px_16px_#25262a]">
                                <div className="rounded-full bg-[#E0E5EC] dark:bg-[#1a1b1e] h-[12rem] w-[12rem] sm:h-[15rem] sm:w-[15rem] md:h-[18rem] md:w-[18rem] transition-colors duration-500 shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0f1012,-8px_-8px_16px_#25262a] border border-lime-500/10 dark:border-lime-500/5">
                                </div>

                            </div>

                        </div>
                    </div>

                    <img
                        src="/portofolio-radhit/images/aing.png"
                        alt="Bagus Radhit Pratama"
                        className="absolute bottom-0 z-10 h-[105%] sm:h-[115%] md:h-[125%] max-h-[40rem] w-auto max-w-none object-contain object-bottom drop-shadow-[0_25px_25px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_25px_25px_rgba(0,0,0,0.7)] pointer-events-none"
                    />

                </div>
            </div>
        </section>
    );
}