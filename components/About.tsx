import React from "react";
import Card from "./Card";
import { productData } from "@/app/data/product";

const About = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-4">
      <div className="flex items-center justify-center flex-col mt-[40px]">
        <h1 className="text-[#3858D6]">Find your favourite smart watch.</h1>
        <p className="text-[28px] md:text-[37px] font-semibold text-[#1E1D1D] lg:text-[45px]">
          Our Latest Products
        </p>
      </div>
      
      {/* products */}
      
      <div className="my-[60px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-[20px]">
          
          {productData.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              star={product.star}
              price={product.price}
              mrp={product.mrp}
              imgSrc={product.imgSrc}
            />
          ))}
        </div>

        <div className="flex items-center justify-center my-[80px]">
          <button className="px-11 py-3 text-base text-white rounded-2xl bg-[#3858D6] hover:bg-blue-700 font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
