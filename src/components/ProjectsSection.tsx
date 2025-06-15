
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FeatureSteps } from "@/components/ui/feature-section";

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        {
            step: "Project 1",
            title: "Quiz Patente",
            content: "A comprehensive driving license quiz application with interactive questions and real-time scoring using React and TypeScript.",
            image: "🚗",
        },
        {
            step: "Project 2", 
            title: "TPL - Trasporto Pubblico Locale",
            content: "A modern public transportation management system with route planning and real-time updates built with Next.js.",
            image: "🚌",
        },
        {
            step: "Project 3",
            title: "Prompt Engineering Tool", 
            content: "An AI-powered tool for optimizing and testing prompt engineering strategies with analytics and OpenAI integration.",
            image: "🤖",
        },
    ];

    return (
        <section id="projects" ref={ref} className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    <FeatureSteps 
                        features={features}
                        title="Featured Projects"
                        className="bg-transparent p-0"
                    />
                </motion.div>
            </div>
        </section>
    );
}
