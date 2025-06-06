
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" ref={ref} className="py-24">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-white">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12">
                        Ready to bring your ideas to life? I'd love to hear from you.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { icon: "📧", label: "Email", value: "alex@example.com" },
                            { icon: "📱", label: "Phone", value: "+1 (555) 123-4567" },
                            { icon: "📍", label: "Location", value: "San Francisco, CA" },
                        ].map((contact, index) => (
                            <motion.div
                                key={contact.label}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow"
                            >
                                <div className="text-3xl mb-3">{contact.icon}</div>
                                <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white">
                                    {contact.label}
                                </h3>
                                <p className="text-neutral-600 dark:text-neutral-400">{contact.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <Button size="lg" className="px-8 py-3 text-lg">
                            Get In Touch
                        </Button>
                        <div className="flex justify-center space-x-6 mt-8">
                            {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                                <motion.a
                                    key={social}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                >
                                    {social}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
