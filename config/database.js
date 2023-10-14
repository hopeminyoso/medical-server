const mongoose = require('mongoose');

// MongoDB connection URL
const dbURL = 'mongodb://localhost:27017/medical';

// Connect to the MongoDB database
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Export the Mongoose connection
module.exports = mongoose.connection;
