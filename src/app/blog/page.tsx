import React from 'react'
import Image from 'next/image'
import shopbg from '@/app/assets/shop page/heroSection.png'
import logo from '@/app/assets/Meubel House_Logos-05.jpg'
import Link from 'next/link'
import BlogPosts from '../components/blogList'
import CategoriesSidebar from '../components/CategoriesSidebar'
import RecentPosts from '../components/RecentPosts'
import Pagination from '../components/shoppageComponent/pagination'


const Blog = () => {
  return (
    <div>
       <div className="bg-cover bg-center sm:h-64 h-96 flex flex-col items-center justify-center text-center font-Poppins bg ">
          
          <Image src={shopbg} alt='#' className='w-[1440px] h-[316px] sm:top-[100px] top-[50px] opacity-[50%] absolute'/> 
          <div >
        <Image src={logo} alt='Meubel House' className='w-[50px] h-[32px] mx-auto '/>
        

        <div className="relative z-10 text-black">
          
          <h1 className="text-3xl font-bold">Blog</h1>
          <nav className="flex items-center justify-center space-x-2 mt-2 text-sm">
            <Link href="/" className="hover:underline text-black font-Poppins font-medium ">
              Home
            </Link>
            <span className='text-black'>&gt;</span>
            <span className="text-gray-700">Blog</span>
          </nav>
        </div>
      </div>
      </div>
    <div className='flex justify-around sm:w-[1440px] sm:h-[2610px]  '>
        <div className=' mx-auto sm:mt-28 '  >
           <div className='sm:w-[820px] sm:h-[2490px] '>
              <BlogPosts/>
            </div>

        </div>
        <div className='mx-auto'>
            <div className='sm:w-[393px] sm:h-[537px] sm:mx-auto sm:mt-28'><CategoriesSidebar/></div>
          <div className='sm:w-[393px] sm:h-[650px] mt-10 sm:mt-0 '><RecentPosts/></div>
        </div>
        
       
    </div>
    <div className="text-center flex  justify-center  ">
          <Pagination/>
        </div>



    </div>
  )
}

export default Blog
