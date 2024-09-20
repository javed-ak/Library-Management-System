const express = require('express');
const cors = require('cors');

const app = express();

// Allow all origins (you can restrict this to your frontend's URL)
app.use(cors());

// Parse JSON bodies (for sending and receiving JSON data)
app.use(express.json());

// Your routes go here...
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5001; // Change to a different port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

