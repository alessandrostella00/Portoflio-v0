
import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";

export function HeroSection() {
    return (
        <section id="home" className="relative">
            <BackgroundPaths title="Alex Chen" />
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="text-center"
                >
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-4">
                        Full-Stack Developer & UI/UX Designer
                    </p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-500 rounded-full flex justify-center"
                    >
                        <div className="w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
