import React from 'react'
import Image from 'next/image'
import logo from '@/app/assets/Meubel House_Logos-05.jpg'
import account_alert from '@/app/assets/mdi_account-alert-outline.png'
import icons_search from '@/app/assets/akar-icons_search.png'
import icons_heart from '@/app/assets/akar-icons_heart.png'
import shopping_cart from '@/app/assets/ant-design_shopping-cart-outlined.png'
import hamburger from '@/app/assets/hamburger.png'
import Link from 'next/link'



const Navbar = () => {
  return (
    <div className='sm:w-[1440px] sm:h-[100px] w-[500px ]  '>
      <div className='sm:w-[1286px] sm:h-[41px] sm:top-[29px] sm:left-[54px] flex justify-between  items-center bg-white absolute w-[100vw]  '>
          
            <div className="sm:w-[185px] sm:h-[41px]   sm:top-[29px] sm:left-[54px]  flex flex-row justify-center items-center gap-5 ">
                <Image src={logo} alt='Meubel House' className='w-[50px] h-[32px] '/>
                <h1 className='sm:w-[130px] sm:h-[41px] font-Montserrat font-bold text-[34px] leading-[41.45px] text-black'>Furniro</h1>
              </div>

              <div className='hidden sm:visible sm:w-[430px] sm:h-[24px] sm:top-[38px] sm:left-[505px] font-Poppins font-medium text-16px leading-6 text-black sm:flex justify-between'>
                <Link href='./' className=' hover:underline hover:decoration-yellow-500 hover:decoration-8'>Home</Link>
                <Link href='/shop' className=' hover:underline hover:decoration-yellow-500 hover:decoration-8'>Shop</Link>
                <Link href='/blog' className=' hover:underline hover:decoration-yellow-500 hover:decoration-8'>Blog</Link>
                <Link href='/contact' className=' hover:underline hover:decoration-yellow-500 hover:decoration-8'>Contact</Link>
              </div>

              <div className='flex justify-between sm:gap-8 gap-3'>
                <Image src={account_alert}  alt='account_alert' className='w-[28px] h-[28px] top-[36px] left-[1093px] hidden sm:inline-block '  />
                <Image src={icons_search}   alt='icons_search' className= 'w-[28px] h-[28px] top-[36px] left-[1166px] '   />
                <Image src={icons_heart }   alt='icons_heart ' className= 'w-[28px] h-[28px] top-[36px] left-[1039px] hidden sm:inline-block '   />
                <Image src={shopping_cart}  alt='shopping_cart' className='w-[28px] h-[28px] top-[36px] left-[1312px] '  />
                
                <Image src={hamburger}  alt='hamburger' className='w-[28px] h-[28px] top-[36px] left-[1312px] sm:hidden '  />
              </div>
          
          

      </div>
    
    
    
    
    
    </div>
  )
}

export default Navbar
