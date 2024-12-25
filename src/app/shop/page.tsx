import React from 'react'
import FilterBar from '../components/shoppageComponent/filterbar';
import ProductCard from '../components/productsCards/productCard';
import Features from '../components/shoppageComponent/features';
import ShopBanner from '../components/shoppageComponent/shopBanner';
import Pagination from '../components/shoppageComponent/pagination';






const ShopPage = () => {
  return (
    <div>
      
    
          <ShopBanner/>
      <FilterBar/>

      <div className='sm:w-[1440px] sm:h-[2034px] w-[330px] h-[7200px] mx-auto sm:p-12 py-2  sm:relative '>
      <div className='h-[7000px]   '>
    <div><ProductCard/></div>
    <div className='mt-[1300px] sm:mt-0'><ProductCard/></div>
    <div className='mt-[1300px] sm:mt-0'><ProductCard/></div>
    <div className='mt-[1300px] sm:mt-0'><ProductCard/></div>
      </div>
      
        <div className='   sm:top-[1900px]  left-[550px] sm:absolute '>
          <Pagination/>
        </div>


      </div>

          
    
      <div>
          <Features/>  
      </div>
    
    
    </div>

  );
};










export default ShopPage
