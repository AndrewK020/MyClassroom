const express = require('express');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;

// console.log that your server is up and running
app.listen(port, () => console.log(`🏹 Listening on port ${port}`));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});