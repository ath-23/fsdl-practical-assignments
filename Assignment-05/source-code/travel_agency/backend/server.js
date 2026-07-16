const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

// Import models
const User = require('./models/User');
const Booking = require('./models/Booking');

// connecting ui to backend
const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect('mongodb://127.0.0.1:27017/odysseyDB')
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => console.error("❌ Connection Error:", err));

// Auth Routes (Signup & Login)
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    res.json({ status: 'ok', email: newUser.email });
  } catch (err) {
    res.status(400).json({ status: 'error', message: 'User already exists' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ status: 'error', message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    res.json({ status: 'ok', email: user.email });
  } else {
    res.status(401).json({ status: 'error', message: 'Invalid Credentials' });
  }
});

// Booking Route
app.post('/api/book', async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.json({ status: 'ok', booking: newBooking });
  } catch (err) {
    res.status(500).json({ status: 'error', message: 'Booking failed' });
  }
});

app.listen(5000, () => console.log('🚀 Server running on http://localhost:5000'));