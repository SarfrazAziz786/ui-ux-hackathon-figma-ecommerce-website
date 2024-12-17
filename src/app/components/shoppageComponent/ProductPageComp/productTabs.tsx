import React from "react";
import Image from "next/image";
 import product1 from "@/app/assets/shop page/product detail/product1.png"
 import product2 from "@/app/assets/shop page/product detail/product2.png"

const ProductTabs = () => {
  return (
    <div className="   w-[90rem] h-[46.5rem] bg-white ">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 w-[40.5625rem] h-[2.25rem] font-Poppins font-medium text-2xl leading-9 m-auto ">
        <button className="px-6 py-2   border-black text-black">
          Description
        </button>
        <button className="px-6 py-2  text-[#9F9F9F] ">
          Additional Information
        </button>
        <button className="px-6 py-2  text-[#9F9F9F]">Reviews [5]</button>
      </div>

      {/* Content */}
      <div className="py-6 space-y-4 w-[1026px] font-Poppins font-normal text-base leading-6 text-justify text-[#9F9F9F] mx-24">
        {/* Description Section */}
        <p >
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <p >
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boosts a clear midrange and extended
          highs for a sound that is both articulate and pronounced.
        </p>
        {/* Product Images */}
        <div className="grid grid-cols-2 gap-4 w-[1239px] h-[348px]  ">
          <Image src={product1} alt="#" className="w-[605px] h-[348px] bg-pink-50"/>
          <Image src={product2} alt="#" className="w-[605px] h-[348px] bg-pink-50"/>
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
