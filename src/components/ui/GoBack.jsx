import React from 'react';

export default function GoBack() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className="group relative h-10 w-32 sm:h-12 sm:w-40 rounded-2xl border border-white/10 bg-neutral-900 text-center font-semibold text-white transition-all hover:border-lime-500/50"
            type="button"
        >
            <div className="absolute left-1 top-0.75 sm:top-1 z-10 flex h-8 w-1/4 sm:h-10 items-center justify-center rounded-xl bg-lime-500 duration-500 group-hover:w-29.5 sm:group-hover:w-37.5">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                >
                    <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="#000000" />
                    <path d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" fill="#000000" />
                </svg>
            </div>
            <p className="translate-x-4 text-xs sm:text-sm sm:translate-x-3">Top</p>
        </button>
    );
}