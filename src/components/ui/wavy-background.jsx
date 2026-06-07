"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children, className, containerClassName, colors, waveWidth, backgroundFill, 
  blur = 10, speed = "fast", waveOpacity = 0.5, ...props
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);
  
  // Deteksi Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;
    render();
  };

  const drawWave = (n) => {
    nt += getSpeed();
    // Warna dinamis: Hijau neon untuk dark, Hijau tua untuk light
    const waveColors = colors ?? (isDarkMode ? ['#ccff00', '#14532d', '#22c55e'] : ['#a7f3d0', '#065f46', '#10b981']);
    
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId;
  const render = () => {
    // backgroundFill transparan agar background body (dari CSS) terlihat
    ctx.clearRect(0, 0, w, h); 
    drawWave(5);
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, [isDarkMode]); // Re-render saat tema berubah

  return (
    // Hapus 'h-screen flex items-center justify-center' agar konten tidak menumpuk di tengah
    <div className={cn("relative w-full", containerClassName)}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};