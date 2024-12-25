import React from "react";

const ComparisonTable = () => {
  return (
    <div className="grid grid-cols-3 sm:gap-8 gap-3 p-4 sm:text-xl text-base leading-[25.3px] text-black   font-normal font-Poppins  ">
      {/* General Column */}
      
      <div className="col-span-3 ">
        <h3 className="font-medium mb-2 text-[28px] leading-[35.42px] ">General</h3>
    </div>
    <div>
        <p>Sales Package</p>
        <p>Model Number</p>
        <p>Secondary Material</p>
        <p>Configuration</p>
        <p>Upholstery Material</p>
        <p>Upholstery Color</p>
        </div>

      {/* Product 1 Column */}
      <div>
        <p>1 sectional sofa</p>
        <p>TFCBUSHS589HS</p>
        <p>Solid Wood</p>
        <p>L-shaped</p>
        <p>Fabric + Cotton</p>
        <p>Bright Grey & Lion</p>
      </div>

      {/* Product 2 Column */}
      <div>
        <p>1 Three Seater, 2 Single Sector</p>
        <p>DTBUSHS589S</p>
        <p>Solid Wood</p>
        <p>L-shaped</p>
        <p>Fabric + Cotton</p>
        <p>Bright Grey & Lion</p>
      </div>

      <div className="col-span-3">
        <h3 className="font-medium mb-2 text-[28px] leading-[35.42px] ">Product</h3>
      </div>

      {/* Product Labels (Column 1) */}
      <div>
        <p>Filling Material</p>
        <p>Finish Type</p>
        <p>Adjustable Headrest</p>
        <p>Maximum Load Capacity</p>
        <p>Origin of Manufacture</p>
      </div>

      {/* Product 1 (Column 2) */}
      <div>
        <p>Foam</p>
        <p>Bright Grey & Lion</p>
        <p>No</p>
        <p>280 KG</p>
        <p>India</p>
      </div>

      {/* Product 2 (Column 3) */}
      <div>
        <p>Matte</p>
        <p>Bright Grey & Lion</p>
        <p>Yes</p>
        <p>300 KG</p>
        <p>India</p>
      </div>

      {/* Dimensions  */}
      <div className="col-span-3 mt-6">
        <h3 className="font-medium mb-2 text-[28px] leading-[35.42px]  ">Dimensions</h3>
      </div>

      {/* Dimensions Labels (Column 1) */}
      <div>
        <p>Width</p>
        <p>Height</p>
        <p>Depth</p>
        <p>Weight</p>
        <p>Seat Height</p>
        <p>Leg Height</p>
      </div>

      {/* Dimensions Product 1 (Column 2) */}
      <div>
        <p>265.32 cm</p>
        <p>76 cm</p>
        <p>167.76 cm</p>
        <p>45 KG</p>
        <p>41.52 cm</p>
        <p>5.46 cm</p>
      </div>

      {/* Dimensions Product 2 (Column 3) */}
      <div>
        <p>265.32 cm</p>
        <p>76 cm</p>
        <p>167.76 cm</p>
        <p>65 KG</p>
        <p>41.52 cm</p>
        <p>5.46 cm</p>
      </div>

      {/* Warranty  */}
      <div className="col-span-3 mt-6">
        <h3 className="font-medium mb-2 text-[28px] leading-[35.42px]  ">Warranty</h3>
      </div>

      {/* Warranty  (Column 1) */}
      <div>
        <p>Warranty Summary</p>
        <p>Warranty Service Type</p>
        <p>Covered in Warranty</p>
        <p>Not Covered in Warranty</p>
        <p>Domestic Warranty</p>
      </div>

      {/* Warranty (Column 2) */}
      <div>
        <p>1 Year Manufacturing Warranty</p>
        <p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
        <p>Warranty Against Manufacturing Defect</p>
        <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
        <p>1 Year</p>
      </div>

      {/* Warranty  (Column 3) */}
      <div>
        <p>1.2 Year Manufacturing Warranty</p>
        <p>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</p>
        <p>Warranty of the product is limited to manufacturing defects only.</p>
        <p>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</p>
        <p>3 Months</p>
      </div>

        <div></div>
        <div > 
        <button className="sm:w-[215px] w-full h-10 rounded-lg sm:h-[64px] bg-[#B88E2F]">Add To Cart</button>

        </div>
        <div>
        <button className="sm:w-[215px] sm:h-[64px] w-full h-10 rounded-lg bg-[#B88E2F]">Add To Cart</button>

        </div>



    </div>
  );
};

export default ComparisonTable;
