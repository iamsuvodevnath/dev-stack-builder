import { useState } from "react";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import logo from "../assets/logos/logo-text.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Mobile : Hamburger Button \*/}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <img
            src={hamburgerIcon}
            alt="Menu Toggle"
            className="h-6 w-6 object-contain"
          />
        </button>

        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Dev Stack Logo"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-indigo-600">
            Home
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-violet-600">
            Technologies
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">
            Projects
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">
            About
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">
            Contact
          </a>
        </div>

        {/* text button */}
        <div className="flex items-center gap-4">
          <button className=" text-sm font-medium text-gray-600 sm:block cursor-pointer">
            Sign In
          </button>
          {/* filled pill button */}
          <button
            className="
    brand-gradient
    rounded-full
    px-5 py-2
    text-sm font-semibold
    text-white
    cursor-pointer
    hover:opacity-90 transition-opacity
  "
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-slate-600">
            <a href="#" className="text-indigo-600">
              Home
            </a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
