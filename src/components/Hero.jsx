import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fortuner-hero.png"
          alt="Toyota Fortuner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/vk_logo.png"
            alt="VK Customs"
            className="h-16 md:h-20 lg:h-24 object-contain mx-auto mb-1 drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight">
            Cars you can <br />
            <span className="text-white italic">trust.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Carefully selected vehicles for every journey.
          </p>
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
