/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Ui/button";
import { ArrowRight, Github, Linkedin, Twitter, Download, CheckCircle } from "lucide-react";

function DownloadCVButton() {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      const link = document.createElement("a");
      link.href = "/Amjad-Ali.pdf";
      link.download = "Amjad-Ali-CV.pdf";
      link.click();
      setTimeout(() => setDownloaded(false), 3000);
    }, 1500);
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={downloading}
      variant="outline"
      className="relative glass-card gap-2 h-14 px-8 font-bold group overflow-hidden
        hover:scale-105 active:scale-95 transition-all duration-300
        disabled:cursor-not-allowed"
    >
      {downloading && (
        <span
          className="absolute bottom-0 left-0 h-0.5 bg-primary"
          style={{ animation: "loadingBar 1.5s ease-in-out forwards" }}
        />
      )}
      {downloading ? (
        <>
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          Downloading...
        </>
      ) : downloaded ? (
        <>
          <CheckCircle size={18} className="text-green-400" />
          <span className="text-green-400">Downloaded!</span>
        </>
      ) : (
        <>
          <Download size={18} className="group-hover:translate-y-0.5 group-hover:animate-bounce transition-transform" />
          Download CV
        </>
      )}
    </Button>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 hero-glow -z-10" />
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

            <div className="flex-1 text-center md:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold mb-6 text-sm border border-primary/20 font-mono tracking-widest uppercase">
                  Available for work ✦
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
                  Hi, I'm <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    Amjad Ali
                  </span>
                </h1>
                <div className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
                  Full Stack Developer & Software Engineer
                  </div>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                  Building modern web applications and AI-powered solutions with
                  precision and scalable architecture. Focused on delivering
                  high-performance digital experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-10"
              >
               <Button
  size="lg"
  className="primary-gradient font-bold h-14 px-8 group"
  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
>
  Hire Me <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
</Button>
                <DownloadCVButton />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center md:justify-start gap-4 mb-12"
              >
                <a href="#" className="p-3 rounded-full glass-card hover:text-primary hover:scale-110 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 rounded-full glass-card hover:text-primary hover:scale-110 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-3 rounded-full glass-card hover:text-primary hover:scale-110 transition-all duration-300">
                  <Twitter size={20} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center md:justify-start gap-10"
              >
                {[
                  { value: "4+", label: "Years Exp." },
                  { value: "10+", label: "Projects" },
                  { value: "3+", label: "Clients" },
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

          <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="flex-shrink-0 relative w-64 h-64 md:w-80 md:h-80"
>
  {/* Glow */}
  <div className="absolute inset-0 bg-primary/30 rounded-full blur-[60px] scale-110" />

  {/* Outer rotating dashed ring */}
  <div
    className="absolute inset-[-20px] rounded-full border-2 border-dashed border-primary/30 animate-spin"
    style={{ animationDuration: "10s" }}
  />

  {/* Laptop orbiting */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
    className="absolute inset-[-20px]"
  >
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
        glass-card rounded-xl px-3 py-2 border border-primary/40 
        text-2xl shadow-lg bg-background/80"
    >
      💻
    </motion.div>
  </motion.div>

  {/* Lightning orbiting opposite */}
  <motion.div
    animate={{ rotate: -360 }}
    transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
    className="absolute inset-[-20px]"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 
        glass-card rounded-xl px-3 py-2 border border-primary/40 
        text-2xl shadow-lg bg-background/80"
    >
      ⚡
    </motion.div>
  </motion.div>

  {/* Profile Photo */}
  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 glass-card">
    <img src="/profile.png" alt="Amjad Ali" className="w-full h-full object-cover" />
  </div>

  {/* Floating Open to Work badge */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    className="absolute -bottom-8 -right-4 glass-card rounded-2xl px-4 py-2 text-sm font-bold border border-primary/20"
  >

  </motion.div>
</motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}