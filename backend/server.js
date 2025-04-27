const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/travel_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const destinationsRouter = require('./routes/destinations');
const activitiesRouter = require('./routes/activities');

app.use('/api/destinations', destinationsRouter);
app.use('/api/activities', activitiesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 