// Import Express
const express = require("express");

// Create a new router
const router = express.Router();

// Define a GET route for '/users'
router.get("/users", (req, res) => {
  // Here, you would typically fetch users from your database and send them as a response
  res.send("Users endpoint");
});

// Export the router
module.exports = router;
