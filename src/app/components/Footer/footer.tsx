import React from 'react'


const Footer = () => {
  return (

    <footer className="bg-white text-gray-700 sm:py-8 sm:w-[1440px] w-[300px] h-[505px]   mt-10 mx-3 ">
  <div className="container sm:mx-auto sm:px-4 sm:w-[1240.01px] h-[419px] top-[48px] sm:left-[100px]  ">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-6">
      
      <div>
        <h2 className="text-2xl font-bold">Funiro.</h2>
        <p className="mt-4">
          400 University Drive Suite 200 Coral Gables,<br />
          FL 33134 USA
        </p>
      </div>


      <div className="flex justify-between  md:justify-start md:space-x-16 w-[300px] h-[150px] sm:w-[352px] sm:h-[312px] top-[48px] left-[523.01px] ">
        <div>
          <h3 className="font-semibold text-lg">Links</h3>
          <ul className="mt-4 sm:space-y-2">
            <li><a href="#" className="hover:text-purple-500">Home</a></li>
            <li><a href="#" className="hover:text-purple-500">Shop</a></li>
            <li><a href="#" className="hover:text-purple-500">About</a></li>
            <li><a href="#" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Help</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-purple-500">Payment Options</a></li>
            <li><a href="#" className="hover:text-purple-500">Returns</a></li>
            <li><a href="#" className="hover:text-purple-500">Privacy Policies</a></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="font-semibold text-lg">Newsletter</h3>
        <form className="mt-4 flex w-[286px] h-[24px] top-[127px] left-[947.01px] gap-2" >
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white px-6  rounded-r-md hover:bg-purple-600 "
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>

    <div className=" mt-6">
      <p>2023 Funiro. All rights reserved</p>
    </div>
  </div>
</footer>
)
}

export default Footer



















    // 
    //     <div className=''>
    //         <div className='w-[1133.01px] h-[312px] top-[48px] left-[100px]'>
    //             <div>
    //                 <h1 className='w-[85px] h-[36px] top-[48px] left-[100px]
    //                                 font-Poppins font-bold text-2xl leading-9 text-black'>Funiro.</h1>

    //                 </div>

    //             <div>

    //             <p className='w-[285px] h-[72px] top-[134px] left-[102.01px]
    //                             font-Poppins font-normal text-base leading-6 text-[#9F9F9F]'>400 University Drive Suite 200 Coral Gables,FL 33134 </p>
                


    //                 <ul  className='w-[68px] h-[312px] top-[48px] left-[523.01px]'>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 <li></li>
    //                 </ul>
    //             </div>
    //             <div className=""></div>
    //             <div className=""></div>

    //         </div>
    //     </div>
    // </div>
        
      
    
  
