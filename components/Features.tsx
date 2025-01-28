import React from "react";
import Brand from "./brand-card";
import { brandData } from "@/app/data/brand";

const Features = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap ">
        {brandData.map((brand, index) => (
          <Brand
            key={index}
            name={brand.name}
            content={brand.content}
            imgSrc={brand.imgSrc}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Features;
