"use client";

import { motion } from "framer-motion";
import { 
  Smartphone, 
  Tv, 
  Zap, 
  Wifi, 
  Car, 
  Flame, 
  Droplets, 
  CreditCard,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Mobile Recharge",
    description: "Prepaid & Postpaid recharges for all major operators.",
    icon: Smartphone,
    color: "from-primary/20 to-accent/20",
    iconColor: "text-primary",
    size: "medium"
  },
  {
    title: "DTH Recharge",
    description: "All DTH connections at best prices.",
    icon: Tv,
    color: "from-accent/20 to-primary/20",
    iconColor: "text-accent",
    size: "small"
  },
  {
    title: "Electricity Bill",
    description: "Instant payments for all state boards.",
    icon: Zap,
    color: "from-primary/20 to-transparent",
    iconColor: "text-primary",
    size: "small"
  },
  {
    title: "Credit Card",
    description: "Secure credit card bill settlements.",
    icon: CreditCard,
    color: "from-accent/10 to-primary/10",
    iconColor: "text-accent",
    size: "medium"
  },
  {
    title: "Broadband",
    description: "Fiber & Wireless internet bills.",
    icon: Wifi,
    color: "from-accent/10 to-transparent",
    iconColor: "text-accent",
    size: "small"
  },
  {
    title: "LPG Gas",
    description: "Quick cylinder bookings.",
    icon: Flame,
    color: "from-accent/20 to-transparent",
    iconColor: "text-accent",
    size: "small"
  },
  {
    title: "FASTag",
    description: "Highway travel made seamless.",
    icon: Car,
    color: "from-primary/10 to-accent/10",
    iconColor: "text-primary",
    size: "medium"
  },
  {
    title: "Water Bill",
    description: "One-click municipal payments.",
    icon: Droplets,
    color: "from-primary/10 to-transparent",
    iconColor: "text-primary",
    size: "small"
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            One App. <span className="text-primary">Endless</span> Possibilities.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
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
                "group relative p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.05] rounded-3xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between min-h-[250px]",
                service.size === "medium" ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div>
                  <div className={cn(
                    "w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                    service.iconColor
                  )}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-white/50 group-hover:text-white/70 transition-colors leading-relaxed line-clamp-3">{service.description}</p>
                </div>
                
                <div className="mt-auto pt-6 flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Plus className="w-5 h-5 text-white/50 group-hover:text-white" />
                  </div>
                </div>
              </div>

              {/* Optimized radial glow */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
