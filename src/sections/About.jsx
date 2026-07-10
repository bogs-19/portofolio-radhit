import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const Step = ({ title }) => {
    return (
        <li className="flex gap-3 items-start mt-3">
            <CheckIcon />
            <p className="relative z-20 text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-medium leading-relaxed drop-shadow-sm">{title}</p>
        </li>
    );
};

const CheckIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="relative z-20 h-5 w-5 text-lime-500 mt-0.5 shrink-0 drop-shadow-sm">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" fill="currentColor" strokeWidth="0" />
        </svg>
    );
};

export default function About() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
    const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
    const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
    const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
    const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

    return (
        <section id="about" className="relative w-full z-10 bg-transparent pt-20">

            <div className="relative h-[180vh] md:h-[200vh] w-full overflow-clip" ref={ref}>
                <GoogleGeminiEffect
                    title="Bridging Education & Technology"
                    description="Shaping disciplined pedagogy into meaningful digital realities."
                    pathLengths={[
                        pathLengthFirst,
                        pathLengthSecond,
                        pathLengthThird,
                        pathLengthFourth,
                        pathLengthFifth,
                    ]}
                />
            </div>

            <div className="relative z-20 mx-auto max-w-7xl px-4 md:px-8 pb-32 mt-0 md:mt-[-5vh]">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-6 md:gap-8 w-full auto-rows-min">

                    <div className="md:col-span-2 w-full flex flex-col h-auto">
                        <CardContainer className="inter-var w-full h-auto min-h-fit">
                            <CardBody className="w-full h-auto min-h-fit flex flex-col">
                                <CardSpotlight className="w-full flex flex-col h-auto min-h-fit p-8 md:p-10 rounded-[3rem] border border-white/60 dark:border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[inset_6px_6px_20px_rgba(255,255,255,0.9),inset_-6px_-6px_20px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_6px_6px_20px_rgba(255,255,255,0.2),inset_-6px_-6px_20px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">

                                    <CardItem translateZ="50" className="w-full mb-6 shrink-0">
                                        <div className="relative z-20 inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                                            {/* Swoosh Kilap Kaca di atas tombol */}
                                            <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                                            <h3 className="relative z-10 text-xl md:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                                                About Me
                                            </h3>
                                        </div>
                                    </CardItem>

                                    <CardItem translateZ="60" className="text-neutral-800 dark:text-neutral-200 relative z-20 text-base md:text-lg leading-relaxed space-y-5 w-full drop-shadow-sm shrink-0">
                                        <p>
                                            I am an Informatics student at Universitas Muhammadiyah Malang and a passionate AI enthusiast, with a unique background that combines computational logic and communication sciences.
                                        </p>
                                        <p>
                                            Completing an intensive 6-year educational program and serving as a
                                            <strong className="text-lime-600 dark:text-lime-400 mx-1 drop-shadow-md">Teacher & Mentor at a leading educational institution</strong>
                                            has built my strong foundation in leadership, discipline, and event management. Currently, I am channeling this focus and energy toward driving innovation and exploring new advancements in the technology sector.
                                        </p>
                                    </CardItem>
                                </CardSpotlight>
                            </CardBody>
                        </CardContainer>
                    </div>

                    <div className="w-full flex flex-col h-full">
                        <CardContainer className="inter-var w-full h-full min-h-fit">
                            <CardBody className="w-full h-full min-h-fit flex flex-col">
                                <CardSpotlight className="w-full flex flex-col h-full min-h-fit p-8 md:p-10 rounded-[3rem] border border-white/60 dark:border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[inset_6px_6px_20px_rgba(255,255,255,0.9),inset_-6px_-6px_20px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_6px_6px_20px_rgba(255,255,255,0.2),inset_-6px_-6px_20px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">

                                    <CardItem translateZ="50" className="w-full mb-6 shrink-0">
                                        <div className="relative z-20 inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                                            <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                                            <h3 className="relative z-10 text-xl md:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                                                Hard Skill
                                            </h3>
                                        </div>
                                    </CardItem>

                                    <CardItem translateZ="60" className="relative z-20 w-full shrink-0">
                                        <ul className="list-none flex flex-col gap-1">
                                            <Step title="Web Development" />
                                            <Step title="Database Management System (DBMS)" />
                                            <Step title="Java, JavaScript, Typescript, Python, C" />
                                            <Step title="Linux System & Vim" />
                                            <Step title="Design graphic & video editing" />
                                        </ul>
                                    </CardItem>
                                </CardSpotlight>
                            </CardBody>
                        </CardContainer>
                    </div>

                    <div className="w-full flex flex-col h-full">
                        <CardContainer className="inter-var w-full h-full min-h-fit">
                            <CardBody className="w-full h-full min-h-fit flex flex-col">
                                <CardSpotlight className="w-full flex flex-col h-full min-h-fit p-8 md:p-10 rounded-[3rem] border border-white/60 dark:border-white/20 bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-[inset_6px_6px_20px_rgba(255,255,255,0.9),inset_-6px_-6px_20px_rgba(255,255,255,0.4),0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_6px_6px_20px_rgba(255,255,255,0.2),inset_-6px_-6px_20px_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-300">

                                    <CardItem translateZ="50" className="w-full mb-6 shrink-0">
                                        <div className="relative z-20 inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/60 dark:border-white/20 bg-white/30 dark:bg-white/10 backdrop-blur-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,0.9),inset_-4px_-4px_10px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.1)] dark:shadow-[inset_4px_4px_10px_rgba(255,255,255,0.2),inset_-4px_-4px_10px_rgba(255,255,255,0.1),0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden">
                                            <div className="absolute inset-x-2 top-1 h-1/2 bg-gradient-to-b from-white/80 dark:from-white/20 to-transparent rounded-t-full pointer-events-none z-0"></div>
                                            <h3 className="relative z-10 text-xl md:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-wide drop-shadow-md">
                                                Soft Skill
                                            </h3>
                                        </div>
                                    </CardItem>

                                    <CardItem translateZ="60" className="relative z-20 w-full shrink-0">
                                        <ul className="list-none flex flex-col gap-1">
                                            <Step title="Teaching & Mentoring" />
                                            <Step title="Public Speaking & Event Management" />
                                            <Step title="Arabic Language (Advanced)" />
                                            <Step title="English Language (C1 Level)" />
                                            <Step title="French Language" />
                                        </ul>
                                    </CardItem>
                                </CardSpotlight>
                            </CardBody>
                        </CardContainer>
                    </div>

                </div>
            </div>
        </section>
    );
}