const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000; // Set your preferred port

// Import database configuration
const db = require('./config/database');

// Connect to the MongoDB database
mongoose.connect(db.dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to the MongoDB database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Middleware to parse JSON requests
app.use(express.json());

// Import and use your patient and visit routes
const patientRoutes = require('./routes/patientRoutes');
const visitRoutes = require('./routes/visitRoutes');

app.use('/api/patients', patientRoutes);
app.use('/api/visits', visitRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

