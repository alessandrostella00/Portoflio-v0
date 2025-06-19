
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { t } = useLanguage();

    const skills = [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "AWS/Cloud", level: 70 },
    ];

    return (
        <section id="skills" ref={ref} className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">
                        {t('skills.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="mb-6"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="text-lg font-medium text-neutral-900 dark:text-white">
                                        {skill.name}
                                    </span>
                                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {skill.level}%
                                    </span>
                                </div>
                                <div className="w-full bg-neutral-200 dark:bg-neutral-800 rounded-full h-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                                        className="bg-gradient-to-r from-neutral-600 to-neutral-800 dark:from-neutral-300 dark:to-neutral-500 h-2 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
