"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Investors", href: "/#investors" },
  { name: "Security", href: "/#security" },
  { name: "Waitlist", href: "/#waitlist" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const width = useTransform(scrollY, [0, 50], ["100%", "92%"]);
  const translateY = useTransform(scrollY, [0, 50], [0, 16]);
  const borderRadius = useTransform(scrollY, [0, 50], [0, 24]);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", updateScrolled);
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <>
      <motion.header
        style={{
          width: isOpen ? "100%" : width,
          translateY: isOpen ? 0 : translateY,
          borderRadius: isOpen ? 0 : borderRadius,
        }}
        className={cn(
          "fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500",
          isScrolled || isOpen ? "glass-dark py-2 border-primary/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "bg-transparent py-6 border-transparent"
        )}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center group" onClick={() => setIsOpen(false)}>
            <div className="relative w-32 md:w-48 h-12 flex items-center justify-start transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo.png" 
                alt="Rechargic Logo" 
                width={180} 
                height={45} 
                className="object-contain object-left h-auto"
                priority
                sizes="180px"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/50 hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex text-white/50 hover:text-white hover:bg-white/5">
              Login
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-[0_4px_20px_rgba(251,146,60,0.2)] hover:shadow-[0_4px_25px_rgba(251,146,60,0.4)] transition-all duration-300">
              Join Waitlist
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden pt-24 bg-[#030303]/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-bold text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/5 my-4" />
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full h-14 rounded-full glass border-white/5 text-lg">
                  Login
                </Button>
                <Button className="w-full h-14 rounded-full bg-primary text-white text-lg font-bold">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
