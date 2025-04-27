const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  destination: {
    type: Schema.Types.ObjectId,
    ref: 'Destination'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  travelers: { type: Number, required: true },
  travelType: { type: String, required: true }, // solo, couple, family, friends
  selectedActivities: [{
    type: Schema.Types.ObjectId,
    ref: 'Activity'
  }]
});

const Trip = mongoose.model('Trip', tripSchema);
module.exports = Trip; 