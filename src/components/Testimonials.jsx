import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import customer1Img from '../assets/customer1.jpg';
import customer2Img from '../assets/customer2.jpg';

const reviews = [
  {
    id: 1,
    name: 'Vinoth Kumar',
    content: 'An incredible experience from start to finish. The team at VK Customs made sure the entire process of getting my new car was smooth, transparent, and completely stress-free. Highly recommended!',
    rating: 5,
    image: customer1Img
  },
  {
    id: 2,
    name: 'Sekar Ravi ',
    content: 'I could not be happier with my new vehicle. The team took the time to understand exactly what I wanted and delivered beyond my expectations. Truly a premium service!',
    rating: 5,
    image: customer2Img
  },


];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative border-t border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col justify-center items-center text-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black tracking-widest uppercase text-sm font-semibold mb-4">
              Client Experiences
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-black">
              Customer <span className="text-black">Reviews</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-white rounded-sm border border-black hover:border-black hover:shadow-lg transition-all duration-500 flex flex-col overflow-hidden"
            >
              {review.image && (
                <div className="w-full aspect-[9/16] overflow-hidden border-b border-black">
                  <img
                    src={review.image}
                    alt="Happy Customer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-black text-black" />
                    ))}
                  </div>

                  <p className="text-black font-light leading-relaxed mb-8 italic">
                    "{review.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-black pt-6 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-display font-semibold shrink-0 border border-black">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-black font-semibold font-display text-sm">{review.name}</h5>
                    <span className="text-black text-xs tracking-widest uppercase">{review.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
