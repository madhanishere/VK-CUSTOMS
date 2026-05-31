import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden pb-12 md:pb-24">
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
      <div className="absolute top-28 md:top-24 w-full z-20">
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

      {/* Center Content: Heading ONLY */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pointer-events-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Cars you can <span className="italic"><br />Trust.</span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom Content: Paragraph and Buttons (Positioned below the cars) */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto w-full mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-200 text-lg md:text-3xl max-w-2xl mx-auto mb-8 font-display drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Carefully selected vehicles for every journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#inventory" className="w-full sm:w-auto bg-white text-black px-6 py-3 sm:px-8 sm:py-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm font-medium group rounded-full">
            View Inventory
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto border border-white/30 text-white px-6 py-3 sm:px-8 sm:py-4 hover:bg-white/10 flex items-center justify-center transition-all duration-300 uppercase tracking-widest text-xs sm:text-sm font-medium rounded-full">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
