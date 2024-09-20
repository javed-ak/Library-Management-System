const express = require('express');
const { registerUser, getUserDetails, updateMembership } = require('../controllers/userController');
const { protect } = require('../utils/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.get('/:id', protect, getUserDetails);
router.put('/:id/membership', protect, updateMembership);

module.exports = router;
