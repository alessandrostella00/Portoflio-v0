
import { motion } from "framer-motion";
import { useEffect } from "react";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  
  useEffect(() => {
    renderCanvas();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const words = t('hero.title').split(" ");

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      <canvas className="pointer-events-none absolute inset-0 mx-auto" id="canvas"></canvas>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 2 }} 
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span 
                    key={`${wordIndex}-${letterIndex}`} 
                    initial={{ y: 100, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25
                    }} 
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <div className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Button 
              variant="ghost" 
              onClick={scrollToAbout} 
              className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
            >
              <span className="opacity-90 group-hover:opacity-100 transition-opacity text-base">
                {t('hero.cta')}
              </span>
              <span className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300">
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
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
            {t('hero.subtitle')}
          </p>
          <motion.button 
            onClick={scrollToAbout} 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }} 
            className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-500 rounded-full flex justify-center cursor-pointer hover:border-neutral-600 dark:hover:border-neutral-300 transition-colors px-0 text-left text-base"
          >
            <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
