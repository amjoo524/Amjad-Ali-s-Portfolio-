/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { Monitor, Terminal, Database } from "lucide-react";
import { Badge } from "../components/Ui/badge";

const skills = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "text-blue-400",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Terminal,
    color: "text-purple-400",
    tags: ["Node.js", "Express", "Supabase", "Python", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-orange-400",
    tags: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl group"
            >
              <div className="flex items-center gap-4 mb-8">
                <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={36} />
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors py-1.5 px-3 border border-white/5"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
