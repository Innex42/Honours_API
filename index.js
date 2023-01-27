// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [
    { title: 'Hello, world (again)!' }
];



// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false }));

// enabling CORS for all requests
app.use(cors());




// starting the server
app.listen(3001, () => {
    console.log('listening on port 3001, Cancel Using Ctrl^C');
});