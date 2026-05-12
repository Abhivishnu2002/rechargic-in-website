"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Market Opportunity", value: "$50B+", icon: TrendingUp },
  { label: "Architecture", value: "Cloud-Native", icon: Globe },
  { label: "Security Level", value: "Enterprise", icon: ShieldCheck },
  { label: "Execution Goal", value: "< 1.0s", icon: Zap },
];

export function InvestorSection() {
  return (
    <section id="investors" className="py-24 relative bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-white">
                Designing the <br />
                <span className="text-primary italic">Architecture</span> of Choice.
              </h2>
              <p className="text-white/40 text-lg mb-12 leading-relaxed">
                Rechargic is engineering the core infrastructure for the next generation of digital payments. 
                Our focus is on creating a scalable, intelligent ecosystem that prioritizes reliability, 
                user experience, and seamless integration with modern financial tools.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="p-6 glass-dark rounded-3xl border border-white/5 hover:border-primary/20 transition-colors group"
                  >
                    <stat.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/30 uppercase tracking-[0.2em]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-square bg-zinc-900/50 rounded-[50px] border border-white/5 flex items-center justify-center overflow-hidden shadow-2xl"
            >
              {/* Animated brand visual - Simplified */}
              <div className="w-full h-full relative flex items-center justify-center">
                 <div className="absolute w-[80%] h-[80%] border border-primary/5 rounded-full animate-[spin_40s_linear_infinite]" />
                 <div className="absolute w-32 h-32 bg-primary/10 blur-[60px] rounded-full" />
                 
                 <motion.div
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                   <Image 
                    src="/logo_symbol.png" 
                    alt="Rechargic Symbol" 
                    width={140} 
                    height={140} 
                    className="relative z-10 opacity-80"
                   />
                 </motion.div>
              </div>
            </motion.div>
            
            {/* Overlay Info Card - Optimized */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-zinc-900 p-6 rounded-3xl border border-white/10 shadow-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Platform</div>
                  <div className="text-lg font-bold text-white">Infinite Scale</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
