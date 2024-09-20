const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  membershipType: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  expirationDate: { type: Date, required: true },
  notificationsSent: [Date],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
