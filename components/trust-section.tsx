"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Fingerprint, Eye } from "lucide-react";

const securityFeatures = [
  {
    title: "Military-Grade Encryption",
    description: "Your data is protected by AES-256 bit encryption, the highest standard in the industry.",
    icon: Shield,
  },
  {
    title: "Biometric Authentication",
    description: "Secure your transactions with FaceID, TouchID, or fingerprint scanning.",
    icon: Fingerprint,
  },
  {
    title: "Fraud Detection",
    description: "Our AI systems monitor every transaction in real-time to prevent suspicious activity.",
    icon: Eye,
  },
  {
    title: "Privacy First",
    description: "We never sell your data. Your privacy is our top priority and commitment.",
    icon: Lock,
  },
];

export function TrustSection() {
  return (
    <section id="security" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-8 border border-primary/20 shadow-[0_0_50px_rgba(251,146,60,0.1)]"
          >
            <Shield className="w-12 h-12 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Bank-Grade Security. <br />
            Total Peace of Mind.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl"
          >
            We take security seriously. Every transaction on Rechargic is protected by 
            multiple layers of advanced security protocols.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-8 md:p-12 bg-zinc-900/50 rounded-[40px] border border-white/5 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left relative z-10">
                <div>
                    <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">Built on Trust and Transparency.</h3>
                    <p className="text-white/40 mb-8 leading-relaxed text-lg">
                        Our platform is designed with reliability at its core. 
                        We are committed to building a transparent utility ecosystem where security and user privacy are never compromised.
                    </p>
                    <div className="flex gap-12">
                        <div>
                            <div className="text-3xl font-bold text-primary">Secure</div>
                            <div className="text-xs text-white/30 uppercase tracking-widest font-bold mt-1">Infrastructure</div>
                        </div>
                        <div className="w-px h-12 bg-white/10" />
                        <div>
                            <div className="text-3xl font-bold text-accent">99.9%</div>
                            <div className="text-xs text-white/30 uppercase tracking-widest font-bold mt-1">Uptime Goal</div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 max-w-sm shadow-xl">
                        <div className="text-primary font-bold mb-2">Our Commitment</div>
                        <p className="text-white/40 italic leading-relaxed text-sm">
                          "We believe in a future where digital recharges are effortless and secure. 
                          Our team is dedicated to building the most reliable utility platform in India."
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
