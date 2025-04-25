import React, { useState } from 'react';
import { timeSlots } from '../data';

const Schedule = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="p-3 bg-gray-800 rounded-t-md h-fit">
      <h2 className="text-lg font-semibold text-center mb-3 text-white">Select Showtime</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {timeSlots.map((showtime, index) => (
          <button
            key={index}
            onClick={() => handleSelectTime(showtime)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
              ${
                selectedTime === showtime
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
