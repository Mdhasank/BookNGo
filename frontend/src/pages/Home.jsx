import React from "react";
import Header from "../components/Header";
import SelectMovies from "../components/SelectMovies";
import LastBooking from "../components/LastBooking";
import Schedule from "../components/Schedule";
import SelectSeats from "../components/SelectSeats";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <Header />

      <div className="max-w-[1460px] mx-auto px-4 sm:px-6 py-6 space-y-6">
        <div>
          <SelectMovies />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className=" flex-grow-1">
            <Schedule />
            <SelectSeats />
          </div>
          <div className="flex w-full  md:w-1/2 lg:w-1/3">
            <LastBooking />
          </div>
        </div>

        <div className="flex justify-center">
          <button className="px-32 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
