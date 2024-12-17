import React from 'react'
import Image from 'next/image'
import img1 from '@/app/assets/FuniroFurniture/1.png'
import img2 from '@/app/assets/FuniroFurniture/2.png'
import img3 from '@/app/assets/FuniroFurniture/3.png'
import img4 from '@/app/assets/FuniroFurniture/4.png'
import img5 from '@/app/assets/FuniroFurniture/5.png'
import img6 from '@/app/assets/FuniroFurniture/6.png'
import img7 from '@/app/assets/FuniroFurniture/7.png'
import img8 from '@/app/assets/FuniroFurniture/8.png'
import img9 from '@/app/assets/FuniroFurniture/9.png'




const FuniroFurniture = () => {
  return (
    
    <section className="  sm:w-[1799px] w-[330px] sm:h-[780px] h-[1000px]  sm:mt-[50px] mt-[50px]  overflow-hidden mx-auto ">
      
      <div className=" sm:absolute w-[356px] h-[86px] left-[525px]    ">
      <h4 className='sm:w-[222px] h-[30px]  font-Poppins font-semibold text-xl leading-[30px] text-center'>Share your setup with</h4>
      <h1 className='w-[356px] h-[48px]  font-Poppins font-bold text-[40px] leading-[48px] text-center'>#FuniroFurniture</h1>
      </div>
      
      
              <div className='sm:w-[1799px] h-[721px] w-[350px] items-center  justify-center flex flex-col gap-3    absolute overflow-hidden' >
                <Image src={img1} alt='furniture'  className=' sm:w-[274px]  sm:h-[382px] w-[300px] h-[300px] sm:top-[59px] sm:left-[-196px] sm:absolute         '/>
                <Image src={img2} alt='furniture'  className=' sm:w-[451px]  sm:h-[312px] w-[300px] h-[300px] sm:top-[129px] sm:left-[94px]  sm:absolute          '/>
                <Image src={img3} alt='furniture'  className=' sm:w-[295px]  sm:h-[392px] w-[300px] h-[300px] sm:top-[215px] sm:left-[561px] sm:absolute          '/>
                <Image src={img4} alt='furniture'  className=' sm:w-[290px]  sm:h-[348px] w-[300px] h-[300px] sm:top-[358px] sm:left-[872px]  sm:absolute            '/>
                <Image src={img5} alt='furniture'  className=' sm:w-[425px]  sm:h-[433px] w-[300px] h-[300px] sm:top-[73px] sm:left-[1178px] sm:absolute            '/>
                <Image src={img6} alt='furniture'  className=' sm:w-[381px]  sm:h-[323px] w-[300px] h-[300px] sm:top-[457px] sm:left-[-196px] sm:absolute            '  />
                <Image src={img7} alt='furniture'  className=' sm:w-[344px]  sm:h-[242px] w-[300px] h-[300px] sm:top-[457px] sm:left-[201px]  sm:absolute            '   />
                <Image src={img8} alt='furniture'  className=' sm:w-[178px]  sm:h-[242px] w-[300px] h-[300px] sm:top-[522px] sm:left-[872px]  sm:absolute            '   />
                <Image src={img9} alt='furniture'  className=' sm:w-[258px]  sm:h-[196px] w-[300px] h-[300px] sm:top-[522px] sm:left-[1066px] sm:absolute            '   />
                </div>
              
      
      </section>
    
    
  )
}

export default FuniroFurniture


