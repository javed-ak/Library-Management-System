const User = require('../models/User');
const sendSMS = require('../utils/sendSMS');

// Send notification to users whose memberships are expiring soon
exports.sendNotification = async (req, res) => {
  try {
    const soonExpiringUsers = await User.find({
      expirationDate: {
        $gte: new Date(),
        $lte: new Date(new Date().setDate(new Date().getDate() + 3)),
      },
    });

    soonExpiringUsers.forEach(user => {
      sendSMS(user.contact, 'Your membership is expiring soon!');
      user.notificationsSent.push(new Date());
      user.save();
    });

    res.json({ message: 'Notifications sent' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
