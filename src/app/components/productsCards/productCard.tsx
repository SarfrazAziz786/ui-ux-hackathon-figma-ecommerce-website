import React from 'react'
import Image, { StaticImageData } from 'next/image';

import product1 from '@/app/assets/products/product-1.png';
import product2 from '@/app/assets/products/product-2.png';
import product3 from '@/app/assets/products/product-3.png';
import product4 from '@/app/assets/products/product-4.png';

import Link from 'next/link';
import { CiShare2 } from 'react-icons/ci';
import { MdOutlineCompareArrows } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa6';



interface Card1 {
  title: string;
  disc: string;
  price: string;
  oldPrice?: string;
  image: StaticImageData;
}



const Data1: Card1[] = [
  {
    title: "Syltherine",
    disc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    image: product1,
    
  },
  {
    title: "Leviosa",
    disc: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: product2,
  },
  {
    title: "Lolito",
    disc: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    image: product3,
  },
  {
    title: "Respira",
    disc: "Outdoor bar table and stool",
    price: "Rp 500.000",
    image: product4,
  }]


const ProductCard = () => {
  let productpage="/productpage"
  return (
    <div className='sm:relative'>
        
        <div className="sm:w-[1236px] h-[446px] sm:top-[1690px] sm:left-[102px] sm:gap-8   flex flex-wrap justify-center
                            top-[2200px] w-[344px] mt-4    ">
          
          {Data1.map((card, index) => (
            
            <div key={index} className="w-[285px] h-[446px] sm:relative">
              
                 <Image src={card.image} alt={card.title} width={285} height={301} 
                                     /> 
              
      

          {/* Overlay */}
          {/* <div className="sm:absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded shadow">
              Add to Cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300 text-sm">Share</button>
              <button className="hover:text-gray-300 text-sm">Compare</button>
              <button className="hover:text-gray-300 text-sm">Like</button>
            </div>
          </div> */}

              <div className="font-Poppins text-white sm:absolute inset-0 bg-black  flex flex-col justify-center items-center opacity-0 hover:opacity-70  ">
            <Link href={"/productpage"}>
            <button className="w-[202px] h-[48px] bg-white text-[#B88E2F]  font-semibold py-2 px-6 rounded shadow  "
                                 >
              Add to Cart
            </button></Link>
            <div className="w-[252px] h-[24px] flex  justify-between mt-4 text-white">
            <><span><CiShare2 /></span> <button className="hover:text-yellow-500 text-sm">
              Share</button></>
              <>
              <span><MdOutlineCompareArrows />
              </span>              <button className="hover:text-yellow-500 text-sm">Compare</button></>
              <>
              <span><FaHeart /></span> <button className="hover:text-yellow-500 text-sm">Like</button>
              </>
            </div>
          </div>
              
                  <div className=" w-[285px] h-[145px] top-[301px] flex flex-col   ">
                <h1 className="w-[123px] h-[29px] top-[317px] left-[16px]">{card.title}</h1>
                <p className="w-[200px] h-[24px] top-[346px] left-[16px] ">{card.disc}</p>
                <div className='flex  sm:absolute top-[360px] '>
                <p className="w-[123px] h-[29px] top-[412px] left-[16px]">{card.price}</p>
                {card.oldPrice && (
                  <p className="w-[123px] h-[29px] top-[441px] left-[16px] line-through">{card.oldPrice}</p>
                )}
                </div>
                </div>
            </div>
          ))}
        
        </div>
  
    </div>
  )
}

export default ProductCard
