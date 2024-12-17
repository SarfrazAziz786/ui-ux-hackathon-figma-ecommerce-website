import React from 'react'
import Image from 'next/image';
import filterImage from '@/app/assets/shop page/Vector.png'
import gridBigRound from '@/app/assets/shop page/grid-big-round.png'
import ViewList from '@/app/assets/shop page/ViewList.png'

const FilterBar = () => {
    return (
      <div className="bg-[#9F9F9F] p-4 flex items-center justify-between text-sm text-gray-700 sm:w-[1440px] sm:ml-[37px]  h-[100px] mt-[160px] sm:mt-[60px]  ">
        <div className="flex items-center ">
          <button className="flex items-center space-x-1 w-[130px] hover:bg-gray-100">
            
            <Image src={filterImage} alt='#' className='w-[25px]  h-[25px]  ' />
            
            <span className='font-Poppins font-normal text-xl leading-[30px] text-black'>Filter</span>
          </button>
  
          {/* Grid and List Icons */}
          <div className="flex items-center space-x-1 ">
            <Image src={gridBigRound} alt='#' className="w-[28px]  h-[28px] hover:bg-gray-100"/>
            <Image src={ViewList} alt='#' className="w-[24px]  h-[24px] hover:bg-gray-100"/>

            {/* Results Info */}
          <p>Showing 1–16 of 32 results</p>                          
            
            
          </div>
  

        </div>
  
        <div className="flex items-center space-x-4">
          {/* Show Input */}
          <div className="flex items-center space-x-2">
            <span>Show</span>
            <input
              type="number"
              value="16"
              className="w-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              readOnly
            />
          </div>
  
          {/* Sort By */}
          <div className="flex items-center space-x-1   ">
            <span>Sort by</span>
            <select
              className="border border-gray-300 rounded  py-1 px-1 focus:outline-double    "
              
            >
              <option>Default</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
      </div>
    );
  };
  
  export default FilterBar;
  