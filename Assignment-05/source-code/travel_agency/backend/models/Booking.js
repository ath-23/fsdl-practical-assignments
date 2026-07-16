const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  destinationTitle: { type: String, required: true },
  travelDate: { type: String, required: true },
  guests: { type: Number, default: 1 },
  bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);