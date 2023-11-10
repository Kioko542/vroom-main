import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Dropdown from "./components/navDrop";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white  w-full p-2 Z-[100] ">
      <div className="container mx-auto flex justify-between items-center p-4 ">
        <div className="text-blacke text-xl font-bold">
          <Link to="/"><h1>Vroom</h1></Link>
        </div>
        <div id="hov" className="hidden sm:flex space-x-[50px]">
          <Link to="/" className="text-black hover:text-red-700">
            Home
          </Link>
          <Link to="/About" className="text-black hover:text-red-700">
            About
          </Link>
          <Link to="/Services" className="text-black hover:text-red-700">
            Shop
          </Link>
          <Link to="/contact" className="text-black hover:text-red-700">
            Contact
          </Link>
         
        </div>
        <div className="drp ">
          <Dropdown />

          </div>
        <div id="btn" className="lg:block md:hidden sm:block">
          <Link to="/login" className="text-black px-[30px] py-[15px] mx-3 my-4 bg-slate-50 hover:text-gray-300 rounded-[50px] shadow-xl hover:bg-black delay-700">
            Login
          </Link>
          <Link to="/cart" className="text-black px-[30px] py-[15px] mx-3 my-4 bg-slate-50 hover:text-gray-300 rounded-[50px] shadow-xl hover:bg-black delay-100">
            cart
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-black text-xl"
            onClick={toggleMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden flex justify-center items-center flex-col w-full text-orange-700 z-50">
          <Link to="/" className="block p-2 hover:bg-white">
            Home
          </Link>
          <Link to="/About" className="block p-2 hover:bg-white">
            About
          </Link>
          <Link to="/Services" className="block p-2 hover:bg-white">
            Shop
          </Link>
          <Link to="/contact" className="block p-2 hover:bg-white">
            Contact
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
