const mongoose = require('mongoose');

const dbURL = 'mongodb://localhost:27017/Medical Server';

// Connect to the MongoDB database
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to the MongoDB database');
});

module.exports = {
  dbURL,
};

