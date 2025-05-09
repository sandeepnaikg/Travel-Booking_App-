const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  trips: [{
    type: Schema.Types.ObjectId,
    ref: 'Trip'
  }]
});

const User = mongoose.model('User', userSchema);
module.exports = User; 