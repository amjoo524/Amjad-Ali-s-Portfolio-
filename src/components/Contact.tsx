import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Terminal, Link as LinkIcon, MessageSquare, Send } from "lucide-react";
import { Button } from "../components/Ui/button";
import { Input } from "../components/Ui/input";
import { Textarea } from "../components/Ui/textarea";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_fbheojd",
        "template_0b9z6j3",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "Sz5Y2OaO2EuXcgNMr"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong, try again!");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-10 md:p-20 flex flex-col md:flex-row gap-16 relative overflow-hidden"
        >
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
              <a href="mailto:sahkoo524@gmail.com" className="flex items-center gap-5 group w-fit">
                <div className="w-14 h-14 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
                  <Mail className="group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg font-mono font-medium tracking-tight">sahkoo524@gmail.com</span>
              </a>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Terminal, href: "https://github.com/amjoo524/Amjad-Ali-s-Portfolio-" },
                  { icon: LinkIcon, href: "https://linkedin.com" },
                  { icon: MessageSquare, href: "https://wa.me/923408783209" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 hover:scale-110 active:scale-95 transition-all duration-300"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/5 border-white/10 h-14 rounded-xl px-5 focus-visible:ring-primary focus-visible:border-primary/50 transition-all font-medium"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/5 border-white/10 h-14 rounded-xl px-5 focus-visible:ring-primary focus-visible:border-primary/50 transition-all font-medium"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/5 border-white/10 rounded-xl px-5 pt-4 focus-visible:ring-primary focus-visible:border-primary/50 transition-all font-medium min-h-[160px] resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
             <Button
  type="submit"
  disabled={loading}
  className="relative w-full h-16 rounded-xl font-bold text-lg gap-3 group overflow-hidden
    bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%_100%]
    hover:bg-right-bottom transition-all duration-500
    shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.7)]
    hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
>
  {/* Shine effect */}
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

  {loading ? (
    <span className="flex items-center gap-3">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
      </svg>
      Sending...
    </span>
  ) : sent ? (
    <span className="flex items-center gap-3">
      <span className="text-xl">✅</span>
      Message Sent!
    </span>
  ) : (
    <span className="flex items-center gap-3">
      Send Message
      <Send
        size={20}
        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
      />
    </span>
  )}
</Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}