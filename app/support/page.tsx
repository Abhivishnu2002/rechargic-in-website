"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Landmark, MessageSquare } from "lucide-react";

export default function SupportPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending your message...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "be9b8a62-8353-4de0-be88-98a3e589a211");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully! We will get back to you within 24-48 hours.");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Failed to connect to the server. Please check your internet connection.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-white">
      <Navbar />

      {/* Main Section */}
      <section className="relative pt-36 pb-24 overflow-hidden flex-1">
        {/* Glow Backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 blur-[110px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              How can we <span className="text-primary italic">help</span> you?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/40 text-lg max-w-xl mx-auto"
            >
              Have a query regarding a transaction, payment refund, or account configuration? Get in touch with our support desk.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Support Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 space-y-8">
                <h3 className="text-2xl font-bold text-white mb-2">Support Directory</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white/30 mb-1">Email Support</p>
                    <a href="mailto:support@rechargic.in" className="text-white hover:text-primary transition-colors text-base font-medium">
                      support@rechargic.in
                    </a>
                    <p className="text-xs text-white/40 mt-1">Average response time: 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white/30 mb-1">Corporate Office</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      IGNIVOX TECH PRIVATE LIMITED<br />
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-white/30 mb-1">Response Guarantee</p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Every ticket is tracked and resolved. Rest assured that our engineering team will address any transaction discrepancy.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="p-8 md:p-10 rounded-3xl glass-dark shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative">
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-white/80">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-white/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>

                  {/* Issue Type Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="issue" className="text-sm font-semibold text-white/80">
                      Issue Category
                    </label>
                    <div className="relative">
                      <select
                        id="issue"
                        name="subject"
                        required
                        defaultValue=""
                        className="w-full h-14 px-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-zinc-950 text-white/20">
                          Select an issue category
                        </option>
                        <option value="Transaction Failure" className="bg-zinc-950">
                          Transaction Failure (Debited but not recharge completed)
                        </option>
                        <option value="Refund Request" className="bg-zinc-950">
                          Refund Status Inquiry
                        </option>
                        <option value="Account Issue" className="bg-zinc-950">
                          Account Profile & Security Issue
                        </option>
                        <option value="Business Inquiry" className="bg-zinc-950">
                          Business Partnership / Integration
                        </option>
                        <option value="General Support" className="bg-zinc-950">
                          General Feedback & Other Issues
                        </option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-white/80">
                      Detailed Description
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please provide details about your issue, including transaction ID if applicable..."
                      className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-14 rounded-2xl bg-primary text-white hover:bg-primary/90 font-bold shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Submit Ticket
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status !== "idle" && status !== "sending" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className={`mt-6 p-5 rounded-2xl flex items-start gap-3 text-sm border ${
                        status === "success"
                          ? "bg-emerald-950/30 border-emerald-500/20 text-emerald-400"
                          : "bg-rose-950/30 border-rose-500/20 text-rose-400"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-semibold mb-1">
                          {status === "success" ? "Message Received" : "Submission Failed"}
                        </p>
                        <p className="opacity-90">{statusMessage}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
