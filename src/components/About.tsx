/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { Bolt, Code, User, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute inset-0 primary-gradient rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity -z-10 scale-110" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                alt="Amjad Ali"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A results-driven Full Stack Software Engineer with over 4 years of hands-on experience in building robust web applications. 
              I specialize in the MERN stack and Next.js, bridging the gap between sophisticated design and technical feasibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="glass-card p-6 rounded-2xl text-center space-y-2">
                <Bolt className="mx-auto text-primary" size={32} />
                <h3 className="font-bold">Fast Delivery</h3>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center space-y-2">
                <Code className="mx-auto text-primary" size={32} />
                <h3 className="font-bold">Clean Code</h3>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center space-y-2">
                <User className="mx-auto text-primary" size={32} />
                <h3 className="font-bold">Client Focused</h3>
              </div>
            </div>

            <Button variant="outline" className="glass-card gap-2 h-12 px-6 font-bold group">
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
