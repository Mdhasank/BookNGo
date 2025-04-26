import mongoose from "mongoose"; 

const bookingSchema = new mongoose.Schema({
  movie: { type: String, required: true },
  timeSlot: { type: String, required: true },
  seats: [{ type: String, required: true }],
});


bookingSchema.index({ movie: 1, timeSlot: 1, seats: 1 }, { unique: true });

const Ticket = mongoose.model("Bookings", bookingSchema);
export default Ticket;
