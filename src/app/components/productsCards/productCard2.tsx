'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image';
import product5 from '@/app/assets/products/product-5.png';
import product6 from '@/app/assets/products/product-6.png';
import product7 from '@/app/assets/products/product-7.png';
import product8 from '@/app/assets/products/product-8.png';
import Link from 'next/link';

interface Card2 {
    title: string;
    disc: string;
    price: string;
    oldPrice?: string;
    image: StaticImageData;
  }

  const Data2: Card2[] = [

    {
      title: "Grifo",
      disc: "Night lamp",
      price: "Rp 1.500.000",
      image: product5,
    },
    {
      title: "Muggo",
      disc: "Small mug",
      price: "Rp 150.000",
      image: product6,
    },
    {
      title: "Pingky",
      disc: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: product7,
    },
    {
      title: "Potty",
      disc: "Minimalist flower pot",
      price: "Rp 500.000",
      image: product8,
    },
  ];

const productCard2 = () => {
  return (
    <div>
      <div className="sm:w-[1236px] sm:h-[446px] sm:top-[1690px] sm:left-[102px] sm:gap-8  flex  sm:flex-row flex-wrap justify-center
                            top-[2200px] w-[344px] h-full sm:mt-4 mt-[1300px]   ">
          
          {Data2.map((card, index) => (
            
            <div key={index} className="w-[285px] h-[446px] sm:relative">
              <Link href={'productpage'}>
                 <Image src={card.image} alt={card.title} width={285} height={301} 
                                     /> </Link>
              
      

          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded shadow">
              Add to Cart
            </button>
            <div className="flex space-x-4 mt-4 text-white">
              <button className="hover:text-gray-300 text-sm">Share</button>
              <button className="hover:text-gray-300 text-sm">Compare</button>
              <button className="hover:text-gray-300 text-sm">Like</button>
            </div>
          </div>
               */}
              
              <div className=" w-[285px] h-[145px] top-[301px] flex flex-col ">
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

export default productCard2
