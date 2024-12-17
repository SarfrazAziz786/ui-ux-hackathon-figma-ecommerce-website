import React from "react"
import shopbg from '@/app/assets/shop page/heroSection.png'
import Link from "next/link"
import Image from "next/image"
const ShopBanner = () => {
    return (
      <div>
      <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-center">
          <Image src={shopbg} alt='#' className='w-[1440px] h-[316px] top-[100px] opacity-[50%] absolute'/> 
        
  
        <div className="relative z-10 text-black">
          <h1 className="text-3xl font-bold">Shop</h1>
          <nav className="flex items-center justify-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>&gt;</span>
            <span className="text-gray-700">Shop</span>
          </nav>
        </div>
      </div>
  </div>
    )}
  export default ShopBanner