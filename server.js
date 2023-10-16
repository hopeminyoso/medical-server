const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/medical server';

// Create a new MongoDB client
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');

    // Access your MongoDB collections here
    const db = client.db('medical');
    const collection = db.collection('visits');

    // Perform database operations using the collection

    // Don't forget to close the connection when done
    client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Call the function to connect to MongoDB
connectToMongoDB();
