"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const appScreens = [
  {
    image: "/first.png",
    title: "Futuristic Utility Ecosystem",
    description: "Experience a premium launch feel with our unified fintech identity. Rechargic is more than an app; it's a complete digital universe.",
    tag: "Brand Identity"
  },
  {
    image: "/second.png",
    title: "All-in-One Dashboard",
    description: "Manage your entire recharge ecosystem from a single, intelligent interface. Seamless utility management designed for everyday convenience.",
    tag: "Smart Dashboard"
  },
  {
    image: "/third.png",
    title: "Seamless Transfers",
    description: "Fast wallet integration and intuitive payment flows. Move money across the ecosystem with unprecedented speed and simplicity.",
    tag: "Payment Flow"
  },
  {
    image: "/fourth.png",
    title: "Transparent Management",
    description: "Complete visibility into your wallet balance and transaction history. Tracking your digital finance has never been this intuitive.",
    tag: "Wallet Control"
  },
  {
    image: "/fifth.png",
    title: "Expanding Ecosystem",
    description: "A connected digital experience with multiple integrated services and partner integrations. Everything you need, all in one place.",
    tag: "Integrations"
  },
];

export function AppShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".app-slide");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: () => `+=${window.innerWidth * 5}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="overflow-hidden bg-[#030303]">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[600vw] flex flex-row relative">
          
          {/* Slide 0: Intro */}
          <div className="app-slide h-screen w-screen flex items-center justify-center p-4 sm:p-12 lg:p-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-noise opacity-[0.03]" />
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center px-6">
              <div className="text-center lg:text-left order-2 lg:order-1">
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-primary font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-6 block"
                >
                  The Product reveal
                </motion.span>
                <h2 className="text-3xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-8 text-white leading-[1.1] tracking-tight">
                  A New Era of <br />
                  <span className="text-primary">Ecosystem</span> UX.
                </h2>
                <p className="text-white/30 text-sm sm:text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Scroll to explore the high-fidelity interface of the Rechargic platform. 
                  Built for scale, designed for excellence.
                </p>
              </div>
              <div className="flex justify-center relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full" />
                <div className="w-[160px] sm:w-[220px] md:w-[280px] lg:w-[320px] h-[340px] sm:h-[460px] md:h-[580px] lg:h-[650px] bg-zinc-900 rounded-[2rem] sm:rounded-[3rem] border-4 border-white/5 p-2 sm:p-3 shadow-2xl relative z-10">
                  <div className="w-full h-full bg-zinc-950 rounded-[1.8rem] sm:rounded-[2.5rem] overflow-hidden flex items-center justify-center border border-white/5">
                     <Image 
                        src="/logo_symbol.png" 
                        alt="Rechargic" 
                        width={100} 
                        height={100} 
                        className="opacity-20 w-16 sm:w-24 h-auto"
                     />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slides 1-5: Application Screens */}
          {appScreens.map((screen, index) => (
            <div key={index} className="app-slide h-screen w-screen flex items-center justify-center p-4 sm:p-12 lg:p-24 border-l border-white/5 relative overflow-hidden bg-[#050505]">
              <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
              <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10 px-6">
                 
                 {/* Top/Right: Phone Frame with Real Screenshot */}
                 <div className="order-1 lg:order-2 flex justify-center mt-8 lg:mt-0">
                    <div className="relative group">
                      {/* Ambient Glow - Reduced blur */}
                      <div className="absolute -inset-6 bg-primary/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                      
                      <div className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-[380px] sm:h-[500px] md:h-[580px] lg:h-[680px] bg-zinc-900 rounded-[2rem] sm:rounded-[3rem] border-[4px] sm:border-[6px] border-[#1a1a1a] p-1.5 sm:p-2 shadow-2xl relative z-10 overflow-hidden">
                          {/* Screen Content */}
                          <div className="w-full h-full rounded-[1.6rem] sm:rounded-[2.5rem] overflow-hidden bg-black relative">
                              <Image 
                                src={screen.image}
                                alt={screen.title}
                                fill
                                sizes="(max-width: 768px) 180px, 320px"
                                className="object-cover"
                                priority={index === 0}
                                loading={index === 0 ? "eager" : "lazy"}
                              />
                              
                              {/* Screen Shine Effect */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                          </div>
                          
                          {/* Device Hardware Detail (Dynamic Island style) */}
                          <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-5 bg-black rounded-full z-20 border border-white/5" />
                      </div>
                    </div>
                 </div>

                 {/* Bottom/Left: Content */}
                 <div className="order-2 lg:order-1 text-center lg:text-left">
                    <span className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 bg-white/5 text-primary text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-4 sm:mb-6 lg:mb-8 inline-block">
                      {screen.tag}
                    </span>
                    <h3 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 text-white tracking-tight">
                      {screen.title}
                    </h3>
                    <p className="text-white/40 text-xs sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                      {screen.description}
                    </p>
                 </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
