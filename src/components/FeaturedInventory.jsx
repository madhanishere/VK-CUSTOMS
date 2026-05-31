import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

const cars = [
  {
    id: 1,
    make: 'Honda',
    model: 'Civic Type R',
    year: '2023',
    price: 'On Request',
    images: ['/civic_1.jpg', '/civic_2.jpg', '/civic_3.jpg', '/civic_4.jpg'],
    status: 'available'
  },
  {
    id: 2,
    make: 'Mitsubishi',
    model: 'Lancer Evolution X',
    year: '2015',
    price: '₹ 1.5 Lakhs',
    image: '/lancer.png',
    status: 'sold_out'
  },
  {
    id: 3,
    make: 'Toyota',
    model: 'Innova Crysta',
    year: '2024',
    price: '₹ 3 Lakhs',
    image: '/innova.png',
    status: 'sold_out'
  }
];

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full group/slider overflow-hidden bg-black">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-sm opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-white text-black z-30"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-sm opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-white text-black z-30"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const FeaturedInventory = () => {
  return (
    <section id="inventory" className="py-24 bg-white relative border-t border-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 relative">
          {/* Ambient glow behind title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-black/5 blur-[100px] rounded-full pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-black tracking-widest uppercase text-sm font-semibold mb-4">
              Curated Collection
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-black relative z-10">
              Featured <span className="text-black">Inventory</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`group cursor-pointer bg-white rounded-sm overflow-hidden border transition-all duration-500 relative ${car.status === 'sold_out' ? 'border-black opacity-80 grayscale-[50%]' : 'border-black hover:border-black hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2'
                }`}
            >
              <div className="relative h-64 overflow-hidden">
                {car.images ? (
                  <ImageSlider images={car.images} />
                ) : (
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                )}

                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 text-xs text-white uppercase tracking-wider rounded-sm border border-white/10 z-10 pointer-events-none">
                  {car.year}
                </div>
                {car.status === 'sold_out' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20 pointer-events-none">
                    <div className="bg-red-600/90 text-white font-display font-bold tracking-widest uppercase px-6 py-2 border border-red-500 transform -rotate-12">
                      Sold Out
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                <h4 className="text-black text-sm uppercase tracking-widest mb-2">{car.make}</h4>
                <h5 className="text-2xl font-display font-semibold text-black mb-4">{car.model}</h5>

                <div className="flex flex-wrap gap-2 mb-6">
                  {car.specs && car.specs.map((spec, i) => (
                    <span key={i} className="text-xs text-black bg-white px-2 py-1 rounded-sm border border-black">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center border-t border-black pt-6 mt-6">
                  <span className={`font-display text-xl text-black font-medium`}>{car.price}</span>
                  {car.status === 'sold_out' ? (
                    <span className="w-10 h-10 rounded-full border border-black flex items-center justify-center transition-all duration-300 text-black">
                      <ArrowUpRight size={18} />
                    </span>
                  ) : (
                    <a href="#contact" className="inline-block bg-black text-white px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-gray-800 transition-all duration-300 rounded-sm font-semibold shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]">
                      Contact Now
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
