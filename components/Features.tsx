"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Features() {
  return (
    <div className="bg-slate-200 h-auto w-full mt-[80px] pb-[40px]">
      <h1 className="text-[40px] md:text-[50px] font-medium flex items-center justify-center gap-3 text-center">
        Latest <span className="text-[#E87A14]">Fashions</span>
      </h1>

      <div className="ml-[20px] md:ml-[80px] mt-[40px] mr-[20px]  md:mr-[40px] flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <motion.div
          whileHover={{ scale: 0.9 }}
          
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <img className="rounded-2xl h-[420px] md:h-[620px] w-[300px] md:w-[420px] mb-4 lg:mb-0" src="fashion3.jpg" alt="Fashion 3" />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <img className="rounded-2xl h-[420px] md:h-[620px] w-[300px] md:w-[420px] mb-4 lg:mb-0" src="fashion1.jpg" alt="Fashion 1" />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          <img className="rounded-2xl h-[420px] md:h-[620px] w-[300px] md:w-[420px]" src="fashion4.jpg" alt="Fashion 4" />
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
