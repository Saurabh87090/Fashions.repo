"use client";
import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className={`relative bg-gradient-to-r from-gray-900 to-black  ${menuOpen ? 'h-screen' : 'h-auto'}`}>
          <div className="absolute inset-0"></div>

          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 ">
            <nav className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex ml-[20px]">
                  <img className="w-auto h-[40px] lg:h-10" src="Apple.svg" alt="" />
                  <h1 className='text-[white] text-[27px] font-sans'>Mohid</h1>
                </a>
              </div>

              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <a href="#" title="" className="text-base font-light text-white"> Home </a>
                <a href="#" title="" className="text-base font-light text-white"> Brands </a>
                <a href="#" title="" className="text-base font-light text-white gap-2"> Recent Products </a>
                <a href="#" title="" className="text-base font-light text-white"> Contact </a>
                <a href="#" title="" className="text-base font-light text-white"> About </a>
              </div>
              
              <div className='hidden md:flex mr-[80px]'>
                <img className='mr-[30px]' src="Search.png" alt="" />
                <img className='mr-[30px]' src="Person.png" alt="" />
                <img className='mr-[30px]' src="Cart.png" alt="" />
              </div>
              
              <button className="lg:hidden text-white mr-[20px]" onClick={handleMenu}>
                {menuOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
              </button>
            </nav>

            {menuOpen && (
              <div className="flex flex-col items-center justify-center mt-4  space-y-4 lg:hidden">
                <a href="#" title="" className="text-[20px] font-light text-white"> Home </a>
                <a href="#" title="" className="text-[20px] font-light text-white"> Brands </a>
                <a href="#" title="" className="text-[20px] font-light text-white"> Recent Products </a>
                <a href="#" title="" className="text-[20px] font-light text-white"> Contact </a>
                <a href="#" title="" className="text-[20px] font-light text-white"> About </a>

                <div className='flex items-center justify-center space-x-8 pt-[60px]'>
                  <img src="Search.png" alt="Search" className='h-8 w-8 ' />
                  <img src="Person.png" alt="Person" className='h-8 w-8' />
                  <img src="Cart.png" alt="Cart" className='h-8 w-8' />
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
