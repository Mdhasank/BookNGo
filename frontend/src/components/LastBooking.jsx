import React, { useContext, useEffect } from 'react';
import { BookingContext } from '../context/BookingContext';

const LastBooking = () => {
  const { lastBooking, handleGetLastBooking } = useContext(BookingContext);

  useEffect(() => {
    handleGetLastBooking();
  }, []);

  return (
    <div className="flex flex-col p-3 bg-gray-800 rounded-md shadow-sm w-full text-sm text-gray-200">
      <h2 className="text-lg font-semibold text-center mb-3">Last Booking</h2>

      <div className="flex items-center justify-center bg-gray-900 p-3 rounded-md flex-grow-1">
        <div className="text-center space-y-2">
          {lastBooking ? (
            <>
              <div className="">
                <h3 className="font-medium sm:text-xl md:text-2xl">🎬 {lastBooking.movie}</h3>
                <p className="text-xs sm:text-sm md:text-md text-gray-400">
                  Time Slot: {lastBooking.timeSlot}
                </p>
              </div>

              <div>
                <p className="sm:text-md md:text-lg">🎟️ Seats: {lastBooking.seats}</p>
              </div>

              <div className="flex justify-center gap-6">
                <div>
                  <p className="text-xs sm:text-sm md:text-md font-medium">Booking ID</p>
                  <p>{lastBooking._id?.slice(-6).toUpperCase() || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm md:text-md font-medium">Status</p>
                  <p className="text-green-400">Confirmed</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-400 text-sm">No recent booking found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LastBooking;
