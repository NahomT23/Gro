"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function BullaStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square md:aspect-auto md:h-[600px]"
          >
            <Image
              src="/images/bowl.png"
              alt="Traditional Bulla Bowl"
              fill
              className="object-cover"
            />
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8"
            >
              <p className="text-white text-base md:text-lg font-medium italic">
                &quot;A tradition of wellness, carefully refined for today&apos;s growing heroes.&quot;
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight"
            >
              The Secret of the <span className="text-accent">&quot;False Banana&quot;</span>
            </motion.h2>
            
            <div className="space-y-5 md:space-y-6 text-base md:text-lg text-foreground/70 leading-relaxed">
              <motion.p>
                Bulla is a traditional Ethiopian food made from the enset plant, often called the &quot;false banana.&quot; It is a naturally derived, finely milled white starch that provides gentle, long-lasting energy and is easy to digest.
              </motion.p>
              <motion.p>
                Free from artificial additives and deeply rooted in traditional food practices of Southern Ethiopia, bulla is a simple, natural foundation—carefully enhanced to support healthy, happy kids.
              </motion.p>
              <motion.p 

                className="bg-primary/10 border-l-4 border-primary p-5 md:p-6 rounded-r-2xl italic text-foreground"
              >
                Our Bulla is fortified with essential vitamins and minerals, ensuring that every spoonful contributes to your child&apos;s physical and cognitive development.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 md:mt-10 grid grid-cols-2 gap-4 md:gap-6"
            >
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xl md:text-2xl font-bold text-accent mb-1">100%</p>
                <p className="text-xs md:text-sm font-medium text-foreground/60 uppercase tracking-wider">All Natural</p>
              </motion.div>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xl md:text-2xl font-bold text-accent mb-1">Southern</p>
                <p className="text-xs md:text-sm font-medium text-foreground/60 uppercase tracking-wider">Ethiopian Sourced</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
