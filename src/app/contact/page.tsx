import React from 'react'
import Image from 'next/image'
import shopbg from '@/app/assets/shop page/heroSection.png'
import logo from '@/app/assets/Meubel House_Logos-05.jpg'
import Link from 'next/link'
import ContactForm from '../components/ContactForm/contactForm'
import Features from '../components/shoppageComponent/features'
const Contact = () => {
  return (
    <div className='relative'>
      <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center text-center ">
          <Image src={shopbg} alt='#' className='w-[1440px] h-[316px] top-[50px] sm:top-0 opacity-[50%] absolute'/> 
          <Image src={logo} alt='Meubel House' className='w-[50px] h-[32px] '/>
            

        <div className="relative z-10 text-black">
          <h1 className="text-3xl font-medium">Contact</h1>
          <nav className="flex items-center justify-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline text-black font-Poppins font-medium ">
              Home
            </Link>
            <span className='text-black'>&gt;</span>
            <span className="text-gray-700">Contact</span>
          </nav>
        </div>
      </div>


      
      <div className='sm:w-[1440px] sm:h-[1144px]  bg-white mt-32 flex flex-col gap-10 '>
        <div>
        <h1 className='sm:w-[375px]  font-Poppins font-semibold sm:text-3xl text-xl leading-[54px] text-black  text-center mx-auto'>Get In Touch With Us</h1>
        <p className='sm:w-[644px] h-[48px] font-poppins font-normal text-base leading-6 text-center text-[#9F9F9F] mx-auto '>
        For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
        </div>
        
        <ContactForm/>
        <Features/>
      </div>
      
      

    </div>
  )
}

export default Contact
