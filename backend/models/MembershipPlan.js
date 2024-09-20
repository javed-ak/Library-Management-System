const mongoose = require('mongoose');

const membershipPlanSchema = new mongoose.Schema({
  planName: { type: String, required: true },
  duration: { type: Number, required: true }, // in days
  price: { type: Number, required: true },
});

const MembershipPlan = mongoose.model('MembershipPlan', membershipPlanSchema);
module.exports = MembershipPlan;
