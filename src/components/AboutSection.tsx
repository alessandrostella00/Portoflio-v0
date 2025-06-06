
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" ref={ref} className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-white">
                        About Me
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-left"
                        >
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                                I'm a passionate full-stack developer with over 5 years of experience 
                                creating digital solutions that make a difference. I specialize in 
                                modern web technologies and have a keen eye for user experience design.
                            </p>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                                When I'm not coding, you'll find me exploring new technologies, 
                                contributing to open-source projects, or hiking in the mountains.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-700"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 rounded-3xl flex items-center justify-center">
                                <span className="text-6xl">👨‍💻</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
