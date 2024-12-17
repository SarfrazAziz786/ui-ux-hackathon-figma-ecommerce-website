import React from "react";
import Link from "next/link";
const OrderSummary = () => {
    return (
      <div className="w-[608px] h-[789px] mx-auto p-6 bg-white rounded-md shadow-md font-Poppins">
        {/* Product Details */}
        <div className="mb-4 border-b pb-4">
          <div className="flex justify-between text-black mb-2 font-medium text-2xl leading-9">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between font-medium text-base leading-6 text-black">
            <span className="text-[#9F9F9F]">Asgaard sofa <span>x1</span></span>
            <span>Rs. 250,000.00</span>
          </div>
        </div>
  
        {/* Total */}
        <div className="mb-6">
          <div className="flex justify-between text-black font-normal text-xs leading-6">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-normal text-black text-base leading-6">
            <span>Total</span>
            <span className="text-[#B88E2F]">Rs. 250,000.00</span>
          </div>
        </div>
  <hr />
        {/* Payment Options */}
        <div className="mb-6">
          <div className="space-y-2">
            {/* Direct Bank Transfer */}
            <label className="flex items-start space-x-2">
              <input
                type="radio"
                name="payment"
                defaultChecked
                className="mt-1"
              />
              <div>
                <span className="font-semibold">Direct Bank Transfer</span>
                <p className="text-sm text-gray-500">
                  Move your payment directly into our bank account. Please use your
                  Order ID as the payment reference. Your order will not be shipped
                  until funds have cleared.
                </p>
              </div>
            </label>
  
            <label className="flex items-center space-x-2 text-[#9F9F9F]">
              <input type="radio" name="payment" className="mt-1" />
              <span>Direct Bank Transfer</span>
            </label>
            <label className="flex items-center space-x-2 text-[#9F9F9F]">
              <input type="radio" name="payment" className="mt-1" />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>
  
        {/* Privacy Policy */}
        <p className="text-sm text-black mb-6">
          Your personal data will be used to support your experience throughout this
          website, to manage access to your account, and for other purposes described
          in our{' '}
          <a href="#" className="text-black font-medium underline">
            privacy policy
          </a>
          .
        </p>
  
        {/* Place Order Button */}
        <Link href={'/contact'}><button className="w-[318px] bg-white text-black py-2 rounded-[15px] hover:bg-black hover:text-white mx-20 border-2 border-black">
          Place order
        </button></Link>
      </div>
    );
  };
  
  export default OrderSummary;
  