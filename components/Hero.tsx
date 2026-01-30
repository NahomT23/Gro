"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-20 pb-12 md:pb-0 overflow-hidden bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_50%)]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent tracking-wide uppercase">
              Purely Southern Ethiopian?
            </span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Fueling <span className="text-accent underline decoration-primary decoration-4 underline-offset-8">Happy</span> Growth with Bulla
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 mb-8 md:mb-10 leading-relaxed max-w-xl">
            From the heart of the &quot;False Banana&quot; plant comes a nutrient-fortified breakfast foundation that&apos;s all-natural, easy to digest, and loved by kids.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10 md:mb-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 group">
              Start Your Morning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-white/90 text-foreground border border-border px-8 py-4 rounded-2xl font-bold text-base md:text-lg transition-all text-center">
              Explore Benefits
            </button>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden relative">
                  <Image 
                    src={i === 1 ? "/images/avatars/mixed_1.png" : i === 2 ? "/images/avatars/mixed_2.png" : i === 3 ? "/images/avatars/african_1.png" : "/images/avatars/mixed_3.png"} 
                    alt={`happy child ${i}`} 
                    fill 
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm font-medium text-foreground/60">
              <span className="text-foreground font-bold">500+</span> Happy Families and counting!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center mt-6 md:mt-0"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
          <div className="relative w-full max-w-[500px] aspect-square rounded-[3rem] bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden group">
            <Image
              src="/images/packageImage.png"
              alt="Gro Bulla Package"
              fill
              className="object-contain p-6 md:p-8 group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
          
          {/* Dynamic Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 md:-top-6 -right-4 md:-right-6 bg-white shadow-xl p-3 md:p-4 rounded-2xl border border-border"
          >
            <p className="text-accent font-bold text-center leading-tight text-sm md:text-base">100%<br/><span className="text-xs text-foreground/60 font-medium">All Natural</span></p>
          </motion.div>
          
          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white shadow-xl p-3 md:p-4 rounded-2xl border border-border"
          >
            <p className="text-primary font-bold text-center leading-tight text-sm md:text-base">Fortified<br/><span className="text-xs text-foreground/60 font-medium">With Iron</span></p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Leaves */}
      <div className="absolute top-1/4 -right-20 opacity-10 rotate-45 -z-10 pointer-events-none hidden md:block">
        <Leaf className="w-80 h-80 text-accent" />
      </div>
    </section>
  );
}
