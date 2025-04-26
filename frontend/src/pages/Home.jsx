import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import SelectMovies from "../components/SelectMovies";
import LastBooking from "../components/LastBooking";
import Schedule from "../components/Schedule";
import SelectSeats from "../components/SelectSeats";
import { BookingContext } from "../context/BookingContext";

const Home = () => {
  const context = useContext(BookingContext);
  const { 
    handlePostBooking, 
    selectedMovie, 
    selectedTimeSlots, 
    selectedSeats, 
    bookingSuccess,
    setBookingSuccess 
  } = context;

  const handleBookNow = () => {
    handlePostBooking();
  };

  useEffect(() => {
    if (bookingSuccess) {
      setTimeout(() => {
        setBookingSuccess(false);
      }, 3000);
    }
  }, [bookingSuccess, setBookingSuccess]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />
      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div>
          <SelectMovies />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-grow-1">
            <Schedule />
            <SelectSeats />
          </div>
          <div className="flex w-full md:w-1/2 lg:w-1/3">
            <LastBooking />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`px-32 py-3 font-semibold rounded-md transition ${
              !selectedMovie || !selectedTimeSlots || selectedSeats.length === 0
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-500"
            }`}
            onClick={handleBookNow}
            disabled={!selectedMovie || !selectedTimeSlots || selectedSeats.length === 0}
          >
            Book Now
          </button>
        </div>

        {/* Booking Success Popup */}
        {bookingSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-[#1a1a1a9e]">
            <div className="bg-white text-black p-6 rounded-lg">
              <h2 className="font-bold text-lg">Booking Successful!</h2>
              <p>Your booking has been confirmed.</p>
              <button
                onClick={() => setBookingSuccess(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
