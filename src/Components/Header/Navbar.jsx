import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "../../Assets/Images/navbar.svg";
import MoonIcon from "../../Assets/Icons/moon.png";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-gray-50">
      <div className="flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-[1280px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <img src={NavLogo} alt="Nav logo" className="w-full h-full " />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden space-x-6 text-gray-700 md:flex">
          <Link
            to="/"
            className={`font-bold font-jost text-nav leading-nav hover:text-gray-900 ${
              location.pathname === "/" ? "text-red-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/strategy"
            className={`font-bold font-jost text-nav leading-nav hover:text-gray-900 ${
              location.pathname === "/strategy" ? "text-red-600" : ""
            }`}
          >
            Strategy
          </Link>
          <Link
            to="/technology"
            className={`font-bold font-jost text-nav leading-nav hover:text-gray-900 ${
              location.pathname === "/technology" ? "text-red-600" : ""
            }`}
          >
            Technology
          </Link>
          <Link
            to="/aboutus"
            className={`font-bold font-jost text-nav leading-nav hover:text-gray-900 ${
              location.pathname === "/aboutus" ? "text-red-600" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contactus"
            className={`font-bold font-jost text-nav leading-nav hover:text-gray-900 ${
              location.pathname === "/contactus" ? "text-red-600" : ""
            }`}
          >
            Contact
          </Link>

          <div className="items-center hidden space-x-4 md:flex">
            <button
              className="text-white px-6 py-[1.5px] rounded-lg shadow hover:opacity-90 font-jost font-bold text-sm leading-9"
              style={{
                background:
                  "linear-gradient(91.55deg, #150529 45%,  #4E415D 45%, #382550 75%, #EC0112 100%)",
              }}
            >
              HIRE US
            </button>
            <button
              className="px-[9px] py-[9px] rounded-full text-gray-700 hover:text-gray-900"
              style={{
                background:
                  "linear-gradient(91.55deg, #150529 45%, #4E415D 45%, #382550 75%, #EC0112 100%)",
              }}
            >
              <img src={MoonIcon} alt="moon icon" className="w-[18px] h-[18px]" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="p-2 text-2xl text-gray-700 rounded-lg md:hidden hover:text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="bg-white shadow-md md:hidden">
          <Link
            to="/"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === "/" ? "text-red-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/strategy"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === "/strategy" ? "text-red-600" : ""
            }`}
          >
            Strategy
          </Link>
          <Link
            to="/technology"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === "/technology" ? "text-red-600" : ""
            }`}
          >
            Technology
          </Link>
          <Link
            to="/aboutus"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === "/aboutus" ? "text-red-600" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/contactus"
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 ${
              location.pathname === "/contactus" ? "text-red-600" : ""
            }`}
          >
            Contact
          </Link>
          <div className="flex items-center px-4 py-2">
            <button className="px-4 py-2 text-white rounded-lg shadow bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
              Hire Us
            </button>
            <button className="ml-4 text-gray-700 hover:text-gray-900">🌙</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
