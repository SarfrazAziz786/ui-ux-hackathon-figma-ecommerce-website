import React from 'react'

const CategoriesSidebar = () => {
    return (
      <div className=" p-4 bg-white rounded-lg  font-Poppins">
        {/* Search Box */}
        <div className="mb-6 ">
          <input
            type="text"
            placeholder="Search..."
            className="sm:w-[311px] sm:h-[58px] p-2 border border-gray-300 rounded-md focus:outline-double"
          />
        </div>
  
        {/* Categories List */}
        <div className=' sm:w-[251px] sm:h-[353px] h-[253px] '>
          <h2 className="sm:text-2xl text-lg font-medium  mb-4">Categories</h2>
          <ul className="flex flex-col justify-around  h-full text-[#9F9F9F] sm:text-base text-xs font-normal sm:leading-6">
            <li className="flex justify-between   hover:text-black">
              <span>Crafts</span>
              <span className="text-gray-400">2</span>
            </li>
            <li className="flex justify-between  hover:text-black">
              <span>Design</span>
              <span className="text-gray-400">8</span>
            </li>
            <li className="flex justify-between  hover:text-black">
              <span>Handmade</span>
              <span className="text-gray-400">7</span>
            </li>
            <li className="flex justify-between  hover:text-black">
              <span>Interior</span>
              <span className="">1</span>
            </li>
            <li className="flex justify-between  hover:text-black">
              <span>Wood</span>
              <span className="">6</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default CategoriesSidebar;
  