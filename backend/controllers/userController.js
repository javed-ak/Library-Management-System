const User = require('../models/User');

// Register new user
exports.registerUser = async (req, res) => {
  const { name, contact, email, membershipType, expirationDate } = req.body;

  try {
    const user = new User({
      name,
      contact,
      email,
      membershipType,
      expirationDate,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get user details
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update membership
exports.updateMembership = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.membershipType = req.body.membershipType;
    user.expirationDate = req.body.expirationDate;

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
