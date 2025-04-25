import React, { useState } from 'react';

const SelectSeats = () => {
  const rows = ['A', 'B', 'C', 'D'];
  const columns = [1, 2, 3, 4, 5];
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div className="p-6 bg-gray-800 rounded-b-md">
      <h2 className="text-lg font-semibold text-center text-white mb-4">Select Seats</h2>

      {/* Movie Screen Section */}
      <div className="flex justify-center mb-4">
        <div className="w-64 h-12 bg-gray-700 rounded-md text-center text-white py-2">
          🎬 Movie Screen
        </div>
      </div>

      {/* Seating Layout */}
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row} className="flex justify-center gap-3">
            {columns.map((col) => {
              const seat = `${row}${col}`;
              const isSelected = selectedSeats.includes(seat);
              return (
                <div
                  key={seat}
                  className={`w-10 h-10 flex items-center justify-center text-xs rounded-md cursor-pointer transition-all duration-200
                    ${isSelected ? 'bg-green-500 text-white' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}
                  onClick={() => handleSeatSelection(seat)}
                >
                  {seat}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Seat Status */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>🟢 Selected | ⚪ Available | 🔴 Unavailable</p>
      </div>
    </div>
  );
};

export default SelectSeats;
