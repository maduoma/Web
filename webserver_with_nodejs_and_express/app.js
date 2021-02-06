const path = require('path');
// For every package added, you must import it in the file that you want to use it.
const express = require('express');
// Calls the express function, which creates a new application and then assigns the result to the app constant
const app = express();

// Use the path
app.use(express.static(path.join(__dirname, 'public')));

// // Creates a route
// app.get('/', (req, res) => {
//   res.send({ message: 'Welcome WWW!' });
// });

// Serve the HTML File // Serving Static Assets such as HTML, CSS, JavaScript, Images
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

// Server listener
app.listen(8080, (err) => {
  if (err) throw err;
  console.log(`Application is listening on port 8080: http://localhost:8080`);
});
