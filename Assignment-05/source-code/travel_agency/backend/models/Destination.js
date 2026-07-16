const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageClass: String, 
  price: String,      
  duration: String    
});

module.exports = mongoose.model('Destination', destinationSchema);