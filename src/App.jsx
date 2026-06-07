import React, { useState, useEffect } from 'react';
import Loader from './components/ui/Loader';
import { WavyBackground } from './components/ui/wavy-background';
import Navbar from './layout/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Footer from './layout/Footer';// 1. Pastikan import ini ada
import About from './sections/About';
import Experience from './sections/Experience';
import { TracingBeam } from "@/components/ui/tracing-beam";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">

      {/* 1. WavyBackground sekarang jadi latar belakang global */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <WavyBackground
          className="h-full w-full"
          // Saat dark mode warna hijau neon, saat light mode kita buat lebih redup/soft
          waveOpacity={0.4}
          blur={15}
        />
      </div>

      {/* 2. Semua konten diposisikan di atas (z-10) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
       {/* BUNGKUS DENGAN TRACING BEAM DI SINI */}
      <TracingBeam className="px-6 md:px-8">
        
        {/* Susunan halamanmu yang ingin dilewati garis */}
        <div className="w-full flex flex-col gap-10">
          <About />
          <Experience />
          <Projects /> {/* Ini bagian Beyond Code */}
        </div>

      </TracingBeam>
        <Achievements />
        <Footer />
      </div>

    </main>
  );
}

export default App;