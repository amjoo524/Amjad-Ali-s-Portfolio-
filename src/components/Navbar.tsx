/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../components/Ui/button";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      {
        root: null,
        // With fixed navbar, treat the "top" portion as the active region
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
      <motion.a
  href="#home"
  whileHover={{ scale: 1.05 }}
  className="flex items-center"
>
  <svg width="48" height="48" viewBox="0 0 120 120">
    <rect width="120" height="120" rx="24" fill="#7c3aed"/>
    <text x="60" y="52" textAnchor="middle" fontFamily="system-ui" fontSize="36" fontWeight="900" fill="white">AA</text>
    <rect x="20" y="62" width="80" height="3" rx="1.5" fill="white" opacity="0.4"/>
    <text x="60" y="85" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="white" opacity="0.8">&lt;dev/&gt;</text>
  </svg>
</motion.a>

        {/* Desktop Nav — CENTER */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={
                  "text-sm font-medium transition-colors relative group " +
                  (isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary")
                }
              >
                {link.name}
                <span
                  className={
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 " +
                    (isActive ? "w-full" : "w-0 group-hover:w-full")
                  }
                />
              </a>
            );
          })}
        </div>

        {/* Hire Me Button */}
       <div className="hidden md:block">
  <Button
    size="sm"
    className="primary-gradient font-semibold"
    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
  >
    Hire Me
  </Button>
</div>


        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background border-b border-white/5 px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? "page" : undefined}
                className={
                  "text-lg font-medium transition-colors " +
                  (isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary")
                }
              >
                {link.name}
              </a>
            );
          })}
          <Button className="primary-gradient w-full font-semibold">
            Hire Me
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}

