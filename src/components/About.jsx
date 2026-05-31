import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative border-t border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 items-center text-center"
          >
            <h2 className="text-black tracking-widest uppercase text-sm font-semibold mb-2">
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-black mb-6 leading-tight">
              About <span className="text-black">VK Customs</span>
            </h3>

            <div className="space-y-4 text-black font-light leading-normal text-base md:text-lg text-justify mt-4 max-w-3xl mx-auto">
              <p>
                VK Customs wasn't built in a boardroom. It started with two friends, a shared love for cars, and countless conversations that began with,
              </p>

              <blockquote className="text-center py-4 my-4 ">
                <p className="text-xl md:text-2xl font-display italic text-black font-medium tracking-wide">
                  "Vaa macha, poi oru car paathutu varalam."
                </p>
              </blockquote>

              <p>
                What began as a passion soon became a purpose.
              </p>
              <p>
                After completing our bachelor's degrees, we decided to build something of our own — a business founded on trust, hard work, and genuine relationships. As car enthusiasts, we've always believed that a vehicle is more than just transportation. It's someone's first dream car, a family's next upgrade, or the reward for years of hard work.
              </p>
              <p>
                That's why quality comes first at VK Customs.
              </p>

              <p>
                We believe buying a car should feel like getting advice from a trusted friend.
              </p>

              <blockquote className="text-center py-4 my-4 ">
                <p className="text-xl md:text-2xl font-display italic text-black font-medium tracking-wide">
                  "Macha, indha car nalla iruku. Nambikkaiya vaangalam."
                </p>
              </blockquote>

              <p>
                Today, VK Customs is driven by the same values that started it all — passion for cars, commitment to quality, and a desire to help every customer drive home with confidence.
              </p>
              <p>
                Because at VK Customs, we're not just selling cars.
              </p>
              <p className="text-center font-display font-semibold text-black text-2xl mt-8 py-8 my-4 border-y border-black">
                We're building trust, one vehicle at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
