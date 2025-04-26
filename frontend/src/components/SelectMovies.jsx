import React, { useContext } from "react";
import { movieList } from "../data";
import { BookingContext } from "../context/BookingContext";

const SelectMovies = () => {
  const { selectedMovie, setSelectedMovie, setSelectedTimeSlots, setSelectedSeats } = useContext(BookingContext);

  const handleSelectMovie = (movieTitle) => {
    setSelectedMovie(movieTitle);
    setSelectedTimeSlots(null);  
    setSelectedSeats([]); 
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-white text-center">
        Select a Movie
      </h2>
      <div className="grid max-[410px]:grid-cols-1 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movieList.map((movie, index) => (
          <div
            key={index}
            onClick={() => handleSelectMovie(movie.title)}
            className={`relative cursor-pointer transition-all duration-200 hover:scale-105 rounded-lg overflow-hidden shadow-md ${
              selectedMovie === movie.title
                ? "ring-2 ring-blue-500 transform scale-105"
                : ""
            }`}
          >
            <div className="bg-gray-700">
              <div className="flex items-center justify-center h-96 bg-gray-700">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className=" aspect-w-3 aspect-h-4 w-full h-full"
                />
              </div>
            </div>
            <div className="p-3 bg-gray-900">
              <h3 className="font-medium text-white truncate">{movie.title}</h3>
              <div className="flex items-center mt-2">
                <div
                  className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                    selectedMovie === movie.title
                      ? "border-blue-500 bg-blue-500"
                      : "border-gray-400"
                  }`}
                >
                  {selectedMovie === movie.title && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-sm text-gray-300">Select</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectMovies;
