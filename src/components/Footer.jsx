import React from 'react';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">

          <a href="tel:+917358055680" className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors cursor-pointer group">
            <Phone size={18} className="text-white group-hover:text-white/70 transition-colors" />
            <span>+91 73580 55680</span>
          </a>

          <a href="https://wa.me/917358055680" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors cursor-pointer group">
            <MessageCircle size={18} className="text-white group-hover:text-white/70 transition-colors" />
            <span>WhatsApp Us</span>
          </a>

          <a href="https://www.instagram.com/vk_customs__/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors cursor-pointer group">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-white/70 transition-colors">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span>@vk_customs__</span>
          </a>

          <div className="flex items-center gap-3 text-white text-sm hover:text-white/70 transition-colors cursor-pointer group">
            <MapPin size={18} className="text-white group-hover:text-white/70 transition-colors" />
            <span>Chennai, Tamil Nadu</span>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white text-xs font-light tracking-widest uppercase">
            &copy; {new Date().getFullYear()} VK Customs. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
