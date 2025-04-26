import express from "express";
import Ticket from "./schema.js";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.json());

// ✅ Create a booking (seats stored as an array)
router.post("/bookings", async (req, res) => {
  const { movie, timeSlot, seats } = req.body;

  try {
    // Ensure 'seats' is an array
    if (!Array.isArray(seats)) {
      return res.status(400).json({ message: "'seats' must be an array of strings." });
    }

    const newBooking = new Ticket({ movie, timeSlot, seats });
    await newBooking.save();

    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "These seats are already booked for this time slot." });
    } else {
      console.error("Error creating booking:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
});

// ✅ Get last booking details
router.get("/bookings", async (req, res) => {
  try {
    const bookings = await Ticket.find().sort({ _id: -1 }).limit(1);
    if (bookings.length > 0) {
      res.status(200).json(bookings[0]);
    } else {
      res.status(404).json({ message: "No bookings found" });
    }
  } catch (error) {
    console.error("Error fetching booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get booked seats for specific movie + time slot
router.get("/bookings/booked-seats", async (req, res) => {
  const { movie, timeSlot } = req.query;

  if (!movie || !timeSlot) {
    return res.status(400).json({ message: "Movie and time slot are required" });
  }

  try {
    const bookings = await Ticket.find({ movie, timeSlot });

    // Flatten all seat arrays into one array of strings
    const bookedSeats = bookings.flatMap(booking => booking.seats);

    res.status(200).json({ bookedSeats });
  } catch (error) {
    console.error("Error fetching booked seats:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
