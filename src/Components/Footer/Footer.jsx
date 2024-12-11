import React from "react";
import swat from "../../Assets/Images/Swat.png";
import { GoTriangleRight } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="py-10 text-white bg-[#673AB7] w-full lg:h-[469px]">
      <div className="container px-6 mx-auto  lg:w-[1440px] pt-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-4" >
          {/* Logo and About Section */}
          <div className="col-span-1 w-[110%]">
            <div className="mb-4">
              <img src={swat} alt="SWAT Logo" className="h-[70px] w-[166.26px]" />
            </div>
            <p className="text-[13px] text-start font-light leading-5 font-jost ">
              We've been a Strategy and Technology service <br/> provider for nearly
              two decades, and we bring <br/> unrivaled capabilities to provide
              specialized expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="font-sanss lg:ml-12">
            <h4 className="mb-4 text-lg font-semibold ">Quick Links</h4>
            <ul className="space-y-2 font-normal text-[15px] leading-8 text-white opacity-[83%]">
              {[
                { label: "Homepage", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label} className="flex items-center">
                  <span className="mr-2">
                    <GoTriangleRight/>
                  </span>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Consulting Services */}
          <div className="font-sanss">
            <h4 className="mb-4 text-lg font-semibold">Consulting Service</h4>
            <ul className="space-y-2 font-normal text-[15px] leading-8 text-white opacity-[83%]">
              {[
                "Strategic Planning",
                "Process Optimization",
                "Market Research",
                "Business Analysis",
                "Change Management",
              ].map((service) => (
                <li key={service} className="flex items-center">
                  <span className="mr-2">
                  <GoTriangleRight/>
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address and Contact */}
          <div className="font-sanss">
            <h4 className="mb-4 text-lg font-semibold">Head Office Address</h4>
            <p className="font-normal text-[15px] leading-[22.5px] text-white opacity-[83%] mb-4">
              Apo Urban Market, Apo Resettlement Apo, FCT Abuja
            </p>
            <h4 className="mb-2 text-lg font-semibold">Contact Details</h4>
            <p className="font-normal text-[15px] leading-[22.5px] text-white opacity-[83%]">+2348034474677</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 mb-10 border-t border-gray-400"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between text-sm lg:flex-row">
          <p className="text-center lg:text-left">
            All Rights Reserved – Aided Designrr 2024 (C)
          </p>
          <div className="flex mt-4 space-x-4 lg:mt-0">
            <a
              href="#"
              className="text-lg hover:text-gray-300"
              aria-label="Facebook"
            >
              <FaFacebook/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-gray-300"
              aria-label="Twitter"
            >
              <FaTwitter/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-gray-300"
              aria-label="YouTube"
            >
             
             <FaYoutube/>
            </a>
            <a
              href="#"
              className="text-lg hover:text-gray-300"
              aria-label="Pinterest"
            >
              <FaPinterest/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
