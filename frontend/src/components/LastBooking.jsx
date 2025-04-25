import React from 'react';

const LastBooking = () => {
  return (
    <div className="flex  flex-col p-3 bg-gray-800 rounded-md shadow-sm w-full text-sm text-gray-200">
      <h2 className="text-lg font-semibold text-center mb-3">Last Booking</h2>

      <div className="flex  justify-center bg-gray-900 p-3 rounded-md flex-grow-1 ">
        <div className="text-center space-y-2">
          <div className='mt-5 md:mt-10'>
            <h3 className="font-medium sm:text-xl md:text-2xl">🎬 The Dark Knight</h3>
            <p className="text-xs sm:text-sm md:text-md text-gray-400">Date: Apr 12, 2025</p>
          </div>
          <div>
            <p className='sm:text-md md:text-lg'>👤 John Doe</p>
            <p className="text-xs sm:text-sm md:text-md text-gray-400">📧 john.doe@example.com</p>
          </div>
          <div className="flex justify-center gap-6">
            <div>
              <p className="text-xs sm:text-sm md:text-md font-medium">Booking ID</p>
              <p>#BK123456789</p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-md font-medium">Status</p>
              <p className="text-green-400">Confirmed</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2">
            <button className="px-3 py-1 md:px-5 md:py-2 bg-red-600 text-white rounded text-xs hover:bg-red-500">
              View
            </button>
            <button className="px-3 py-1 md:px-5 md:py-2 bg-gray-600 text-white rounded text-xs hover:bg-gray-500">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastBooking;
