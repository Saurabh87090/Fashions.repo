"use client"

import React from "react";
import Star from "./Star";
import { motion } from "framer-motion";
function Card(props: any) {
  const { name, imgSrc, mrp, price, star } = props;

  return (
    <div className="w-[340px]">
    <motion.div
    whileHover={{ scale: 0.9 }}
          
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
    
      <div className="bg-[#F6F6F6]  rounded-3xl flex items-center justify-center">
        <img
          className="w-[80%] flex items-center justify-center"
          src={imgSrc}
          alt=""
        />
      </div>
      
      <div className="flex items-center justify-center flex-col pb-5">
        <h1 className="text-[25px] font-medium mt-[40px]">{name}</h1>
        <Star star={star} />
        <p className="text-[25px] font-medium">
          <s className="text-[#8B8E99] text-[22px]">{mrp}</s> {price}
        </p>
      </div>
      </motion.div>
    </div>
    
  );
}

export default Card;
