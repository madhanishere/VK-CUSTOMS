import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Tag, ShieldCheck, FileSignature } from 'lucide-react';

const reasons = [
  {
    icon: <FileText size={32} strokeWidth={1.5} />,
    title: 'Genuine Documentation',
    description: 'Every vehicle comes with fully verified, transparent, and legally sound paperwork.'
  },
  {
    icon: <Tag size={32} strokeWidth={1.5} />,
    title: 'Fair Pricing',
    description: 'No hidden fees or exorbitant markups—just honest, highly competitive market value.'
  },
  {
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    title: 'Quality Checked Vehicles',
    description: 'Rigorous multi-point mechanical inspections ensure peak condition and total reliability.'
  },
  {
    icon: <FileSignature size={32} strokeWidth={1.5} />,
    title: 'Ownership Transfer Support',
    description: 'We handle all the complex paperwork for a seamless and completely stress-free handover.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative border-y border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black tracking-widest uppercase text-sm font-semibold mb-4">
              The VK Promise
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-black max-w-2xl mx-auto">
              Why Buy <span className="italic text-black">From Us?</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 bg-white border border-black hover:border-black hover:shadow-lg transition-all duration-500"
            >
              <div className="text-black mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-sm border border-black group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                {reason.icon}
              </div>
              <h4 className="text-xl font-display font-semibold text-black mb-4">{reason.title}</h4>
              <p className="text-black text-sm leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
