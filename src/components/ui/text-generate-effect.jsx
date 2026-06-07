"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();

  // KUNCI RAHASIANYA DI SINI: Deteksi layar dengan once: false
  const isInView = useInView(scope, { once: false, amount: 0.2 });

  let wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      // Jika masuk ke layar, jalankan animasi mengetik
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.1), // Kecepatan mengetik (semakin kecil semakin cepat)
        }
      );
    } else {
      // Jika keluar layar, reset tulisannya jadi hilang & blur dalam 0 detik
      animate(
        "span",
        {
          opacity: 0,
          filter: filter ? "blur(10px)" : "none",
        },
        { duration: 0 }
      );
    }
  }, [isInView, animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};