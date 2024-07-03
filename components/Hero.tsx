"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {

  
  return (
    <div className="w-full h-full">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start h-full">
      


        

        <div className="order-2 lg:order-1 text-left md:pt-[200px] lg:pt-[225px] md:pl-[20px] lg:pl-[70px] mt-8 lg:mt-0 flex-1">
          <h1 className="text-[#44C3EB] font-medium text-[28px] lg:text-4xl">
            TRENDIEST FASHION EVER
          </h1>
          <p className="mt-4 font-light text-[35px] lg:text-5xl leading-normal leading-[calc(1em + 5px)] md:leading-[calc(1em + 10px)] ">
            When you are in doubt,
            <br  />
            wear a viss Fashions
            <br  />
            Denim
          </p>
          <button className="mt-8 px-10 py-3.5 text-base font-semibold text-white rounded-2xl bg-[#E87A14] shadow-2xl transition-all hover:bg-orange-400">
            Buy now
          </button>
        </div>
     

        <div className="order-1 lg:order-2 w-full lg:w-auto flex-1">
          <img
            className="block mx-auto lg:ml-auto h-[400px] w-[400px] md:h-[600px] md:w-[600px] lg:h-[745px] lg:w-[500px] md:mt-8"
            src="fashion.svg"
            alt="Fashion"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;


