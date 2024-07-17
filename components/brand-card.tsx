"use client"
import React from 'react'
import { motion } from "framer-motion";
function Brand(props: any) {
    const { name, imgSrc, content } = props;
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
          
    transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
    <div className='flex flex-row items-center justify-center md:flex-row bg-[#F6F6F6] h-[260px] w-[350px] md:w-[500px] my-5 p-5 rounded-2xl md:my-10 md:mx-5'>
        <img className='w-[150px] h-[150px] md:w-[180px] md:h-[180px] my-2 md:my-0 mx-auto md:mx-8 ' src={imgSrc} alt={name} />
        <div className='text-left mx-5 my-2 md:mx-9 md:my-8'>
          <h1 className='font-extrabold text-2xl flex items-center justify-center md:text-3xl'>{name}</h1>
          <p className='text-[#8B8E99] mt-2 text-sm md:text-base'>{content}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Brand;
