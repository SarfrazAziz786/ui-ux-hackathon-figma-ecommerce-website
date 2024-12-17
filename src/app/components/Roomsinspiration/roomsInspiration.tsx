import React from 'react'
import Image from 'next/image'
import room1 from '@/app/assets/room inspiration/Image 1.png'
import room2 from '@/app/assets/room inspiration/Image 2.png'
import room3 from '@/app/assets/room inspiration/Image 3.png'

const RoomsInspiration = () => {
  
  
  
  return (
  
  <div className=' sm:w-[1440px] h-[670px] sm:mt-0 mt-[2550px] sm:flex-row mx-auto  bg-[#FCF8F3] flex justify-around items-center top-[6250px] flex-col w-[333px] gap-5'>
        <div className=" sm:w-[422px] h-[151px] top-[250px] left-[100px] flex flex-col justify-between bg-[#FCF8F3] text-center sm:text-left  ">
          <h1 className=' sm:w-[422px] sm:h-[96px] top-[2986px] left-[100px] sm:p-0 p-4 
                          font-Poppins font-bold text-[40px] leading-10 text-[#3A3A3A]'>50+ Beautiful rooms inspiration</h1>
          <p className=' w-[368px] h-[48px] top-[3089px] left-[100px]
                        font-Poppins font-medium text-base leading-6 text-[#616161]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        
      <div className='   w-[176px] h-[48px] top-[3162px] left-[100px] sm:m-0 m-auto   bg-[#B88E2F] text-white text-center content-center '>Explore More</div>
      </div>
        
          <div className=" sm:w-[900px] w-[300px] h-[582px] sm:top-[50px] sm:left-[500px]  flex justify-between sm:mt-0 mt-20    bg-[#FCF8F3] overflow-hidden">
              
              <Image src={room1} alt='room' className='sm:w-[404px] w-60 sm:h-[582px] h-80 top-[2807px] left-[564px] '/>
              <Image src={room2} alt='room' className='sm:w-[372px] w-60 sm:h-[486px] h-80 top-[2807px] left-[992px]'/>
              <Image src={room3} alt='room' className='sm:w-[404px] w-60 sm:h-[582px] h-80 top-[2807px] left-[564px]'/>
          </div>
    

  </div>
  )
}

export default RoomsInspiration
