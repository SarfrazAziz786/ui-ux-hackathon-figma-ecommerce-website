import React from 'react'
import Image from 'next/image'
import shopbg from '@/app/assets/shop page/heroSection.png'
import logo from '@/app/assets/Meubel House_Logos-05.jpg'
import Link from 'next/link'
import BillingDetails from '../components/billingDetails/BillingDetails'
import OrderSummary from '../components/OrderSummary/orderSummary'
import Features from '../components/shoppageComponent/features'



const Checkout = () => {
  return (
    <div className='relative'>
      <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-center ">
          <Image src={shopbg} alt='#' className='w-[1440px] h-[316px]  opacity-[50%] absolute'/> 
          <Image src={logo} alt='Meubel House' className='w-[50px] h-[32px] '/>
            

        <div className="relative z-10 text-black">
          <h1 className="text-[48px] font-medium">Checkout</h1>
          <nav className="flex items-center justify-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline text-black font-Poppins font-medium ">
              Home
            </Link>
            <span className='text-black'>&gt;</span>
            <span className="text-gray-700">Checkout</span>
          </nav>
        </div>
      </div>
        <div className='flex sm:gap-0 gap-[450px] sm:flex-row flex-col mt-24 sm:mx-auto  sm:w-[1440px] sm:h-[1829px] bg-white  '>
            <BillingDetails/>
            <OrderSummary/>
        
        </div>
        <Features/>


    </div>
  )
}

export default Checkout
