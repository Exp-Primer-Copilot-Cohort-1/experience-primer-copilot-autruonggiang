// Create web server
// 1. Create a web server
// 2. Define the port
// 3. Create a route
// 4. Listen on port
// 5. Create a route for comments
// 6. Send back comments

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Define the port
const port = 3000;

// 3. Create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 5. Create a route for comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

// 6. Send back comments
app.get('/comments', (req, res) => {
  res.send('This is the comments route');
});

// 4. Listen on port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});