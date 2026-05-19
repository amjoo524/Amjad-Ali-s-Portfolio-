/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "framer-motion";

export function Footer() {

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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

          <div className="text-sm font-mono text-muted-foreground">
            © 2022 Amjad Ali. Built with precision.
          </div>

          <div className="flex gap-8">
            <a href="/terms" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/privacy" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a 
  href="https://github.com/amjoo524/Amjad-Ali-s-Portfolio-" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
>
  Source Code
</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
