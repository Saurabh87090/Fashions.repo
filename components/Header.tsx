"use client" 
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="relative">
          <div className="absolute inset-0 bg-white"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 mt-[10px]">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="text-[24px] ml-[20px] lg:text-[32px]">
                Viss Fashions
              </div>

              <div className="hidden md:flex lg:flex lg:items-center lg:space-x-8">
                <a href="#" className="text-base font-normal text-black hover:text-[#E87A14]">About</a>
                <a href="#" className="text-base font-normal text-black hover:text-[#E87A14]">Clothing</a>
                <a href="#" className="text-base font-normal text-black hover:text-[#E87A14]">Accessories</a>
                <a href="#" className="text-base font-normal text-black hover:text-[#E87A14]">Services</a>
              </div>

              <div className="hidden md:flex">
                <a href="#" className="mr-[20px] mt-5">Log In</a>
                <button className="px-8 py-4 text-base font-semibold text-white rounded-2xl bg-[#E87A14] hover:bg-orange-400" role="button">Sign Up</button>
              </div>

              <button className="lg:hidden text-black mr-[20px]" onClick={handleMenu}>
                {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
              </button>
            </nav>

            {menuOpen && (
              <div className="fixed  p-6 bg-slate-200">
                <div className="flex justify-between">
                  <div className="text-[24px]">Viss Fashions</div>
                  <button className="lg:hidden text-black" onClick={handleMenu}>
                    
                  </button>
                </div>
                <nav className="mt-6 space-y-3">
                  <a href="#" className="block text-base font-normal text-black hover:text-[#E87A14]">About</a>
                  <a href="#" className="block text-base font-normal text-black hover:text-[#E87A14]">Clothing</a>
                  <a href="#" className="block text-base font-normal text-black hover:text-[#E87A14]">Accessories</a>
                  <a href="#" className="block text-base font-normal text-black hover:text-[#E87A14]">Services</a>
                </nav>
                <div className="mt-6 flex justify-between">
                  <a href="#" className="py-4  text-base font-normal text-black">Log In</a>
                  <button className="px-3 py-1 text-base font-semibold text-white rounded-2xl bg-[#E87A14] hover:bg-orange-400" role="button">Sign Up</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;


