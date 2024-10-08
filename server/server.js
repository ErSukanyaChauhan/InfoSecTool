const express = require('express');
const request = require('request');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors()); // Enable CORS for all routes
// Serve the static files from the React app

app.get('/', (req, res) => {
  res.send('HASH is working!');
});



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
