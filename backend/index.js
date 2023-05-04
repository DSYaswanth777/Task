const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
app.use(cors({
    origin: '*'
  }));
app.use(bodyParser.json())
main().catch(err => console.log(err));
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/api-data")
    console.log('db connected')
}
// Define a schema for the data to be stored in the database
const dataSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: String,
  sex: String,
  mobileNumber: String,
  govtId: String,
  guardian: String,
  guardianDetail: String,
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
app.post("/api-data", async (req, res) => {
  let data = new Data()
  data.name = req.body.name
  data.dateOfBirth = req.body.dateOfBirth
  data.sex = req.body.sex
  data.email = req.body.email
  data.mobileNumber = req.body.mobileNumber
  data.city = req.body.city
  data.pinCode = req.body.pinCode
  data.religion = req.body.religion
  data.bloodGroup = req.body.bloodGroup
  data.nationality = req.body.nationality
  data.country = req.body.country
  data.govtId = req.body.govtId
  data.martialStatus = req.body.martialStatus
  data.emergencyContactNumber = req.body.emergencyContactNumber
  data.address = req.body.address
  data.state=req.body.state
  data.guardian=req.body.guardian
  data.guardianDetail =req.body.guardianDetail
  const doc = await data.save()
  console.log(doc)
  res.json(doc)
});

app.get('/api-data',async (req, res) =>{
    const docs = await Data.find({})
    res.json(docs)
})
// Start the server
app.listen(5000, () => console.log("Server started"));
