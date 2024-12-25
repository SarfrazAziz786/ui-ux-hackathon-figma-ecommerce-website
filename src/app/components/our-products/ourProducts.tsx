import React from 'react';
import ProductCard from '../productsCards/productCard';
import ProductCard2 from '../productsCards/productCard2';

export default function OurProducts() {
  return (
    <>
      <div className="sm:w-[1236px] sm:h-[1084px]  h-full w-[400px] m-auto ">
        <h2 className=" text-center font-bold sm:top-[1610px] sm:left-[588px] text-[40px] sm:leading-[48px] text-[#3A3A3A] 
                        top-[2150px] w-[344px] mx-auto">Our Product</h2>
        <div>
        <ProductCard/>
      
        </div>

        <ProductCard2/>

        <button className=" absolute text-[#B88E2F] p-2 border-[1px] border-[#B88E2F] w-[245px] h-[48px] sm:top-[2800px]    sm:left-[598px] left-[100px]
                            font-Poppins font-semibold text-base leading-6">Show More</button>
      </div>
    </>
  );
}