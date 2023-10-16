// Import the necessary modules
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Retrieve the MongoDB URI from your .env file
const mongoURI = process.env.MONGO_URI;

// Establish the MongoDB connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // MongoDB driver deprecated the old URL string parser
  useUnifiedTopology: true, // Use the new server discovery and monitoring engine
});

// Get the default connection
const db = mongoose.connection;

// Handle MongoDB connection events
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Gracefully close the MongoDB connection when the Node.js process exits
process.on('SIGINT', () => {
  db.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});

