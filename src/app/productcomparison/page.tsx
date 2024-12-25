import React from 'react'
import Image from 'next/image'
import shopbg from '@/app/assets/shop page/heroSection.png'
import logo from '@/app/assets/Meubel House_Logos-05.jpg'
import Link from 'next/link'
import Features from '../components/shoppageComponent/features'
import product1 from '@/app/assets/shop page/product detail/1.png'
import product2 from '@/app/assets/shop page/product detail/2.png'
import { BiDownArrowAlt } from "react-icons/bi";
import ComparisonTable from '../components/ComparisonTable'


const ProductComparison = () => {
  return (
    <div>
     
     <div className="bg-cover bg-center sm:h-64 h-96 flex flex-col items-center justify-center text-center font-Poppins bg ">
          
          <Image src={shopbg} alt='#' className='w-[1440px] h-[316px] sm:top-[100px] top-[50px] opacity-[50%] absolute'/> 
          <div >
        <Image src={logo} alt='Meubel House' className='w-[50px] h-[32px] mx-auto '/>
        

        <div className="relative z-10 text-black">
          
          <h1 className="text-3xl font-bold">Product Comparison</h1>
          <nav className="flex items-center justify-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline text-black font-Poppins font-medium ">
              Home
            </Link>
            <span className='text-black'>&gt;</span>
            <span className="text-gray-700">Comparison</span>
          </nav>
        </div>
      </div>
      </div>

      <div className='flex flex-col sm:gap-5     '>

    <div className='sm:w-[1332px] sm:h-[1800px] sm:mt-[200px] mt-7 left-[54px]  flex flex-col mx-auto sm:gap-24 '>
        <div className='flex justify-between flex-col sm:flex-row gap-4 mx-auto  '>
        <div className='font-Poppins font-medium text-[28px] sm:leading-[35.42px]  '>
            <h1 className='sm:w-[223px] w-[250px] h-[105px] top-[471px] left-[96px]'>Go to Product page for more 
            Products</h1>
            
            <h2 className='underline text-[#727272]'>View More</h2>
        </div>   

        {/* product 1 */}
        <div className=" items-center space-x-2 ">
              <Image src={product1} alt='product1' className='w-[280px] h-[177px] top-[450px] left-[390px] rounded-[40px] ' />
              
              <h1 >Asgaard Sofa</h1>
              <div>Rs. 250,000.00</div>
              {/* rating */}
              <div className="flex text-yellow-500">
                <span>4.7</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className='text-[#9F9F9F]'>|</span>
              <span className="text-[13px] leading-[19.5px] font-Poppins font-normal text-[#9F9F9F]">204 Review</span>
              
        </div>
        
        {/* product 2 */}
        <div className=" items-center space-x-2 ">
            <Image src={product2} alt='product1' className='w-[280px] h-[177px] top-[450px] left-[394px] '/>
            <h1 >Outdoor Sofa Set</h1>
            <div>Rs. 224,000.00</div>
              <div className="flex text-yellow-500">
                <span>4.7</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className='text-[#9F9F9F]'>|</span>
              <span className="text-[13px] leading-[19.5px] font-Poppins font-normal text-[#9F9F9F]">204 Review</span>
          </div>
          <div className='w-[242px] h-[79px] top-[499px] font-Poppins font-semibold text-2xl leading-[30.36px] flex flex-col gap-4'>
            <h1>Add A Product</h1>
            <button className='w-[242px] h-[39px] top-[539px] left-[1073px] text-sm justify-around flex items-center rounded-md bg-[#B88E2F] text-white'>Choose a Product<BiDownArrowAlt className=' text-3xl'/></button>

          </div>
          </div>

          <div className='sm:ml-[54px] py-4'> 
      <ComparisonTable />
      
      </div>
      </div>

      


    </div>
    <div className='mx-auto sm:w-[1440px]'>
    <Features/>
    </div>
    </div>
  )
}

export default ProductComparison
