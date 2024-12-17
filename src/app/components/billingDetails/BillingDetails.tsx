import React from "react";

const BillingDetails = () => {
    return (
      <div className="w-[608px] h-[1200px]  p-6 bg-[#9F9F9F]   font-Poppins ">
        <h2 className="text-4xl leading-[54px] font-semibold text-black mb-6">Billing details</h2>
        <form>
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
          </div>
  
          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Company Name (Optional)</label>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
  
          {/* Country / Region */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Country / Region</label>
            <select
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option>Sri Lanka</option>
              <option>Pakistan</option>
              <option>India</option>
            </select>
          </div>
  
          {/* Street Address */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Street Address</label>
            <input
              type="text"
              placeholder="Street address"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
  
          {/* Town / City */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Town / City</label>
            <input
              type="text"
              placeholder="Town / City"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
  
          {/* Province */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Province</label>
            <select
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            >
              <option>Western Province</option>
              <option>Southern Province</option>
            </select>
          </div>
  
          {/* ZIP Code */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">ZIP Code</label>
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
  
          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
  
          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>
  
          {/* Additional Information */}
          <div className="mb-6">
            <label className="block text-gray-600 mb-2">Additional Information</label>
            <textarea
              rows={3}
              placeholder="Additional information"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-300"
            ></textarea>
          </div>
 
        </form>
      </div>
    );
  };
  
  export default BillingDetails;
  