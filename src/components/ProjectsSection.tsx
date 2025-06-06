
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "Quiz Patente",
            description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "🛒",
        },
        {
            title: "TPL - MPL - Trasporto Pubblico Locale",
            description: "A collaborative task management tool with real-time updates and team features.",
            tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
            image: "📋",
        },
        {
            title: "Prompt prompt engineering",
            description: "An AI-powered chat assistant built with OpenAI API and modern UI components.",
            tech: ["React", "OpenAI API", "Tailwind CSS", "Vercel"],
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-neutral-900 dark:text-white">
                        Featured Projects
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
                            >
                                <div className="text-6xl mb-4 text-center">{project.image}</div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 rounded-full text-xs font-medium text-neutral-600 dark:text-neutral-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        Live Demo
                                    </Button>
                                    <Button variant="ghost" size="sm" className="flex-1">
                                        Code
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
