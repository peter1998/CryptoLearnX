// server.js

// Import the necessary packages
const express = require("express");
const bodyParser = require("body-parser");

// Create an instance of express
const app = express();

// Use the body-parser middleware to handle JSON requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a simple route for testing
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
