/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "GoSawari",
    description: "A modern ride-sharing and vehicle booking platform with real-time tracking and payment integration.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Express", "MongoDB", "Socket.io"],
    live: "#",
    github: "#",
  },
  {
    title: "Northern Star Parenting",
    description: "An educational portal providing resources and support for parents through interactive content.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Firebase", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Fees Management System",
    description: "A high-precision internal tool for tracking institutional fees, invoicing, and reporting.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Node.js", "PostgreSQL", "D3.js"],
    live: "#",
    github: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Featured Work</h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              A curated selection of my most challenging and impactful projects, 
              showcasing full-stack expertise and design sensibilities.
            </p>
          </div>
          <Button variant="link" className="text-primary gap-2 p-0 h-auto font-bold group">
            VIEW ALL REPOS <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                   <Button variant="secondary" className="font-bold">View Details</Button>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-white/5 border-white/10 text-xs py-0.5 px-2">
                       {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                  <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <Button size="sm" className="primary-gradient font-bold h-10 px-5 gap-2 group">
                    Live Link <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
