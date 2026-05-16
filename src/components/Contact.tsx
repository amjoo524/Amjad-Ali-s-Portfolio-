/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { Mail, Terminal, Link as LinkIcon, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glass-card rounded-[2.5rem] p-10 md:p-20 flex flex-col md:flex-row gap-16 relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

          <div className="w-full md:w-1/2 space-y-10">
            <div className="space-y-6">
              <h2 className="text-5xl font-extrabold tracking-tight">Let's Connect</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                Have a project in mind or just want to chat about tech? 
                Drop me a message and let's build something amazing together.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:hello@amjadali.dev" className="flex items-center gap-5 group w-fit">
                <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                  <Mail className="group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg font-mono font-medium tracking-tight">hello@amjadali.dev</span>
              </a>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Terminal, href: "#" },
                  { icon: LinkIcon, href: "#" },
                  { icon: MessageSquare, href: "#" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <Input
                  className="bg-white/5 border-white/10 h-14 rounded-xl px-5 focus-visible:ring-primary focus-visible:border-primary/50 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <Input
                  className="bg-white/5 border-white/10 h-14 rounded-xl px-5 focus-visible:ring-primary focus-visible:border-primary/50 transition-all font-medium"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea
                  className="bg-white/5 border-white/10 rounded-xl px-5 pt-4 focus-visible:ring-primary focus-visible:border-primary/50 transition-all font-medium min-h-[160px] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" className="primary-gradient w-full h-14 rounded-xl font-bold text-lg gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
