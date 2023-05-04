const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
app.use(cors())
// Connect to the MongoDB database
mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for the data to be stored in the database
const dataSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: String,
  sex: String,
  mobileNumber: String,
  govtId: String,
  garudian: String,
  email: String,
  emergencyContactNumber: String,
  address: String,
  state: String,
  city: String,
  country: String,
  pinCode: String,
  religion: String,
  martialStatus: String,
  bloodGroup: String,
  nationality: String,
});

// Create a model for the data based on the schema
const Data = mongoose.model("Data", dataSchema);

// Use bodyParser middleware to parse JSON data
app.use(bodyParser.json());

// Define a route to handle the POST request
app.post("/api/data", async (req, res) => {
  try {
    // Create a new data object based on the submitted data
    const data = new Data(req.body);
    // Save the data to the database
    await data.save();
    // Send a success response to the client
    res.status(201).json({ message: "Data saved successfully" });
  } catch (error) {
    // Send an error response to the client
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(5000, () => console.log("Server started"));
