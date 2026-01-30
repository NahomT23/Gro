"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Instagram, Linkedin, Facebook, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <footer id="contact" className="bg-accent text-white py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left pb-10 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Leaf className="w-6 h-6" />
                </motion.div>
                <span className="text-2xl font-bold">Gro Bulla</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-6">
                Nurturing the next generation with the ancient wisdom and natural purity of Southern Ethiopia.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {[
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { icon: Mail, href: "mailto:hello@grobulla.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a 
                    key={social.label}
                    href={social. href} 
                   target={social.label !== "Email" ? "_blank" : undefined}
                    rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.3, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:text-white/90" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-bold mb-4 md:mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 md:space-y-4 text-white/70">
                {["Our Story", "Nutrient Science", "Safety First", "Retail Locations"].map((link, index) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                  >
                    <a 
                      href={link === "Our Story" ? "#story" : link === "Nutrient Science" ? "#nutrients" : "#"} 
                      className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-bold mb-4 md:mb-6 text-lg uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-3 md:space-y-4 text-white/70">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  <a href="mailto:hello@grobulla.com" className="hover:text-white transition-colors">
                    hello@grobulla.com
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <a href="tel:+251900000000" className="hover:text-white transition-colors">
                    +251 900 000 000
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  Addis Ababa, Ethiopia
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm"
          >
            <p className="text-center md:text-left">&copy; 2026 Gro Bulla. All rights reserved.</p>
            <div className="flex items-center gap-2">
              Made with <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><Heart className="w-4 h-4 text-red-400 fill-red-400" /></motion.div> for the kids of the world.
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
