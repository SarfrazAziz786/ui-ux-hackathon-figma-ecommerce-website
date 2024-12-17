import React from 'react';
import ProductCard from '../productsCards/productCard';

export default function OurProducts() {
  return (
    <>
      <div className="sm:w-[1236px] h-[1084px] w-[344px] m-auto  ">
        <h2 className=" text-center font-bold sm:top-[1610px] sm:left-[588px] text-[40px] leading-[48px] text-[#3A3A3A] 
                        top-[2150px] w-[344px] mx-auto">Our Product</h2>

        <ProductCard/>
            
        <button className="productBtn absolute text-[#B88E2F] p-2 border-[1px] border-[#B88E2F] w-[245px] h-[48px] top-[2646px] left-[598px]
                            font-Poppins font-semibold text-base leading-6">Show More</button>
      </div>
    </>
  );
}