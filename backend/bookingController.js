router.get("/bookings/booked-seats", async (req, res) => {
  const { movie, timeSlot } = req.query;
  
  if (!movie || !timeSlot) {
    return res.status(400).json({ message: "Movie and time slot are required" });
  }

  try {
    // Fetch all bookings that match the movie and timeSlot
    const bookings = await Ticket.find({ movie, timeSlot });

    // Flatten all seat arrays into one array of strings
    const bookedSeats = bookings.flatMap(booking => booking.seats);

    res.status(200).json({ bookedSeats });
  } catch (error) {
    console.error("Error fetching booked seats:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
