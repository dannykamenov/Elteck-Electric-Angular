const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const mongo_uri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/elteck';
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