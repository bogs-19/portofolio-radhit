"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      // GANTI max-w-4xl menjadi max-w-7xl AGAR COCOK DENGAN LEBAR HALAMANMU
      className={cn("relative mx-auto h-full w-full max-w-7xl", className)}>
      <div className="absolute top-3 -left-4 md:-left-12 lg:-left-20"> {/* Sesuaikan jarak kiri */}
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm">
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              // Warna titik bola atas disesuaikan dengan tema lime
              backgroundColor: scrollYProgress.get() > 0 ? "white" : "#a3e635",
              borderColor: scrollYProgress.get() > 0 ? "white" : "#84cc16",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white" />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true">

          {/* Garis Dasar (Tipis dan redup) */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#a3e635"
            strokeOpacity="0.16" // Tetap biarkan redup 16%
            transition={{ duration: 10 }}
          ></motion.path>

          {/* Garis Animasi Scroll (Menggunakan ID gradient) */}
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)" // KEMBALIKAN KE URL GRADIENT
            strokeWidth="2.5" // Sedikit dipertebal agar terlihat jelas
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          ></motion.path>

          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}>
              {/* UBAH WARNA GRADIENT MENJADI TEMA LIME */}
              <stop stopColor="#a3e635" stopOpacity="0"></stop> {/* Hijau Pudar Atas */}
              <stop stopColor="#a3e635"></stop> {/* Hijau Lime */}
              <stop offset="0.325" stopColor="#84cc16"></stop> {/* Hijau Gelap Tengah */}
              <stop offset="1" stopColor="#65a30d" stopOpacity="0"></stop> {/* Hijau Gelap Bawah Pudar */}
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};