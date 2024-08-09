import React from "react";

const Footer = () => {
  return (
    <footer className="mt-[100px] p-4 md:p-0 ">
      <div className="max-w-[900px] mx-auto">
      <div className="bg-[#F6F6F6] w-full py-[30px] rounded-3xl flex flex-col md:flex-row items-center justify-between md:justify-center md:space-x-[280px] h-auto">
        <div className="flex flex-col items-center  sm:items-center  md:items-start text-center sm:text-center md:text-left">
          <h1 className="text-[28px] sm:text-[32px] md:text-[35px] font-medium">
            Subscribe To Newsletter
          </h1>
          
          <p className="text-[#8B8E99] mt-2">Get free guide about smart watches daily.</p>
          <form action="#" method="POST" className="mt-8 flex flex-col sm:flex-col md:flex-row items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-[340px] p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600 mb-4 sm:mb-4 md:mb-0 md:mr-4"
            />
            <button className="bg-[#3858D6] text-white rounded-xl px-[40px] py-4 hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
        
      </div>
      </div>
      <p className="flex items-center justify-center font-normal gap-3 mt-4">
        Made with ❤️ and ☕ Dev-saurabh.
      </p>
      <div className=" flex items-center justify-center md:bg-black h-10">
        <p className="text-medium text-center text-black md:text-white">
          © Copyright 2024, All Rights Reserved by | Mohid
        </p>
      </div>
    </footer>
  );
};

export default Footer;
