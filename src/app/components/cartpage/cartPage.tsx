import React from "react";
import Image from "next/image";
import product from '@/app/assets/products/product-3.png'
import deleteIcon from '@/app/assets/cart page/deleteIcon.png'
import Link from "next/link";
const CartPage = () => {
    return (
<div className="    w-[1440px] h-[525px] bg-white  mt-[150px]  mx-auto    " >
        
  
  <div className="   w-[1240px] h-[390px]  flex  justify-between pt-20 mx-auto ">
          {/* Cart Items Section */}
          <div className="  w-[817px] h-[215px]  ">
            <div className="  ">
                <div className="bg-[#F9F1E7] px-60 py-2  font-Poppins font-medium text-base leading-6 w-[817px] h-[55px] text-black  space-x-20 ">
                  <span >Product</span>
                  <span >Price</span>
                  <span >Quantity</span>
                  <span >Subtotal</span>
                </div>
             
                
                {/* Cart Item Row */}
                   
                <div className="  flex items-center justify-between w-[792px]  ">
                    <Image 
                      src={product}
                        alt={"Asgaard Sofa"}
                      className="w-16 h-16 object-cover rounded ml-5 mt-2"
                    />
                  <div className="w-[573px] h-[25px] font-Poppins font-normal text-base leading-6 flex  justify-between">
                  <h2 className=" text-[#9F9F9F]">Asgaard Sofa</h2>

                  <h2 className=" text-[#9F9F9F]">Rs. 250,000.00</h2>
            
                    <input
                      type="number"
                      defaultValue={1}
                      className="w-16 border rounded text-center text-black"
                    />
                  
                  <h2 className=" text-black">Rs. 250,000.00</h2>
                  
                  <Image src={deleteIcon} alt="deleteIcon" className=" w-[28px] h-[28px]" />
                  </div>
            </div>
          </div>
          
        </div>


            {/* Cart Totals Section */}
          <div className="bg-[#F9F1E7] p-6 space-y-6  rounded-lg shadow-md w-[393px] h-[390px]">
            <h2 className="font-Poppins text-[32px] leading-[48px] font-semibold text-black mb-4">Cart Totals</h2>
            <div className="flex justify-between font-Poppins   mb-3">
              <span className="text-black">Subtotal</span>
              <span className="text-[#9F9F9F] font-normal text-base leading-6">Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between text-gray-800 font-bold mb-6">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
            <Link href={'/checkout'} >
            <button className="w-[222px] h-[58.95px]  text-black  py-2 rounded-[15px] border-2 mx-12 my-9 border-gray-500 hover:bg-gray-800 hover:text-white  ">
              Check Out
            </button>
            </Link>
          </div>         

  
             
  </div>
              
  
          
</div>
      
    );
  };
  
  export default CartPage;
  