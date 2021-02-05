const path = require('path');
// For every package added, you must import it in the file that you want to use it.
const express = require('express');
// calls the express function, which creates a new application and then assigns the result to the app constant
const app = express();

// Use the path
app.use(express.static(path.join(__dirname, 'public')));

// Creates a route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome WWW!' });
});

// // Serve the HTML File
// app.get('/', (req, res) => {
//   res.sendFile(`${__dirname}/public/index.html`);
// });

// Server listener
app.listen(8080, () => {
  console.log('Application is listening on port 8080');
  console.log('http://localhost:8080');
});

// Serving Static Assets such as HTML, CSS, JavaScript, Images
