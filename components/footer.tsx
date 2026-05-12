"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#" },
      { name: "Services", href: "#services" },
      { name: "Security", href: "#security" },
      { name: "Waitlist", href: "#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-8 group">
              <div className="relative w-56 h-14 flex items-center justify-start transition-transform duration-500 group-hover:scale-105">
                <Image 
                  src="/logo.png" 
                  alt="Rechargic Logo" 
                  width={220} 
                  height={55} 
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-white/30 text-lg max-w-sm mb-8 leading-relaxed">
              Engineering the intelligent infrastructure for India's digital utility ecosystem. 
              Built for simplicity, designed for the future.
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-bold mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-white/40 hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-sm">
            © 2026 Rechargic Inc. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-white/20">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
