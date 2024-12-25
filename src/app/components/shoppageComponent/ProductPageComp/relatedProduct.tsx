import React from 'react'
import ProductCard from '../../productsCards/productCard'

const RelatedProduct = () => {
  return (
  <div className='sm:w-[1440px] w-full sm:h-[777px] h-[1900px] mx-auto sm:mt-0 mt-[400px]  '>
        <h1 className='font-Poppins font-medium sm:text-4xl text-2xl leading-[54px] text-black  text-center'>Related Products</h1>
    <div className='sm:w-[1236px] w-full h-[446px]    px-16'>
        <ProductCard/>
      </div>
      
      <button className="   text-[#B88E2F] p-2 border-[1px] border-[#B88E2F] w-[245px] h-[48px] sm:top-[2800px] mt-[1300px] sm:mt-0 ml-24   sm:left-[598px]  sm:ml-[550px]
                            font-Poppins font-semibold text-base leading-6">Show More</button>
    </div>
  )
}

export default RelatedProduct
