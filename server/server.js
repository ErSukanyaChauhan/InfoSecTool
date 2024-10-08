const express = require('express');
const request = require('request');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors()); // Enable CORS for all routes
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  const hash = req.params.hash;
  const options = {
    url: `http://www.virustotal.com/api/v3/files/${hash}`,
    headers: {
      accept: 'application/json',
      'x-apikey': '4a812c43e5c6d22664cba618b14df7830dac5979759fa6b447ac9d3a6b8a22cd'
    }
  };
  res.send('HASH is working Hello, from server side!');
  request(options).pipe(res);
});

// Handles any requests that don't match the ones above
// app.get('/', (req, res) => {
//   res.send('Hello, from server side!');
// });

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
