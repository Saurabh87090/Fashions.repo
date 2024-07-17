import React from 'react';

const Hero = () => {
  return (
    <div>
      <main>
        <div className='bg-gradient-to-r from-gray-900 to-black h-[1200px] sm:h-[1190px] ' >
          <div className='pt-[130px] md:pr-[140px] flex justify-center md:block'>
            <img className='md:float-right w-[350px] md:w-[450px] mx-4  md:mx-0' src="watch.svg" alt="Watch" />
          </div>
          <div className='pt-[90px] md:pl-[220px] text-center md:text-left'>
            <p className='w-[90%] md:w-[1140px] text-[50px] ml-[17px] md:text-[55px] lg:text-[60px] text-white font-extrabold'>
              Discover <br />Most Suitable <br />Watches
            </p>
            <p className='pt-[20px] text-gray-400 text-sm md:text-base mb-[40px]'>
              Find the best, reliable, and cheap smart watches here. <br />
              We focus on product quality. Here you can find smart <br />
              watches of almost all brands. So why you are waiting? <br />
              Just order now!
            </p>
          </div>
          < div className="relative flex items-center w-[90%] md:w-[420px] max-w-md h-[60px] rounded-xl focus-within:shadow-lg bg-white overflow-hidden mx-auto md:ml-[200px] mt-[40px] md:mt-[80px]">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              {/* Optional icon can be placed here */}
            </div>
            
            <input
              className="peer h-full w-[240px] md:w-[280px] outline-none text-sm text-gray-700 px-2 "
              type="text"
              id="search"
              placeholder="Find the best brands"
            />
            <button className="bg-[#3858D6] text-white rounded-xl px-[30px] md:px-[40px] mr-[18px] py-3 hover:bg-blue-700 ">
              Search
            </button>
            
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
