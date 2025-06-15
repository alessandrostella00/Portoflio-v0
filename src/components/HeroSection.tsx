
import { motion } from "framer-motion";
import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    useEffect(() => {
        renderCanvas();
    }, []);

    const scrollToAbout = () => {
        const element = document.getElementById("about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const words = "Alessandro Stella".split(" ");

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 dark:from-neutral-950 dark:via-neutral-900/80 dark:to-neutral-800/40">
            <canvas
                className="pointer-events-none absolute inset-0 mx-auto opacity-60 dark:opacity-40"
                id="canvas"
            ></canvas>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-light mb-8 tracking-tight">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 120,
                                            damping: 20,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 
                                        dark:from-white dark:via-blue-200 dark:to-purple-200"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div
                        className="inline-block group relative bg-gradient-to-b from-white/80 to-blue-50/50 
                        dark:from-white/10 dark:to-blue-900/20 p-px rounded-3xl backdrop-blur-sm 
                        overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-white/50 dark:border-white/10"
                    >
                        <Button
                            variant="ghost"
                            onClick={scrollToAbout}
                            className="rounded-[1.4rem] px-10 py-7 text-lg font-medium backdrop-blur-sm 
                            bg-white/90 hover:bg-white dark:bg-black/80 dark:hover:bg-black/90 
                            text-slate-700 dark:text-white transition-all duration-300 
                            group-hover:-translate-y-1 border-0
                            hover:shadow-lg dark:hover:shadow-neutral-700/50"
                        >
                            <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-2 
                                transition-all duration-300 text-blue-500"
                            >
                                →
                            </span>
                        </Button>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-center"
                >
                    <p className="text-lg text-slate-500 dark:text-neutral-300 mb-4 font-light">
                        Business Consultant & UI/UX Designer
                    </p>
                    <motion.button
                        onClick={scrollToAbout}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 border border-slate-300 dark:border-neutral-400 rounded-full flex justify-center cursor-pointer hover:border-blue-400 dark:hover:border-blue-300 transition-colors backdrop-blur-sm bg-white/50 dark:bg-black/30"
                    >
                        <div className="w-1 h-3 bg-slate-400 dark:bg-neutral-400 rounded-full mt-2"></div>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
