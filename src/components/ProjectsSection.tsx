
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
            description: "A comprehensive driving license quiz application with interactive questions and real-time scoring.",
            tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
            image: "🚗",
            demoUrl: "#",
            codeUrl: "#",
        },
        {
            title: "TPL - Trasporto Pubblico Locale",
            description: "A modern public transportation management system with route planning and real-time updates.",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
            image: "🚌",
            demoUrl: "#",
            codeUrl: "#",
        },
        {
            title: "Prompt Engineering Tool",
            description: "An AI-powered tool for optimizing and testing prompt engineering strategies with analytics.",
            tech: ["React", "OpenAI API", "Node.js", "MongoDB"],
            image: "🤖",
            demoUrl: "#",
            codeUrl: "#",
        },
    ];

    const handleLiveDemo = (url: string, title: string) => {
        if (url === "#") {
            alert(`${title} demo will be available soon!`);
        } else {
            window.open(url, "_blank");
        }
    };

    const handleViewCode = (url: string, title: string) => {
        if (url === "#") {
            alert(`${title} source code will be available soon!`);
        } else {
            window.open(url, "_blank");
        }
    };

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
                                    <Button 
                                        variant="outline" 
                                        size="sm" 
                                        className="flex-1"
                                        onClick={() => handleLiveDemo(project.demoUrl, project.title)}
                                    >
                                        Live Demo
                                    </Button>
                                    <Button 
                                        variant="ghost" 
                                        size="sm" 
                                        className="flex-1"
                                        onClick={() => handleViewCode(project.codeUrl, project.title)}
                                    >
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
