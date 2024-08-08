import React from 'react'
import Star from './Star'

const Review = () => {
  return (
    <div className="px-2">
      <div className="text-center">
        <h1 className='text-[#3858D6]'>Here are our some of the best clients.</h1>
        <p className='text-[28px] md:text-[45px] font-semibold text-[#1E1D1D]'>What People Say About Us</p>
      </div>

      {/* Preview 1 */}
      <div className='h-full w-full flex flex-col lg:flex-row items-center justify-center my-[50px] sm:my-[80px] space-y-8 sm:space-y-0 '>

        <div className='bg-[#F6F6F6] w-full max-w-[550px] h-auto md:h-[200px] rounded-2xl flex flex-col sm:flex-row items-center p-6'>
          <img className='h-[140px] md:h-[180px] mb-4 md:mb-0 md:mr-6' src="man1.svg" alt="Hamza Faizi" />
          <div>
            <h1 className='text-[20px] flex items-center justify-center md:text-[25px] font-medium'>Hamza Faizi</h1>
            <p className='text-[#8B8E99] my-2 text-sm md:text-base'>
              Do not waste time, just order! <br /> This is the best website to purchase <br /> smart watches.
            </p>
            <Star star={5} />
          </div>
        </div>

        {/* Preview 2 */}
        <div className='bg-[#F6F6F6]  w-full max-w-[550px] h-auto md:h-[200px] rounded-2xl flex flex-col sm:flex-row items-center p-6 mt-[40px] md:mx-[60px] sm:my-11 '>
          <img className='h-[140px] md:h-[180px] mb-4 md:mb-0 md:mr-6' src="man2.svg" alt="Hafiz Huzaifa" />
          <div>
            <h1 className='text-[20px] flex items-center justify-center md:text-[25px] font-medium'>Hafiz Huzaifa</h1>
            <p className='text-[#8B8E99] my-2 text-sm md:text-base'>
              I have been purchasing smart <br /> watches of Mohid for a long time. <br /> All the products are good quality.
            </p>
            <Star star={5} />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center my-[40px]'>
        <img src="Dots.svg" alt="Dots" />
      </div>
    </div>
  )
}

export default Review
