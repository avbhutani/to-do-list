const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// basically 
const app = express();
const cors = require('cors');
app.use(cors());
let list = [];
// This is the default route.n
// app.use('/',express.static('public\\mainpage'));
// app.use('/loginpage',express.static('public\\loginPage'));

app.use(bodyParser.json());
// Route to handle the POST request
app.post('/update', (req, res) => {
  // Access the data sent in the request body
  const postData = req.body;
//   console.log(postData.name);
  list.push(postData);
  console.log('Received data:', postData);
  res.send(list);
});


// Defining the port and making the server to listen.
const port = 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});