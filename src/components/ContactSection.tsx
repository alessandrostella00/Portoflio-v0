
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section id="contact" ref={ref} className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-white">
              Let's Work Together
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Whether you need a new website, want to optimize your existing application, or need strategic guidance, I'm here to help.
            </p>
          </div>

          <ContactForm />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="flex justify-center space-x-6">
              {[
                { name: "GitHub", url: "#" },
                { name: "LinkedIn", url: "#" },
                { name: "Twitter", url: "#" }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
