const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const config = require('./mongodb');
const mongo_uri = config.url;
const router = require('./router/router');


// Allow requests from any origin - adjust to your needs
app.use(express.json());
app.use(cors());
console.log(mongo_uri)
// Your other middleware and route setup goes here...
mongoose.connect(`${mongo_uri}`);
app.use('/api', router)
// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});