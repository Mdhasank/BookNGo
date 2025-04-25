import React from 'react';

const RadioComponent = ({ movie }) => {
  return (
    <div className="flex items-center cursor-pointer hover:bg-gray-700 rounded-md px-2 py-1 text-sm">
      <input
        type="radio"
        id={movie}
        name="movie"
        value={movie}
        className="w-4 h-4 text-blue-500 border-gray-300"
      />
      <label htmlFor={movie} className="ml-2 text-gray-300">{movie}</label>
    </div>
  );
};

export default RadioComponent;
