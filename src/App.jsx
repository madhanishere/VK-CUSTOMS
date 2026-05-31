import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedInventory from './components/FeaturedInventory';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <FeaturedInventory />
        <Services />

      </main>
      <Footer />
    </div>
  );
}

export default App;
