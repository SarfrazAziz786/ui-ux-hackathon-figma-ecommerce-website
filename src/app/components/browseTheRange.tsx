import React from 'react'
import Image from 'next/image'
import dining from '@/app/assets/dining.png'
import living from '@/app/assets/living.png'
import bedroom from '@/app/assets/bedroom.png'

const BrowseTheRange = () => {
  return (
    <div >
        <div className=' sm:w-[1183px] sm:h-[685px] sm:mt-[300px] mx-auto  
                        w-[344px] h-[1700px]  '>
            <div className=' sm:w-[559px] sm:h-[76.71px] sm:top-[869px] sm:left-[449px]  place-items-center mx-auto 
                              w-[344px]  '>
                <h2 className=' w-[300px] h-[48px] top-[869px] left-[543px]
                                font-Poppins font-bold text-[32px] leading-[48px] text-black'>Browse The Range</h2>
                <p className=' sm:w-[559px] h-[28.71px] sm:top-[917px] left-[449px] mb-2
                                font-Poppins font-normal text-xl leading-[30px] text-center text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <br />

            
            <div className='sm:w-[1183px] h-[508px] 
                            w-[100vw]
                            flex flex-row justify-between  flex-wrap gap-6 sm:gap-1 '>
                
                    <div >
                        <Image src={dining} alt='dining' className='w-[381px] h-[480px]'/>
                        <h3 className='w-[79px] h-[36px] top-[1518px] left-[282px]
                                        font-Poppins font-semibold text-2xl leading-9 text-center text-[#333333] m-auto'>Dining</h3>
                    </div>

                    <div>
                        <Image src={living} alt='living' className='w-[381px] h-[480px]'/>
                        <h3 className='w-[79px] h-[36px] top-[1518px] left-[282px]
                                        font-Poppins font-semibold text-2xl leading-9 text-center text-[#333333]  m-auto'>Living</h3>
                    </div>

                    <div>
                        
                    <Image src={bedroom} alt='dining' className='w-[381px] h-[480px]'/>
                        <h3 className='w-[79px] h-[36px] top-[1518px] left-[282px]
                                        font-Poppins font-semibold text-2xl leading-9 text-center text-[#333333] m-auto'>Bedroom</h3>

                    </div>
                </div >    
                
                <div className='flex justify-between'>
                    
                </div>
            
        </div>
    </div>
  )
}

export default BrowseTheRange
