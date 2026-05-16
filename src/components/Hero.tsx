/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 hero-glow -z-10" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Amjad Ali
            </h1>
            <div className="inline-block py-2 px-4 rounded-full bg-primary/10 text-primary font-semibold mb-8 text-lg border border-primary/20">
              Full Stack Developer & Software Engineer
            </div>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Building modern web applications and AI solutions with precision and scalable architecture. 
              Focused on delivering high-performance digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="primary-gradient font-bold h-14 px-8 group">
              Hire Me <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass-card font-bold h-14 px-8">
              View Projects
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 flex justify-center gap-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-widest">Clients</div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="mt-12 flex justify-center gap-6"
          >
            <a href="#" className="p-3 rounded-full glass-card hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 rounded-full glass-card hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-full glass-card hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
