import React from 'react'
import ProductCard from '../../productsCards/productCard'

const RelatedProduct = () => {
  return (
    <div className='w-[1440px] h-[777px] mx-auto'>
        <h1 className='font-Poppins font-medium text-4xl leading-[54px] text-black  text-center'>Related Products</h1>
      <div className='w-[1,236px] h-[446px] gap-8 flex overflow-hidden  px-16'>
        <ProductCard/>
      </div>
    </div>
  )
}

export default RelatedProduct
