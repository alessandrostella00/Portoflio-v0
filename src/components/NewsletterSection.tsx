
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive updates about new projects and insights.",
    });
    
    setEmail("");
    setIsSubscribing(false);
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 dark:from-neutral-800 dark:to-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
              Get insights on web development, business consulting, and the latest tech trends delivered straight to your inbox.
            </p>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="pl-12 bg-white/90 border-white/20 text-neutral-900 placeholder:text-neutral-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubscribing}
              className="bg-white text-neutral-900 hover:bg-neutral-100 px-8"
            >
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </motion.form>

          <p className="text-sm text-neutral-400 mt-4">
            No spam, unsubscribe at any time. Your email is safe with me.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
