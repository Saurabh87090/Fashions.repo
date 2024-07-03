"use client";

import React, { useState } from "react";

function Page() {
  const [number, setNumber] = useState(0)


  const handleDecrease = () => {
    setNumber(number - 1)
  };

  const handleIncrease = () => {
   setNumber(number + 1)
  };

  console.log(number);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-8xl">{number}</h1>

      <div className="flex justify-center space-x-10">
        <button onClick={handleDecrease} className="bg-black p-5 text-white">
          decrease
        </button>
        <button onClick={handleIncrease} className="bg-black p-5 text-white">
          increase
        </button>
      </div>
    </div>
  );
}

export default Page;
