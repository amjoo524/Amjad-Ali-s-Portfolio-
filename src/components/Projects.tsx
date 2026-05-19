/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "../components/Ui/button";
import { Badge } from "../components/Ui/badge";


const projects = [
  {
    title: "Northern Star Parenting",
    description: "A comprehensive parenting guidance web app with articles, community forums, and expert resources for modern parents.",
   image: "/Northren_parenting_Star.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase", "ShadCN", ],
    live: "https://app.northernstarparenting.com",
    github: "#",
  },
  {
    title: "GoSawari",
    description: "A carpooling & ride-share platform for intercity and local travel across Pakistan. Connect with drivers, save cost, and travel with comfort.",
     image: "/Gosawari-Carpolling.png",
    tags: ["Next.js", "Node.js", "TypeScript", "MongoDB", "Express", "Tailwind", "Supabase"],
    live: "https://www.gosawari.com",
    github: "#",
  },
  {
    title: "Fees Management System",
    description: "A full-featured institute fees management system with student records, payments tracking, and detailed reporting dashboard.",
      image: "/Fees_managemant.png",
    tags: ["Next.js", "Supabase", "ShadCN", "TypeScript", "Tailwind",],
    live: "https://fees-managemnt-system-1wgi.vercel.app/dashboard",
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
              {/* Project Screenshot */}
             <div className="relative overflow-hidden bg-[#1a1a2e]">
  <img
    src={project.image}
    alt={project.title}
    className="w-full aspect-video object-contain group-hover:scale-105 transition-transform duration-500"
  />
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
    <a href={project.live} target="_blank" rel="noopener noreferrer">
      <Button variant="secondary" className="font-bold gap-2">
        View Live <ExternalLink size={14} />
      </Button>
    </a>
  </div>
  <span className="absolute top-3 right-3 text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
    Live
  </span>
</div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-white/5 border-white/10 text-xs py-0.5 px-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/5">
                  <a 
                    href={project.github}
                    className="text-muted-foreground hover:text-white transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="sm"
                      className="primary-gradient font-bold h-10 px-5 gap-2 group"
                    >
                      Live Link{" "}
                      <ExternalLink
                        size={14}
                        className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
                      />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}