"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BullaStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[600px]"
          >
            <Image
              src="/images/bowl.png"
              alt="Traditional Bulla Bowl"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8">
              <p className="text-white text-base md:text-lg font-medium italic">
                &quot;A tradition of wellness, carefully refined for today&apos;s growing heroes.&quot;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight">
              The Secret of the <span className="text-accent">&quot;False Banana&quot;</span>
            </h2>
            
            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-foreground/70 leading-relaxed">
              <p>
                Bulla is a traditional Ethiopian food made from the enset plant, often called the "false banana." It is a naturally derived, finely milled white starch that provides gentle, long-lasting energy and is easy to digest.
              </p>
              <p>
                Free from artificial additives and deeply rooted in traditional food practices of Southern Ethiopia, bulla is a simple, natural foundation—carefully enhanced to support healthy, happy kids.
              </p>
              <p className="bg-primary/10 border-l-4 border-primary p-5 md:p-6 rounded-r-2xl italic text-foreground">
                Our Bulla is fortified with essential vitamins and minerals, ensuring that every spoonful contributes to your child&apos;s physical and cognitive development.
              </p>
            </div>

            <div className="mt-8 md:mt-10 grid grid-cols-2 gap-4 md:gap-6">
              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-xl md:text-2xl font-bold text-accent mb-1">100%</p>
                <p className="text-xs md:text-sm font-medium text-foreground/60 uppercase tracking-wider">All Natural</p>
              </div>
              <div className="p-4 rounded-2xl bg-background border border-border">
                <p className="text-xl md:text-2xl font-bold text-accent mb-1">Southern</p>
                <p className="text-xs md:text-sm font-medium text-foreground/60 uppercase tracking-wider">Ethiopian Sourced</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
