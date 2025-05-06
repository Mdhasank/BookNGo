import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const SelectSeats = () => {
  const rows = ['A', 'B', 'C', 'D'];
  const columns = [1, 2, 3, 4, 5];
  const {
    selectedSeats,
    setSelectedSeats,
    bookedSeats,
    bookedSeatsLoading,
  } = useContext(BookingContext);

  const handleSeatSelection = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  // Skeleton placeholder seat
  const SkeletonSeat = () => (
    <div className="w-10 h-10 rounded-md bg-gray-700 animate-pulse"></div>
  );

  return (
    <div className="p-6 bg-gray-800 rounded-b-md">
      <h2 className="text-lg font-semibold text-center text-white mb-4">
        Select Seats
      </h2>

      <div className="flex justify-center mb-4">
        <div className="w-64 h-12 bg-gray-700 rounded-md text-center text-white py-2">
          🎬 Movie Screen
        </div>
      </div>

      {bookedSeatsLoading ? (
        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row} className="flex justify-center gap-3">
              {columns.map((col) => (
                <SkeletonSeat key={`${row}${col}`} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {rows.map((row) => (
            <div key={row} className="flex justify-center gap-3">
              {columns.map((col) => {
                const seat = `${row}${col}`;
                const isSelected = selectedSeats.includes(seat);
                const isBooked = bookedSeats.includes(seat);

                return (
                  <div
                    key={seat}
                    className={`w-10 h-10 flex items-center justify-center text-xs rounded-md cursor-pointer transition-all duration-200
                      ${isSelected ? 'bg-green-500 text-white' : ''}
                      ${isBooked ? 'bg-red-500 text-white cursor-not-allowed' : 'bg-gray-600 text-gray-300 hover:bg-gray-500'}`}
                    onClick={() => handleSeatSelection(seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-center text-sm text-gray-400">
        <p>🟢 Selected | ⚪ Available | 🔴 Booked</p>
      </div>
    </div>
  );
};

export default SelectSeats;
