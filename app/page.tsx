import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Dynamically import heavy client components
const Hero = dynamic(() => import("@/components/hero").then(mod => mod.Hero), {
  ssr: true,
});

const Services = dynamic(() => import("@/components/services").then(mod => mod.Services), {
  ssr: true,
});

const InvestorSection = dynamic(() => import("@/components/investor-section").then(mod => mod.InvestorSection), {
  ssr: true,
});

const AppShowcase = dynamic(() => import("@/components/app-showcase").then(mod => mod.AppShowcase), {
  ssr: true,
});

const TrustSection = dynamic(() => import("@/components/trust-section").then(mod => mod.TrustSection), {
  ssr: true,
});

const Waitlist = dynamic(() => import("@/components/waitlist").then(mod => mod.Waitlist), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#030303]">
      <Navbar />
      <Suspense fallback={<div className="h-screen bg-[#030303]" />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-[#030303]" />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-[#030303]" />}>
        <InvestorSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-[#030303]" />}>
        <AppShowcase />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-[#030303]" />}>
        <TrustSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-[#030303]" />}>
        <Waitlist />
      </Suspense>
      
      <Footer />
    </main>
  );
}
