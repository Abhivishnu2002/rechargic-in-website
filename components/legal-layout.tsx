"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalLayout({ title, subtitle, lastUpdated, sections }: LegalLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden border-b border-white/5">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 group text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
              {subtitle}
            </p>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative bg-[#030303]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 scrollbar-thin">
                <p className="text-xs uppercase tracking-widest font-bold text-white/30 mb-6 px-3">
                  Table of Contents
                </p>
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium border ${
                      activeSection === section.id
                        ? "bg-primary/10 border-primary/20 text-primary shadow-[0_0_20px_rgba(251,146,60,0.05)]"
                        : "border-transparent text-white/40 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-8 space-y-16">
              {sections.map((section) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-32 group"
                >
                  <h2 className="text-2xl font-bold mb-6 text-white group-hover:text-primary transition-colors flex items-center gap-3">
                    <span className="text-primary/40 group-hover:text-primary transition-colors font-mono text-sm font-normal">
                      #
                    </span>
                    {section.title}
                  </h2>
                  <div className="text-white/60 leading-relaxed space-y-6 text-base max-w-none">
                    {section.content}
                  </div>
                </motion.div>
              ))}
            </main>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
