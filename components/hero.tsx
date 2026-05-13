"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import Image from "next/image";

// Dynamically import heavy 3D scene
const HeroScene = dynamic(() => import("./hero-scene").then(mod => mod.HeroScene), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#030303]" />
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]">
      <HeroScene />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-[1]" />

      {/* Floating Brand Elements - Optimized */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] opacity-20 blur-sm pointer-events-none z-0 hidden lg:block will-change-transform"
      >
        <Image
          src="/logo_symbol.png"
          alt=""
          width={120}
          height={120}
          sizes="120px"
          className="h-auto"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] right-[12%] opacity-15 blur-md pointer-events-none z-0 hidden lg:block will-change-transform"
      >
        <Image
          src="/logo_symbol.png"
          alt=""
          width={200}
          height={200}
          priority
          sizes="200px"
          className="h-auto"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-sm">
            The Future of Fintech
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-[5.5rem] font-bold tracking-tight mb-8 leading-[1.1]"
        >
          <span className="text-white">The Future of</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">Seamless Utility.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/40 mb-12 leading-relaxed"
        >
          We are building the intelligent infrastructure for India's digital payments.
          A unified, AI-powered ecosystem designed to simplify your everyday recharges and bills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Magnetic>
            <Button size="lg" className="h-16 px-10 rounded-full bg-primary text-white hover:bg-primary/90 text-lg font-bold group shadow-[0_8px_30px_rgba(251,146,60,0.3)] border-t border-white/20">
              Get Early Access
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Magnetic>
          <Magnetic>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-full glass border-white/5 hover:bg-white/5 text-lg text-white/70">
              Explore Vision
            </Button>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover More</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>

      {/* Cinematic Lighting System - Optimized */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />
    </section>
  );
}
