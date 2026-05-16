/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-3xl font-extrabold text-white tracking-tighter">
            AA
          </div>
          
          <div className="text-sm font-mono text-muted-foreground">
            © {currentYear} Amjad Ali. Built with precision.
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors">Source Code</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
