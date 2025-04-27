const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  flightDetails: {
    from: String,
    to: String,
    duration: String,
    price: Number
  },
  activities: [{
    type: Schema.Types.ObjectId,
    ref: 'Activity'
  }]
});

const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination; 