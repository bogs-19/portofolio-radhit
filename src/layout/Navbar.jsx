import React from 'react';
import GoBack from '@/components/ui/GoBack';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

export default function Navbar() {
    return (
        /* UI/UX: GLASSMORPHISM CONTAINER (Wadah Kaca Buram) */
        <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-white/40 dark:border-white/10 bg-white/20 dark:bg-black/20 px-4 sm:px-6 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] transition-colors duration-500">

            {/* Kiri: Tombol Go Back (Top) */}
            {/* Tambahan 'shrink-0' agar tombol tidak terkompresi di layar sempit */}
            <div className="flex items-center z-10 shrink-0">
                <div className="group relative flex items-center justify-center rounded-[2rem] p-1 border border-white/50 dark:border-white/10 bg-white/30 dark:bg-black/30 shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.9)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.7),-2px_-2px_8px_rgba(255,255,255,0.1)] transition-all duration-300 hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.9)] dark:hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.7),inset_-2px_-2px_8px_rgba(255,255,255,0.1)] cursor-pointer">
                    <GoBack />
                </div>
            </div>

            {/* Tengah: Nama / Logo */}
            {/* UI/UX HYBRID FIX: 
                - MOBILE: relative, flex-1 (mengisi sisa ruang tanpa nabrak), justify-center
                - DESKTOP: sm:absolute sm:left-1/2... (Center matematis mutlak) */}
            <div className="relative sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-0 pointer-events-none flex-1 flex justify-center px-2">
                <span className="text-base sm:text-xl font-extrabold tracking-wider sm:tracking-widest text-neutral-800 dark:text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-all duration-300 whitespace-nowrap">
                    GES<span className="text-lime-600 dark:text-lime-400">.DEV</span>
                </span>
            </div>

            {/* Kanan: Theme Switcher */}
            <div className="flex items-center gap-3 sm:gap-4 z-10 shrink-0">
                <span className="text-xs font-bold text-neutral-600 dark:text-neutral-300 hidden sm:block drop-shadow-sm">
                    System Theme
                </span>

                <ThemeSwitch />
            </div>

        </nav>
    );
}