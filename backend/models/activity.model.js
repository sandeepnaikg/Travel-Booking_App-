const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  duration: { type: String, required: true },
  price: { type: Number, required: true },
  time: { type: String, required: true },
  destination: {
    type: Schema.Types.ObjectId,
    ref: 'Destination'
  }
});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity; 