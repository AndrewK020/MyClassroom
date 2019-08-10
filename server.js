/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

const port = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MyClassroom");

app.listen(port, () => console.log(`🏹 Listening on port ${port}`));