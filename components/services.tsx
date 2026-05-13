"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    title: "Mobile Recharge",
    description: "Prepaid & Postpaid recharges for all major operators.",
    image: "/smartphone-3d.png",
    color: "from-primary/20 to-accent/20",
    size: "medium"
  },
  {
    title: "DTH Recharge",
    description: "All DTH connections at best prices.",
    image: "/dth.png",
    color: "from-accent/20 to-primary/20",
    size: "small",
    scale: "scale-125"
  },
  {
    title: "Electricity Bill",
    description: "Instant payments for all state boards.",
    image: "/electicity-bill.png",
    color: "from-primary/20 to-transparent",
    size: "small",
    scale: "scale-125"
  },
  {
    title: "Credit Card",
    description: "Secure credit card bill settlements.",
    image: "/creditcard-3d.png",
    color: "from-accent/10 to-primary/10",
    size: "medium"
  },
  {
    title: "Broadband",
    description: "Fiber & Wireless internet bills.",
    image: "/wifi-3d.png",
    color: "from-accent/10 to-transparent",
    size: "small"
  },
  {
    title: "LPG Gas",
    description: "Quick cylinder bookings.",
    image: "/lpg.png",
    color: "from-accent/20 to-transparent",
    size: "small",
    scale: "scale-125"
  },
  {
    title: "FASTag",
    description: "Highway travel made seamless.",
    image: "/fastag-car.png",
    color: "from-primary/10 to-accent/10",
    size: "medium"
  },
  {
    title: "Water Bill",
    description: "One-click municipal payments.",
    image: "/waterdrop-3d.png",
    color: "from-primary/10 to-transparent",
    size: "small"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            One App. <span className="text-primary italic">Endless</span> Possibilities.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto"
          >
            A smarter, more unified way to manage your daily utilities. We are creating the 
            ultimate digital hub for all your payment needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                "group relative p-6 md:p-8 bg-zinc-900/40 hover:bg-zinc-900/60 rounded-[40px] overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between min-h-[300px]",
                service.size === "medium" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1">
                  <div className="relative w-20 h-20 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      sizes="(max-width: 768px) 80px, 80px"
                      className={cn("object-contain", service.scale)}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-white/40 group-hover:text-white/60 transition-colors leading-relaxed line-clamp-2 text-sm">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end items-center">
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                      <Plus className="w-6 h-6 text-white/30 group-hover:text-white transition-colors" />
                   </div>
                </div>
              </div>

              {/* Cinematic Ambient Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 blur-[60px] rounded-full group-hover:bg-primary/10 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
