import React, { useState } from "react";
import NavLogo from "../../Assets/Images/navbar.png";
import MoonIcon from "../../Assets/Icons/moon.png";
import "./navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-50 shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 lg:w-[90%] flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <img src={NavLogo} alt="Nav logo" className="w-full h-full  " />
          {/* <span className="text-red-600">sw</span>at
          <p className="text-xs font-normal text-gray-500">
            Strategy Worth and Technology
          </p> */}
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a
            href="#home"
            className="font-jost font-bold text-nav leading-nav  hover:text-gray-900"
          >
            Home
          </a>
          <a
            href="#strategy"
            className="font-jost font-bold text-nav leading-nav  hover:text-gray-900"
          >
            Strategy
          </a>
          <a
            href="#technology"
            className="font-jost font-bold text-nav leading-nav  hover:text-gray-900"
          >
            Technology
          </a>
          <a
            href="#about"
            className="font-jost font-bold text-nav leading-nav  hover:text-gray-900"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-jost font-bold text-nav leading-nav  hover:text-gray-900"
          >
            Contact
          </a>

          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-white px-6 py-2 rounded-lg shadow hover:opacity-90 font-jost font-bold text-sm leading-9"
              style={{
                background:
                  "linear-gradient(91.55deg, #673AB7 45%, #4E415D 45%, #382550 75%, #EC0112 100%)",
              }}
            >
              Hire Us
            </button>
            <button className= " px-4 py-4 rounded-full text-gray-700 hover:text-gray-900" style={{
                background:
                  "linear-gradient(91.55deg, #673AB7 45%, #4E415D 45%, #382550 75%, #EC0112 100%)",
              }}><img src={MoonIcon} alt="moon icon" className="w-[18px] h-[18px]  " /></button>
          </div>
        </nav>

        {/* Buttons */}

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-900 text-2xl p-2 rounded-lg border border-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <a
            href="#home"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#strategy"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Strategy
          </a>
          <a
            href="#technology"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Technology
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Contact
          </a>
          <div className="flex items-center px-4 py-2">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90">
              Hire Us
            </button>
            <button className="ml-4 text-gray-700 hover:text-gray-900">
              🌙
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
