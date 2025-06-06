
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(sectionId);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? "bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md shadow-lg" 
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-bold text-neutral-900 dark:text-white"
                    >
                        AC
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? "text-neutral-900 dark:text-white"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                                }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:hidden p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
