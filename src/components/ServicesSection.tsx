
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, BarChart3, Zap, Users, Target } from "lucide-react";

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Custom web applications built with modern technologies like React, TypeScript, and Node.js.",
      features: ["Responsive Design", "API Development", "Database Design"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers with intuitive interfaces.",
      features: ["User Research", "Prototyping", "Design Systems"]
    },
    {
      icon: BarChart3,
      title: "Business Consulting",
      description: "Strategic guidance to help your business leverage technology for growth and efficiency.",
      features: ["Digital Strategy", "Process Optimization", "Tech Stack Planning"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your applications and improve user experience with advanced optimization techniques.",
      features: ["Core Web Vitals", "SEO Optimization", "Loading Speed"]
    },
    {
      icon: Users,
      title: "Team Training",
      description: "Upskill your development team with modern best practices and cutting-edge technologies.",
      features: ["Code Reviews", "Workshops", "Mentoring"]
    },
    {
      icon: Target,
      title: "MVP Development",
      description: "Rapid prototyping and development to validate your business ideas quickly and efficiently.",
      features: ["Quick Turnaround", "Scalable Architecture", "Market Testing"]
    }
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              What I Can Do For You
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              From concept to deployment, I provide comprehensive solutions that drive business growth and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white dark:text-neutral-900" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-neutral-900 dark:text-white">
                  {service.title}
                </h3>
                
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-500 dark:text-neutral-500">
                      <div className="w-1.5 h-1.5 bg-neutral-400 dark:bg-neutral-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
