import Image from 'next/image';
import hamburger from '@/app/assets/hamburger.png'


import React from 'react'

const HamburgerClick = () => {
  return (
    <div>
      <div className="sm:hidden cursor-pointer">
        <Image
          src={hamburger}
          alt="hamburger"
          className="w-[28px] h-[28px] top-[36px] left-[1312px]"
        />
      </div>
    </div>
  )
}

export default HamburgerClick

