
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, Users } from "lucide-react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Quiz Patente",
      description: "A comprehensive driving license quiz application with interactive questions, real-time scoring, and progress tracking. Built for the Italian market with official exam questions.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      features: ["Real-time scoring", "Progress tracking", "Official questions", "Mobile responsive"],
      stats: { users: "10K+", accuracy: "95%", completion: "78%" },
      links: { demo: "#", github: "#" },
      status: "Live"
    },
    {
      title: "TPL - Trasporto Pubblico Locale",
      description: "A modern public transportation management system with route planning, real-time updates, and passenger information. Serving multiple Italian cities.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Redis", "Docker"],
      features: ["Real-time tracking", "Route optimization", "Multi-city support", "Admin dashboard"],
      stats: { routes: "150+", cities: "8", uptime: "99.9%" },
      links: { demo: "#", github: "#" },
      status: "Live"
    },
    {
      title: "Prompt Engineering Tool",
      description: "An AI-powered tool for optimizing and testing prompt engineering strategies with analytics, A/B testing, and OpenAI integration for better AI interactions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "OpenAI API", "FastAPI"],
      features: ["A/B testing", "Analytics dashboard", "OpenAI integration", "Performance metrics"],
      stats: { prompts: "500+", improvement: "40%", users: "2K+" },
      links: { demo: "#", github: "#" },
      status: "Beta"
    }
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              A showcase of recent work spanning web applications, business solutions, and innovative tools that solve real-world problems.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-neutral-900 dark:text-white">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 rounded-full text-sm text-neutral-700 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-neutral-900 dark:text-white">Key Features</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  <div className="mb-8">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-neutral-900 dark:text-white">{value}</div>
                          <div className="text-sm text-neutral-500 dark:text-neutral-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="default" asChild>
                      <a href={project.links.demo} className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={project.links.github} className="flex items-center gap-2">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
