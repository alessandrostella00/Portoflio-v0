
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navigation() {
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Check if dark mode is already set
        return document.documentElement.classList.contains('dark');
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            
            // Update active section based on scroll position
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
        setIsMobileMenuOpen(false); // Chiudi il menu mobile dopo il click
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
                        className="text-xl font-bold text-neutral-900 dark:text-white cursor-pointer"
                        onClick={() => scrollToSection("home")}
                    >
                        AS
                    </motion.div>

                    {/* Desktop Menu */}
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
                                aria-label={`Vai alla sezione ${item.label}`}
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
                            className="rounded-full"
                            aria-label={isDarkMode ? "Attiva modalità chiara" : "Attiva modalità scura"}
                        >
                            {isDarkMode ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>

                        {/* Mobile Menu Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden rounded-full"
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: isMobileMenuOpen ? "auto" : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md"
                >
                    <div className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                whileTap={{ scale: 0.95 }}
                                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? "text-neutral-900 dark:text-white bg-neutral-100 dark:bg-neutral-800"
                                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                                }`}
                                aria-label={`Vai alla sezione ${item.label}`}
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}
