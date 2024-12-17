import Link from 'next/link';
import React from 'react'

const Breadcrumb = () => {
    return (
      <div className="bg-[#F9F1E7] py-3 px-6  rounded-lg flex items-center w-[1440px] h-[100px]">
        <nav className="flex items-center space-x-2 ml-[99px] text-gray-600">
          {/* Breadcrumb links */}
          <Link href="/" className="text-gray-600 hover:text-black transition">
            Home
          </Link>
          <span className="text-gray-400">&gt;</span>
          <Link href="/shop" className="text-gray-600 hover:text-black transition">
            Shop
          </Link>
          <span className="text-gray-400">&gt;</span>
          <span className="text-gray-800 font-semibold">Asgaard Sofa</span>
        </nav>
      </div>
    );
  };
  
  export default Breadcrumb;
  