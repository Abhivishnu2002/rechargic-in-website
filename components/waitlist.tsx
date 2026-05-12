"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Send } from "lucide-react";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="container mx-auto px-6 text-center">
        <div className="relative p-12 md:p-24 bg-zinc-900 rounded-[50px] border border-white/5 overflow-hidden">
            {/* Background Glows - Optimized */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 blur-[100px] pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                Be Part of the <br />
                <span className="text-primary italic">Innovation</span>.
              </h2>
              <p className="text-white/40 text-lg md:text-xl mb-12 leading-relaxed">
                We are currently in private development. Join our exclusive waitlist to be among 
                the first to experience the next evolution of digital utility payments.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-2 shadow-[0_0_40px_rgba(251,146,60,0.2)]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">You're on the list!</h3>
                  <p className="text-white/40">We'll notify you as soon as early access begins.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email" 
                    className="flex-1 h-14 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <Button type="submit" size="lg" className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 font-bold whitespace-nowrap shadow-xl group">
                    Notify Me
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              )}
              
              <div className="mt-12 flex items-center justify-center gap-8 opacity-40">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs uppercase tracking-widest font-bold">Early Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs uppercase tracking-widest font-bold">Launch Rewards</span>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
