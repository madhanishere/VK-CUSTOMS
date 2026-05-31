import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-12 pb-24">
      {/* Background Image without filters or overlays to show exact image */}
      <div className="absolute inset-0 z-0 bg-black flex items-center justify-center">
        {/* Mobile Image (Portrait) */}
        <img
          src="/image copy.png"
          alt="VK Customs Fleet"
          className="w-full h-full object-contain md:hidden"
        />
        {/* Desktop Image (Landscape) */}
        <img
          src="/image.png"
          alt="VK Customs Fleet"
          className="hidden md:block w-full h-full object-contain"
        />
      </div>

      {/* Top Content: Logo */}
      <div className="relative z-10 w-full mt-4 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/vk_logo.png"
            alt="VK Customs"
            className="h-16 md:h-20 lg:h-24 object-contain mx-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
          />
        </motion.div>
      </div>

      {/* Bottom Content: Text and Buttons */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
            Cars you can trust.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#inventory" className="w-full sm:w-auto bg-white text-black px-8 py-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-300 uppercase tracking-widest text-sm font-medium group rounded-full">
            View Inventory
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto border border-white/30 text-white px-8 py-4 hover:bg-white/10 flex items-center justify-center transition-all duration-300 uppercase tracking-widest text-sm font-medium rounded-full">
            Contact Us
          </a>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
