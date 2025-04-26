import React, { useContext, useState, useEffect } from 'react';
import { BookingContext } from '../context/BookingContext';
import { timeSlots } from '../data';

const Schedule = () => {
  const { selectedMovie, selectedTimeSlots, setSelectedTimeSlots, setBookedSeats,backendURL } = useContext(BookingContext);

 
  const fetchBookedSeats = async (timeSlot) => {
    if (!selectedMovie) {
      console.error('No movie selected!');
      return;
    }
    
    try {
      const response = await fetch(
        `${backendURL}/api/bookings/booked-seats?movie=${selectedMovie}&timeSlot=${timeSlot}`
      );
      const data = await response.json();
      setBookedSeats(data.bookedSeats || []);
    } catch (error) {
      console.error('Error fetching booked seats:', error);
    }
  };

  const handleSelectTime = (time) => {
    setSelectedTimeSlots(time);
    fetchBookedSeats(time);

  };

  return (
    <div className="p-3 bg-gray-800 rounded-t-md h-fit relative">
      <h2 className="text-lg font-semibold text-center mb-3 text-white">Select Showtime</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {timeSlots.map((showtime, index) => (
          <button
            key={index}
            onClick={() => handleSelectTime(showtime)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
              ${selectedTimeSlots === showtime
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-blue-600 hover:text-white'
              }`}
          >
            {showtime}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
