import React from 'react';
import { MapPin, Phone, Settings } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section className="w-full ">
      <div className="max-w-[1280px] mx-auto px-5 bg-[#1A0B2E]">
        <div className="grid grid-cols-1 gap-8 mt-20 text-center md:grid-cols-3 py-11">
          {/* Office Address */}
          <div className="flex flex-col items-center border-r-2">
            <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-[#EC0112]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Office Address</h3>
            <p className="text-white/80">
              1 Patricia Etteh Close, Wuye District Abuja
            </p>
          </div>

          {/* Make A Call */}
          <div className="flex flex-col items-center border-r-2">
            <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-[#EC0112]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Make A Call</h3>
            <a 
              href="tel:+2348034474677" 
              className="transition-colors text-white/80 hover:text-white"
            >
              +234 803 447 4677
            </a>
          </div>

          {/* 24/7 Supports */}
          <div className="flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-white flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-[#EC0112]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">24/7 Supports</h3>
            <a 
              href="mailto:contactswat.com.ng"
              className="transition-colors text-white/80 hover:text-white"
            >
              contactswat.com.ng
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

