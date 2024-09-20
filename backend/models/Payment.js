const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amountPaid: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  membershipType: { type: String, required: true },
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
