import React from 'react'
import Image from 'next/image';
import image1 from '@/app/assets/shop page/product detail/1.png';
import image2 from '@/app/assets/shop page/product detail/2.png';
import image3 from '@/app/assets/shop page/product detail/3.png';
import image4 from '@/app/assets/shop page/product detail/4.png';
import image5 from '@/app/assets/shop page/product detail/5.png';
import facebook from '@/app/assets/shop page/product detail/facebook.png';
import linkedin from '@/app/assets/shop page/product detail/linkedin.png';
import twiter from '@/app/assets/shop page/product detail/twiter.png';
import Link from 'next/link';


const ProductDetail = () => {
    return (
      <div className="container mx-auto p-6 sm:w-[1440px] sm:h-[744px] h-full sm:bg-white ">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6  ">
          {/* Product Images */}
          <div className="col-span-2 space-y-4">
            {/* Thumbnail Images */}
            <div className="space-y-2 w-[553px] h-[500px] flex">
                <div className='w-[76px] h-[416px] flex flex-col justify-between'>
                    <Image src={image2} alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
                    <Image src={image3} alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
                    <Image src={image4} alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
                    <Image src={image5} alt="Thumbnail" className="w-full rounded-lg cursor-pointer" />
                        </div>
                <div className='sm:w-[423px] w-[350px] h-[500px] rounded-[10px]'>
              <Image src={image1} alt="Thumbnail" className="w-[481px] h-[391px] rounded-lg cursor-pointer" />
              
              </div>

            </div>
          </div>
  
          {/* Product Information */}
          <div className="col-span-2 space-y-6 sm:w-[606.01px] h-[730px]  ">
            {/* Product Title */}
            <h1 className="text-[42px] leading-[63px] text-black font-normal font-Poppins">Asgaard Sofa</h1>
            {/* Price */}
            <p className=" font-Poppins text-2xl font-medium leading-9 text-[#9F9F9F]">Rs. 250,000.00</p>
            {/* Ratings */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className='text-[#9F9F9F]'>|</span>
              <span className="text-[13px] leading-[19.5px] font-Poppins font-normal text-[#9F9F9F]">5 Customer Reviews</span>
            </div>
            {/* Description */}
            <p className="text-black w-[424px] h-[80px]  font-Poppins font-normal text-[13px] leading-[19.5px]">
              Setting the bar as one of the loudest speakers in its class, the Asgaard sofa is
              compact and well-balanced, boosting clear midrange and extended highs for a
              wonderful sound.
            </p>
            {/* Size Options */}
            <div className="space-y-2 w-[123px] h-[63px] rounded-[5px]"> 
              <h3 className="font-Poppins font-normal text-sm leading-[21px] text-[#9F9F9F]">Size</h3>
              <div className="flex space-x-2">
                <button className="w-[30px] h-[30px] rounded-[5px] border  bg-[#B88E2F]">L</button>
                <button className="w-[30px] h-[30px] border rounded-[5px] hover:bg-gray-200">XL</button>
                <button className="w-[30px] h-[30px] border rounded-[5px] hover:bg-gray-200">XS</button>
              </div>
            </div>
            {/* Color Options */}
            <div className="space-y-2">
              <h3 className="font-Poppins font-normal text-sm leading-[21px] text-[#9F9F9F]">Color</h3>
              <div className="flex space-x-3">
                <span className="w-[30px] h-[30px] rounded-full bg-[#816DFA] border-2 border-gray-200 cursor-pointer"></span>
                <span className="w-[30px] h-[30px] rounded-full bg-black border-2 border-gray-200 cursor-pointer"></span>
                <span className="w-[30px] h-[30px] rounded-full bg-[#B88E2F] border-2 border-gray-200 cursor-pointer"></span>
              </div>
            </div>
            {/* Quantity and Buttons */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 border-[1px] border-[#9F9F9F]  w-[123px] h-[64px] rounded-[10px] justify-around ">
                <button className="text-black">-</button>
                <span className="text-black">1</span>
                <button className="text-black">+</button>
              </div>
              <Link href={'/cart'}><button className="px-6 py-2 hover:bg-blue-500 text-black rounded-lg border border-gray-300 font-Poppins font-normal text-xl leading-[30px]">
                Add To Cart
              </button></Link>
              <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-500 font-Poppins font-normal text-xl leading-[30px]">
                Compare
              </button>
            </div>
            {/* Metadata */}
            <div className="border-t border-gray-200 pt-4 space-y-2 text-[#9F9F9F] font-Poppins font-normal text-base leading-6">
              <p>
                <span>SKU:</span> SS001
              </p>
              <p>
                <span>Category:</span> Sofas
              </p>
              <p>
                <span>Tags:</span> Sofa, Chair, Home, Shop
              </p>
              {/* Share Links */}
              <div className="flex space-x-4 pt-4">
                <Link href="#" className=" hover:text-gray-800 w-[20px] h-[20px]" >
                    <Image src={facebook} alt='facebook '/> 
                </Link>               
                
                <Link href="#" className=" hover:text-gray-800 w-[20px] h-[20px]">
                    <Image src={linkedin} alt='linkedin'/> </Link>

                <Link href="#" className=" hover:text-gray-800 w-[20px] h-[20px]">
                    <Image src={twiter} alt='twiter'/> </Link>   
            
                </div>
            </div>
        </div>
    </div>
        </div>
    
          
        
    );
  };
  
  export default ProductDetail;
  