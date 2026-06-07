import React from 'react';
import GoBack from '@/components/ui/GoBack';
import ThemeSwitch from '@/components/ui/ThemeSwitch';

export default function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex h-20 items-center justify-between border-b border-black/10 dark:border-white/5 bg-white/70 dark:bg-black/50 px-6 backdrop-blur-lg transition-colors duration-500">

            {/* Kiri: Tombol Go Back (Home) */}
            <div className="flex items-center">
                <GoBack />
            </div>

            {/* Tengah: Nama / Logo (Opsional, disembunyikan di HP agar tidak sempit) */}
            <div className="hidden md:block">
                <span className="text-lg font-bold tracking-widest text-black dark:text-white">
                    GES<span className="text-lime-500 dark:text-lime-400">.DEV</span>
                </span>
            </div>

            {/* Kanan: Theme Switcher */}
            <div className="flex items-center gap-4">
                <span className="text-xs font-medium text-neutral-400 hidden sm:block">
                    System Theme
                </span>
                <ThemeSwitch />
            </div>

        </nav>
    );
}