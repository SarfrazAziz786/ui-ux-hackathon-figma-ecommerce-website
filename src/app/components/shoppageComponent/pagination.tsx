import React from 'react'

const Pagination = () => {
    return (
      <div className="flex items-center space-x-2">
        {/* Page 1 (Active) */}
        <button className="w-10 h-10 bg-yellow-500 text-white font-bold rounded border border-yellow-500">
          1
        </button>
        
        {/* Page 2 */}
        <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded border border-gray-300">
          2
        </button>
        
        {/* Page 3 */}
        <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded border border-gray-300">
          3
        </button>
        
        {/* Next Button */}
        <button className="w-16 h-10 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded border border-gray-300">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  