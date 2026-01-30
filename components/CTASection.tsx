"use client";

import { motion } from "framer-motion";
import { Leaf, Heart, Instagram, Linkedin, Facebook, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <footer id="contact" className="bg-accent text-white py-16 md:py-20 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-left pb-10 md:pb-12">
            <div>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Leaf className="w-6 h-6" />
                <span className="text-2xl font-bold">Gro Bulla</span>
              </div>
              <p className="text-white/60 leading-relaxed mb-6">
                Nurturing the next generation with the ancient wisdom and natural purity of Southern Ethiopia.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:text-white/90" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:text-white/90" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:text-white/90" />
                </a>
                <a 
                  href="mailto:hello@grobulla.com"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all hover:scale-110 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:text-white/90" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-lg uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-3 md:space-y-4 text-white/70">
                <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#nutrients" className="hover:text-white transition-colors">Nutrient Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety First</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Retail Locations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-lg uppercase tracking-wider">Contact Us</h4>
              <ul className="space-y-3 md:space-y-4 text-white/70">
                <li>
                  <a href="mailto:hello@grobulla.com" className="hover:text-white transition-colors">
                    hello@grobulla.com
                  </a>
                </li>
                <li>
                  <a href="tel:+251900000000" className="hover:text-white transition-colors">
                    +251 900 000 000
                  </a>
                </li>
                <li>Addis Ababa, Ethiopia</li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
            <p className="text-center md:text-left">&copy; 2026 Gro Bulla. All rights reserved.</p>
            <div className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-400 fill-red-400" /> for the kids of the world.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
