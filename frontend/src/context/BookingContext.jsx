import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [lastBooking, setLastBooking] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookedSeats, setBookedSeats] = useState([]);

  const handlePostBooking = async () => {
    const bookingData = {
      movie: selectedMovie,
      timeSlot: selectedTimeSlots,
      seats: selectedSeats,
    };
  
    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setLastBooking(data.booking);
        setBookingSuccess(true); 
        handleGetBookedSeats();
        resetSelections();
      } else {
        console.error("Error creating booking:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };
  

  const resetSelections = () => {
    setSelectedMovie(null);
    setSelectedTimeSlots(null);
    setSelectedSeats([]);
  };

  const handleGetLastBooking = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bookings", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setLastBooking(data);
      } else {
        console.error("Error fetching last booking:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching last booking:", error);
    }
  };

  const handleGetBookedSeats = async () => {
    if (!selectedMovie || !selectedTimeSlots) {
      console.error("Movie and time slot are required to fetch booked seats!");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/bookings/booked-seats?movie=${selectedMovie}&timeSlot=${selectedTimeSlots}`
      );
      const data = await response.json();
      setBookedSeats(data.bookedSeats || []);
    } catch (error) {
      console.error("Error fetching booked seats:", error);
    }
  }

  return (
    <BookingContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        selectedTimeSlots,
        setSelectedTimeSlots,
        selectedSeats,
        setSelectedSeats,
        lastBooking,
        setLastBooking,
        bookedSeats,
        setBookedSeats, 
        bookingSuccess,
        setBookingSuccess, 
        handlePostBooking,
        handleGetLastBooking,
        handleGetBookedSeats 
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
