import React from 'react';

export default function GoBack() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            // 1. KUNCI UX: Gunakan 'group/btn' agar efek hover TIDAK bertabrakan dengan class 'group' milik Navbar
            // 2. TREL/PARIT: Gunakan inset shadow agar tombol terlihat sebagai rel cekung yang masuk ke dalam
            className="group/btn relative flex items-center h-10 w-32 sm:h-12 sm:w-40 rounded-[2rem] border border-transparent bg-[#E0E5EC] dark:bg-[#1a1b1e] shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6),inset_-4px_-4px_8px_rgba(255,255,255,0.08)] transition-all duration-300 active:scale-95 focus:outline-none overflow-hidden"
            type="button"
            aria-label="Scroll to top"
        >
            {/* KENOP FISIK (Slider): Timbul ke luar dengan shadow normal. Saat di-hover, memanjang memenuhi rel */}
            <div className="absolute left-1 top-1 z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-lime-500 shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.6)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.6),-2px_-2px_4px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out group-hover/btn:w-[calc(100%-8px)] group-hover/btn:bg-lime-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    className="h-4 w-4 sm:h-5 sm:w-5 text-black drop-shadow-sm transition-transform duration-500 group-hover/btn:-translate-x-1"
                >
                    <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="currentColor" />
                    <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="currentColor" />
                </svg>
            </div>

            {/* TEKS POSISI TENGAH: Z-20 agar tidak tertutup kenop hijau saat melebar */}
            <div className="relative z-20 flex flex-1 items-center justify-center pl-8 sm:pl-10 pointer-events-none">
                <p className="text-xs sm:text-sm font-bold tracking-wide text-neutral-500 dark:text-neutral-400 transition-colors duration-500 group-hover/btn:text-black">
                    Top
                </p>
            </div>
        </button>
    );
}