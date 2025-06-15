
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return document.documentElement.classList.contains('dark');
    });

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
            
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.getElementById(item.id)
            })).filter(section => section.element);

            let currentSection = "home";
            
            for (const section of sections) {
                const rect = section.element!.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentSection = section.id;
                }
            }
            
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl shadow-sm border-b border-white/20 dark:border-neutral-800/30" 
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-xl font-light text-slate-700 dark:text-white cursor-pointer tracking-wide"
                        onClick={() => scrollToSection("home")}
                    >
                        AS
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-sm font-light transition-colors ${
                                    activeSection === item.id
                                        ? "text-blue-600 dark:text-blue-300"
                                        : "text-slate-600 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-200"
                                }`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleDarkMode}
                            className="rounded-full bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-white/30 dark:border-neutral-700/30 hover:bg-white/80 dark:hover:bg-neutral-700/80"
                        >
                            {isDarkMode ? (
                                <Sun className="h-4 w-4 text-yellow-500" />
                            ) : (
                                <Moon className="h-4 w-4 text-slate-600" />
                            )}
                        </Button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="md:hidden p-2 rounded-full bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm"
                        >
                            <svg className="w-5 h-5 text-slate-600 dark:text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
