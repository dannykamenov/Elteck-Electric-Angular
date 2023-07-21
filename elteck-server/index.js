const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from any origin - adjust to your needs
app.use(cors());

// Your other middleware and route setup goes here...

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});