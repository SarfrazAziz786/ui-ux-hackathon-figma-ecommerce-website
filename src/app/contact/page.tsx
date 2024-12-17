import React from 'react'
import Image from 'next/image'
import shopbg from '@/app/assets/shop page/heroSection.png'
import logo from '@/app/assets/Meubel House_Logos-05.jpg'
import Link from 'next/link'
import ContactForm from '../components/ContactForm/contactForm'

const Contact = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-center">
          <Image src={shopbg} alt='#' className='w-[1440px] h-[316px] top-[100px] opacity-[50%] absolute'/> 
          <Image src={logo} alt='Meubel House' className='w-[50px] h-[32px] '/>
            

        <div className="relative z-10 text-black">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <nav className="flex items-center justify-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline text-black font-Poppins font-medium ">
              Home
            </Link>
            <span className='text-black'>&gt;</span>
            <span className="text-gray-700">Checkout</span>
          </nav>
        </div>
      </div>


      
      <div className='w-[1440px] h-[1144px] bg-white'>
        <h1 className='font-Poppins font-semibold text-3xl leading-[54px] text-black mx-auto'>Get In Touch With Us</h1>
        <p className='w-[644px] h-[48px] font-Poppins font-normal text-base leading-6 text-center text-[#9F9F9F]'></p>
      </div>
      <div>abcd</div>
      <ContactForm/>

    </div>
  )
}

export default Contact
